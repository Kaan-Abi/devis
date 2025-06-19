<?php

namespace App\Controller;

use App\Form\UserForm;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/admin/settings', name: 'app_settings_')]
final class SettingsController extends AbstractController
{
    public function __construct(private readonly EntityManagerInterface $entityManager)
    {

    }
    #[Route('/', name: 'index')]
    public function index(Request $request): Response
    {
        $form = $this->createForm(UserForm::class, $this->getUser());
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()){
            $this->entityManager->flush();
            $this->addFlash('success', 'user_infos_saved_successfully');
        }
        return $this->render('settings/index.html.twig', [
            'form' => $form
        ]);
    }
}
