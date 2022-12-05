Feature: ProductDelete

  Background:
    Given An organization is created via API

  Scenario: I want to delete a draft product
    Given A product is created
    When I delete the product
    Then The product should be deleted

  Scenario: I want to delete a validated product
    Given A product is created
    And The product is validated
    When I delete the product
    Then The product should be deleted
