class CollectionTypeHandler
{

    constructor(
        collectionTypeId,
        elementsClass,
        addButton,
        deleteButton,
        deleteButtonHTML,
        nbParentElement
    )
    {
        this.nbElements = 0;
        this.collectionTypeId = collectionTypeId
        this.elementsClass = elementsClass
        this.addButton = addButton
        this.deleteButton = deleteButton
        this.deleteButtonHTML = deleteButtonHTML
        this.nbParentElement = nbParentElement
        this.initListeners();
        this.initElements();
    }


    /**
     * Fonction qui permet d'initialiser les listeners sur les boutons d'ajout et de suppression
     * @returns void
     * @memberof CollectionTypeHandler
     * @param void
     * @throws Error
     */
    initListeners(){
        $(this.addButton).on('click', () => this.addElement());
    }

    /**
     * Fonction qui permet d'initialiser les éléments déjà présents en y ajoutant les boutons de suppression et leurs listeners
     * @returns void
     * @memberof CollectionTypeHandler
     * @param void
     * @throws Error
     */
    initElements(){
        this.nbElements = $(this.elementsClass).length;
        $(this.elementsClass).each((index, element) => this.addDeleteButtonToElement(element));
    }

    /**
     * Fonction qui permet d'ajouter un élément
     * @returns void
     * @memberof CollectionTypeHandler
     * @param void
     * @throws Error
     */
    addElement(){
        let dataPrototype = $(this.collectionTypeId).attr('data-prototype');
        dataPrototype = dataPrototype.replace(/__name__/g, this.nbElements);
        dataPrototype = dataPrototype.replace(/__name__label__/g,'');

        $( this.collectionTypeId).append(dataPrototype);

        const newElementId = this.collectionTypeId + '_' + this.nbElements

        this.addDeleteButtonToElement(newElementId)
        this.nbElements++;

        document.dispatchEvent(new CustomEvent('collection-type-element-added', {
            detail: {
                collectionTypeId: this.collectionTypeId,
                addedElement: document.querySelector(newElementId)
            }
        }));
    }

    /**
     * Fonction qui permet de supprimer un élément
     * @returns void
     * @memberof CollectionTypeHandler
     * @throws Error
     * @param event
     */
    deleteElement(event){
        let element = $(event.target).closest(this.elementsClass+'RootParent');
        document.dispatchEvent(new CustomEvent('collection-type-element-removed', {
            detail: {
                collectionTypeId: this.collectionTypeId,
                deletedElement: element[0]
            }
        }));
        element.remove();
    }

    addDeleteButtonToElement(element) {
        $(element).append(this.deleteButtonHTML)
        $(this.deleteButton).on('click', (event) => this.deleteElement(event));
    }
}

export default CollectionTypeHandler;
