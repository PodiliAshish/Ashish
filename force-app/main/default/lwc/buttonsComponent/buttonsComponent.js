import { LightningElement } from 'lwc';

export default class ButtonsComponent extends LightningElement {
    num1;
    num2;
    result;

// member methods
  firstnumber(event){
    this.num1 = parseInt(event.target.value);
  }
  secondnumber(event){
    this.num2 = parseInt(event.target.value);
  }
    addition(){
    this.result = parseInt(this.num1)+parseInt(this.num2);
   }
   subtraction(){
    this.result = parseInt(this.num1)-parseInt(this.num2);
   }
   multiplication(){
    this.result = parseInt(this.num1)*parseInt(this.num2);
   }
   division(){
    this.result = parseInt(this.num1)/parseInt(this.num2);
   }
   modulus(){
    this.result = parseInt(this.num1)%parseInt(this.num2);
   }



}