Feature: QuotationTaskCancel

  Background:
    Given An organization is created via API
    And A user is created via API
    And A project is created
    And The needs of the project are defined

  Scenario: I want to have the quotation task automatically canceled when I cancel a quotation
    Given An order is created
    And Some providers are selected for the order:
      | providers | quotations |
      | p1        | q1         |
    And The quotations of the order are requested
    And The quotation is filled
    And The quotation is accepted
    When I cancel the quotation
    Then The task should be created:
      | identifier | type      | targetQuotation | automatic |
      | t          | QUOTATION | q1              | true      |
    And The task should be canceled
