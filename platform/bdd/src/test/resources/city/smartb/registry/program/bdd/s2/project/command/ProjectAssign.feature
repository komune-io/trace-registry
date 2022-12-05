Feature: ProjectAssign

  Background:
    Given An organization is created via API
    And Some users are created via API:
      | identifier |
      | creator    |
      | supervisor |

  Scenario: I want to assign a project
    Given A project is created:
      | supervisor |
      | creator    |
    When I assign the project:
      | supervisor |
      | supervisor |
    And The project should be assigned:
      | supervisor |
      | supervisor |
