import { LightningElement, api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class ShowLightningformComponent extends LightningElement {
    @ api recordId;
    @ api objectApiName;
    
    handleOnSuccess(){
        const showSuccessMessage = new ShowToastEvent({
                                   title :'Success',
                                    message : 'Record updated successfully',
                                     variant : 'success',
                                     mode : 'dismissable'
                                     })
        this.dispatchEvent(showSuccessMessage );
    }
}