Feature: OnboardingTaskStopWaiting

  Background:
    Given An address is defined
    And A billing is defined
    And An eligibility is created:
      | legalCategory3Code | condition |
      | 9110               | ALWAYS    |

  Scenario: I want to update the status of a task from WAITING to PENDING when an onboarding beneficiary uploads a file
    Given A beneficiary has onboarded via API:
      | org.identifier | org.type            | org.legalCategory3Code |
      | bnf            | BENEFICIARY_PRIVATE | 9110                   |
    Then The task should be created:
      | identifier | type       | targetOrganization | automatic |
      | t          | ONBOARDING | bnf                | true      |
    Given I update the status of the task:
      | status  |
      | WAITING |
    When I upload a file for my organization
    Then The status of the task should be updated:
      | status  |
      | PENDING |
