package io.komune.registry.f2.catalogue.api.model

import io.komune.im.commons.auth.AuthenticationProvider
import io.komune.registry.f2.catalogue.domain.dto.CatalogueTypeDTOBase
import io.komune.registry.f2.catalogue.domain.dto.structure.CatalogueCreateButtonDTOBase
import io.komune.registry.f2.catalogue.domain.dto.structure.CatalogueStructureDTOBase
import io.komune.registry.s2.catalogue.api.config.CatalogueTypeConfiguration
import io.komune.registry.s2.catalogue.domain.model.CatalogueConfigurationModel
import io.komune.registry.s2.catalogue.domain.model.structure.CatalogueCreateButtonModel
import io.komune.registry.s2.catalogue.domain.model.structure.CatalogueStructureModel
import io.komune.registry.s2.commons.model.CatalogueType
import io.komune.registry.s2.commons.model.Language

suspend fun CatalogueStructureModel.toDTO(
    language: Language,
    getTypeConfiguration: suspend (type: String) -> CatalogueTypeConfiguration?
) = CatalogueStructureDTOBase(
    type = type,
    alias = alias,
    color = color,
    isTab = isTab,
    illustration = illustration,
    creationForm = creationForm,
    metadataForm = metadataForm,
    createButton = createButton?.toDTO(language, getTypeConfiguration),
)

fun CatalogueStructureModel?.overrideWith(configuration: CatalogueConfigurationModel?) = orEmpty().copy(
    type = configuration?.structureType ?: this?.type
)

fun CatalogueStructureModel?.orEmpty() = this ?: CatalogueStructureModel(
    type = null,
    alias = false,
    color = null,
    isTab = false,
    illustration = null,
    creationForm = null,
    metadataForm = null,
    createButton = null,
)

suspend fun CatalogueCreateButtonModel.toDTO(
    language: Language,
    getTypeConfiguration: suspend (type: String) -> CatalogueTypeConfiguration?,
) = CatalogueCreateButtonDTOBase(
    label = label[language].orEmpty(),
    kind = kind,
    types = types.mapNotNull { type ->
        getTypeConfiguration(type)?.takeIf { it.authedUserCanWrite() }?.toTypeDTO(language)
    },
).takeIf { it.types.isNotEmpty() }

fun CatalogueTypeConfiguration.toTypeDTO(language: Language) = CatalogueTypeDTOBase(
    identifier = type,
    name = name?.get(language).orEmpty(),
    icon = icon?.let { "/data/catalogueTypes/$type/img" }
)

fun CatalogueTypeDTOBase?.orEmpty(identifier: CatalogueType) = this ?: CatalogueTypeDTOBase(
    identifier = identifier,
    name = identifier,
    icon = null,
)

suspend fun CatalogueTypeConfiguration.authedUserCanWrite(): Boolean {
    if (writerRoles == null) {
        return true
    }
    return AuthenticationProvider.getAuthedUser()
        ?.roles
        .orEmpty()
        .any { it in writerRoles!! }
}
