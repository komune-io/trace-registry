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
    interface F2ErrorDTO {
        readonly id?: string;
        readonly timestamp: string;
        readonly code: number;
        readonly requestId?: string;
        readonly message: string;

    }
    class F2Error implements f2.dsl.cqrs.error.F2ErrorDTO {
        constructor(message: string, id?: string, timestamp?: string, code?: number, requestId?: string);
        get message(): string;
        get id(): Nullable<string>;
        get timestamp(): string;
        get code(): number;
        get requestId(): Nullable<string>;
        toString(): string;
        static F2Error_init_$Create$(seen1: number, message?: string, id?: string, timestamp?: string, code: number, requestId?: string, serializationConstructorMarker?: kotlinx.serialization.internal.SerializationConstructorMarker): f2.dsl.cqrs.error.F2Error;
        
        static get $serializer(): {
        } & kotlinx.serialization.internal.GeneratedSerializer<f2.dsl.cqrs.error.F2Error>;
    }
}
export namespace f2.dsl.cqrs.exception {
    class F2Exception /* extends kotlin.RuntimeException */ {
        constructor(error: f2.dsl.cqrs.error.F2ErrorDTO, cause?: Error);
        get error(): f2.dsl.cqrs.error.F2ErrorDTO;
        
    }
}
export namespace f2.dsl.cqrs.filter {
    interface Match<T> {
        readonly negative: boolean;
        map<R>(transform: (p0: T) => R): f2.dsl.cqrs.filter.Match<R>;
        not(): f2.dsl.cqrs.filter.Match<T>;
        and(match: f2.dsl.cqrs.filter.Match<T>): f2.dsl.cqrs.filter.Match<T>;
        or(match: f2.dsl.cqrs.filter.Match<T>): f2.dsl.cqrs.filter.Match<T>;

    }
}
export namespace f2.dsl.cqrs.filter {
    interface SortDTO {
        readonly property: string;
        readonly ascending: boolean;
        readonly nullsFirst?: boolean;

    }
}
export namespace f2.dsl.cqrs.page {
    interface PageDTO<OBJECT> {
        readonly total: number;
        readonly items: OBJECT[];

    }
    class Page<OBJECT> implements f2.dsl.cqrs.page.PageDTO<OBJECT> {
        constructor(total: number, items: OBJECT[]);
        get total(): number;
        get items(): OBJECT[];
        static Page_init_$Create$<OBJECT>(seen1: number, total: number, items?: OBJECT[], serializationConstructorMarker?: kotlinx.serialization.internal.SerializationConstructorMarker): f2.dsl.cqrs.page.Page<OBJECT>;
        
    }
    namespace Page {
        class $serializer<OBJECT> /* implements kotlinx.serialization.internal.GeneratedSerializer<f2.dsl.cqrs.page.Page<OBJECT>> */ {
            private constructor();
            static $serializer_init_$Create$<OBJECT>(typeSerial0: kotlinx.serialization.KSerializer<OBJECT>): f2.dsl.cqrs.page.Page.$serializer<OBJECT>;
        }
    }
}
export namespace f2.dsl.cqrs.page {
    interface PageQueryDTO extends f2.dsl.cqrs.Query {
        readonly pagination?: f2.dsl.cqrs.page.OffsetPaginationDTO;

    }
    interface PageQueryResultDTO<OBJECT> extends f2.dsl.cqrs.Event, f2.dsl.cqrs.page.PageDTO<OBJECT> {
        readonly total: number;
        readonly items: OBJECT[];
        readonly pagination?: f2.dsl.cqrs.page.OffsetPaginationDTO;

    }
    class PageQuery implements f2.dsl.cqrs.page.PageQueryDTO {
        constructor(pagination?: f2.dsl.cqrs.page.OffsetPaginationDTO);
        get pagination(): Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>;
        static PageQuery_init_$Create$(seen1: number, pagination?: f2.dsl.cqrs.page.OffsetPaginationDTO, serializationConstructorMarker?: kotlinx.serialization.internal.SerializationConstructorMarker): f2.dsl.cqrs.page.PageQuery;
        
        static get $serializer(): {
        } & kotlinx.serialization.internal.GeneratedSerializer<f2.dsl.cqrs.page.PageQuery>;
    }
    class PageQueryResult<OBJECT> implements f2.dsl.cqrs.page.PageQueryResultDTO<OBJECT> {
        constructor(pagination?: f2.dsl.cqrs.page.OffsetPagination, total: number, items: OBJECT[]);
        get pagination(): Nullable<f2.dsl.cqrs.page.OffsetPagination>;
        get total(): number;
        get items(): OBJECT[];
        static PageQueryResult_init_$Create$<OBJECT>(seen1: number, pagination?: f2.dsl.cqrs.page.OffsetPagination, total: number, items?: OBJECT[], serializationConstructorMarker?: kotlinx.serialization.internal.SerializationConstructorMarker): f2.dsl.cqrs.page.PageQueryResult<OBJECT>;
        
    }
    namespace PageQueryResult {
        class $serializer<OBJECT> /* implements kotlinx.serialization.internal.GeneratedSerializer<f2.dsl.cqrs.page.PageQueryResult<OBJECT>> */ {
            private constructor();
            static $serializer_init_$Create$<OBJECT>(typeSerial0: kotlinx.serialization.KSerializer<OBJECT>): f2.dsl.cqrs.page.PageQueryResult.$serializer<OBJECT>;
        }
    }
}
export namespace f2.dsl.cqrs.page {
    interface Pagination {

        
    }
    interface OffsetPaginationDTO extends f2.dsl.cqrs.page.Pagination {
        readonly offset: number;
        readonly limit: number;

    }
    interface PagePaginationDTO extends f2.dsl.cqrs.page.Pagination {
        readonly page?: number;
        readonly size?: number;

    }
    class OffsetPagination implements f2.dsl.cqrs.page.OffsetPaginationDTO {
        constructor(offset: number, limit: number);
        get offset(): number;
        get limit(): number;
        static OffsetPagination_init_$Create$(seen1: number, offset: number, limit: number, serializationConstructorMarker?: kotlinx.serialization.internal.SerializationConstructorMarker): f2.dsl.cqrs.page.OffsetPagination;
        
        static get $serializer(): {
        } & kotlinx.serialization.internal.GeneratedSerializer<f2.dsl.cqrs.page.OffsetPagination>;
    }
    class PagePagination implements f2.dsl.cqrs.page.PagePaginationDTO {
        constructor(page?: number, size?: number);
        get page(): Nullable<number>;
        get size(): Nullable<number>;
        static PagePagination_init_$Create$(seen1: number, page?: number, size?: number, serializationConstructorMarker?: kotlinx.serialization.internal.SerializationConstructorMarker): f2.dsl.cqrs.page.PagePagination;
        
