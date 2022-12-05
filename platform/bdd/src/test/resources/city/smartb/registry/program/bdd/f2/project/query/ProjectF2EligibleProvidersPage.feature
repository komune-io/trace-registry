Feature: ProjectF2EligibleProvidersPage

  Background:
    Given Some addresses are defined:
      | identifier | postalCode |
      | add1       | 12345      |
      | add2       | 66612      |
      | add3       | 12666      |
      | add4       | 34000      |
    Given Some organizations are created via API:
      | identifier | name | roles              | address | phone   |
      | pvd1       | pvd1 | provider_equipment | add1    | org-p01 |
      | pvd2       | pvd2 | provider_equipment | add2    | org-p02 |
      | pvd3       | pvd3 | provider_equipment | add3    | org-p03 |
      | bnf        | bnf  | beneficiary        | add4    | org-b01 |
    And Some users are created via API:
      | identifier | memberOf | roles | email          | phone   |
      | pvd1-admin | pvd1     | admin | admin@pvd1.com | usr-p01 |
      | pvd2-admin | pvd2     | admin | admin@pvd2.com | usr-p02 |
      | pvd3-admin | pvd3     | admin | admin@pvd3.com | usr-p03 |
      | bnf-admin  | bnf      | admin | admin@bnf.com  | usr-b01 |
    And Some products are created:
      | identifier | provider | category |
      | pd11       | pvd1     | SHELTER  |
      | pd21       | pvd2     | SHELTER  |
      | pd31       | pvd3     | SHELTER  |
      | pd32       | pvd3     | LOCKER   |
    And The products are validated:
      | identifier |
      | pd11       |
      | pd21       |
      | pd31       |
      | pd32       |

  Scenario: I want to fetch the eligible providers of a project
    Given A project is created:
      | beneficiary | supervisor |
      | bnf         | bnf-admin |
    And The needs of the project are defined:
      | parkType | withInstallation | bikeCount | lockerCount |
      | SHELTER  | false            | 10        | 5           |
    When I fetch the eligible providers of the project via API
    Then I should receive the eligible providers of the project:
      | identifier | name | phone   | email          | address |
      | pvd3       | pvd3 | org-p03 | admin@pvd3.com | add3    |

  Scenario: I want to receive an error when fetching the eligible providers of a non-existing project
    When I fetch the eligible providers of the project via API:
      | project |
      | fake    |
    Then The project should not be found

  Scenario: I want to filter the eligible providers of a project by name
    Given A project is created:
      | beneficiary | supervisor |
      | bnf         | bnf-admin |
    And The needs of the project are defined:
      | parkType | withInstallation | bikeCount |
      | SHELTER  | false            | 10        |
    When I fetch the eligible providers of the project via API:
      | providerName |
      | 2            |
    Then I should receive the eligible providers of the project:
      | identifier |
      | pvd2       |

  Scenario: I want to filter the eligible providers of a project by postalCode
    Given A project is created:
      | beneficiary | supervisor |
      | bnf         | bnf-admin |
    And The needs of the project are defined:
      | parkType | withInstallation | bikeCount |
      | SHELTER  | false            | 10        |
    When I fetch the eligible providers of the project via API:
      | postalCode |
      | 12         |
    Then I should receive the eligible providers of the project:
      | identifier |
      | pvd1       |
      | pvd3       |

  Scenario: I want to filter the eligible providers of a project by everything
    Given A project is created:
      | beneficiary | supervisor |
      | bnf         | bnf-admin |
    And The needs of the project are defined:
      | parkType | withInstallation | bikeCount |
      | SHELTER  | false            | 10        |
    When I fetch the eligible providers of the project via API:
      | providerName | postalCode |
      | 3            | 12         |
    Then I should receive the eligible providers of the project:
      | identifier |
      | pvd3       |


  Scenario: I want to filter out all the eligible providers of a project
    Given A project is created:
      | beneficiary | supervisor |
      | bnf         | bnf-admin  |
    And The needs of the project are defined:
      | parkType | withInstallation | bikeCount |
      | SHELTER  | false            | 10        |
    When I fetch the eligible providers of the project via API:
      | providerName | postalCode |
      | fake         | fake       |
    Then I should not receive any eligible providers of the project
