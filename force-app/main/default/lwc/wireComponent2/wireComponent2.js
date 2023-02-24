import { LightningElement, track, api, wire } from 'lwc';
import imperativeMethod2 from '@salesforce/apex/ImperativeClass2.imperativeMethod2';
import{ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class WireComponent2 extends LightningElement {
    @track cols = [{label:'Account Name', fieldName:'Name'}];
    @api wirestorage;
    @wire (imperativeMethod2)
       eeeewwwww({data, error}){
                       if(data){
                        this.wirestorage = data;
                        this.dispatchEvent(new ShowToastEvent({
                            title : 'Success',
                            variant :'success',
                            message : 'ghfyhjmn',
                            mode : 'dismissable'

                        }))
                       }
                       else if(error){
                        console.error(error)
                       }
       }


        
}