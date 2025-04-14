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
import io.komune.registry.f2.catalogue.domain.command.CatalogueAddedRelatedCataloguesEventDTOBase
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
import io.komune.registry.f2.catalogue.domain.command.CatalogueUnlinkCataloguesFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueUnlinkedCataloguesEventDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueUnreferenceDatasetsFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueUpdateAccessRightsFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueUpdateCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueUpdatedAccessRightsEventDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueUpdatedEventDTOBase
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetByIdentifierFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetByIdentifierResult
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetResult
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
import io.komune.registry.f2.catalogue.domain.query.CatalogueRefGetTreeFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueRefGetTreeResult
import io.komune.registry.f2.catalogue.domain.query.CatalogueRefSearchFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueSearchFunction
import io.komune.registry.f2.organization.domain.model.OrganizationRef
import io.komune.registry.program.s2.catalogue.api.CatalogueAggregateService
import io.komune.registry.program.s2.catalogue.api.CatalogueFinderService
import io.komune.registry.s2.catalogue.domain.command.CatalogueUnlinkCataloguesCommand
import io.komune.registry.s2.commons.model.CatalogueId
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

    @Bean
    override fun cataloguePage(): CataloguePageFunction = f2Function { query ->
        logger.info("cataloguePage: $query")
        catalogueF2FinderService.page(
            id = query.catalogueId?.let(::ExactMatch),
            title = query.title?.let { StringMatch(it, StringMatchCondition.CONTAINS) },
            status = query.status,
            parentIdentifier = query.parentIdentifier,
            language = query.language,
            otherLanguageIfAbsent = query.otherLanguageIfAbsent,
            type = query.type?.let(::CollectionMatch),
            creatorOrganizationId = query.creatorOrganizationId?.let(::ExactMatch),
            freeCriterion = cataloguePoliciesFilterEnforcer.enforceAccessFilter(),
            hidden = ExactMatch(false),
            offset = OffsetPagination(
                offset = query.offset ?: 0,
                limit = query.limit ?: 1000
            ),
        )
    }

    @Bean
    override fun catalogueGet(): CatalogueGetFunction = f2Function { query ->
        logger.info("catalogueGet: $query")
        catalogueF2FinderService.getOrNull(query.id, query.language)
            ?.let { cataloguePoliciesFilterEnforcer.enforceCatalogue(it) }
            .let(::CatalogueGetResult)
    }

    @Bean
    override fun catalogueGetByIdentifier(): CatalogueGetByIdentifierFunction = f2Function { query ->
        logger.info("catalogueGetByIdentifier: $query")
        catalogueF2FinderService.getByIdentifierOrNull(query.identifier, query.language)
            ?.let { cataloguePoliciesFilterEnforcer.enforceCatalogue(it) }
            .let(::CatalogueGetByIdentifierResult)
    }



    @Bean
    override fun catalogueRefGet(): CatalogueRefGetFunction = f2Function { query ->
        catalogueF2FinderService.getRef(query.id, query.language)
    }


    @Bean
    override fun catalogueRefGetTree(): CatalogueRefGetTreeFunction = f2Function { query ->
        logger.info("catalogueRefGetTree: $query")
        catalogueFinderService.getByIdentifierOrNull(query.identifier)
            ?.let { cataloguePoliciesFilterEnforcer.enforceCatalogue(it) }
            ?.let { catalogueF2FinderService.getRefTreeByIdentifierOrNull(query.identifier, query.language) }
            .let(::CatalogueRefGetTreeResult)
    }

    @Bean
    override fun catalogueRefSearch(): CatalogueRefSearchFunction = f2Function { query ->
        logger.info("catalogueRefSearch: $query")
        catalogueSearchFinderService.searchRef(
            query = query.query,
            language = query.language,
            otherLanguageIfAbsent = query.otherLanguageIfAbsent,
            accessRights = query.accessRights?.let(::CollectionMatch),
            catalogueIds = query.catalogueIds?.let(::CollectionMatch),
            licenseId = query.licenseId?.let(::CollectionMatch),
            parentIdentifier = query.parentIdentifier?.let(::CollectionMatch),
            type = query.type?.let(::CollectionMatch),
            themeIds = query.themeIds?.let(::CollectionMatch),
            creatorOrganizationId = query.creatorOrganizationId?.let(::ExactMatch),
            availableLanguages = query.availableLanguages?.let(::CollectionMatch),
            freeCriterion = cataloguePoliciesFilterEnforcer.enforceAccessFilter(),
            page = OffsetPagination(
                offset = query.offset ?: 0,
                limit = query.limit ?: 1000
            ),
        )
    }

    @Bean
    override fun catalogueSearch(): CatalogueSearchFunction = f2Function { query ->
        logger.info("catalogueSearch: $query")
        catalogueSearchFinderService.searchCatalogue(
            query = query.query,
            language = query.language,
            otherLanguageIfAbsent = query.otherLanguageIfAbsent,
            accessRights = query.accessRights?.let(::CollectionMatch),
            catalogueIds = query.catalogueIds?.let(::CollectionMatch),
            licenseId = query.licenseId?.let(::CollectionMatch),
            parentIdentifier = query.parentIdentifier?.let(::CollectionMatch),
            type = query.type?.let(::CollectionMatch),
            themeIds = query.themeIds?.let(::CollectionMatch),
            creatorOrganizationId = query.creatorOrganizationId?.let(::ExactMatch),
            availableLanguages = query.availableLanguages?.let(::CollectionMatch),
            freeCriterion = cataloguePoliciesFilterEnforcer.enforceAccessFilter(),
            page = OffsetPagination(
                offset = query.offset ?: 0,
                limit = query.limit ?: 1000
            ),
        )
    }

    @Bean
    override fun catalogueListAvailableParents(): CatalogueListAvailableParentsFunction = f2Function { query ->
        logger.info("catalogueListAvailableParents: $query")
        catalogueF2FinderService.listAvailableParentsFor(query.id, query.type, query.language, true)
            .let(::CatalogueListAvailableParentsResult)
    }

    @Bean
    override fun catalogueListAvailableThemes(): CatalogueListAvailableThemesFunction = f2Function { query ->
        logger.info("catalogueListAvailableThemes: $query")
        catalogueF2FinderService.listAvailableThemesFor(query.type, query.language)
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

    @Bean
    override fun catalogueListAllowedTypes(): CatalogueListAllowedTypesFunction = f2Function { query ->
        logger.info("catalogueListAllowedTypes: $query")
        catalogueF2FinderService.listExplicitlyAllowedTypesToWrite()
            .sorted()
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

    @PostMapping("/data/catalogueCreate")
    suspend fun catalogueCreate(
        @RequestPart("command") command: CatalogueCreateCommandDTOBase,
        @RequestPart("file", required = false) image: FilePart?
    ): CatalogueCreatedEventDTOBase {
        logger.info("catalogueCreate: $command")
        cataloguePoliciesEnforcer.checkCreate(command.type)

        val enforceCommand = cataloguePoliciesEnforcer.enforceCommand(command)
        val event = catalogueF2AggregateService.create(enforceCommand)
        image?.let {
            catalogueF2AggregateService.setImage(event.id, it)
        }

        return event
    }

    @PostMapping("/data/catalogueUpdate")
    suspend fun catalogueUpdate(
        @RequestPart("command") command: CatalogueUpdateCommandDTOBase,
        @RequestPart("file", required = false) image: FilePart?
    ): CatalogueUpdatedEventDTOBase {
        logger.info("catalogueUpdate: $command")
        cataloguePoliciesEnforcer.checkUpdate(command.id)

        val enforcedCommand = cataloguePoliciesEnforcer.enforceCommand(command)
        val event = catalogueF2AggregateService.update(enforcedCommand)
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
        catalogueAggregateService.delete(command).toDTO()
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
        catalogueAggregateService.addRelatedCatalogues(command)
            .let { CatalogueAddedRelatedCataloguesEventDTOBase(it.id) }
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
}
