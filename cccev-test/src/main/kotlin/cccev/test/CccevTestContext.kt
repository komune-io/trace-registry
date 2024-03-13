package cccev.test

import au.com.origin.snapshots.SnapshotVerifier
import cccev.core.certification.model.CertificationId
import cccev.core.certification.model.EvidenceId
import cccev.core.requirement.model.RequirementId
import cccev.s2.concept.domain.InformationConceptId
import cccev.s2.evidence.type.domain.EvidenceTypeId
import cccev.s2.evidence.type.domain.EvidenceTypeListId
import cccev.s2.framework.domain.FrameworkId
import cccev.s2.unit.domain.DataUnitId
import org.springframework.stereotype.Component
import s2.bdd.data.TestContext
import s2.bdd.data.TestContextKey

@Component
class CccevTestContext: TestContext() {

    val conceptIds = testEntities<TestContextKey, InformationConceptId>("InformationConcept")
    val frameworkIds = testEntities<TestContextKey, FrameworkId>("Framework")
    val evidenceIds = testEntities<TestContextKey, EvidenceId>("Evidence")
    val evidenceTypeIds = testEntities<TestContextKey, EvidenceTypeId>("EvidenceType")
    val evidenceTypeListIds = testEntities<TestContextKey, EvidenceTypeListId>("EvidenceTypeList")
    val certificationIds = testEntities<TestContextKey, CertificationId>("Request")
    val requirementIds = testEntities<TestContextKey, RequirementId>("Requirement")
    val unitIds = testEntities<TestContextKey, DataUnitId>("DataUnit")

    lateinit var snapshotVerifier: SnapshotVerifier

    final var fetched = FetchContext()
        private set

    override fun resetEnv() {
        fetched = FetchContext()
    }

    class FetchContext {
//        lateinit var certification: Certification
    }
}
