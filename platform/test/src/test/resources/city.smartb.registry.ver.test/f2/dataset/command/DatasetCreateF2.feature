Feature: DatasetCreateF2
  Background:
    Given An organization is defined:
      | roles           |
      | tr_orchestrator_user |
    And A user is defined:
      | identifier |
      | orch       |
    And I am authenticated as:
      | identifier |
      | orch       |

  Scenario: I want to create a dataset via API
    When I create a dataset via API:
      | identifier | title | status |
      | MySet1 | My cucumber dataset    | ACTIVE |
    Then The dataset should be created:
      | identifier | title | status |
      | MySet1 | My cucumber dataset | ACTIVE |
    Then The dataset page should contain only this status:
      | identifier | status |
      | MySet1     | ACTIVE |
    Then The dataset page shouldn't contain this status:
      | identifier | status |
      | MySet1 | DELETED |
