<?php

namespace App\Form;

use App\Entity\Devis;
use App\Form\Type\RichTextType;
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
            ->add('author', UserForm::class)
            ->add('client', ClientForm::class)
            ->add('content', CollectionType::class, [
                'entry_type' => DevisLineForm::class,
                'allow_add' => true,
                'allow_delete' => true,
                'prototype' => true,
                'by_reference' => false,
                'entry_options' => [
                    'attr' => [
                        'class' => 'devisLine'
                    ],
                    'row_attr' => [
                        'class' => 'mb-3 devisLineRootParent'
                    ],
                    'label' => false
                ],

            ])
            ->add('additionalNote', RichTextType::class)
            ->add('totalHT', MoneyType::class, [
                'currency' => 'EUR' //TODO: plus tard gérer l'internationalisation
            ])
            ->add('totalTTC', MoneyType::class, [
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
