Feature: BeneficiaryOnboard

  Background:
    Given An address is defined:
      | identifier | street          | postalCode | city      |
      | ad1        | 123 rue Matysme | 66666      | Velo City |
    And A billing is defined:
      | identifier | owner      | iban                        | bic         |
      | bl1        | Elie Jible | FR1712739000307364717192N67 | BDFEFRPPCCT |
    And An eligibility is created:
      | legalCategory3Code | condition | conditionData |
      | 9110               | NAF       | 42.30Z        |

  Scenario: I want to onboard a beneficiary of type private
    When I onboard as a beneficiary via API:
      | org.identifier | org.siret      | org.name | org.address | org.type            | org.legalCategory3Code | org.nafCode | org.phone  | org.billing | usr.identifier | usr.givenName | usr.familyName | usr.job | usr.phone  | usr.email      |
      | sb             | 84488096300013 | SmartB   | ad1         | BENEFICIARY_PRIVATE | 9110                   | 42.30Z      | 0123456789 | bl1         | eliejible      | Elie          | Jible          | Alive   | 0987654321 | elie@jible.com |
    Then The organization should be created:
      | siret          | rna  | rnc  | name   | address | type                | legalCategory3Code | nafCode | phone      | billing | roles                   | supervisor |
      | 84488096300013 | null | null | SmartB | ad1     | BENEFICIARY_PRIVATE | 9110               | 42.30Z  | 0123456789 | bl1     | beneficiary, onboarding | eliejible  |
    And The user should be created:
      | memberOf | givenName | familyName | job   | phone      | email          | assignedRoles |
      | sb       | Elie      | Jible      | Alive | 0987654321 | elie@jible.com | admin         |

  Scenario: I want to onboard a beneficiary of type public
    When I onboard as a beneficiary via API:
      | org.identifier | org.siret      | org.name | org.address | org.type           | org.legalCategory3Code | org.nafCode | org.phone  | org.billing | usr.identifier | usr.givenName | usr.familyName | usr.job | usr.phone  | usr.email      |
      | sb             | 84488096300013 | SmartB   | ad1         | BENEFICIARY_PUBLIC | 9110                   | 42.30Z      | 0123456789 | bl1         | eliejible      | Elie          | Jible          | Alive   | 0987654321 | elie@jible.com |
    Then The organization should be created:
      | siret          | rna  | rnc  | name   | address | type               | legalCategory3Code | nafCode | phone      | billing | roles                  | supervisor |
      | 84488096300013 | null | null | SmartB | ad1     | BENEFICIARY_PUBLIC | 9110               | 42.30Z  | 0123456789 | bl1     | beneficiary, uncharted | eliejible  |
    And The user should be created:
      | memberOf | givenName | familyName | job   | phone      | email          | assignedRoles |
      | sb       | Elie      | Jible      | Alive | 0987654321 | elie@jible.com | admin         |

  Scenario: I want to onboard a beneficiary of type association
    When I onboard as a beneficiary via API:
      | org.identifier | org.rna    | org.name | org.address | org.type                | org.legalCategory3Code | org.nafCode | org.phone  | org.billing | usr.identifier | usr.givenName | usr.familyName | usr.job | usr.phone  | usr.email      |
      | sb             | W133036599 | Banana   | ad1         | BENEFICIARY_ASSOCIATION | 9110                   | 42.30Z      | 0123456789 | bl1         | eliejible      | Elie          | Jible          | Alive   | 0987654321 | elie@jible.com |
    Then The organization should be created:
      | siret | rna        | rnc  | name   | address | type                    | legalCategory3Code | nafCode | phone      | billing | roles                  | supervisor |
      | null  | W133036599 | null | Banana | ad1     | BENEFICIARY_ASSOCIATION | 9110               | 42.30Z  | 0123456789 | bl1     | beneficiary, uncharted | eliejible  |
    And The user should be created:
      | memberOf | givenName | familyName | job   | phone      | email          | assignedRoles |
      | sb       | Elie      | Jible      | Alive | 0987654321 | elie@jible.com | admin         |

  Scenario: I want to onboard a beneficiary of type condominium
    When I onboard as a beneficiary via API:
      | org.identifier | org.rnc    | org.name | org.address | org.type                | org.legalCategory3Code | org.nafCode | org.phone  | org.billing | usr.identifier | usr.givenName | usr.familyName | usr.job | usr.phone  | usr.email      |
      | sb             | 1234567890 | SmartB   | ad1         | BENEFICIARY_CONDOMINIUM | 9110                   | 42.30Z      | 0123456789 | bl1         | eliejible      | Elie          | Jible          | Alive   | 0987654321 | elie@jible.com |
    Then The organization should be created:
      | siret | rna  | rnc        | name   | address | type                    | legalCategory3Code | nafCode | phone      | billing | roles                   | supervisor |
      | null  | null | 1234567890 | SmartB | ad1     | BENEFICIARY_CONDOMINIUM | 9110               | 42.30Z  | 0123456789 | bl1     | beneficiary, onboarding | eliejible  |
    And The user should be created:
      | memberOf | givenName | familyName | job   | phone      | email          | assignedRoles |
      | sb       | Elie      | Jible      | Alive | 0987654321 | elie@jible.com | admin         |

  Scenario: I want to receive an error when onboarding a non-eligible beneficiary
    When I onboard as a beneficiary via API:
      | org.identifier | org.rnc    | org.name | org.address | org.type                | org.legalCategory3Code | org.nafCode | org.phone  | org.billing | usr.identifier | usr.givenName | usr.familyName | usr.job | usr.phone  | usr.email      |
      | sb             | 1234567890 | SmartB   | ad1         | BENEFICIARY_CONDOMINIUM | fake                   | blblbl      | 0123456789 | bl1         | eliejible      | Elie          | Jible          | Alive   | 0987654321 | elie@jible.com |
    Then The organization should not be created:
      | name   |
      | SmartB |
    And The user should not be created:
      | email          |
      | elie@jible.com |
    And An exception should be thrown:
      | code |
      | 1000 |
