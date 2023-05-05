Feature: AssetPoolCreateF2

  Background:
    Given A data unit is created in cccev
    And A concept is created in cccev:
      | identifier |
      | c1         |

  Scenario: I want to create an asset pool via API
    Given A project is created:
      | identifier | indicator |
      | p1         | c1        |
    When I create an asset pool via API:
      | project |
      | p1      |
    Then The asset pool should be created:
      | indicator |
      | c1        |
