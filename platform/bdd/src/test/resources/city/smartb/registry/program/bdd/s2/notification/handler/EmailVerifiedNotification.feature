Feature: EmailVerifiedNotification

  Background:
    Given An address is defined
    And A billing is defined
    And An eligibility is created:
      | legalCategory3Code | condition |
      | 9110               | ALWAYS    |

  Scenario: I want to send a notification when an onboarding beneficiary user verifies its email
    Given A beneficiary has onboarded via API:
      | org.identifier | org.type            | org.legalCategory3Code | usr.identifier | usr.givenName | usr.familyName |
      | bnf            | BENEFICIARY_PRIVATE | 9110                   | bnf-usr        | ben           | eficiaire      |
    When A keycloak event is published:
      | type         | user    |
      | VERIFY_EMAIL | bnf-usr |
    Then A notification should have been sent:
      | type                                         | receivers | contact.firstname | contact.lastname | url.route |
      | BENEFICIARY__EMAIL_VERIFIED_NEEDS_VALIDATION | bnf-usr   | ben               | EFICIAIRE        | ROOT      |

  Scenario: I want to send a notification when a validated beneficiary user verifies its email
    Given A beneficiary has onboarded via API:
      | org.identifier | org.type                | org.legalCategory3Code | usr.identifier | usr.givenName | usr.familyName |
      | bnf            | BENEFICIARY_ASSOCIATION | 9110                   | bnf-usr        | ben           | eficiaire      |
    When A keycloak event is published:
      | type         | user    |
      | VERIFY_EMAIL | bnf-usr |
    Then A notification should have been sent:
      | type                                      | receivers | contact.firstname | contact.lastname | url.route |
      | BENEFICIARY__EMAIL_VERIFIED_NO_VALIDATION | bnf-usr   | ben               | EFICIAIRE        | ROOT      |

  Scenario: I want to send a notification when an validated provider_equipment user verifies its email
    Given A provider has onboarded via API:
      | org.identifier | org.type           | usr.identifier | usr.givenName | usr.familyName |
      | pvd            | PROVIDER_EQUIPMENT | pvd-usr        | manu          | faktur         |
    When A keycloak event is published:
      | type         | user    |
      | VERIFY_EMAIL | pvd-usr |
    Then A notification should have been sent:
      | type                                     | receivers | contact.firstname | contact.lastname | url.route |
      | PEQUIPMENT__EMAIL_VERIFIED_NO_VALIDATION | pvd-usr   | manu              | FAKTUR           | ROOT      |
