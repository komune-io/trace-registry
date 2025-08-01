package io.komune.registry.s2.commons.auth

object Permissions {
    object Catalogue {
        const val DELETE_ALL = "rg_perm_catalogue_delete_all"
        const val DELETE_ORG = "rg_perm_catalogue_delete_org"
        const val FILL_CERTIFICATION_ALL = "rg_perm_catalogue_fill_certification_all"
        const val FILL_CERTIFICATION_ORG = "rg_perm_catalogue_fill_certification_org"
        const val GRANT_OWNERSHIP_ALL = "rg_perm_catalogue_grant_ownership_all"
        const val GRANT_OWNERSHIP_OWNED = "rg_perm_catalogue_grant_ownership_owned"
        const val PUBLISH_ALL = "rg_perm_catalogue_publish_all"
        const val PUBLISH_ORG = "rg_perm_catalogue_publish_org"
        const val READ_ALL = "rg_perm_catalogue_read_all"
        const val READ_ORG = "rg_perm_catalogue_read_org"
        const val WRITE_ALL = "rg_perm_catalogue_write_all"
        const val WRITE_ANY_TYPE = "rg_perm_catalogue_write_any_type"
        const val WRITE_ORG = "rg_perm_catalogue_write_org"
    }

    object CatalogueDraft {
        const val AUDIT = "rg_perm_catalogue_draft_audit"
        const val CREATE_ALL = "rg_perm_catalogue_draft_create_all"
        const val CREATE_OWNED = "rg_perm_catalogue_draft_create_owned"
        const val DELETE_ALL = "rg_perm_catalogue_draft_delete_all"
        const val READ_ALL = "rg_perm_catalogue_draft_read_all"
        const val WRITE_ALL = "rg_perm_catalogue_draft_write_all"
    }

    object Configuration {
        const val CCCEV_OLD_WRITE = "rg_perm_configuration_cccev_write"
        const val CONCEPT_WRITE = "rg_perm_configuration_concept_write"
        const val LICENSE_WRITE = "rg_perm_configuration_license_write"
    }

    object Protocol {
        const val WRITE_ALL = "rg_perm_protocol_write_all"
    }
}
