public class ContactSearch {

    public static List<Contact> searchForContacts(String lastNameParam, String mailingCodeParam){
        
        List<Contact> contact;
        contact = [SELECT Account.Name,Account.Id FROM Contact WHERE LastName = :lastNameParam AND MailingPostalCode = :mailingCodeParam];
        System.debug('contact'+contact);
        return contact;
    }
}