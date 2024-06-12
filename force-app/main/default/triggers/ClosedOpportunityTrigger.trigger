trigger ClosedOpportunityTrigger on Opportunity (after insert, after update) {
    List<Task> taskList = new List<Task>();
    for(Opportunity opp: Trigger.New){
        if(opp.StageName == 'Closed Won'){
            Task task = new Task();
            task.Subject = 'Follow Up Test Task';
            task.WhatId = opp.Id;
            taskList.add(task);
        }
    }
    if(taskList.size()>0){
        insert taskList;
    }

}