package io.komune.registry.core.cccev.certification.model

import io.komune.fs.s2.file.domain.model.FilePath
import io.komune.registry.s2.commons.model.CertificationId
import io.komune.registry.s2.commons.model.EvidenceTypeId

object CertificationFsPath {
    const val OBJECT_TYPE = "certification"
    const val EVIDENCE_TYPE = "evidence_type"

    fun pathEvidenceType(certificationId: CertificationId, evidenceTypeId: EvidenceTypeId) = FilePath(
        objectType = OBJECT_TYPE,
        objectId = certificationId,
        directory = "${EVIDENCE_TYPE}_evidenceTypeId",
        name = ""
    )
}
