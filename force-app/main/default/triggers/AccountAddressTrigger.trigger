trigger AccountAddressTrigger on Account (before insert, before update) {
    for(Account acc: Trigger.New){
        if(acc.Match_Billing_Address__c){
            if(Trigger.isInsert || Trigger.isUpdate){
                acc.ShippingPostalCode = acc.BillingPostalCode;
            }
        }
    }
}