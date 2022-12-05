Feature: OrganizationAssignSupervisor

  Background:
    Given An address is defined
    And A billing is defined

  Scenario: I want to automatically assign the first created admin as supervisor of its organization
    Given An organization is created via API:
      | identifier |
      | orga       |
    When I create a user via API:
      | identifier | roles | memberOf |
      | Serge Hans | admin | orga     |
    Then The organization should be created:
      | supervisor |
      | Serge Hans |

  Scenario: I don't want to automatically assign the first created user as supervisor of its organization if it doesn't have the 'admin' role
    Given An organization is created via API:
      | identifier |
      | orga       |
    When I create a user via API:
      | identifier   | roles | memberOf |
      | Rudy Mantere | user  | orga     |
    Then The organization should be created:
      | supervisor |
      | null       |

  Scenario: I want to automatically assign the first created admin as supervisor of its organization even if a non-admin user has been created before
    Given An organization is created via API:
      | identifier |
      | orga       |
    And A user is created via API:
      | identifier   | roles | memberOf |
      | Rudy Mantere | user  | orga     |
    When I create a user via API:
      | identifier | roles | memberOf |
      | Serge Hans | admin | orga     |
    Then The organization should be created:
      | supervisor |
      | Serge Hans |

  Scenario: I don't want to automatically assign the second created admin as supervisor of its organization
    Given An organization is created via API:
      | identifier |
      | orga       |
    And A user is created via API:
      | identifier | roles | memberOf |
      | Serge Hans | admin | orga     |
    When I create a user via API:
      | identifier | roles | memberOf |
      | Sam Ourail | admin | orga     |
    Then The organization should be created:
      | supervisor |
      | Serge Hans |
