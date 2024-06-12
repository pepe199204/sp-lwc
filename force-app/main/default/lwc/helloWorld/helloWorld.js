import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {

    greeting = 'Trail together with the force';
    changeHandler(event) {
        this.greeting = event.target.value;
    }

}