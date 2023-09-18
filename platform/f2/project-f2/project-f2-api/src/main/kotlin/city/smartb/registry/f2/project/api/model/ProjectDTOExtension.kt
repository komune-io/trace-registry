package city.smartb.registry.f2.project.api.model

import city.smartb.registry.f2.project.domain.model.ProjectDTOBase
import city.smartb.registry.s2.project.domain.model.Project

fun Project.toDTO() = ProjectDTOBase(
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
    estimatedReductions = estimatedReductions,
    localization = localization,
    proponent = proponent,
    type = type,
    referenceYear = referenceYear,
    registrationDate = registrationDate,
    vintage = listOf(),
    slug = slug,
    vvb = vvb,
    assessor = assessor,
    location = location,
    creationDate = creationDate,
    lastModificationDate = lastModificationDate,
    activities = activities,
    sdgs = sdgs,
    certification = certification,
    assetPools = assetPools,
    isPrivate = isPrivate
)
