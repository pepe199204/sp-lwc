@RestResource(urlMapping = '/case/*/close')
global with sharing class CaseCloseResource {
	@HttpPost
    global static void closeCase(String closeReason){
        System.debug('requestContext ==> ' + RestContext.request.requestURI.split('/')[2]);
        CaseService.closeCases(new Set<ID> { RestContext.request.requestURI.split('/')[2] }, closeReason);
    }
}