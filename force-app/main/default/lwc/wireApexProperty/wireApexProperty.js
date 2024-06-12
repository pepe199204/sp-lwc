import { LightningElement, api, wire } from 'lwc';
import { reduceErrors } from 'c/ldsUtils';
import getContactsBornAfter from '@salesforce/apex/ContactController.getContactsBornAfter';
export default class WireApexProperty extends LightningElement {
    @api minBirthDate;
    @wire (getContactsBornAfter, { birthDate: '$minBirthDate'})
    contacts;
    get errors(){
        return (this.contacts.error) ? reduceErrors(this.contacts.errors) : [];
    }
}