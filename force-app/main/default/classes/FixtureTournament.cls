public class FixtureTournament {
    public static void FixtureTournament(){
        
    }
    public List<Account> getAllAccounts(){
        List<Account> myList = new List<Account>();
        //myList = [SELECT Name, Phone, Description FROM Account];
        myList = [SELECT Name FROM Account];
        return myList;
    }
    public List<Account> createFixture(){
        List<Account> teamsArr = new List<Account>();
        List<Account> fixtureArr = new List<Account>();
        
        
        teamsArr = [SELECT Name FROM Account];
        Integer indexFixtureLocal = Math.round(Math.random() * 3);
        System.debug('index =>'+indexFixtureLocal);
        for(Integer i = 0; i < 3; i++){
            if(!fixtureArr.isEmpty()){
               fixtureArr[i] = teamsArr[indexFixtureLocal]; 
            }
            
        }
        System.debug('fixture =>'+fixtureArr);
        return fixtureArr;
    }
    
}