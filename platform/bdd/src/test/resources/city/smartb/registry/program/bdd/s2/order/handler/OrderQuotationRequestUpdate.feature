Feature: OrderQuotationRequestUpdate

  Background:
    Given An organization is created via API
    And A user is created via API
    And A project is created
    And The needs of the project are defined

  Scenario: I want to request an update on a quotation when the associated task status is updated to WAITING
    Given An order is created
    And Some providers are selected for the order:
      | providers | quotations |
      | p1        | q1         |
    And The quotations of the order are requested
    And The quotation is filled
    And The quotation is accepted
    Then The task should be created:
      | identifier | type      | targetQuotation | automatic |
      | t          | QUOTATION | q1              | true      |
    When I update the status of the task:
      | status  |
      | WAITING |
    Then An update should be requested on the quotation
