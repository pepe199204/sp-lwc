public class ContactAndLeadSearch {
    
    public static List<List< sObject>> searchContactsAndLeads(String incoming){
        List<List<sObject>> searchList = [FIND :incoming IN ALL FIELDS
                                         RETURNING Contact(Firstname,LastName), Lead(FirstName,LastName)];
       System.debug('List ==> ' + searchList);
       return searchList;
    }
}