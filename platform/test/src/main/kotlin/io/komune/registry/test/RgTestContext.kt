package io.komune.registry.test

import io.komune.registry.s2.commons.model.CertificationId
import io.komune.registry.s2.commons.model.DataUnitId
import io.komune.registry.s2.commons.model.EvidenceId
import io.komune.registry.s2.commons.model.EvidenceTypeId
import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.RequirementCertificationId
import io.komune.registry.s2.commons.model.RequirementId
import io.komune.registry.s2.commons.model.SupportedValueId
import org.springframework.stereotype.Component
import s2.bdd.data.TestContext
import s2.bdd.data.TestContextKey

typealias InformationConceptKey = TestContextKey
typealias EvidenceTypeKey = TestContextKey
typealias RequirementKey = TestContextKey
typealias DataUnitKey = TestContextKey

typealias EvidenceKey = TestContextKey
typealias CertificationKey = TestContextKey
typealias SupportedValueKey = TestContextKey

@Component
class RgTestContext: TestContext() {

    val cccev = Cccev()

    inner class Cccev {
        // structure
        val conceptIds = testEntities<InformationConceptKey, InformationConceptId>("InformationConcept")
        val evidenceTypeIds = testEntities<EvidenceTypeKey, EvidenceTypeId>("EvidenceType")
        val requirementIds = testEntities<RequirementKey, RequirementId>("Requirement")
        val unitIds = testEntities<DataUnitKey, DataUnitId>("DataUnit")

        // certification
        val evidenceIds = testEntities<EvidenceKey, EvidenceId>("Evidence")
        val certificationIds = testEntities<CertificationKey, CertificationId>("Request")
        val requirementCertificationIds =
            testEntities<Pair<CertificationKey, RequirementKey>, RequirementCertificationId>("RequirementCertification")
        val supportedValueIds = testEntities<SupportedValueKey, SupportedValueId>("SupportedValue")
    }
}
