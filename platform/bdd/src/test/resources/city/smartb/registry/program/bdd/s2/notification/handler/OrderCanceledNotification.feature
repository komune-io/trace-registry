Feature: OrderCanceledNotification

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
      | beneficiary | name    |
      | bnf         | projekt |
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
    When I cancel the order
    Then Some notifications have been sent:
      | type                       | receivers | contact.firstname | contact.lastname | beneficiaryName | projectName | url.route      |
      | PEQUIPMENT__ORDER_CANCELED | p1-usr    | manu              | FAKTUR           | bnf             | projekt     | QUOTATION_LIST |
      | PEQUIPMENT__ORDER_CANCELED | p3-usr    | rudy              | MANTERE          | bnf             | projekt     | QUOTATION_LIST |
    And A notification should not have been sent:
      | type                       | receivers | contact.firstname | contact.lastname | beneficiaryName | projectName | url.route      |
      | PEQUIPMENT__ORDER_CANCELED | p2-usr    | sophie            | STYCKET          | bnf             | projekt     | QUOTATION_LIST |
