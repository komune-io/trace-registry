package io.komune.registry.test.control.core.cccev.requirement.data

import io.komune.registry.control.core.cccev.requirement.entity.Requirement
import io.komune.registry.control.core.cccev.requirement.entity.RequirementRepository
import io.komune.registry.control.core.cccev.requirement.model.RequirementKind
import io.komune.registry.s2.commons.model.EvidenceTypeId
import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.RequirementId
import org.assertj.core.api.Assertions
import s2.bdd.assertion.AssertionBdd
import s2.bdd.repository.AssertionApiEntity

fun AssertionBdd.requirement(conceptRepository: RequirementRepository) = AssertionRequirement(conceptRepository)

class AssertionRequirement(
    private val repository: RequirementRepository
): AssertionApiEntity<Requirement, RequirementId, AssertionRequirement.RequirementAssert>() {

    override suspend fun findById(id: RequirementId): Requirement? = repository.findById(id)
    override suspend fun assertThat(entity: Requirement) = RequirementAssert(entity)

    inner class RequirementAssert(
        private val requirement: Requirement
    ) {
        fun hasFields(
            id: RequirementId = requirement.id,
            kind: RequirementKind = requirement.kind,
            name: String? = requirement.name,
            description: String? = requirement.description,
            type: String? = requirement.type,
            hasRequirement: List<RequirementId> = requirement.subRequirements.map { it.id },
            hasConcept: List<InformationConceptId> = requirement.concepts.map { it.id },
            hasEvidenceType: List<EvidenceTypeId> = requirement.evidenceTypes.map { it.id },
        ) = also {
            Assertions.assertThat(requirement.id).isEqualTo(id)
            Assertions.assertThat(requirement.kind).isEqualTo(kind)
            Assertions.assertThat(requirement.name).isEqualTo(name)
            Assertions.assertThat(requirement.description).isEqualTo(description)
            Assertions.assertThat(requirement.type).isEqualTo(type)
            Assertions.assertThat(requirement.subRequirements.map { it.id }).containsExactlyInAnyOrderElementsOf(hasRequirement)
            Assertions.assertThat(requirement.concepts.map { it.id }).containsExactlyInAnyOrderElementsOf(hasConcept)
            Assertions.assertThat(requirement.evidenceTypes.map { it.id }).containsExactlyInAnyOrderElementsOf(hasEvidenceType)
        }

        fun hasRequirements(ids: Collection<RequirementId>) {
            Assertions.assertThat(requirement.subRequirements.map { it.id }).containsAll(ids)
        }

        fun doesNotHaveRequirements(ids: Collection<RequirementId>) {
            Assertions.assertThat(requirement.subRequirements.map { it.id }).doesNotContainAnyElementsOf(ids)
        }

        fun hasConcepts(ids: Collection<InformationConceptId>) {
            Assertions.assertThat(requirement.concepts.map { it.id }).containsAll(ids)
        }

        fun doesNotHaveConcepts(ids: Collection<InformationConceptId>) {
            Assertions.assertThat(requirement.concepts.map { it.id }).doesNotContainAnyElementsOf(ids)
        }

        fun hasEvidenceTypes(ids: Collection<EvidenceTypeId>) {
            Assertions.assertThat(requirement.evidenceTypes.map { it.id }).containsAll(ids)
        }

        fun doesNotHaveEvidenceTypes(ids: Collection<EvidenceTypeId>) {
            Assertions.assertThat(requirement.evidenceTypes.map { it.id }).doesNotContainAnyElementsOf(ids)
        }
    }
}
