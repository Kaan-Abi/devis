<?php

namespace App\Handler;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class UserSettingsHandler
{
    private SessionInterface $session;
    public function __construct(
        private readonly EntityManagerInterface $entityManager,
        private readonly RequestStack $requestStack,
        private readonly Security $security
    )
    {
        $this->session = $this->requestStack->getSession();
    }
    public function handle(User $user): void
    {
        if($this->security->getUser()){
            $this->entityManager->flush();
        }else {
            $this->session->set('user', $user);
        }
    }

}