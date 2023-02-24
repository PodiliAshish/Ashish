import { LightningElement, wire } from 'lwc';
import getProducts from '@salesforce/apex/ProductsSearch.getProducts';
import{publish, MessageContext} from 'lightning/messageService';
import PRODUCTS_MESSAGE from '@salesforce/messageChannel/ProductsMessageChannel__c';
export default class SearchComponentClass extends LightningElement{
    products=[]
    error
    searchkey=''
    productsSubscription
    fetchProductsHandler(event){
        this.searchkey=event.target.value
        
        
    }
    @wire(getProducts,{searchkey:'$searchkey'})
    wiredproducts({data, error}){
        if(data){
            console.log(data)
            this.products = data
        }
        if(error){
            this.error = error
            console.error(error)
        }
    }
   
    //load context to LMS
    @wire(MessageContext)
    messageContext;

   /* connectedCallback(){
        this.subscribeHandler()
    }

    subscribeHandler(){
        this.productsSubscription = publish(this.messageContext, PRODUCTS_MESSAGE, (message)=>this.handleProductSelected(message))
    }*/
    
    handleProductSelected(event){
        console.log("selected product Id", event.detail);
        
           publish(this.messageContext, PRODUCTS_MESSAGE, {
            productId:event.detail
           
         })
           
    }
/*
    disconnectedCallback(){
       unsubscribe(this.productsSubscription)
       this.productsSubscription = null
   }*/

}