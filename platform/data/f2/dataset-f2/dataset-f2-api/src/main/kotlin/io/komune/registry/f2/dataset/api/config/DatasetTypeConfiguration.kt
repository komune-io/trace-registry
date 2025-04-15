package io.komune.registry.f2.dataset.api.config

import io.komune.im.commons.auth.AuthedUserDTO
import io.komune.im.commons.auth.hasOneOfRoles
import io.komune.registry.s2.commons.model.InformationConceptIdentifier

data class DatasetTypeConfiguration(
    val type: String,
    val default: DatasetTypeSpecificConfiguration?,
    val configurations: List<DatasetTypeSpecificCatalogueConfiguration>?,
)

open class DatasetTypeSpecificConfiguration {
    var aggregators: List<InformationConceptIdentifier>? = null
    var policies: DatasetTypePolicyConfiguration? = null
}

data class DatasetTypeSpecificCatalogueConfiguration(
    val catalogueTypes: List<String>
) : DatasetTypeSpecificConfiguration()

data class DatasetTypePolicyConfiguration(
    val default: DatasetTypeSpecificPolicyConfiguration?,
    val configurations: List<DatasetTypeSpecificRolePolicyConfiguration>?
) {
    fun policyFor(authedUser: AuthedUserDTO?): DatasetTypeSpecificPolicyConfiguration? {
        return configurations
            ?.firstOrNull { authedUser?.hasOneOfRoles(*it.roles.toTypedArray()) ?: false }
            ?: default
    }
}

open class DatasetTypeSpecificPolicyConfiguration {
    lateinit var read: DatasetTypeAccess
}

data class DatasetTypeSpecificRolePolicyConfiguration(
    val roles: Set<String>
) : DatasetTypeSpecificPolicyConfiguration()

enum class DatasetTypeAccess {
    NONE, CREATOR_USER, CREATOR_ORGANIZATION, ALL
}
