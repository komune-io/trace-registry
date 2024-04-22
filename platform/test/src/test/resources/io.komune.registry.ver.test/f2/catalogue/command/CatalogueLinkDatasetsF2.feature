Feature: CatalogueLinkF2
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

  Scenario: I want to links catalogues to a catalogue via API
    Given I create a catalogue via API:
      |identifier| title |
      |ParentCatalogue| My cucumber catalogue |
    Given I create a dataset via API:
      | identifier | title |
      | MyCatSet1 | My catalogue dataset1 |
    Given I create a dataset via API:
      | identifier | title |
      | MyCatSet2 | My catalogue dataset2 |
    Given I create a dataset via API:
      | identifier | title | status |
      | MyCatSet3 | My catalogue dataset1    | ACTIVE |
    When I link datasets to the catalogue via API:
      | identifier | themes |
      | ParentCatalogue | MyCatSet1,MyCatSet2,MyCatSet3 |
    Then The datasets should be linked to the catalogue:
      | identifier | themes |
      | ParentCatalogue | MyCatSet1,MyCatSet2,MyCatSet3 |