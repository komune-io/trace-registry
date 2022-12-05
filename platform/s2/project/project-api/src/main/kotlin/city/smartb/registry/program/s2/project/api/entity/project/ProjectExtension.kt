package city.smartb.registry.program.s2.project.api.entity.project

import city.smartb.registry.program.s2.project.domain.model.Project

fun ProjectEntity.toProject() = Project(
    id = id,
    friendlyId = friendlyId,
    beneficiaryId = beneficiaryId,
    supervisorId = supervisorId,
    name = name,
    status = status,
)
