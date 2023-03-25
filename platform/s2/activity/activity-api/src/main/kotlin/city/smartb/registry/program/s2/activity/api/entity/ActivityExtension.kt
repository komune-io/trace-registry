package city.smartb.registry.program.s2.activity.api.entity

import city.smartb.registry.program.s2.activity.domain.command.ActivityUpdateCommand
import city.smartb.registry.program.s2.activity.domain.model.Activity
import city.smartb.registry.program.s2.activity.domain.model.ProjectRef
import city.smartb.registry.program.s2.activity.domain.model.RequirementRef

fun ActivityUpdateCommand.toEntity() = applyToEntity( ActivityEntity())

fun ActivityUpdateCommand.applyToEntity(entity: ActivityEntity): ActivityEntity = let {
    entity.id = this.id
    entity.name = this.requirement.name

    entity.description = this.requirement.description
    entity.status = this.status

    entity.creationDate = System.currentTimeMillis()
    entity.lastModificationDate = System.currentTimeMillis()
    entity
}


fun ActivityEntity.toActivity(): Activity = let { entity ->
    Activity(
        id = entity.id,
        project = ProjectRef(entity.id),
        requirement = RequirementRef(
            id = entity.id,
            name = entity.name,
            description = entity.description,
            hasQualifiedRelation = emptyList(),
            hasRequirement = emptyList()
        ),
        creationDate = entity.creationDate,
        lastModificationDate = entity.lastModificationDate,
        status = entity.status
    )
}

