package cccev.dsl.client.model

import cccev.core.certification.entity.Certification
import cccev.core.certification.entity.RequirementCertification
import cccev.core.certification.entity.SupportedValue
import cccev.core.concept.entity.InformationConcept
import cccev.core.requirement.entity.Requirement
import cccev.core.requirement.model.RequirementKind
import cccev.f2.certification.domain.model.CertificationFlat
import cccev.f2.certification.domain.model.RequirementCertificationFlat
import cccev.f2.certification.domain.model.SupportedValueFlat
import cccev.f2.commons.CccevFlatGraph
import cccev.f2.concept.domain.model.InformationConceptFlat
import cccev.f2.requirement.domain.model.RequirementFlat
import cccev.f2.unit.domain.model.DataUnitFlat
import cccev.projection.api.entity.unit.DataUnitEntity
import cccev.projection.api.entity.unit.DataUnitOptionEntity
import cccev.s2.unit.domain.model.DataUnitType
import f2.spring.exception.NotFoundException

fun CertificationFlat.unflatten(graph: CccevFlatGraph): Certification {
    return Certification().also { certification ->
        certification.id = id
        requirementCertificationIds.forEach { requirementCertificationId ->
            val requirementCertification = graph.requirementCertifications[requirementCertificationId]
                ?.unflatten(graph)
                ?: throw NotFoundException("RequirementCertification", requirementCertificationId)

            certification.requirementCertifications.add(requirementCertification)
        }
    }
}

fun RequirementCertificationFlat.unflatten(graph: CccevFlatGraph): RequirementCertification {
    return RequirementCertification().also { requirementCertification ->
        requirementCertification.id = id
        requirementCertification.requirement = graph.requirements[requirementIdentifier]
            ?.unflatten(graph)
            ?: throw NotFoundException("Requirement", requirementIdentifier)

        subCertificationIds.forEach { subCertificationId ->
            val subCertification = graph.requirementCertifications[subCertificationId]
                ?.unflatten(graph)
                ?: throw NotFoundException("RequirementCertification", subCertificationId)

            requirementCertification.subCertifications.add(subCertification)
        }

        valueIds.forEach { valueId ->
            val value = graph.supportedValues[valueId]
                ?.unflatten(graph)
                ?: throw NotFoundException("SupportedValue", valueId)

            requirementCertification.values.add(value)
        }

        requirementCertification.isEnabled = isEnabled
        requirementCertification.isValidated = isValidated
        requirementCertification.isFulfilled = isFulfilled
        requirementCertification.hasAllValues = hasAllValues
    }
}

fun SupportedValueFlat.unflatten(graph: CccevFlatGraph): SupportedValue {
    return SupportedValue().also { supportedValue ->
        supportedValue.id = id
        supportedValue.value = value
        supportedValue.concept = graph.concepts[conceptIdentifier]
            ?.unflatten(graph)
            ?: throw NotFoundException("InformationConcept", conceptIdentifier)
    }
}

fun InformationConceptFlat.unflatten(graph: CccevFlatGraph): InformationConcept {
    return InformationConcept().also { concept ->
        concept.id = id
        concept.identifier = identifier
        concept.name = name
        concept.unit = graph.units[unitIdentifier]
            ?.unflatten(graph)
            ?: throw NotFoundException("DataUnit", unitIdentifier)
        concept.description = description
        concept.expressionOfExpectedValue = expressionOfExpectedValue
        concept.dependencies = dependsOn.map { dependencyIdentifier ->
            graph.concepts[dependencyIdentifier]
                ?.unflatten(graph)
                ?: throw NotFoundException("InformationConcept", dependencyIdentifier)
        }.toMutableList()
    }
}

fun RequirementFlat.unflatten(graph: CccevFlatGraph): Requirement {
    val subRequirements = hasRequirement.map {
        graph.requirements[it]?.unflatten(graph)
            ?: throw NotFoundException("Requirement", it)
    }

    return Requirement().also { requirement ->
        requirement.id = id
        requirement.identifier = identifier
        requirement.kind = RequirementKind.valueOf(kind)
        requirement.description = description
        requirement.type = type
        requirement.name = name
        requirement.hasRequirement = subRequirements.toMutableList()
        requirement.hasConcept = hasConcept.map {
            graph.concepts[it]?.unflatten(graph)
                ?: throw NotFoundException("InformationConcept", it)
        }.toMutableList()
        requirement.hasEvidenceTypeList = mutableListOf() // TODO
        requirement.enablingCondition = enablingCondition
        requirement.enablingConditionDependencies = enablingConditionDependencies.map {
            graph.concepts[it]?.unflatten(graph)
                ?: throw NotFoundException("InformationConcept", it)
        }.toMutableList()
        requirement.required = required
        requirement.validatingCondition = validatingCondition
        requirement.validatingConditionDependencies = validatingConditionDependencies.map {
            graph.concepts[it]?.unflatten(graph)
                ?: throw NotFoundException("InformationConcept", it)
        }.toMutableList()
        requirement.order = order
        requirement.properties = properties
    }
}

fun DataUnitFlat.unflatten(graph: CccevFlatGraph): DataUnitEntity {
    return DataUnitEntity(
        id = id,
        identifier = identifier,
        name = name,
        description = description,
        notation = notation,
        type = DataUnitType.valueOf(type),
        options = optionIdentifiers?.map {
            graph.unitOptions[it]
                ?.unflatten(graph)
                ?: throw NotFoundException("DataUnitOption", it)
        }?.toMutableList()
    )
}

fun cccev.f2.unit.domain.model.DataUnitOption.unflatten(graph: CccevFlatGraph): DataUnitOptionEntity {
    return DataUnitOptionEntity(
        id = id,
        identifier = identifier,
        name = name,
        value = value,
        order = order,
        icon = icon,
        color = color
    )
}
