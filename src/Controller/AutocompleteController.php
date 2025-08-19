<?php

namespace App\Controller;

use App\Entity\Client;
use App\Manager\ClientManager;
use Doctrine\Common\Collections\ArrayCollection;
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
        if ($this->getUser()){
            $clients = $clientManager->autocompleteSearch($search);
        }else {
            $filteredClients = $request->getSession()->get('clients', new ArrayCollection())
                        ->filter(function (Client $client) use ($search) {
                            return $client->getName() !== null && str_contains($client->getName(), $search);
                        })->toArray();
            dump($filteredClients);
            $clients = array_map(static fn(Client $client): array => ['value' => $client->getName(), 'text' => $client->getName()] , $filteredClients);
            $clients = array_values($clients);
            dump($clients);
        }
        return $this->json(["items" => $clients]);
    }

    #[Route('/client/data/{name}', name: 'client_data', options: ['expose' => true])]
    public function getClientData(Request $request, ClientManager $clientManager, ?string $name = null): JsonResponse
    {
        if ($this->getUser()) {
            $client = $clientManager->findOneBy([
                'name' => $name,
                'clientOf' => $this->getUser()
            ]);
        } else {
            $filteredClients = $request->getSession()->get('clients', new ArrayCollection())
                ->filter(function (Client $client) use ($name) {
                    return $client->getName() === $name;
                });
            dump($filteredClients);
            $client = $filteredClients->first();
        }
        return $this->json($client,200, [], ['groups' => 'read']);
    }

}