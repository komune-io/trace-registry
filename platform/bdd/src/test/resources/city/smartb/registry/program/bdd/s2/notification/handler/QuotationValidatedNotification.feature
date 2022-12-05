Feature: QuotationValidatedNotification

  Background:
    Given Some organizations are created via API:
      | identifier | name |
      | bnf        | bnf  |
      | p1         | p1   |
      | p2         | p2   |
      | p3         | p3   |
    And Some users are created via API:
      | identifier | memberOf | givenName | familyName |
      | bnf-usr    | bnf      | ben       | eficiaire  |
      | p1-usr     | p1       | manu      | faktur     |
      | p2-usr     | p2       | sophie    | stycket    |
      | p3-usr     | p3       | rudy      | mantere    |
    And A project is created:
      | identifier | beneficiary | name    | supervisor |
      | proj       | bnf         | projekt | bnf-usr    |
    And The needs of the project are defined

  Scenario: I want to send notifications when an order is canceled
    Given An order is created
    And Some providers are selected for the order:
      | providers  | quotations |
      | p1, p2, p3 | q1, q2, q3 |
    And The quotations of the order are requested
    And The quotation is rejected by the provider:
      | identifier |
      | q2         |
    And The quotations are filled:
      | identifier |
      | q1         |
      | q3         |
    And The quotation is accepted:
      | quotation |
      | q1        |
    When I validate the quotation
    Then Some notifications have been sent:
      | type                                  | receivers | contact.firstname | contact.lastname | beneficiaryName | providerName | projectName | url.route                  | url.project |
      | PEQUIPMENT__QUOTATION_VALIDATED       | p1-usr    | manu              | FAKTUR           | bnf             |              | projekt     | QUOTATION_LIST             |             |
      | PEQUIPMENT__QUOTATION_OTHER_VALIDATED | p3-usr    | rudy              | MANTERE          | bnf             |              | projekt     | QUOTATION_LIST             |             |
      | BENEFICIARY__QUOTATION_VALIDATED      | bnf-usr   | ben               | EFICIAIRE        |                 | p1           | projekt     | PROJECT_EQUIPMENT_FOLLOWUP | proj        |
