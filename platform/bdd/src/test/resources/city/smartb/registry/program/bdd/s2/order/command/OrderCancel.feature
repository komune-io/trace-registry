Feature: OrderCancel

  Background:
    Given Some organizations are created via API:
      | identifier |
      | bnf        |
      | p1         |
      | p2         |
      | p3         |
    And Some users are created via API:
      | memberOf |
      | bnf      |
      | p1       |
      | p2       |
      | p3        |
    And A project is created:
      | beneficiary |
      | bnf         |

  Scenario: I want to cancel an order and all its quotations
    Given An order is created
    And Some providers are selected for the order:
      | providers  | quotations |
      | p1, p2, p3 | q1, q2, q3 |
    And The quotations of the order are requested
    When I cancel the order
    Then The order should be canceled
    And The quotations should be canceled:
      | identifier |
      | q1         |
      | q2         |
      | q3         |

  Scenario: I want to cancel an order and all its quotations when some of them have already been rejected
    Given An order is created
    And Some providers are selected for the order:
      | providers  | quotations |
      | p1, p2, p3 | q1, q2, q3 |
    And The quotations of the order are requested
    And The quotation is rejected by the provider:
      | identifier |
      | q2         |
    When I cancel the order
    Then The order should be canceled
    And The quotations should be canceled:
      | identifier |
      | q1         |
      | q3         |
    And The quotation should be rejected by the provider:
      | identifier |
      | q2         |

  Scenario: I want to receive an error when canceling an order for which a quotation has been accepted
    Given An order is created
    And Some providers are selected for the order:
      | providers  | quotations |
      | p1, p2, p3 | q1, q2, q3 |
    And The quotations of the order are requested
    And The quotation is accepted
    When I cancel the order
    Then The automate transition should be invalid
