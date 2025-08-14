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
    public const GUESTS_DIRECTORY='guests';
    private string $storagePath;

    public function __construct(
        private readonly Pdf                    $pdfGenerator,
        private readonly Environment            $twig,
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
        $directory  = $devis->getAuthor() ? $devis->getAuthor()->getId() : self::GUESTS_DIRECTORY;
        $filename = $devis->getReference() . '.pdf';
        $fullPath = $this->storagePath . $directory . '/' . $filename;

        if (file_exists($fullPath)) {
            unlink($fullPath);
        }

        $html = $this->twig->render('document/pdf/devis.html.twig', [
            'devis' => $devis,
        ]);


        if (!is_dir($this->storagePath) && !mkdir($concurrentDirectory = $this->storagePath, 0775, true) && !is_dir($concurrentDirectory)) {
            throw new \RuntimeException(sprintf('Directory "%s" was not created', $concurrentDirectory));
        }

        $this->pdfGenerator->generateFromHtml($html, $fullPath);

        $devis->setPdfFilename($filename);
    }

    public function getPdfPath(Devis $devis): ?string
    {
        if (!$devis->getPdfFilename()) {
            return null;
        }
        $directory  = $devis->getAuthor()->getId();

        return $this->storagePath . $directory . '/' . $devis->getPdfFilename();
    }

    public function deletePdf(Devis $devis): void
    {
        unlink($this->getPdfPath($devis));
    }
}
