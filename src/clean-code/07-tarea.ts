(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        public id: string;
        public type?: HtmlType;
        constructor(id: string, type?: HtmlType) {
            this.id = id;
            this.type = type;
        }
    }

    class InputAttributes {
        public value: string;
        public placeholder: string;
        constructor(value: string, placeholder: string) {
            this.value = value;
            this.placeholder = placeholder;
        }
    }

    class InputEvents {
        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }

    interface InputElementProps {
        id: string;
        type?: HtmlType;
        value: string;
        placeholder: string;
    }

    //? Idea para la nueva clase InputElement
    class InputElement {
        public htmlElement: HtmlElement;
        public inputAttributes: InputAttributes;
        public inputEvents: InputEvents;

        constructor(value: string, placeholder: string, id: string) {
            this.htmlElement = new HtmlElement(id, 'input');
            this.inputAttributes = new InputAttributes(value, placeholder);
            this.inputEvents = new InputEvents();
        }
    }

    const nameField = new InputElement('Fernando', 'Enter first name', 'txtName');

    console.log({ nameField });

})()