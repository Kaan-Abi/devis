<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserForm;
use App\Handler\UserSettingsHandler;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/admin/settings', name: 'app_settings_')]
final class SettingsController extends AbstractController
{
    public function __construct(private readonly UserSettingsHandler $userSettingsHandler)
    {

    }
    #[Route('/', name: 'index')]
    public function index(Request $request): Response
    {
        $user = $this->getUser() ?: $request->getSession()->get('user', new User());
        $form = $this->createForm(UserForm::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()){
            $this->userSettingsHandler->handle($user);
            $this->addFlash('success', 'user_infos_saved_successfully');
        }
        return $this->render('settings/index.html.twig', [
            'form' => $form
        ]);
    }
}
