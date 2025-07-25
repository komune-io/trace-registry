package io.komune.registry.test.control.core.cccev.certification.data

import io.komune.registry.core.cccev.certification.entity.CertificationRepository
import io.komune.registry.core.cccev.certification.entity.RequirementCertification
import io.komune.registry.s2.commons.model.RequirementCertificationId
import io.komune.registry.s2.commons.model.RequirementId
import io.komune.registry.s2.commons.model.SupportedValueId
import org.assertj.core.api.Assertions
import s2.bdd.assertion.AssertionBdd
import s2.bdd.repository.AssertionApiEntity

fun AssertionBdd.requirementCertification(repository: CertificationRepository) = AssertionRequirementCertification(repository)

class AssertionRequirementCertification(
    private val repository: CertificationRepository
): AssertionApiEntity<
        RequirementCertification, RequirementCertificationId, AssertionRequirementCertification.RequirementCertificationAssert>() {

    override suspend fun findById(id: RequirementCertificationId) = repository.findRequirementCertificationById(id)
    override suspend fun assertThat(entity: RequirementCertification) = RequirementCertificationAssert(entity)

    inner class RequirementCertificationAssert(
        private val certification: RequirementCertification
    ) {
        fun hasFields(
            id: RequirementCertificationId = certification.id,
            requirementId: RequirementId = certification.requirement.id,
            subCertificationIds: Collection<RequirementCertificationId> = certification.subCertifications.map { it.id },
            values: Collection<SupportedValueId> = certification.values.map { it.id },
            isEnabled: Boolean = certification.isEnabled,
            isValidated: Boolean = certification.isValidated,
            hasAllValues: Boolean = certification.hasAllValues,
            areEvidencesProvided: Boolean = certification.areEvidencesProvided,
            isFulfilled: Boolean = certification.isFulfilled
        ) = also {
            Assertions.assertThat(certification.id).isEqualTo(id)
            Assertions.assertThat(certification.requirement.id).isEqualTo(requirementId)
            Assertions.assertThat(certification.subCertifications.map { it.id }).containsExactlyInAnyOrderElementsOf(subCertificationIds)
            Assertions.assertThat(certification.values.map { it.id }).containsExactlyInAnyOrderElementsOf(values)
            Assertions.assertThat(certification.isEnabled).isEqualTo(isEnabled)
            Assertions.assertThat(certification.isValidated).isEqualTo(isValidated)
            Assertions.assertThat(certification.hasAllValues).isEqualTo(hasAllValues)
            Assertions.assertThat(certification.areEvidencesProvided).isEqualTo(areEvidencesProvided)
            Assertions.assertThat(certification.isFulfilled).isEqualTo(isFulfilled)
        }
    }
}
