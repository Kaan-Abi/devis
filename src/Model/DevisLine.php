<?php

namespace App\Model;

class DevisLine
{
    public function __construct(
        public ?string $description = null,
        public ?int $quantity = null,
        public ?float $htPrice = null,
        public ?float $vat = null,
        public ?float $ttcPrice = null
    )
    {
    }
}