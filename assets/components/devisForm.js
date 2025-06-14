import './devisForm.css'
import CollectionTypeHandler from '../formUtils/CollectionTypeHelper.js';
import {destroyRichEditor, initRichEditor} from "../formUtils/richText";
import {deleteButtonCross} from "../htmlTemplates/deleteButtonCross";
document.addEventListener('DOMContentLoaded', async function () {
    let collectionTypeHandlerContent = new CollectionTypeHandler(
        '#devis_form_content',
        '.devisLine',
        '#addContent',
        '.deleteContent',
        deleteButtonCross,
        2,
    );

    if (0 === document.querySelectorAll('.devisLine').length){
        collectionTypeHandlerContent.addElement()
    }

    await initRichEditor({
        selector: 'textarea.rich-text',
        language: 'fr_FR',
        height: 300,
        menubar: false,
        toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | bullist numlist | link'
    });

    function updateTTCPrice(container) {
        const htInput = container.querySelector('.js-ht-price');
        const vatInput = container.querySelector('.js-vat');
        const ttcInput = container.querySelector('.js-ttc-price');

        const htValue = parseFloat(htInput.value) || 0;
        const vatValue = parseFloat(vatInput.value) || 0;

        const ttc = htValue * (1 + vatValue / 100);
        ttcInput.value = ttc.toFixed(2);
    }

    document.querySelectorAll('.js-ht-price, .js-vat').forEach(input => {
        input.addEventListener('input', () => {
            const container = input.closest('.form-row') || input.closest('.row') || input.closest('tr') || input.parentElement.parentElement.parentElement;
            updateTTCPrice(container);
        });
    });

});

document.addEventListener('collection-type-element-added', async function (e){
    await initRichEditor({
        target: e.detail.addedElement.querySelector('.rich-text'),
        language: 'fr_FR',
        height: 200,
        menubar: false,
        toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | bullist numlist | link'
    });
})

document.addEventListener('collection-type-element-removed', function (e) {
    const textareaId =  e.detail.deletedElement.querySelector('textarea').id
    destroyRichEditor(textareaId)
})
