public class AccountHandler {
    
    public static Account insertNewAccount(String name){
        Account acct;
        try {
            acct = new Account(Name=name,Phone='(415)555-1212');
        	insert acct;
        	return acct;
            
        }catch(DmlException e){
            System.debug('A DML exception has occurred: ' + e.getMessage());
            return null;
        }
        
    }

}