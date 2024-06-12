public with sharing class getStanding {

    @AuraEnabled(cacheable = true)
    public static List<Account> getTeams() {
        return [SELECT Name FROM Account WHERE RecordType.Name = 'La Liga' OR
        RecordType.Name = 'Premier League'];
    }
    @AuraEnabled(cacheable = true)
    public static List<Fixture_Object__c> getFixtures(){
        return [SELECT Id,Name, Home_Team__c,
                Score_Home_Team__c,
                Visitor_Team__c,
                Score_Visitor_Team__c,
                Result__c,
                Season_lookup__c FROM Fixture_Object__c];
    }
}