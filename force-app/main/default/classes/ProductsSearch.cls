public with sharing class ProductsSearch {
    @AuraEnabled (cacheable = true)
    public static List<Product2> getProducts(string searchkey ){
       string key='%' + searchkey+'%';
        List<Product2> productslist = [select id,Price__c,Image_link__c,Name,ProductCode,Rating__c,Product_Availability__c from Product2 where CreatedDate > 2023-01-01T00:00:00Z AND Name LIKE:  key];
        return productslist;
    }
}
