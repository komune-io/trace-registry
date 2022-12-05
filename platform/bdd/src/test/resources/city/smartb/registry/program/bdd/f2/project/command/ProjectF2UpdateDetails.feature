Feature: ProjectF2UpdateDetails

  Background:
    Given An address is defined:
      | identifier | postalCode |
      | adr        | 12345      |
    And Some organizations are created via API:
      | identifier | roles              |
      | bnf1       | beneficiary        |
      | bnf2       | beneficiary        |
      | pvd        | provider_equipment |
      | fub        | fub                |
    And Some users are created via API:
      | identifier | memberOf | roles |
      | bnf1_admin | bnf1     | admin |
      | bnf1_user  | bnf1     | user  |
      | bnf2_admin | bnf2     | admin |
      | pvd_admin  | pvd      | admin |
      | fub_admin  | fub      | admin |

  Scenario: As a beneficiary admin, I want to update a project
    Given I am authenticated as:
      | identifier |
      | bnf1_admin |
    And A project is created via API
    When I update the details of the project via API:
      | supervisor | name              | target                | address |
      | bnf1_admin | Projekt (updated) | EDUCATION_HIGH_SCHOOL | adr     |
    Then The project should be created:
      | name              | friendlyId   | target                | address |
      | Projekt (updated) | 12_C2_000001 | EDUCATION_HIGH_SCHOOL | adr     |

  Scenario: As a beneficiary admin, I want to assign a project to a user of my organization
    Given I am authenticated as:
      | identifier |
      | bnf1_admin |
    And A project is created via API:
      | supervisor |
      | bnf1_admin |
    When I update the details of the project via API:
      | supervisor |
      | bnf1_user  |
    Then The project should be created:
      | supervisor |
      | bnf1_user  |

  Scenario: As a beneficiary admin, I want to be forcefully assigned to the project I update if I try to assign it to a user outside of my organization
    Given I am authenticated as:
      | identifier |
      | bnf1_admin |
    And A project is created via API
    When I update the details of the project via API:
      | supervisor |
      | bnf2_admin |
    Then The project should be created:
      | supervisor |
      | bnf1_admin |

  Scenario: As a beneficiary user, I want to be forcefully assigned to the project I update even if I try to assign it to someone else
    Given I am authenticated as:
      | identifier |
      | bnf1_user     |
    And A project is created via API
    When I update the details of the project via API:
      | supervisor |
      | bnf1_admin |
    Then The project should be created:
      | supervisor |
      | bnf1_user  |

  Scenario: As a beneficiary admin, I should receive an error when assigning a project to a non-existant user
    Given I am authenticated as:
      | identifier |
      | bnf1_admin |
    And A project is created via API
    When I update the details of the project via API:
      | supervisor |
      | fake       |
    Then The user should not be found

  Scenario: As a beneficiary admin, I should be forbidden to update the project of another beneficiary
    Given I am authenticated as:
      | identifier |
      | bnf2_admin |
    And A project is created:
      | beneficiary | supervisor |
      | bnf1        | bnf1_admin |
    When I update the details of the project via API
    Then I should be forbidden to do so

  Scenario: As a provider_equipment admin, I should be forbidden to update a project
    Given I am authenticated as:
      | identifier |
      | pvd_admin |
    And A project is created:
      | beneficiary | supervisor |
      | bnf1        | bnf1_admin |
    When I update the details of the project via API
    Then I should be forbidden to do so

  Scenario: As a fub admin, I want to update the project of a beneficiary
    Given I am authenticated as:
      | identifier |
      | fub_admin |
    And A project is created:
      | beneficiary | supervisor |
      | bnf1        | bnf1_admin |
    When I update the details of the project via API:
      | name              |
      | Projekt (updated) |
    Then The project should be created:
      | name              |
      | Projekt (updated) |
