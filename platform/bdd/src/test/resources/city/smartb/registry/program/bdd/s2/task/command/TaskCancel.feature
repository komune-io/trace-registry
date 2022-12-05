Feature: TaskCancel

  Background:
    Given An organization is created via API

  Scenario: I want to validate a task
    Given A task is created
    When I cancel the task
    Then The task should be canceled
