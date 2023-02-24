public class ApexControllerClass {
     @AuraEnabled(Cacheable = true)
    public static  List<Account> getAllAccounts() {
        List<Account> lstofAccounts = [SELECT  Id, Name, AnnualRevenue, Rating from Account];
        return lstofAccounts;
    }
}