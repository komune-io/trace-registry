Feature: ProjectCreatedNotification

  Background:
    Given An address is defined
    And An organization is created via API:
      | identifier | roles       |
      | bnf        | beneficiary |
    And Some users are created via API:
      | identifier | memberOf | roles | givenName | familyName |
      | bnf_admin  | bnf      | admin | serge     | hans       |
      | bnf_user   | bnf      | user  | ben       | eficiaire  |

  Scenario: I want to send a notification when a user creates a project
    Given I am authenticated as:
      | identifier |
      | bnf_user   |
    When I create a project via API:
      | name    |
      | projekt |
    Then A notification should have been sent:
      | type                         | receivers | contact.firstname | contact.lastname | user.firstname | user.lastname | projectName | url.route    |
      | BENEFICIARY__PROJECT_CREATED | bnf_admin | serge             | HANS             | ben            | EFICIAIRE     | projekt     | PROJECT_LIST |

  Scenario: I don't want to send a notification when a supervisor creates a project
    Given I am authenticated as:
      | identifier |
      | bnf_admin  |
    When I create a project via API:
      | name    |
      | projekt |
    Then A notification should not have been sent:
      | type                         | receivers | contact.firstname | contact.lastname | user.firstname | user.lastname | projectName | url.route    |
      | BENEFICIARY__PROJECT_CREATED | bnf_admin | serge             | HANS             | serge          | HANS          | projekt     | PROJECT_LIST |
