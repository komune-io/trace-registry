package cccev.test.s2.requirement.data

import cccev.core.concept.model.InformationConceptId
import cccev.core.requirement.entity.Requirement
import cccev.core.requirement.entity.RequirementRepository
import cccev.core.requirement.model.RequirementId
import cccev.core.requirement.model.RequirementKind
import cccev.s2.evidence.type.domain.EvidenceTypeListId
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
            hasRequirement: List<RequirementId> = requirement.hasRequirement.map { it.id },
            hasConcept: List<InformationConceptId> = requirement.hasConcept.map { it.id },
            hasEvidenceTypeList: List<EvidenceTypeListId> = requirement.hasEvidenceTypeList.map { it.id },
        ) = also {
            Assertions.assertThat(requirement.id).isEqualTo(id)
            Assertions.assertThat(requirement.kind).isEqualTo(kind)
            Assertions.assertThat(requirement.name).isEqualTo(name)
            Assertions.assertThat(requirement.description).isEqualTo(description)
            Assertions.assertThat(requirement.type).isEqualTo(type)
            Assertions.assertThat(requirement.hasRequirement.map { it.id }).containsExactlyInAnyOrderElementsOf(hasRequirement)
            Assertions.assertThat(requirement.hasConcept.map { it.id }).containsExactlyInAnyOrderElementsOf(hasConcept)
            Assertions.assertThat(requirement.hasEvidenceTypeList.map { it.id }).containsExactlyInAnyOrderElementsOf(hasEvidenceTypeList)
        }

        fun hasRequirements(ids: Collection<RequirementId>) {
            Assertions.assertThat(requirement.hasRequirement.map { it.id }).containsAll(ids)
        }

        fun doesNotHaveRequirements(ids: Collection<RequirementId>) {
            Assertions.assertThat(requirement.hasRequirement.map { it.id }).doesNotContainAnyElementsOf(ids)
        }

        fun hasConcepts(ids: Collection<InformationConceptId>) {
            Assertions.assertThat(requirement.hasConcept.map { it.id }).containsAll(ids)
        }

        fun doesNotHaveConcepts(ids: Collection<InformationConceptId>) {
            Assertions.assertThat(requirement.hasConcept.map { it.id }).doesNotContainAnyElementsOf(ids)
        }

        fun hasEvidenceTypeLists(ids: Collection<EvidenceTypeListId>) {
            Assertions.assertThat(requirement.hasEvidenceTypeList.map { it.id }).containsAll(ids)
        }

        fun doesNotHaveEvidenceTypeLists(ids: Collection<EvidenceTypeListId>) {
            Assertions.assertThat(requirement.hasEvidenceTypeList.map { it.id }).doesNotContainAnyElementsOf(ids)
        }
    }
}
