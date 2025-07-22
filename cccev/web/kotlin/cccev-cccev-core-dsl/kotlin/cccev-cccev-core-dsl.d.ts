export namespace cccev.core.dsl {
    interface Code {

    }
}
export namespace cccev.core.dsl {
    interface EvidenceDTO {
        readonly identifier: string;
        readonly isConformantTo: kotlin.collections.List<string>;
        readonly supportsValue: kotlin.collections.List<string>;
        readonly supportsConcept: kotlin.collections.List<string>;
        readonly supportsRequirement: kotlin.collections.List<string>;
        readonly validityPeriod?: cccev.core.dsl.PeriodOfTime;
        readonly name: string;
        readonly file?: string;

    }
}
export namespace cccev.core.dsl {
    interface EvidenceTypeList {
        readonly description: string;
        readonly identifier: string;
        readonly name: string;
        readonly specifiesEvidenceType: kotlin.collections.List<cccev.core.dsl.EvidenceType>;

    }
    interface EvidenceType {
        readonly identifier: string;
        readonly name: string;
        readonly evidenceTypeClassification: cccev.core.dsl.Code;
        readonly validityPeriodConstraint?: cccev.core.dsl.PeriodOfTime;
        readonly issuingPlace?: cccev.core.dsl.CoreLocationLocation;

    }
    class CoreLocationLocation {
        constructor();
    }
    class PeriodOfTime {
        constructor(duration?: string, endTime?: number, startTime?: number);
    }
}
export namespace cccev.core.dsl {
    interface InformationConcept {
        readonly identifier: string;
        readonly name: string;
        readonly unit: cccev.core.dsl.CUnitDTO;
        readonly type: cccev.core.dsl.Code;
        readonly description: string;
        readonly expressionOfExpectedValue?: string;
        readonly dependsOn: kotlin.collections.List<string>;

    }
}
export namespace cccev.core.dsl {
    interface SupportedValueDTO {
        readonly identifier: string;
        readonly value?: string;
        readonly query?: string;
        readonly providesValueFor: string;

    }
}
export namespace cccev.core.dsl {
    interface CUnitDTO {
        readonly identifier: string;
        readonly name: string;
        readonly description: string;
        readonly notation?: string;
        readonly type: cccev.core.dsl.CUnitType;

    }
}
export as namespace cccev_cccev_core_dsl;