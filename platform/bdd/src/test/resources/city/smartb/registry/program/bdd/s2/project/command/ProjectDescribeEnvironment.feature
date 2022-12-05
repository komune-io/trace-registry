Feature: ProjectDescribeEnvironment

  Background:
    Given An organization is created via API
    And A user is created via API

  Scenario: I want to describe the environment of a project
    Given A project is created
    And The needs of the project are defined
    When I describe the environment of the project
    Then The environment of the project should be described
