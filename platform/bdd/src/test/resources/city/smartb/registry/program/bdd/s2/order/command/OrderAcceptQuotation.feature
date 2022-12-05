Feature: OrderAcceptQuotation

  Background:
    Given An organization is created via API
    And A user is created via API
    And A project is created
    And The needs of the project are defined

  Scenario: I want to accept a quotation
    Given An order is created
    And Some providers are selected for the order:
      | providers |
      | p1        |
    And The quotations of the order are requested
    And The quotation is filled
    When I accept the quotation
    Then The quotation should be accepted

  Scenario: I want to receive an error when accepting a quotation in an order with an already accepted quotation
    Given An order is created
    And Some providers are selected for the order:
      | providers | quotations |
      | p1, p2    | q1, q2     |
    And The quotations of the order are requested
    And The quotations are filled:
      | identifier |
      | q1         |
      | q2         |
    And The quotation is accepted:
      | quotation |
      | q1        |
    When I accept the quotation:
      | quotation |
      | q2        |
    Then The automate transition should be invalid
    And The quotation should not be accepted
