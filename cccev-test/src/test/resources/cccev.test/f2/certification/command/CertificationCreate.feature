Feature: CertificationCreate

  Scenario: I want to create a certification
    Given Some requirements are created:
      | identifier | name | description | type |
      | r1         | r1   | d           | t    |
      | r2         | r2   | d           | t    |
      | r3         | r3   | d           | t    |
    When I create a certification:
      | identifier | requirements |
      | c          | r1, r2       |
    Then The certification should match the snapshot "CertificationCertificationCreate_basic"
