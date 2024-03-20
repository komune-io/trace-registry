package cccev.f2.evidence.type.api.service

import cccev.core.evidencetype.EvidenceTypeAggregateService
import cccev.core.evidencetype.command.EvidenceTypeCreateCommand
import cccev.core.evidencetype.command.EvidenceTypeCreatedEvent
import org.springframework.stereotype.Service

@Service
class EvidenceTypeF2AggregateService(
    private val evidenceTypeAggregateService: EvidenceTypeAggregateService
) {
    suspend fun create(command: EvidenceTypeCreateCommand): EvidenceTypeCreatedEvent {
        return evidenceTypeAggregateService.create(command)
    }
}
