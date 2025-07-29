package io.komune.registry.test.control.core.cccev.evidencetype.data

import io.komune.registry.control.core.cccev.evidencetype.entity.EvidenceType
import io.komune.registry.control.core.cccev.evidencetype.entity.EvidenceTypeRepository
import io.komune.registry.s2.commons.model.EvidenceTypeId
import io.komune.registry.s2.commons.model.InformationConceptId
import org.assertj.core.api.Assertions
import s2.bdd.assertion.AssertionBdd
import s2.bdd.repository.AssertionApiEntity

fun AssertionBdd.evidenceType(repository: EvidenceTypeRepository) = AssertionEvidenceType(repository)

class AssertionEvidenceType(
    private val repository: EvidenceTypeRepository
): AssertionApiEntity<EvidenceType, EvidenceTypeId, AssertionEvidenceType.EvidenceTypeAssert>() {

    override suspend fun findById(id: EvidenceTypeId) = repository.findById(id)
    override suspend fun assertThat(entity: EvidenceType) = EvidenceTypeAssert(entity)

    inner class EvidenceTypeAssert(
        private val evidenceType: EvidenceType
    ) {
        fun hasFields(
            id: EvidenceTypeId = evidenceType.id,
            name: String = evidenceType.name,
            concepts: Collection<InformationConceptId> = evidenceType.concepts.map { it.id },
        ) = also {
            Assertions.assertThat(evidenceType.id).isEqualTo(id)
            Assertions.assertThat(evidenceType.name).isEqualTo(name)
            Assertions.assertThat(evidenceType.concepts.map { it.id }).containsExactlyInAnyOrderElementsOf(concepts)
        }
    }
}
