Feature: QuotationProviderRejectedNotification

  Background:
    Given Some organizations are created via API:
      | identifier | name |
      | bnf        | bnf  |
      | p1         | p1   |
    And Some users are created via API:
      | identifier | memberOf | givenName | familyName |
      | bnf-admin  | bnf      | serge     | hans       |
      | bnf-usr    | bnf      | ben       | eficiaire  |
      | p1-usr     | p1       | manu      | faktur     |
    And A project is created:
      | identifier | beneficiary | name    |
      | proj       | bnf         | projekt |
    And The needs of the project are defined

  Scenario: I want to send a notification when a quotation is rejected by the provider
    Given The project is assigned:
      | supervisor |
      | bnf-usr    |
    And An order is created
    And Some providers are selected for the order:
      | providers |
      | p1        |
    And The quotations of the order are requested
    When I reject the quotation as a provider:
      | rejectedBy |
      | p1-usr     |
    Then A notification should have been sent:
      | type                                     | receivers | contact.firstname | contact.lastname | providerName | projectName | url.route                  | url.project |
      | BENEFICIARY__QUOTATION_PROVIDER_REJECTED | bnf-usr   | ben               | EFICIAIRE        | p1           | projekt     | PROJECT_EQUIPMENT_FOLLOWUP | proj        |
