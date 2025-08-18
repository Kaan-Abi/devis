<?php

namespace App\Controller;

use App\Entity\Client;
use App\Form\ClientForm;
use App\Handler\ClientHandler;
use App\Manager\ClientManager;
use App\Security\Voter\ResourceAccessVoter;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/admin/client')]
final class ClientController extends AbstractController
{
    public function __construct(
        private readonly ClientHandler $clientHandler,
        private readonly ClientManager $clientManager,
    )
    {
    }
    #[Route(name: 'app_client_index', methods: ['GET'])]
    public function index(Request $request): Response
    {
        if ($this->getUser()){
            $clients = $this->clientManager->findBy(['clientOf' => $this->getUser()]);
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
            $this->clientHandler->handle($client, true);

            return $this->redirectToRoute('app_client_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('client/new.html.twig', [
            'client' => $client,
            'form' => $form,
        ]);
    }

//    #[Route('/{id}', name: 'app_client_show', methods: ['GET'])]
//    #[IsGranted(ResourceAccessVoter::VIEW,'client')]
//    public function show(Client $client): Response
//    {
//        return $this->render('client/show.html.twig', [
//            'client' => $client,
//        ]);
//    }

    #[Route('/{uniqueIdentifier}/edit', name: 'app_client_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, string $uniqueIdentifier): Response
    {
        if ($this->getUser()){
            $client = $this->clientManager->findOneBy(['clientOf' => $this->getUser(), 'uniqueIdentifier' => $uniqueIdentifier]);
        }else{
            $client = $request->getSession()->get('clients', new ArrayCollection())->get($uniqueIdentifier);
        }

        if (!$this->isGranted(ResourceAccessVoter::EDIT, $client)){
            $this->createAccessDeniedException();
        }

        $form = $this->createForm(ClientForm::class, $client);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->clientHandler->handle($client);

            return $this->redirectToRoute('app_client_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('client/edit.html.twig', [
            'client' => $client,
            'form' => $form,
        ]);
    }

    #[Route('/{uniqueIdentifier}/delete', name: 'app_client_delete', methods: ['POST'])]
    public function delete(Request $request, string $uniqueIdentifier): Response
    {
        if ($this->getUser()){
            $client = $this->clientManager->findOneBy(['clientOf' => $this->getUser(), 'uniqueIdentifier' => $uniqueIdentifier]);
        }else{
            $client = $request->getSession()->get('clients', new ArrayCollection())->get($uniqueIdentifier);
        }

        if (!$this->isGranted(ResourceAccessVoter::DELETE, $client)){
            $this->createAccessDeniedException();
        }

        if ($this->isCsrfTokenValid('delete'.$client->getUniqueIdentifier(), $request->getPayload()->getString('_token'))) {
            $this->clientHandler->delete($client);
        }

        return $this->redirectToRoute('app_client_index', [], Response::HTTP_SEE_OTHER);
    }
}
