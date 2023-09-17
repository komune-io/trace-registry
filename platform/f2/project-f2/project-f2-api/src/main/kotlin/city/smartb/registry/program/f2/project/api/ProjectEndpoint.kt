package city.smartb.registry.program.f2.project.api

import city.smartb.fs.s2.file.client.FileClient
import city.smartb.fs.spring.utils.serveFile
import city.smartb.registry.program.f2.project.api.service.ProjectF2FinderService
import city.smartb.registry.program.f2.project.api.service.ProjectPoliciesEnforcer
import city.smartb.registry.program.f2.project.domain.ProjectCommandApi
import city.smartb.registry.program.f2.project.domain.ProjectQueryApi
import city.smartb.registry.program.f2.project.domain.command.ProjectAddAssetPoolFunction
import city.smartb.registry.program.f2.project.domain.command.ProjectChangePrivacyFunction
import city.smartb.registry.program.f2.project.domain.command.ProjectCreateFunction
import city.smartb.registry.program.f2.project.domain.command.ProjectDeleteFunction
import city.smartb.registry.program.f2.project.domain.command.ProjectUpdateFunction
import city.smartb.registry.program.f2.project.domain.query.ProjectDownloadFileQuery
import city.smartb.registry.program.f2.project.domain.query.ProjectGetByIdentifierFunction
import city.smartb.registry.program.f2.project.domain.query.ProjectGetByIdentifierResult
import city.smartb.registry.program.f2.project.domain.query.ProjectGetFunction
import city.smartb.registry.program.f2.project.domain.query.ProjectGetResult
import city.smartb.registry.program.f2.project.domain.query.ProjectListFilesFunction
import city.smartb.registry.program.f2.project.domain.query.ProjectListFilesResult
import city.smartb.registry.program.f2.project.domain.query.ProjectPageFunction
import city.smartb.registry.program.f2.project.domain.query.ProjectPageResult
import city.smartb.registry.program.s2.asset.api.AssetPoolFinderService
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.project.api.ProjectAggregateService
import city.smartb.registry.program.s2.project.domain.automate.ProjectState
import f2.dsl.cqrs.filter.CollectionMatch
import f2.dsl.cqrs.filter.ExactMatch
import f2.dsl.cqrs.filter.StringMatch
import f2.dsl.cqrs.filter.StringMatchCondition
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.fnc.f2Function
import jakarta.annotation.security.PermitAll
import org.springframework.context.annotation.Bean
import org.springframework.core.io.InputStreamResource
import org.springframework.http.ResponseEntity
import org.springframework.http.server.reactive.ServerHttpResponse
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import s2.spring.utils.logger.Logger

