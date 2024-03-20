package cccev.f2.evidence.type.domain

import cccev.f2.evidence.type.domain.command.EvidenceTypeCreateFunction

interface EvidenceTypeCommandApi {
    fun evidenceTypeCreate(): EvidenceTypeCreateFunction
}
