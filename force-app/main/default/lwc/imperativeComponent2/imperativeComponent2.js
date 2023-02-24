import { LightningElement, api } from 'lwc';
import imperativeMethod2 from '@salesforce/apex/ImperativeClass2.imperativeMethod2';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class ImperativeComponent2 extends LightningElement {
    @api cols =[
        {label:"AccountName", fieldName : "Name"},
        {label:"Id", fieldName : "Id"},
        {label:"AnnualRevenue", fieldName : "AnnualRevenue"},
        {label:"Rating", fieldName : "Rating"},
        
    ];
    @api imperativestorage2;
       ewwwMethod2(event){
        imperativeMethod2().then(result=>{
            this.imperativestorage2 = result
            this.dispatchEvent(new dispatchEvent
            ({
                   title :"success",
                   message :"hehehe you r great!!!!!",
                   variant : " success",
                   mode : "dismissable"

            }))
         })
          .catch(error=>{
            console.log('error occured'+error)
          })
       }

}