public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactsBornAfter(Date birthDate){
        return [
            SELECT Name, Title, Email, Phone
            FROM Contact
            WHERE birthDate > :birthDate
            WITH SECURITY_ENFORCED
        ];
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(){
        throw new AuraHandledException('Contact forced error!!');    
        // return [
        //     SELECT FirstName, LastName, Email
        //     FROM Contact
        //     WITH SECURITY_ENFORCED
        //     ORDER BY FirstName
        // ];
    }
}