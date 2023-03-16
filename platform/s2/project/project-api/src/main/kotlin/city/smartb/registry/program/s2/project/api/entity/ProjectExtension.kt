package city.smartb.registry.program.s2.project.api.entity

import city.smartb.registry.program.s2.project.domain.automate.ProjectState
import city.smartb.registry.program.s2.project.domain.command.ProjectAbstractMsg
import city.smartb.registry.program.s2.project.domain.model.Project

fun ProjectEntity.toProject() = Project(
    id = this.id,
    status = status,
    name = this.name,
    country = this.country,
    creditingPeriodStartDate = this.creditingPeriodStartDate,
    creditingPeriodEndDate = this.creditingPeriodEndDate,
    description = this.description,
    dueDate = this.dueDate,
    estimatedReduction = this.estimatedReduction,
    localization = this.localization,
    proponentAccount = this.proponentAccount,
    proponent = this.proponent,
    type = this.type,
    referenceYear = this.referenceYear,
    registrationDate = this.registrationDate,
    vintage = this.vintage,
    slug = this.slug,
    creationDate = null,
    lastModificationDate = null
//    creationDate = this.createdDate!!.time,
//    lastModificationDate = this.lastModifiedDate!!.time
)
fun Project.toEntity() = ProjectEntity().let { entity ->
    entity.id = this.id
    entity.status = status
    entity.name = this.name
    entity.country = this.country
    entity.creditingPeriodStartDate = this.creditingPeriodStartDate
    entity.creditingPeriodEndDate = this.creditingPeriodEndDate
    entity.description = this.description
    entity.dueDate = this.dueDate
    entity.estimatedReduction = this.estimatedReduction
    entity.localization = this.localization
    entity.proponentAccount = this.proponentAccount
    entity.proponent = this.proponent
    entity.type = this.type
    entity.referenceYear = this.referenceYear
    entity.registrationDate = this.registrationDate
    entity.vintage = this.vintage
    entity.slug = this.slug
    entity
}

fun <T: ProjectAbstractMsg> T.applyCmd(msg: ProjectAbstractMsg): T = let { ele ->
    ele.name = msg.name
    ele.country = msg.country
    ele.creditingPeriodStartDate = msg.creditingPeriodStartDate
    ele.creditingPeriodEndDate = msg.creditingPeriodEndDate
    ele.description = msg.description
    ele.dueDate = msg.dueDate
    ele.estimatedReduction = msg.estimatedReduction
    ele.localization = msg.localization
    ele.proponentAccount = msg.proponentAccount
    ele.proponent = msg.proponent
    ele.type = msg.type
    ele.referenceYear = msg.referenceYear
    ele.registrationDate = msg.registrationDate
    ele.slug = msg.slug
    ele
}
