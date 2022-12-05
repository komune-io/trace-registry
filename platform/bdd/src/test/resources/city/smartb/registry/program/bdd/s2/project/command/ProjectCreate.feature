Feature: ProjectCreate

  Background:
    Given An organization is created via API
    And A user is created via API:
      | identifier |
      | user       |

  Scenario: I want to create a project
    When I create a project
    Then The project should be created
    And The project should be assigned:
      | supervisor |
      | user       |
