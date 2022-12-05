Feature: ProjectUpdateDetails

  Background:
    Given An organization is created via API
    And A user is created via API

  Scenario: I want to update the details of a project
    Given A project is created
    When I update the details of the project
    Then The details of the project should be updated
