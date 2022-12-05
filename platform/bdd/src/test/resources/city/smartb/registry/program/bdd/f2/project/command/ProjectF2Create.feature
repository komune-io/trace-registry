Feature: ProjectF2Create

  Background:
    Given An address is defined:
      | identifier | postalCode |
      | adr        | 34567      |
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

  Scenario: As a beneficiary admin, I want to create a project
    Given I am authenticated as:
      | identifier |
      | bnf1_admin |
    When I create a project via API:
      | identifier | supervisor | name    | target                   | address |
      | projekt    | bnf1_admin | Projekt | EDUCATION_PRIMARY_SCHOOL | adr     |
    Then The project should be created:
      | identifier | friendlyId   | beneficiary | supervisor | name    | target                   | address |
      | projekt    | 34_C2_000001 | bnf1        | bnf1_admin | Projekt | EDUCATION_PRIMARY_SCHOOL | adr     |

  Scenario: As a beneficiary admin, I want to create a project assigned to a user of my organization
    Given I am authenticated as:
      | identifier |
      | bnf1_admin |
    When I create a project via API:
      | identifier | supervisor |
      | projekt    | bnf1_user  |
    Then The project should be created:
      | identifier | beneficiary | supervisor |
      | projekt    | bnf1        | bnf1_user  |

  Scenario: As a beneficiary admin, I want to be forcefully assigned to the project I create if I try to assign it to a user outside of my organization
    Given I am authenticated as:
      | identifier |
      | bnf1_admin |
    When I create a project via API:
      | identifier | supervisor |
      | projekt    | bnf2_admin |
    Then The project should be created:
      | identifier | beneficiary | supervisor |
      | projekt    | bnf1        | bnf1_admin |

  Scenario: As a beneficiary user, I want to be forcefully assigned to the project I create even if I try to assign it to someone else
    Given I am authenticated as:
      | identifier |
      | bnf1_user  |
    When I create a project via API:
      | identifier | supervisor |
      | projekt    | bnf1_admin |
    Then The project should be created:
      | identifier | beneficiary | supervisor |
      | projekt    | bnf1        | bnf1_user  |

  Scenario: As a provider_equipment admin, I should be forbidden to create a project
    Given I am authenticated as:
      | identifier |
      | pvd_admin  |
    When I create a project via API
    Then I should be forbidden to do so

  Scenario: As a fub admin, I should be forbidden to create a project
    Given I am authenticated as:
      | identifier |
      | fub_admin    |
    When I create a project via API
    Then I should be forbidden to do so
