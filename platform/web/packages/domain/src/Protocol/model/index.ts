import {io} from "registry-platform-api-api-js-export";


export interface Protocol extends io.komune.registry.control.f2.protocol.domain.model.ProtocolDTO {}
export interface DataCollectionStep extends io.komune.registry.control.f2.protocol.domain.model.DataCollectionStepDTO {}
export interface DataSection extends io.komune.registry.control.f2.protocol.domain.model.DataSectionDTO {}
export interface DataField extends io.komune.registry.control.f2.protocol.domain.model.DataFieldDTO {}
export interface DataCondition extends io.komune.registry.control.f2.protocol.domain.model.DataConditionDTO {}

export const ReservedProtocolTypes = io.komune.registry.control.f2.protocol.domain.model.ReservedProtocolTypes

export interface Certification extends io.komune.registry.control.f2.certification.domain.model.CertificationDTO {}

export interface CertificationRef extends io.komune.registry.control.f2.certification.domain.model.CertificationRefDTO {}

export interface BadgeCertification extends io.komune.registry.control.f2.certification.domain.model.BadgeCertificationDTO {}
