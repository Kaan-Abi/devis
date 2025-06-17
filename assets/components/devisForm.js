import './devisForm.css'
import {CollectionTypeHandler} from '../formUtils/CollectionTypeHelper.js';
import {destroyRichEditor, initRichEditor} from "../formUtils/richText";
import {deleteButtonCross} from "../htmlTemplates/deleteButtonCross";
import {TaxedPricesHelper} from "../formUtils/TaxedPricesHelper";
import TomSelect from "tom-select/base";
import 'tom-select/dist/css/tom-select.bootstrap5.css'
import Routing from "fos-router";
const routes = require('../js/routes.json');

let taxedPricesHelper = new TaxedPricesHelper(
    '#devis_form_totalHT',
    '#devis_form_totalTTC',
    '.js-ht-price',
    '.js-vat',
    '.js-ttc-price'
)

Routing.setRoutingData(routes)

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

    new TomSelect('#devis_form_client_name', {
        valueField: 'value',
        labelField: 'text',
        searchField: 'text',
        create: true, // ✅ Permet la création d'un nouveau client
        render: {
            no_results: function() {
                return ''; // ❌ pas de texte, pas d'affichage
            }
        },
        load: function(query, callback) {
            fetch(Routing.generate('autocomplete_client', {q: encodeURIComponent(query)}))
                .then(res => res.json())
                .then(data => callback(data))
                .catch(() => callback());
        },
        onItemAdd: function(value, item) {
            fetch(Routing.generate('autocomplete_client_data', {name: value}))
                .then(res => res.json())
                .then(client => {
                    document.querySelector('#devis_form_client_siret').value = client.siret;
                    document.querySelector('#devis_form_client_address').value = client.address;
                    document.querySelector('#devis_form_client_email').value = client.email;
                    document.querySelector('#devis_form_client_phone').value = client.phone;
                    document.querySelector('#devis_form_client_id').value = client.id;
                });
        }
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
    taxedPricesHelper.initTaxedPricesListener()
})

document.addEventListener('collection-type-element-removed', function (e) {
    const textareaId =  e.detail.deletedElement.querySelector('textarea').id
    destroyRichEditor(textareaId)
    requestAnimationFrame(() => {
        taxedPricesHelper.updateTotalPrices();
    });
})
