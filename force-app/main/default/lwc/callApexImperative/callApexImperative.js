import { LightningElement, api, wire } from 'lwc';
import { reduceErrors } from 'c/ldsUtils';
import getContactsBornAfter from '@salesforce/apex/ContactController.getContactsBornAfter';

export default class CallApexImperative extends LightningElement {
    @api minBirthDate;
    errors;
    handleButtonClick() {
        getContactsBornAfter({
            birthDate: this.minBirthDate
        }).then(contacts => {
            console.log('contact ==> ' + contacts);
        }).catch(error => {
            console.log('error ==> ' + error);
            this.errors = reduceErrors(error);
        })
    }
}