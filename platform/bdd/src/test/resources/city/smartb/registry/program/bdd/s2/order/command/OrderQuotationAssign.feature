Feature: OrderQuotationAssign

  Background:
    Given An organization is created via API
    And A user is created via API
    And A project is created

  Scenario: I want to assign a quotation
    Given An order is created
    And Some providers are selected for the order:
      | providers |
      | p1        |
    And The quotations of the order are requested
    When I assign the quotation
    Then The quotation should be assigned
