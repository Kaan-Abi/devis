<?php

namespace App\Manager;

use App\Entity\Client;
use App\Entity\Devis;
use App\Entity\User;
use App\Repository\ClientRepository;

class ClientManager extends AbstractManager
{
    public function getEntityClass(): string
    {
        return Client::class;
    }

    public function autocompleteSearch(string $query): array
    {
        /** @var User $user */
        $user = $this->security->getUser();
        /** @var ClientRepository $repo */
        $repo = $this->getRepository();

        return $repo->findBySearchQuery($query, $user)
            ->select(['client.name as value', 'client.name as text'])
            ->getQuery()
            ->getArrayResult();
    }

    public function updateClientFromDevisForm(Devis $devis, ?int $clientId): ?Client
    {
        if($clientId){
            $client = $this->find($clientId);
            if ($client){
                // Update the clients info from this form
                $this->mergeObjects($devis->getClient(),$client);
                $devis->setClient($client);
            }
        }else {
            $client = $devis->getClient();
            $client?->setClientOf($this->security->getUser());
        }
        return $client;
    }
}
