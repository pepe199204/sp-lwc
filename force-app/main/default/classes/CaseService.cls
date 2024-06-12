public with sharing class CaseService {

    public static void closeCases(Set<Id> casesIds, String closeReason){
        
        List<Case> casesToClose = [SELECT Id, Reason FROM Case where Id in :casesIds];
        
        for(Case caseToClose:casesToClose){
            
            caseToClose.reason = closeReason;
            caseToClose.Status = 'Closed';
        }
        update casesToClose;
    }
}