Feature: DatasetDeleteF2
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

  Scenario: I want to delete a dataset via API
    Given A dataset is created via API
    When I delete the dataset
    Then The dataset should be deleted

