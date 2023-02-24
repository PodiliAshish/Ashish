import { LightningElement, api, wire } from 'lwc';
import getContactRecords from '@salesforce/apex/APexDatatableClass.getContactRecords';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
const tablecolumns =[
    {label:'Contact Name..:', fieldName :'Name'},
    {label:'Email..:', fieldName :'Email'},
    {label:'phone ..:', fieldName :'Phone'},
    {label:'Department is..:', fieldName :'Department'}, 
    {label:'Id is..:', fieldName :'Id'},
 ];
export default class LightningdatatableComponentusingwire extends LightningElement {
         
   @api cols = tablecolumns;
   @api contactrecodslist;
   @wire (getContactRecords) 
   allContactRecords({data,error})
   {
      if(data)
      {
        this.contactrecodslist = data;
        this.dispatchEvent(new ShowToastEvent({
                        title : 'success',
                        message : 'Records loaded sucessfully',
                        variant : 'success',
                        mode : 'dismissable'
        }))
    
      }
      else if(error)
      {
        
        console.log('Error Occured...:'+error);
      }
   }
}