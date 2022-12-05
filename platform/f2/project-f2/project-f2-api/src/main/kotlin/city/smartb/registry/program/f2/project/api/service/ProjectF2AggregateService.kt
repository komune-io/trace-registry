package city.smartb.registry.program.f2.project.api.service

import city.smartb.i2.spring.boot.auth.AuthenticationProvider
import city.smartb.registry.program.f2.project.api.service.ProjectPoliciesEnforcer
import city.smartb.registry.program.api.commons.auth.getAuthedUser
import city.smartb.registry.program.f2.project.domain.command.ProjectCreateCommandDTOBase
import city.smartb.registry.program.f2.project.domain.command.ProjectDeleteCommandDTOBase
import city.smartb.registry.program.f2.project.domain.command.ProjectUpdateDetailsCommandDTOBase
import city.smartb.registry.program.s2.project.api.ProjectAggregateService
import city.smartb.registry.program.s2.project.domain.command.ProjectCreateCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectCreatedEvent
import city.smartb.registry.program.s2.project.domain.command.ProjectDeleteCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectDeletedEvent
import city.smartb.registry.program.s2.project.domain.command.ProjectUpdateDetailsCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectUpdatedDetailsEvent
import org.springframework.stereotype.Service

@Service
class ProjectF2AggregateService(
    private val projectAggregateService: ProjectAggregateService,
    private val projectPoliciesEnforcer: ProjectPoliciesEnforcer
) {
    suspend fun create(command: ProjectCreateCommandDTOBase): ProjectCreatedEvent {
        val beneficiaryId = AuthenticationProvider.getAuthedUser().memberOf!!
        projectPoliciesEnforcer.checkCreate()
        return ProjectCreateCommand(
            name = command.name,
            beneficiaryId = beneficiaryId,
            targetRnc = command.targetRnc,
            address = command.address,
            supervisorId = command.supervisorId,
            createdBy = AuthenticationProvider.getAuthedUser().id
        ).let { projectAggregateService.create(it) }
    }

    suspend fun updateDetails(command: ProjectUpdateDetailsCommandDTOBase): ProjectUpdatedDetailsEvent {
        projectPoliciesEnforcer.checkUpdate(command.id)
        return ProjectUpdateDetailsCommand(
            id = command.id,
            name = command.name,
            targetRnc = command.targetRnc,
            address = command.address,
            supervisorId = command.supervisorId
        ).let { projectAggregateService.updateDetails(it) }
    }

    suspend fun delete(command: ProjectDeleteCommandDTOBase): ProjectDeletedEvent {
        return ProjectDeleteCommand(
            id = command.id,
            deletedBy = AuthenticationProvider.getAuthedUser().id
        ).let { projectAggregateService.delete(it) }
    }

}
