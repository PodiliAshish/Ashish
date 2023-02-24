import { LightningElement,wire,api } from 'lwc';
import getevents from '@salesforce/apex/EventsShowingClass.getevents';

export default class EventssearchingComponent extends LightningElement {
    earch =''
    hasResults
    @wire(getevents,{searchTerm:'$search'})
    searchwiredItem;
    
    handleSearchTermChange(event) {
    window.clearTimeout(this.delayTimeout);
            const searchTerm = event.target.value;
            this.delayTimeout = setTimeout(() => {
                this.search = searchTerm;
            }, 300);
    }
    get hasResults() {
        return (this.searchwiredItem.data.length > 0);
    }
    
}