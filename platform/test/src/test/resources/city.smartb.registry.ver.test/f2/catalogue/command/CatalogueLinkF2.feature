Feature: CatalogueLinkF2

  Scenario: I want to links catalogues to a catalogue via API
    When I create a catalogue via API:
      |identifier| title | status |
      |ParentCatalogue| My cucumber catalogue    | ACTIVE |
    When I create a catalogue via API:
      |identifier| title | status |
      |Linked1    | My cucumber linked catalogue | ACTIVE |
    When I create a catalogue via API:
      |identifier| title | status |
      |Linked2    | My cucumber linked catalogue | ACTIVE |
    When I link a catalogue via API:
      | identifier | catalogues |
      | ParentCatalogue    | linked1,linked2 |
