import { LightningElement, wire, track } from 'lwc';
import allRecords from '@salesforce/apex/ProductController.allRecords';
//import sendChildRecordId from '@salesforce/apex/TestObjController.listBuilderMethod';


export default class Productselector extends LightningElement {
    

    @wire(allRecords) recordList;      //get record list from Org

    eventDetail;                // capture id from event detail object
    @track idList=[];          // put the eventDeetail in this array, send this to org 
    listLabel;                 // capture name from event detail object
    lishowText=[];              // add the show text in this array, show this on lwc

    handleOnProductSelect(event){
        this.eventDetail = event.detail.value;
        this.listLabel = event.detail.name;
        const showText = event.detail.value+' '+event.detail.name;
        if(!this.idList.includes(this.eventDetail)){
            this.idList.push( this.eventDetail);
            this.lishowText.push(showText);
        }
    }

    refreshList(){              // refresh the list of labels and ids
        this.idList = [];
        this.lishowText = [];
    }

    sendList(){                 // send the list of ids to Org using a controller
        alert(this.idList);
        sendChildRecordId({idList : this.idList});       // imported it, calling imperatively 
                                                        // and passing the parameters idList with the present idList array
    }

}  
