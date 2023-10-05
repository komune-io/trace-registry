Feature: AssetPoolCreate

  Background:
    Given A data unit is created in cccev
    And A concept is created in cccev

  Scenario: I want to create an asset pool
    When I create an asset pool
    Then The asset pool should be created
