package io.komune.registry.control.core.cccev

import io.komune.registry.control.core.cccev.certification.model.CertificationFlat
import io.komune.registry.control.core.cccev.certification.model.CertificationFlatDTO
import io.komune.registry.control.core.cccev.certification.model.RequirementCertificationFlat
import io.komune.registry.control.core.cccev.certification.model.RequirementCertificationFlatDTO
import io.komune.registry.control.core.cccev.certification.model.SupportedValueFlat
import io.komune.registry.control.core.cccev.certification.model.SupportedValueFlatDTO
import io.komune.registry.control.core.cccev.concept.model.InformationConceptFlat
import io.komune.registry.control.core.cccev.concept.model.InformationConceptFlatDTO
import io.komune.registry.control.core.cccev.evidencetype.model.EvidenceTypeFlat
import io.komune.registry.control.core.cccev.evidencetype.model.EvidenceTypeFlatDTO
import io.komune.registry.control.core.cccev.requirement.model.RequirementFlat
import io.komune.registry.control.core.cccev.requirement.model.RequirementFlatDTO
import io.komune.registry.control.core.cccev.unit.model.DataUnitFlat
import io.komune.registry.control.core.cccev.unit.model.DataUnitFlatDTO
import io.komune.registry.control.core.cccev.unit.model.DataUnitOptionFlat
import io.komune.registry.control.core.cccev.unit.model.DataUnitOptionFlatDTO
import io.komune.registry.s2.commons.model.CertificationId
import io.komune.registry.s2.commons.model.DataUnitIdentifier
import io.komune.registry.s2.commons.model.DataUnitOptionIdentifier
import io.komune.registry.s2.commons.model.EvidenceTypeId
import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import io.komune.registry.s2.commons.model.RequirementCertificationId
import io.komune.registry.s2.commons.model.RequirementIdentifier
import io.komune.registry.s2.commons.model.SupportedValueId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface CccevFlatGraphDTO {
    val certifications: Map<CertificationId, CertificationFlatDTO>
    val requirementCertifications: Map<RequirementCertificationId, RequirementCertificationFlatDTO>
    val requirements: Map<RequirementIdentifier, RequirementFlatDTO>
    val concepts: Map<InformationConceptIdentifier, InformationConceptFlatDTO>
    val evidenceTypes: Map<EvidenceTypeId, EvidenceTypeFlatDTO>
    val units: Map<DataUnitIdentifier, DataUnitFlatDTO>
    val unitOptions: Map<DataUnitOptionIdentifier, DataUnitOptionFlatDTO>
    val supportedValues: Map<SupportedValueId, SupportedValueFlatDTO>
}

@Serializable
class CccevFlatGraph: CccevFlatGraphDTO {
    override val certifications: MutableMap<CertificationId, CertificationFlat> = mutableMapOf()
    override val requirementCertifications: MutableMap<RequirementCertificationId, RequirementCertificationFlat> = mutableMapOf()
    override val requirements: MutableMap<RequirementIdentifier, RequirementFlat> = mutableMapOf()
    override val concepts: MutableMap<InformationConceptIdentifier, InformationConceptFlat> = mutableMapOf()
    override val evidenceTypes: MutableMap<EvidenceTypeId, EvidenceTypeFlat> = mutableMapOf()
    override val units: MutableMap<DataUnitIdentifier, DataUnitFlat> = mutableMapOf()
    override val unitOptions: MutableMap<DataUnitOptionIdentifier, DataUnitOptionFlat> = mutableMapOf()
    override val supportedValues: MutableMap<SupportedValueId, SupportedValueFlat> = mutableMapOf()
}
