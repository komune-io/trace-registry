export declare namespace f2.dsl.fnc {
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
export declare namespace f2.client {
    interface F2Client {
        supplier<RESPONSE>(route: string, responseTypeInfo: io.ktor.util.reflect.TypeInfo): f2.dsl.fnc.F2Supplier<RESPONSE>;
        function<QUERY, RESPONSE>(route: string, queryTypeInfo: io.ktor.util.reflect.TypeInfo, responseTypeInfo: io.ktor.util.reflect.TypeInfo): f2.dsl.fnc.F2Function<QUERY, RESPONSE>;
        consumer<QUERY>(route: string, queryTypeInfo: io.ktor.util.reflect.TypeInfo): f2.dsl.fnc.F2Consumer<QUERY>;
        readonly type: f2.client.F2ClientType;
    }
}
export declare namespace f2.dsl.cqrs {
    interface Command extends f2.dsl.cqrs.Message {

    }
}
export declare namespace f2.dsl.cqrs {
    interface Event extends f2.dsl.cqrs.Message {

    }
}
export declare namespace f2.dsl.cqrs {
    interface Message {

    }
}
export declare namespace f2.dsl.cqrs {
    interface Query extends f2.dsl.cqrs.Message {

    }
}
export declare namespace f2.dsl.cqrs.error {
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
        
    }
}
export declare namespace f2.dsl.cqrs.exception {
    class F2Exception /* extends kotlin.RuntimeException */ {
        constructor(error: f2.dsl.cqrs.error.F2ErrorDTO, cause?: Error);
        get error(): f2.dsl.cqrs.error.F2ErrorDTO;
        
    }
}
export declare namespace f2.dsl.cqrs.filter {
    interface Match<T> {
        readonly negative: boolean;
        map<R>(transform: (p0: T) => R): f2.dsl.cqrs.filter.Match<R>;
        not(): f2.dsl.cqrs.filter.Match<T>;
        and(match: f2.dsl.cqrs.filter.Match<T>): f2.dsl.cqrs.filter.Match<T>;
        or(match: f2.dsl.cqrs.filter.Match<T>): f2.dsl.cqrs.filter.Match<T>;

    }
}
export declare namespace f2.dsl.cqrs.filter {
    interface SortDTO {
        readonly property: string;
        readonly ascending: boolean;
        readonly nullsFirst?: boolean;

    }
}
export declare namespace f2.dsl.cqrs.page {
    interface PageDTO<OBJECT> {
        readonly total: number;
        readonly items: OBJECT[];

    }
    class Page<OBJECT> implements f2.dsl.cqrs.page.PageDTO<OBJECT> {
        constructor(total: number, items: OBJECT[]);
        get total(): number;
        get items(): OBJECT[];
        
    }
}
export declare namespace f2.dsl.cqrs.page {
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
        
    }
    class PageQueryResult<OBJECT> implements f2.dsl.cqrs.page.PageQueryResultDTO<OBJECT> {
        constructor(pagination?: f2.dsl.cqrs.page.OffsetPagination, total: number, items: OBJECT[]);
        get pagination(): Nullable<f2.dsl.cqrs.page.OffsetPagination>;
        get total(): number;
        get items(): OBJECT[];
        
    }
}
export declare namespace f2.dsl.cqrs.page {
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
        
    }
    class PagePagination implements f2.dsl.cqrs.page.PagePaginationDTO {
        constructor(page?: number, size?: number);
        get page(): Nullable<number>;
        get size(): Nullable<number>;
        
    }
}
export declare namespace f2.client.ktor.http.plugin.model {
    abstract class AuthRealm {
        protected constructor(serverUrl: string, realmId: string, clientId: string, redirectUrl?: string);
        get serverUrl(): string;
        get realmId(): string;
        get clientId(): string;
        get redirectUrl(): Nullable<string>;
    }
    class AuthRealmPassword extends f2.client.ktor.http.plugin.model.AuthRealm {
        constructor(serverUrl: string, realmId: string, redirectUrl: string, clientId: string, username: string, password: string);
        get serverUrl(): string;
        get realmId(): string;
        get redirectUrl(): string;
        get clientId(): string;
        get username(): string;
        get password(): string;
    }
    class AuthRealmClientSecret extends f2.client.ktor.http.plugin.model.AuthRealm {
        constructor(serverUrl: string, realmId: string, clientId: string, redirectUrl?: string, clientSecret: string, isPublic?: boolean);
        get serverUrl(): string;
        get realmId(): string;
        get clientId(): string;
        get redirectUrl(): Nullable<string>;
        get clientSecret(): string;
        get isPublic(): boolean;
    }
}
export declare namespace f2.client.ktor.http {
    class HttpClientBuilder {
        constructor(json?: kotlinx.serialization.json.Json);
        build(urlBase: string): Promise<f2.client.F2Client/* f2.client.ktor.http.HttpF2Client */>;
        static httpClient$default($this: f2.client.ktor.http.HttpClientBuilder, json?: kotlinx.serialization.json.Json): io.ktor.client.HttpClient;
    }
}
export declare namespace f2.client.ktor.rsocket {
    class RSocketF2Client implements f2.client.F2Client {
        constructor(rSocketClient: f2.client.ktor.rsocket.RSocketClient);
        get type(): f2.client.F2ClientType;
        supplier<RESPONSE>(route: string, typeInfo: io.ktor.util.reflect.TypeInfo): f2.dsl.fnc.F2Supplier<RESPONSE>;
        function<QUERY, RESPONSE>(route: string, queryTypeInfo: io.ktor.util.reflect.TypeInfo, responseTypeInfo: io.ktor.util.reflect.TypeInfo): f2.dsl.fnc.F2Function<QUERY, RESPONSE>;
        consumer<QUERY>(route: string, queryTypeInfo: io.ktor.util.reflect.TypeInfo): f2.dsl.fnc.F2Consumer<QUERY>;
    }
}
export declare namespace f2.client.ktor {
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
export declare namespace io.komune.im.commons.auth {
    interface AuthedUserDTO {
        readonly id: string;
        readonly identifier?: string;
        readonly memberOf?: string;
        readonly roles: Array<string>;

    }
}
export declare namespace io.komune.im.commons.auth {
    abstract class ImRole {
        private constructor();
        get identifier(): string;
        static get ORCHESTRATOR(): io.komune.im.commons.auth.ImRole & {
            get name(): "ORCHESTRATOR";
            get ordinal(): 0;
        };
        static get ORCHESTRATOR_ADMIN(): io.komune.im.commons.auth.ImRole & {
            get name(): "ORCHESTRATOR_ADMIN";
            get ordinal(): 1;
        };
        static get ORCHESTRATOR_USER(): io.komune.im.commons.auth.ImRole & {
            get name(): "ORCHESTRATOR_USER";
            get ordinal(): 2;
        };
        static get IM_USER_READ(): io.komune.im.commons.auth.ImRole & {
            get name(): "IM_USER_READ";
            get ordinal(): 3;
        };
        static get IM_USER_WRITE(): io.komune.im.commons.auth.ImRole & {
            get name(): "IM_USER_WRITE";
            get ordinal(): 4;
        };
        static get IM_ORGANIZATION_READ(): io.komune.im.commons.auth.ImRole & {
            get name(): "IM_ORGANIZATION_READ";
            get ordinal(): 5;
        };
        static get IM_ORGANIZATION_WRITE(): io.komune.im.commons.auth.ImRole & {
            get name(): "IM_ORGANIZATION_WRITE";
            get ordinal(): 6;
        };
        static get IM_MY_ORGANIZATION_WRITE(): io.komune.im.commons.auth.ImRole & {
            get name(): "IM_MY_ORGANIZATION_WRITE";
            get ordinal(): 7;
        };
        static get IM_APIKEY_READ(): io.komune.im.commons.auth.ImRole & {
            get name(): "IM_APIKEY_READ";
            get ordinal(): 8;
        };
        static get IM_APIKEY_WRITE(): io.komune.im.commons.auth.ImRole & {
            get name(): "IM_APIKEY_WRITE";
            get ordinal(): 9;
        };
        static get IM_SPACE_READ(): io.komune.im.commons.auth.ImRole & {
            get name(): "IM_SPACE_READ";
            get ordinal(): 10;
        };
        static get IM_SPACE_WRITE(): io.komune.im.commons.auth.ImRole & {
            get name(): "IM_SPACE_WRITE";
            get ordinal(): 11;
        };
        static get IM_ROLE_READ(): io.komune.im.commons.auth.ImRole & {
            get name(): "IM_ROLE_READ";
            get ordinal(): 12;
        };
        static get IM_ROLE_WRITE(): io.komune.im.commons.auth.ImRole & {
            get name(): "IM_ROLE_WRITE";
            get ordinal(): 13;
        };
        static values(): Array<io.komune.im.commons.auth.ImRole>;
        static valueOf(value: string): io.komune.im.commons.auth.ImRole;
        get name(): "ORCHESTRATOR" | "ORCHESTRATOR_ADMIN" | "ORCHESTRATOR_USER" | "IM_USER_READ" | "IM_USER_WRITE" | "IM_ORGANIZATION_READ" | "IM_ORGANIZATION_WRITE" | "IM_MY_ORGANIZATION_WRITE" | "IM_APIKEY_READ" | "IM_APIKEY_WRITE" | "IM_SPACE_READ" | "IM_SPACE_WRITE" | "IM_ROLE_READ" | "IM_ROLE_WRITE";
        get ordinal(): 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
    }
}
export declare namespace io.komune.im.commons.exception {
    const ExceptionCodes: {
        privilegeWrongTarget(): number;
    };
}
export declare namespace io.komune.im.commons.model {
    interface AddressDTO {
        readonly street: string;
        readonly postalCode: string;
        readonly city: string;

    }
}
export declare namespace io.komune.im.commons.model {
    abstract class AuthRealm {
        protected constructor(serverUrl: string, realmId: string, clientId: string, redirectUrl?: string, space: string);
        get serverUrl(): string;
        get realmId(): string;
        get clientId(): string;
        get redirectUrl(): Nullable<string>;
        get space(): string;
    }
    class AuthRealmPassword extends io.komune.im.commons.model.AuthRealm {
        constructor(serverUrl: string, realmId: string, redirectUrl: string, clientId: string, username: string, password: string, space: string);
        get serverUrl(): string;
        get realmId(): string;
        get redirectUrl(): string;
        get clientId(): string;
        get username(): string;
        get password(): string;
        get space(): string;
        copy(serverUrl?: string, realmId?: string, redirectUrl?: string, clientId?: string, username?: string, password?: string, space?: string): io.komune.im.commons.model.AuthRealmPassword;
        toString(): string;
        hashCode(): number;
        equals(other?: any): boolean;
    }
    class AuthRealmClientSecret extends io.komune.im.commons.model.AuthRealm {
        constructor(serverUrl: string, realmId: string, clientId: string, redirectUrl?: string, clientSecret: string, space: string);
        get serverUrl(): string;
        get realmId(): string;
        get clientId(): string;
        get redirectUrl(): Nullable<string>;
        get clientSecret(): string;
        get space(): string;
        copy(serverUrl?: string, realmId?: string, clientId?: string, redirectUrl?: string, clientSecret?: string, space?: string): io.komune.im.commons.model.AuthRealmClientSecret;
        toString(): string;
        hashCode(): number;
        equals(other?: any): boolean;
    }
}
export declare namespace io.komune.im.commons.http {
    class ClientJs {
        constructor();
        protected doCall<T>(fnc: any /*Suspend functions are not supported*/): Promise<T>;
    }
}
export declare namespace io.komune.im.core.user.domain.command {
    interface UserDeleteCommandDTO {
        readonly id: string;

    }
    interface UserDeletedEventDTO {
        readonly id: string;

    }
}
export declare namespace io.komune.im.core.organization.domain.command {
    interface OrganizationDeleteCommandDTO extends f2.dsl.cqrs.Command {
        readonly id: string;

    }
    interface OrganizationDeletedEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;

    }
}
export declare namespace io.komune.im.f2.privilege.domain {
    const PrivilegePolicies: {
        canGet(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        canList(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        canDefine(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
    };
}
export declare namespace io.komune.im.f2.privilege.domain.model {
    interface PrivilegeDTO {
        readonly id: string;
        readonly identifier: string;
        readonly description: string;
        readonly type: string;

    }
}
export declare namespace io.komune.im.f2.privilege.domain.permission.command {
    interface PermissionDefineCommandDTO {
        readonly identifier: string;
        readonly description: string;

    }
    interface PermissionDefinedEventDTO extends f2.dsl.cqrs.Event {
        readonly identifier: string;

    }
}
export declare namespace io.komune.im.f2.privilege.domain.permission.model {
    interface PermissionDTO extends io.komune.im.f2.privilege.domain.model.PrivilegeDTO {
        readonly id: string;
        readonly type: string;
        readonly identifier: string;
        readonly description: string;

    }
}
export declare namespace io.komune.im.f2.privilege.domain.permission.query {
    interface PermissionGetQueryDTO {
        readonly identifier: string;

    }
    interface PermissionGetResultDTO {
        readonly item?: io.komune.im.f2.privilege.domain.permission.model.PermissionDTO;

    }
}
export declare namespace io.komune.im.f2.privilege.domain.permission.query {
    interface PermissionListQueryDTO {

    }
    interface PermissionListResultDTO {
        readonly items: io.komune.im.f2.privilege.domain.permission.model.PermissionDTO[];

    }
}
export declare namespace io.komune.im.f2.privilege.domain.role.command {
    interface RoleDefineCommandDTO {
        readonly identifier: string;
        readonly description: string;
        readonly targets: string[];
        readonly locale: Record<string, string>;
        readonly bindings?: Record<string, string[]>;
        readonly permissions?: string[];

    }
    interface RoleDefinedEventDTO extends f2.dsl.cqrs.Event {
        readonly identifier: string;

    }
}
export declare namespace io.komune.im.f2.privilege.domain.role.model {
    interface RoleDTO extends io.komune.im.f2.privilege.domain.model.PrivilegeDTO {
        readonly id: string;
        readonly type: string;
        readonly identifier: string;
        readonly description: string;
        readonly targets: string[];
        readonly locale: Record<string, string>;
        readonly bindings: Record<string, io.komune.im.f2.privilege.domain.role.model.RoleDTO[]>;
        readonly permissions: string[];

    }
}
export declare namespace io.komune.im.f2.privilege.domain.role.model {
    const RoleTargetValues: {
        organization(): string;
        user(): string;
        apiKey(): string;
    };
}
export declare namespace io.komune.im.f2.privilege.domain.role.query {
    interface RoleGetQueryDTO {
        readonly identifier: string;

    }
    interface RoleGetResultDTO {
        readonly item?: io.komune.im.f2.privilege.domain.role.model.RoleDTO;

    }
}
export declare namespace io.komune.im.f2.privilege.domain.role.query {
    interface RoleListQueryDTO {
        readonly target?: string;

    }
    interface RoleListResultDTO {
        readonly items: io.komune.im.f2.privilege.domain.role.model.RoleDTO[];

    }
}
export declare namespace io.komune.im.f2.organization.domain.command {
    interface OrganizationCreateCommandDTO extends f2.dsl.cqrs.Command {
        readonly siret?: string;
        readonly name: string;
        readonly description?: string;
        readonly address?: io.komune.im.commons.model.AddressDTO;
        readonly website?: string;
        readonly roles?: string[];
        readonly parentOrganizationId?: string;
        readonly attributes?: Record<string, string>;
        readonly status?: string;

    }
    interface OrganizationCreatedEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;
        readonly parentOrganization?: string;

    }
}
export declare namespace io.komune.im.f2.organization.domain.command {
    interface OrganizationDeleteCommandDTO extends io.komune.im.core.organization.domain.command.OrganizationDeleteCommandDTO {
        readonly id: string;

    }
    interface OrganizationDeletedEventDTO extends f2.dsl.cqrs.Event, io.komune.im.core.organization.domain.command.OrganizationDeletedEventDTO {
        readonly id: string;

    }
}
export declare namespace io.komune.im.f2.organization.domain.command {
    interface OrganizationDisableCommandDTO extends f2.dsl.cqrs.Command {
        readonly id: string;
        readonly disabledBy?: string;
        readonly anonymize: boolean;
        readonly attributes?: Record<string, string>;
        readonly userAttributes?: Record<string, string>;

    }
    interface OrganizationDisabledEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;
        readonly userIds: string[];

    }
}
export declare namespace io.komune.im.f2.organization.domain.command {
    interface OrganizationUpdateCommandDTO extends f2.dsl.cqrs.Command {
        readonly id: string;
        readonly name: string;
        readonly description?: string;
        readonly address?: io.komune.im.commons.model.AddressDTO;
        readonly website?: string;
        readonly roles?: string[];
        readonly attributes?: Record<string, string>;
        readonly status?: string;

    }
    interface OrganizationUpdatedResultDTO extends f2.dsl.cqrs.Event {
        readonly id: string;

    }
}
export declare namespace io.komune.im.f2.organization.domain.command {
    interface OrganizationUploadLogoCommandDTO extends f2.dsl.cqrs.Command {
        readonly id: string;

    }
    interface OrganizationUploadedLogoEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;
        readonly url: string;

    }
}
export declare namespace io.komune.im.f2.organization.domain.model {
    interface OrganizationDTO {
        readonly id: string;
        readonly siret?: string;
        readonly name: string;
        readonly description?: string;
        readonly address?: io.komune.im.commons.model.AddressDTO;
        readonly website?: string;
        readonly attributes: Record<string, string>;
        readonly roles: io.komune.im.f2.privilege.domain.role.model.RoleDTO[];
        readonly logo?: string;
        readonly enabled: boolean;
        readonly status: string;
        readonly disabledBy?: string;
        readonly creationDate: number;
        readonly disabledDate?: number;

    }
}
export declare namespace io.komune.im.f2.organization.domain.model {
    interface OrganizationRefDTO {
        readonly id: string;
        readonly name: string;
        readonly roles: string[];

    }
}
export declare namespace io.komune.im.f2.organization.domain.model {
    const OrganizationStatusValues: {
        pending(): string;
        validated(): string;
        rejected(): string;
    };
}
export declare namespace io.komune.im.f2.organization.domain.policies {
    const OrganizationPolicies: {
        canGet(authedUser: io.komune.im.commons.auth.AuthedUserDTO, organizationId: string): boolean;
        canList(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        checkRefList(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        canCreate(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        canUpdate(authedUser: io.komune.im.commons.auth.AuthedUserDTO, organizationId: string): boolean;
        canUpdateStatus(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        canDisable(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        canDelete(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
    };
}
export declare namespace io.komune.im.f2.organization.domain.query {
    interface OrganizationGetFromInseeQueryDTO extends f2.dsl.cqrs.Query {
        readonly siret: string;

    }
    interface OrganizationGetFromInseeResultDTO extends f2.dsl.cqrs.Event {
        readonly item?: io.komune.im.f2.organization.domain.model.OrganizationDTO;

    }
}
export declare namespace io.komune.im.f2.organization.domain.query {
    interface OrganizationGetQueryDTO extends f2.dsl.cqrs.Query {
        readonly id: string;

    }
    interface OrganizationGetResultDTO extends f2.dsl.cqrs.Event {
        readonly item?: io.komune.im.f2.organization.domain.model.OrganizationDTO;

    }
}
export declare namespace io.komune.im.f2.organization.domain.query {
    interface OrganizationPageQueryDTO extends f2.dsl.cqrs.Query {
        readonly name?: string;
        readonly role?: string;
        readonly roles?: string[];
        readonly attributes?: Record<string, string>;
        readonly status?: string[];
        readonly withDisabled?: boolean;
        readonly offset?: number;
        readonly limit?: number;

    }
    interface OrganizationPageResultDTO extends f2.dsl.cqrs.page.PageDTO<io.komune.im.f2.organization.domain.model.OrganizationDTO> {
        readonly items: io.komune.im.f2.organization.domain.model.OrganizationDTO[];
        readonly total: number;

    }
}
export declare namespace io.komune.im.f2.organization.domain.query {
    interface OrganizationRefListQueryDTO extends f2.dsl.cqrs.Query {
        readonly withDisabled: boolean;

    }
    interface OrganizationRefListResultDTO extends f2.dsl.cqrs.Event {
        readonly items: io.komune.im.f2.organization.domain.model.OrganizationRefDTO[];

    }
}
export declare namespace io.komune.im.f2.user.domain.command {
    interface UserCreateCommandDTO extends f2.dsl.cqrs.Command {
        readonly email: string;
        readonly password?: string;
        readonly givenName: string;
        readonly familyName: string;
        readonly address?: io.komune.im.commons.model.AddressDTO/* Nullable<io.komune.im.commons.model.Address> */;
        readonly phone?: string;
        readonly roles: string[];
        readonly memberOf?: string;
        readonly attributes?: Record<string, string>;
        readonly isEmailVerified: boolean;
        readonly isPasswordTemporary: boolean;
        readonly sendResetPassword: boolean;
        readonly sendVerifyEmail: boolean;

    }
    interface UserCreatedEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;

    }
}
export declare namespace io.komune.im.f2.user.domain.command {
    interface UserDeleteCommandDTO extends io.komune.im.core.user.domain.command.UserDeleteCommandDTO, f2.dsl.cqrs.Command {
        readonly id: string;

    }
    interface UserDeletedEventDTO extends io.komune.im.core.user.domain.command.UserDeletedEventDTO, f2.dsl.cqrs.Event {
        readonly id: string;

    }
}
export declare namespace io.komune.im.f2.user.domain.command {
    interface UserDisableCommandDTO extends f2.dsl.cqrs.Command {
        readonly id: string;
        readonly disabledBy?: string;
        readonly anonymize: boolean;
        readonly attributes?: Record<string, string>;

    }
    interface UserDisabledEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;

    }
}
export declare namespace io.komune.im.f2.user.domain.command {
    interface UserResetPasswordCommandDTO extends f2.dsl.cqrs.Command {
        readonly id: string;

    }
    interface UserResetPasswordEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;

    }
}
export declare namespace io.komune.im.f2.user.domain.command {
    interface UserUpdateCommandDTO extends f2.dsl.cqrs.Command {
        readonly id: string;
        readonly givenName: string;
        readonly familyName: string;
        readonly address?: io.komune.im.commons.model.AddressDTO;
        readonly phone?: string;
        readonly roles: string[];
        readonly attributes?: Record<string, string>;

    }
    interface UserUpdatedEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;

    }
}
export declare namespace io.komune.im.f2.user.domain.command {
    interface UserUpdateEmailCommandDTO extends f2.dsl.cqrs.Command {
        readonly id: string;
        readonly email: string;
        readonly sendVerificationEmail: boolean;

    }
    interface UserUpdatedEmailEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;

    }
}
export declare namespace io.komune.im.f2.user.domain.command {
    interface UserUpdatePasswordCommandDTO extends f2.dsl.cqrs.Command {
        readonly id: string;
        readonly password: string;

    }
    interface UserUpdatedPasswordEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;

    }
}
export declare namespace io.komune.im.f2.user.domain.model {
    interface UserDTO {
        readonly id: string;
        readonly memberOf?: io.komune.im.f2.organization.domain.model.OrganizationRefDTO;
        readonly email: string;
        readonly givenName: string;
        readonly familyName: string;
        readonly address?: io.komune.im.commons.model.AddressDTO;
        readonly phone?: string;
        readonly roles: io.komune.im.f2.privilege.domain.role.model.RoleDTO[];
        readonly attributes: Record<string, string>;
        readonly enabled: boolean;
        readonly disabledBy?: string;
        readonly creationDate: number;
        readonly disabledDate?: number;

    }
}
export declare namespace io.komune.im.f2.user.domain.policies {
    const UserPolicies: {
        canGet(authedUser: io.komune.im.commons.auth.AuthedUserDTO, user?: io.komune.im.f2.user.domain.model.UserDTO): boolean;
        canPage(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        checkRefList(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        canCreate(authedUser: io.komune.im.commons.auth.AuthedUserDTO, organizationId?: string): boolean;
        canUpdate(authedUser: io.komune.im.commons.auth.AuthedUserDTO, user: io.komune.im.f2.user.domain.model.UserDTO): boolean;
        canDisable(authedUser: io.komune.im.commons.auth.AuthedUserDTO, user: io.komune.im.f2.user.domain.model.UserDTO): boolean;
        canDelete(authedUser: io.komune.im.commons.auth.AuthedUserDTO, user: io.komune.im.f2.user.domain.model.UserDTO): boolean;
    };
}
export declare namespace io.komune.im.f2.user.domain.query {
    interface UserExistsByEmailQueryDTO extends f2.dsl.cqrs.Query {
        readonly email: string;

    }
    interface UserExistsByEmailResultDTO extends f2.dsl.cqrs.Event {
        readonly item: boolean;

    }
}
export declare namespace io.komune.im.f2.user.domain.query {
    interface UserGetByEmailQueryDTO extends f2.dsl.cqrs.Query {
        readonly email: string;

    }
    interface UserGetByEmailResultDTO extends f2.dsl.cqrs.Event {
        readonly item?: io.komune.im.f2.user.domain.model.UserDTO;

    }
}
export declare namespace io.komune.im.f2.user.domain.query {
    interface UserGetQueryDTO extends f2.dsl.cqrs.Query {
        readonly id: string;

    }
    interface UserGetResultDTO extends f2.dsl.cqrs.Event {
        readonly item?: io.komune.im.f2.user.domain.model.UserDTO;

    }
}
export declare namespace io.komune.im.f2.user.domain.query {
    interface UserPageQueryDTO extends f2.dsl.cqrs.Query {
        readonly organizationId?: string;
        readonly organizationName?: string;
        readonly name?: string;
        readonly email?: string;
        readonly role?: string;
        readonly roles?: string[];
        readonly attributes?: Record<string, string>;
        readonly withDisabled: boolean;
        readonly offset?: number;
        readonly limit?: number;

    }
    interface UserPageResultDTO extends f2.dsl.cqrs.page.PageDTO<io.komune.im.f2.user.domain.model.UserDTO> {
        readonly items: io.komune.im.f2.user.domain.model.UserDTO[];
        readonly total: number;

    }
}
export declare namespace ssm.chaincode.dsl {
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
export declare namespace ssm.chaincode.dsl {
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
export declare namespace ssm.chaincode.dsl.blockchain {
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
export declare namespace ssm.chaincode.dsl.blockchain {
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
export declare namespace ssm.chaincode.dsl.blockchain {
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
export declare namespace ssm.chaincode.dsl.blockchain {
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
export declare namespace ssm.chaincode.dsl.config {
    interface SsmChaincodePropertiesDTO {
        readonly url: string;

    }
    class ChaincodeSsmConfig implements ssm.chaincode.dsl.config.SsmChaincodePropertiesDTO {
        constructor(url: string);
        get url(): string;
    }
}
export declare namespace ssm.chaincode.dsl.model {
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
        copy(name?: string, pub?: Int8Array): ssm.chaincode.dsl.model.Agent;
        toString(): string;
        
    }
}
export declare namespace ssm.chaincode.dsl.model {
    interface ChaincodeDTO {
        readonly id: string;
        readonly channelId: string;

    }
    class Chaincode implements ssm.chaincode.dsl.model.ChaincodeDTO {
        constructor(id: string, channelId: string);
        get id(): string;
        get channelId(): string;
        copy(id?: string, channelId?: string): ssm.chaincode.dsl.model.Chaincode;
        toString(): string;
        hashCode(): number;
        equals(other?: any): boolean;
    }
}
export declare namespace ssm.chaincode.dsl.model {
    interface SsmDTO {
        readonly name: string;
        readonly transitions: ssm.chaincode.dsl.model.SsmTransitionDTO[];

    }
    class Ssm implements ssm.chaincode.dsl.model.SsmDTO {
        constructor(name: string, transitions: ssm.chaincode.dsl.model.SsmTransition[]);
        get name(): string;
        get transitions(): ssm.chaincode.dsl.model.SsmTransition[];
        copy(name?: string, transitions?: ssm.chaincode.dsl.model.SsmTransition[]): ssm.chaincode.dsl.model.Ssm;
        toString(): string;
        hashCode(): number;
        equals(other?: any): boolean;
    }
}
export declare namespace ssm.chaincode.dsl.model {
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
        copy(session?: string, _public?: string, iteration?: number, _private?: Record<string, string>): ssm.chaincode.dsl.model.SsmContext;
        toString(): string;
        hashCode(): number;
        equals(other?: any): boolean;
    }
}
export declare namespace ssm.chaincode.dsl.model {
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
        copy(amount?: number): ssm.chaincode.dsl.model.Credit;
        toString(): string;
        hashCode(): number;
        equals(other?: any): boolean;
    }
}
export declare namespace ssm.chaincode.dsl.model {
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
export declare namespace ssm.chaincode.dsl.model {
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
        constructor(ssm?: string, session: string, roles?: Record<string, string>, _public?: any, _private?: Record<string, string> | undefined, origin?: ssm.chaincode.dsl.model.SsmTransition, current: number, iteration: number);
        get ssm(): Nullable<string>;
        get session(): string;
        get roles(): Nullable<any>/* Nullable<Record<string, string>> */;
        get public(): Nullable<any>;
        get private(): Nullable<any>/* Nullable<Record<string, string>> */;
        get origin(): Nullable<ssm.chaincode.dsl.model.SsmTransition>;
        get current(): number;
        get iteration(): number;
        copy(ssm?: string, session?: string, roles?: Record<string, string>, _public?: any, _private?: Record<string, string>, origin?: ssm.chaincode.dsl.model.SsmTransition, current?: number, iteration?: number): ssm.chaincode.dsl.model.SsmSessionState;
        toString(): string;
        hashCode(): number;
        equals(other?: any): boolean;
    }
}
export declare namespace ssm.chaincode.dsl.model {
    interface SsmSessionStateLogDTO {
        readonly txId: string;
        readonly state: ssm.chaincode.dsl.model.SsmSessionStateDTO;

    }
    class SsmSessionStateLog implements ssm.chaincode.dsl.model.SsmSessionStateLogDTO {
        constructor(txId: string, state: ssm.chaincode.dsl.model.SsmSessionState);
        get txId(): string;
        get state(): ssm.chaincode.dsl.model.SsmSessionState;
        copy(txId?: string, state?: ssm.chaincode.dsl.model.SsmSessionState): ssm.chaincode.dsl.model.SsmSessionStateLog;
        toString(): string;
        hashCode(): number;
        equals(other?: any): boolean;
    }
}
export declare namespace ssm.chaincode.dsl.model {
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
        copy(from?: number, to?: number, role?: string, action?: string): ssm.chaincode.dsl.model.SsmTransition;
        toString(): string;
        hashCode(): number;
        equals(other?: any): boolean;
    }
}
export declare namespace ssm.chaincode.dsl.model {
    interface WithPrivate {
        readonly private?: Record<string, string>;

    }
}
export declare namespace ssm.chaincode.dsl.model.uri {
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
export declare namespace ssm.chaincode.dsl.model.uri {
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
        copy(uri?: string): ssm.chaincode.dsl.model.uri.SsmUri;
        toString(): string;
        hashCode(): number;
        equals(other?: any): boolean;
        
    }
}
export declare namespace ssm.chaincode.dsl.query {
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
export declare namespace ssm.chaincode.dsl.query {
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
export declare namespace ssm.chaincode.dsl.query {
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
        copy(ssmName?: string, sessionName?: string, logs?: ssm.chaincode.dsl.model.SsmSessionStateLog[]): ssm.chaincode.dsl.query.SsmGetSessionLogsQueryResult;
        toString(): string;
        hashCode(): number;
        equals(other?: any): boolean;
    }
}
export declare namespace ssm.chaincode.dsl.query {
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
export declare namespace ssm.chaincode.dsl.query {
    class SsmGetTransactionQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor(chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri, id: string);
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;
        get id(): string;
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
export declare namespace ssm.chaincode.dsl.query {
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
export declare namespace ssm.chaincode.dsl.query {
    class SsmListAdminQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor(chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri);
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;
    }
    class SsmListAdminResult implements ssm.chaincode.dsl.SsmItemsResultDTO<string> {
        constructor(items: Array<string>);
        get items(): Array<string>;
    }
}
export declare namespace ssm.chaincode.dsl.query {
    class SsmListSessionQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor(chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri);
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;
    }
    class SsmListSessionResult implements ssm.chaincode.dsl.SsmItemsResultDTO<string> {
        constructor(items: Array<string>);
        get items(): Array<string>;
    }
}
export declare namespace ssm.chaincode.dsl.query {
    class SsmListSsmQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor(chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri);
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;
    }
    class SsmListSsmResult implements ssm.chaincode.dsl.SsmItemsResultDTO<string> {
        constructor(items: Array<string>);
        get items(): Array<string>;
    }
}
export declare namespace ssm.chaincode.dsl.query {
    class SsmListUserQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor(chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri);
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;
    }
    class SsmListUserResult implements ssm.chaincode.dsl.SsmItemsResultDTO<string> {
        constructor(items: Array<string>);
        get items(): Array<string>;
    }
}
export declare namespace s2.dsl.automate {
    interface Automate {
        getAvailableTransitions(state: s2.dsl.automate.S2State): Array<s2.dsl.automate.S2Transition>;
        isAvailableTransition(currentState: s2.dsl.automate.S2State, msg: f2.dsl.cqrs.Message): boolean;
        isAvailableInitTransition(command: f2.dsl.cqrs.Message): boolean;
        isFinalState(state: s2.dsl.automate.S2State): boolean;
        isSameState(from?: s2.dsl.automate.S2State, to: s2.dsl.automate.S2State): boolean;

    }
}
export declare namespace s2.dsl.automate {
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
        
    }
}
export declare namespace s2.dsl.automate {
    interface S2InitCommand extends f2.dsl.cqrs.Command {

    }
    interface S2Command<ID> extends f2.dsl.cqrs.Command, s2.dsl.automate.WithId<ID> {
        readonly id: ID;

    }
}
export declare namespace s2.dsl.automate {
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
export declare namespace s2.dsl.automate {
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
export declare namespace s2.dsl.automate {
    interface S2Role {

    }
}
export declare namespace s2.dsl.automate {
    interface S2State {
        readonly position: number;

    }
}
export declare namespace s2.dsl.automate {
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
export declare namespace s2.dsl.automate {
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
        
    }
    class S2TransitionValue {
        constructor(name: string);
        get name(): string;
        
    }
    class S2RoleValue {
        constructor(name: string);
        get name(): string;
        
    }
    class S2StateValue {
        constructor(name: string, position: number);
        get name(): string;
        get position(): number;
        
    }
}
export declare namespace s2.dsl.automate {
    interface WithId<ID> {
        readonly id: ID;

    }
}
export declare namespace s2.dsl.automate.builder {
    function s2(exec: (p0: s2.dsl.automate.builder.S2AutomateBuilder) => void): s2.dsl.automate.S2Automate;
}
export declare namespace s2.dsl.automate.builder {
    function s2Sourcing(exec: (p0: s2.dsl.automate.builder.S2SourcingAutomateBuilder) => void): s2.dsl.automate.S2Automate;
}
export declare namespace s2.dsl.automate.model {
    interface WithS2Id<ID> {
        s2Id(): ID;

    }
}
export declare namespace s2.dsl.automate.model {
    interface WithS2IdAndStatus<ID, STATE> extends s2.dsl.automate.model.WithS2Id<ID>, s2.dsl.automate.model.WithS2State<STATE> {
        s2Id(): ID;
        s2State(): STATE;

    }
}
export declare namespace s2.dsl.automate.model {
    interface WithS2State<STATE> {
        s2State(): STATE;

    }
}
export declare namespace s2.sourcing.dsl {
    interface Decide<COMMAND extends f2.dsl.cqrs.Command, EVENT extends f2.dsl.cqrs.Event> extends f2.dsl.fnc.F2Function<COMMAND, EVENT> {
        invoke(cmd: Array<COMMAND>): Promise<Array<EVENT>>;

    }
}
export declare namespace io.komune.registry.s2.commons.auth {
    const Roles: {
        get ORCHESTRATOR_ADMIN(): string;
        get ORCHESTRATOR_USER(): string;
        get PROJECT_MANAGER_ADMIN(): string;
        get PROJECT_MANAGER_USER(): string;
        get STAKEHOLDER_ADMIN(): string;
        get STAKEHOLDER_USER(): string;
    };
}
export declare namespace io.komune.registry.s2.commons.model {
    interface GeoLocationDTO {
        readonly lat: number;
        readonly lon: number;

    }
}
export as namespace io_komune_registry_commons;