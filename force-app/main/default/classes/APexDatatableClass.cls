public class APexDatatableClass {
    @AuraEnabled (cacheable = true)
    public static List<Contact>getContactRecords(){
        List<Contact>lstofContacts = [select Id, Email, Name, Phone, Department from Contact] ;
         return lstofContacts;
    }
     
}