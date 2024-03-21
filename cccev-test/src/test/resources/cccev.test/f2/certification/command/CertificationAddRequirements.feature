Feature: CertificationAddRequirements

  Scenario: I want to add requirements to a certification
    Given Some requirements are created:
      | identifier | name | description | type |
      | r1         | r1   | d           | t    |
      | r2         | r2   | d           | t    |
      | r3         | r3   | d           | t    |
    And A certification is created:
      | requirements |
      | r1           |
    When I add requirements to the certification:
      | requirements |
      | r2, r3       |
    Then The certification should match the snapshot "CertificationAddRequirements_basic"
