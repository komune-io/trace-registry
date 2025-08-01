package io.komune.registry.f2.catalogue.api

import f2.dsl.cqrs.filter.CollectionMatch
import f2.dsl.cqrs.filter.ExactMatch
import f2.dsl.cqrs.filter.StringMatch
import f2.dsl.cqrs.filter.StringMatchCondition
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.fnc.f2Function
import io.komune.fs.s2.file.client.FileClient
import io.komune.fs.spring.utils.buildResponseForFile
import io.komune.fs.spring.utils.contentByteArray
import io.komune.fs.spring.utils.serveFile
import io.komune.registry.f2.catalogue.api.model.toCommand
import io.komune.registry.f2.catalogue.api.model.toDTO
import io.komune.registry.f2.catalogue.api.service.CatalogueCertificateService
import io.komune.registry.f2.catalogue.api.service.CatalogueF2AggregateService
import io.komune.registry.f2.catalogue.api.service.CatalogueF2FinderService
import io.komune.registry.f2.catalogue.api.service.CataloguePoliciesEnforcer
import io.komune.registry.f2.catalogue.api.service.CataloguePoliciesFilterEnforcer
import io.komune.registry.f2.catalogue.api.service.CatalogueSearchFinderService
import io.komune.registry.f2.catalogue.api.service.imports.CatalogueImportService
import io.komune.registry.f2.catalogue.domain.CatalogueApi
import io.komune.registry.f2.catalogue.domain.command.CatalogueAddRelatedCataloguesFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueClaimOwnershipFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueCreateCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueCreatedEventDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueDeleteFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueImportCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueImportedEventDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkCataloguesFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkThemesFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueReferenceDatasetsFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueRemoveRelatedCataloguesFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueRemovedRelatedCataloguesEventDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueSetImageCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueSetImageEventDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueStartCertificationFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueUnlinkCataloguesFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueUnlinkedCataloguesEventDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueUnreferenceDatasetsFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueUpdateAccessRightsFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueUpdateCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueUpdatedAccessRightsEventDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueUpdatedEventDTOBase
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetBlueprintsFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetBlueprintsResult
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetByIdentifierFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetByIdentifierResult
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetResult
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetStructureFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetStructureResult
import io.komune.registry.f2.catalogue.domain.query.CatalogueHistoryGetFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueListAllowedTypesFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueListAllowedTypesResult
import io.komune.registry.f2.catalogue.domain.query.CatalogueListAvailableOwnersFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueListAvailableOwnersResult
import io.komune.registry.f2.catalogue.domain.query.CatalogueListAvailableParentsFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueListAvailableParentsResult
import io.komune.registry.f2.catalogue.domain.query.CatalogueListAvailableThemesFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueListAvailableThemesResult
import io.komune.registry.f2.catalogue.domain.query.CataloguePageFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueRefGetFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueRefGetResult
import io.komune.registry.f2.catalogue.domain.query.CatalogueRefGetTreeFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueRefGetTreeResult
import io.komune.registry.f2.catalogue.domain.query.CatalogueRefSearchFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueSearchFunction
import io.komune.registry.f2.organization.domain.model.OrganizationRef
import io.komune.registry.s2.catalogue.api.CatalogueAggregateService
import io.komune.registry.s2.catalogue.api.CatalogueFinderService
import io.komune.registry.s2.catalogue.api.config.CatalogueConfig
import io.komune.registry.s2.catalogue.domain.command.CatalogueUnlinkCataloguesCommand
import io.komune.registry.s2.catalogue.domain.model.CatalogueCriterionField
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.CatalogueType
import io.komune.registry.s2.commons.model.FieldCriterion
import io.komune.registry.s2.commons.model.andCriterionOf
import io.komune.registry.s2.commons.model.andCriterionOfNotNull
import io.komune.registry.s2.commons.model.orCriterionOf
import io.komune.registry.s2.commons.model.orCriterionOfNotNull
import io.komune.registry.s2.commons.utils.truncateLanguage
import jakarta.annotation.security.PermitAll
import org.springframework.context.annotation.Bean
import org.springframework.core.io.InputStreamResource
import org.springframework.http.ResponseEntity
import org.springframework.http.codec.multipart.FilePart
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestPart
import org.springframework.web.bind.annotation.RestController
import s2.spring.utils.logger.Logger

