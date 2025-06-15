export class TaxedPricesHelper {
    constructor(
        totalHTSelector,
        totalTTCSelector,
        htSelector,
        vatSelector,
        ttcSelector
    ) {
        this.totalHTSelector = totalHTSelector
        this.totalTTCSelector = totalTTCSelector
        this.htSelector = htSelector
        this.vatSelector = vatSelector
        this.ttcSelector = ttcSelector
    }

    initTaxedPricesListener(){
        document.querySelectorAll(`${this.htSelector}, ${this.vatSelector}`).forEach(input => {
            input.addEventListener('input', () => {
                this.container = input.closest('.form-row') || input.closest('.row') || input.closest('tr') || input.parentElement.parentElement.parentElement;
                this.updateTTCPrice();
                this.updateTotalPrices();
            });
        });
    }

    updateTTCPrice(){
        const htInput = this.container.querySelector(this.htSelector);
        const vatInput = this.container.querySelector(this.vatSelector);
        const ttcInput = this.container.querySelector(this.ttcSelector);

        const htValue = parseFloat(htInput.value) || 0;
        const vatValue = parseFloat(vatInput.value) || 0;

        const ttc = htValue * (1 + vatValue / 100);
        ttcInput.value = ttc.toFixed(2);
    }

    updateTotalPrices(){
        let totalHTPrice = 0;
        const htPriceElements = document.querySelectorAll(this.htSelector);
        htPriceElements.forEach(element => {
            totalHTPrice += parseFloat(element.value) || 0
        })
        console.log(htPriceElements)
        document.querySelector(this.totalHTSelector).value = totalHTPrice.toFixed(2);

        let totalTTCPrice = 0;
        const ttcPriceElements = document.querySelectorAll(this.ttcSelector);
        ttcPriceElements.forEach(element => {
            totalTTCPrice += parseFloat(element.value) || 0
        })
        console.log(ttcPriceElements)
        document.querySelector(this.totalTTCSelector).value = totalTTCPrice.toFixed(2);
    }
}