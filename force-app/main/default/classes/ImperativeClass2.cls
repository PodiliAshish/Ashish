public class ImperativeClass2 {
    @AuraEnabled (cacheable = true)
    public static List<Account>imperativeMethod2(){
        List<Account>accountslist = [SELECT  Id, Name, AnnualRevenue, Rating from Account];
        return accountslist;
    }

}