//package cccev.test.s2.evidenceType.data
//
//import cccev.projection.api.entity.evidencetype.EvidenceTypeEntity
//import cccev.projection.api.entity.evidencetype.EvidenceTypeRepository
//import cccev.s2.evidence.type.domain.EvidenceTypeId
//import cccev.s2.evidence.type.domain.EvidenceTypeState
//import org.assertj.core.api.Assertions
//import s2.bdd.assertion.AssertionBdd
//import s2.bdd.repository.AssertionCrudEntity
//
//fun AssertionBdd.evidenceType(evidenceTypeRepository: EvidenceTypeRepository) = AssertionEvidenceType(evidenceTypeRepository)
//
//class AssertionEvidenceType(
//    override val repository: EvidenceTypeRepository
//): AssertionCrudEntity<EvidenceTypeEntity, EvidenceTypeId, AssertionEvidenceType.EvidenceTypeAssert>() {
//
//    override suspend fun assertThat(entity: EvidenceTypeEntity) = EvidenceTypeAssert(entity)
//
//    inner class EvidenceTypeAssert(
//        private val evidenceType: EvidenceTypeEntity
//    ) {
//        fun hasFields(
//            id: EvidenceTypeId = evidenceType.id,
//            status: EvidenceTypeState = evidenceType.status,
//            name: String = evidenceType.name,
//            description: String = evidenceType.description,
//            validityPeriodConstraint: Long? = evidenceType.validityPeriodConstraint,
//        ) = also {
//            Assertions.assertThat(evidenceType.id).isEqualTo(id)
//            Assertions.assertThat(evidenceType.status).isEqualTo(status)
//            Assertions.assertThat(evidenceType.name).isEqualTo(name)
//            Assertions.assertThat(evidenceType.description).isEqualTo(description)
//            Assertions.assertThat(evidenceType.validityPeriodConstraint).isEqualTo(validityPeriodConstraint)
//        }
//    }
//}
