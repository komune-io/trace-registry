Feature: AssetPoolCreateF2

  Background:
    Given A data unit is created in cccev

  Scenario: I want to create an asset pool via API
    Given A concept is created in cccev:
      | identifier |
      | c1         |
    When I create an asset pool via API:
      | indicator |
      | c1        |
    Then The asset pool should be created:
      | indicator |
      | c1        |
