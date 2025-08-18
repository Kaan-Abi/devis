<?php

namespace App\Manager;

use App\Entity\Devis;

class DevisManager extends AbstractManager
{

    public function getEntityClass(): string
    {
        return Devis::class;
    }
}