Feature: TaskSelfAssign
  Background:
    Given Some organizations are created via API:
      | identifier |
      | SmartB     |
      | contact1   |
      | contact2   |
      | contact3   |
      | contact4   |
    And Some users are created via API:
      | identifier |
      | user1      |
      | user2      |

  Scenario: I want to self assign a task
    Given A task is created
    When I self assign a task
    Then The task should be self assigned

  Scenario: I want to receive an error when self assigning a task and there is no task available
    Given A task is created
    When I self assign a task:
      | supervisor |
      | user1      |
    And I self assign a task:
      | supervisor |
      | user2      |
    Then The tasks should be self assigned:
      | supervisor |
      | user1      |
    And The tasks should not be self assigned:
      | supervisor |
      | user2      |

  Scenario: I want to self assign a task among multiple tasks
    Given Some tasks are created:
      | identifier | contact  |
      | t2         | contact2 |
      | t3         | contact3 |
      | t4         | contact4 |
      | t1         | contact1 |
    And A task is prioritized:
      | identifier |
      | t2         |
    And A task is prioritized:
      | identifier |
      | t1         |

    When I self assign a task
    Then The tasks should be self assigned:
      | identifier |
      | t1         |
    And The tasks should not be self assigned:
      | identifier |
      | t2         |
      | t3         |
      | t4         |

    When I self assign a task
    Then The tasks should be self assigned:
      | identifier |
      | t1         |
      | t2         |
    And The tasks should not be self assigned:
      | identifier |
      | t3         |
      | t4         |

    When I self assign a task
    Then The tasks should be self assigned:
      | identifier |
      | t1         |
      | t2         |
      | t3         |
    And The tasks should not be self assigned:
      | identifier |
      | t4         |
