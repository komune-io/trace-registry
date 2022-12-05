Feature: TaskValidate

  Background:
    Given An organization is created via API

  Scenario: I want to update the properties of a task
    Given A task is created
    When I update the properties of the task:
      | zeproperty |
      | blblbl     |
    Then The properties of the task should be updated
