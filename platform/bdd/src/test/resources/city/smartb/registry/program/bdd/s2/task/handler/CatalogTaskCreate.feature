Feature: CatalogTaskCreate

  Background:
    Given An organization is created via API:
      | identifier | role               | type               |
      | pvd        | provider_equipment | PROVIDER_EQUIPMENT |

  Scenario: I want to have a catalog task automatically created when I initialize a catalog
    When I initialize a product catalog:
      | provider |
      | pvd      |
    Then The task should be created:
      | identifier  | type    | targetOrganization | automatic |
      | catalog_pvd | CATALOG | pvd                | true      |
    And The properties of the task should be updated:
      | pending | total |
      | 0       | 0     |
