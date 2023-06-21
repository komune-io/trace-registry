Feature: ActivityCreate

  Background:
    Given An organization is defined:
      | roles           |
      | tr_orchestrator |
    And A user is defined:
      | identifier |
      | orch       |
    And I am authenticated as:
      | identifier |
      | orch       |

  Scenario: I want to create an activity
    When I create an activity:
      | identifier | name      | description       |
      | p1         | Activity1 | The description 1 |
    Then The activity should be created

  Scenario: I want to create an activity with an existing activity
    Given Some activities are created:
      | identifier | name      | description       |
      | p1         | Activity1 | The description 1 |
      | p2         | Activity2 | The description 2 |
      | p3         | Activity3 | The description 3 |
      | p4         | Activity4 | The description 4 |
    When I create an activity:
      | identifier | name      | description       |
      | p5         | Activity5 | The description 5 |
    Then The activity should be created
