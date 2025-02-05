package io.komune.registry.f2.license.domain

import io.komune.registry.f2.license.domain.command.LicenseCreateFunction
import io.komune.registry.f2.license.domain.command.LicenseUpdateFunction

interface LicenseCommandApi {
    fun licenseCreate(): LicenseCreateFunction
    fun licenseUpdate(): LicenseUpdateFunction
}
