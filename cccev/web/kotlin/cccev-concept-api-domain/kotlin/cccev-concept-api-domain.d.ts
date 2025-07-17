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
export namespace f2.dsl.cqrs {
    interface Command extends f2.dsl.cqrs.Message {
    }
}
export namespace f2.dsl.cqrs {
    interface Event extends f2.dsl.cqrs.Message {
    }
}
export namespace f2.dsl.cqrs {
    interface Message {
    }
}
export namespace f2.dsl.cqrs {
    interface Query extends f2.dsl.cqrs.Message {
    }
}
export namespace f2.dsl.cqrs.error {
    interface ErrorDTO<PAYLOAD> {
        readonly severity: f2.dsl.cqrs.error.ErrorSeverity;
        readonly type: string;
        readonly description: string;
        readonly date: string;
        readonly payload: PAYLOAD;
    }
    class Error<PAYLOAD> implements f2.dsl.cqrs.error.ErrorDTO<PAYLOAD> {
        constructor(type: string, description: string, date: string, payload: PAYLOAD, severity: f2.dsl.cqrs.error.ErrorSeverity);
        get type(): string;
        get description(): string;
        get date(): string;
        get payload(): PAYLOAD;
        get severity(): f2.dsl.cqrs.error.ErrorSeverity;
    }
    class ErrorSeverity {
        constructor(severity: string);
        get severity(): string;
    }
    class ErrorSeverityWarning extends f2.dsl.cqrs.error.ErrorSeverity {
        constructor();
    }
    class AlertSeverityError extends f2.dsl.cqrs.error.ErrorSeverity {
        constructor();
    }
}
export namespace f2.dsl.cqrs.exception {
    class F2Exception /* extends kotlin.Exception */ {
        constructor(id: string, error: f2.dsl.cqrs.error.ErrorDTO<any /*UnknownType **/>);
        get id(): string;
        get error(): f2.dsl.cqrs.error.ErrorDTO<any /*UnknownType **/>;
    }
}
export namespace f2.dsl.cqrs.page {
    interface PageDTO<OBJECT> {
        readonly total: number;
        readonly items: kotlin.collections.List<OBJECT>;
    }
    class Page<OBJECT> implements f2.dsl.cqrs.page.PageDTO<OBJECT> {
        constructor(total: number, items: kotlin.collections.List<OBJECT>);
        get total(): number;
        get items(): kotlin.collections.List<OBJECT>;
    }
}
export namespace f2.dsl.cqrs.page {
    interface PageQueryDTO extends f2.dsl.cqrs.Query {
        readonly pagination?: f2.dsl.cqrs.page.OffsetPaginationDTO;
    }
    interface PageQueryResultDTO<OBJECT> extends f2.dsl.cqrs.Event, f2.dsl.cqrs.page.PageDTO<OBJECT> {
        readonly total: number;
        readonly items: kotlin.collections.List<OBJECT>;
        readonly pagination?: f2.dsl.cqrs.page.OffsetPaginationDTO;
    }
    class PageQuery implements f2.dsl.cqrs.page.PageQueryDTO {
        constructor(pagination?: f2.dsl.cqrs.page.OffsetPaginationDTO);
        get pagination(): Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>;
    }
    class PageQueryResult<OBJECT> implements f2.dsl.cqrs.page.PageQueryResultDTO<OBJECT> {
        constructor(pagination?: f2.dsl.cqrs.page.OffsetPaginationDTO, total: number, items: kotlin.collections.List<OBJECT>);
        get pagination(): Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>;
        get total(): number;
        get items(): kotlin.collections.List<OBJECT>;
    }
}
export namespace f2.dsl.cqrs.page {
    interface Pagination {
    }
    interface OffsetPaginationDTO {
        readonly offset: number;
        readonly limit: number;
    }
    class OffsetPagination implements f2.dsl.cqrs.page.OffsetPaginationDTO, f2.dsl.cqrs.page.Pagination {
        constructor(offset: number, limit: number);
        get offset(): number;
        get limit(): number;
    }
    interface PagePaginationDTO {
        readonly page?: number;
        readonly size?: number;
    }
    class PagePagination implements f2.dsl.cqrs.page.PagePaginationDTO, f2.dsl.cqrs.page.Pagination {
        constructor(page?: number, size?: number);
        get page(): Nullable<number>;
        get size(): Nullable<number>;
    }
}
export namespace f2.dsl.fnc {
    interface F2Function<T, R> {
        invoke(cmd: T): Promise<R>;
    }
    interface F2Supplier<R> {
        invoke(): Promise<Array<R>>;
    }
    interface F2Consumer<T> {
        invoke(cmd: T): Promise<void>;
    }
}
export namespace ssm.chaincode.dsl {
    interface SsmChaincodeQueries {
        ssmGetAdminFunction(): f2.dsl.fnc.F2Function<ssm.chaincode.dsl.query.SsmGetAdminQuery, ssm.chaincode.dsl.query.SsmGetAdminResult>;
        ssmGetQueryFunction(): f2.dsl.fnc.F2Function<ssm.chaincode.dsl.query.SsmGetQuery, ssm.chaincode.dsl.query.SsmGetResult>;
        ssmGetSessionLogsQueryFunction(): f2.dsl.fnc.F2Function<ssm.chaincode.dsl.query.SsmGetSessionLogsQuery, ssm.chaincode.dsl.query.SsmGetSessionLogsQueryResult>;
        ssmGetSessionQueryFunction(): f2.dsl.fnc.F2Function<ssm.chaincode.dsl.query.SsmGetSessionQuery, ssm.chaincode.dsl.query.SsmGetSessionResult>;
        ssmGetTransactionQueryFunction(): f2.dsl.fnc.F2Function<ssm.chaincode.dsl.query.SsmGetTransactionQuery, ssm.chaincode.dsl.query.SsmGetTransactionQueryResult>;
        ssmGetUserFunction(): f2.dsl.fnc.F2Function<ssm.chaincode.dsl.query.SsmGetUserQuery, ssm.chaincode.dsl.query.SsmGetUserResult>;
        ssmListAdminQueryFunction(): f2.dsl.fnc.F2Function<ssm.chaincode.dsl.query.SsmListAdminQuery, ssm.chaincode.dsl.query.SsmListAdminResult>;
        ssmListSessionQueryFunction(): f2.dsl.fnc.F2Function<ssm.chaincode.dsl.query.SsmListSessionQuery, ssm.chaincode.dsl.query.SsmListSessionResult>;
        ssmListSsmQueryFunction(): f2.dsl.fnc.F2Function<ssm.chaincode.dsl.query.SsmListSsmQuery, ssm.chaincode.dsl.query.SsmListSsmResult>;
        ssmListUserQueryFunction(): f2.dsl.fnc.F2Function<ssm.chaincode.dsl.query.SsmListUserQuery, ssm.chaincode.dsl.query.SsmListUserResult>;
    }
}
export namespace ssm.chaincode.dsl {
    interface SsmQueryDTO extends f2.dsl.cqrs.Query {
        readonly chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri;
    }
    interface SsmItemResultDTO<T> extends f2.dsl.cqrs.Event {
        readonly item?: T;
    }
    interface SsmItemsResultDTO<T> extends f2.dsl.cqrs.Event {
        readonly items: Array<T>;
    }
}
export namespace ssm.chaincode.dsl.blockchain {
    interface BlockDTO {
        readonly blockId: string;
        readonly previousHash: Int8Array;
        readonly dataHash: Int8Array;
        readonly transactions: kotlin.collections.List<ssm.chaincode.dsl.blockchain.TransactionDTO>;
    }
    class Block implements ssm.chaincode.dsl.blockchain.BlockDTO {
        constructor(blockId: string, previousHash: Int8Array, dataHash: Int8Array, transactions: kotlin.collections.List<ssm.chaincode.dsl.blockchain.Transaction>);
        get blockId(): string;
        get previousHash(): Int8Array;
        get dataHash(): Int8Array;
        get transactions(): kotlin.collections.List<ssm.chaincode.dsl.blockchain.Transaction>;
    }
}
export namespace ssm.chaincode.dsl.blockchain {
    abstract class EnvelopeType {
        private constructor();
        static get TRANSACTION_ENVELOPE(): ssm.chaincode.dsl.blockchain.EnvelopeType & {
            get name(): "TRANSACTION_ENVELOPE";
            get ordinal(): 0;
        };
        static get ENVELOPE(): ssm.chaincode.dsl.blockchain.EnvelopeType & {
            get name(): "ENVELOPE";
            get ordinal(): 1;
        };
        static values(): Array<ssm.chaincode.dsl.blockchain.EnvelopeType>;
        static valueOf(value: string): ssm.chaincode.dsl.blockchain.EnvelopeType;
        get name(): "TRANSACTION_ENVELOPE" | "ENVELOPE";
        get ordinal(): 0 | 1;
    }
}
export namespace ssm.chaincode.dsl.blockchain {
    interface IdentitiesInfoDTO {
        readonly id: string;
        readonly mspid: string;
    }
    class IdentitiesInfo implements ssm.chaincode.dsl.blockchain.IdentitiesInfoDTO {
        constructor(id: string, mspid: string);
        get id(): string;
        get mspid(): string;
    }
}
export namespace ssm.chaincode.dsl.blockchain {
    interface TransactionDTO {
        readonly transactionId: string;
        readonly blockId: string;
        readonly timestamp: kotlin.Long;
        readonly isValid: boolean;
        readonly channelId: string;
        readonly creator: ssm.chaincode.dsl.blockchain.IdentitiesInfoDTO;
        readonly nonce: Int8Array;
        readonly type: ssm.chaincode.dsl.blockchain.EnvelopeType;
        readonly validationCode: number;
    }
    class Transaction implements ssm.chaincode.dsl.blockchain.TransactionDTO {
        constructor(transactionId: string, blockId: string, timestamp: kotlin.Long, isValid: boolean, channelId: string, creator: ssm.chaincode.dsl.blockchain.IdentitiesInfo, nonce: Int8Array, type: ssm.chaincode.dsl.blockchain.EnvelopeType, validationCode: number);
        get transactionId(): string;
        get blockId(): string;
        get timestamp(): kotlin.Long;
        get isValid(): boolean;
        get channelId(): string;
        get creator(): ssm.chaincode.dsl.blockchain.IdentitiesInfo;
        get nonce(): Int8Array;
        get type(): ssm.chaincode.dsl.blockchain.EnvelopeType;
        get validationCode(): number;
    }
}
export namespace ssm.chaincode.dsl.config {
    interface SsmChaincodePropertiesDTO {
        readonly url: string;
    }
    class ChaincodeSsmConfig implements ssm.chaincode.dsl.config.SsmChaincodePropertiesDTO {
        constructor(url: string);
        get url(): string;
    }
}
export namespace ssm.chaincode.dsl.model {
    interface SsmAgentDTO {
        readonly name: string;
        readonly pub: Int8Array;
    }
    class SsmAgent implements ssm.chaincode.dsl.model.SsmAgentDTO {
        constructor(name: string, pub: Int8Array);
        get name(): string;
        get pub(): Int8Array;
        equals(other?: any): boolean;
        hashCode(): number;
        static get Companion(): {
        };
        component1(): string;
        component2(): Int8Array;
        copy(name: string, pub: Int8Array): ssm.chaincode.dsl.model.Agent;
        toString(): string;
    }
}
export namespace ssm.chaincode.dsl.model {
    interface ChaincodeDTO {
        readonly id: string;
        readonly channelId: string;
    }
    class Chaincode implements ssm.chaincode.dsl.model.ChaincodeDTO {
        constructor(id: string, channelId: string);
        get id(): string;
        get channelId(): string;
        component1(): string;
        component2(): string;
        copy(id: string, channelId: string): ssm.chaincode.dsl.model.Chaincode;
        toString(): string;
        hashCode(): number;
        equals(other?: any): boolean;
    }
}
export namespace ssm.chaincode.dsl.model {
    interface SsmDTO {
        readonly name: string;
        readonly transitions: kotlin.collections.List<ssm.chaincode.dsl.model.SsmTransitionDTO>;
    }
    class Ssm implements ssm.chaincode.dsl.model.SsmDTO {
        constructor(name: string, transitions: kotlin.collections.List<ssm.chaincode.dsl.model.SsmTransition>);
        get name(): string;
        get transitions(): kotlin.collections.List<ssm.chaincode.dsl.model.SsmTransition>;
        component1(): string;
        component2(): kotlin.collections.List<ssm.chaincode.dsl.model.SsmTransition>;
        copy(name: string, transitions: kotlin.collections.List<ssm.chaincode.dsl.model.SsmTransition>): ssm.chaincode.dsl.model.Ssm;
        toString(): string;
        hashCode(): number;
        equals(other?: any): boolean;
    }
}
export namespace ssm.chaincode.dsl.model {
    interface SsmContextDTO extends ssm.chaincode.dsl.model.WithPrivate {
        readonly session: string;
        readonly public: string;
        readonly iteration: number;
        readonly private?: kotlin.collections.Map<string, string>;
    }
    class SsmContext implements ssm.chaincode.dsl.model.SsmContextDTO {
        constructor(session: string, _public: string, iteration: number, _private?: kotlin.collections.Map<string, string>);
        get session(): string;
        get public(): string;
        get iteration(): number;
        get private(): Nullable<kotlin.collections.Map<string, string>>;
        component1(): string;
        component2(): string;
        component3(): number;
        component4(): Nullable<kotlin.collections.Map<string, string>>;
        copy(session: string, _public: string, iteration: number, _private?: kotlin.collections.Map<string, string>): ssm.chaincode.dsl.model.SsmContext;
        toString(): string;
        hashCode(): number;
        equals(other?: any): boolean;
    }
}
export namespace ssm.chaincode.dsl.model {
    interface SsmGrantDTO {
        readonly user: string;
        readonly iteration: number;
        readonly credits: kotlin.collections.Map<string, ssm.chaincode.dsl.model.CreditDTO>;
    }
    class SsmGrant {
        constructor(user: string, iteration: number, credits: kotlin.collections.Map<string, ssm.chaincode.dsl.model.Credit>);
        get user(): string;
        get iteration(): number;
        get credits(): kotlin.collections.Map<string, ssm.chaincode.dsl.model.Credit>;
        component1(): string;
        component2(): number;
        component3(): kotlin.collections.Map<string, ssm.chaincode.dsl.model.Credit>;
        copy(user: string, iteration: number, credits: kotlin.collections.Map<string, ssm.chaincode.dsl.model.Credit>): ssm.chaincode.dsl.model.SsmGrant;
        toString(): string;
        hashCode(): number;
        equals(other?: any): boolean;
    }
    interface CreditDTO {
        readonly amount: number;
    }
    class Credit implements ssm.chaincode.dsl.model.CreditDTO {
        constructor(amount: number);
        get amount(): number;
        component1(): number;
        copy(amount: number): ssm.chaincode.dsl.model.Credit;
        toString(): string;
        hashCode(): number;
        equals(other?: any): boolean;
    }
}
export namespace ssm.chaincode.dsl.model {
    interface SsmSessionDTO extends ssm.chaincode.dsl.model.WithPrivate {
        readonly ssm?: string;
        readonly session: string;
        readonly roles?: kotlin.collections.Map<string, string>;
        readonly public?: any;
        readonly private?: kotlin.collections.Map<string, string>;
    }
    class SsmSession implements ssm.chaincode.dsl.model.SsmSessionDTO {
        constructor(ssm: string, session: string, roles: kotlin.collections.Map<string, string>, _public: string, _private?: kotlin.collections.Map<string, string>);
        get ssm(): string;
        get session(): string;
        get roles(): kotlin.collections.Map<string, string>;
        get public(): string;
        get private(): Nullable<kotlin.collections.Map<string, string>>;
    }
}
export namespace ssm.chaincode.dsl.model {
    interface SsmSessionStateDTO extends ssm.chaincode.dsl.model.SsmSessionDTO, ssm.chaincode.dsl.model.WithPrivate {
        readonly ssm?: string;
        readonly session: string;
        readonly roles?: kotlin.collections.Map<string, string>;
        readonly public?: any;
        readonly private?: kotlin.collections.Map<string, string>;
        readonly origin?: ssm.chaincode.dsl.model.SsmTransitionDTO;
        readonly current: number;
        readonly iteration: number;
    }
    class SsmSessionState implements ssm.chaincode.dsl.model.SsmSessionStateDTO {
        constructor(ssm?: string, session: string, roles?: kotlin.collections.Map<string, string>, _public?: any, _private?: kotlin.collections.Map<string, string>, origin?: ssm.chaincode.dsl.model.SsmTransition, current: number, iteration: number);
        get ssm(): Nullable<string>;
        get session(): string;
        get roles(): Nullable<kotlin.collections.Map<string, string>>;
        get public(): Nullable<any>;
        get private(): Nullable<kotlin.collections.Map<string, string>>;
        get origin(): Nullable<ssm.chaincode.dsl.model.SsmTransition>;
        get current(): number;
        get iteration(): number;
        component1(): Nullable<string>;
        component2(): string;
        component3(): Nullable<kotlin.collections.Map<string, string>>;
        component4(): Nullable<any>;
        component5(): Nullable<kotlin.collections.Map<string, string>>;
        component6(): Nullable<ssm.chaincode.dsl.model.SsmTransition>;
        component7(): number;
        component8(): number;
        copy(ssm?: string, session: string, roles?: kotlin.collections.Map<string, string>, _public?: any, _private?: kotlin.collections.Map<string, string>, origin?: ssm.chaincode.dsl.model.SsmTransition, current: number, iteration: number): ssm.chaincode.dsl.model.SsmSessionState;
        toString(): string;
        hashCode(): number;
        equals(other?: any): boolean;
    }
}
export namespace ssm.chaincode.dsl.model {
    interface SsmSessionStateLogDTO {
        readonly txId: string;
        readonly state: ssm.chaincode.dsl.model.SsmSessionStateDTO;
    }
    class SsmSessionStateLog implements ssm.chaincode.dsl.model.SsmSessionStateLogDTO {
        constructor(txId: string, state: ssm.chaincode.dsl.model.SsmSessionState);
        get txId(): string;
        get state(): ssm.chaincode.dsl.model.SsmSessionState;
        component1(): string;
        component2(): ssm.chaincode.dsl.model.SsmSessionState;
        copy(txId: string, state: ssm.chaincode.dsl.model.SsmSessionState): ssm.chaincode.dsl.model.SsmSessionStateLog;
        toString(): string;
        hashCode(): number;
        equals(other?: any): boolean;
    }
}
export namespace ssm.chaincode.dsl.model {
    interface SsmTransitionDTO {
        readonly from: number;
        readonly to: number;
        readonly role: string;
        readonly action: string;
    }
    class SsmTransition implements ssm.chaincode.dsl.model.SsmTransitionDTO {
        constructor(from: number, to: number, role: string, action: string);
        get from(): number;
        get to(): number;
        get role(): string;
        get action(): string;
        component1(): number;
        component2(): number;
        component3(): string;
        component4(): string;
        copy(from: number, to: number, role: string, action: string): ssm.chaincode.dsl.model.SsmTransition;
        toString(): string;
        hashCode(): number;
        equals(other?: any): boolean;
    }
}
export namespace ssm.chaincode.dsl.model {
    interface WithPrivate {
        readonly private?: kotlin.collections.Map<string, string>;
    }
}
export namespace ssm.chaincode.dsl.model.uri {
    interface ChaincodeUriDTO {
        readonly uri: string;
    }
    class ChaincodeUri implements ssm.chaincode.dsl.model.uri.ChaincodeUriDTO {
        constructor(uri: string);
        get uri(): string;
        static get Companion(): {
            get PARTS(): number;
            get PREFIX(): string;
        };
        get channelId(): string;
        get chaincodeId(): string;
    }
}
export namespace ssm.chaincode.dsl.model.uri {
    interface SsmUriDTO {
        readonly uri: string;
    }
    class SsmUri implements ssm.chaincode.dsl.model.uri.SsmUriDTO {
        constructor(uri: string);
        get uri(): string;
        static get Companion(): {
            get PARTS(): number;
            get PREFIX(): string;
        };
        get channelId(): string;
        get chaincodeId(): string;
        get ssmName(): string;
        get ssmVersion(): string;
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;
        component1(): string;
        copy(uri: string): ssm.chaincode.dsl.model.uri.SsmUri;
        toString(): string;
        hashCode(): number;
        equals(other?: any): boolean;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmGetAdminQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor(chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri, name: string);
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;
        get name(): string;
    }
    class SsmGetAdminResult implements ssm.chaincode.dsl.SsmItemResultDTO<ssm.chaincode.dsl.model.Agent> {
        constructor(item?: ssm.chaincode.dsl.model.Agent);
        get item(): Nullable<ssm.chaincode.dsl.model.Agent>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmGetQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor(chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri, name: string);
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;
        get name(): string;
    }
    class SsmGetResult implements ssm.chaincode.dsl.SsmItemResultDTO<ssm.chaincode.dsl.model.Ssm> {
        constructor(item?: ssm.chaincode.dsl.model.Ssm);
        get item(): Nullable<ssm.chaincode.dsl.model.Ssm>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmGetSessionLogsQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor(chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri, ssmName: string, sessionName: string);
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;
        get ssmName(): string;
        get sessionName(): string;
    }
    class SsmGetSessionLogsQueryResult {
        constructor(ssmName: string, sessionName: string, logs: kotlin.collections.List<ssm.chaincode.dsl.model.SsmSessionStateLog>);
        get ssmName(): string;
        get sessionName(): string;
        get logs(): kotlin.collections.List<ssm.chaincode.dsl.model.SsmSessionStateLog>;
        component1(): string;
        component2(): string;
        component3(): kotlin.collections.List<ssm.chaincode.dsl.model.SsmSessionStateLog>;
        copy(ssmName: string, sessionName: string, logs: kotlin.collections.List<ssm.chaincode.dsl.model.SsmSessionStateLog>): ssm.chaincode.dsl.query.SsmGetSessionLogsQueryResult;
        toString(): string;
        hashCode(): number;
        equals(other?: any): boolean;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmGetSessionQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor(chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri, sessionName: string);
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;
        get sessionName(): string;
    }
    class SsmGetSessionResult implements ssm.chaincode.dsl.SsmItemResultDTO<ssm.chaincode.dsl.model.SsmSessionState> {
        constructor(item?: ssm.chaincode.dsl.model.SsmSessionState);
        get item(): Nullable<ssm.chaincode.dsl.model.SsmSessionState>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmGetTransactionQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor(chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri, id: string);
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;
        get id(): string;
        component1(): ssm.chaincode.dsl.model.uri.ChaincodeUri;
        component2(): string;
        copy(chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri, id: string): ssm.chaincode.dsl.query.SsmGetTransactionQuery;
        toString(): string;
        hashCode(): number;
        equals(other?: any): boolean;
    }
    class SsmGetTransactionQueryResult implements ssm.chaincode.dsl.SsmItemResultDTO<ssm.chaincode.dsl.blockchain.Transaction> {
        constructor(item?: ssm.chaincode.dsl.blockchain.Transaction);
        get item(): Nullable<ssm.chaincode.dsl.blockchain.Transaction>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmGetUserQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor(chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri, name: string);
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;
        get name(): string;
    }
    class SsmGetUserResult implements ssm.chaincode.dsl.SsmItemResultDTO<ssm.chaincode.dsl.model.Agent> {
        constructor(item?: ssm.chaincode.dsl.model.Agent);
        get item(): Nullable<ssm.chaincode.dsl.model.Agent>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmListAdminQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor(chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri);
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;
    }
    class SsmListAdminResult implements ssm.chaincode.dsl.SsmItemsResultDTO<string> {
        constructor(items: Array<string>);
        get items(): Array<string>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmListSessionQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor(chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri);
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;
    }
    class SsmListSessionResult implements ssm.chaincode.dsl.SsmItemsResultDTO<string> {
        constructor(items: Array<string>);
        get items(): Array<string>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmListSsmQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor(chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri);
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;
    }
    class SsmListSsmResult implements ssm.chaincode.dsl.SsmItemsResultDTO<string> {
        constructor(items: Array<string>);
        get items(): Array<string>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmListUserQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor(chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri);
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;
    }
    class SsmListUserResult implements ssm.chaincode.dsl.SsmItemsResultDTO<string> {
        constructor(items: Array<string>);
        get items(): Array<string>;
    }
}
export namespace s2.dsl.automate {
    class S2Automate /* implements s2.dsl.automate.Automate */ {
        constructor(name: string, transitions: Array<s2.dsl.automate.S2Transition>, subMachines: Array<s2.dsl.automate.S2SubMachine>);
        get name(): string;
        get transitions(): Array<s2.dsl.automate.S2Transition>;
        get subMachines(): Array<s2.dsl.automate.S2SubMachine>;
    }
}
export namespace s2.dsl.automate {
    interface S2InitCommand extends f2.dsl.cqrs.Command {
    }
    interface S2Command<ID> extends f2.dsl.cqrs.Command, s2.dsl.automate.WithId<ID> {
        readonly id: ID;
    }
}
export namespace s2.dsl.automate {
    class S2ErrorBase implements s2.dsl.automate.S2Error {
        constructor(severity: f2.dsl.cqrs.error.ErrorSeverity, type: string, description: string, date: string, payload: kotlin.collections.Map<string, string>);
        get severity(): f2.dsl.cqrs.error.ErrorSeverity;
        get type(): string;
        get description(): string;
        get date(): string;
        get payload(): kotlin.collections.Map<string, string>;
        toString(): string;
    }
}
export namespace s2.dsl.automate {
    interface S2Event<STATE, ID> extends f2.dsl.cqrs.Event, s2.dsl.automate.WithId<ID> {
        readonly id: ID;
        readonly type: STATE;
    }
    class S2EventSuccess<STATE, COMMAND, ID> implements f2.dsl.cqrs.Event {
        constructor(id: ID, type: COMMAND, from: STATE, to: STATE);
        get id(): ID;
        get type(): COMMAND;
        get from(): STATE;
        get to(): STATE;
    }
    class S2EventError<STATE, COMMAND, ID> implements f2.dsl.cqrs.Event {
        constructor(id: ID, type: COMMAND, from: STATE, to: STATE, error: s2.dsl.automate.S2Error);
        get id(): ID;
        get type(): COMMAND;
        get from(): STATE;
        get to(): STATE;
        get error(): s2.dsl.automate.S2Error;
    }
}
export namespace s2.dsl.automate {
    class S2SubMachine {
        constructor(automate: s2.dsl.automate.S2Automate, startsOn: any/* kotlin.collections.List<any/* kotlin.reflect.KClass<f2.dsl.cqrs.Message> */> */, endsOn: any/* kotlin.collections.List<any/* kotlin.reflect.KClass<f2.dsl.cqrs.Message> */> */, autostart: boolean, blocking: boolean, singleton: boolean);
        get automate(): s2.dsl.automate.S2Automate;
        get startsOn(): any/* kotlin.collections.List<any/* kotlin.reflect.KClass<f2.dsl.cqrs.Message> */> */;
        get endsOn(): any/* kotlin.collections.List<any/* kotlin.reflect.KClass<f2.dsl.cqrs.Message> */> */;
        get autostart(): boolean;
        get blocking(): boolean;
        get singleton(): boolean;
    }
}
export namespace s2.dsl.automate {
    class S2InitTransition {
        constructor(to: s2.dsl.automate.S2State, role: s2.dsl.automate.S2Role, command: kotlin.reflect.KClass<s2.dsl.automate.S2InitCommand>);
        get to(): s2.dsl.automate.S2State;
        get role(): s2.dsl.automate.S2Role;
        get command(): kotlin.reflect.KClass<s2.dsl.automate.S2InitCommand>;
    }
    class S2Transition {
        constructor(from?: s2.dsl.automate.S2State, to: s2.dsl.automate.S2State, role: s2.dsl.automate.S2Role, msg: kotlin.reflect.KClass<f2.dsl.cqrs.Message>);
        get from(): Nullable<s2.dsl.automate.S2State>;
        get to(): s2.dsl.automate.S2State;
        get role(): s2.dsl.automate.S2Role;
        get msg(): kotlin.reflect.KClass<f2.dsl.cqrs.Message>;
    }
    class S2TransitionCommand {
        constructor(name: string, attributes: Array<s2.dsl.automate.S2TransitionCommandAttribute>);
        get name(): string;
        get attributes(): Array<s2.dsl.automate.S2TransitionCommandAttribute>;
    }
    class S2TransitionCommandAttribute {
        constructor(name: string, type: string, optional: boolean);
        get name(): string;
        get type(): string;
        get optional(): boolean;
    }
}
export namespace s2.dsl.automate.builder {
    function s2(exec: (p0: s2.dsl.automate.builder.S2AutomateBuilder) => void): s2.dsl.automate.S2Automate;
}
export namespace s2.dsl.automate {
    interface S2Error {
        readonly severity: f2.dsl.cqrs.error.ErrorSeverity;
        readonly type: string;
        readonly description: string;
        readonly date: string;
        readonly payload: kotlin.collections.Map<string, string>;
    }
}
export namespace s2.dsl.automate {
    interface S2Role {
    }
}
export namespace s2.dsl.automate {
    interface S2State {
        readonly position: number;
    }
}
export namespace s2.dsl.automate {
    interface MessageWithId<ID> {
        readonly id: ID;
    }
}
export namespace cccev.s2.request.domain {
    interface RequestEvent extends s2.dsl.automate.S2Event<any/* cccev.s2.request.domain.RequestState */, string> {
        readonly id: string;
        readonly type: cccev.s2.request.domain.RequestState;
    }
    interface RequestCommand extends s2.dsl.automate.S2Command<string> {
        readonly id: string;
    }
}
export namespace cccev.s2.request.domain.features.command {
    interface RequestAuditCommandDTO extends cccev.s2.request.domain.RequestCommand {
        readonly id: string;
    }
    interface RequestAuditedEventDTO extends cccev.s2.request.domain.RequestEvent {
        readonly id: string;
        readonly type: typeof cccev.s2.request.domain.RequestState.Audited;
    }
}
export namespace cccev.s2.request.domain.features.command {
    interface RequestEvidenceAddCommandDTO extends cccev.s2.request.domain.RequestCommand {
        readonly id: string;
        readonly evidence: cccev.core.dsl.EvidenceDTO;
    }
    interface RequestEvidenceAddedEventDTO extends cccev.s2.request.domain.RequestEvent {
        readonly id: string;
        readonly type: typeof cccev.s2.request.domain.RequestState.Created;
        readonly evidenceId: string;
    }
}
export namespace cccev.s2.request.domain.features.command {
    interface RequestEvidenceRemoveCommandDTO extends cccev.s2.request.domain.RequestCommand {
        readonly id: string;
        readonly evidenceTypeId: string;
    }
    interface RequestEvidenceRemovedEventDTO extends cccev.s2.request.domain.RequestEvent {
        readonly id: string;
        readonly type: typeof cccev.s2.request.domain.RequestState.Created;
        readonly evidenceTypeId: string;
    }
}
export namespace cccev.s2.request.domain.features.command {
    interface RequestInitCommandDTO extends s2.dsl.automate.S2InitCommand {
        readonly id: string;
        readonly frameworkId: string;
    }
    interface RequestInitializedEventDTO {
        readonly id: string;
    }
}
export namespace cccev.s2.request.domain.features.command {
    interface RequestRefuseCommandDTO extends cccev.s2.request.domain.RequestCommand {
        readonly id: string;
    }
    interface RequestRefusedEventDto extends cccev.s2.request.domain.RequestEvent {
        readonly id: string;
        readonly type: typeof cccev.s2.request.domain.RequestState.Created;
    }
}
export namespace cccev.s2.request.domain.features.command {
    interface RequestSendCommandDTO extends cccev.s2.request.domain.RequestCommand {
        readonly id: string;
    }
    interface RequestSentEventDto extends cccev.s2.request.domain.RequestEvent {
        readonly id: string;
        readonly type: typeof cccev.s2.request.domain.RequestState.Sent;
    }
}
export namespace cccev.s2.request.domain.features.command {
    interface RequestSignCommandDTO extends cccev.s2.request.domain.RequestCommand {
        readonly id: string;
    }
    interface RequestSignedEventDto extends cccev.s2.request.domain.RequestEvent {
        readonly id: string;
        readonly type: typeof cccev.s2.request.domain.RequestState.Signed;
    }
}
export namespace cccev.s2.request.domain.features.command {
    interface RequestSupportedValueAddCommandDTO extends cccev.s2.request.domain.RequestCommand {
        readonly id: string;
        readonly supportedValue: cccev.core.dsl.SupportedValueDTO;
    }
    interface RequestSupportedValueAddedEventDto extends cccev.s2.request.domain.RequestEvent {
        readonly id: string;
        readonly type: typeof cccev.s2.request.domain.RequestState.Created;
        readonly providesValueFor: string;
    }
}
export namespace cccev.s2.request.domain.model {
    interface RequestDTO {
        readonly id: string;
        status: cccev.s2.request.domain.RequestState;
        readonly frameworkId: string;
        readonly evidences: kotlin.collections.List<cccev.core.dsl.EvidenceDTO>;
        readonly supportedValues: kotlin.collections.Map<string, cccev.core.dsl.SupportedValueDTO>;
    }
}
export namespace cccev.f2.evidence.api.domain.features.query {
    interface GetEvidenceTypeListsQueryDTO {
        readonly id: string;
        readonly requirement: string;
        readonly concept?: string;
        readonly evidenceType?: string;
    }
    interface GetEvidenceTypeListsQueryResultDTO {
        readonly evidenceTypeListMap: kotlin.collections.Map<string, cccev.f2.evidence.api.domain.model.EvidenceTypeListDTO>;
        readonly evidenceTypeListsOfEvidenceTypes: kotlin.collections.Map<string, kotlin.collections.List<string>>;
        readonly evidenceTypeLists: kotlin.collections.List<cccev.f2.evidence.api.domain.model.EvidenceTypeListChoicesDTO>;
    }
}
export namespace cccev.f2.evidence.api.domain.model {
    interface EvidenceTypeDTO extends cccev.core.dsl.EvidenceType {
        readonly evidence?: cccev.core.dsl.EvidenceDTO;
        readonly identifier: string;
        readonly name: string;
        readonly evidenceTypeClassification: cccev.core.dsl.Code;
        readonly validityPeriodConstraint?: cccev.core.dsl.PeriodOfTime;
        readonly issuingPlace?: cccev.core.dsl.CoreLocationLocation;
    }
}
export namespace cccev.f2.evidence.api.domain.model {
    interface EvidenceTypeListChoicesDTO {
        readonly evidenceTypeLists: kotlin.collections.List<string>;
        readonly isFilled: boolean;
    }
}
export namespace cccev.f2.evidence.api.domain.model {
    interface EvidenceTypeListDTO extends cccev.core.dsl.EvidenceTypeList {
        readonly specifiesEvidenceType: kotlin.collections.List<cccev.f2.evidence.api.domain.model.EvidenceTypeDTO>;
        readonly description: string;
        readonly identifier: string;
        readonly name: string;
    }
}
export namespace cccev.f2.concept.api.domain.features.query {
    interface GetInformationConceptsQueryDTO {
        readonly id: string;
        readonly requirement: string;
        readonly evidenceType?: string;
    }
    interface GetInformationConceptsQueryResultDTO {
        readonly informationConcepts: kotlin.collections.List<cccev.f2.concept.api.domain.model.InformationConceptDTO>;
    }
}
export namespace cccev.f2.concept.api.domain.model {
    interface InformationConceptDTO extends cccev.core.dsl.InformationConcept {
        readonly evidenceTypeChoices: cccev.f2.evidence.api.domain.model.EvidenceTypeListChoicesDTO;
        readonly supportedValue: cccev.core.dsl.SupportedValueDTO;
        readonly identifier: string;
        readonly name: string;
        readonly unit: cccev.core.dsl.CUnitDTO;
        readonly type: cccev.core.dsl.Code;
        readonly description: string;
        readonly expressionOfExpectedValue?: string;
        readonly dependsOn: kotlin.collections.List<string>;
    }
}
export as namespace cccev_concept_api_domain;