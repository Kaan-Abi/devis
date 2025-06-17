<?php

namespace App\Form;

use App\Form\Type\RichTextType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\MoneyType;
use Symfony\Component\Form\Extension\Core\Type\PercentType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\NotBlank;

class DevisLineForm extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('description', RichTextType::class, [
                'constraints' => [new NotBlank()]
            ])
            ->add('quantity', IntegerType::class, [
                'empty_data' => '1'
            ])
            ->add('htPrice', MoneyType::class, [
                'currency' => 'EUR', //TODO: plus tard gérer l'internationalisation
                'attr' => [
                    'class' => 'js-ht-price',
                ],
                'scale' => 2
            ])
            ->add('vat', PercentType::class, [
                'attr' => [
                    'class' => 'js-vat'
                ]
            ])
            ->add('ttcPrice', MoneyType::class, [
                'currency' => 'EUR', //TODO: plus tard gérer l'internationalisation
                'attr' => [
                    'class' => 'js-ttc-price',
                ],
                'scale' => 2
            ])
        ;
    }
}
