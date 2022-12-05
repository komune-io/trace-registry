Feature: ProductProvidersPage

  Background:
    Given Some organizations are created via API:
      | identifier | roles              |
      | pvd1       | provider_equipment |
      | pvd2       | provider_equipment |
      | pvd3       | provider_equipment |

  Scenario: I want to fetch the providers of one product category
    Given Some products are created:
      | identifier | provider | category |
      | pd11       | pvd1     | SHELTER  |
      | pd21       | pvd2     | STORAGE  |
    And The products are validated:
      | identifier |
      | pd11       |
      | pd21       |
    When I fetch the providers of the products:
      | categories |
      | SHELTER    |
    Then I should receive the providers of the products:
      | pvd1 |

  Scenario: I don't want to fetch any provider if their products aren't validated
    Given Some products are created:
      | identifier | provider | category |
      | pd11       | pvd1     | SHELTER  |
      | pd21       | pvd2     | STORAGE  |
    When I fetch the providers of the products:
      | categories |
      | SHELTER    |
    Then I should not receive any product provider

  Scenario: I don't want to fetch any provider if they don't have any required product
    Given Some products are created:
      | identifier | provider | category |
      | pd11       | pvd1     | SHELTER  |
      | pd12       | pvd1     | LOCKER   |
      | pd21       | pvd2     | STORAGE  |
    And The products are validated:
      | identifier |
      | pd11       |
      | pd12       |
      | pd21       |
    When I fetch the providers of the products:
      | categories |
      | HOOP       |
    Then I should not receive any product provider

  Scenario: I don't want to fetch any provider if they don't have all the required products
    Given Some products are created:
      | identifier | provider | category |
      | pd11       | pvd1     | SHELTER  |
      | pd12       | pvd1     | LOCKER   |
      | pd21       | pvd2     | STORAGE  |
    And The products are validated:
      | identifier |
      | pd11       |
      | pd12       |
      | pd21       |
    When I fetch the providers of the products:
      | categories       |
      | SHELTER, STORAGE |
    Then I should not receive any product provider

  Scenario: I want to fetch the providers if they have at least all the required products
    Given Some products are created:
      | identifier | provider | category     |
      | pd11       | pvd1     | SHELTER      |
      | pd12       | pvd1     | LOCKER       |
      | pd13       | pvd1     | TOOL_STATION |
      | pd21       | pvd2     | STORAGE      |
      | pd22       | pvd2     | SHELTER      |
    And The products are validated:
      | identifier |
      | pd11       |
      | pd12       |
      | pd13       |
      | pd21       |
      | pd22       |
    When I fetch the providers of the products:
      | categories      |
      | SHELTER, LOCKER |
    Then I should receive the providers of the products:
      | pvd1 |

  Scenario: I want to fetch all the providers that have all the required products
    Given Some products are created:
      | identifier | provider | category     |
      | pd11       | pvd1     | SHELTER      |
      | pd12       | pvd1     | LOCKER       |
      | pd13       | pvd1     | TOOL_STATION |
      | pd21       | pvd2     | STORAGE      |
      | pd22       | pvd2     | SHELTER      |
      | pd31       | pvd3     | SHELTER      |
      | pd32       | pvd3     | LOCKER       |
    And The products are validated:
      | identifier |
      | pd11       |
      | pd12       |
      | pd13       |
      | pd21       |
      | pd22       |
      | pd31       |
      | pd32       |
    When I fetch the providers of the products:
      | categories      |
      | SHELTER, LOCKER |
    Then I should receive the providers of the products:
      | pvd1 |
      | pvd3 |
