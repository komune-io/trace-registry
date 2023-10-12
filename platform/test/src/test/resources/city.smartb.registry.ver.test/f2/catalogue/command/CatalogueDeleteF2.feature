Feature: CatalogueDeleteF2

  Scenario: I want to delete a catalogue via API
    Given A catalogue is created via API
    When I delete the catalogue
    Then The catalogue should be deleted

