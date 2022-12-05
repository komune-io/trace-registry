Feature: ProductValidate

  Background:
    Given An organization is created via API

  Scenario: I want to reject a product
    Given A product is created
    When I reject the product
    Then The product should be rejected
