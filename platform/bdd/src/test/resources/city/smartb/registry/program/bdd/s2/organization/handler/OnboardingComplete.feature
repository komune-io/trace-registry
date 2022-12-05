Feature: OnboardingComplete

  Background:
    Given An address is defined
    And A billing is defined
    And An eligibility is created:
      | legalCategory3Code | condition |
      | 9110               | ALWAYS    |

  Scenario: I want to automatically complete the onboarding when the corresponding task is validated
    Given I onboard as a beneficiary via API:
      | org.identifier | org.type            | org.legalCategory3Code |
      | bnf            | BENEFICIARY_PRIVATE | 9110                   |
    Then The task should be created:
      | identifier | type       | targetOrganization | automatic |
      | t          | ONBOARDING | bnf                | true      |
    When I update the status of the task:
      | status |
      | DONE   |
    Then The organization should be created:
      | identifier | roles                  |
      | bnf        | beneficiary, uncharted |
