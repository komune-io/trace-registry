package city.smartb.registry.program.f2.project.api.service

import city.smartb.i2.spring.boot.auth.AuthenticationProvider
import city.smartb.registry.program.api.commons.auth.getAuthedUser
import city.smartb.registry.program.s2.project.api.ProjectAggregateService
import city.smartb.registry.program.s2.project.domain.command.ProjectUpdateCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectUpdatedEvent
import org.springframework.stereotype.Service

@Service
class ProjectF2AggregateService(
    private val projectAggregateService: ProjectAggregateService,
    private val projectPoliciesEnforcer: ProjectPoliciesEnforcer
) {
    suspend fun create(command: ProjectUpdateCommand): ProjectUpdatedEvent {
        val beneficiaryId = AuthenticationProvider.getAuthedUser().memberOf!!
        projectPoliciesEnforcer.checkCreate()
        return projectAggregateService.create(command)
    }

    suspend fun updateDetails(command: ProjectUpdateCommand): ProjectUpdatedEvent {
        projectPoliciesEnforcer.checkUpdate(command.id)
        return projectAggregateService.update(command)
    }

    suspend fun delete(command: ProjectUpdateCommand): ProjectUpdatedEvent {
        return projectAggregateService.delete(command)
    }

}
