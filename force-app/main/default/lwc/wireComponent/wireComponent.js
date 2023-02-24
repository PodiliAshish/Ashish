import { LightningElement,track,api } from 'lwc';
import getAllAccounts from '@salesforce/apex/ApexControllerClass.getAllAccounts';

export default class WireComponent extends LightningElement {
    @track accountRecords;
    @api col=[
        {label:'Account Name',fieldName:'Name'},
    ]
    onshowAllAccountRecords(event){
        getAllAccounts().then(result=>{
            this.accountRecords=result
           }).catch(error=>{
            console.error(error)
           })
    
    }
}