<?php

namespace App\Security;

use App\Service\MailTemplateService;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

class ResetPasswordService
{
    public function __construct(
        private readonly TranslatorInterface $translator,
        private readonly MailTemplateService $mailTemplateService,
        private readonly MailerInterface $mailer,
    )
    {

    }
    public function sendResetPasswordMail(string $mailTo, array $context = []): void
    {
        $email = $this->mailTemplateService->getSecurityTemplatedEmail()
        ->to($mailTo)
            ->subject($this->translator->trans('password_request_subject', [], 'mail'))
        ->htmlTemplate('reset_password/email.html.twig')
        ->context($context);

        $this->mailer->send($email);

    }
}
