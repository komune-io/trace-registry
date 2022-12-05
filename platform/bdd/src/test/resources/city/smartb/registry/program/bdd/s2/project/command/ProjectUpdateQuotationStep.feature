Feature: ProjectUpdateQuotationStep

  Background:
    Given An organization is created via API
    And A user is created via API

  Scenario: I want to request quotations in a project
    Given I create a project
    And The needs of the project are defined
    When I update the quotation step of the project:
      | step      |
      | REQUESTED |
    Then The quotation step of the project should be updated

  Scenario: I want to cancel the quotations in a project
    Given I create a project
    And The needs of the project are defined
    And The quotation step of the project is updated:
      | step      |
      | REQUESTED |
    When I update the quotation step of the project:
      | step |
      | NONE |
    Then The quotation step of the project should be updated
