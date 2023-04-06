Feature: ProjectCreate
  Scenario: I want to create a project
    When I create a project:
      | identifier | name      | description      |
      | p1         | Project1  | The description 1|
    Then The project should be created

  Scenario: I want to create a project with an existing project
    Given Some projects are created:
      | identifier | name     | description      |
      | p1         | Project1 | The description 1|
      | p2         | Project2 | The description 1|
      | p3         | Project3 | The description 1|
      | p4         | Project4 | The description 1|
    When I create a project:
      | identifier  | name        | description      |
      | p5          | Project5    | The description 5|
    Then The project should be created
