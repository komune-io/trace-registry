package cccev.f2.certification.domain

import cccev.f2.certification.domain.command.CertificationAddRequirementsFunction
import cccev.f2.certification.domain.command.CertificationCreateFunction
import cccev.f2.certification.domain.command.CertificationFillValuesFunction
import cccev.f2.certification.domain.command.CertificationRemoveRequirementsFunction

interface CertificationCommandApi {
    /** Create a request */
    fun certificationCreate(): CertificationCreateFunction

    /** Add requirements to a request */
    fun certificationAddRequirements(): CertificationAddRequirementsFunction

    /** Remove requirements from a request */
    fun certificationRemoveRequirements(): CertificationRemoveRequirementsFunction

    /** Add values to a request */
    fun certificationFillValues(): CertificationFillValuesFunction

    /** Remove an evidence from a request */
//    fun certificationRemoveEvidence(): CertificationRemoveEvidenceFunction
}
