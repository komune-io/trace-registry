package io.komune.registry.control.f2.certification.api.service

import io.komune.registry.api.config.RgPolicyEnforcer
import io.komune.registry.control.core.cccev.certification.CertificationState
import io.komune.registry.control.f2.certification.domain.CertificationPolicies
import io.komune.registry.control.f2.certification.domain.model.CertificationAccessData
import io.komune.registry.control.f2.certification.domain.query.CertificationPageQuery
import io.komune.registry.s2.commons.model.CertificationId
import org.springframework.stereotype.Service

@Service
class CertificationPoliciesEnforcer(
    private val certificationF2FinderService: CertificationF2FinderService
): RgPolicyEnforcer() {

    suspend fun checkFill(id: CertificationId) = checkAuthed("fill certification") { authedUser ->
        val certification = certificationF2FinderService.getRefOrNull(id, null)
        CertificationPolicies.canFill(authedUser, certification)
    }

    suspend fun checkAudit() = checkAuthed("audit certification") { authedUser ->
        CertificationPolicies.canAudit(authedUser)
    }

    suspend fun <T: CertificationAccessData> enforceCertification(certification: T) = enforceConfigAuthed { authedUser ->
        certification.takeIf {
            when {
                authedUser == null -> certification.status == CertificationState.VALIDATED
                CertificationPolicies.owns(authedUser, certification) -> true
                CertificationPolicies.canAudit(authedUser) -> certification.status != CertificationState.PENDING
                else -> certification.status == CertificationState.VALIDATED
            }
        }
    }

    suspend fun enforceQuery(query: CertificationPageQuery) = enforceConfigAuthed { authedUser ->
        query.copy(
            creatorOrganizationId = query.creatorOrganizationId
                .takeIf { authedUser == null || CertificationPolicies.canAudit(authedUser) }
                ?: authedUser?.memberOf
        )
    }
}
