Feature: QuotationRequestedNotification

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

  Scenario: I want to send notifications when quotations are requested
    Given An order is created
    And Some providers are selected for the order:
      | providers  | quotations |
      | p1, p2, p3 | q1, q2, q3 |
    When I request the quotations of the order
    Then Some notifications have been sent:
      | type                            | receivers | contact.firstname | contact.lastname | beneficiaryName | projectName | url.route      |
      | PEQUIPMENT__QUOTATION_REQUESTED | p1-usr    | manu              | FAKTUR           | bnf             | projekt     | QUOTATION_LIST |
      | PEQUIPMENT__QUOTATION_REQUESTED | p2-usr    | sophie            | STYCKET          | bnf             | projekt     | QUOTATION_LIST |
      | PEQUIPMENT__QUOTATION_REQUESTED | p3-usr    | rudy              | MANTERE          | bnf             | projekt     | QUOTATION_LIST |
