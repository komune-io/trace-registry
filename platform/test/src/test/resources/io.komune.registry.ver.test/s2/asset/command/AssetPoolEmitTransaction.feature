Feature: AssetPoolEmitTransaction

  Background:
    Given A data unit is created in cccev
    And A concept is created in cccev

  Scenario: I want to emit transactions on an active asset pool
    Given An asset pool is created
    When I emit a transaction:
      | type   | to     | quantity |
      | ISSUED | SmartB | 666      |
    Then The transaction should be emitted
    When I emit a transaction:
      | type        | from   | to                | quantity |
      | TRANSFERRED | SmartB | Monsstrai Company | 66       |
    Then The transaction should be emitted
    And The wallets of the asset pool should be updated:
      | owner             | value |
      | SmartB            | 600   |
      | Monsstrai Company | 66    |

  Scenario: I want to receive an error when emitting a transaction with a negative quantity
    Given An asset pool is created
    When I emit a transaction:
      | type   | to     | quantity |
      | ISSUED | SmartB | -100     |
    Then An exception should be thrown:
      | code |
      | 1000 |

  Scenario: I want to receive an error when emitting a transaction without enough assets in my wallet
    Given An asset pool is created
    When I emit a transaction:
      | type        | from   | to                | quantity |
      | TRANSFERRED | SmartB | Monsstrai Company | 100      |
    Then An exception should be thrown:
      | code |
      | 1001 |

  Scenario: I want to receive an error when emitting a transaction with a quantity that does not respect the granularity specified in the asset pool (precision)
    Given An asset pool is created:
      | granularity |
      | 0.01        |
    When I emit a transaction:
      | type   | to     | quantity |
      | ISSUED | SmartB | 100.001  |
    Then An exception should be thrown:
      | code |
      | 1002 |

  Scenario: I want to receive an error when emitting a transaction with a quantity that does not respect the granularity specified in the asset pool (modulus)
    Given An asset pool is created:
      | granularity |
      | 0.05        |
    When I emit a transaction:
      | type   | to     | quantity |
      | ISSUED | SmartB | 100.05   |
    Then The transaction should be emitted
    And The wallets of the asset pool should be updated:
      | owner  | value  |
      | SmartB | 100.05 |
    When I emit a transaction:
      | type   | to     | quantity |
      | ISSUED | SmartB | 100.04   |
    Then An exception should be thrown:
      | code |
      | 1002 |
    And The wallets of the asset pool should be updated:
      | owner  | value  |
      | SmartB | 100.05 |
