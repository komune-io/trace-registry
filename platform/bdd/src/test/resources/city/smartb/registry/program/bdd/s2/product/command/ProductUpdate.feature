Feature: ProductUpdate

  Background:
    Given An organization is created via API

  Scenario: I want to update a product
    Given A product is created
    When I update the product
    Then The product should be updated

  Scenario: I want to update validated product
    Given A product is created
    And The product is validated
    When I update the product
    Then The product should be updated
    And The product status should be updated:
      | status |
      | DRAFT  |

  Scenario: I want to update a rejected product
    Given A product is created
    And The product is rejected
    When I update the product
    Then The product should be updated
    Then The product status should be updated:
      | status |
      | DRAFT  |
