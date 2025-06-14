<?php

namespace App\Tests\Controller;

use App\Entity\Devis;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\EntityRepository;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

final class DevisControllerTest extends WebTestCase
{
    private KernelBrowser $client;
    private EntityManagerInterface $manager;
    private EntityRepository $deviRepository;
    private string $path = '/devis/';

    protected function setUp(): void
    {
        $this->client = static::createClient();
        $this->manager = static::getContainer()->get('doctrine')->getManager();
        $this->deviRepository = $this->manager->getRepository(Devis::class);

        foreach ($this->deviRepository->findAll() as $object) {
            $this->manager->remove($object);
        }

        $this->manager->flush();
    }

    public function testIndex(): void
    {
        $this->client->followRedirects();
        $crawler = $this->client->request('GET', $this->path);

        self::assertResponseStatusCodeSame(200);
        self::assertPageTitleContains('Devi index');

        // Use the $crawler to perform additional assertions e.g.
        // self::assertSame('Some text on the page', $crawler->filter('.p')->first());
    }

    public function testNew(): void
    {
        $this->markTestIncomplete();
        $this->client->request('GET', sprintf('%snew', $this->path));

        self::assertResponseStatusCodeSame(200);

        $this->client->submitForm('Save', [
            'devi[createdAt]' => 'Testing',
            'devi[updatedAt]' => 'Testing',
            'devi[totalTTC]' => 'Testing',
            'devi[additionalNote]' => 'Testing',
            'devi[content]' => 'Testing',
            'devi[reference]' => 'Testing',
        ]);

        self::assertResponseRedirects($this->path);

        self::assertSame(1, $this->deviRepository->count([]));
    }

    public function testShow(): void
    {
        $this->markTestIncomplete();
        $fixture = new Devis();
        $fixture->setCreatedAt('My Title');
        $fixture->setUpdatedAt('My Title');
        $fixture->setTotalPrice('My Title');
        $fixture->setAdditionalNote('My Title');
        $fixture->setContent('My Title');
        $fixture->setReference('My Title');

        $this->manager->persist($fixture);
        $this->manager->flush();

        $this->client->request('GET', sprintf('%s%s', $this->path, $fixture->getId()));

        self::assertResponseStatusCodeSame(200);
        self::assertPageTitleContains('Devi');

        // Use assertions to check that the properties are properly displayed.
    }

    public function testEdit(): void
    {
        $this->markTestIncomplete();
        $fixture = new Devis();
        $fixture->setCreatedAt('Value');
        $fixture->setUpdatedAt('Value');
        $fixture->setTotalPrice('Value');
        $fixture->setAdditionalNote('Value');
        $fixture->setContent('Value');
        $fixture->setReference('Value');

        $this->manager->persist($fixture);
        $this->manager->flush();

        $this->client->request('GET', sprintf('%s%s/edit', $this->path, $fixture->getId()));

        $this->client->submitForm('Update', [
            'devi[createdAt]' => 'Something New',
            'devi[updatedAt]' => 'Something New',
            'devi[totalTTC]' => 'Something New',
            'devi[additionalNote]' => 'Something New',
            'devi[content]' => 'Something New',
            'devi[reference]' => 'Something New',
        ]);

        self::assertResponseRedirects('/devis/');

        $fixture = $this->deviRepository->findAll();

        self::assertSame('Something New', $fixture[0]->getCreatedAt());
        self::assertSame('Something New', $fixture[0]->getUpdatedAt());
        self::assertSame('Something New', $fixture[0]->getTotalPrice());
        self::assertSame('Something New', $fixture[0]->getAdditionalNote());
        self::assertSame('Something New', $fixture[0]->getContent());
        self::assertSame('Something New', $fixture[0]->getReference());
    }

    public function testRemove(): void
    {
        $this->markTestIncomplete();
        $fixture = new Devis();
        $fixture->setCreatedAt('Value');
        $fixture->setUpdatedAt('Value');
        $fixture->setTotalPrice('Value');
        $fixture->setAdditionalNote('Value');
        $fixture->setContent('Value');
        $fixture->setReference('Value');

        $this->manager->persist($fixture);
        $this->manager->flush();

        $this->client->request('GET', sprintf('%s%s', $this->path, $fixture->getId()));
        $this->client->submitForm('Delete');

        self::assertResponseRedirects('/devis/');
        self::assertSame(0, $this->deviRepository->count([]));
    }
}
