package city.smartb.registry.program.s2.activity.api.entity.activity

import city.smartb.registry.program.s2.activity.domain.model.Activity

fun ActivityEntity.toActivity() = Activity(
    id = id,
    friendlyId = friendlyId,
    beneficiaryId = beneficiaryId,
    supervisorId = supervisorId,
    name = name,
    status = status,
)
