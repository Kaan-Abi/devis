<?php

namespace App\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\MoneyType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\PercentType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PriceCalculationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('totalHT', MoneyType::class, [
                'scale' => 2,
                'currency' => 'EUR' // TODO internationalisatio
            ])
            ->add('vat', PercentType::class, [
                'scale' => 2,
            ])
            ->add('totalTTC', MoneyType::class, [
                'scale' => 2,
                'currency' => 'EUR' // TODO internationalisatio
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => null,
        ]);
    }
}
