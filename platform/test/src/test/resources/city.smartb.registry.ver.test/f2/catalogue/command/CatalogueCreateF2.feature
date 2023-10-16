Feature: CatalogueCreateF2
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

  Scenario: I want to create a catalogue via API
    When I create a catalogue via API:
      | identifier | title | status |
      | MyCat1 | My cucumber catalogue    | ACTIVE |
    Then The catalogue should be created:
      | identifier | title | status |
      | MyCat1 | My cucumber catalogue | ACTIVE |
    Then The catalogue page should contain only this status:
      | identifier | status |
      | MyCat1     | ACTIVE |
    Then The catalogue page shouldn't contain this status:
      | identifier | status |
      | MyCat1 | DELETED |
