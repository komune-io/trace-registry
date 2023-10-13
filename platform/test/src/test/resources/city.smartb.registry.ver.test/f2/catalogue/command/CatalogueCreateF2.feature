Feature: CatalogueCreateF2

  Scenario: I want to create a catalogue via API
    When I create a catalogue via API:
      | title | status |
      | My cucumber catalogue    | ACTIVE |
    Then The catalogue should be created:
      | title | status |
      | My cucumber catalogue | ACTIVE |
    Then The catalogue page should contain only this status:
      | status |
      | ACTIVE |
    Then The catalogue page shouldn't contain this status:
      | status |
      | DELETED |
