package city.smartb.registry.program.s2.activity.api.entity

import city.smartb.registry.program.s2.activity.domain.command.ActivityUpdateCommand
import city.smartb.registry.program.s2.activity.domain.model.Activity

fun ActivityUpdateCommand.toEntity() = applyToEntity( ActivityEntity())

fun ActivityUpdateCommand.applyToEntity(entity: ActivityEntity): ActivityEntity = let {
    entity.id = this.id
    entity.name = this.name

    entity.description = this.description
    entity.startDate = this.startDate
    entity.endDate = this.endDate
    entity.estimatedEndDate = this.estimatedEndDate
    entity.executor = this.executor
    entity.expectedValue = this.expectedValue
    entity.expectedValueUnit = this.expectedValueUnit
    entity.fee = this.fee
    entity.isPublic = this.isPublic
    entity.issuable = this.issuable
    entity.project = this.project
    entity.protocol = this.protocol
    entity.slug = this.slug
    entity.status = this.status
    entity.subActivityOf = this.subActivityOf
    entity.validator = this.validator
    entity.validationDate = this.validationDate
    entity.verifiable = this.verifiable
    entity.verifier = this.verifier
    entity.verificationDate = this.verificationDate
    entity.creator = this.creator
    entity.creationDate = this.creationDate
    entity.lastModificationDate = this.lastModificationDate
    entity
}


fun ActivityEntity.toActivity(): Activity = let { entity ->
    Activity(
        id = entity.id,
        name = entity.name,

        description = entity.description,
        startDate = entity.startDate,
        endDate = entity.endDate,
        estimatedEndDate = entity.estimatedEndDate,
        executor = entity.executor,
        expectedValue = entity.expectedValue,
        expectedValueUnit = entity.expectedValueUnit,
        fee = entity.fee,
        isPublic = entity.isPublic,
        issuable = entity.issuable,
        project = entity.project,
        protocol = entity.protocol,
        slug = entity.slug,
        status = entity.status,
        subActivityOf = entity.subActivityOf,
        validator = entity.validator,
        validationDate = entity.validationDate,
        verifiable = entity.verifiable,
        verifier = entity.verifier,
        verificationDate = entity.verificationDate,
        creator = entity.creator,
        creationDate = entity.creationDate,
        lastModificationDate = entity.lastModificationDate,
    )
}

