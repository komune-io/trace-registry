Feature: CertificationFillProcess

  Scenario: Form Creation
    Given A data unit is created:
      | identifier | name   | notation | type   |
      | u_budget   | budget | €        | NUMBER |
    And Some information concepts are created:
      | identifier              | name            | unit     | expressionOfExpectedValue                                     | dependsOn                                              |
      | ic_budget_q1            | Budget Q1       | u_budget |                                                               |                                                        |
      | ic_budget_q2            | Budget Q2       | u_budget |                                                               |                                                        |
      | ic_budget_q3            | Budget Q3       | u_budget |                                                               |                                                        |
      | ic_budget_q4            | Budget Q4       | u_budget |                                                               |                                                        |
      | ic_budget_year_current  | Budget Year N   | u_budget | #ic_budget_q1 + #ic_budget_q2 + #ic_budget_q3 + #ic_budget_q4 | ic_budget_q1, ic_budget_q2, ic_budget_q3, ic_budget_q4 |
      | ic_budget_year_previous | Budget Year N-1 | u_budget |                                                               |                                                        |
    And Some requirements are created:
      | identifier                         | kind        | type    | name         | hasConcept              | hasRequirement                                                            | validatingCondition                                | validatingConditionDependencies                 |
      | r_budget_q1                        | INFORMATION | Field   | Budget Q1    | ic_budget_q1            |                                                                           |                                                    |                                                 |
      | r_budget_q2                        | INFORMATION | Field   | Budget Q2    | ic_budget_q2            |                                                                           |                                                    |                                                 |
      | r_budget_q3                        | INFORMATION | Field   | Budget Q3    | ic_budget_q3            |                                                                           |                                                    |                                                 |
      | r_budget_q4                        | INFORMATION | Field   | Budget Q4    | ic_budget_q4            |                                                                           |                                                    |                                                 |
      | r_budget_year_current_satisfactory | CONSTRAINT  |         | Budget <3    |                         |                                                                           | #ic_budget_year_current > #ic_budget_year_previous | ic_budget_year_current, ic_budget_year_previous |
      | r_budget_year_current              | INFORMATION | Field   | Budget Total | ic_budget_year_current  | r_budget_year_current_satisfactory                                        |                                                    |                                                 |
      | r_budget_year_current_section      | INFORMATION | Section | Budget 2024  |                         | r_budget_q1, r_budget_q2, r_budget_q3, r_budget_q4, r_budget_year_current |                                                    |                                                 |
      | r_budget_year_previous             | INFORMATION | Field   | Budget Total | ic_budget_year_previous |                                                                           |                                                    |                                                 |
      | r_budget_year_previous_section     | INFORMATION | Section | Budget 2023  |                         | r_budget_year_previous                                                    |                                                    |                                                 |
      | r_budget                           | CRITERION   | DCS     | Budget       |                         | r_budget_year_current_section, r_budget_year_previous_section             |                                                    |                                                 |

  Scenario: Certification Creation
    Given A data unit is created:
      | identifier | name   | notation | type   |
      | u_budget   | budget | €        | NUMBER |
    And Some information concepts are created:
      | identifier              | name            | unit     | expressionOfExpectedValue                                     | dependsOn                                              |
      | ic_budget_q1            | Budget Q1       | u_budget |                                                               |                                                        |
      | ic_budget_q2            | Budget Q2       | u_budget |                                                               |                                                        |
      | ic_budget_q3            | Budget Q3       | u_budget |                                                               |                                                        |
      | ic_budget_q4            | Budget Q4       | u_budget |                                                               |                                                        |
      | ic_budget_year_current  | Budget Year N   | u_budget | #ic_budget_q1 + #ic_budget_q2 + #ic_budget_q3 + #ic_budget_q4 | ic_budget_q1, ic_budget_q2, ic_budget_q3, ic_budget_q4 |
      | ic_budget_year_previous | Budget Year N-1 | u_budget |                                                               |                                                        |
    And Some requirements are created:
      | identifier                         | kind        | type    | name         | hasConcept              | hasRequirement                                                            | validatingCondition                                | validatingConditionDependencies                 |
      | r_budget_q1                        | INFORMATION | Field   | Budget Q1    | ic_budget_q1            |                                                                           |                                                    |                                                 |
      | r_budget_q2                        | INFORMATION | Field   | Budget Q2    | ic_budget_q2            |                                                                           |                                                    |                                                 |
      | r_budget_q3                        | INFORMATION | Field   | Budget Q3    | ic_budget_q3            |                                                                           |                                                    |                                                 |
      | r_budget_q4                        | INFORMATION | Field   | Budget Q4    | ic_budget_q4            |                                                                           |                                                    |                                                 |
      | r_budget_year_current_satisfactory | CONSTRAINT  |         | Budget <3    |                         |                                                                           | #ic_budget_year_current > #ic_budget_year_previous | ic_budget_year_current, ic_budget_year_previous |
      | r_budget_year_current              | INFORMATION | Field   | Budget Total | ic_budget_year_current  | r_budget_year_current_satisfactory                                        |                                                    |                                                 |
      | r_budget_year_current_section      | INFORMATION | Section | Budget 2024  |                         | r_budget_q1, r_budget_q2, r_budget_q3, r_budget_q4, r_budget_year_current |                                                    |                                                 |
      | r_budget_year_previous             | INFORMATION | Field   | Budget Total | ic_budget_year_previous |                                                                           |                                                    |                                                 |
      | r_budget_year_previous_section     | INFORMATION | Section | Budget 2023  |                         | r_budget_year_previous                                                    |                                                    |                                                 |
      | r_budget                           | CRITERION   | DCS     | Budget       |                         | r_budget_year_current_section, r_budget_year_previous_section             |                                                    |                                                 |
    And A certification is created:
      | identifier | requirements |
      | c_budget   | r_budget     |

  Scenario: Certification Fill Values
    Given A data unit is created:
      | identifier | name   | notation | type   |
      | u_budget   | budget | €        | NUMBER |
    And Some information concepts are created:
      | identifier              | name            | unit     | expressionOfExpectedValue                                     | dependsOn                                              |
      | ic_budget_q1            | Budget Q1       | u_budget |                                                               |                                                        |
      | ic_budget_q2            | Budget Q2       | u_budget |                                                               |                                                        |
      | ic_budget_q3            | Budget Q3       | u_budget |                                                               |                                                        |
      | ic_budget_q4            | Budget Q4       | u_budget |                                                               |                                                        |
      | ic_budget_year_current  | Budget Year N   | u_budget | #ic_budget_q1 + #ic_budget_q2 + #ic_budget_q3 + #ic_budget_q4 | ic_budget_q1, ic_budget_q2, ic_budget_q3, ic_budget_q4 |
      | ic_budget_year_previous | Budget Year N-1 | u_budget |                                                               |                                                        |
    And Some requirements are created:
      | identifier                         | kind        | type    | name         | hasConcept              | hasRequirement                                                            | validatingCondition                                | validatingConditionDependencies                 |
      | r_budget_q1                        | INFORMATION | Field   | Budget Q1    | ic_budget_q1            |                                                                           |                                                    |                                                 |
      | r_budget_q2                        | INFORMATION | Field   | Budget Q2    | ic_budget_q2            |                                                                           |                                                    |                                                 |
      | r_budget_q3                        | INFORMATION | Field   | Budget Q3    | ic_budget_q3            |                                                                           |                                                    |                                                 |
      | r_budget_q4                        | INFORMATION | Field   | Budget Q4    | ic_budget_q4            |                                                                           |                                                    |                                                 |
      | r_budget_year_current_satisfactory | CONSTRAINT  |         | Budget <3    |                         |                                                                           | #ic_budget_year_current > #ic_budget_year_previous | ic_budget_year_current, ic_budget_year_previous |
      | r_budget_year_current              | INFORMATION | Field   | Budget Total | ic_budget_year_current  | r_budget_year_current_satisfactory                                        |                                                    |                                                 |
      | r_budget_year_current_section      | INFORMATION | Section | Budget 2024  |                         | r_budget_q1, r_budget_q2, r_budget_q3, r_budget_q4, r_budget_year_current |                                                    |                                                 |
      | r_budget_year_previous             | INFORMATION | Field   | Budget Total | ic_budget_year_previous |                                                                           |                                                    |                                                 |
      | r_budget_year_previous_section     | INFORMATION | Section | Budget 2023  |                         | r_budget_year_previous                                                    |                                                    |                                                 |
      | r_budget                           | CRITERION   | DCS     | Budget       |                         | r_budget_year_current_section, r_budget_year_previous_section             |                                                    |                                                 |
    And A certification is created:
      | identifier | requirements |
      | c_budget   | r_budget     |
    When I fill values in the certification:
      | identifier             | concept                 | value  |
      | v_budget_q1            | ic_budget_q1            | 666    |
      | v_budget_q2            | ic_budget_q2            | 4000   |
      | v_budget_q3            | ic_budget_q3            | 3000   |
      | v_budget_q4            | ic_budget_q4            | 500000 |
      | v_budget_year_previous | ic_budget_year_previous | 100000 |

  Scenario: Certification Fill Evidences
    Given A data unit is created:
      | identifier | name   | notation | type   |
      | u_budget   | budget | €        | NUMBER |
    And Some information concepts are created:
      | identifier              | name            | unit     | expressionOfExpectedValue                                     | dependsOn                                              |
      | ic_budget_q1            | Budget Q1       | u_budget |                                                               |                                                        |
      | ic_budget_q2            | Budget Q2       | u_budget |                                                               |                                                        |
      | ic_budget_q3            | Budget Q3       | u_budget |                                                               |                                                        |
      | ic_budget_q4            | Budget Q4       | u_budget |                                                               |                                                        |
      | ic_budget_year_current  | Budget Year N   | u_budget | #ic_budget_q1 + #ic_budget_q2 + #ic_budget_q3 + #ic_budget_q4 | ic_budget_q1, ic_budget_q2, ic_budget_q3, ic_budget_q4 |
      | ic_budget_year_previous | Budget Year N-1 | u_budget |                                                               |                                                        |
    And An evidence type is created:
      | identifier               | concepts                                               |
      | et_year_financial_report | ic_budget_q1, ic_budget_q2, ic_budget_q3, ic_budget_q4 |
    And Some requirements are created:
      | identifier                         | kind        | type    | name         | hasConcept              | hasRequirement                                                            | validatingCondition                                | validatingConditionDependencies                 | hasEvidenceType          |
      | r_budget_q1                        | INFORMATION | Field   | Budget Q1    | ic_budget_q1            |                                                                           |                                                    |                                                 |                          |
      | r_budget_q2                        | INFORMATION | Field   | Budget Q2    | ic_budget_q2            |                                                                           |                                                    |                                                 |                          |
      | r_budget_q3                        | INFORMATION | Field   | Budget Q3    | ic_budget_q3            |                                                                           |                                                    |                                                 |                          |
      | r_budget_q4                        | INFORMATION | Field   | Budget Q4    | ic_budget_q4            |                                                                           |                                                    |                                                 |                          |
      | r_budget_year_current_satisfactory | CONSTRAINT  |         | Budget <3    |                         |                                                                           | #ic_budget_year_current > #ic_budget_year_previous | ic_budget_year_current, ic_budget_year_previous |                          |
      | r_budget_year_current              | INFORMATION | Field   | Budget Total | ic_budget_year_current  | r_budget_year_current_satisfactory                                        |                                                    |                                                 |                          |
      | r_budget_year_current_section      | INFORMATION | Section | Budget 2024  |                         | r_budget_q1, r_budget_q2, r_budget_q3, r_budget_q4, r_budget_year_current |                                                    |                                                 |                          |
      | r_budget_year_previous             | INFORMATION | Field   | Budget Total | ic_budget_year_previous |                                                                           |                                                    |                                                 |                          |
      | r_budget_year_previous_section     | INFORMATION | Section | Budget 2023  |                         | r_budget_year_previous                                                    |                                                    |                                                 |                          |
      | r_budget                           | CRITERION   | DCS     | Budget       |                         | r_budget_year_current_section, r_budget_year_previous_section             |                                                    |                                                 | et_year_financial_report |
    And A certification is created:
      | identifier | requirements |
      | c_budget   | r_budget     |
    When I fill values in the certification:
      | identifier             | concept                 | value  |
      | v_budget_q1            | ic_budget_q1            | 666    |
      | v_budget_q2            | ic_budget_q2            | 4000   |
      | v_budget_q3            | ic_budget_q3            | 3000   |
      | v_budget_q4            | ic_budget_q4            | 500000 |
      | v_budget_year_previous | ic_budget_year_previous | 100000 |
    When I add an evidence to the certification:
      | identifier | evidenceType             | path                             |
      | e1         | et_year_financial_report | certification/budget/evidence/e1 |
