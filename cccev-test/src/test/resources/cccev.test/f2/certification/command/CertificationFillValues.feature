Feature: CertificationFillValues

  Scenario: Budget
    Given A data unit is created:
      | identifier | name   | description | notation | type   |
      | u_budget   | budget | d           | €        | NUMBER |
    And Some information concepts are created:
      | identifier              | name            | unit     | expressionOfExpectedValue                                     | dependsOn                                              | description |
      | ic_budget_q1            | Budget Q1       | u_budget |                                                               |                                                        | d           |
      | ic_budget_q2            | Budget Q2       | u_budget |                                                               |                                                        | d           |
      | ic_budget_q3            | Budget Q3       | u_budget |                                                               |                                                        | d           |
      | ic_budget_q4            | Budget Q4       | u_budget |                                                               |                                                        | d           |
      | ic_budget_year_current  | Budget Year N   | u_budget | #ic_budget_q1 + #ic_budget_q2 + #ic_budget_q3 + #ic_budget_q4 | ic_budget_q1, ic_budget_q2, ic_budget_q3, ic_budget_q4 | d           |
      | ic_budget_year_previous | Budget Year N-1 | u_budget |                                                               |                                                        | d           |
      | ic_budget_year_next     | Budget Year N+1 | u_budget |                                                               |                                                        | d           |
    And Some requirements are created:
      | identifier                         | kind        | name             | hasConcept              | hasRequirement                                                       | validatingCondition                                | validatingConditionDependencies                 | description | type |
      | r_budget_q1                        | INFORMATION | Budget Q1        | ic_budget_q1            |                                                                      |                                                    |                                                 | d           | t    |
      | r_budget_q2                        | INFORMATION | Budget Q2        | ic_budget_q2            |                                                                      |                                                    |                                                 | d           | t    |
      | r_budget_q3                        | INFORMATION | Budget Q3        | ic_budget_q3            |                                                                      |                                                    |                                                 | d           | t    |
      | r_budget_q4                        | INFORMATION | Budget Q4        | ic_budget_q4            |                                                                      |                                                    |                                                 | d           | t    |
      | r_budget_year_current_satisfactory | CONSTRAINT  | Budget Year N    | ic_budget_year_current  |                                                                      | #ic_budget_year_current > 10000                    | ic_budget_year_current                          | d           | t    |
      | r_budget_year_current              | INFORMATION | Budget Year N    | ic_budget_year_current  | r_budget_year_current_satisfactory                                   |                                                    |                                                 | d           | t    |
      | r_budget_year_previous             | INFORMATION | Budget Year N-1  | ic_budget_year_previous |                                                                      |                                                    |                                                 | d           | t    |
      | r_budget_year_next                 | INFORMATION | Budget Year N+1  | ic_budget_year_next     |                                                                      |                                                    |                                                 | d           | t    |
      | r_budget_has_grown                 | CONSTRAINT  | Budget has grown |                         | r_budget_year_previous, r_budget_year_current                        | #ic_budget_year_current > #ic_budget_year_previous | ic_budget_year_current, ic_budget_year_previous | d           | t    |
      | r_budget_will_grow                 | CONSTRAINT  | Budget will grow |                         | r_budget_year_current, r_budget_year_next                            | #ic_budget_year_next > #ic_budget_year_current     | ic_budget_year_next, ic_budget_year_current     | d           | t    |
      | r_budget_is_fine                   | CRITERION   | Budget is fine   |                         | r_budget_has_grown, r_budget_will_grow                               |                                                    |                                                 | d           | t    |
      | r_budget                           | CRITERION   | Budget           |                         | r_budget_q1, r_budget_q2, r_budget_q3, r_budget_q4, r_budget_is_fine |                                                    |                                                 | d           | t    |
    And A certification is created:
      | identifier | requirements |
      | c          | r_budget     |
    Then The certification should match the snapshot "CertificationFillValues_budget_creation"
    When I fill values in the certification:
      | identifier | concept                 | value  |
      | c          | ic_budget_q1            | 666    |
      | c          | ic_budget_q2            | 4000   |
      | c          | ic_budget_q3            | 3000   |
      | c          | ic_budget_q4            | 5000   |
      | c          | ic_budget_year_previous | 100000 |
    Then The certification should match the snapshot "CertificationFillValues_budget_fill1"
    When I fill values in the certification:
      | identifier | concept             | value  |
      | c          | ic_budget_year_next | 200000 |
    Then The certification should match the snapshot "CertificationFillValues_budget_fill2"
    When I fill values in the certification:
      | identifier | concept      | value |
      | c          | ic_budget_q4 | 100000 |
    Then The certification should match the snapshot "CertificationFillValues_budget_fill3"
