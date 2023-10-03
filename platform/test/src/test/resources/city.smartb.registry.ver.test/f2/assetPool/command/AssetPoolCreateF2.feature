Feature: AssetPoolCreateF2

  Background:
    Given A data unit is created in cccev

  Scenario: I want to create an asset pool via API
    Given A concept is created in cccev:
      | identifier |
      | c1         |
    When I create an asset pool via API:
      | indicator | vintage | status |
      | c1        | 2024    | ACTIVE |
    Then The asset pool should be created:
      | vintage | status |
      | 2024    | ACTIVE |
    Then The asset pool page should contain the asset pools
    Then The asset pool page should contain only this vintage:
      | vintage |
      | 2024    |
    Then The asset pool page should contain only this status:
      | status |
      | ACTIVE |
    Then The asset pool page shouldn't contain this vintage:
      | vintage |
      | 9999    |
    Then The asset pool page shouldn't contain this status:
      | status |
      | CLOSED |
