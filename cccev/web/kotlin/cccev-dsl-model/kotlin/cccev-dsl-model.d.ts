export namespace cccev.dsl.model {
    interface Code {

    }
}
export namespace cccev.dsl.model {
    interface EvidenceDTO {
        readonly identifier: string;
        readonly isConformantTo: kotlin.collections.List<string>;
        readonly supportsValue: kotlin.collections.List<string>;
        readonly supportsConcept: kotlin.collections.List<string>;
        readonly supportsRequirement: kotlin.collections.List<string>;
        readonly validityPeriod?: cccev.dsl.model.PeriodOfTime;
        readonly name: string;
        readonly file?: string;

    }
}
export namespace cccev.dsl.model {
    interface EvidenceTypeList {
        readonly description: string;
        readonly identifier: string;
        readonly name: string;
        readonly specifiesEvidenceType: kotlin.collections.List<cccev.dsl.model.EvidenceType>;

    }
    interface EvidenceType {
        readonly identifier: string;
        readonly name: string;
        readonly evidenceTypeClassification: cccev.dsl.model.Code;
        readonly validityPeriodConstraint?: cccev.dsl.model.PeriodOfTime;
        readonly issuingPlace?: cccev.dsl.model.CoreLocationLocation;

    }
    class CoreLocationLocation {
        constructor();
    }
    class PeriodOfTime {
        constructor(duration?: string, endTime?: number, startTime?: number);
        get duration(): Nullable<string>;
        get endTime(): Nullable<number>;
        get startTime(): Nullable<number>;
        static PeriodOfTime_init_$Create$(seen1: number, duration?: string, endTime?: number, startTime?: number, serializationConstructorMarker: Nullable<any>/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): cccev.dsl.model.PeriodOfTime;
        static get Companion(): {
            serializer(): kotlinx.serialization.KSerializer<cccev.dsl.model.PeriodOfTime>;
        };
        static get $serializer(): {
        } & kotlinx.serialization.internal.GeneratedSerializer<cccev.dsl.model.PeriodOfTime>;
    }
}
export namespace cccev.dsl.model {
    interface InformationConcept {
        readonly identifier: string;
        readonly name: string;
        readonly unit: cccev.dsl.model.CUnitDTO;
        readonly type: cccev.dsl.model.Code;
        readonly description: string;
        readonly expressionOfExpectedValue?: string;
        readonly dependsOn: kotlin.collections.List<string>;

    }
}
export namespace cccev.dsl.model {
    interface SupportedValueDTO {
        readonly identifier: string;
        readonly value?: string;
        readonly query?: string;
        readonly providesValueFor: string;

    }
}
export namespace cccev.dsl.model {
    interface CUnitDTO {
        readonly identifier: string;
        readonly name: string;
        readonly description: string;
        readonly notation?: string;
        readonly type: cccev.dsl.model.CUnitType;

    }
}
export as namespace cccev_dsl_model;