Feature: CatalogueCreateF2

  Scenario: I want to create a catalogue via API
    When I create a catalogue via API:
      |identifier| title | status |
      |ParentCatalogue| My cucumber catalogue    | ACTIVE |
    When I create a catalogue via API:
      |identifier| title | status |
      |Linked    | My cucumber linked catalogue | ACTIVE |
    When I link a catalogue via API:
      | title | status |
      | My cucumber catalogue    | ACTIVE |
      | My cucumber linked catalogue | ACTIVE |
    Then The catalogue should be created:
      | title | status |
      | My cucumber catalogue | ACTIVE |
      | My cucumber linked catalogue | ACTIVE |

