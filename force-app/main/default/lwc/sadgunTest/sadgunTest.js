import { LightningElement, wire  } from 'lwc';
import getProducts from '@salesforce/apex/SadgunClass.getProducts';
export default class SadgunTest extends LightningElement {
    sadgun;
    error;
   
    @wire(getProducts) 
    wiredProducts
       
}