        static get $serializer(): {
        } & kotlinx.serialization.internal.GeneratedSerializer<f2.dsl.cqrs.page.PagePagination>;
    }
}
export namespace f2.dsl.fnc {
    interface F2Function<T, R> {
        invoke(cmd: Array<T>): Promise<Array<R>>;

    }
    interface F2Supplier<R> {
        invoke(): Promise<Array<R>>;

    }
    interface F2Consumer<T> {
        invoke(cmd: Array<T>): Promise<void>;

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
        readonly transactions: ssm.chaincode.dsl.blockchain.TransactionDTO[];

    }
    class Block implements ssm.chaincode.dsl.blockchain.BlockDTO {
        constructor(blockId: string, previousHash: Int8Array, dataHash: Int8Array, transactions: ssm.chaincode.dsl.blockchain.Transaction[]);
        get blockId(): string;
        get previousHash(): Int8Array;
        get dataHash(): Int8Array;
        get transactions(): ssm.chaincode.dsl.blockchain.Transaction[];
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
        readonly timestamp: number;
        readonly isValid: boolean;
        readonly channelId: string;
        readonly creator: ssm.chaincode.dsl.blockchain.IdentitiesInfoDTO;
        readonly nonce: Int8Array;
        readonly type: ssm.chaincode.dsl.blockchain.EnvelopeType;
        readonly validationCode: number;

    }
    class Transaction implements ssm.chaincode.dsl.blockchain.TransactionDTO {
        constructor(transactionId: string, blockId: string, timestamp: number, isValid: boolean, channelId: string, creator: ssm.chaincode.dsl.blockchain.IdentitiesInfo, nonce: Int8Array, type: ssm.chaincode.dsl.blockchain.EnvelopeType, validationCode: number);
        get transactionId(): string;
        get blockId(): string;
        get timestamp(): number;
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
    interface AgentDTO {
        readonly name: string;
        readonly pub: Int8Array;

    }
    class Agent implements ssm.chaincode.dsl.model.AgentDTO {
        constructor(name: string, pub: Int8Array);
        get name(): string;
        get pub(): Int8Array;
        equals(other?: any): boolean;
        hashCode(): number;
        component1(): string;
        component2(): Int8Array;
        copy(name?: string, pub?: Int8Array): ssm.chaincode.dsl.model.Agent;
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
        copy(id?: string, channelId?: string): ssm.chaincode.dsl.model.Chaincode;
        toString(): string;
        hashCode(): number;
        equals(other?: any): boolean;
    }
}
export namespace ssm.chaincode.dsl.model {
    interface SsmDTO {
        readonly name: string;
        readonly transitions: ssm.chaincode.dsl.model.SsmTransitionDTO[];

    }
    class Ssm implements ssm.chaincode.dsl.model.SsmDTO {
        constructor(name: string, transitions: ssm.chaincode.dsl.model.SsmTransition[]);
        get name(): string;
        get transitions(): ssm.chaincode.dsl.model.SsmTransition[];
        component1(): string;
        component2(): ssm.chaincode.dsl.model.SsmTransition[];
        copy(name?: string, transitions?: ssm.chaincode.dsl.model.SsmTransition[]): ssm.chaincode.dsl.model.Ssm;
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
        readonly private?: Record<string, string>;

    }
    class SsmContext implements ssm.chaincode.dsl.model.SsmContextDTO {
        constructor(session: string, _public: string, iteration: number, _private?: Record<string, string>);
        get session(): string;
        get public(): string;
        get iteration(): number;
        get private(): Nullable<any>/* Nullable<Record<string, string>> */;
        component1(): string;
        component2(): string;
        component3(): number;
        component4(): Nullable<any>/* Nullable<Record<string, string>> */;
        copy(session?: string, _public?: string, iteration?: number, _private?: Record<string, string>): ssm.chaincode.dsl.model.SsmContext;
        toString(): string;
        hashCode(): number;
        equals(other?: any): boolean;
    }
}
export namespace ssm.chaincode.dsl.model {
    interface SsmGrantDTO {
        readonly user: string;
        readonly iteration: number;
        readonly credits: Record<string, ssm.chaincode.dsl.model.CreditDTO>;

    }
    class SsmGrant {
        constructor(user: string, iteration: number, credits: Record<string, ssm.chaincode.dsl.model.Credit>);
        get user(): string;
        get iteration(): number;
        get credits(): Record<string, ssm.chaincode.dsl.model.Credit>;
        component1(): string;
        component2(): number;
        component3(): Record<string, ssm.chaincode.dsl.model.Credit>;
        copy(user?: string, iteration?: number, credits?: Record<string, ssm.chaincode.dsl.model.Credit>): ssm.chaincode.dsl.model.SsmGrant;
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
        copy(amount?: number): ssm.chaincode.dsl.model.Credit;
        toString(): string;
        hashCode(): number;
        equals(other?: any): boolean;
    }
}
export namespace ssm.chaincode.dsl.model {
    interface SsmSessionDTO extends ssm.chaincode.dsl.model.WithPrivate {
        readonly ssm?: string;
        readonly session: string;
        readonly roles?: Record<string, string>;
        readonly public?: any;
        readonly private?: Record<string, string>;

    }
    class SsmSession implements ssm.chaincode.dsl.model.SsmSessionDTO {
        constructor(ssm: string, session: string, roles: Record<string, string>, _public: string, _private?: Record<string, string>);
        get ssm(): string;
        get session(): string;
        get roles(): Record<string, string>;
        get public(): string;
        get private(): Nullable<any>/* Nullable<Record<string, string>> */;
    }
}
export namespace ssm.chaincode.dsl.model {
    interface SsmSessionStateDTO extends ssm.chaincode.dsl.model.SsmSessionDTO, ssm.chaincode.dsl.model.WithPrivate {
        readonly ssm?: string;
        readonly session: string;
        readonly roles?: Record<string, string>;
        readonly public?: any;
        readonly private?: Record<string, string>;
        readonly origin?: ssm.chaincode.dsl.model.SsmTransitionDTO;
        readonly current: number;
        readonly iteration: number;

    }
    class SsmSessionState implements ssm.chaincode.dsl.model.SsmSessionStateDTO {
        constructor(ssm?: string, session: string, roles?: Record<string, string>, _public?: any, _private?: Record<string, string>, origin?: ssm.chaincode.dsl.model.SsmTransition, current: number, iteration: number);
        get ssm(): Nullable<string>;
        get session(): string;
        get roles(): Nullable<any>/* Nullable<Record<string, string>> */;
        get public(): Nullable<any>;
        get private(): Nullable<any>/* Nullable<Record<string, string>> */;
        get origin(): Nullable<ssm.chaincode.dsl.model.SsmTransition>;
        get current(): number;
        get iteration(): number;
        component1(): Nullable<string>;
        component2(): string;
        component3(): Nullable<any>/* Nullable<Record<string, string>> */;
        component4(): Nullable<any>;
        component5(): Nullable<any>/* Nullable<Record<string, string>> */;
        component6(): Nullable<ssm.chaincode.dsl.model.SsmTransition>;
        component7(): number;
        component8(): number;
        copy(ssm?: string, session?: string, roles?: Record<string, string>, _public?: any, _private?: Record<string, string>, origin?: ssm.chaincode.dsl.model.SsmTransition, current?: number, iteration?: number): ssm.chaincode.dsl.model.SsmSessionState;
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
        copy(txId?: string, state?: ssm.chaincode.dsl.model.SsmSessionState): ssm.chaincode.dsl.model.SsmSessionStateLog;
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
        copy(from?: number, to?: number, role?: string, action?: string): ssm.chaincode.dsl.model.SsmTransition;
        toString(): string;
        hashCode(): number;
        equals(other?: any): boolean;
    }
}
export namespace ssm.chaincode.dsl.model {
    interface WithPrivate {
        readonly private?: Record<string, string>;

    }
}
export namespace ssm.chaincode.dsl.model.uri {
    interface ChaincodeUriDTO {
        readonly uri: string;

    }
    class ChaincodeUri implements ssm.chaincode.dsl.model.uri.ChaincodeUriDTO {
        constructor(uri: string);
        get uri(): string;
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
        get channelId(): string;
        get chaincodeId(): string;
        get ssmName(): string;
        get ssmVersion(): string;
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;
        component1(): string;
        copy(uri?: string): ssm.chaincode.dsl.model.uri.SsmUri;
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
        constructor(ssmName: string, sessionName: string, logs: ssm.chaincode.dsl.model.SsmSessionStateLog[]);
        get ssmName(): string;
        get sessionName(): string;
        get logs(): ssm.chaincode.dsl.model.SsmSessionStateLog[];
        component1(): string;
        component2(): string;
        component3(): ssm.chaincode.dsl.model.SsmSessionStateLog[];
        copy(ssmName?: string, sessionName?: string, logs?: ssm.chaincode.dsl.model.SsmSessionStateLog[]): ssm.chaincode.dsl.query.SsmGetSessionLogsQueryResult;
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
        copy(chaincodeUri?: ssm.chaincode.dsl.model.uri.ChaincodeUri, id?: string): ssm.chaincode.dsl.query.SsmGetTransactionQuery;
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
    interface Automate {
        getAvailableTransitions(state: s2.dsl.automate.S2State): Array<s2.dsl.automate.S2Transition>;
        isAvailableTransition(currentState: s2.dsl.automate.S2State, msg: f2.dsl.cqrs.Message): boolean;
        isAvailableInitTransition(command: f2.dsl.cqrs.Message): boolean;
        isFinalState(state: s2.dsl.automate.S2State): boolean;
        isSameState(from?: s2.dsl.automate.S2State, to: s2.dsl.automate.S2State): boolean;

    }
}
export namespace s2.dsl.automate {
    class S2Automate implements s2.dsl.automate.Automate {
        constructor(name: string, version?: string, transitions: Array<s2.dsl.automate.S2Transition>);
        get name(): string;
        get version(): Nullable<string>;
        get transitions(): Array<s2.dsl.automate.S2Transition>;
        getAvailableTransitions(state: s2.dsl.automate.S2State): Array<s2.dsl.automate.S2Transition>;
        isAvailableTransition(currentState: s2.dsl.automate.S2State, msg: f2.dsl.cqrs.Message): boolean;
        isAvailableInitTransition(command: f2.dsl.cqrs.Message): boolean;
        isFinalState(state: s2.dsl.automate.S2State): boolean;
        isSameState(from?: s2.dsl.automate.S2State, to: s2.dsl.automate.S2State): boolean;
        static S2Automate_init_$Create$(seen1: number, name?: string, version?: string, transitions?: Array<s2.dsl.automate.S2Transition>, serializationConstructorMarker?: kotlinx.serialization.internal.SerializationConstructorMarker): s2.dsl.automate.S2Automate;
        
