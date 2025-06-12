<?php

namespace App\Twig\Components;

use App\Twig\Model\MenuItem;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Routing\RouterInterface;
use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;

#[AsTwigComponent]
final class Menu
{
    public function __construct(
        private readonly RouterInterface $router,
        private readonly RequestStack $requestStack
    )
    {
    }
    public function getItems(): array
    {
        return [
            new MenuItem(
                title: 'Clients',
                routeName: 'app_accueil',
                active: $this->urlIsFromCurrentSubpath('app_accueil'),
                icon: 'fa-solid fa-users-between-lines'
            ),
        ];
    }

    private function urlIsFromCurrentSubpath(string $routeName) : bool
    {
        $routePath = trim($this->router->generate($routeName),'/');
        $currentPath = trim($this->requestStack->getCurrentRequest()?->getPathInfo(),'/');

        $routeFirstSegment = explode('/',$routePath)[0];
        $currentPathFirstSegment = explode('/',$currentPath)[0];

        return $routeFirstSegment === $currentPathFirstSegment;
    }
}
