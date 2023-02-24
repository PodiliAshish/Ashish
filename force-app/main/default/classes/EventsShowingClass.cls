public with sharing class EventsShowingClass {
    @AuraEnabled(cacheable=true)
   
    public  static List<Event_Registration__c>getevents() {

        List<Event_Registration__c>eventslist = [select id, Name, Event_Date_and_Time__c,Email__c,First_Name__c,Last_Name__c,Phone_number__c,Tell_us_about_your_needs__c,Venue__c from Event_Registration__c];
        return eventslist;
    }
}
