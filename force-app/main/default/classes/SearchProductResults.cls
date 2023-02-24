public with sharing class SearchProductResults {
    @AuraEnabled (cacheable=true)
   
    public static List<Product2>getProductDetails()
   {
        
      List<Product2>productslist = [select Name,Image__c,Price__c,Rating__c from  Product2];
          return productslist;
    }
}