@RestController
@RequestMapping
class CatalogueEndpoint(
    private val catalogueAggregateService: CatalogueAggregateService,
    private val catalogueConfig: CatalogueConfig,
    private val catalogueF2AggregateService: CatalogueF2AggregateService,
    private val catalogueF2FinderService: CatalogueF2FinderService,
    private val catalogueFinderService: CatalogueFinderService,
    private val catalogueImportService: CatalogueImportService,
    private val cataloguePoliciesEnforcer: CataloguePoliciesEnforcer,
    private val cataloguePoliciesFilterEnforcer: CataloguePoliciesFilterEnforcer,
    private val fileClient: FileClient,
    private val certificate: CatalogueCertificateService,
    private val catalogueSearchFinderService: CatalogueSearchFinderService,
): CatalogueApi {

    private val logger by Logger()

    @PermitAll
    @Bean
    override fun catalogueHistoryGet(): CatalogueHistoryGetFunction = f2Function { query ->
        logger.info("catalogueHistoryGet: $query")
        val event = catalogueF2FinderService.getHistory(query.id)
        cataloguePoliciesFilterEnforcer.checkHistory(event.history)
        event
    }

    @PermitAll
    @Bean
    override fun cataloguePage(): CataloguePageFunction = f2Function { query ->
        logger.info("cataloguePage: $query")
        catalogueF2FinderService.page(
            id = query.catalogueId?.let(::ExactMatch),
            title = query.title?.let { StringMatch(it.replace("/", "\\/"), StringMatchCondition.CONTAINS) },
            status = query.status,
            parentId = query.parentId?.let(::ExactMatch),
            parentIdentifier = query.parentIdentifier?.let(::ExactMatch),
            language = query.language.truncateLanguage(),
            otherLanguageIfAbsent = query.otherLanguageIfAbsent,
            type = query.type?.let(::CollectionMatch),
            relatedInCatalogueIds = query.relatedInCatalogueIds?.mapValues { CollectionMatch(it.value) },
            creatorOrganizationId = query.creatorOrganizationId?.let(::ExactMatch),
            freeCriterion = andCriterionOfNotNull(
                cataloguePoliciesFilterEnforcer.enforceAccessFilter(),
                orCriterionOfNotNull(
                    FieldCriterion(CatalogueCriterionField.Hidden, ExactMatch(false)),
                    FieldCriterion(CatalogueCriterionField.Type, CollectionMatch(catalogueConfig.controlledTypes))
                        .takeIf { (query.parentId ?: query.parentIdentifier) != null }
                )
            ),
            offset = OffsetPagination(
                offset = query.offset ?: 0,
                limit = query.limit ?: 1000
            ),
        )
    }

    @PermitAll
    @Bean
    override fun catalogueGet(): CatalogueGetFunction = f2Function { query ->
        logger.info("catalogueGet: $query")
        catalogueF2FinderService.getOrNull(query.id, query.language?.truncateLanguage())
            ?.let { cataloguePoliciesFilterEnforcer.enforceCatalogue(it) }
            .let(::CatalogueGetResult)
    }

    @PermitAll
    @Bean
    override fun catalogueGetByIdentifier(): CatalogueGetByIdentifierFunction = f2Function { query ->
        logger.info("catalogueGetByIdentifier: $query")
        catalogueF2FinderService.getByIdentifierOrNull(query.identifier, query.language?.truncateLanguage())
            ?.let { cataloguePoliciesFilterEnforcer.enforceCatalogue(it) }
            .let(::CatalogueGetByIdentifierResult)
    }

    @PermitAll
    @Bean
    override fun catalogueGetStructure(): CatalogueGetStructureFunction = f2Function { query ->
        logger.info("catalogueGetStructure: $query")
        catalogueF2FinderService.getStructure(query.type, query.language)
            .let(::CatalogueGetStructureResult)
    }

    @PermitAll
    @Bean
    override fun catalogueGetBlueprints(): CatalogueGetBlueprintsFunction = f2Function { query ->
        logger.info("catalogueGetBlueprints: $query")
        catalogueF2FinderService.getBlueprints(query.language)
            .let(::CatalogueGetBlueprintsResult)
    }

    @PermitAll
    @Bean
    override fun catalogueRefGet(): CatalogueRefGetFunction = f2Function { query ->
        catalogueF2FinderService.getRef(query.id, query.language.truncateLanguage())
            .let(::CatalogueRefGetResult)
    }

    @PermitAll
    @Bean
    override fun catalogueRefGetTree(): CatalogueRefGetTreeFunction = f2Function { query ->
        logger.info("catalogueRefGetTree: $query")
        catalogueFinderService.getByIdentifierOrNull(query.identifier)
            ?.let { cataloguePoliciesFilterEnforcer.enforceCatalogue(it) }
            ?.let { catalogueF2FinderService.getRefTreeByIdentifierOrNull(query.identifier, query.language.truncateLanguage()) }
            .let(::CatalogueRefGetTreeResult)
    }

    @PermitAll
    @Bean
    override fun catalogueRefSearch(): CatalogueRefSearchFunction = f2Function { query ->
        logger.info("catalogueRefSearch: $query")
        catalogueSearchFinderService.searchRef(
            query = query.query,
            language = query.language.truncateLanguage(),
            otherLanguageIfAbsent = query.otherLanguageIfAbsent,
            accessRights = query.accessRights?.let(::CollectionMatch),
            catalogueIds = query.catalogueIds?.let(::CollectionMatch),
            licenseId = query.licenseId?.let(::CollectionMatch),
            parentId = query.parentId?.let(::CollectionMatch),
            parentIdentifier = query.parentIdentifier?.let(::CollectionMatch),
            type = query.type?.let(::CollectionMatch),
            relatedCatalogueIds = query.relatedCatalogueIds?.mapValues { CollectionMatch(it.value) },
            relatedInCatalogueIds = query.relatedInCatalogueIds?.mapValues { CollectionMatch(it.value) },
            themeIds = query.themeIds?.let(::CollectionMatch),
            creatorOrganizationId = query.creatorOrganizationId?.let(::ExactMatch),
            availableLanguages = query.availableLanguages?.let(::CollectionMatch),
            withTransient = query.withTransient,
            freeCriterion = andCriterionOfNotNull(
                query.ownerOrganizationId?.let { orCriterionOf(
                    FieldCriterion(CatalogueCriterionField.OwnerOrganizationId, ExactMatch(it)),
                    andCriterionOf(
                        FieldCriterion(CatalogueCriterionField.OwnerOrganizationId, ExactMatch(null)),
                        FieldCriterion(CatalogueCriterionField.CreatorOrganizationId, ExactMatch(it)),
                    )
                )},
                cataloguePoliciesFilterEnforcer.enforceAccessFilter(),
            ),
            page = OffsetPagination(
                offset = query.offset ?: 0,
                limit = query.limit ?: 1000
            ),
        )
    }

    @PermitAll
    @Bean
    override fun catalogueSearch(): CatalogueSearchFunction = f2Function { query ->
        logger.info("catalogueSearch: $query")
        catalogueSearchFinderService.searchCatalogue(
            query = query.query,
            language = query.language.truncateLanguage(),
            otherLanguageIfAbsent = query.otherLanguageIfAbsent,
            accessRights = query.accessRights?.let(::CollectionMatch),
            catalogueIds = query.catalogueIds?.let(::CollectionMatch),
            licenseId = query.licenseId?.let(::CollectionMatch),
            parentId = query.parentId?.let(::CollectionMatch),
            parentIdentifier = query.parentIdentifier?.let(::CollectionMatch),
            type = query.type?.let(::CollectionMatch),
            relatedCatalogueIds = query.relatedCatalogueIds?.mapValues { CollectionMatch(it.value) },
            relatedInCatalogueIds = query.relatedInCatalogueIds?.mapValues { CollectionMatch(it.value) },
            themeIds = query.themeIds?.let(::CollectionMatch),
            creatorOrganizationId = query.creatorOrganizationId?.let(::ExactMatch),
            availableLanguages = query.availableLanguages?.let(::CollectionMatch),
            withTransient = query.withTransient,
            freeCriterion = andCriterionOfNotNull(
                query.ownerOrganizationId?.let { orCriterionOf(
                    FieldCriterion(CatalogueCriterionField.OwnerOrganizationId, ExactMatch(it)),
                    andCriterionOf(
                        FieldCriterion(CatalogueCriterionField.OwnerOrganizationId, ExactMatch(null)),
                        FieldCriterion(CatalogueCriterionField.CreatorOrganizationId, ExactMatch(it)),
                    )
                )},
                cataloguePoliciesFilterEnforcer.enforceAccessFilter(),
            ),
            page = OffsetPagination(
                offset = query.offset ?: 0,
                limit = query.limit ?: 1000
            ),
        )
    }

    @PermitAll
    @Bean
    override fun catalogueListAvailableParents(): CatalogueListAvailableParentsFunction = f2Function { query ->
        logger.info("catalogueListAvailableParents: $query")
        catalogueF2FinderService.listAvailableParentsFor(query.id, query.type, query.language.truncateLanguage(), true)
            .let(::CatalogueListAvailableParentsResult)
    }

    @Bean
    override fun catalogueListAvailableThemes(): CatalogueListAvailableThemesFunction = f2Function { query ->
        logger.info("catalogueListAvailableThemes: $query")
        catalogueF2FinderService.listAvailableThemesFor(query.type, query.language.truncateLanguage())
            .sortedBy { it.prefLabel }
            .let(::CatalogueListAvailableThemesResult)
    }

    @Bean
    override fun catalogueListAvailableOwners(): CatalogueListAvailableOwnersFunction = f2Function { query ->
        logger.info("catalogueListAvailableOwners: $query")
        catalogueF2FinderService.listAvailableOwnersFor(query.type, query.search, query.limit)
            .sortedBy(OrganizationRef::name)
            .let(::CatalogueListAvailableOwnersResult)
    }

    @PermitAll
    @Bean
    override fun catalogueListAllowedTypes(): CatalogueListAllowedTypesFunction = f2Function { query ->
        logger.info("catalogueListAllowedTypes: $query")
        catalogueF2FinderService.listAllowedTypes(query)
            .sortedBy { it.name }
            .let(::CatalogueListAllowedTypesResult)
    }

    @PermitAll
    @GetMapping("/data/catalogues/{catalogueId}/img")
    suspend fun catalogueImgDownload(
        @PathVariable catalogueId: CatalogueId,
    ): ResponseEntity<InputStreamResource> = serveFile(fileClient) {
        logger.info("catalogueImgDownload: $catalogueId")
        catalogueFinderService.get(catalogueId).imageFsPath
    }

    @PermitAll
    @GetMapping("/data/catalogues/{catalogueId}/certificate")
    suspend fun catalogueCertificateDownload(
        @PathVariable catalogueId: CatalogueId,
    ): ResponseEntity<InputStreamResource> {
        logger.info("catalogueCertificateDownload: $catalogueId")
        val file = certificate.generateFiles(catalogueId)
        return buildResponseForFile("certificate-$catalogueId.pdf", file)
    }

    @PermitAll
    @GetMapping("/data/catalogueTypes/{type}/img")
    suspend fun catalogueTypeImgDownload(
        @PathVariable type: CatalogueType,
    ): ResponseEntity<InputStreamResource> {
        logger.info("catalogueTypeImgDownload: $type")
        val filename = catalogueConfig.typeConfigurations[type]?.icon
        return buildResponseForFile(
            filename = filename.orEmpty(),
            fileStream = filename?.let { catalogueConfig.resources[it]?.inputStream() }
        )
    }

    @PostMapping("/data/catalogueCreate")
    suspend fun catalogueCreate(
        @RequestPart("command") command: CatalogueCreateCommandDTOBase,
        @RequestPart("img", required = false) image: FilePart?
    ): CatalogueCreatedEventDTOBase {
        logger.info("catalogueCreate: $command")
        cataloguePoliciesEnforcer.checkCreate(command.type)

        val enforceCommand = cataloguePoliciesEnforcer.enforceCommand(command)
        return catalogueF2AggregateService.create(enforceCommand, image)
    }

    @PostMapping("/data/catalogueUpdate")
    suspend fun catalogueUpdate(
        @RequestPart("command") command: CatalogueUpdateCommandDTOBase,
        @RequestPart("img", required = false) image: FilePart?
    ): CatalogueUpdatedEventDTOBase {
        logger.info("catalogueUpdate: $command")
        cataloguePoliciesEnforcer.checkUpdate(command.id)

        val enforcedCommand = cataloguePoliciesEnforcer.enforceCommand(command)
        val event = catalogueF2AggregateService.update(enforcedCommand, true)
        image?.let { catalogueF2AggregateService.setImage(event.id, it) }

        return event
    }

    @PostMapping("/data/catalogueImport")
    suspend fun catalogueImport(
        @RequestPart("command") command: CatalogueImportCommandDTOBase,
        @RequestPart("file", required = true) file: FilePart
    ): CatalogueImportedEventDTOBase {
        logger.info("catalogueImport: $command")
        cataloguePoliciesEnforcer.checkCreate(command.type.catalogueType)
        return file.contentByteArray().inputStream().use {
            catalogueImportService.parseAndImport(command.type, it)
                .let(::CatalogueImportedEventDTOBase)
        }
    }

    @Bean
    override fun catalogueUpdateAccessRights(): CatalogueUpdateAccessRightsFunction = f2Function { command ->
        logger.info("catalogueUpdateAccessRights: $command")
        cataloguePoliciesEnforcer.checkUpdateAccessRights(command.id)
        catalogueAggregateService.updateAccessRights(command)
            .let { CatalogueUpdatedAccessRightsEventDTOBase(it.id) }
    }

    @Bean
    override fun catalogueDelete(): CatalogueDeleteFunction = f2Function { command ->
        logger.info("catalogueDelete: $command")
        cataloguePoliciesEnforcer.checkDelete(command.id)
        catalogueF2AggregateService.delete(command).toDTO()
    }

    @Bean
    override fun catalogueLinkCatalogues(): CatalogueLinkCataloguesFunction = f2Function { command ->
        logger.info("catalogueLinkCatalogues: $command")
        cataloguePoliciesEnforcer.checkLinkCatalogues(command.id)
        catalogueF2AggregateService.linkCatalogues(command)
    }

    @Bean
    override fun catalogueUnlinkCatalogues(): CatalogueUnlinkCataloguesFunction = f2Function { command ->
        logger.info("catalogueUnlinkCatalogues: $command")
        cataloguePoliciesEnforcer.checkLinkCatalogues(command.id)
        CatalogueUnlinkCataloguesCommand(
            id = command.id,
            catalogueIds = command.catalogues,
        ).let { catalogueAggregateService.unlinkCatalogues(it) }
            .let { CatalogueUnlinkedCataloguesEventDTOBase(it.id) }
    }

    @Bean
    override fun catalogueAddRelatedCatalogues(): CatalogueAddRelatedCataloguesFunction = f2Function { command ->
        logger.info("catalogueAddRelatedCatalogues: $command")
        cataloguePoliciesEnforcer.checkUpdate(command.id)
        catalogueF2AggregateService.addRelatedCatalogues(command)
    }

    @Bean
    override fun catalogueRemoveRelatedCatalogues(): CatalogueRemoveRelatedCataloguesFunction = f2Function { command ->
        logger.info("catalogueRemoveRelatedCatalogues: $command")
        cataloguePoliciesEnforcer.checkUpdate(command.id)
        catalogueAggregateService.removeRelatedCatalogues(command)
            .let { CatalogueRemovedRelatedCataloguesEventDTOBase(it.id) }
    }

    @Bean
    override fun catalogueReferenceDatasets(): CatalogueReferenceDatasetsFunction = f2Function { command ->
        logger.info("catalogueReferenceDatasets: $command")
        cataloguePoliciesEnforcer.checkReferenceDatasets(command.id)
        catalogueF2AggregateService.referenceDatasets(command)
    }

    @Bean
    override fun catalogueUnreferenceDatasets(): CatalogueUnreferenceDatasetsFunction = f2Function { command ->
        logger.info("catalogueUnreferenceDatasets: $command")
        cataloguePoliciesEnforcer.checkReferenceDatasets(command.id)
        catalogueF2AggregateService.unreferenceDatasets(command)
    }

    @Bean
    override fun catalogueLinkThemes(): CatalogueLinkThemesFunction = f2Function { command ->
        logger.info("catalogueLinkThemes: $command")
        cataloguePoliciesEnforcer.checkLinkThemes(command.id)
        catalogueAggregateService.linkThemes(command.toCommand()).toDTO()
    }

    @PostMapping("/data/catalogueSetImage")
    suspend fun catalogueSetImage(
        @RequestPart("command") command: CatalogueSetImageCommandDTOBase,
        @RequestPart("file", required = true) file: FilePart
    ): CatalogueSetImageEventDTOBase {
        logger.info("catalogueSetImage: $command")
        cataloguePoliciesEnforcer.checkSetImage(command.id)
        return catalogueF2AggregateService.setImage(command.id, file)
            .let {
                CatalogueSetImageEventDTOBase(
                    id = it.id,
                    img = it.img,
                    date = it.date,
                )
            }
    }

    @Bean
    override fun catalogueClaimOwnership(): CatalogueClaimOwnershipFunction = f2Function { command ->
        logger.info("catalogueClaimOwnership: $command")
        cataloguePoliciesEnforcer.checkClaimOwnership(command.id)
        catalogueF2AggregateService.claimOwnership(command)
    }

    @Bean
    override fun catalogueStartCertification(): CatalogueStartCertificationFunction = f2Function { command ->
        logger.info("catalogueStartCertification: $command")
        cataloguePoliciesEnforcer.checkFillCertification(command.id)
        catalogueF2AggregateService.startCertification(command)
    }
}
