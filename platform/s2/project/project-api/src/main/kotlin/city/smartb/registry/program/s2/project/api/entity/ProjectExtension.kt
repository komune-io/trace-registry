package city.smartb.registry.program.s2.project.api.entity

import city.smartb.registry.program.infra.redis.toGeoLocation
import city.smartb.registry.program.infra.redis.toRedisGeoLocation
import city.smartb.registry.program.s2.project.domain.command.ProjectAbstractMsg
import city.smartb.registry.program.s2.project.domain.model.Project

fun ProjectEntity.toProject() = Project(
    id = id,
    status = status,
    name = name,
    country = country,
    creditingPeriodStartDate = creditingPeriodStartDate,
    creditingPeriodEndDate = creditingPeriodEndDate,
    description = description,
    dueDate = dueDate,
    estimatedReduction = estimatedReduction,
    localization = localization,
    proponent = proponent,
    type = type,
    referenceYear = referenceYear,
    registrationDate = registrationDate,
    vintage = vintage,
    slug = slug,
    vvb = vvb,
    assessor = assessor,
    location = location?.toGeoLocation(),
    creationDate = null,
    lastModificationDate = null,
    activities = activities
//    creationDate = createdDate!!.time,
//    lastModificationDate = lastModifiedDate!!.time
)
fun Project.toEntity() = ProjectEntity().let { entity ->
    entity.id = id
    entity.status = status
    entity.name = name
    entity.country = country
    entity.creditingPeriodStartDate = creditingPeriodStartDate
    entity.creditingPeriodEndDate = creditingPeriodEndDate
    entity.description = description
    entity.dueDate = dueDate
    entity.estimatedReduction = estimatedReduction
    entity.localization = localization
    entity.proponent = proponent
    entity.type = type
    entity.referenceYear = referenceYear
    entity.registrationDate = registrationDate
    entity.vintage = vintage
    entity.slug = slug
    entity.vvb = vvb
    entity.assessor = assessor
    entity.location = location?.toRedisGeoLocation(id)
    entity.activities = activities
    entity
}

fun <T: ProjectAbstractMsg> T.applyCmd(msg: ProjectAbstractMsg): T = apply {
    name = msg.name
    country = msg.country
    creditingPeriodStartDate = msg.creditingPeriodStartDate
    creditingPeriodEndDate = msg.creditingPeriodEndDate
    description = msg.description
    dueDate = msg.dueDate
    estimatedReduction = msg.estimatedReduction
    localization = msg.localization
    proponent = msg.proponent
    type = msg.type
    referenceYear = msg.referenceYear
    registrationDate = msg.registrationDate
    slug = msg.slug
    vvb = msg.vvb
    assessor = msg.assessor
    location = msg.location
}