        static get $serializer(): {
        } & kotlinx.serialization.internal.GeneratedSerializer<s2.dsl.automate.S2Automate>;
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
    interface S2Error {
        readonly type: string;
        readonly description: string;
        readonly date: string;
        readonly payload: Record<string, string>;

    }
    class S2ErrorBase implements s2.dsl.automate.S2Error {
        constructor(type: string, description: string, date: string, payload: Record<string, string>);
        get type(): string;
        get description(): string;
        get date(): string;
        get payload(): Record<string, string>;
        toString(): string;
    }
}
export namespace s2.dsl.automate {
    interface S2Event<STATE extends s2.dsl.automate.S2State, ID> extends f2.dsl.cqrs.Event, s2.dsl.automate.WithId<ID> {
        readonly id: ID;
        readonly type: STATE;

    }
    class S2EventSuccess<STATE extends s2.dsl.automate.S2State, COMMAND extends f2.dsl.cqrs.Command, ID> implements f2.dsl.cqrs.Event {
        constructor(id: ID, type: COMMAND, from: STATE, to: STATE);
        get id(): ID;
        get type(): COMMAND;
        get from(): STATE;
        get to(): STATE;
    }
    class S2EventError<STATE extends s2.dsl.automate.S2State, COMMAND extends f2.dsl.cqrs.Command, ID> implements f2.dsl.cqrs.Event {
        constructor(id: ID, type: COMMAND, from: STATE, to: STATE, error: s2.dsl.automate.S2Error);
        get id(): ID;
        get type(): COMMAND;
        get from(): STATE;
        get to(): STATE;
        get error(): s2.dsl.automate.S2Error;
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
    class S2SubMachine {
        constructor(automate: s2.dsl.automate.S2Automate, startsOn?: kotlin.reflect.KClass<f2.dsl.cqrs.Message>[], endsOn?: kotlin.reflect.KClass<f2.dsl.cqrs.Message>[], autostart?: boolean, blocking?: boolean, singleton?: boolean);
        get automate(): s2.dsl.automate.S2Automate;
        get startsOn(): kotlin.reflect.KClass<f2.dsl.cqrs.Message>[];
        get endsOn(): kotlin.reflect.KClass<f2.dsl.cqrs.Message>[];
        get autostart(): boolean;
        get blocking(): boolean;
        get singleton(): boolean;
    }
}
export namespace s2.dsl.automate {
    class S2InitTransition {
        constructor(to: s2.dsl.automate.S2StateValue, role: s2.dsl.automate.S2Role, action: s2.dsl.automate.S2TransitionValue);
        get to(): s2.dsl.automate.S2StateValue;
        get role(): s2.dsl.automate.S2Role;
        get action(): s2.dsl.automate.S2TransitionValue;
    }
    class S2Transition {
        constructor(from?: s2.dsl.automate.S2StateValue, to: s2.dsl.automate.S2StateValue, role: s2.dsl.automate.S2RoleValue, action: s2.dsl.automate.S2TransitionValue, result?: s2.dsl.automate.S2TransitionValue);
        get from(): Nullable<s2.dsl.automate.S2StateValue>;
        get to(): s2.dsl.automate.S2StateValue;
        get role(): s2.dsl.automate.S2RoleValue;
        get action(): s2.dsl.automate.S2TransitionValue;
        get result(): Nullable<s2.dsl.automate.S2TransitionValue>;
        static S2Transition_init_$Create$(seen1: number, from?: s2.dsl.automate.S2StateValue, to?: s2.dsl.automate.S2StateValue, role?: s2.dsl.automate.S2RoleValue, action?: s2.dsl.automate.S2TransitionValue, result?: s2.dsl.automate.S2TransitionValue, serializationConstructorMarker?: kotlinx.serialization.internal.SerializationConstructorMarker): s2.dsl.automate.S2Transition;
        
        static get $serializer(): {
        } & kotlinx.serialization.internal.GeneratedSerializer<s2.dsl.automate.S2Transition>;
    }
    class S2TransitionValue {
        constructor(name: string);
        get name(): string;
        static S2TransitionValue_init_$Create$(seen1: number, name?: string, serializationConstructorMarker?: kotlinx.serialization.internal.SerializationConstructorMarker): s2.dsl.automate.S2TransitionValue;
        
        static get $serializer(): {
        } & kotlinx.serialization.internal.GeneratedSerializer<s2.dsl.automate.S2TransitionValue>;
    }
    class S2RoleValue {
        constructor(name: string);
        get name(): string;
        static S2RoleValue_init_$Create$(seen1: number, name?: string, serializationConstructorMarker?: kotlinx.serialization.internal.SerializationConstructorMarker): s2.dsl.automate.S2RoleValue;
        
        static get $serializer(): {
        } & kotlinx.serialization.internal.GeneratedSerializer<s2.dsl.automate.S2RoleValue>;
    }
    class S2StateValue {
        constructor(name: string, position: number);
        get name(): string;
        get position(): number;
        static S2StateValue_init_$Create$(seen1: number, name?: string, position: number, serializationConstructorMarker?: kotlinx.serialization.internal.SerializationConstructorMarker): s2.dsl.automate.S2StateValue;
        
        static get $serializer(): {
        } & kotlinx.serialization.internal.GeneratedSerializer<s2.dsl.automate.S2StateValue>;
    }
}
export namespace s2.dsl.automate {
    interface WithId<ID> {
        readonly id: ID;

    }
}
export namespace s2.dsl.automate.builder {
    function s2(exec: (p0: s2.dsl.automate.builder.S2AutomateBuilder) => void): s2.dsl.automate.S2Automate;
}
export namespace s2.dsl.automate.builder {
    function s2Sourcing(exec: (p0: s2.dsl.automate.builder.S2SourcingAutomateBuilder) => void): s2.dsl.automate.S2Automate;
}
export namespace s2.dsl.automate.model {
    interface WithS2Id<ID> {
        s2Id(): ID;

    }
}
export namespace s2.dsl.automate.model {
    interface WithS2IdAndStatus<ID, STATE> extends s2.dsl.automate.model.WithS2Id<ID>, s2.dsl.automate.model.WithS2State<STATE> {
        s2Id(): ID;
        s2State(): STATE;

    }
}
export namespace s2.dsl.automate.model {
    interface WithS2State<STATE> {
        s2State(): STATE;

    }
}
export namespace city.smartb.fs.s2.file.domain.features.query {
    interface FileAskQuestionQueryDTO {
        readonly question: string;
        readonly history: city.smartb.fs.s2.file.domain.model.ChatMessageDTO[];
        readonly metadata: city.smartb.fs.s2.file.domain.model.ChatMetadataDTO;

    }
    interface FileAskQuestionResultDTO {
        readonly item: string;

    }
}
export namespace city.smartb.fs.s2.file.domain.model {
    interface ChatMessageDTO {
        readonly content: string;
        readonly type: string;

    }
}
export namespace city.smartb.fs.s2.file.domain.model {
    interface ChatMetadataDTO {
        readonly targetedFiles: string[];

    }
}
export namespace city.smartb.fs.s2.file.domain.model {
    interface FilePathDTO {
        readonly objectType: string;
        readonly objectId: string;
        readonly directory: string;
        readonly name: string;

    }
}
export namespace cccev.dsl.model {
    class Code {
        constructor();
        toString(): string;
        static Code_init_$Create$(seen1: number, serializationConstructorMarker?: kotlinx.serialization.internal.SerializationConstructorMarker): cccev.dsl.model.Code;
        
        static get $serializer(): {
        } & kotlinx.serialization.internal.GeneratedSerializer<cccev.dsl.model.Code>;
    }
}
export namespace cccev.dsl.model {
    interface EvidenceDTO {
        readonly identifier: string;
        readonly isConformantTo: string[];
        readonly supportsValue: string[];
        readonly supportsConcept: string[];
        readonly supportsRequirement: string[];
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
        readonly specifiesEvidenceType: cccev.dsl.model.EvidenceType[];

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
        static CoreLocationLocation_init_$Create$(seen1: number, serializationConstructorMarker?: kotlinx.serialization.internal.SerializationConstructorMarker): cccev.dsl.model.CoreLocationLocation;
        
        static get $serializer(): {
        } & kotlinx.serialization.internal.GeneratedSerializer<cccev.dsl.model.CoreLocationLocation>;
    }
    class PeriodOfTime {
        constructor(duration?: string, endTime?: number, startTime?: number);
        get duration(): Nullable<string>;
        get endTime(): Nullable<number>;
        get startTime(): Nullable<number>;
        static PeriodOfTime_init_$Create$(seen1: number, duration?: string, endTime?: number, startTime?: number, serializationConstructorMarker?: kotlinx.serialization.internal.SerializationConstructorMarker): cccev.dsl.model.PeriodOfTime;
        
