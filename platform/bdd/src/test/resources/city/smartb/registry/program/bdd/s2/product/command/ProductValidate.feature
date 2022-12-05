Feature: ProductValidate

  Background:
    Given An organization is created via API

  Scenario: I want to validate a product
    Given A product is created
    When I validate the product
    Then The product should be validated
