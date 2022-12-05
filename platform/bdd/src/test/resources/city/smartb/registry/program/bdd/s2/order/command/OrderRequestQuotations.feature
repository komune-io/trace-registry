Feature: OrderRequestQuotations

  Background:
    Given Some organizations are created via API:
      | identifier |
      | p1         |
      | p2         |
      | p3         |
    And A user is created via API
    And A project is created

  Scenario: I want to request the quotations of an order
    Given An order is created
    And I select providers for the order:
      | providers  |
      | p1, p2, p3 |
    When I request the quotations of the order
    Then The quotations of the order should be requested
