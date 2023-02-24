import { LightningElement, api } from 'lwc';
 import imperativeMethod from '@salesforce/apex/ImperativeClass.imperativeMethod';
 import{ShowToastEvent} from 'lightning/platformShowToastEvent'


export default class ImperativemethodwithdatatableComponent extends LightningElement {
    @api imperativetorage;
    @api cols=[
        {label:'Contact Name', fieldName :'Name'},
   /* {label:'Email', fieldName :'Email'},
    {label:'phone ', fieldName :'Phone'},
    {label:'Department', fieldName :'Department'}, 
    {label:'Id ', fieldName :'Id'},*/
    ];
    onshowelement(){
        imperativeMethod().then(result=>{
            this.imperativetorage = result;
            this.dispatchEvent(new ShowToastEvent({
                title : 'success',
                message : 'Records loaded sucessfully',
                variant : 'success',
                mode : 'dismissable'
            }))
        })
           .catch(error=>{
              //this.imperativetorage = error;
              console.log('error occured'+error)
           })
           
    }

}