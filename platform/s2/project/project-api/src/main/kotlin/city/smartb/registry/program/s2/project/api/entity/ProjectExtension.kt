package city.smartb.registry.program.s2.project.api.entity

import city.smartb.registry.program.infra.redis.toGeoLocation
import city.smartb.registry.program.infra.redis.toRedisGeoLocation
import city.smartb.registry.program.s2.project.domain.command.ProjectAbstractMsg
import city.smartb.registry.program.s2.project.domain.error.IllegalSdgError
import city.smartb.registry.program.s2.project.domain.model.OrganizationRef
import city.smartb.registry.program.s2.project.domain.model.Project
import f2.dsl.cqrs.error.asException

fun ProjectEntity.toProject() = Project(
    id = id,
    identifier = identifier,
    status = status,
    name = name,
    country = country,
    creditingPeriodStartDate = creditingPeriodStartDate,
    creditingPeriodEndDate = creditingPeriodEndDate,
    description = description,
    dueDate = dueDate,
    estimatedReductions = estimatedReduction,
    localization = localization,
    proponent = proponent?.toModel(),
    type = type,
    referenceYear = referenceYear,
    registrationDate = registrationDate,
    vintage = vintage,
    slug = slug,
    vvb = vvb?.toModel(),
    assessor = assessor?.toModel(),
    location = location?.toGeoLocation(),
    creationDate = null,
    lastModificationDate = null,
    activities = activities,
    sdgs = sdgs,
    request = request
//    creationDate = createdDate!!.time,
//    lastModificationDate = lastModifiedDate!!.time
)
fun Project.toEntity() = ProjectEntity().let { entity ->
    entity.id = id
    entity.identifier = identifier
    entity.status = status
    entity.name = name
    entity.country = country
    entity.creditingPeriodStartDate = creditingPeriodStartDate
    entity.creditingPeriodEndDate = creditingPeriodEndDate
    entity.description = description
    entity.dueDate = dueDate
    entity.estimatedReduction = estimatedReductions
    entity.localization = localization
    entity.proponent = proponent?.toEntity()
    entity.type = type
    entity.referenceYear = referenceYear
    entity.registrationDate = registrationDate
    entity.vintage = vintage
    entity.slug = slug
    entity.vvb = vvb?.toEntity()
    entity.assessor = assessor?.toEntity()
    entity.location = location?.toRedisGeoLocation(id)
    entity.activities = activities
    entity.sdgs = sdgs?.sorted()
    entity
}

fun <T: ProjectAbstractMsg> T.applyCmd(msg: ProjectAbstractMsg): T = apply {
    msg.sdgs?.forEach { sdg ->
        if( sdg > 15 ) {
            throw IllegalSdgError(sdg).asException()
        }
    }
    name = msg.name
    identifier = msg.identifier
    country = msg.country
    subContinent = msg.subContinent
    creditingPeriodStartDate = msg.creditingPeriodStartDate
    creditingPeriodEndDate = msg.creditingPeriodEndDate
    description = msg.description
    dueDate = msg.dueDate
    estimatedReduction = msg.estimatedReduction
    localization = msg.localization
    proponent = msg.proponent
    vintage = msg.vintage
    type = msg.type
    referenceYear = msg.referenceYear
    registrationDate = msg.registrationDate
    slug = msg.slug
    vvb = msg.vvb
    assessor = msg.assessor
    location = msg.location
    sdgs = msg.sdgs
    activities = msg.activities
}

fun OrganizationRefEntity.toModel() = OrganizationRef(
    id = id,
    name = name,
)

fun OrganizationRef.toEntity() = OrganizationRefEntity(
    id = id,
    name = name,
)
