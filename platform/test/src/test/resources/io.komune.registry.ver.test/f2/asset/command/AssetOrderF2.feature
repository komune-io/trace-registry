Feature: AssetOrderF2

  Background:
    Given A data unit is created in cccev
    And A concept is created in cccev
    And An asset pool is created

  Scenario: I want to place an order via API
    When I place an order via API:
      | by     | quantity | type   |
      | SmartB | 100      | OFFSET |
    Then The order should be created
    Then The order page should contain the order
    Then The order page should contain the order:
      | by     |
      | SmartB |
    Then The order page shouldn't contain the order:
      | by   |
      | Test |
