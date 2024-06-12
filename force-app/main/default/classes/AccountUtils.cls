public class AccountUtils {

    public List<Account> accountsByState(String billing){
        List<Account> accounts = [SELECT ID, Name, BillingState FROM Account WHERE BillingState =: billing];
        return accounts;
    }
}