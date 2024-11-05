Feature: AssetOrderF2
  Background:
    Given A data unit is created in cccev
    And A concept is created in cccev
    And An asset pool is created
    Given An organization is defined:
      | roles           |
      | tr_orchestrator_user |
    And A user is defined:
      | identifier |
      | orch       |
    And I am authenticated as:
      | identifier |
      | orch       |

  Scenario: I want to place an order via API
    When I place an order via API:
      | by     | quantity | type   |
      | Komune | 100      | OFFSET |
    Then The order should be created
    Then The order page should contain the order
    Then The order page should contain the order:
      | by     |
      | Komune |
    Then The order page shouldn't contain the order:
      | by   |
      | Test |
