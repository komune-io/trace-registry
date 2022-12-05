Feature: OrderSelectProviders

  Background:
    Given Some organizations are created via API:
      | identifier |
      | p1         |
      | p2         |
      | p3         |
    And A user is created via API
    And A project is created

  Scenario: I want to select providers for an order
    Given An order is created
    When I select providers for the order:
      | providers  |
      | p1, p2, p3 |
    Then The quotations should be created
