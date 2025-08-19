<?php

namespace App\Handler;


use App\Entity\Devis;
use App\Manager\ClientManager;
use App\Service\DevisPdfManager;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class DevisHandler
{
    private SessionInterface $session;
    public function __construct(
        private readonly ClientManager $clientManager,
        private readonly EntityManagerInterface $entityManager,
        private readonly DevisPdfManager $devisPdfManager,
        private readonly Security $security,
        private readonly RequestStack $requestStack,
    )
    {
        $this->session = $this->requestStack->getSession();
    }
    public function handle(Devis $devi, FormInterface $form, bool $new = false): void
    {
        $client = $this->clientManager->updateClientFromDevisForm($devi,(int) $form->get('client_uniqueIdentifier')->getData());

        $deviLines = $form->get('content')->getData();
        $devi->setContent($deviLines);

        if ($new){
            $devi->setCreatedAt();
            $devi->generateReference();
        }

        if (!$new){
            $devi->setUpdatedAt();
        }


        $this->devisPdfManager->generate($devi);

        // If user logged save in database else save in session
        if ($this->security->getUser()){
            $this->entityManager->persist($devi);
            $this->entityManager->flush();
        }else {
            /** @var ArrayCollection $devisFromSession */
            $devisFromSession = $this->session->get('devis', new ArrayCollection());
            $devisFromSession->set($devi->getReference(), $devi);
            $this->session->set('devis', $devisFromSession);

            // Update the client list in session also
            if ($client){
                $clientsFromSession = $this->session->get('clients', new ArrayCollection());
                $clientsFromSession->set($client->getName(), $client);
                $this->session->set('clients', $clientsFromSession);
            }
        }
    }

    public function delete(Devis $devis): void
    {
        $this->devisPdfManager->deletePdf($devis);

        if ($this->security->getUser()){
            $this->entityManager->remove($devis);
            $this->entityManager->flush();
        }else {
            /** @var ArrayCollection $devisFromSession */
            $devisFromSession = $this->session->get('devis', new ArrayCollection());
            $devisFromSession->remove($devis->getReference());
            $this->session->set('devis', $devisFromSession);
        }
    }
}