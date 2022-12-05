package city.smartb.registry.program.f2.task.api

import city.smartb.i2.spring.boot.auth.AuthenticationProvider
import city.smartb.registry.program.api.commons.auth.getAuthedUser
import city.smartb.registry.program.api.commons.model.CollectionMatch
import city.smartb.registry.program.api.commons.model.toSort
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.fnc.f2Function
import city.smartb.registry.program.f2.task.api.service.TaskF2AggregateService
import city.smartb.registry.program.f2.task.api.service.TaskF2FinderService
import city.smartb.registry.program.f2.task.api.service.TaskPoliciesEnforcer
import city.smartb.registry.program.f2.task.domain.TaskCommandApi
import city.smartb.registry.program.f2.task.domain.TaskQueryApi
import city.smartb.registry.program.f2.task.domain.command.TaskAssignFunction
import city.smartb.registry.program.f2.task.domain.command.TaskPrioritizeFunction
import city.smartb.registry.program.f2.task.domain.command.TaskSelfAssignFunction
import city.smartb.registry.program.f2.task.domain.command.TaskUpdateCommentFunction
import city.smartb.registry.program.f2.task.domain.command.TaskUpdateStatusFunction
import city.smartb.registry.program.f2.task.domain.query.TaskGetFunction
import city.smartb.registry.program.f2.task.domain.query.TaskGetQueryResult
import city.smartb.registry.program.f2.task.domain.query.TaskPageFunction
import city.smartb.registry.program.f2.task.domain.query.TaskPageResult
import city.smartb.registry.program.s2.task.domain.model.TaskSortable
import city.smartb.registry.program.s2.task.domain.model.orDefault
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import s2.spring.utils.logger.Logger

@Configuration
class TaskEndpoint(
    private val taskF2AggregateService: TaskF2AggregateService,
    private val taskF2FinderService: TaskF2FinderService,
    private val taskPoliciesEnforcer: TaskPoliciesEnforcer
): TaskCommandApi, TaskQueryApi {
    private val logger by Logger()

    @Bean
    override fun taskAssign(): TaskAssignFunction = f2Function { cmd ->
        logger.info("Assign task: $cmd")
        taskPoliciesEnforcer.checkAssignTo(cmd.supervisor)
        taskF2AggregateService.assign(cmd)
    }

    @Bean
    override fun taskSelfAssign(): TaskSelfAssignFunction = f2Function { cmd ->
        val userId = AuthenticationProvider.getAuthedUser().id
        logger.info("Self assign task for user [$userId] and types [${cmd.types}]")
        taskPoliciesEnforcer.checkSelfAssign()
        taskF2AggregateService.selfAssign(cmd, userId)
    }

    @Bean
    override fun taskPrioritize(): TaskPrioritizeFunction = f2Function { cmd ->
        logger.info("Prioritize task: ${cmd.id}")
        taskPoliciesEnforcer.checkPrioritize()
        taskF2AggregateService.prioritize(cmd)
    }

    @Bean
    override fun taskUpdateStatus(): TaskUpdateStatusFunction = f2Function { cmd ->
        logger.info("taskUpdateStatus: $cmd")
        taskPoliciesEnforcer.checkUpdateStatus(cmd.id, cmd.status)
        taskF2AggregateService.updateStatus(cmd)
    }

    @Bean
    override fun taskUpdateComment(): TaskUpdateCommentFunction = f2Function { cmd ->
        logger.info("taskUpdateComment: $cmd")
        taskPoliciesEnforcer.checkUpdateComment(cmd.id)
        taskF2AggregateService.updateComment(cmd)
    }

    @Bean
    override fun taskPage(): TaskPageFunction = f2Function { query ->
        logger.info("Page tasks: $query by user [${AuthenticationProvider.getAuthedUser().id}]")
        taskPoliciesEnforcer.checkHasFeature()
        taskF2FinderService.page(
            id = query.ids?.let(::CollectionMatch),
            orderBy = query.orderBy
                ?.map { it.toSort<TaskSortable>() }
                .orDefault(),
            offset = OffsetPagination(
                offset = query.page * query.size,
                limit = query.size
            )
        ).let {
            TaskPageResult(
                items = it.items,
                total = it.total
            )
        }
    }

    @Bean
    override fun taskGet(): TaskGetFunction = f2Function { query ->
        logger.info("Get task: ${query.id}")
        taskPoliciesEnforcer.checkHasFeature()
        taskF2FinderService.getOrNull(query.id).let(::TaskGetQueryResult)
    }
}
