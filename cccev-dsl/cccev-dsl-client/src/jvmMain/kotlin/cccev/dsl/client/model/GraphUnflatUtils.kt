package cccev.dsl.client.model

import cccev.commons.utils.toJson
import cccev.core.certification.entity.Certification
import cccev.core.certification.entity.RequirementCertification
import cccev.core.certification.entity.SupportedValue
import cccev.f2.certification.domain.model.CertificationFlat
import cccev.f2.certification.domain.model.RequirementCertificationFlat
import cccev.f2.certification.domain.model.SupportedValueFlat
import cccev.f2.certification.domain.query.CertificationGetResult
import cccev.f2.commons.CertificationFlatGraph
import cccev.f2.concept.domain.model.InformationConceptFlat
import cccev.f2.requirement.domain.model.RequirementFlat
import cccev.f2.unit.domain.model.DataUnitFlat
import cccev.projection.api.entity.concept.InformationConceptEntity
import cccev.projection.api.entity.requirement.RequirementEntity
import cccev.projection.api.entity.unit.DataUnitEntity
import cccev.projection.api.entity.unit.DataUnitOptionEntity
import cccev.s2.requirement.domain.model.RequirementKind
import cccev.s2.unit.domain.model.DataUnitType
import f2.spring.exception.NotFoundException

fun CertificationFlat.unflatten(graph: CertificationFlatGraph): Certification {
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

fun RequirementCertificationFlat.unflatten(graph: CertificationFlatGraph): RequirementCertification {
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

fun SupportedValueFlat.unflatten(graph: CertificationFlatGraph): SupportedValue {
    return SupportedValue().also { supportedValue ->
        supportedValue.id = id
        supportedValue.value = value
        supportedValue.concept = graph.concepts[conceptIdentifier]
            ?.unflatten(graph)
            ?: throw NotFoundException("InformationConcept", conceptIdentifier)
    }
}

fun InformationConceptFlat.unflatten(graph: CertificationFlatGraph): InformationConceptEntity {
    return InformationConceptEntity().also { concept ->
        concept.id = id
        concept.identifier = identifier
        concept.name = name
        concept.hasUnit = graph.units[unitIdentifier]
            ?.unflatten(graph)
            ?: throw NotFoundException("DataUnit", unitIdentifier)
        concept.description = description
        concept.expressionOfExpectedValue = expressionOfExpectedValue
        concept.dependsOn = dependsOn?.map { dependencyIdentifier ->
            graph.concepts[dependencyIdentifier]
                ?.unflatten(graph)
                ?: throw NotFoundException("InformationConcept", dependencyIdentifier)
        }
    }
}

fun RequirementFlat.unflatten(graph: CertificationFlatGraph): RequirementEntity {
    val subRequirements = hasRequirement.map {
        graph.requirements[it]?.unflatten(graph)
            ?: throw NotFoundException("Requirement", it)
    }

    return RequirementEntity(
        id = id,
        identifier = identifier,
        kind = RequirementKind.valueOf(kind),
        description = description,
        type = type,
        name = name,
        hasQualifiedRelation = mutableMapOf(RequirementEntity.HAS_REQUIREMENT to subRequirements.toMutableList()),
        hasConcept = hasConcept.map {
            graph.concepts[it]?.unflatten(graph)
                ?: throw NotFoundException("InformationConcept", it)
        }.toMutableList(),
        hasEvidenceTypeList = mutableListOf(), // TODO
        enablingCondition = enablingCondition,
        enablingConditionDependencies = enablingConditionDependencies.map {
            graph.concepts[it]?.unflatten(graph)
                ?: throw NotFoundException("InformationConcept", it)
        },
        required = required,
        validatingCondition = validatingCondition,
        validatingConditionDependencies = validatingConditionDependencies.map {
            graph.concepts[it]?.unflatten(graph)
                ?: throw NotFoundException("InformationConcept", it)
        },
        order = order,
        properties = properties?.toJson(),
    ).also { requirement ->
        requirement.hasRequirementTmp = subRequirements.toMutableList()
    }
}

fun DataUnitFlat.unflatten(graph: CertificationFlatGraph): DataUnitEntity {
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

fun cccev.f2.unit.domain.model.DataUnitOption.unflatten(graph: CertificationFlatGraph): DataUnitOptionEntity {
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

fun CertificationGetResult.toCertificationFlatGraph() = certification?.let {
    CertificationFlatGraph().also { graph ->
        graph.certification = it
        graph.requirementCertifications.putAll(requirementCertifications)
        graph.requirements.putAll(requirements)
        graph.concepts.putAll(concepts)
        graph.units.putAll(units)
        graph.unitOptions.putAll(unitOptions)
        graph.supportedValues.putAll(supportedValues)
    }
}
