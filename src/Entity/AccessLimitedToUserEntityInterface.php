<?php

namespace App\Entity;

interface AccessLimitedToUserEntityInterface
{
    public function getUser(): User;
}
