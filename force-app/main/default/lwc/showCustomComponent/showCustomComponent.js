import { LightningElement,track } from 'lwc';

export default class ShowCustomComponent extends LightningElement {
    @track customMessage = "private Reactive property";

    /*handleMessage(event){
        this.customMessage = event.target.value;
        this.customMessage = 'Reactive proprty is Ready!!!';
    }*/
    handleonchange(event){
       this.customMessage = event.target.value;
        //this.customMessage = 'Reactive proprty has been changed!!!';
    }
    //api decorator ==> Private
}