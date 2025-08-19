<?php

namespace App\Controller;

use App\Entity\Devis;
use App\Form\DevisForm;
use App\Handler\DevisHandler;
use App\Manager\DevisManager;
use App\Repository\DevisRepository;
use App\Security\Voter\ResourceAccessVoter;
use App\Service\DevisPdfManager;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/admin/devis')]
final class DevisController extends AbstractController
{
    public function __construct(
        private readonly DevisManager $devisManager,
        private readonly DevisPdfManager $devisPdfManager,
        private readonly DevisHandler $devisHandler,
    )
    {
    }
    #[Route(name: 'app_devis_index', methods: ['GET'])]
    public function index(Request $request): Response
    {
        if ($this->getUser()){
            $devis = $this->devisManager->findBy(['author' => $this->getUser()]);
        }else {
            $devis = $request->getSession()->get('devis', new ArrayCollection());
        }

        return $this->render('devis/index.html.twig', [
            'devis' => $devis,
        ]);
    }

    #[Route('/new', name: 'app_devis_new', methods: ['GET', 'POST'])]
    public function new(Request $request): Response
    {
        $user = $this->getUser() ?: $request->getSession()->get('user');
        $devi = new Devis();
        $devi->setAuthor($user);
        $form = $this->createForm(DevisForm::class, $devi);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $this->devisHandler->handle($devi, $form, true);
            return $this->redirectToRoute('app_devis_show', ['reference' => $devi->getReference()]);
        }

        return $this->render('devis/new.html.twig', [
            'devi' => $devi,
            'form' => $form,
        ]);
    }

    #[Route('/{reference}', name: 'app_devis_show', methods: ['GET'])]
    public function show(Request $request, string $reference): Response
    {
        if ($this->getUser()){
            $devi = $this->devisManager->findOneBy(['author' => $this->getUser(), 'reference' => $reference]);
        }else {
            $devi = $request->getSession()->get('devis', new ArrayCollection())->get($reference);
        }
        if (!$this->isGranted(ResourceAccessVoter::VIEW, $devi)){
            $this->createAccessDeniedException();
        }
        return $this->render('devis/show.html.twig', [
            'devi' => $devi,
        ]);
    }

    #[Route('/{reference}/edit', name: 'app_devis_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, string $reference): Response
    {
        if ($this->getUser()){
            $devi = $this->devisManager->findOneBy(['author' => $this->getUser(), 'reference' => $reference]);
        }else {
            $devi = $request->getSession()->get('devis', new ArrayCollection())->get($reference);
        }

        if (!$this->isGranted(ResourceAccessVoter::EDIT, $devi)){
            $this->createAccessDeniedException();
        }

        $form = $this->createForm(DevisForm::class, $devi);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->devisHandler->handle($devi, $form);

            return $this->redirectToRoute('app_devis_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('devis/edit.html.twig', [
            'devi' => $devi,
            'form' => $form,
        ]);
    }

    #[Route('/{reference}/delete', name: 'app_devis_delete', methods: ['POST'])]
    public function delete(Request $request, string $reference): Response
    {
        if ($this->getUser()){
            $devi = $this->devisManager->findOneBy(['author' => $this->getUser(), 'reference' => $reference]);
        }else {
            $devi = $request->getSession()->get('devis', new ArrayCollection())->get($reference);
        }

        if (!$this->isGranted(ResourceAccessVoter::DELETE, $devi)){
            $this->createAccessDeniedException();
        }

        if ($this->isCsrfTokenValid('delete'.$devi->getReference(), $request->getPayload()->getString('_token'))) {
            $this->devisHandler->delete($devi);
        }

        return $this->redirectToRoute('app_devis_index', [], Response::HTTP_SEE_OTHER);
    }

    #[Route('/{reference}/pdf', name: 'app_devis_download')]
    public function downloadPdf(Request $request, string $reference): BinaryFileResponse
    {
        if ($this->getUser()){
            $devis = $this->devisManager->findOneBy(['author' => $this->getUser(), 'reference' => $reference]);
        }else {
            $devis = $request->getSession()->get('devis', new ArrayCollection())->get($reference);
        }

        if ( !$this->isGranted(ResourceAccessVoter::VIEW, $devis) ||
            ( $this->getUser() && $this->getUser()->getId() !== $devis->getAuthor()?->getId())
        ){
            $this->createAccessDeniedException();
        }
        $path = $this->devisPdfManager->getPdfPath($devis);

        if (!$path || !file_exists($path)) {
            throw $this->createNotFoundException('PDF non disponible.');
        }

        return $this->file($path);
    }
}
