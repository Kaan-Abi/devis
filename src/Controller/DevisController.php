<?php

namespace App\Controller;

use App\Entity\Devis;
use App\Form\DevisForm;
use App\Manager\ClientManager;
use App\Repository\DevisRepository;
use App\Service\DevisPdfManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

#[Route('/admin/devis')]
final class DevisController extends AbstractController
{
    public function __construct(
        private readonly EntityManagerInterface $entityManager
    )
    {
    }
    #[Route(name: 'app_devis_index', methods: ['GET'])]
    public function index(DevisRepository $devisRepository): Response
    {
        return $this->render('devis/index.html.twig', [
            'devis' => $devisRepository->findAll(),
        ]);
    }

    /**
     * @throws SyntaxError
     * @throws RuntimeError
     * @throws LoaderError
     */
    #[Route('/new', name: 'app_devis_new', methods: ['GET', 'POST'])]
    public function new(Request $request, ClientManager $clientManager, DevisPdfManager $devisPdfManager): Response
    {
        $user = $this->getUser();
        $devi = new Devis();
        $devi->setAuthor($user);
        $form = $this->createForm(DevisForm::class, $devi);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            if($form->get('client_id')->getData()){
                $client = $clientManager->find($form->get('client_id')->getData());
                // Update the clients info from this form
                $clientManager->mergeObjects($devi->getClient(),$client);
                $devi->setClient($client);
            }else {
                $client = $devi->getClient();
                $client->setClientOf($this->getUser());
            }
            $deviLines = $form->get('content')->getData();
            $devi->setContent($deviLines);

            $this->entityManager->persist($devi);
            $this->entityManager->flush();

            $devisPdfManager->generate($devi);

            return $this->redirectToRoute('app_devis_show', ['id' => $devi->getId()]);
        }

        return $this->render('devis/new.html.twig', [
            'devi' => $devi,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_devis_show', methods: ['GET'])]
    public function show(Devis $devi): Response
    {
        return $this->render('devis/show.html.twig', [
            'devi' => $devi,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_devis_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Devis $devi, ClientManager $clientManager): Response
    {
        $form = $this->createForm(DevisForm::class, $devi);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            if($form->get('client_id')->getData()){
                $client = $clientManager->find($form->get('client_id')->getData());
                // Update the clients info from this form
                $clientManager->mergeObjects($devi->getClient(),$client);
                $devi->setClient($client);
            }else {
                $client = $devi->getClient();
                $client->setClientOf($this->getUser());
            }
            $deviLines = $form->get('content')->getData();
            $devi->setContent($deviLines);
            $this->entityManager->flush();

            return $this->redirectToRoute('app_devis_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('devis/edit.html.twig', [
            'devi' => $devi,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_devis_delete', methods: ['POST'])]
    public function delete(Request $request, Devis $devi): Response
    {
        if ($this->isCsrfTokenValid('delete'.$devi->getId(), $request->getPayload()->getString('_token'))) {
            $this->entityManager->remove($devi);
            $this->entityManager->flush();
        }

        return $this->redirectToRoute('app_devis_index', [], Response::HTTP_SEE_OTHER);
    }

    #[Route('/{id}/pdf', name: 'app_devis_download')]
    public function downloadPdf(Devis $devis, DevisPdfManager $devisPdfManager): BinaryFileResponse
    {
        if ($this->getUser()->getId() !== $devis->getAuthor()->getId()){
            $this->createAccessDeniedException();
        }
        $path = $devisPdfManager->getPdfPath($devis);

        if (!$path || !file_exists($path)) {
            throw $this->createNotFoundException('PDF non disponible.');
        }

        return $this->file($path);
    }
}
