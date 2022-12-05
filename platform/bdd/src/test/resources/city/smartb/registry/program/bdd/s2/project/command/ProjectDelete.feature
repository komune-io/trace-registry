Feature: ProjectDelete

  Background:
    Given An organization is created via API
    And A user is created via API

  Scenario: I want to delete a project
    Given I create a project
    When I delete the project
    Then The project should be deleted
