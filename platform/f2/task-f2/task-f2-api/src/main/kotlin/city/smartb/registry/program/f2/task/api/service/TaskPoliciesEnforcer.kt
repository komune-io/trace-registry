package city.smartb.registry.program.f2.task.api.service

import city.smartb.registry.program.api.commons.auth.PolicyEnforcer
import city.smartb.registry.program.api.commons.auth.Roles
import city.smartb.registry.program.api.commons.auth.UserId
import city.smartb.registry.program.api.commons.auth.hasRole
import city.smartb.registry.program.f2.task.domain.model.TaskStatusDTOBase
import city.smartb.registry.program.f2.task.domain.policy.TaskPolicies
import city.smartb.registry.program.s2.task.domain.model.TaskId
import org.springframework.stereotype.Service

@Service
class TaskPoliciesEnforcer(
    private val taskF2FinderService: TaskF2FinderService,
//    private val userFinderService: UserFinderService
): PolicyEnforcer() {
    suspend fun checkHasFeature() = check("access the tasks") { authedUser ->
        TaskPolicies.hasFeature(authedUser)
    }

    suspend fun checkUpdateStatus(taskId: TaskId, status: TaskStatusDTOBase) = check(
        "update the status the task [${taskId}] to [${status.value}]"
    ) { authedUser ->
        val task = taskF2FinderService.get(taskId)
        TaskPolicies.canUpdateStatusTo(authedUser, task, status)
    }

    suspend fun checkUpdateComment(taskId: TaskId) = check("update the comment of the task [$taskId]") { authedUser ->
        val task = taskF2FinderService.get(taskId)
        TaskPolicies.canUpdateComment(authedUser, task)
    }

    suspend fun checkPrioritize() = check("prioritize a task") { authedUser ->
        TaskPolicies.canPrioritize(authedUser)
    }

    suspend fun checkSelfAssign() = check("self assign a task") { authedUser ->
        TaskPolicies.canSelfAssign(authedUser)
    }

    suspend fun checkAssignTo(userId: UserId) = check("assign a task to user [${userId}]") { authedUser ->
        TODO()
//        val user = userFinderService.get(userId).toRef()
//        TaskPolicies.canAssignTo(authedUser, user)
    }

    suspend fun enforceSupervisorFilter(wantedSupervisorId: UserId?) = enforce { authedUser ->
        when {
            authedUser.hasRole(Roles.ADMIN) -> wantedSupervisorId
            else -> authedUser.id
        }
    }
}
