public with sharing class AccountController {
  @AuraEnabled(cacheable=true)
  public static List<Account> getAccList() {
    return [
      SELECT ID, NAME, PHONE
      FROM ACCOUNT
      WITH SECURITY_ENFORCED
      LIMIT 10
    ];
  }
}
