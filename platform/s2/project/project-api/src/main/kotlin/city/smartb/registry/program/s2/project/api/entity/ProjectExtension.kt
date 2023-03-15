package city.smartb.registry.program.s2.project.api.entity

import city.smartb.registry.program.s2.project.domain.command.ProjectAbstractMsg
import city.smartb.registry.program.s2.project.domain.command.ProjectCreateCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectUpdateCommand
import city.smartb.registry.program.s2.project.domain.model.Project
import java.util.UUID

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

fun ProjectCreateCommand.toProject() = ProjectEntity().apply { id = UUID.randomUUID().toString() }.applyCmd(this)
fun ProjectUpdateCommand.toProject() = ProjectEntity().apply { id = this@toProject.id }.applyCmd(this)

fun ProjectEntity.applyCmd(cmd: ProjectAbstractMsg): ProjectEntity = let { entity ->
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
    entity.referenceYear = cmd.referenceYear
    entity.registrationDate = cmd.registrationDate
    entity.slug = cmd.slug
    entity
}

fun <T: ProjectAbstractMsg> T.applyCmd(msg: ProjectAbstractMsg): T = let { entity ->
    entity.status = msg.status
    entity.name = msg.name
    entity.country = msg.country
    entity.creditingPeriodStartDate = msg.creditingPeriodStartDate
    entity.creditingPeriodEndDate = msg.creditingPeriodEndDate
    entity.description = msg.description
    entity.dueDate = msg.dueDate
    entity.estimatedReduction = msg.estimatedReduction
    entity.localization = msg.localization
    entity.proponentAccount = msg.proponentAccount
    entity.proponent = msg.proponent
    entity.projectType = msg.projectType
    entity.referenceYear = msg.referenceYear
    entity.registrationDate = msg.registrationDate
    entity.slug = msg.slug
    entity
}
