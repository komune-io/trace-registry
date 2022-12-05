Feature: ProductInitCatalog

  Background:
    Given An organization is created via API:
      | identifier | role               | type               |
      | pvd        | provider_equipment | PROVIDER_EQUIPMENT |

  Scenario: I want to initialize a product catalog
    When I initialize a product catalog
    Then The product catalog should be initialized

  Scenario: I want to receive an error when initializing an existing catalog
    Given A product catalog is initialized
    When I initialize a product catalog
    Then An exception should be thrown:
      | code |
      | 409  |