@RestController
@RequestMapping
class ProjectEndpoint(
    private val projectF2FinderService: ProjectF2FinderService,
    private val projectAggregateService: ProjectAggregateService,
    private val projectPoliciesEnforcer: ProjectPoliciesEnforcer,
    private val assetPoolFinderService: AssetPoolFinderService,
    private val fileClient: FileClient,
): ProjectQueryApi, ProjectCommandApi {

    private val logger by Logger()

    @PermitAll
    @Bean
    override fun projectGet(): ProjectGetFunction = f2Function { query ->
        logger.info("projectGet: $query")
        projectPoliciesEnforcer.checkGet(query.id)
        projectF2FinderService.getOrNull(query.id).let(::ProjectGetResult)
    }

    @PermitAll
    @Bean
    override fun projectGetByIdentifier(): ProjectGetByIdentifierFunction = f2Function { query ->
        logger.info("projectGetByIdentifier: $query")
        projectPoliciesEnforcer.checkGetByIdentifier(query.identifier)
        projectF2FinderService.getOrNullByIdentifier(query.identifier).let(::ProjectGetByIdentifierResult)
    }

    @PermitAll
    @Bean
    override fun projectPage(): ProjectPageFunction = f2Function { query ->
        logger.info("projectPage: $query")
        projectPoliciesEnforcer.checkList()
        val pagination = OffsetPagination(
            offset = query.offset ?: 0,
            limit = query.limit ?: 10,
        )
        projectF2FinderService.page(
            identifier = query.identifier?.let { ExactMatch(it) },
            name = query.name?.ifEmpty { null }?.let { StringMatch(it, StringMatchCondition.CONTAINS) },
            dueDate = query.dueDate?.let { ExactMatch(it) },
            estimatedReductions = query.estimatedReductions?.ifEmpty { null }?.let { StringMatch(it, StringMatchCondition.CONTAINS) },
            proponent = query.proponent?.ifEmpty { null }?.let { StringMatch(it, StringMatchCondition.CONTAINS) },
            referenceYear = query.referenceYear?.ifEmpty { null }?.let { StringMatch(it, StringMatchCondition.CONTAINS) },
            status = query.status?.let { ExactMatch(ProjectState.valueOf(it)) } ?: ExactMatch(ProjectState.STAMPED),
            type = query.type?.let(::ExactMatch),
            assetPools = query.vintage?.ifEmpty { null }?.let { CollectionMatch(getAssetPoolIdsWithVintage(it)) },
            origin = query.origin?.ifEmpty { null }?.let { StringMatch(it, StringMatchCondition.CONTAINS) },
            offset = pagination,
            privateOrganizationId = projectPoliciesEnforcer.privateOrganizationId()
        ).let { page ->
            ProjectPageResult(
                items = page.items,
                total = page.total,
                pagination = pagination
            )
        }
    }

    @PermitAll
    @Bean
    override fun projectListFiles(): ProjectListFilesFunction = f2Function { query ->
        logger.info("projectListFiles: $query")
        projectF2FinderService.listFiles(query.id).let(::ProjectListFilesResult)
    }

    @PermitAll
    @PostMapping("/projectDownloadFile")
    suspend fun projectDownloadFile(
        @RequestBody query: ProjectDownloadFileQuery,
        response: ServerHttpResponse
    ): ResponseEntity<InputStreamResource> = serveFile(fileClient) {
        logger.info("assetCertificateDownload: $query")
        query.path
    }

    @PermitAll
    @Bean
    override fun projectCreate(): ProjectCreateFunction = f2Function { command ->
        logger.info("projectCreate: $command")
        projectPoliciesEnforcer.checkCreate()
        projectAggregateService.create(command)
    }

    @PermitAll
    @Bean
    override fun projectUpdate(): ProjectUpdateFunction = f2Function { command ->
        logger.info("projectUpdateDetails: $command")
        projectPoliciesEnforcer.checkUpdate(command.id)
        projectAggregateService.update(command)
    }

    @PermitAll
    @Bean
    override fun projectAddAssetPool(): ProjectAddAssetPoolFunction = f2Function { command ->
        logger.info("projectAddAssetPoolDetails: $command")
        projectPoliciesEnforcer.checkUpdate(command.id)
        projectAggregateService.addAssetPool(command)
    }

    @PermitAll
    @Bean
    override fun projectChangePrivacy(): ProjectChangePrivacyFunction = f2Function { command ->
        logger.info("projectAddAssetPoolDetails: $command")
        projectPoliciesEnforcer.checkUpdate(command.id)
        projectAggregateService.changePrivacy(command)
    }

//    @PermitAll
//    @Bean
    override fun projectDelete(): ProjectDeleteFunction = f2Function { command ->
        projectPoliciesEnforcer.checkDelete(command.id)
        projectAggregateService.delete(command)
    }

    private suspend fun getAssetPoolIdsWithVintage(vintage: String): Set<AssetPoolId> {
        val assetPoolIdsWithQueryVintage: MutableSet<AssetPoolId> = assetPoolFinderService.page(
            vintage = vintage.ifEmpty { null }?.let { ExactMatch(it) },
        ).items.map { it.id }.toMutableSet()
        if (assetPoolIdsWithQueryVintage.isEmpty()) {
            assetPoolIdsWithQueryVintage.add("none")
        }
        return assetPoolIdsWithQueryVintage.toSet()
    }
}
