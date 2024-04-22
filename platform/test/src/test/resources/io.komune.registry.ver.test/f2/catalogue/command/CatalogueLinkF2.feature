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
    When I create a catalogue via API:
      |identifier| title |
      |ParentCatalogue| My cucumber catalogue    |
    When I create a catalogue via API:
      |identifier| title |
      |Linked1    | My cucumber linked catalogue |
    When I create a catalogue via API:
      |identifier| title |
      |Linked2    | My cucumber linked catalogue |
    When I link a catalogue via API:
      | identifier | catalogues |
      | ParentCatalogue    | linked1,linked2 |
    Then The catalogues should be linked:
      | identifier | catalogues |
      | ParentCatalogue | linked1,linked2 |


  Scenario: I want to link themes to a catalogue via API
    When I create a catalogue via API:
      | identifier | title | status |
      | ParentCatalogue3 | My cucumber catalogue    | ACTIVE |
    When I link themes to a catalogue via API:
      | identifier | themes |
      | ParentCatalogue3 | {"id": "theme", "type": "skos:Concept", "prefLabels": {"theme1": "Theme One"}, "definitions": {"theme1": "Theme One"}} |
    Then The themes should be linked to the catalogue
      | identifier | themes |
      | ParentCatalogue3 | {"id": "theme", "type": "skos:Concept", "prefLabels": {"theme1": "Theme One"}, "definitions": {"theme1": "Theme One"}}|
