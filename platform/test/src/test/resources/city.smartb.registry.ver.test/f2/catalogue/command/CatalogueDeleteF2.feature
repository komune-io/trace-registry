Feature: CatalogueDeleteF2
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

  Scenario: I want to delete a catalogue via API
    Given A catalogue is created via API
    When I delete the catalogue
    Then The catalogue should be deleted

