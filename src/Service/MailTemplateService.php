<?php

namespace App\Service;

use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mime\Address;

class MailTemplateService
{
    public function __construct(
        private readonly string $mailBotName,
        private readonly string $noReplyAddress
    ) {
    }

    public function getSecurityTemplatedEmail(): TemplatedEmail
    {
        return (new TemplatedEmail())
            ->from(new Address($this->noReplyAddress, $this->mailBotName));
    }
}
