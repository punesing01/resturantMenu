class PepperButton extends HTMLElement{

    constructor(){
        super();
    
        const shadow =this.shadowRoot({mode:'open'});

        const button = document.createElement('button');
        const style = document.createElement('style');

        style.textContent = this.getAttribute('styleClass');
        shadow.appendChild(style);
        shadow.appendChild(button);
    }
}

customElements.define('pepper-button',PepperButton);