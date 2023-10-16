Feature: DatasetLinkF2
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

  Scenario: I want to links datasets to a dataset via API
    When I create a dataset via API:
      |identifier| title | status |
      |ParentDataset| My cucumber dataset    | ACTIVE |
    When I create a dataset via API:
      |identifier| title | status |
      |Linked1    | My cucumber linked dataset | ACTIVE |
    When I create a dataset via API:
      |identifier| title | status |
      |Linked2    | My cucumber linked dataset | ACTIVE |
    When I link a dataset via API:
      | identifier | datasets |
      | ParentDataset    | linked1,linked2 |

  Scenario: I want to link themes to a dataset via API
    When I create a dataset via API:
      | identifier | title | status |
      | ParentDataset3 | My cucumber dataset    | ACTIVE |
    When I link themes to a dataset via API:
      | identifier | themes |
      | ParentDataset3 | {"id": "theme", "type": "skos:Concept", "prefLabels": {"theme1": "Theme One"}, "definitions": {"theme1": "Theme One"}} |
    Then The themes should be linked to the dataset
      | identifier | themes |
      | ParentDataset3 | {"id": "theme", "type": "skos:Concept", "prefLabels": {"theme1": "Theme One"}, "definitions": {"theme1": "Theme One"}}|
