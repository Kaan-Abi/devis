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
                title: 'sidebar.clients',
                routeName: 'app_client_index',
                active: $this->urlIsFromCurrentSubpath('app_client_index'),
                icon: 'fa-solid fa-users-between-lines'
            ),
            new MenuItem(
                title: 'sidebar.devis',
                routeName: 'app_devis_index',
                active: $this->urlIsFromCurrentSubpath('app_devis_index'),
                icon: 'fa-solid fa-file-invoice'
            ),
            new MenuItem(
                title:'sidebar.settings',
                routeName: 'app_settings_index',
                active: $this->urlIsFromCurrentSubpath('app_settings_index'),
                icon: 'fas fa-gear'

            )
        ];
    }

    private function urlIsFromCurrentSubpath(string $routeName) : bool
    {
        $routePath = trim($this->router->generate($routeName),'/');
        $currentPath = trim($this->requestStack->getCurrentRequest()?->getPathInfo(),'/');

        if (isset(explode('/',$currentPath)[1])) {
            $routeFirstSegment = explode('/',$routePath)[1];
            $currentPathFirstSegment = explode('/',$currentPath)[1];
            return $routeFirstSegment === $currentPathFirstSegment;
        }
        return false;
    }
}
