package city.smartb.registry.program.f2.project.api

import city.smartb.registry.program.f2.project.api.service.ProjectF2FinderService
import city.smartb.registry.program.f2.project.api.service.ProjectPoliciesEnforcer
import city.smartb.registry.program.f2.project.domain.ProjectCommandApi
import city.smartb.registry.program.f2.project.domain.ProjectQueryApi
import city.smartb.registry.program.f2.project.domain.command.ProjectCreateFunction
import city.smartb.registry.program.f2.project.domain.command.ProjectDeleteFunction
import city.smartb.registry.program.f2.project.domain.command.ProjectUpdateFunction
import city.smartb.registry.program.f2.project.domain.query.ProjectGetFunction
import city.smartb.registry.program.f2.project.domain.query.ProjectGetResult
import city.smartb.registry.program.f2.project.domain.query.ProjectPageFunction
import city.smartb.registry.program.f2.project.domain.query.ProjectPageResult
import city.smartb.registry.program.s2.project.api.ProjectAggregateService
import city.smartb.registry.program.s2.project.domain.automate.ProjectState
import f2.dsl.cqrs.filter.ExactMatch
import f2.dsl.cqrs.filter.StringMatch
import f2.dsl.cqrs.filter.StringMatchCondition
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.fnc.f2Function
import jakarta.annotation.security.PermitAll
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.bind.annotation.RequestMapping
import s2.spring.utils.logger.Logger

@RequestMapping
@Configuration
class ProjectEndpoint(
    private val projectF2FinderService: ProjectF2FinderService,
    private val projectAggregateService: ProjectAggregateService,
    private val projectPoliciesEnforcer: ProjectPoliciesEnforcer
): ProjectQueryApi, ProjectCommandApi {

    private val logger by Logger()

    @PermitAll
    @Bean
    override fun projectGet(): ProjectGetFunction = f2Function { query ->
        logger.info("projectGet: $query")
        projectF2FinderService.getOrNull(query.id).let(::ProjectGetResult)
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
            status = query.status?.let { ExactMatch(ProjectState.valueOf(it)) },
            type = query.type?.let(::ExactMatch),
            vintage = query.vintage?.ifEmpty { null }?.let { StringMatch(it, StringMatchCondition.CONTAINS) },
            origin = query.origin?.ifEmpty { null }?.let { StringMatch(it, StringMatchCondition.CONTAINS) },
            offset = pagination
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

    override fun projectDelete(): ProjectDeleteFunction = f2Function { command ->
        projectPoliciesEnforcer.checkDelete(command.id)
        projectAggregateService.delete(command)
    }
}
