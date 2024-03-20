package cccev.f2.evidence.type.domain

import cccev.f2.evidence.type.domain.query.EvidenceTypeGetFunction

interface EvidenceTypeQueryApi {
    fun evidenceTypeGet(): EvidenceTypeGetFunction
}
