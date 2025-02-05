package io.komune.registry.f2.license.domain

import io.komune.registry.f2.license.domain.query.LicenseGetByIdentifierFunction
import io.komune.registry.f2.license.domain.query.LicenseGetFunction
import io.komune.registry.f2.license.domain.query.LicenseListFunction

interface LicenseQueryApi {
    fun licenseGet(): LicenseGetFunction
    fun licenseGetByIdentifier(): LicenseGetByIdentifierFunction
    fun licenseList(): LicenseListFunction
}
