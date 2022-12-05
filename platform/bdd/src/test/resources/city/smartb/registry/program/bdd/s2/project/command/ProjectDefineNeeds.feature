Feature: ProjectDefineNeeds

  Background:
    Given An organization is created via API
    And A user is created via API

  Scenario: I want to define the needs of a project
    Given A project is created
    When I define the needs of the project
    Then The needs of the project should be defined

  Scenario: I want to redefine the needs of a project
    Given A project is created
    And The needs of the project are defined:
      | parkType     | withInstallation | bikeCount | lockerCount | inflationStationCount | toolStationCount | chargingStationCount |
      | OPEN_SHELTER | false            | 10        | 5           | 2                     | 1                | 2                    |
    When I define the needs of the project:
      | parkType       | withInstallation | bikeCount | lockerCount | inflationStationCount | toolStationCount | chargingStationCount |
      | SECURE_STORAGE | true             | 42        | 20          | 5                     | 3                | 10                   |
    Then The needs of the project should be defined:
      | parkType       | withInstallation | bikeCount | lockerCount | inflationStationCount | toolStationCount | chargingStationCount |
      | SECURE_STORAGE | true             | 42        | 20          | 5                     | 3                | 10                   |

  Scenario: I want to redefine the needs of a project after I canceled its previous order
    Given A project is created
    And The needs of the project are defined
    And The quotation step of the project is updated:
      | step      |
      | REQUESTED |
    And The quotation step of the project is updated:
      | step |
      | NONE |
    When I define the needs of the project
    Then The needs of the project should be defined
