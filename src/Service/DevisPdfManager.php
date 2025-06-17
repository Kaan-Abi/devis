<?php

namespace App\Service;

use App\Entity\Devis;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Snappy\Pdf;
use Symfony\Component\HttpKernel\KernelInterface;
use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

class DevisPdfManager
{
    private string $storagePath;

    public function __construct(
        private readonly Pdf                    $pdfGenerator,
        private readonly Environment            $twig,
        private readonly EntityManagerInterface $em,
        KernelInterface                         $kernel,
        private readonly string $pdfStoragePath
    )
    {
        $this->storagePath = $kernel->getProjectDir() . $this->pdfStoragePath;
    }

    /**
     * @throws SyntaxError
     * @throws RuntimeError
     * @throws LoaderError
     */
    public function generate(Devis $devis): void
    {
        $html = $this->twig->render('document/pdf/devis.html.twig', [
            'devis' => $devis,
        ]);

        $directory  = $devis->getAuthor()->getId();
        $filename = $devis->getReference() . '.pdf';
        $fullPath = $this->storagePath . $directory . '/' . $filename;

        if (!is_dir($this->storagePath)) {
            mkdir($this->storagePath, 0775, true);
        }

        $this->pdfGenerator->generateFromHtml($html, $fullPath);

        $devis->setPdfFilename($filename);
        $this->em->flush();
    }

    public function getPdfPath(Devis $devis): ?string
    {
        if (!$devis->getPdfFilename()) {
            return null;
        }
        $directory  = $devis->getAuthor()->getId();

        return $this->storagePath . $directory . '/' . $devis->getPdfFilename();
    }
}
