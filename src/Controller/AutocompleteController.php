<?php

namespace App\Controller;

use App\Entity\Client;
use App\Manager\ClientManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;

#[Route(path:'/autocomplete', name: 'autocomplete_')]
class AutocompleteController extends AbstractController
{

    #[Route('/clients', name: 'client', options: ['expose' => true])]
    public function autocompleteClient(Request $request, ClientManager $clientManager): JsonResponse
    {
        $search = $request->query->get('q', '');
        $clients = $clientManager->autocompleteSearch($search);
        return $this->json(["items" => $clients]);
    }

    #[Route('/client/data/{name}', name: 'client_data', options: ['expose' => true])]
    public function getClientData(Request $request, Client $client): JsonResponse
    {
        return $this->json($client,200, [], ['groups' => 'read']);
    }

}