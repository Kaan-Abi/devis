<?php
namespace App\Manager;

use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ObjectRepository;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Contracts\Service\Attribute\Required;

abstract class AbstractManager
{
    protected ?EntityManagerInterface $entityManager = null;
    protected TokenStorageInterface $tokenStorage;

    #[Required]
    public function setObjectManager(EntityManagerInterface $entityManager): void
    {
        $this->entityManager = $entityManager;
    }

    public function getRepository(): ObjectRepository
    {
        return $this->entityManager->getRepository($this->getEntityClass());
    }

    abstract public function getEntityClass(): string;

    public function find($id): ?object
    {
        return $this->getRepository()->find($id);
    }

    /**
     * @param array<string, mixed> $criteria
     * @param array<string,string>|null $orderBy
     * @param int|null $limit
     * @param int|null $offset
     * @return array
     */
    public function findBy(
        array $criteria,
        ?array $orderBy = null,
        ?int $limit = null,
        ?int $offset = null
    ): array
    {
        return $this->getRepository()->findBy($criteria, $orderBy,$limit,$offset);
    }

    public function findOneBy(array $criteria)
    {
        return $this->getRepository()->findOneBy($criteria);
    }

    public function findAll(): array
    {
        return $this->getRepository()->findAll();
    }

    public function removeAll(): void
    {
        // TODO: sql query
    }
}
