package city.smartb.registry.program.f2.project.api

import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.fnc.f2Function
import city.smartb.registry.program.f2.project.api.service.ProjectF2AggregateService
import city.smartb.registry.program.f2.project.api.service.ProjectF2FinderService
import city.smartb.registry.program.f2.project.api.service.ProjectPoliciesEnforcer
import city.smartb.registry.program.f2.project.domain.ProjectCommandApi
import city.smartb.registry.program.f2.project.domain.ProjectQueryApi
import city.smartb.registry.program.f2.project.domain.command.ProjectCreateFunction
import city.smartb.registry.program.f2.project.domain.command.ProjectDeleteFunction
import city.smartb.registry.program.f2.project.domain.command.ProjectUpdateDetailsFunction
import city.smartb.registry.program.f2.project.domain.query.ProjectGetFunction
import city.smartb.registry.program.f2.project.domain.query.ProjectGetResult
import city.smartb.registry.program.f2.project.domain.query.ProjectPageFunction
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import s2.spring.utils.logger.Logger

/**
 * TODO
 * @d2 service
 */
@RestController
@RequestMapping
@Configuration
class ProjectEndpoint(
    private val projectF2FinderService: ProjectF2FinderService,
    private val projectF2AggregateService: ProjectF2AggregateService,
    private val projectPoliciesEnforcer: ProjectPoliciesEnforcer
): ProjectQueryApi, ProjectCommandApi {

    private val logger by Logger()

    @Bean
    override fun projectGet(): ProjectGetFunction = f2Function { query ->
        logger.info("projectGet: $query")
        projectF2FinderService.getOrNull(query.id).let(::ProjectGetResult)
    }

    @Bean
    override fun projectPage(): ProjectPageFunction = f2Function { query ->
        logger.info("projectPage: $query")
        projectPoliciesEnforcer.checkList()

        projectPoliciesEnforcer.enforceFilters(query).let { enforcedQuery ->
            projectF2FinderService.page(
                offset = OffsetPagination(
                    offset = enforcedQuery.page * enforcedQuery.size,
                    limit = enforcedQuery.size
                )
            )
        }
    }

    @Bean
    override fun projectCreate(): ProjectCreateFunction = f2Function { command ->
        logger.info("projectCreate: $command")
        projectPoliciesEnforcer.checkCreate()
        projectF2AggregateService.create(command)
    }


    @Bean
    override fun projectUpdateDetails(): ProjectUpdateDetailsFunction = f2Function { command ->
        logger.info("projectUpdateDetails: $command")
        projectPoliciesEnforcer.checkUpdate(command.id)
        projectF2AggregateService.updateDetails(command)
    }

    @Bean
    override fun projectDelete(): ProjectDeleteFunction = f2Function { command ->
        logger.info("projectDelete: $command")
        projectPoliciesEnforcer.checkDelete(command.id)
        projectF2AggregateService.delete(command)
    }

}
