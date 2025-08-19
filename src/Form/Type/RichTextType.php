<?php
namespace App\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class RichTextType extends AbstractType
{
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'attr' => ['class' => 'rich-text'],
            'required' => false,
            'sanitize_html' => true,
        ]);
    }

    public function getParent(): string
    {
        return TextareaType::class;
    }
}
