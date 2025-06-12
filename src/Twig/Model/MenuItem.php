<?php

namespace App\Twig\Model;

class MenuItem
{
    public function __construct(
        public string $title,
        public string $routeName,
        public ?array $routeParams = [],
        public bool $active = false,
        public ?string $icon = null,
    )
    {
    }
}
