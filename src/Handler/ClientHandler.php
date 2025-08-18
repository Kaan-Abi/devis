<?php

namespace App\Handler;

use App\Entity\Client;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class ClientHandler
{
    private SessionInterface $session;
    public function __construct(
        private readonly EntityManagerInterface $entityManager,
        private readonly Security $security,
        private readonly RequestStack $requestStack,
    )
    {
        $this->session = $this->requestStack->getSession();
    }
    public function handle(Client $client, bool $new = false): void
    {
        if ($this->security->getUser()){
            $this->entityManager->persist($client);
            $this->entityManager->flush();
        }else {
            if ($new){
                $client->generateUniqueIdentifier();
            }
            /** @var ArrayCollection $clientsFromSession */
            $clientsFromSession = $this->session->get('clients', new ArrayCollection());
            $clientsFromSession->set($client->getUniqueIdentifier(), $client);
            $this->session->set('clients', $clientsFromSession);
        }
    }

    public function delete(Client $client): void
    {
        if ($this->security->getUser()){
            $this->entityManager->remove($client);
            $this->entityManager->flush();
        }else {
            /** @var ArrayCollection $clientsFromSession */
            $clientsFromSession = $this->session->get('clients', new ArrayCollection());
            $clientsFromSession->remove($client->getUniqueIdentifier());
            $this->session->set('clients', $clientsFromSession);
        }
    }
}