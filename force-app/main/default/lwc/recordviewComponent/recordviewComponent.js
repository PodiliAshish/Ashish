import { LightningElement, api } from 'lwc';
import{ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class RecordviewComponent extends LightningElement {
    @api recordId;
    @api objectApiName;
    handleOnSuccess(){
        const showSuccessMessage = new ShowToastEvent({
                           titel :'success',
                           message : 'Record updated successfully',
                           variant :'success',
                           mode : 'dismissable'
             
        })
        this.dispatchEvent(showSuccessMessage);
    }
}