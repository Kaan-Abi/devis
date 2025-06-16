<?php

namespace App\Manager;

use App\Entity\Client;

class ClientManager extends AbstractManager
{

    public function getEntityClass(): string
    {
        return Client::class;
    }

    public function searchForExistingClient(Client $client): Client
    {
        //TODO: faire cette fonction
    }
}
