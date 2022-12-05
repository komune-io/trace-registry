Feature: TaskPrioritize

  Background:
    Given An organization is created via API

  Scenario: I want to prioritize a task
    Given A task is created
    When I prioritize the task
    Then The task should be prioritized
