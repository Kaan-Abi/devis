import './devisForm.css'
import {CollectionTypeHandler} from '../formUtils/CollectionTypeHelper.js';
import {destroyRichEditor, initRichEditor} from "../formUtils/richText";
import {deleteButtonCross} from "../htmlTemplates/deleteButtonCross";
import {TaxedPricesHelper} from "../formUtils/TaxedPricesHelper";

let taxedPricesHelper = new TaxedPricesHelper(
    '#devis_form_totalHT',
    '#devis_form_totalTTC',
    '.js-ht-price',
    '.js-vat',
    '.js-ttc-price'
)

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

    taxedPricesHelper.initTaxedPricesListener()
});

document.addEventListener('collection-type-element-added', async function (e){
    await initRichEditor({
        target: e.detail.addedElement.querySelector('.rich-text'),
        language: 'fr_FR',
        height: 200,
        menubar: false,
        toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | bullist numlist | link'
    });
    taxedPricesHelper.initTaxedPricesListener()
})

document.addEventListener('collection-type-element-removed', function (e) {
    const textareaId =  e.detail.deletedElement.querySelector('textarea').id
    destroyRichEditor(textareaId)
    requestAnimationFrame(() => {
        taxedPricesHelper.updateTotalPrices();
    });
})
