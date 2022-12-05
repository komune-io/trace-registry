Feature: CatalogTaskMaintain

  Background:
    Given An organization is created via API:
      | identifier | role               | type               |
      | pvd        | provider_equipment | PROVIDER_EQUIPMENT |
    And A product catalog is initialized:
      | provider |
      | pvd      |
    Then The task should be created:
      | identifier  | type    | targetOrganization | automatic |
      | catalog_pvd | CATALOG | pvd                | true      |

  Scenario: I want the catalog task properties to be maintained when I create a product
    When I create a product:
      | provider |
      | pvd      |
    Then The properties of the task should be updated:
      | pending | total |
      | 1       | 1     |

  Scenario: I want the catalog task properties to be maintained when I validate a product
    Given A product is created:
      | provider |
      | pvd      |
    When I validate the product
    Then The properties of the task should be updated:
      | pending | total |
      | 0       | 1     |

  Scenario: I want the catalog task properties to be maintained when I reject a product
    Given A product is created:
      | provider |
      | pvd      |
    When I reject the product
    Then The properties of the task should be updated:
      | pending | total |
      | 0       | 1     |

  Scenario: I want the catalog task properties to be maintained when I delete a draft product
    Given A product is created:
      | provider |
      | pvd      |
    When I delete the product
    Then The properties of the task should be updated:
      | pending | total |
      | 0       | 0     |

  Scenario: I want the catalog task properties to be maintained when I delete a validated product
    Given A product is created:
      | provider |
      | pvd      |
    And The product is validated
    When I delete the product
    Then The properties of the task should be updated:
      | pending | total |
      | 0       | 0     |
