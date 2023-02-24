import { LightningElement, api, wire } from 'lwc';

import NAME_FIELD from '@salesforce/schema/Product2.Name';
import IMAGE_LINK from '@salesforce/schema/Product2.Image_link__c';
import ITEM_IMAGE from '@salesforce/schema/Cart__c.Image__c';
import ITEM_NAME from '@salesforce/schema/Cart__c.Product_name__c';
import ITEM_CODE from '@salesforce/schema/Cart__c.Product_Code__c';
import ITEM_PRICE  from '@salesforce/schema/Cart__c.Price__c';
import PRICE_FIELD from '@salesforce/schema/Product2.Price__c';
import PRODUCTCODE_FIELD from '@salesforce/schema/Product2.ProductCode';
import { createRecord, getRecord, getFieldValue } from 'lightning/uiRecordApi';
import CART_OBJECT from '@salesforce/schema/Cart__c';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

import  PRODUCT_OBJ from '@salesforce/schema/Product2';
//lightning message service
import {subscribe, MessageContext, unsubscribe} from 'lightning/messageService'
import PRODUCTS_MESSAGE from '@salesforce/messageChannel/ProductsMessageChannel__c';

const FIELDS = [NAME_FIELD,IMAGE_LINK,PRODUCTCODE_FIELD,PRICE_FIELD];
export default class GetProductDetailsComponent extends LightningElement {
    
    // load content for LMS
    @wire(MessageContext)
   messageContext
   
    //exposing fields to make them available in the template
  @api  namefield;
   //image = IMAGE_LINK
  
  @api pricefield;
  
  @api productcode;
  
  @api productimage;

    //Id of Product2 to display data
    @api recordId

    // Product2 fields displayed with specific format
   // productName
   //productImagelink
@api cartcollection;
    //subscription reference for ProductSelected
    productSelectionSubscription 
    //recordId = "01t5i000003hEVOAA2"
    handleRecordLoaded(event){
        const {records} = event.detail
        const recordData = records[this.recordId]
        //this.productName = getFieldValue(recordData, NAME_FIELD)
       //this.image = getFieldValue(recordData, IMAGE_LINK_FIELD )
    }
  
    @wire(getRecord, { recordId:'$recordId',fields:FIELDS})
    cartrecords({data,error}){
        if(data){

                  this.cartrecords=data
                   this.namefield=getFieldValue(data,NAME_FIELD)
                   console.log(namefield);
                  this.pricefield=getFieldValue(data,PRICE_FIELD)
                      console.log(pricefield);

                  this.productcode=getFieldValue(data,PRODUCTCODE_FIELD)
                 console.log(productcode);

                    this.productimage=getFieldValue(data,IMAGE_LINK)
                   console.log(productimage);
                }
 else if(error){
                 console.error(error)
                }
}
    //cartproductimage = this.image;
    connectedCallback(){
       
        this.subscribeHandler()
    }

    subscribeHandler(){
        this.productSelectionSubscription = subscribe(this.messageContext, PRODUCTS_MESSAGE, (message)=>this.handleProductSelected(message))
    }
    handleProductSelected(message){
        this.recordId = message.productId
        console.log(recordId);
    }

    disconnectedCallback(){
        unsubscribe(this.productSelectionSubscription)
        this.productSelectionSubscription  = null
    }
     fields2 = {
        "Image__c" : this.productimage,   
        "Product_name__c" : this.namefield,
        "Price__c":this.pricefield,
        "Product_Code__c" :this.productcode
    };
    createCart() {
       
       
        const recordInput = {apiName: 'CART_OBJECT.objectApiName',fields:fields2};
        createRecord(recordInput)
            .then(result=> {
                //this.recordId = cart.id;
               this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Product added to the cart successfully',
                        variant: 'success',
                    }),
                );
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating record',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );
            });
    }
    }
    
    

