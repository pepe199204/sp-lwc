import { LightningElement, api } from 'lwc';

//import methods from the apex class
import getPerson from '@salesforce/apex/FormServices.getPerson';
import savePerson from '@salesforce/apex/FormServices.savePerson';

export default class Form extends LightningElement {

    @api recordId;
    fields = ["Full_name__c", "Phone__c","Email__c"];

    callPerson(){
        getPerson().then(result => {
            console.table(result);
            savePerson({personId: result[0].Id, name: "John Doe"}).then(() => {
                alert("name updated");
            });
        }).catch(error => {
            console.log(error);
        });
    }
}