<?php

namespace App\Manager;

use App\Entity\Client;
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

    public function searchForExistingClient(Client $client): Client
    {
        //TODO: faire cette fonction
    }
}
