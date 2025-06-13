class CollectionTypeHandler
{
    static requiredOptions = ['elementsId', 'elementsClass', 'nbParentElement', 'addButton', 'deleteButton'];

    constructor(options = {})
    {
        this.nbElements = 0;
        this.options = options;
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
        $(this.options.addButton).on('click', () => this.addElement());
    }

    /**
     * Fonction qui permet d'initialiser les éléments déjà présents en y ajoutant les boutons de suppression et leurs listeners
     * @returns void
     * @memberof CollectionTypeHandler
     * @param void
     * @throws Error
     */
    initElements(){
        this.nbElements = $(this.options.elementsClass).length;
        $(this.options.elementsClass).each((index, element) => {
            $(element).append(`
                <div class="mb-3">
                    <button type="button" class="w-auto btn btn-danger ${this.options.deleteButton.replace('.', '')}">
                        <i class="fas fa-times"></i>
                    </button>    
                </div>
                
            `)

            $(this.options.deleteButton).on('click', (event) => this.deleteElement(event));
        });
    }

    /**
     * Fonction qui permet d'ajouter un élément
     * @returns void
     * @memberof CollectionTypeHandler
     * @param void
     * @throws Error
     */
    addElement(){
        let dataPrototype = $(this.options.elementsId).attr('data-prototype');
        dataPrototype = dataPrototype.replace(/__name__/g, this.nbElements);
        dataPrototype = dataPrototype.replace(/__name__label__/g,'');

        $( this.options.elementsId).append(dataPrototype);

        $( this.options.elementsId + '_' + this.nbElements).append(`
            <div class="mb-3">
                <button type="button" class="w-auto btn btn-danger ${this.options.deleteButton.replace('.', '')}">
                    <i class="fas fa-times"></i>
                </button>    
            </div>
        `)

        $(this.options.deleteButton).on('click', (event) => this.deleteElement(event));
        this.nbElements++;
    }

    /**
     * Fonction qui permet de supprimer un élément
     * @returns void
     * @memberof CollectionTypeHandler
     * @param void
     * @throws Error
     */
    deleteElement(event){
        let element = $(event.target).closest(this.options.elementsClass+'RootParent');
        element.remove();
    }
}

export default CollectionTypeHandler;
