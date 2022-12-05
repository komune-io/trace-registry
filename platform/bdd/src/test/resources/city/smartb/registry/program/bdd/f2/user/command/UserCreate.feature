Feature: UserCreate

  Background:
    Given An organization is created via API:
      | identifier |
      | SmartB     |

  Scenario: I want to create a user
    When I create a user via API
    Then The user should be created

  Scenario: I want to receive an error when creating a user with an existing email
    Given A user is created via API:
      | email          |
      | ethan@doar.com |
    When I create a user via API:
      | email          |
      | ethan@doar.com |
    Then The user should not be created

  Scenario: I want to receive an error when creating a user within a non-existent organization
    When I create a user via API:
      | memberOf |
      | fake     |
    Then The user should not be created
