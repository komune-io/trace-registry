Feature: AssetIssueF2

  Background:
    Given A data unit is created in cccev
    And A concept is created in cccev
    And An organization is defined:
      | identifier | roles           |
      | SmartB     | tr_orchestrator |
    And A user is defined:
      | identifier |
      | orch       |

  Scenario: I want to issue assets via API
    Given I am authenticated as:
      | identifier |
      | orch       |
    And An asset pool is created
    When I issue assets via API:
      | receiver | quantity |
      | SmartB   | 666      |
    Then The transaction should be emitted:
      | from | to     | quantity | type   |
      | null | SmartB | 666      | ISSUED |
    And The wallets of the asset pool should be updated:
      | owner  | value |
      | SmartB | 666   |
