package io.komune.registry.control.core.cccev

import f2.spring.exception.NotFoundException
import io.komune.registry.control.core.cccev.certification.entity.Certification
import io.komune.registry.control.core.cccev.certification.entity.RequirementCertification
import io.komune.registry.control.core.cccev.certification.entity.SupportedValue
import io.komune.registry.control.core.cccev.certification.model.CertificationFlat
import io.komune.registry.control.core.cccev.certification.model.RequirementCertificationFlat
import io.komune.registry.control.core.cccev.certification.model.SupportedValueFlat
import io.komune.registry.control.core.cccev.concept.entity.InformationConcept
import io.komune.registry.control.core.cccev.concept.model.InformationConceptFlat
import io.komune.registry.control.core.cccev.evidencetype.entity.EvidenceType
import io.komune.registry.control.core.cccev.evidencetype.model.EvidenceTypeFlat
import io.komune.registry.control.core.cccev.requirement.entity.Requirement
import io.komune.registry.control.core.cccev.requirement.model.RequirementFlat
import io.komune.registry.control.core.cccev.unit.entity.DataUnit
import io.komune.registry.control.core.cccev.unit.entity.DataUnitOption
import io.komune.registry.control.core.cccev.unit.model.DataUnitFlat
import io.komune.registry.control.core.cccev.unit.model.DataUnitOptionFlat

fun CertificationFlat.unflattenFrom(graph: CccevFlatGraph): Certification {
    return Certification().also { certification ->
        certification.id = id
        requirementCertificationIds.forEach { requirementCertificationId ->
            val requirementCertification = graph.requirementCertifications[requirementCertificationId]
                ?.unflattenFrom(graph)
                ?: throw NotFoundException("RequirementCertification", requirementCertificationId)

            certification.requirementCertifications.add(requirementCertification)
        }
    }
}

fun RequirementCertificationFlat.unflattenFrom(graph: CccevFlatGraph): RequirementCertification {
    return RequirementCertification().also { requirementCertification ->
        requirementCertification.id = id
        requirementCertification.requirement = graph.requirements[requirementIdentifier]
            ?.unflattenFrom(graph)
            ?: throw NotFoundException("Requirement", requirementIdentifier)

        subCertificationIds.forEach { subCertificationId ->
            val subCertification = graph.requirementCertifications[subCertificationId]
                ?.unflattenFrom(graph)
                ?: throw NotFoundException("RequirementCertification", subCertificationId)

            requirementCertification.subCertifications.add(subCertification)
        }

        valueIds.forEach { valueId ->
            val value = graph.supportedValues[valueId]
                ?.unflattenFrom(graph)
                ?: throw NotFoundException("SupportedValue", valueId)

            requirementCertification.values.add(value)
        }

        requirementCertification.isEnabled = isEnabled
        requirementCertification.isValidated = isValidated
        requirementCertification.isFulfilled = isFulfilled
        requirementCertification.hasAllValues = hasAllValues
    }
}

fun SupportedValueFlat.unflattenFrom(graph: CccevFlatGraph): SupportedValue {
    return SupportedValue().also { supportedValue ->
        supportedValue.id = id
        supportedValue.value = value
        supportedValue.concept = graph.concepts[conceptIdentifier]
            ?.unflattenFrom(graph)
            ?: throw NotFoundException("InformationConcept", conceptIdentifier)
    }
}

fun InformationConceptFlat.unflattenFrom(graph: CccevFlatGraph): InformationConcept {
    return InformationConcept().also { concept ->
        concept.id = id
        concept.identifier = identifier
        concept.name = name
        concept.unit = graph.units[unitIdentifier]
            ?.unflattenFrom(graph)
            ?: throw NotFoundException("DataUnit", unitIdentifier)
        concept.description = description
        concept.expressionOfExpectedValue = expressionOfExpectedValue
        concept.dependencies = dependsOn.map { dependencyIdentifier ->
            graph.concepts[dependencyIdentifier]
                ?.unflattenFrom(graph)
                ?: throw NotFoundException("InformationConcept", dependencyIdentifier)
        }.toMutableList()
    }
}

fun RequirementFlat.unflattenFrom(graph: CccevFlatGraph): Requirement {
    val subRequirements = subRequirementIds.map {
        graph.requirements[it]?.unflattenFrom(graph)
            ?: throw NotFoundException("Requirement", it)
    }

    return Requirement().also { requirement ->
        requirement.id = id
        requirement.identifier = identifier
        requirement.kind = kind
        requirement.description = description
        requirement.type = type
        requirement.name = name
        requirement.subRequirements = subRequirements.toMutableList()
        requirement.concepts = conceptIdentifiers.map {
            graph.concepts[it]?.unflattenFrom(graph)
                ?: throw NotFoundException("InformationConcept", it)
        }.toMutableList()
        requirement.evidenceTypes = evidenceTypeIds.map {
            graph.evidenceTypes[it]?.unflattenFrom(graph)
                ?: throw NotFoundException("EvidenceType", it)
        }.toMutableList()
        requirement.enablingCondition = enablingCondition
        requirement.enablingConditionDependencies = enablingConditionDependencies.map {
            graph.concepts[it]?.unflattenFrom(graph)
                ?: throw NotFoundException("InformationConcept", it)
        }.toMutableList()
        requirement.required = required
        requirement.validatingCondition = validatingCondition
        requirement.validatingConditionDependencies = validatingConditionDependencies.map {
            graph.concepts[it]?.unflattenFrom(graph)
                ?: throw NotFoundException("InformationConcept", it)
        }.toMutableList()
        requirement.order = order
        requirement.properties = properties
    }
}

fun DataUnitFlat.unflattenFrom(graph: CccevFlatGraph): DataUnit {
    return DataUnit().also { unit ->
        unit.id = id
        unit.identifier = identifier
        unit.name = name
        unit.description = description
        unit.abbreviation = abbreviation
        unit.type = type
        unit.options = optionIdentifiers.map {
            graph.unitOptions[it]?.unflattenFrom(graph)
                ?: throw NotFoundException("DataUnitOption", it)
        }.toMutableList()
    }
}

fun DataUnitOptionFlat.unflattenFrom(graph: CccevFlatGraph): DataUnitOption {
    return DataUnitOption().also { option ->
        option.id = id
        option.identifier = identifier
        option.name = name
        option.value = value
        option.order = order
        option.icon = icon
        option.color = color
    }
}

fun EvidenceTypeFlat.unflattenFrom(graph: CccevFlatGraph): EvidenceType {
    return EvidenceType().also { evidenceType ->
        evidenceType.id = id
        evidenceType.name = name
        evidenceType.concepts = conceptIdentifiers.map {
            graph.concepts[it]?.unflattenFrom(graph)
                ?: throw NotFoundException("InformationConcept", it)
        }.toMutableList()
    }
}
