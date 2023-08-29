Feature: ProjectUpdate

  Background:
    Given A data unit is created in cccev
    And A concept is created in cccev
    And An asset pool is created
    And Some projects are created:
      | identifier | private |
      | p1         | true    |
      | p2         | true    |

  Scenario: I want to update a project
    When I update the project:
      | identifier | name         |
      | p1         | updated name |
    Then The project should be updated:
      | identifier | name         |
      | p1         | updated name |

  Scenario: I want to add an asset pool to a project
    When I add an asset pool to a project:
      | identifier |
      | p1         |
    Then The project should contain the asset pool:
      | identifier |
      | p1         |

  Scenario: I want to change a project privacy
    When I change the project privacy:
      | identifier | private|
      | p2         | false  |
    Then The project privacy should changed:
      | identifier | private|
      | p2         | false  |
