public class MyClassApex {
	
    private string Name;
    private String firstName;
    private String qp;

    public MyClassApex(string name){
        this.Name = name;
        this.qp = ApexPages.currentPage().getParameters().get('qp');
    }
    public String getFirstName() {
        return this.firstName;
    }
    public string getName(){
        return Name;
    }
    public void ForCountDown(Integer times){
        for(Integer iterator = 0; iterator < times; iterator++){
            System.debug('Countdown' + iterator);
        }
    }
    public boolean WhileCountDown(Integer times){
        Integer iterator = 0;
        if(times < 0){
            return false;
        }
        while(iterator < times){
            System.debug('');
            iterator++;
        }
        return true;
    }
    public List<Account> getAllAccounts(){
        List<Account> myList = new List<Account>();
        //myList = [SELECT Name, Phone, Description FROM Account];
        myList = [SELECT Name, Id FROM Account];
        return myList;
    }
    public void createAnAccount(string nameForAccount, string round){
        Account acc = new Account(Name = nameForAccount);
        Fixture_Object__c testFix = new Fixture_Object__c(Name = 'Fixture Felipe', Round__c = round);
        insert testFix;
        insert acc;
    }
}