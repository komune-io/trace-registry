Feature: TaskCreate

  Background:
    Given An organization is created via API

  Scenario: I want to create a task
    When I create a task
    Then The task should be created
