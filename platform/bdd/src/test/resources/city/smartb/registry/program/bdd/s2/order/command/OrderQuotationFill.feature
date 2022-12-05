Feature: OrderQuotationFill

  Background:
    Given An organization is created via API
    And A user is created via API
    And A project is created
    And The needs of the project are defined

  Scenario: I want to fill a quotation
    Given An order is created
    And Some providers are selected for the order:
      | providers |
      | p1        |
    And The quotations of the order are requested
    When I fill the quotation
    Then The quotation should be filled
