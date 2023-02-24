import { LightningElement, wire } from 'lwc';

//Navigation
import {NavigationMixin} from 'lightning/navigation';

//Product Schema
import PRODUCT_OBJECT from '@salesforce/schema/Product2';
import NAME_FIELD from '@salesforce/schema/Product2.Name';
import IMAGE_LINK_FIELD from '@salesforce/schema/Product2.Image_link__c';
import PRODUCT_AVAILABILITY_FIELD from '@salesforce/schema/Product2.Product_Availability__c';
import PRICE_FIELD from '@salesforce/schema/Product2.Price__c';
import PRODUCTCODE_FIELD from '@salesforce/schema/Product2.ProductCode';
import DESCRIPTION_FIELD from '@salesforce/schema/Product2.Description';
import RATING_FIELD from '@salesforce/schema/Product2.Rating__c';
import CARTOBJECT from '@salesforce/schema/Cart__c';
import ITEMNAME from '@salesforce/schema/Cart__c.Product_name__c';
import ITEMPRICE from '@salesforce/schema/Cart__c.Price__c';
import ITEMIMAGE from '@salesforce/schema/Cart__c.Image__c';
import ITEMCODE from '@salesforce/schema/Cart__c.Product_Code__c';

// getFieldValue function is used to extract field values
import {createRecord, getFieldValue} from 'lightning/uiRecordApi'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

//lightning message service
import {subscribe, MessageContext, unsubscribe} from 'lightning/messageService'
import PRODUCTS_MESSAGE from '@salesforce/messageChannel/ProductsMessageChannel__c';


export default class productdetailpage extends NavigationMixin(LightningElement) {

    // load content for LMS
    @wire(MessageContext)
   messageContext
   
    //exposing fields to make them available in the template
   namefield =  NAME_FIELD
   imagelinkfield = IMAGE_LINK_FIELD 
   productavailabilityfield = PRODUCT_AVAILABILITY_FIELD 
   pricefield = PRICE_FIELD
   ratingfield  = RATING_FIELD
   productcode = PRODUCTCODE_FIELD
   descriptionfield = DESCRIPTION_FIELD


   fields = {
    "Image__c" : this.imagelinkfield, 
     
    "Product_name__c" : this.namefield,
    "Price__c": this.pricefield,
    

    "Product_Code__c" : this.productcode
  };

    //Id of Product2 to display data
    recordId

    // Product2 fields displayed with specific format
    productName
   productImagelink

    //subscription reference for ProductSelected
    productSelectionSubscription 
    //recordId = "01t5i000003hEVOAA2"
    handleRecordLoaded(event){
        const {records} = event.detail
        const recordData = records[this.recordId]
        this.productName = getFieldValue(recordData, NAME_FIELD)
        this. productImagelink = getFieldValue(recordData, IMAGE_LINK_FIELD )
    }

    connectedCallback(){
        this.subscribeHandler()
    }

    subscribeHandler(){
        this.productSelectionSubscription = subscribe(this.messageContext, PRODUCTS_MESSAGE, (message)=>this.handleProductSelected(message))
    }
    handleProductSelected(message){
        this.recordId = message.productId
    }

    disconnectedCallback(){
        unsubscribe(this.productSelectionSubscription )
        this.productSelectionSubscription  = null
    }

    /**navigate to record page */
    handleNavigateToRecord(){
        console.log(this.recordId);
        console.log('in navigation method');
        this[NavigationMixin.Navigate]({
            
            type:'standard__recordPage',
            attributes:{
                recordId:this.recordId,
                objectApiName:PRODUCT_OBJECT.objectApiName,
                actionName:'view'
            }
        })
       
    }

    createCart() {
        const recordInput = {apiName: 'Cart__c',fields};
       
       
        createRecord(recordInput)
            .then(result=> {
                //console.log('the result is:'+recordInput);
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
                //console.log('error is:'+error);
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