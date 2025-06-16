<?php

namespace App\Command;

use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;

#[AsCommand(
    name: 'Tets',
    description: 'Add a short description for your command',
)]
class TetsCommand extends Command
{
    public function __construct(
        private readonly MailerInterface $mailer
    )
    {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {

        $email = (new Email())
            ->from('test@test.fr')
            ->to('test2@test2.fr')
            ->subject('test')
            ->text('test');

        $this->mailer->send($email);

        return Command::SUCCESS;
    }
}
