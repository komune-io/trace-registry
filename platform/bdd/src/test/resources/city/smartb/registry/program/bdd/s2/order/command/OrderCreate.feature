Feature: OrderCreate

  Background:
    Given An organization is created via API
    And A user is created via API
    And A project is created

  Scenario: I want to create an order
    When I create an order:
      | SHELTER | INFLATION_STATION |
      | 3       | 1                 |
    Then The order should be created
