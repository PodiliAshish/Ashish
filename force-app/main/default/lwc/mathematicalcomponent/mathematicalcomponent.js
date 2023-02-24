import { LightningElement } from 'lwc';

export default class Mathematicalcomponent extends LightningElement {
   //datamembers
    num1;
    num2;
    Result;
  //member methods
   firstnumber(event){
    this.num1 = parseInt(event.target.value);
   }
   secondnumber(event){
    this.num2 = parseInt(event.target.value);
   }
   myResult(event){
    this.Result = parseInt(event.target.value);
   }
   addition(){
    this.Result = parseInt(this.num1+this.num2);
   }
   subtraction(){
    this.Result = parseInt(this.num1-this.num2);
   }
   multiplication(){
    this.Result = parseInt(this.num1*this.num2);
   }
   division(){
    this.Result = parseInt(this.num1/this.num2);
   }
   modulus(){
    this.Result = parseInt(this.num1%this.num2);
   }
   





}