import { LightningElement } from 'lwc';

export default class LokeshComponent extends LightningElement 
{
  fistnum;
  secondnum;
  results;

  onfist(event){
    this.fistnum =event.target.value;
  }
  onsec(event){
    this.secondnum=event.target.value;
  }
  
  
  thisadditon(){
   this.results=parseInt(this.fistnum)+parseInt(this.secondnum);
  }

}