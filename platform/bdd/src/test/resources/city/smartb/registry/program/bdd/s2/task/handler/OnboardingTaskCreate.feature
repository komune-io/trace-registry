Feature: OnboardingTaskCreate

  Background:
    Given An address is defined
    And A billing is defined
    And An eligibility is created:
      | legalCategory3Code | condition |
      | 9110               | ALWAYS    |

  Scenario: I want to have an onboarding task automatically created when I onboard as a beneficiary of type private
    When I onboard as a beneficiary via API:
      | org.identifier | org.type            | org.legalCategory3Code |
      | bnf            | BENEFICIARY_PRIVATE | 9110                   |
    Then The organization should be created:
      | identifier |
      | bnf        |
    And The task should be created:
      | identifier | type       | targetOrganization | automatic |
      | t          | ONBOARDING | bnf                | true      |

  Scenario: I want to have an onboarding task automatically created when I onboard as a beneficiary of type condominium
    When I onboard as a beneficiary via API:
      | org.identifier | org.type                | org.legalCategory3Code |
      | bnf            | BENEFICIARY_CONDOMINIUM | 9110                   |
    Then The organization should be created:
      | identifier |
      | bnf        |
    And The task should be created:
      | identifier | type       | targetOrganization | automatic |
      | t          | ONBOARDING | bnf                | true      |

  Scenario: I don't want to have an onboarding task automatically created when I onboard as a beneficiary of type public
    When I onboard as a beneficiary via API:
      | org.identifier | org.type           | org.legalCategory3Code |
      | bnf            | BENEFICIARY_PUBLIC | 9110                   |
    Then The organization should be created:
      | identifier |
      | bnf        |
    And The task should not be created:
      | type       | targetOrganization |
      | ONBOARDING | bnf                |

  Scenario: I don't want to have an onboarding task automatically created when I onboard as a beneficiary of type association
    When I onboard as a beneficiary via API:
      | org.identifier | org.type                | org.legalCategory3Code |
      | bnf            | BENEFICIARY_ASSOCIATION | 9110                   |
    Then The organization should be created:
      | identifier |
      | bnf        |
    And The task should not be created:
      | type       | targetOrganization |
      | ONBOARDING | bnf                |
