package io.komune.registry.f2.catalogue.api.model

import io.komune.im.commons.auth.AuthenticationProvider
import io.komune.registry.f2.catalogue.api.CatalogueEndpoint
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.f2.catalogue.domain.dto.CatalogueTypeDTOBase
import io.komune.registry.f2.catalogue.domain.dto.structure.CatalogueCreateButtonDTOBase
import io.komune.registry.f2.catalogue.domain.dto.structure.CatalogueProtocolButtonDTOBase
import io.komune.registry.f2.catalogue.domain.dto.structure.CatalogueStructureDTOBase
import io.komune.registry.f2.license.domain.model.LicenseDTOBase
import io.komune.registry.s2.catalogue.api.config.CatalogueDefaults
import io.komune.registry.s2.catalogue.api.config.CatalogueTypeConfiguration
import io.komune.registry.s2.catalogue.domain.command.CatalogueCreateCommand
import io.komune.registry.s2.catalogue.domain.model.CatalogueConfigurationModel
import io.komune.registry.s2.catalogue.domain.model.structure.CatalogueCreateButtonModel
import io.komune.registry.s2.catalogue.domain.model.structure.CatalogueProtocolButtonModel
import io.komune.registry.s2.catalogue.domain.model.structure.CatalogueStructureModel
import io.komune.registry.s2.commons.model.CatalogueType
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.commons.model.form.Form
import io.komune.registry.s2.commons.model.tuto.Tutorial
import io.komune.registry.s2.commons.model.tuto.TutorialDTOBase
import io.komune.registry.s2.license.domain.LicenseIdentifier

suspend fun CatalogueStructureModel.toDTO(
    language: Language,
    defaults: CatalogueDefaults?,
    getTypeConfiguration: suspend (type: String) -> CatalogueTypeConfiguration?,
    getLicenseByIdentifier: suspend (licenseIdentifier: LicenseIdentifier) -> LicenseDTOBase?,
) = CatalogueStructureDTOBase(
    type = type,
    alias = alias,
    color = color,
    isTab = isTab,
    isInventory = isInventory,
    illustration = illustration,
    creationForm = creationForm?.withDefaults(defaults, getLicenseByIdentifier),
    metadataForm = metadataForm,
    tagForm = tagForm,
    table = table,
    createButton = createButton?.toDTO(language, getTypeConfiguration),
    protocolButton = protocolButton?.toDTO(language),
    tutorials = tutorials?.map { it.toDTO(language) },
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
    tagForm = null,
    table = null,
    createButton = null,
    protocolButton = null,
    tutorials = null,
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

fun CatalogueProtocolButtonModel.toDTO(language: Language) = CatalogueProtocolButtonDTOBase(
    label = label[language].orEmpty(),
    form = form,
)

fun CatalogueTypeConfiguration.toTypeDTO(language: Language) = CatalogueTypeDTOBase(
    identifier = type,
    name = name?.get(language).orEmpty(),
    icon = icon?.let { CatalogueEndpoint.blueprintImagePath(it) }
)

fun CatalogueTypeDTOBase?.orEmpty(identifier: CatalogueType) = this ?: CatalogueTypeDTOBase(
    identifier = identifier,
    name = identifier,
    icon = null,
)

fun Tutorial.toDTO(language: Language) = TutorialDTOBase(
    condition = condition,
    content = content[language],
    image = image?.let { CatalogueEndpoint.blueprintImagePath(it) },
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

suspend fun Form.withDefaults(
    defaults: CatalogueDefaults?,
    getLicenseByIdentifier: suspend (licenseIdentifier: LicenseIdentifier) -> LicenseDTOBase?,
): Form {
    defaults ?: return this

    val computedInitialValues = buildMap {
        defaults.accessRights?.let { put(CatalogueCreateCommand::accessRights.name, it.toString()) }

        defaults.licenseIdentifier?.let { licenseIdentifier ->
            getLicenseByIdentifier(licenseIdentifier)?.let { license ->
                put(CatalogueDTOBase::license.name, license.id)
            }
        }
    }

    return copy(
        initialValues = computedInitialValues + initialValues.orEmpty(),
        tutorial = tutorial?.copy(
            image = tutorial?.image?.let { CatalogueEndpoint.blueprintImagePath(it) }
        )
    )
}
