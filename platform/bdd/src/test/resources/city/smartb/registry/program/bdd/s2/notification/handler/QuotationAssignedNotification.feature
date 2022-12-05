Feature: QuotationAssignedNotification

  Background:
    Given Some organizations are created via API:
      | identifier | name |
      | bnf        | bnf  |
      | p1         | p1   |
    And Some users are created via API:
      | identifier | memberOf | givenName | familyName |
      | bnf-admin  | bnf      | ben       | eficiaire  |
      | p1-admin   | p1       | serge     | hans       |
      | p1-usr     | p1       | manu      | faktur     |
    And A project is created:
      | identifier | beneficiary | name    |
      | proj       | bnf         | projekt |
    And The needs of the project are defined

  Scenario: I want to send a notification when a quotation is assigned
    Given An order is created
    And Some providers are selected for the order:
      | providers |
      | p1        |
    And The quotations of the order are requested
    When I assign the quotation:
      | supervisor |
      | p1-usr     |
    Then A notification should have been sent:
      | type                           | receivers | contact.firstname | contact.lastname | supervisor.firstname | supervisor.lastname | url.route      |
      | PEQUIPMENT__QUOTATION_ASSIGNED | p1-usr    | manu              | FAKTUR           | serge                | HANS                | QUOTATION_LIST |
