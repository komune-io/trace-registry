package io.komune.registry.f2.catalogue.api.model

import io.komune.im.commons.auth.AuthenticationProvider
import io.komune.registry.f2.catalogue.domain.dto.CatalogueBlueprintDTOBase
import io.komune.registry.f2.catalogue.domain.dto.CatalogueBlueprintsDTOBase
import io.komune.registry.f2.license.domain.model.LicenseDTOBase
import io.komune.registry.s2.catalogue.api.config.CatalogueTypeConfiguration
import io.komune.registry.s2.commons.model.CatalogueType
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.license.domain.LicenseIdentifier

suspend fun Map<CatalogueType, CatalogueTypeConfiguration>.toBlueprintsDTO(
    language: Language,
    getLicenseByIdentifier: suspend (licenseIdentifier: LicenseIdentifier) -> LicenseDTOBase?,
): CatalogueBlueprintsDTOBase {
    val blueprints = mapValues { it.value.toBlueprint(language, ::get, getLicenseByIdentifier) }
    return CatalogueBlueprintsDTOBase(
        globalSearchTypes = blueprints.keysWithValuesMatching { it.includeInGlobalSearch },
        updatableTypes = blueprints.keysWithValuesMatching { it.canUpdate },
        claimableTypes = blueprints.keysWithValuesMatching { it.canClaim },
        types = blueprints,
    )
}

suspend fun CatalogueTypeConfiguration.toBlueprint(
    language: Language,
    getTypeConfiguration: (CatalogueType) -> CatalogueTypeConfiguration?,
    getLicenseByIdentifier: suspend (licenseIdentifier: LicenseIdentifier) -> LicenseDTOBase?,
): CatalogueBlueprintDTOBase {
    val typeDto = toTypeDTO(language)
    val authedUser = AuthenticationProvider.getAuthedUser()

    return CatalogueBlueprintDTOBase(
        identifier = type,
        name = typeDto.name,
        icon = typeDto.icon,
        parentTypes = parentTypes?.toList(),
        relatedTypes = relatedTypes?.mapValues { it.value.toList() },
        structure = structure?.toDTO(language, defaults, getTypeConfiguration, getLicenseByIdentifier),
        canUpdate = writerRoles == null || authedUser?.roles.orEmpty().any { it in writerRoles!! },
        canClaim = (authedUser == null && simulateClaimForGuests)
                || ownerRoles != null && authedUser?.roles.orEmpty().any { it in ownerRoles!! },
        includeInGlobalSearch = search?.enable == true && search?.includeInGlobal == true,
    )
}

private fun <K, V> Map<K, V>.keysWithValuesMatching(predicate: (V) -> Boolean): List<K> {
    return filterValues(predicate).keys.toList()
}
