import './devisForm.css'
import CollectionTypeHandler from '../formUtils/CollectionTypeHelper.js';
document.addEventListener('DOMContentLoaded', function () {
    let collectionTypeHandlerContent = new CollectionTypeHandler({
        elementsId: '#devis_form_content',
        elementsClass: '.devisLine',
        addButton: '#addContent',
        deleteButton: '.deleteContent',
        nbParentElement: 2,
    });
});
