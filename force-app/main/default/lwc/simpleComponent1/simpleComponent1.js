import { LightningElement } from 'lwc';

export default class SimpleComponent1 extends LightningElement {
    principal;
    rateofinterst;
    timeperiod;
    result;

    Princ(event){
        this.principal = event.target.value;
    }

    Rate(event){
        this.rateofinterst = event.target.value;
    }

    Time(event){
        this.timeperiod = event.target.value;
    }
    Resultvalue(event){
        this.result =parseInt (this.principal*this.rateofinterst*(this.timeperiod*12))/100;
    }



}