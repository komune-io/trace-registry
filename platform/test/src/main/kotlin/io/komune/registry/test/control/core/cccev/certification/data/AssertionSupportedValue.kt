package io.komune.registry.test.control.core.cccev.certification.data

import io.komune.registry.control.core.cccev.certification.entity.CertificationRepository
import io.komune.registry.control.core.cccev.certification.entity.SupportedValue
import io.komune.registry.s2.commons.model.EvidenceId
import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.SupportedValueId
import org.assertj.core.api.Assertions
import s2.bdd.assertion.AssertionBdd
import s2.bdd.repository.AssertionApiEntity

fun AssertionBdd.supportedValue(repository: CertificationRepository) = AssertionSupportedValue(repository)

class AssertionSupportedValue(
    private val repository: CertificationRepository
): AssertionApiEntity<SupportedValue, SupportedValueId, AssertionSupportedValue.SupportedValueAssert>() {

    override suspend fun findById(id: SupportedValueId) = repository.findSupportedValueById(id)
    override suspend fun assertThat(entity: SupportedValue) = SupportedValueAssert(entity)

    inner class SupportedValueAssert(
        private val supportedValue: SupportedValue
    ) {
        fun hasFields(
            id: SupportedValueId = supportedValue.id,
            value: String? = supportedValue.value,
            conceptId: InformationConceptId = supportedValue.concept.id,
            evidenceIds: Collection<EvidenceId> = supportedValue.evidences.map { it.id }
        ) = also {
            Assertions.assertThat(supportedValue.id).isEqualTo(id)
            Assertions.assertThat(supportedValue.value).isEqualTo(value)
            Assertions.assertThat(supportedValue.concept.id).isEqualTo(conceptId)
            Assertions.assertThat(supportedValue.evidences.map { it.id }).containsExactlyInAnyOrderElementsOf(evidenceIds)
        }
    }
}
