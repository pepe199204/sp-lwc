import { LightningElement, api, wire } from 'lwc';
import { reduceErrors } from 'c/ldsUtils';
import getContactsBornAfter from '@salesforce/apex/ContactController.getContactsBornAfter';

export default class WireApexFunction extends LightningElement {
    @api minBirthDate;
    errors;
    @wire(getContactsBornAfter, {birthDate: '$minBirthDate'})
    wireContacts({data, error}){
        if(error){
            this.errors = reduceErrors(error);
        }
    }
}