Feature: TaskAssign
  Background:
    Given An organization is created via API:
      | identifier |
      | SmartB     |
    And Some users are created via API:
      | identifier |
      | user1      |
      | user2      |

  Scenario: I want to assign a task
    Given A task is created
    When I assign the task
    Then The task should be assigned

#  TODO move to f2 endpoint tests
#  Scenario: I want to receive an error when assigning a task to a non-existing user
#    Given A task is created
#    When I assign the task:
#      | supervisor |
#      | notARealID |
#    Then The task should not be assigned

  Scenario: I want to assign a task already assigned
    Given A task is created
    When I assign the task:
      | supervisor |
      | user1      |
    Then The task should be assigned:
      | supervisor |
      | user1      |

    When I assign the task:
      | supervisor |
      | user2      |
    Then The task should be assigned:
      | supervisor |
      | user2      |
