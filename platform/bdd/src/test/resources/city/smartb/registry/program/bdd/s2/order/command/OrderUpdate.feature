Feature: OrderUpdate

  Background:
    Given An organization is created via API
    And A user is created via API
    And A project is created

  Scenario: I want to update an order
    Given An order is created
    When I update the order:
      | SHELTER | INFLATION_STATION |
      | 3       | 1                 |
    Then The order should be updated

  Scenario: I want to receive an error when updating an order for which the quotations have been requested
    Given An order is created
    And The quotations of the order are requested
    When I update the order
    Then The automate transition should be invalid
