<?php

namespace App\Form;

use App\Entity\Devis;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\MoneyType;
use Symfony\Component\Form\Extension\Core\Type\PercentType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DevisForm extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
//            ->add('user', Use)
            ->add('client', ClientForm::class)
            ->add('content', CollectionType::class, [
                'entry_type' => DevisLineForm::class,
                'allow_add' => true,
                'allow_delete' => true,
                'prototype' => true,
                'by_reference' => false,
                'entry_options' => [
                    'attr' => [
                        'class' => 'mb-1 row justify-content-start align-items-end devisLine'
                    ],
                    'row_attr' => [
                        'class' => 'mb-3 devisLineRootParent'
                    ],
                    'label' => false
                ],

            ])
            ->add('additionalNote')
            ->add('totalPriceHT', MoneyType::class, [
                'currency' => 'EUR' //TODO: plus tard gérer l'internationalisation
            ])
            ->add('vat', PercentType::class)
            ->add('totalPrice', MoneyType::class, [
                'currency' => 'EUR' //TODO: plus tard gérer l'internationalisation
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Devis::class,
        ]);
    }
}
