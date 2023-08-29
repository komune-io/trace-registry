Feature: ProjectList

  Scenario: I want to fetch a page of project
    Given A project is created:
      | identifier | name     | description       |
      | p1         | Project1 | The description 1 |
    When I fetch page of projects:
      | offset | limit |
      | 0      | 10    |
    Then I should receive projects:
      | identifier | name     | description       |
      | p1         | Project1 | The description 1 |
    Then I should not receive projects:
      | identifier |
      | p2         |

  Scenario: I want to fetch a page of project by name
    Given Some projects are created:
      | identifier | name      | description       |
      | p10        | Project 1 | The description 1 |
      | p20        | Project 2 | The description 2 |
      | p30        | Tcejorp 3 | The 3             |
    When I fetch page of projects:
      | offset | limit | name    |
      | 0      | 10    | Project |
    Then I should receive projects:
      | identifier  |
      | p10         |
      | p20         |
    Then I should not receive projects:
      | identifier  |
      | p30         |

  Scenario: I want to fetch a page of project starting by "Saint"
    Given Some projects are created:
      | identifier | name           | description      |
      | p1         | Saint-Exupery  | The description 1|
      | p2         | Project 2      | The description 2|
    When I fetch page of projects:
      | offset | limit | name  |
      | 0      | 10    | Saint |
    Then I should receive projects:
      | identifier  |
      | p1          |
    Then I should not receive projects:
      | identifier  |
      | p2          |

  Scenario: I want to fetch a page of project by name ith a -
    Given Some projects are created:
      | identifier | name           | description      |
      | p1         | Saint-Exupery   | The description 1|
      | p2        | Saint-Pierre      | The description 2|
    When I fetch page of projects:
      | offset | limit | name  |
      | 0      | 10    | Saint-Exupery |
    Then I should receive projects:
      | identifier  |
      | p1          |
    Then I should not receive projects:
      | identifier  |
      | p2          |

  Scenario: I want to fetch a page of private project
    Given Some projects are created:
      | identifier | private |
      | p1         | true    |
      | p2         | true    |
    When I fetch page of projects
    Then I should receive projects:
      | identifier  |
      | p1          |
      | p2          |
