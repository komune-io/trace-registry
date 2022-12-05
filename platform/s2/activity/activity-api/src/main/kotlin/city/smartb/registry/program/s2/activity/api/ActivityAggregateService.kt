package city.smartb.registry.program.s2.activity.api

import city.smartb.registry.program.s2.activity.api.config.ActivityAutomateExecutor
import city.smartb.registry.program.s2.activity.api.entity.ActivityEntity
import city.smartb.registry.program.s2.activity.domain.ActivityAggregate
import city.smartb.registry.program.s2.activity.domain.command.ActivityUpdateCommand
import city.smartb.registry.program.s2.activity.domain.command.ActivityUpdatedDetailsEvent
import org.springframework.stereotype.Service

@Service
class ActivityAggregateService(
	private val automate: ActivityAutomateExecutor,
): ActivityAggregate {

	override suspend fun create(command: ActivityUpdateCommand): ActivityUpdatedDetailsEvent
	= automate.createWithEvent(command) {
		command.toEntity() to ActivityUpdatedDetailsEvent(command.id)
	}

	override suspend fun modify(command: ActivityUpdateCommand): ActivityUpdatedDetailsEvent
	= automate.doTransition(command) {
		command.applyToEntity(this) to ActivityUpdatedDetailsEvent(command.id)
	}
}


fun ActivityUpdateCommand.toEntity() = applyToEntity( ActivityEntity())
fun ActivityUpdateCommand.applyToEntity(entity: ActivityEntity): ActivityEntity = let {
	entity.id = this.id
	entity.name = this.name

	entity.id = this.name
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
