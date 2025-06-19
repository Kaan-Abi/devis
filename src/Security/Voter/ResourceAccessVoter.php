<?php

namespace App\Security\Voter;

use App\Entity\AccessLimitedToUserEntityInterface;
use App\Entity\User;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;

final class ResourceAccessVoter extends Voter
{
    public const EDIT = 'EDIT';
    public const VIEW = 'VIEW';
    public const DELETE = 'VIEW';

    protected function supports(string $attribute, mixed $subject): bool
    {
        return in_array($attribute, [self::EDIT, self::VIEW, self::DELETE])
            && $subject instanceof AccessLimitedToUserEntityInterface;
    }

    protected function voteOnAttribute(string $attribute, mixed $subject, TokenInterface $token): bool
    {
        $user = $token->getUser();

        if (!$user instanceof User) {
            return false;
        }

        return match ($attribute) {
            self::VIEW, self::EDIT, self::DELETE => $this->isOwner($subject, $user),
            default => false,
        };
    }

    private function isOwner(AccessLimitedToUserEntityInterface $entity,User $user): bool
    {
        return $entity->getUser()->getId() === $user->getId();
    }
}
