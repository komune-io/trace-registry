Feature: OrderValidateQuotation

  Background:
    Given An organization is created via API
    And A user is created via API
    And A project is created
    And The needs of the project are defined

  Scenario: I want to validate a quotation
    Given An order is created
    And Some providers are selected for the order:
      | providers      | quotations     |
      | p1, p2, p3, p4 | q1, q2, q3, q4 |
    And The quotations of the order are requested
    And The quotations are filled:
      | identifier |
      | q1         |
      | q2         |
    And The quotation is accepted:
      | quotation |
      | q1        |
    When I validate the quotation:
      | quotation |
      | q1        |
    Then The quotation should be validated
    And The quotations should be canceled:
      | identifier |
      | q2         |
      | q3         |
      | q4         |
