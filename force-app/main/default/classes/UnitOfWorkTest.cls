@IsTest
public class UnitOfWorkTest {
	
    @IsTest
    public static void challengeComplete(){
        fflib_SObjectUnitOfWork unitOfWork = new fflib_SObjectUnitOfWork(
            new Schema.SObjectType[]{
                Account.SObjectType,
                Contact.SObjectType,
                    Note.SObjectType});
        for(Integer i = 0; i < 100; i++){
            Account acc = new Account(Name='TestAcc' + i);
            unitOfWork.registerNew(acc);
            for(Integer j = 0; j < 5; j++){
                Contact c = new Contact(LastName = 'TestContact' + i + '_' + j);
                unitOfWork.registerNew(c, Contact.AccountId, acc);
                Note n = new Note(Title = 'TestNote' + i + '_' + j, Body = 'Test note body.');
                unitOfWork.registerNew(n, Note.ParentId, acc);
            }
        }
        unitOfWork.commitWork();
        System.assertEquals(100, [SELECT Id FROM Account].size());
        System.assertEquals(500, [SELECT Id FROM Contact].size());
        System.assertEquals(500, [SELECT Id FROM Note].size());
    }
}