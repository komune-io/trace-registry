Feature: ProviderOnboard

  Background:
    Given An address is defined:
      | identifier | street          | postalCode | city      |
      | ad1        | 123 rue Matysme | 66666      | Velo City |

  Scenario: I want to onboard a provider
    When I onboard as a provider via API:
      | org.identifier | org.siret      | org.name | org.displayName | org.description           | org.address | org.legalCategory3Code | org.nafCode | org.phone  | usr.identifier | usr.givenName | usr.familyName | usr.job | usr.phone  | usr.email       | ctl.identifier | ctl.installation | ctl.overseas |
      | sb             | 84488096300013 | SmartB   | SMART B         | Fixers... Let's fix earth | ad1         | 7220                   | 42.30Z      | 0123456789 | manufaktur     | Manu          | Faktur         | Seller  | 0987654321 | manu@faktur.com | ctl            | false            | true         |
    Then The organization should be created:
      | siret          | name   | displayName | description               | address | type               | legalCategory3Code | nafCode | phone      | roles              | supervisor |
      | 84488096300013 | SmartB | SMART B     | Fixers... Let's fix earth | ad1     | PROVIDER_EQUIPMENT | 7220               | 42.30Z  | 0123456789 | provider_equipment | manufaktur |
    And The user should be created:
      | memberOf | givenName | familyName | job    | phone      | email           | assignedRoles |
      | sb       | Manu      | Faktur     | Seller | 0987654321 | manu@faktur.com | admin         |
    And The product catalog should be initialized:
      | identifier | installation | overseas |
      | ctl        | false        | true     |
