Feature: OrderQuotationCancel

  Background:
    Given An organization is created via API
    And A user is created via API
    And A project is created
    And The needs of the project are defined

  Scenario: I want to cancel a quotation
    Given An order is created
    And Some providers are selected for the order:
      | providers  | quotations |
      | p1, p2, p3 | q1, q2, q3 |
    And The quotations of the order are requested
    When I cancel the quotation:
      | identifier |
      | q1         |
    Then The quotation should be canceled

  Scenario: I want to receive an error when canceling a validated quotation
    Given An order is created
    And Some providers are selected for the order:
      | providers |
      | p1        |
    And The quotations of the order are requested
    And The quotation is filled
    And The quotation is accepted
    And The quotation is validated
    When I cancel the quotation
    Then The automate transition should be invalid
    And The quotation should not be canceled
