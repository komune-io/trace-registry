package io.komune.registry.f2.dcs.api.service

import cccev.dsl.client.CCCEVClient
import cccev.f2.certification.command.CertificationFillValuesCommand
import f2.dsl.fnc.invokeWith
import io.komune.registry.f2.dcs.api.converter.DcsToCccevConverter
import io.komune.registry.f2.dcs.domain.command.DataCollectionStepDefineCommand
import io.komune.registry.f2.dcs.domain.command.DataCollectionStepDefinedEvent
import io.komune.registry.f2.dcs.domain.command.DataCollectionStepFillCommand
import io.komune.registry.f2.dcs.domain.command.DataCollectionStepFilledEvent
import io.komune.registry.f2.dcs.domain.model.DataCollectionStep
import kotlinx.coroutines.flow.collect
import kotlinx.coroutines.flow.flowOf
import org.springframework.http.codec.multipart.FilePart
import org.springframework.stereotype.Service

@Service
class DcsF2AggregateService(
    private val cccevClient: CCCEVClient
) {
    suspend fun define(command: DataCollectionStepDefineCommand): DataCollectionStepDefinedEvent {
        val dcs = DataCollectionStep(
            identifier = command.identifier,
            label = command.label,
            description = command.description,
            sections = command.sections,
            properties = command.properties,
        )
        val cccev = DcsToCccevConverter.convert(dcs)

        cccevClient.graphClient.save(flowOf(cccev)).collect()

        return DataCollectionStepDefinedEvent(dcs.identifier)
    }

    // TODO save evidences when reimplemented in cccev
    suspend fun fill(
        command: DataCollectionStepFillCommand, evidences: Map<String, FilePart>
    ): DataCollectionStepFilledEvent {
        CertificationFillValuesCommand(
            id = command.certificationId,
            rootRequirementCertificationId = null,
            values = command.values
        ).invokeWith(cccevClient.certificationClient.certificationFillValues())

        return DataCollectionStepFilledEvent(
            identifier = command.identifier,
            certificationId = command.certificationId
        )
    }
}
