Feature: ProductCreate

  Background:
    Given An organization is created via API:
      | identifier | roles              | type     |
      | pvd_org    | provider_equipment | PROVIDER_EQUIPMENT |
    And A user is created via API:
      | identifier |
      | pvd_user   |

  Scenario: I want to create a product
    When I create a product
    Then The product should be created
