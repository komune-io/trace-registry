package city.smartb.registry.program.s2.project.api.entity.project

import city.smartb.registry.program.s2.project.domain.command.ProjectUpdateCommand
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
    projectType = this.projectType,
    publicId = this.publicId,
    referenceYear = this.referenceYear,
    registrationDate = this.registrationDate,
    vintage = this.vintage,
    slug = this.slug,
    creationDate = null,
    lastModificationDate = null
//    creationDate = this.createdDate!!.time,
//    lastModificationDate = this.lastModifiedDate!!.time
)

fun ProjectUpdateCommand.toProject() = ProjectEntity().applyCmd(this)

fun ProjectEntity.applyCmd(cmd: ProjectUpdateCommand): ProjectEntity = let { entity ->
    entity.id = cmd.id
    entity.status = cmd.status
    entity.name = cmd.name
    entity.country = cmd.country
    entity.creditingPeriodStartDate = cmd.creditingPeriodStartDate
    entity.creditingPeriodEndDate = cmd.creditingPeriodEndDate
    entity.description = cmd.description
    entity.dueDate = cmd.dueDate
    entity.estimatedReduction = cmd.estimatedReduction
    entity.localization = cmd.localization
    entity.proponentAccount = cmd.proponentAccount
    entity.proponent = cmd.proponent
    entity.projectType = cmd.projectType
    entity.publicId = cmd.publicId
    entity.referenceYear = cmd.referenceYear
    entity.registrationDate = cmd.registrationDate
    entity.vintage = cmd.vintage
    entity.slug = cmd.slug
    entity
}
