Feature: TaskValidate

  Background:
    Given An organization is created via API

  Scenario: I want to validate a task
    Given A task is created
    When I update the status of the task:
      | status |
      | DONE   |
    Then The status of the task should be updated
