public with sharing class ComponentDisplayClass{
    @ AuraEnabled (cacheable = true)
    public static List<Product2>getRecords(){
        List<Product2>productlist = [select id , Name,Image__c, Image_link__c,Price__c,Rating__c ,ProductCode ,Product_Availability__c ,Description  from  Product2 where CreatedDate > 2023-01-01T00:00:00Z];
        return productlist;
    }
}
