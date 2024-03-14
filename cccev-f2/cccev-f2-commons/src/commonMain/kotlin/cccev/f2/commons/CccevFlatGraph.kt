package cccev.f2.commons

import cccev.core.certification.model.CertificationId
import cccev.core.certification.model.RequirementCertificationId
import cccev.core.certification.model.SupportedValueId
import cccev.core.concept.model.InformationConceptIdentifier
import cccev.core.requirement.model.RequirementIdentifier
import cccev.f2.certification.domain.model.CertificationFlat
import cccev.f2.certification.domain.model.CertificationFlatDTO
import cccev.f2.certification.domain.model.RequirementCertificationFlat
import cccev.f2.certification.domain.model.RequirementCertificationFlatDTO
import cccev.f2.certification.domain.model.SupportedValueFlat
import cccev.f2.certification.domain.model.SupportedValueFlatDTO
import cccev.f2.concept.domain.model.InformationConceptFlat
import cccev.f2.concept.domain.model.InformationConceptFlatDTO
import cccev.f2.requirement.domain.model.RequirementFlat
import cccev.f2.requirement.domain.model.RequirementFlatDTO
import cccev.f2.unit.domain.model.DataUnitFlat
import cccev.f2.unit.domain.model.DataUnitFlatDTO
import cccev.f2.unit.domain.model.DataUnitOption
import cccev.f2.unit.domain.model.DataUnitOptionDTO
import cccev.s2.unit.domain.DataUnitIdentifier
import cccev.s2.unit.domain.DataUnitOptionIdentifier
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface CccevFlatGraphDTO {
    val certifications: Map<CertificationId, CertificationFlatDTO>
    val requirementCertifications: Map<RequirementCertificationId, RequirementCertificationFlatDTO>
    val requirements: Map<RequirementIdentifier, RequirementFlatDTO>
    val concepts: Map<InformationConceptIdentifier, InformationConceptFlatDTO>
    val units: Map<DataUnitIdentifier, DataUnitFlatDTO>
    val unitOptions: Map<DataUnitOptionIdentifier, DataUnitOptionDTO>
    val supportedValues: Map<SupportedValueId, SupportedValueFlatDTO>
}

@Serializable
class CccevFlatGraph: CccevFlatGraphDTO {
    override val certifications: MutableMap<CertificationId, CertificationFlat> = mutableMapOf()
    override val requirementCertifications: MutableMap<RequirementCertificationId, RequirementCertificationFlat> = mutableMapOf()
    override val requirements: MutableMap<RequirementIdentifier, RequirementFlat> = mutableMapOf()
    override val concepts: MutableMap<InformationConceptIdentifier, InformationConceptFlat> = mutableMapOf()
    override val units: MutableMap<DataUnitIdentifier, DataUnitFlat> = mutableMapOf()
    override val unitOptions: MutableMap<DataUnitOptionIdentifier, DataUnitOption> = mutableMapOf()
    override val supportedValues: MutableMap<SupportedValueId, SupportedValueFlat> = mutableMapOf()
}
