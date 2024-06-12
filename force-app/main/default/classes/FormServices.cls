public with sharing class FormServices {

    @AuraEnabled(cacheable = true)
    public static List<Person__c> getPerson() {
        return [SELECT Name, Full_name__c, Email__c,Phone__c FROM Person__c];
    }

    @AuraEnabled()
    public static void savePerson(String personId, String name) {

        List <Person__c> person = [SELECT Full_name__c, Email__c,Phone__c FROM Person__c WHERE Id = :personId];
        person[0].Full_name__c = name;
        update person;
    }
}