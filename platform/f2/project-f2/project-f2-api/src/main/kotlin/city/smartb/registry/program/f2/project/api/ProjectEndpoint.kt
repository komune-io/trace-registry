package city.smartb.registry.program.f2.project.api

import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.fnc.f2Function
import city.smartb.registry.program.f2.project.api.service.ProjectF2FinderService
import city.smartb.registry.program.f2.project.api.service.ProjectPoliciesEnforcer
import city.smartb.registry.program.f2.project.domain.ProjectCommandApi
import city.smartb.registry.program.f2.project.domain.ProjectQueryApi
import city.smartb.registry.program.f2.project.domain.command.ProjectCreateFunction
import city.smartb.registry.program.f2.project.domain.command.ProjectUpdateFunction
import city.smartb.registry.program.f2.project.domain.query.ProjectGetFunction
import city.smartb.registry.program.f2.project.domain.query.ProjectGetResult
import city.smartb.registry.program.f2.project.domain.query.ProjectPageFunction
import city.smartb.registry.program.s2.project.api.ProjectAggregateService
import javax.annotation.security.PermitAll
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import s2.spring.utils.logger.Logger

@RestController
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

        projectF2FinderService.page(
            offset = OffsetPagination(
                offset = query.page * query.size,
                limit = query.size
            )
        )
    }

    @PermitAll
    @Bean
    override fun projectCreate(): ProjectCreateFunction = f2Function { command ->
        logger.info("projectCreate: $command")
//        projectPoliciesEnforcer.checkCreate()
        projectAggregateService.create(command)
    }

    @PermitAll
    @Bean
    override fun projectUpdate(): ProjectUpdateFunction = f2Function { command ->
        logger.info("projectUpdateDetails: $command")
//        projectPoliciesEnforcer.checkUpdate(command.id)
        projectAggregateService.update(command)
    }

}
