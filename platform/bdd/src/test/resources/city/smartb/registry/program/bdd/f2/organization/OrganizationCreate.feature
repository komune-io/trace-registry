Feature: OrganizationCreate

  Scenario: I want to create an organization
    When I create an organization via API
    Then The organization should be created
