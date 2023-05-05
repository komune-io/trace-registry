Feature: AssetPoolEmitTransaction

  Background:
    Given A data unit is created in cccev
    And A concept is created in cccev

  Scenario: I want to emit transactions on an active asset pool
    Given An asset pool is created
    When I emit a transaction:
      | type  | to     | quantity |
      | ISSUE | SmartB | 666      |
    Then The transaction should be emitted
    When I emit a transaction:
      | type     | from   | to                | quantity |
      | TRANSFER | SmartB | Monsstrai Company | 66       |
    Then The transaction should be emitted
    And The wallets of the asset pool should be updated:
      | owner             | value |
      | SmartB            | 600   |
      | Monsstrai Company | 66    |
