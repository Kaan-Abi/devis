<?php

namespace App\Controller;

use App\Entity\Client;
use App\Form\ClientForm;
use App\Repository\ClientRepository;
use App\Security\Voter\ResourceAccessVoter;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/admin/client')]
final class ClientController extends AbstractController
{
    public function __construct(private readonly EntityManagerInterface $entityManager)
    {
    }
    #[Route(name: 'app_client_index', methods: ['GET'])]
    public function index(Request $request,ClientRepository $clientRepository): Response
    {
        if ($this->getUser()){
            $clients = $clientRepository->findBy(['clientOf' => $this->getUser()]);
        }else{
            $clients = $request->getSession()->get('clients', new ArrayCollection());
        }
        return $this->render('client/index.html.twig', [
            'clients' => $clients,
        ]);
    }

    #[Route('/new', name: 'app_client_new', methods: ['GET', 'POST'])]
    public function new(Request $request): Response
    {
        $client = new Client();
        $client->setClientOf($this->getUser());
        $form = $this->createForm(ClientForm::class, $client);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($client);
            $this->entityManager->flush();

            return $this->redirectToRoute('app_client_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('client/new.html.twig', [
            'client' => $client,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_client_show', methods: ['GET'])]
    #[IsGranted(ResourceAccessVoter::VIEW,'client')]
    public function show(Client $client): Response
    {
        return $this->render('client/show.html.twig', [
            'client' => $client,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_client_edit', methods: ['GET', 'POST'])]
    #[IsGranted(ResourceAccessVoter::EDIT,'client')]
    public function edit(Request $request, Client $client): Response
    {
        $form = $this->createForm(ClientForm::class, $client);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();

            return $this->redirectToRoute('app_client_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('client/edit.html.twig', [
            'client' => $client,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_client_delete', methods: ['POST'])]
    #[IsGranted(ResourceAccessVoter::DELETE,'client')]
    public function delete(Request $request, Client $client): Response
    {
        if ($this->isCsrfTokenValid('delete'.$client->getId(), $request->getPayload()->getString('_token'))) {
            $this->entityManager->remove($client);
            $this->entityManager->flush();
        }

        return $this->redirectToRoute('app_client_index', [], Response::HTTP_SEE_OTHER);
    }
}
