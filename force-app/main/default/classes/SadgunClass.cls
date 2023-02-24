public with sharing class SadgunClass {
    @AuraEnabled (cacheable = true)
    public static List<Product2> getProducts(){
       
        List<Product2> productslist = [select Image_link__c  from Product2  limit 1 ];
        return productslist;
    }
}
