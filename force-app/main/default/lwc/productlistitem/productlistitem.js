import { LightningElement, api} from 'lwc';

export default class Productlistitem extends LightningElement {
    @api product;
    
    handleOnCLick(event){           // on test record tile click, an event is sent
        event.preventDefault();
    
        this.dispatchEvent(
            new CustomEvent('productselect',
                {
                    detail : {      // here detail is a key-object, usually it's a key-value, even a record can be loaded
                        value : this.parentRecord.Id,
                        name : this.parentRecord.Name
                        }
                }
            )
        );
    }
}