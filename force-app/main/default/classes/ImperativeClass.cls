public class ImperativeClass {
   @AuraEnabled (cacheable = true)
    public static List<Contact>imperativeMethod(){
        List<Contact>Contactslist = [select Id, Email, Name, Phone, Department from Contact] ;
         return Contactslist;
        
    }

}