Feature: QuotationTaskCreate

  Background:
    Given An organization is created via API
    And A user is created via API
    And A project is created
    And The needs of the project are defined

  Scenario: I want to have a quotation task automatically created when I accept a quotation
    Given An order is created
    And Some providers are selected for the order:
      | providers | quotations |
      | p1, p2    | q1, q2     |
    And The quotations of the order are requested
    And The quotations are filled:
      | identifier |
      | q1         |
      | q2         |
    When I accept the quotation:
      | quotation |
      | q1        |
    Then The task should be created:
      | identifier | type      | targetQuotation | automatic |
      | t          | QUOTATION | q1              | true      |
    And The task should not be created:
      | type      | targetQuotation |
      | QUOTATION | q2              |
