package io.komune.registry.s2.license.domain.model

import io.komune.registry.s2.license.domain.LicenseId
import io.komune.registry.s2.license.domain.LicenseIdentifier

data class LicenseModel(
    val id: LicenseId,
    val identifier: LicenseIdentifier,
    val name: String,
    val url: String?
)