        static get $serializer(): {
        } & kotlinx.serialization.internal.GeneratedSerializer<cccev.dsl.model.PeriodOfTime>;
    }
}
export namespace cccev.dsl.model {
    interface InformationConcept {
        readonly identifier: string;
        readonly name: string;
        readonly unit: cccev.dsl.model.DataUnitDTO;
        readonly type?: cccev.dsl.model.Code;
        readonly description?: string;
        readonly expressionOfExpectedValue?: string;
        readonly dependsOn?: string[];

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
    interface DataUnitDTO {
        readonly identifier: string;
        readonly name: string;
        readonly description: string;
        readonly notation?: string;
        readonly type: cccev.dsl.model.DataUnitType;
        readonly options?: cccev.dsl.model.DataUnitOption[];

    }
}
export namespace s2.sourcing.dsl {
    interface Decide<COMMAND extends f2.dsl.cqrs.Command, EVENT extends f2.dsl.cqrs.Event> extends f2.dsl.fnc.F2Function<COMMAND, EVENT> {
        invoke(cmd: Array<COMMAND>): Promise<Array<EVENT>>;

    }
}
export namespace cccev.s2.unit.domain {
    interface DataUnitInitCommand extends s2.dsl.automate.S2InitCommand {

    }
    interface DataUnitCommand extends s2.dsl.automate.S2Command<string> {
        readonly id: string;

    }
    interface DataUnitEvent extends f2.dsl.cqrs.Event, s2.dsl.automate.model.WithS2Id<string> {
        s2Id(): string;

    }
}
export namespace cccev.s2.concept.domain {
    interface InformationConceptInitCommand extends s2.dsl.automate.S2InitCommand {

    }
    interface InformationConceptCommand extends s2.dsl.automate.S2Command<string> {
        readonly id: string;

    }
    interface InformationConceptEvent extends f2.dsl.cqrs.Event, s2.dsl.automate.model.WithS2Id<string> {
        s2Id(): string;

    }
}
export namespace cccev.s2.concept.domain.command {
    interface InformationConceptCreateCommandDTO extends cccev.s2.concept.domain.InformationConceptInitCommand {
        readonly identifier?: string;
        readonly name: string;
        readonly hasUnit?: string;
        readonly description?: string;
        readonly expressionOfExpectedValue?: string;
        readonly dependsOn?: string[];

    }
    interface InformationConceptCreatedEventDTO extends cccev.s2.concept.domain.InformationConceptEvent {
        readonly id: string;
        readonly identifier?: string;
        readonly name: string;
        readonly hasUnit?: string;
        readonly description?: string;
        readonly expressionOfExpectedValue?: string;
        readonly dependsOn?: string[];
        readonly status: s2.dsl.automate.S2State/* cccev.s2.concept.domain.InformationConceptState */;
        s2Id(): string;

    }
}
export namespace cccev.s2.concept.domain.command {
    interface InformationConceptUpdateCommandDTO extends cccev.s2.concept.domain.InformationConceptCommand {
        readonly id: string;
        readonly name: string;
        readonly description?: string;
        readonly expressionOfExpectedValue?: string;
        readonly dependsOn?: string[];

    }
    interface InformationConceptUpdatedEventDTO extends cccev.s2.concept.domain.InformationConceptEvent {
        readonly id: string;
        readonly name: string;
        readonly description?: string;
        readonly expressionOfExpectedValue?: string;
        readonly dependsOn?: string[];
        readonly status: s2.dsl.automate.S2State/* cccev.s2.concept.domain.InformationConceptState */;
        s2Id(): string;

    }
}
export namespace cccev.s2.evidence.type.domain {
    interface EvidenceTypeInitCommand extends s2.dsl.automate.S2InitCommand {

    }
    interface EvidenceTypeCommand extends s2.dsl.automate.S2Command<string> {
        readonly id: string;

    }
    interface EvidenceTypeEvent extends f2.dsl.cqrs.Event, s2.dsl.automate.model.WithS2Id<string> {
        s2Id(): string;

    }
}
export namespace cccev.s2.evidence.type.domain {
    interface EvidenceTypeListInitCommand extends s2.dsl.automate.S2InitCommand {

    }
    interface EvidenceTypeListCommand extends s2.dsl.automate.S2Command<string> {
        readonly id: string;

    }
    interface EvidenceTypeListEvent extends f2.dsl.cqrs.Event, s2.dsl.automate.model.WithS2Id<string>, s2.dsl.automate.WithId<string> {
        s2Id(): string;
        readonly id: string;

    }
}
export namespace cccev.s2.evidence.type.domain.command.list {
    interface EvidenceTypeListCreateCommandDTO extends cccev.s2.evidence.type.domain.EvidenceTypeListInitCommand {
        readonly identifier?: string;
        readonly name: string;
        readonly description: string;
        readonly specifiesEvidenceType: string[];

    }
    interface EvidenceTypeListCreatedEventDTO extends cccev.s2.evidence.type.domain.EvidenceTypeListEvent {
        readonly id: string;
        readonly identifier?: string;
        readonly name: string;
        readonly description: string;
        readonly specifiesEvidenceType: string[];
        readonly status: s2.dsl.automate.S2State/* cccev.s2.evidence.type.domain.EvidenceTypeListState */;
        s2Id(): string;

    }
}
export namespace cccev.s2.evidence.type.domain.command.list {
    interface EvidenceTypeListUpdateCommandDTO extends cccev.s2.evidence.type.domain.EvidenceTypeListCommand {
        readonly id: string;
        readonly name: string;
        readonly description: string;
        readonly specifiesEvidenceType: string[];

    }
    interface EvidenceTypeListUpdatedEventDTO extends cccev.s2.evidence.type.domain.EvidenceTypeListEvent {
        readonly id: string;
        s2Id(): string;

    }
}
export namespace cccev.s2.evidence.type.domain.command.type {
    interface EvidenceTypeCreateCommandDTO extends cccev.s2.evidence.type.domain.EvidenceTypeInitCommand {
        readonly identifier?: string;
        readonly name: string;
        readonly description: string;
        readonly validityPeriodConstraint?: number;

    }
    interface EvidenceTypeCreatedEventDTO extends cccev.s2.evidence.type.domain.EvidenceTypeEvent {
        readonly id: string;
        readonly identifier?: string;
        readonly name: string;
        readonly description: string;
        readonly validityPeriodConstraint?: number;
        readonly status: s2.dsl.automate.S2State/* cccev.s2.evidence.type.domain.EvidenceTypeState */;
        s2Id(): string;

    }
}
export namespace cccev.s2.requirement.domain {
    interface RequirementInitCommand extends s2.dsl.automate.S2InitCommand {

    }
    interface RequirementCommand extends s2.dsl.automate.S2Command<string> {
        readonly id: string;

    }
    interface RequirementEvent extends f2.dsl.cqrs.Event, s2.dsl.automate.model.WithS2Id<string>, s2.dsl.automate.WithId<string> {
        s2Id(): string;
        readonly id: string;

    }
}
export namespace cccev.s2.requirement.domain.command {
    interface RequirementAddRequirementsCommandDTO extends cccev.s2.requirement.domain.RequirementCommand {
        readonly id: string;
        readonly requirementIds: string[];

    }
    interface RequirementAddedRequirementsEventDTO extends cccev.s2.requirement.domain.RequirementEvent {
        readonly id: string;
        readonly requirementIds: string[];
        s2Id(): string;

    }
}
export namespace cccev.s2.requirement.domain.command {
    interface RequirementCreatedEventDTO extends cccev.s2.requirement.domain.RequirementEvent {
        readonly id: string;
        readonly identifier?: string;
        readonly kind: cccev.s2.requirement.domain.model.RequirementKind;
        readonly name?: string;
        readonly description?: string;
        readonly type?: string;
        readonly isDerivedFrom?: string[];
        readonly hasRequirement: string[];
        readonly hasQualifiedRelation: Record<string, string>[];
        readonly hasConcept: string[];
        readonly hasEvidenceTypeList: string[];
        readonly enablingCondition?: string;
        readonly enablingConditionDependencies: string[];
        readonly required: boolean;
        readonly validatingCondition?: string;
        readonly validatingConditionDependencies: string[];
        readonly order?: number;
        readonly properties?: Record<string, string>;
        readonly status: s2.dsl.automate.S2State/* cccev.s2.requirement.domain.RequirementState */;
        s2Id(): string;

    }
}
export namespace cccev.s2.requirement.domain.command {
    interface RequirementUpdateCommandDTO extends cccev.s2.requirement.domain.RequirementCommand {
        readonly id: string;
        readonly name?: string;
        readonly description?: string;
        readonly type?: string;
        readonly hasConcept: string[];
        readonly hasEvidenceTypeList: string[];
        readonly hasRequirement: string[];
        readonly hasQualifiedRelation: Record<string, string>[];
        readonly enablingCondition?: string;
        readonly enablingConditionDependencies: string[];
        readonly required: boolean;
        readonly validatingCondition?: string;
        readonly validatingConditionDependencies: string[];
        readonly order?: number;
        readonly properties?: Record<string, string>;

    }
    interface RequirementUpdatedEventDTO extends cccev.s2.requirement.domain.RequirementEvent {
        readonly id: string;
        readonly name?: string;
        readonly description?: string;
        readonly type?: string;
        readonly hasConcept: string[];
        readonly hasEvidenceTypeList: string[];
        readonly hasRequirement: string[];
        readonly hasQualifiedRelation: Record<string, string>[];
        readonly enablingCondition?: string;
        readonly enablingConditionDependencies: string[];
        readonly required: boolean;
        readonly validatingCondition?: string;
        readonly validatingConditionDependencies: string[];
        readonly order?: number;
        readonly properties?: Record<string, string>;
        s2Id(): string;

    }
}
export namespace cccev.core.certification.command {
    interface CertificationAddRequirementsCommandDTO {
        readonly id: string;
        readonly parentId?: string;
        readonly requirementIdentifiers: string[];

    }
    interface CertificationAddedRequirementsEventDTO {
        readonly id: string;
        readonly parentId?: string;
        readonly requirementCertificationIds: string[];

    }
}
export namespace cccev.core.certification.command {
    interface CertificationCreateCommandDTO {
        readonly id?: string;
        readonly requirementIdentifiers: string[];

    }
    interface CertificationCreatedEventDTO {
        readonly id: string;

    }
}
export namespace cccev.core.certification.command {
    interface CertificationFillValuesCommandDTO {
        readonly id: string;
        readonly rootRequirementCertificationId?: string;
        readonly values: Record<string, Nullable<string>>;

    }
    interface CertificationFilledValuesEventDTO {
        readonly id: string;
        readonly rootRequirementCertificationId?: string;

    }
}
export namespace cccev.core.certification.command {
    interface CertificationRemoveRequirementsCommandDTO {
        readonly id: string;
        readonly requirementIds: string[];

    }
    interface CertificationRemovedRequirementsEventDTO {
        readonly id: string;
        readonly requirementIds: string[];

    }
}
export namespace cccev.f2.evidence.domain.features.query {
    interface GetEvidenceTypeListsQueryDTO {
        readonly id: string;
        readonly requirement: string;
        readonly concept?: string;
        readonly evidenceType?: string;

    }
    interface GetEvidenceTypeListsQueryResultDTO {
        readonly evidenceTypeListMap: Record<string, cccev.f2.evidence.domain.model.EvidenceTypeListDTO>;
        readonly evidenceTypeListsOfEvidenceTypes: Record<string, string>[];
        readonly evidenceTypeLists: cccev.f2.evidence.domain.model.EvidenceTypeListChoicesDTO[];

    }
}
export namespace cccev.f2.evidence.domain.model {
    interface EvidenceTypeDTO extends cccev.dsl.model.EvidenceType {
        readonly evidence?: cccev.dsl.model.EvidenceDTO;
        readonly identifier: string;
        readonly name: string;
        readonly evidenceTypeClassification: cccev.dsl.model.Code;
        readonly validityPeriodConstraint?: cccev.dsl.model.PeriodOfTime;
        readonly issuingPlace?: cccev.dsl.model.CoreLocationLocation;

    }
}
export namespace cccev.f2.evidence.domain.model {
    interface EvidenceTypeListChoicesDTO {
        readonly evidenceTypeLists: string[];
        readonly isFilled: boolean;

    }
}
export namespace cccev.f2.evidence.domain.model {
    interface EvidenceTypeListDTO extends cccev.dsl.model.EvidenceTypeList {
        readonly specifiesEvidenceType: cccev.f2.evidence.domain.model.EvidenceTypeDTO[];
        readonly description: string;
        readonly identifier: string;
        readonly name: string;

    }
}
export namespace cccev.f2.unit.domain.command {
    interface DataUnitCreateCommandDTO {
        readonly identifier: string;
        readonly name: string;
        readonly description: string;
        readonly notation?: string;
        readonly type: string;
        readonly options?: cccev.f2.unit.domain.command.DataUnitOptionCreateCommandDTO[];

    }
    interface DataUnitOptionCreateCommandDTO {
        readonly identifier: string;
        readonly name: string;
        readonly value: string;
        readonly order: number;
        readonly icon?: city.smartb.fs.s2.file.domain.model.FilePathDTO;
        readonly color?: string;

    }
    interface DataUnitCreatedEventDTO {
        readonly id: string;
        readonly identifier: string;

    }
}
export namespace cccev.f2.unit.domain.command {
    interface DataUnitUpdateCommandDTO {
        readonly id: string;
        readonly name: string;
        readonly description: string;
        readonly notation?: string;
        readonly type: string;
        readonly options?: cccev.f2.unit.domain.command.DataUnitOptionUpdateCommandDTO[];

    }
    interface DataUnitOptionUpdateCommandDTO {
        readonly identifier: string;
        readonly name: string;
        readonly value: string;
        readonly order: number;
        readonly icon?: city.smartb.fs.s2.file.domain.model.FilePathDTO;
        readonly color?: string;

    }
    interface DataUnitUpdatedEventDTO {
        readonly id: string;
        readonly identifier: string;

    }
}
export namespace cccev.f2.unit.domain.model {
    interface DataUnitDTO {
        readonly id: string;
        readonly name: string;
        readonly description: string;
        readonly notation?: string;
        readonly type: string;
        readonly options?: cccev.f2.unit.domain.model.DataUnitOptionDTO[];

    }
}
export namespace cccev.f2.unit.domain.model {
    interface DataUnitFlatDTO {
        readonly id: string;
        readonly identifier: string;
        readonly name: string;
        readonly description: string;
        readonly notation?: string;
        readonly type: string;
        readonly optionIdentifiers?: string[];

    }
}
export namespace cccev.f2.unit.domain.model {
    interface DataUnitOptionDTO {
        readonly id: string;
        readonly identifier: string;
        readonly name: string;
        readonly value: string;
        readonly order: number;
        readonly icon?: city.smartb.fs.s2.file.domain.model.FilePathDTO;
        readonly color?: string;

    }
}
export namespace cccev.f2.unit.domain.model {
    const DataUnitTypeValues: {
        boolean(): string;
        date(): string;
        number(): string;
        string(): string;
    };
}
export namespace cccev.f2.unit.domain.query {
    interface DataUnitGetByIdentifierQueryDTO {
        readonly identifier: string;

    }
    interface DataUnitGetByIdentifierResultDTO {
        readonly item?: cccev.f2.unit.domain.model.DataUnitDTO;

    }
}
export namespace cccev.f2.unit.domain.query {
    interface DataUnitGetQueryDTO {
        readonly id: string;

    }
    interface DataUnitGetResultDTO {
        readonly item?: cccev.f2.unit.domain.model.DataUnitDTO;

    }
}
export namespace cccev.f2.concept.domain.command {
    interface InformationConceptCreateCommandDTO extends cccev.s2.concept.domain.command.InformationConceptCreateCommandDTO {
        readonly identifier?: string;
        readonly name: string;
        readonly hasUnit?: string;
        readonly description?: string;
        readonly expressionOfExpectedValue?: string;
        readonly dependsOn?: string[];

    }
    interface InformationConceptCreatedEventDTO extends cccev.s2.concept.domain.command.InformationConceptCreatedEventDTO {
        readonly id: string;
        readonly identifier?: string;
        readonly name: string;
        readonly hasUnit?: string;
        readonly description?: string;
        readonly expressionOfExpectedValue?: string;
        readonly dependsOn?: string[];
        readonly status: s2.dsl.automate.S2State/* cccev.s2.concept.domain.InformationConceptState */;
        s2Id(): string;

    }
}
export namespace cccev.f2.concept.domain.command {
    interface InformationConceptUpdateCommandDTO extends cccev.s2.concept.domain.command.InformationConceptUpdateCommandDTO {
        readonly id: string;
        readonly name: string;
        readonly description?: string;
        readonly expressionOfExpectedValue?: string;
        readonly dependsOn?: string[];

    }
    interface InformationConceptUpdatedEventDTO extends cccev.s2.concept.domain.command.InformationConceptUpdatedEventDTO {
        readonly id: string;
        readonly name: string;
        readonly description?: string;
        readonly expressionOfExpectedValue?: string;
        readonly dependsOn?: string[];
        readonly status: s2.dsl.automate.S2State/* cccev.s2.concept.domain.InformationConceptState */;
        s2Id(): string;

    }
}
export namespace cccev.f2.concept.domain.model {
    interface InformationConceptDTO {
        readonly id: string;
        readonly identifier?: string;
        readonly name: string;
        readonly unit?: cccev.f2.unit.domain.model.DataUnitDTO;
        readonly description?: string;
        readonly expressionOfExpectedValue?: string;
        readonly dependsOn?: string[];

    }
}
export namespace cccev.f2.concept.domain.model {
    interface InformationConceptFlatDTO {
        readonly id: string;
        readonly identifier: string;
        readonly name: string;
        readonly unitIdentifier?: string;
        readonly description?: string;
        readonly expressionOfExpectedValue?: string;
        readonly dependsOn?: string[];

    }
}
export namespace cccev.f2.concept.domain.model {
    interface RequestInformationConceptDTO extends cccev.dsl.model.InformationConcept {
        readonly evidenceTypeChoices: cccev.f2.evidence.domain.model.EvidenceTypeListChoicesDTO;
        readonly supportedValue: cccev.dsl.model.SupportedValueDTO;
        readonly identifier: string;
        readonly name: string;
        readonly unit: cccev.dsl.model.DataUnitDTO;
        readonly type?: cccev.dsl.model.Code;
        readonly description?: string;
        readonly expressionOfExpectedValue?: string;
        readonly dependsOn?: string[];

    }
}
export namespace cccev.f2.concept.domain.query {
    interface GetInformationConceptsQueryDTO {
        readonly id: string;
        readonly requirement: string;
        readonly evidenceType?: string;

    }
    interface GetInformationConceptsQueryResultDTO {
        readonly informationConcepts: cccev.f2.concept.domain.model.RequestInformationConceptDTO[];

    }
}
export namespace cccev.f2.concept.domain.query {
    interface InformationConceptGetByIdentifierQueryDTO {
        readonly identifier: string;

    }
    interface InformationConceptGetByIdentifierResultDTO {
        readonly item?: cccev.f2.concept.domain.model.InformationConceptDTO;

    }
}
export namespace cccev.f2.concept.domain.query {
    interface InformationConceptGetQueryDTO {
        readonly id: string;

    }
    interface InformationConceptGetResultDTO {
        readonly item?: cccev.f2.concept.domain.model.InformationConceptDTO;

    }
}
export namespace f2.client {
    interface F2Client {
        supplier<RESPONSE>(route: string, responseTypeInfo: io.ktor.util.reflect.TypeInfo): f2.dsl.fnc.F2Supplier<RESPONSE>;
        function<QUERY, RESPONSE>(route: string, queryTypeInfo: io.ktor.util.reflect.TypeInfo, responseTypeInfo: io.ktor.util.reflect.TypeInfo): f2.dsl.fnc.F2Function<QUERY, RESPONSE>;
        consumer<QUERY>(route: string, queryTypeInfo: io.ktor.util.reflect.TypeInfo): f2.dsl.fnc.F2Consumer<QUERY>;
        readonly type: f2.client.F2ClientType;
    }
}
export namespace f2.client.ktor.http {
    class HttpClientBuilder {
        constructor(json?: kotlinx.serialization.json.Json);
        build(urlBase: string): Promise<f2.client.F2Client/* f2.client.ktor.http.HttpF2Client */>;
    }
}
export namespace f2.client.ktor.rsocket {
    class RSocketF2Client implements f2.client.F2Client {
        constructor(rSocketClient: f2.client.ktor.rsocket.RSocketClient);
        get type(): f2.client.F2ClientType;
        supplier<RESPONSE>(route: string, typeInfo: io.ktor.util.reflect.TypeInfo): f2.dsl.fnc.F2Supplier<RESPONSE>;
        function<QUERY, RESPONSE>(route: string, queryTypeInfo: io.ktor.util.reflect.TypeInfo, responseTypeInfo: io.ktor.util.reflect.TypeInfo): f2.dsl.fnc.F2Function<QUERY, RESPONSE>;
        consumer<QUERY>(route: string, queryTypeInfo: io.ktor.util.reflect.TypeInfo): f2.dsl.fnc.F2Consumer<QUERY>;
    }
}
export namespace f2.client.ktor {
    abstract class Protocol {
        protected constructor();
    }
    const HTTP: {
    } & f2.client.ktor.Protocol;
    const HTTPS: {
    } & f2.client.ktor.Protocol;
    const WS: {
    } & f2.client.ktor.Protocol;
    const WSS: {
    } & f2.client.ktor.Protocol;
    const TCP: {
    } & f2.client.ktor.Protocol;
}
export namespace cccev.f2.concept.client {
    class InformationConceptClient /* implements cccev.f2.concept.domain.InformationConceptApi */ {
        constructor(client: f2.client.F2Client);
    }
}
export namespace cccev.f2.concept.client {
    function informationConceptClient(urlBase: string): f2.dsl.fnc.F2SupplierSingle<cccev.f2.concept.client.InformationConceptClient>;
}
export namespace cccev.f2.evidence.type.domain.command.list {
    interface EvidenceTypeListCreateCommandDTO extends cccev.s2.evidence.type.domain.command.list.EvidenceTypeListCreateCommandDTO {
        readonly identifier?: string;
        readonly name: string;
        readonly description: string;
        readonly specifiesEvidenceType: string[];

    }
    interface EvidenceTypeListCreatedEventDTO extends cccev.s2.evidence.type.domain.command.list.EvidenceTypeListCreatedEventDTO {
        readonly id: string;
        readonly identifier?: string;
        readonly name: string;
        readonly description: string;
        readonly specifiesEvidenceType: string[];
        readonly status: s2.dsl.automate.S2State/* cccev.s2.evidence.type.domain.EvidenceTypeListState */;
        s2Id(): string;

    }
}
export namespace cccev.f2.evidence.type.domain.command.list {
    interface EvidenceTypeListUpdateCommandDTO extends cccev.s2.evidence.type.domain.command.list.EvidenceTypeListUpdateCommandDTO {
        readonly id: string;
        readonly name: string;
        readonly description: string;
        readonly specifiesEvidenceType: string[];

    }
    interface EvidenceTypeListUpdatedEventDTO extends cccev.s2.evidence.type.domain.command.list.EvidenceTypeListUpdatedEventDTO {
        readonly id: string;
        s2Id(): string;

    }
}
export namespace cccev.f2.evidence.type.domain.command.type {
    interface EvidenceTypeCreateCommandDTO extends cccev.s2.evidence.type.domain.command.type.EvidenceTypeCreateCommandDTO {
        readonly identifier?: string;
        readonly name: string;
        readonly description: string;
        readonly validityPeriodConstraint?: number;

    }
    interface EvidenceTypeCreatedEventDTO extends cccev.s2.evidence.type.domain.command.type.EvidenceTypeCreatedEventDTO {
        readonly id: string;
        readonly identifier?: string;
        readonly name: string;
        readonly description: string;
        readonly validityPeriodConstraint?: number;
        readonly status: s2.dsl.automate.S2State/* cccev.s2.evidence.type.domain.EvidenceTypeState */;
        s2Id(): string;

    }
}
export namespace cccev.f2.evidence.type.domain.model {
    interface EvidenceTypeDTO {
        readonly id: string;
        readonly name: string;
        readonly description: string;
        readonly validityPeriodConstraint?: number;

    }
}
export namespace cccev.f2.evidence.type.domain.model {
    interface EvidenceTypeListDTO {
        readonly id: string;
        readonly name: string;
        readonly description: string;
        readonly specifiesEvidenceType: cccev.f2.evidence.type.domain.model.EvidenceTypeDTO[];

    }
}
export namespace cccev.f2.evidence.type.domain.query {
    interface EvidenceTypeGetByIdentifierQueryDTO {
        readonly identifier: string;

    }
    interface EvidenceTypeGetByIdentifierResultDTO {
        readonly item?: cccev.f2.evidence.type.domain.model.EvidenceTypeDTO;

    }
}
export namespace cccev.f2.evidence.type.domain.query {
    interface EvidenceTypeGetQueryDTO {
        readonly id: string;

    }
    interface EvidenceTypeGetResultDTO {
        readonly item?: cccev.f2.evidence.type.domain.model.EvidenceTypeDTO;

    }
}
export namespace cccev.f2.evidence.type.domain.query {
    interface EvidenceTypeListGetByIdentifierQueryDTO {
        readonly identifier: string;

    }
    interface EvidenceTypeListGetByIdentifierResultDTO {
        readonly item?: cccev.f2.evidence.type.domain.model.EvidenceTypeListDTO;

    }
}
export namespace cccev.f2.evidence.type.domain.query {
    interface EvidenceTypeListGetQueryDTO {
        readonly id: string;

    }
    interface EvidenceTypeListGetResultDTO {
        readonly item?: cccev.f2.evidence.type.domain.model.EvidenceTypeListDTO;

    }
}
export namespace cccev.f2.evidence.type.client {
    class EvidenceTypeClient /* implements cccev.f2.evidence.type.domain.EvidenceTypeApi */ {
        constructor(client: f2.client.F2Client);
    }
}
export namespace cccev.f2.evidence.type.client {
    function evidenceTypeClient(urlBase: string): f2.dsl.fnc.F2SupplierSingle<cccev.f2.evidence.type.client.EvidenceTypeClient>;
}
export namespace cccev.s2.framework.domain {
    interface FrameworkInitCommand extends s2.dsl.automate.S2InitCommand {

    }
    interface FrameworkCommand extends s2.dsl.automate.S2Command<string> {
        readonly id: string;

    }
    interface FrameworkEvent extends f2.dsl.cqrs.Event, s2.dsl.automate.model.WithS2Id<string>, s2.dsl.automate.WithId<string> {
        s2Id(): string;
        readonly id: string;

    }
}
export namespace cccev.s2.framework.domain.command {
    interface FrameworkCreateCommandDTO extends cccev.s2.framework.domain.FrameworkInitCommand {
        readonly identifier?: string;
        readonly name: string;

    }
    interface FrameworkCreatedEventDTO extends cccev.s2.framework.domain.FrameworkEvent {
        readonly id: string;
        readonly identifier?: string;
        readonly name: string;
        s2Id(): string;

    }
}
export namespace cccev.s2.framework.domain.model {
    interface FrameworkDTO {
        readonly id: string;
        readonly identifier?: string;
        readonly name: string;

    }
}
export namespace cccev.f2.framework.domain.command {
    interface FrameworkCreateCommandDTO extends cccev.s2.framework.domain.command.FrameworkCreateCommandDTO {
        readonly identifier?: string;
        readonly name: string;

    }
    interface FrameworkCreatedEventDTO extends cccev.s2.framework.domain.command.FrameworkCreatedEventDTO {
        readonly id: string;
        readonly identifier?: string;
        readonly name: string;
        s2Id(): string;

    }
}
export namespace cccev.f2.framework.domain.model {
    interface FrameworkDTO extends cccev.s2.framework.domain.model.FrameworkDTO {
        readonly id: string;
        readonly identifier?: string;
        readonly name: string;

    }
}
export namespace cccev.f2.framework.domain.query {
    interface FrameworkGetByIdentifierQueryDTO {
        readonly identifier: string;

    }
    interface FrameworkGetByIdentifierResultDTO {
        readonly item?: cccev.s2.framework.domain.model.FrameworkDTO;

    }
}
export namespace cccev.f2.framework.domain.query {
    interface FrameworkGetQueryDTO {
        readonly id: string;

    }
    interface FrameworkGetResultDTO {
        readonly item?: cccev.s2.framework.domain.model.FrameworkDTO;

    }
}
export namespace cccev.f2.framework.client {
    class FrameworkClient /* implements cccev.f2.framework.domain.FrameworkApi */ {
        constructor(client: f2.client.F2Client);
    }
}
export namespace cccev.f2.framework.client {
    function frameworkClient(urlBase: string): f2.dsl.fnc.F2SupplierSingle<cccev.f2.framework.client.FrameworkClient>;
}
export namespace cccev.f2.requirement.domain.command {
    interface ConstraintCreateCommandDTO extends cccev.f2.requirement.domain.command.RequirementCreateCommandDTO {
        readonly identifier?: string;
        readonly kind: string;
        readonly name?: string;
        readonly description?: string;
        readonly type?: string;
        readonly isDerivedFrom: string[];
        readonly hasConcept: string[];
        readonly hasEvidenceTypeList: string[];
        readonly hasRequirement: string[];
        hasQualifiedRelation: Record<string, string>[];
        readonly enablingCondition?: string;
        readonly enablingConditionDependencies: string[];
        readonly required: boolean;
        readonly validatingCondition?: string;
        readonly validatingConditionDependencies: string[];
        readonly order?: number;
        readonly properties?: Record<string, string>;

    }
    interface ConstraintCreatedEventDTO extends cccev.s2.requirement.domain.command.RequirementCreatedEventDTO {
        readonly id: string;
        readonly identifier?: string;
        readonly kind: cccev.s2.requirement.domain.model.RequirementKind;
        readonly name?: string;
        readonly description?: string;
        readonly type?: string;
        readonly isDerivedFrom?: string[];
        readonly hasRequirement: string[];
        readonly hasQualifiedRelation: Record<string, string>[];
        readonly hasConcept: string[];
        readonly hasEvidenceTypeList: string[];
        readonly enablingCondition?: string;
        readonly enablingConditionDependencies: string[];
        readonly required: boolean;
        readonly validatingCondition?: string;
        readonly validatingConditionDependencies: string[];
        readonly order?: number;
        readonly properties?: Record<string, string>;
        readonly status: s2.dsl.automate.S2State/* cccev.s2.requirement.domain.RequirementState */;
        s2Id(): string;

    }
}
export namespace cccev.f2.requirement.domain.command {
    interface CriterionCreateCommandDTO extends cccev.f2.requirement.domain.command.RequirementCreateCommandDTO {
        readonly identifier?: string;
        readonly kind: string;
        readonly name?: string;
        readonly description?: string;
        readonly type?: string;
        readonly isDerivedFrom: string[];
        readonly hasConcept: string[];
        readonly hasEvidenceTypeList: string[];
        readonly hasRequirement: string[];
        hasQualifiedRelation: Record<string, string>[];
        readonly enablingCondition?: string;
        readonly enablingConditionDependencies: string[];
        readonly required: boolean;
        readonly validatingCondition?: string;
        readonly validatingConditionDependencies: string[];
        readonly order?: number;
        readonly properties?: Record<string, string>;

    }
    interface CriterionCreatedEventDTO extends cccev.s2.requirement.domain.command.RequirementCreatedEventDTO {
        readonly id: string;
        readonly identifier?: string;
        readonly kind: cccev.s2.requirement.domain.model.RequirementKind;
        readonly name?: string;
        readonly description?: string;
        readonly type?: string;
        readonly isDerivedFrom?: string[];
        readonly hasRequirement: string[];
        readonly hasQualifiedRelation: Record<string, string>[];
        readonly hasConcept: string[];
        readonly hasEvidenceTypeList: string[];
        readonly enablingCondition?: string;
        readonly enablingConditionDependencies: string[];
        readonly required: boolean;
        readonly validatingCondition?: string;
        readonly validatingConditionDependencies: string[];
        readonly order?: number;
        readonly properties?: Record<string, string>;
        readonly status: s2.dsl.automate.S2State/* cccev.s2.requirement.domain.RequirementState */;
        s2Id(): string;

    }
}
export namespace cccev.f2.requirement.domain.command {
    interface InformationRequirementCreateCommandDTO extends cccev.f2.requirement.domain.command.RequirementCreateCommandDTO {
        readonly identifier?: string;
        readonly kind: string;
        readonly name?: string;
        readonly description?: string;
        readonly type?: string;
        readonly isDerivedFrom: string[];
        readonly hasConcept: string[];
        readonly hasEvidenceTypeList: string[];
        readonly hasRequirement: string[];
        hasQualifiedRelation: Record<string, string>[];
        readonly enablingCondition?: string;
        readonly enablingConditionDependencies: string[];
        readonly required: boolean;
        readonly validatingCondition?: string;
        readonly validatingConditionDependencies: string[];
        readonly order?: number;
        readonly properties?: Record<string, string>;

    }
    interface InformationRequirementCreatedEventDTO extends cccev.s2.requirement.domain.command.RequirementCreatedEventDTO {
        readonly id: string;
        readonly identifier?: string;
        readonly kind: cccev.s2.requirement.domain.model.RequirementKind;
        readonly name?: string;
        readonly description?: string;
        readonly type?: string;
        readonly isDerivedFrom?: string[];
        readonly hasRequirement: string[];
        readonly hasQualifiedRelation: Record<string, string>[];
        readonly hasConcept: string[];
        readonly hasEvidenceTypeList: string[];
        readonly enablingCondition?: string;
        readonly enablingConditionDependencies: string[];
        readonly required: boolean;
        readonly validatingCondition?: string;
        readonly validatingConditionDependencies: string[];
        readonly order?: number;
        readonly properties?: Record<string, string>;
        readonly status: s2.dsl.automate.S2State/* cccev.s2.requirement.domain.RequirementState */;
        s2Id(): string;

    }
}
export namespace cccev.f2.requirement.domain.command {
    interface RequirementAddRequirementsCommandDTO extends cccev.s2.requirement.domain.command.RequirementAddRequirementsCommandDTO {
        readonly id: string;
        readonly requirementIds: string[];

    }
    interface RequirementAddedRequirementsEventDTO extends cccev.s2.requirement.domain.command.RequirementAddedRequirementsEventDTO {
        readonly id: string;
        readonly requirementIds: string[];
        s2Id(): string;

    }
}
export namespace cccev.f2.requirement.domain.command {
    interface RequirementCreateCommandDTO {
        readonly identifier?: string;
        readonly kind: string;
        readonly name?: string;
        readonly description?: string;
        readonly type?: string;
        readonly isDerivedFrom: string[];
        readonly hasConcept: string[];
        readonly hasEvidenceTypeList: string[];
        readonly hasRequirement: string[];
        hasQualifiedRelation: Record<string, string>[];
        readonly enablingCondition?: string;
        readonly enablingConditionDependencies: string[];
        readonly required: boolean;
        readonly validatingCondition?: string;
        readonly validatingConditionDependencies: string[];
        readonly order?: number;
        readonly properties?: Record<string, string>;

    }
    interface RequirementCreatedEventDTO extends cccev.s2.requirement.domain.command.RequirementCreatedEventDTO {
        readonly id: string;
        readonly identifier?: string;
        readonly kind: cccev.s2.requirement.domain.model.RequirementKind;
        readonly name?: string;
        readonly description?: string;
        readonly type?: string;
        readonly isDerivedFrom?: string[];
        readonly hasRequirement: string[];
        readonly hasQualifiedRelation: Record<string, string>[];
        readonly hasConcept: string[];
        readonly hasEvidenceTypeList: string[];
        readonly enablingCondition?: string;
        readonly enablingConditionDependencies: string[];
        readonly required: boolean;
        readonly validatingCondition?: string;
        readonly validatingConditionDependencies: string[];
        readonly order?: number;
        readonly properties?: Record<string, string>;
        readonly status: s2.dsl.automate.S2State/* cccev.s2.requirement.domain.RequirementState */;
        s2Id(): string;

    }
}
export namespace cccev.f2.requirement.domain.command {
    interface RequirementUpdateCommandDTO extends cccev.s2.requirement.domain.command.RequirementUpdateCommandDTO {
        readonly id: string;
        readonly name?: string;
        readonly description?: string;
        readonly type?: string;
        readonly hasConcept: string[];
        readonly hasEvidenceTypeList: string[];
        readonly hasRequirement: string[];
        readonly hasQualifiedRelation: Record<string, string>[];
        readonly enablingCondition?: string;
        readonly enablingConditionDependencies: string[];
        readonly required: boolean;
        readonly validatingCondition?: string;
        readonly validatingConditionDependencies: string[];
        readonly order?: number;
        readonly properties?: Record<string, string>;

    }
    interface RequirementUpdatedEventDTO extends cccev.s2.requirement.domain.command.RequirementUpdatedEventDTO {
        readonly id: string;
        readonly name?: string;
        readonly description?: string;
        readonly type?: string;
        readonly hasConcept: string[];
        readonly hasEvidenceTypeList: string[];
        readonly hasRequirement: string[];
        readonly hasQualifiedRelation: Record<string, string>[];
        readonly enablingCondition?: string;
        readonly enablingConditionDependencies: string[];
        readonly required: boolean;
        readonly validatingCondition?: string;
        readonly validatingConditionDependencies: string[];
        readonly order?: number;
        readonly properties?: Record<string, string>;
        s2Id(): string;

    }
}
export namespace cccev.f2.requirement.domain.model {
    interface RequirementDTO {
        readonly id: string;
        readonly identifier?: string;
        readonly kind: string;
        readonly description?: string;
        readonly type?: string;
        readonly name?: string;
        readonly hasRequirement: cccev.f2.requirement.domain.model.RequirementDTO[];
        readonly hasQualifiedRelation: Record<string, string>[];
        readonly hasConcept: cccev.f2.concept.domain.model.InformationConceptDTO[];
        readonly hasEvidenceTypeList: cccev.f2.evidence.type.domain.model.EvidenceTypeListDTO[];
        readonly enablingCondition?: string;
        readonly enablingConditionDependencies: cccev.f2.concept.domain.model.InformationConceptDTO[];
        readonly required: boolean;
        readonly validatingCondition?: string;
        readonly validatingConditionDependencies: cccev.f2.concept.domain.model.InformationConceptDTO[];
        readonly order?: number;
        readonly properties?: Record<string, string>;

    }
}
export namespace cccev.f2.requirement.domain.model {
    interface RequirementFlatDTO {
        readonly id: string;
        readonly identifier: string;
        readonly kind: string;
        readonly description?: string;
        readonly type?: string;
        readonly name?: string;
        readonly hasRequirement: string[];
        readonly hasConcept: string[];
        readonly hasEvidenceTypeList: string[];
        readonly enablingCondition?: string;
        readonly enablingConditionDependencies: string[];
        readonly required: boolean;
        readonly validatingCondition?: string;
        readonly validatingConditionDependencies: string[];
        readonly order?: number;
        readonly properties?: Record<string, string>;

    }
}
export namespace cccev.f2.requirement.domain.query {
    interface RequirementGetByIdentifierQueryDTO {
        readonly identifier: string;

    }
    interface RequirementGetByIdentifierResultDTO {
        readonly item?: cccev.f2.requirement.domain.model.RequirementDTO;

    }
}
export namespace cccev.f2.requirement.domain.query {
    interface RequirementGetQueryDTO {
        readonly id: string;

    }
    interface RequirementGetResultDTO {
        readonly item?: cccev.f2.requirement.domain.model.RequirementDTO;

    }
}
export namespace cccev.f2.requirement.domain.query {
    interface RequirementListChildrenByTypeQueryDTO {
        readonly identifiers: string[];
        readonly type: string;

    }
    interface RequirementListChildrenByTypeResultDTO {
        readonly items?: cccev.f2.requirement.domain.model.RequirementDTO[];

    }
}
export namespace cccev.f2.requirement.domain.query {
    interface RequirementListQueryDTO {
        readonly parentId?: string;
        readonly conceptId?: string;
        readonly evidenceTypeId?: string;

    }
    interface RequirementListResultDTO {
        readonly requirements: cccev.f2.requirement.domain.model.RequirementDTO[];

    }
}
export namespace cccev.f2.certification.domain.command {
    interface CertificationAddRequirementsCommandDTO extends cccev.core.certification.command.CertificationAddRequirementsCommandDTO {
        readonly id: string;
        readonly parentId?: string;
        readonly requirementIdentifiers: string[];

    }
    interface CertificationAddedRequirementsEventDTO extends cccev.core.certification.command.CertificationAddedRequirementsEventDTO {
        readonly id: string;
        readonly parentId?: string;
        readonly requirementCertificationIds: string[];

    }
}
export namespace cccev.f2.certification.domain.command {
    interface CertificationCreateCommandDTO extends cccev.core.certification.command.CertificationCreateCommandDTO {
        readonly id?: string;
        readonly requirementIdentifiers: string[];

    }
    interface CertificationCreatedEventDTO extends cccev.core.certification.command.CertificationCreatedEventDTO {
        readonly id: string;

    }
}
export namespace cccev.f2.certification.domain.command {
    interface CertificationFillValuesCommandDTO extends cccev.core.certification.command.CertificationFillValuesCommandDTO {
        readonly id: string;
        readonly rootRequirementCertificationId?: string;
        readonly values: Record<string, Nullable<string>>;

    }
    interface CertificationFilledValuesEventDTO extends cccev.core.certification.command.CertificationFilledValuesEventDTO {
        readonly id: string;
        readonly rootRequirementCertificationId?: string;

    }
}
export namespace cccev.f2.certification.domain.command {
    interface CertificationRemoveRequirementsCommandDTO extends cccev.core.certification.command.CertificationRemoveRequirementsCommandDTO {
        readonly id: string;
        readonly requirementIds: string[];

    }
    interface CertificationRemovedRequirementsEventDTO extends cccev.core.certification.command.CertificationRemovedRequirementsEventDTO {
        readonly id: string;
        readonly requirementIds: string[];

    }
}
export namespace cccev.f2.certification.domain.model {
    interface CertificationFlatDTO {
        readonly id: string;
        readonly requirementCertificationIds: string[];

    }
}
export namespace cccev.f2.certification.domain.model {
    interface RequirementCertificationFlatDTO {
        readonly id: string;
        readonly requirementIdentifier: string;
        readonly subCertificationIds: string[];
        readonly valueIds: string[];
        readonly isEnabled: boolean;
        readonly isValidated: boolean;
        readonly hasAllValues: boolean;
        readonly isFulfilled: boolean;

    }
}
export namespace cccev.f2.certification.domain.model {
    interface SupportedValueFlatDTO {
        readonly id: string;
        readonly value?: string;
        readonly conceptIdentifier: string;

    }
}
export namespace cccev.f2.certification.domain.query {
    interface CertificationGetQueryDTO {
        readonly id: string;

    }
    interface CertificationGetResultDTO {
        readonly certification?: cccev.f2.certification.domain.model.CertificationFlatDTO;
        readonly requirementCertifications: Record<string, cccev.f2.certification.domain.model.RequirementCertificationFlatDTO>;
        readonly requirements: Record<string, cccev.f2.requirement.domain.model.RequirementFlatDTO>;
        readonly concepts: Record<string, cccev.f2.concept.domain.model.InformationConceptFlatDTO>;
        readonly units: Record<string, cccev.f2.unit.domain.model.DataUnitFlatDTO>;
        readonly unitOptions: Record<string, cccev.f2.unit.domain.model.DataUnitOptionDTO>;
        readonly supportedValues: Record<string, cccev.f2.certification.domain.model.SupportedValueFlatDTO>;

    }
}
export namespace cccev.f2.certification.client {
    class CertificationClient /* implements cccev.f2.certification.domain.CertificationApi */ {
        constructor(client: f2.client.F2Client);
        get client(): f2.client.F2Client;
    }
}
export namespace cccev.f2.certification.client {
    function certificationClient(urlBase: string): f2.dsl.fnc.F2SupplierSingle<cccev.f2.certification.client.CertificationClient>;
}
export namespace cccev.s2.requirement.client {
    class RequirementClient /* implements cccev.f2.requirement.domain.RequirementApi */ {
        constructor(client: f2.client.F2Client);
    }
}
export namespace cccev.s2.requirement.client {
    function requirementClient(urlBase: string): f2.dsl.fnc.F2SupplierSingle<cccev.s2.requirement.client.RequirementClient>;
}
export namespace cccev.f2.unit.client {
    class DataUnitClient /* implements cccev.f2.unit.domain.DataUnitApi */ {
        constructor(client: f2.client.F2Client);
    }
}
export namespace cccev.f2.unit.client {
    function dataUnitClient(urlBase: string): f2.dsl.fnc.F2SupplierSingle<cccev.f2.unit.client.DataUnitClient>;
}
export namespace city.smartb.registry.f2.dcs.domain.command {
    interface DataCollectionStepDefineCommandDTO {
        readonly identifier: string;
        readonly label: string;
        readonly description?: string;
        readonly sections: city.smartb.registry.f2.dcs.domain.model.DataSectionDTO[];
        readonly properties?: Record<string, string>;

    }
    interface DataCollectionStepDefinedEventDTO {
        readonly identifier: string;

    }
}
export namespace city.smartb.registry.f2.dcs.domain.command {
    interface DataCollectionStepFillCommandDTO {
        readonly identifier: string;
        readonly certificationId: string;
        readonly values: Record<string, Nullable<string>>;

    }
    interface DataCollectionStepFilledEventDTO {
        readonly identifier: string;
        readonly certificationId: string;

    }
}
export namespace city.smartb.registry.f2.dcs.domain.model {
    interface DataCollectionStepDTO {
        readonly identifier: string;
        readonly label: string;
        readonly description?: string;
        readonly sections: city.smartb.registry.f2.dcs.domain.model.DataSectionDTO[];
        readonly properties?: Record<string, string>;

    }
}
export namespace city.smartb.registry.f2.dcs.domain.model {
    interface DataConditionDTO {
        readonly identifier: string;
        readonly type: string;
        readonly expression: string;
        readonly dependencies: string[];
        readonly error?: string;

    }
}
export namespace city.smartb.registry.f2.dcs.domain.model {
    const DataConditionTypeValues: {
        display(): string;
        validator(): string;
        get all(): kotlin.collections.Set<string>;
    };
}
export namespace city.smartb.registry.f2.dcs.domain.model {
    interface DataFieldDTO {
        readonly name: string;
        readonly label: string;
        readonly type: string;
        readonly dataType: string;
        readonly required: boolean;
        readonly options?: city.smartb.registry.f2.dcs.domain.model.DataFieldOptionDTO[];
        readonly conditions?: city.smartb.registry.f2.dcs.domain.model.DataConditionDTO[];
        readonly properties?: Record<string, string>;

    }
}
export namespace city.smartb.registry.f2.dcs.domain.model {
    interface DataFieldOptionDTO {
        readonly key: string;
        readonly label: string;
        readonly icon?: city.smartb.fs.s2.file.domain.model.FilePathDTO;
        readonly color?: string;

    }
}
export namespace city.smartb.registry.f2.dcs.domain.model {
    const DataFieldTypeValues: {
        textField(): string;
        select(): string;
        autoComplete(): string;
        checkBox(): string;
        datePicker(): string;
        radioChoices(): string;
        multiChoices(): string;
        dropPicture(): string;
        documentHandler(): string;
        map(): string;
        get all(): kotlin.collections.Set<string>;
    };
}
export namespace city.smartb.registry.f2.dcs.domain.model {
    interface DataSectionDTO {
        readonly identifier: string;
        readonly label?: string;
        readonly description?: string;
        readonly fields: city.smartb.registry.f2.dcs.domain.model.DataFieldDTO[];
        readonly properties?: Record<string, string>;

    }
}
export namespace city.smartb.registry.f2.dcs.domain.model {
    interface SectionConditionDTO {
        readonly identifier: string;
        readonly type: string;
        readonly expression: string;
        readonly dependencies: string[];
        readonly message?: string;

    }
}
export namespace city.smartb.registry.f2.dcs.domain.model {
    const SectionConditionTypeValues: {
        error(): string;
        warning(): string;
        info(): string;
    };
}
export namespace city.smartb.registry.f2.dcs.domain.query {
    interface DataCollectionStepGetQueryDTO {
        readonly identifier: string;
        readonly certificationId?: string;

    }
    interface DataCollectionStepGetResultDTO {
        readonly structure: city.smartb.registry.f2.dcs.domain.model.DataCollectionStepDTO;
        readonly values: Record<string, Nullable<string>>;

    }
}
export as namespace registry_dcs_f2_domain;