package io.komune.registry.s2.project.api.entity

import f2.dsl.cqrs.error.asException
import io.komune.registry.infra.redis.toGeoLocation
import io.komune.registry.s2.project.domain.command.ProjectAbstractMsg
import io.komune.registry.s2.project.domain.error.IllegalSdgError
import io.komune.registry.s2.project.domain.model.OrganizationRef
import io.komune.registry.s2.project.domain.model.Project

fun ProjectEntity.toProject() = Project(
    id = id,
    identifier = identifier,
    status = status,
    name = name,
    country = country,
    indicator = indicator,
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
    slug = slug,
    vvb = vvb?.toModel(),
    assessor = assessor?.toModel(),
    location = location?.toGeoLocation(),
    creationDate = createdDate,
    lastModificationDate = lastModifiedDate,
    activities = activities,
    sdgs = sdgs,
    certificationId = certificationId,
    assetPools = assetPools.toList(),
    isPrivate = privacy
)

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
