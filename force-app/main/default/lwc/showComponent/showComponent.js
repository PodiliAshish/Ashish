import { LightningElement , api} from 'lwc';

export default class ShowComponent extends LightningElement {
    @api recordId;
    @api objectApiName;

}