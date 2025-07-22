package io.komune.registry.core.cccev

import io.komune.registry.core.cccev.certification.entity.Certification
import io.komune.registry.core.cccev.certification.entity.RequirementCertification
import io.komune.registry.core.cccev.certification.entity.SupportedValue
import io.komune.registry.core.cccev.certification.model.CertificationFlat
import io.komune.registry.core.cccev.certification.model.RequirementCertificationFlat
import io.komune.registry.core.cccev.certification.model.SupportedValueFlat
import io.komune.registry.core.cccev.concept.entity.InformationConcept
import io.komune.registry.core.cccev.concept.model.InformationConceptFlat
import io.komune.registry.core.cccev.evidencetype.entity.EvidenceType
import io.komune.registry.core.cccev.evidencetype.model.EvidenceTypeFlat
import io.komune.registry.core.cccev.requirement.entity.Requirement
import io.komune.registry.core.cccev.requirement.model.RequirementFlat
import io.komune.registry.core.cccev.unit.entity.DataUnit
import io.komune.registry.core.cccev.unit.entity.DataUnitOption
import io.komune.registry.core.cccev.unit.model.DataUnitFlat
import io.komune.registry.core.cccev.unit.model.DataUnitOptionFlat
import io.komune.registry.s2.commons.model.CertificationId
import io.komune.registry.s2.commons.model.DataUnitIdentifier
import io.komune.registry.s2.commons.model.DataUnitOptionIdentifier
import io.komune.registry.s2.commons.model.EvidenceTypeId
import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import io.komune.registry.s2.commons.model.RequirementCertificationId
import io.komune.registry.s2.commons.model.RequirementIdentifier
import io.komune.registry.s2.commons.model.SupportedValueId

fun Certification.flattenTo(graph: CccevFlatGraph): CertificationId {
    graph.certifications[id] = CertificationFlat(
        id = id,
        requirementCertificationIds = requirementCertifications.map { it.flattenTo(graph) },
    )
    return id
}

fun RequirementCertification.flattenTo(graph: CccevFlatGraph): RequirementCertificationId {
    graph.requirementCertifications[id] = RequirementCertificationFlat(
        id = id,
        requirementIdentifier = requirement.flattenTo(graph),
        subCertificationIds = subCertifications.map { it.flattenTo(graph) },
        valueIds = values.map { it.flattenTo(graph) },
        isEnabled = isEnabled,
        isValidated = isValidated,
        isFulfilled = isFulfilled,
        hasAllValues = hasAllValues,
    )
    return id
}

fun SupportedValue.flattenTo(graph: CccevFlatGraph): SupportedValueId {
    graph.supportedValues[id] = SupportedValueFlat(
        id = id,
        value = value,
        conceptIdentifier = concept.flattenTo(graph),
    )
    return id
}

fun InformationConcept.flattenTo(graph: CccevFlatGraph): InformationConceptIdentifier {
    graph.concepts[identifier] = InformationConceptFlat(
        id = id,
        identifier = identifier,
        name = name,
        unitIdentifier = unit.flattenTo(graph),
        description = description,
        expressionOfExpectedValue = expressionOfExpectedValue,
        dependsOn = dependencies.map { it.flattenTo(graph) }
    )
    return identifier
}

fun EvidenceType.flattenTo(graph: CccevFlatGraph): EvidenceTypeId {
    graph.evidenceTypes[id] = EvidenceTypeFlat(
        id = id,
        name = name,
        conceptIdentifiers = concepts.map { it.flattenTo(graph) }
    )
    return id
}

fun Requirement.flattenTo(graph: CccevFlatGraph): RequirementIdentifier {
    graph.requirements[identifier] = RequirementFlat(
        id = id,
        identifier = identifier,
        kind = kind,
        description = description,
        type = type,
        name = name,
        subRequirementIds = subRequirements.map { it.flattenTo(graph) },
        conceptIdentifiers = concepts.map { it.flattenTo(graph) },
        evidenceTypeIds = evidenceTypes.map { it.flattenTo(graph) },
        enablingCondition = enablingCondition,
        enablingConditionDependencies = enablingConditionDependencies.map { it.flattenTo(graph) },
        required = required,
        validatingCondition = validatingCondition,
        validatingConditionDependencies = validatingConditionDependencies.map { it.flattenTo(graph) },
        order = order,
        properties = properties
    )
    return identifier
}

fun DataUnit.flattenTo(graph: CccevFlatGraph): DataUnitIdentifier {
    graph.units[identifier] = DataUnitFlat(
        id = id,
        identifier = identifier,
        name = name,
        description = description,
        notation = notation,
        type = type,
        optionIdentifiers = options.map { it.flattenTo(graph) }
    )
    return identifier
}

fun DataUnitOption.flattenTo(graph: CccevFlatGraph): DataUnitOptionIdentifier {
    graph.unitOptions[identifier] = DataUnitOptionFlat(
        id = id,
        identifier = identifier,
        name = name,
        value = value,
        order = order,
        icon = icon,
        color = color,
    )
    return identifier
}
