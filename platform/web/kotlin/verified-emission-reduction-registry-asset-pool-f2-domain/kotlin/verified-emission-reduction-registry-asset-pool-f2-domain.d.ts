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
export namespace city.smartb.im.commons.auth {
    interface AuthedUserDTO {
        readonly id: string;
        readonly memberOf?: string;
        readonly roles: Array<string>;

    }
}
export namespace city.smartb.im.commons.auth {
    abstract class ImRole {
        private constructor();
        get identifier(): string;
        static get ORCHESTRATOR(): city.smartb.im.commons.auth.ImRole & {
            get name(): "ORCHESTRATOR";
            get ordinal(): 0;
        };
        static get ORCHESTRATOR_ADMIN(): city.smartb.im.commons.auth.ImRole & {
            get name(): "ORCHESTRATOR_ADMIN";
            get ordinal(): 1;
        };
        static get ORCHESTRATOR_USER(): city.smartb.im.commons.auth.ImRole & {
            get name(): "ORCHESTRATOR_USER";
            get ordinal(): 2;
        };
        static get IM_USER_READ(): city.smartb.im.commons.auth.ImRole & {
            get name(): "IM_USER_READ";
            get ordinal(): 3;
        };
        static get IM_USER_WRITE(): city.smartb.im.commons.auth.ImRole & {
            get name(): "IM_USER_WRITE";
            get ordinal(): 4;
        };
        static get IM_ORGANIZATION_READ(): city.smartb.im.commons.auth.ImRole & {
            get name(): "IM_ORGANIZATION_READ";
            get ordinal(): 5;
        };
        static get IM_ORGANIZATION_WRITE(): city.smartb.im.commons.auth.ImRole & {
            get name(): "IM_ORGANIZATION_WRITE";
            get ordinal(): 6;
        };
        static get IM_MY_ORGANIZATION_WRITE(): city.smartb.im.commons.auth.ImRole & {
            get name(): "IM_MY_ORGANIZATION_WRITE";
            get ordinal(): 7;
        };
        static get IM_APIKEY_READ(): city.smartb.im.commons.auth.ImRole & {
            get name(): "IM_APIKEY_READ";
            get ordinal(): 8;
        };
        static get IM_APIKEY_WRITE(): city.smartb.im.commons.auth.ImRole & {
            get name(): "IM_APIKEY_WRITE";
            get ordinal(): 9;
        };
        static get IM_SPACE_READ(): city.smartb.im.commons.auth.ImRole & {
            get name(): "IM_SPACE_READ";
            get ordinal(): 10;
        };
        static get IM_SPACE_WRITE(): city.smartb.im.commons.auth.ImRole & {
            get name(): "IM_SPACE_WRITE";
            get ordinal(): 11;
        };
        static get IM_ROLE_READ(): city.smartb.im.commons.auth.ImRole & {
            get name(): "IM_ROLE_READ";
            get ordinal(): 12;
        };
        static get IM_ROLE_WRITE(): city.smartb.im.commons.auth.ImRole & {
            get name(): "IM_ROLE_WRITE";
            get ordinal(): 13;
        };
        static values(): Array<city.smartb.im.commons.auth.ImRole>;
        static valueOf(value: string): city.smartb.im.commons.auth.ImRole;
        get name(): "ORCHESTRATOR" | "ORCHESTRATOR_ADMIN" | "ORCHESTRATOR_USER" | "IM_USER_READ" | "IM_USER_WRITE" | "IM_ORGANIZATION_READ" | "IM_ORGANIZATION_WRITE" | "IM_MY_ORGANIZATION_WRITE" | "IM_APIKEY_READ" | "IM_APIKEY_WRITE" | "IM_SPACE_READ" | "IM_SPACE_WRITE" | "IM_ROLE_READ" | "IM_ROLE_WRITE";
        get ordinal(): 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
    }
}
export namespace city.smartb.im.commons.exception {
    const ExceptionCodes: {
        privilegeWrongTarget(): number;
    };
}
export namespace city.smartb.im.commons.model {
    interface AddressDTO {
        readonly street: string;
        readonly postalCode: string;
        readonly city: string;

    }
}
export namespace city.smartb.im.commons.model {
    abstract class AuthRealm {
        protected constructor(serverUrl: string, realmId: string, clientId: string, redirectUrl?: string, space: string);
        get serverUrl(): string;
        get realmId(): string;
        get clientId(): string;
        get redirectUrl(): Nullable<string>;
        get space(): string;
    }
    class AuthRealmPassword extends city.smartb.im.commons.model.AuthRealm {
        constructor(serverUrl: string, realmId: string, redirectUrl: string, clientId: string, username: string, password: string, space: string);
        get serverUrl(): string;
        get realmId(): string;
        get redirectUrl(): string;
        get clientId(): string;
        get username(): string;
        get password(): string;
        get space(): string;
        component1(): string;
        component2(): string;
        component3(): string;
        component4(): string;
        component5(): string;
        component6(): string;
        component7(): string;
        copy(serverUrl?: string, realmId?: string, redirectUrl?: string, clientId?: string, username?: string, password?: string, space?: string): city.smartb.im.commons.model.AuthRealmPassword;
        toString(): string;
        hashCode(): number;
        equals(other?: any): boolean;
    }
    class AuthRealmClientSecret extends city.smartb.im.commons.model.AuthRealm {
        constructor(serverUrl: string, realmId: string, clientId: string, redirectUrl?: string, clientSecret: string, space: string);
        get serverUrl(): string;
        get realmId(): string;
        get clientId(): string;
        get redirectUrl(): Nullable<string>;
        get clientSecret(): string;
        get space(): string;
        component1(): string;
        component2(): string;
        component3(): string;
        component4(): Nullable<string>;
        component5(): string;
        component6(): string;
        copy(serverUrl?: string, realmId?: string, clientId?: string, redirectUrl?: string, clientSecret?: string, space?: string): city.smartb.im.commons.model.AuthRealmClientSecret;
        toString(): string;
        hashCode(): number;
        equals(other?: any): boolean;
    }
}
export namespace city.smartb.im.commons.http {
    class ClientJs {
        constructor();
        protected doCall<T>(fnc: any /*Suspend functions are not supported*/): Promise<T>;
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
export namespace city.smartb.im.core.user.domain.command {
    interface UserDeleteCommandDTO {
        readonly id: string;

    }
    interface UserDeletedEventDTO {
        readonly id: string;

    }
}
export namespace city.smartb.im.core.organization.domain.command {
    interface OrganizationDeleteCommandDTO extends f2.dsl.cqrs.Command {
        readonly id: string;

    }
    interface OrganizationDeletedEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;

    }
}
export namespace city.smartb.im.f2.privilege.domain {
    const PrivilegePolicies: {
        canGet(authedUser: city.smartb.im.commons.auth.AuthedUserDTO): boolean;
        canList(authedUser: city.smartb.im.commons.auth.AuthedUserDTO): boolean;
        canDefine(authedUser: city.smartb.im.commons.auth.AuthedUserDTO): boolean;
    };
}
export namespace city.smartb.im.f2.privilege.domain.model {
    interface PrivilegeDTO {
        readonly id: string;
        readonly identifier: string;
        readonly description: string;
        readonly type: string;

    }
}
export namespace city.smartb.im.f2.privilege.domain.permission.command {
    interface PermissionDefineCommandDTO {
        readonly identifier: string;
        readonly description: string;

    }
    interface PermissionDefinedEventDTO extends f2.dsl.cqrs.Event {
        readonly identifier: string;

    }
}
export namespace city.smartb.im.f2.privilege.domain.permission.model {
    interface PermissionDTO extends city.smartb.im.f2.privilege.domain.model.PrivilegeDTO {
        readonly id: string;
        readonly type: string;
        readonly identifier: string;
        readonly description: string;

    }
}
export namespace city.smartb.im.f2.privilege.domain.permission.query {
    interface PermissionGetQueryDTO {
        readonly identifier: string;

    }
    interface PermissionGetResultDTO {
        readonly item?: city.smartb.im.f2.privilege.domain.permission.model.PermissionDTO;

    }
}
export namespace city.smartb.im.f2.privilege.domain.permission.query {
    interface PermissionListQueryDTO {

    }
    interface PermissionListResultDTO {
        readonly items: city.smartb.im.f2.privilege.domain.permission.model.PermissionDTO[];

    }
}
export namespace city.smartb.im.f2.privilege.domain.role.command {
    interface RoleDefineCommandDTO {
        readonly identifier: string;
        readonly description: string;
        readonly targets: string[];
        readonly locale: Record<string, string>;
        readonly bindings?: Record<string, string>[];
        readonly permissions?: string[];

    }
    interface RoleDefinedEventDTO extends f2.dsl.cqrs.Event {
        readonly identifier: string;

    }
}
export namespace city.smartb.im.f2.privilege.domain.role.model {
    interface RoleDTO extends city.smartb.im.f2.privilege.domain.model.PrivilegeDTO {
        readonly id: string;
        readonly type: string;
        readonly identifier: string;
        readonly description: string;
        readonly targets: string[];
        readonly locale: Record<string, string>;
        readonly bindings: Record<string, city.smartb.im.f2.privilege.domain.role.model.RoleDTO>[];
        readonly permissions: string[];

    }
}
export namespace city.smartb.im.f2.privilege.domain.role.model {
    const RoleTargetValues: {
        organization(): string;
        user(): string;
        apiKey(): string;
    };
}
export namespace city.smartb.im.f2.privilege.domain.role.query {
    interface RoleGetQueryDTO {
        readonly identifier: string;

    }
    interface RoleGetResultDTO {
        readonly item?: city.smartb.im.f2.privilege.domain.role.model.RoleDTO;

    }
}
export namespace city.smartb.im.f2.privilege.domain.role.query {
    interface RoleListQueryDTO {
        readonly target?: string;

    }
    interface RoleListResultDTO {
        readonly items: city.smartb.im.f2.privilege.domain.role.model.RoleDTO[];

    }
}
export namespace city.smartb.im.f2.organization.domain.command {
    interface OrganizationCreateCommandDTO extends f2.dsl.cqrs.Command {
        readonly siret?: string;
        readonly name: string;
        readonly description?: string;
        readonly address?: city.smartb.im.commons.model.AddressDTO;
        readonly website?: string;
        readonly roles?: string[];
        readonly parentOrganizationId?: string;
        readonly attributes?: Record<string, string>;
        readonly status: string;

    }
    interface OrganizationCreatedEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;
        readonly parentOrganization?: string;

    }
}
export namespace city.smartb.im.f2.organization.domain.command {
    interface OrganizationDeleteCommandDTO extends city.smartb.im.core.organization.domain.command.OrganizationDeleteCommandDTO {
        readonly id: string;

    }
    interface OrganizationDeletedEventDTO extends f2.dsl.cqrs.Event, city.smartb.im.core.organization.domain.command.OrganizationDeletedEventDTO {
        readonly id: string;

    }
}
export namespace city.smartb.im.f2.organization.domain.command {
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
export namespace city.smartb.im.f2.organization.domain.command {
    interface OrganizationUpdateCommandDTO extends f2.dsl.cqrs.Command {
        readonly id: string;
        readonly name: string;
        readonly description?: string;
        readonly address?: city.smartb.im.commons.model.AddressDTO;
        readonly website?: string;
        readonly roles?: string[];
        readonly attributes?: Record<string, string>;
        readonly status: string;

    }
    interface OrganizationUpdatedResultDTO extends f2.dsl.cqrs.Event {
        readonly id: string;

    }
}
export namespace city.smartb.im.f2.organization.domain.command {
    interface OrganizationUploadLogoCommandDTO extends f2.dsl.cqrs.Command {
        readonly id: string;

    }
    interface OrganizationUploadedLogoEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;
        readonly url: string;

    }
}
export namespace city.smartb.im.f2.organization.domain.model {
    interface OrganizationDTO {
        readonly id: string;
        readonly siret?: string;
        readonly name: string;
        readonly description?: string;
        readonly address?: city.smartb.im.commons.model.AddressDTO;
        readonly website?: string;
        readonly attributes: Record<string, string>;
        readonly roles: city.smartb.im.f2.privilege.domain.role.model.RoleDTO[];
        readonly logo?: string;
        readonly enabled: boolean;
        readonly status: string;
        readonly disabledBy?: string;
        readonly creationDate: number;
        readonly disabledDate?: number;

    }
}
export namespace city.smartb.im.f2.organization.domain.model {
    interface OrganizationRefDTO {
        readonly id: string;
        readonly name: string;
        readonly roles: string[];

    }
}
export namespace city.smartb.im.f2.organization.domain.model {
    const OrganizationStatusValues: {
        pending(): string;
        validated(): string;
        rejected(): string;
    };
}
export namespace city.smartb.im.f2.organization.domain.policies {
    const OrganizationPolicies: {
        canGet(authedUser: city.smartb.im.commons.auth.AuthedUserDTO, organizationId: string): boolean;
        canList(authedUser: city.smartb.im.commons.auth.AuthedUserDTO): boolean;
        checkRefList(authedUser: city.smartb.im.commons.auth.AuthedUserDTO): boolean;
        canCreate(authedUser: city.smartb.im.commons.auth.AuthedUserDTO): boolean;
        canUpdate(authedUser: city.smartb.im.commons.auth.AuthedUserDTO, organizationId: string): boolean;
        canDisable(authedUser: city.smartb.im.commons.auth.AuthedUserDTO): boolean;
        canDelete(authedUser: city.smartb.im.commons.auth.AuthedUserDTO): boolean;
    };
}
export namespace city.smartb.im.f2.organization.domain.query {
    interface OrganizationGetFromInseeQueryDTO extends f2.dsl.cqrs.Query {
        readonly siret: string;

    }
    interface OrganizationGetFromInseeResultDTO extends f2.dsl.cqrs.Event {
        readonly item?: city.smartb.im.f2.organization.domain.model.OrganizationDTO;

    }
}
export namespace city.smartb.im.f2.organization.domain.query {
    interface OrganizationGetQueryDTO extends f2.dsl.cqrs.Query {
        readonly id: string;

    }
    interface OrganizationGetResultDTO extends f2.dsl.cqrs.Event {
        readonly item?: city.smartb.im.f2.organization.domain.model.OrganizationDTO;

    }
}
export namespace city.smartb.im.f2.organization.domain.query {
    interface OrganizationPageQueryDTO extends f2.dsl.cqrs.Query {
        readonly name?: string;
        readonly role?: string;
        readonly roles?: string[];
        readonly attributes?: Record<string, string>;
        readonly status?: string;
        readonly withDisabled?: boolean;
        readonly offset?: number;
        readonly limit?: number;

    }
    interface OrganizationPageResultDTO extends f2.dsl.cqrs.page.PageDTO<city.smartb.im.f2.organization.domain.model.OrganizationDTO> {
        readonly items: city.smartb.im.f2.organization.domain.model.OrganizationDTO[];
        readonly total: number;

    }
}
export namespace city.smartb.im.f2.organization.domain.query {
    interface OrganizationRefListQueryDTO extends f2.dsl.cqrs.Query {
        readonly withDisabled: boolean;

    }
    interface OrganizationRefListResultDTO extends f2.dsl.cqrs.Event {
        readonly items: city.smartb.im.f2.organization.domain.model.OrganizationRefDTO[];

    }
}
export namespace city.smartb.im.f2.user.domain.command {
    interface UserCreateCommandDTO extends f2.dsl.cqrs.Command {
        readonly email: string;
        readonly password?: string;
        readonly givenName: string;
        readonly familyName: string;
        readonly address?: city.smartb.im.commons.model.AddressDTO/* Nullable<city.smartb.im.commons.model.Address> */;
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
export namespace city.smartb.im.f2.user.domain.command {
    interface UserDeleteCommandDTO extends city.smartb.im.core.user.domain.command.UserDeleteCommandDTO, f2.dsl.cqrs.Command {
        readonly id: string;

    }
    interface UserDeletedEventDTO extends city.smartb.im.core.user.domain.command.UserDeletedEventDTO, f2.dsl.cqrs.Event {
        readonly id: string;

    }
}
export namespace city.smartb.im.f2.user.domain.command {
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
export namespace city.smartb.im.f2.user.domain.command {
    interface UserResetPasswordCommandDTO extends f2.dsl.cqrs.Command {
        readonly id: string;

    }
    interface UserResetPasswordEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;

    }
}
export namespace city.smartb.im.f2.user.domain.command {
    interface UserUpdateCommandDTO extends f2.dsl.cqrs.Command {
        readonly id: string;
        readonly givenName: string;
        readonly familyName: string;
        readonly address?: city.smartb.im.commons.model.AddressDTO;
        readonly phone?: string;
        readonly roles: string[];
        readonly attributes?: Record<string, string>;

    }
    interface UserUpdatedEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;

    }
}
export namespace city.smartb.im.f2.user.domain.command {
    interface UserUpdateEmailCommandDTO extends f2.dsl.cqrs.Command {
        readonly id: string;
        readonly email: string;
        readonly sendVerificationEmail: boolean;

    }
    interface UserUpdatedEmailEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;

    }
}
export namespace city.smartb.im.f2.user.domain.command {
    interface UserUpdatePasswordCommandDTO extends f2.dsl.cqrs.Command {
        readonly id: string;
        readonly password: string;

    }
    interface UserUpdatedPasswordEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;

    }
}
export namespace city.smartb.im.f2.user.domain.model {
    interface UserDTO {
        readonly id: string;
        readonly memberOf?: city.smartb.im.f2.organization.domain.model.OrganizationRefDTO;
        readonly email: string;
        readonly givenName: string;
        readonly familyName: string;
        readonly address?: city.smartb.im.commons.model.AddressDTO;
        readonly phone?: string;
        readonly roles: city.smartb.im.f2.privilege.domain.role.model.RoleDTO[];
        readonly attributes: Record<string, string>;
        readonly enabled: boolean;
        readonly disabledBy?: string;
        readonly creationDate: number;
        readonly disabledDate?: number;

    }
}
export namespace city.smartb.im.f2.user.domain.policies {
    const UserPolicies: {
        canGet(authedUser: city.smartb.im.commons.auth.AuthedUserDTO, user?: city.smartb.im.f2.user.domain.model.UserDTO): boolean;
        canPage(authedUser: city.smartb.im.commons.auth.AuthedUserDTO): boolean;
        checkRefList(authedUser: city.smartb.im.commons.auth.AuthedUserDTO): boolean;
        canCreate(authedUser: city.smartb.im.commons.auth.AuthedUserDTO, organizationId?: string): boolean;
        canUpdate(authedUser: city.smartb.im.commons.auth.AuthedUserDTO, user: city.smartb.im.f2.user.domain.model.UserDTO): boolean;
        canDisable(authedUser: city.smartb.im.commons.auth.AuthedUserDTO, user: city.smartb.im.f2.user.domain.model.UserDTO): boolean;
        canDelete(authedUser: city.smartb.im.commons.auth.AuthedUserDTO, user: city.smartb.im.f2.user.domain.model.UserDTO): boolean;
    };
}
export namespace city.smartb.im.f2.user.domain.query {
    interface UserExistsByEmailQueryDTO extends f2.dsl.cqrs.Query {
        readonly email: string;

    }
    interface UserExistsByEmailResultDTO extends f2.dsl.cqrs.Event {
        readonly item: boolean;

    }
}
export namespace city.smartb.im.f2.user.domain.query {
    interface UserGetByEmailQueryDTO extends f2.dsl.cqrs.Query {
        readonly email: string;

    }
    interface UserGetByEmailResultDTO extends f2.dsl.cqrs.Event {
        readonly item?: city.smartb.im.f2.user.domain.model.UserDTO;

    }
}
export namespace city.smartb.im.f2.user.domain.query {
    interface UserGetQueryDTO extends f2.dsl.cqrs.Query {
        readonly id: string;

    }
    interface UserGetResultDTO extends f2.dsl.cqrs.Event {
        readonly item?: city.smartb.im.f2.user.domain.model.UserDTO;

    }
}
export namespace city.smartb.im.f2.user.domain.query {
    interface UserPageQueryDTO extends f2.dsl.cqrs.Query {
        readonly organizationId?: string;
        readonly name?: string;
        readonly email?: string;
        readonly role?: string;
        readonly roles?: string[];
        readonly attributes?: Record<string, string>;
        readonly withDisabled: boolean;
        readonly offset?: number;
        readonly limit?: number;

    }
    interface UserPageResultDTO extends f2.dsl.cqrs.page.PageDTO<city.smartb.im.f2.user.domain.model.UserDTO> {
        readonly items: city.smartb.im.f2.user.domain.model.UserDTO[];
        readonly total: number;

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
export namespace s2.sourcing.dsl {
    interface Decide<COMMAND extends f2.dsl.cqrs.Command, EVENT extends f2.dsl.cqrs.Event> extends f2.dsl.fnc.F2Function<COMMAND, EVENT> {
        invoke(cmd: Array<COMMAND>): Promise<Array<EVENT>>;

    }
}
export namespace city.smartb.registry.program.api.commons.auth {
    const Roles: {
        get ORCHESTRATOR_ADMIN(): string;
        get ORCHESTRATOR_USER(): string;
        get PROJECT_MANAGER_ADMIN(): string;
        get PROJECT_MANAGER_USER(): string;
        get STAKEHOLDER_ADMIN(): string;
        get STAKEHOLDER_USER(): string;
    };
}
export namespace city.smartb.registry.program.api.commons.exception {
    const ExceptionCodes: {
        negativeTransaction(): number;
        notEnoughAssets(): number;
        granularityTooSmall(): number;
    };
}
export namespace city.smartb.registry.program.api.commons.model {
    interface GeoLocationDTO {
        readonly lat: number;
        readonly lon: number;

    }
}
export namespace city.smartb.registry.program.api.commons.model {
    const RedirectableRoutes: {
        quotations(): string;
        projects(): string;
    };
}
export namespace cccev.dsl.model {
    interface Code {

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
        readonly unit?: cccev.dsl.model.DataUnitDTO;
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
export namespace cccev.s2.unit.domain.command {
    interface DataUnitCreatedEventDTO extends cccev.s2.unit.domain.DataUnitEvent {
        readonly id: string;
        readonly identifier: string;
        readonly name: string;
        readonly description: string;
        readonly notation?: string;
        readonly type: cccev.s2.unit.domain.model.DataUnitType;
        readonly status: s2.dsl.automate.S2State/* cccev.s2.unit.domain.DataUnitState */;
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
        readonly status: s2.dsl.automate.S2State/* cccev.s2.requirement.domain.RequirementState */;
        s2Id(): string;

    }
}
export namespace cccev.s2.requirement.domain.command {
    interface RequirementUpdateCommandDTO extends cccev.s2.requirement.domain.RequirementCommand {
        readonly id: string;
        readonly name?: string;
        readonly description?: string;

    }
    interface RequirementUpdatedEventDTO extends cccev.s2.requirement.domain.RequirementEvent {
        readonly id: string;
        readonly name?: string;
        readonly description?: string;
        s2Id(): string;

    }
}
export namespace city.smartb.fs.s2.file.domain.features.query {
    interface FileAskQuestionQueryDTO {
        readonly question: string;
        readonly history: city.smartb.fs.s2.file.domain.model.ChatMessageDTO[];
        readonly metadata: city.smartb.registry.program.f2.chat.domain.model.ChatMetadataDTO;

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
export namespace city.smartb.registry.program.f2.chat.domain.model {
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
export namespace cccev.s2.certification.domain {
    interface CertificationInitCommand extends s2.dsl.automate.S2InitCommand {

    }
    interface CertificationCommand extends s2.dsl.automate.S2Command<string> {
        readonly id: string;

    }
    interface CertificationEvent extends f2.dsl.cqrs.Event, s2.dsl.automate.model.WithS2Id<string>, s2.dsl.automate.WithId<string> {
        s2Id(): string;
        readonly id: string;

    }
}
export namespace cccev.s2.certification.domain.command {
    interface CertificationAddedEvidenceEventDTO extends cccev.s2.certification.domain.CertificationEvent {
        readonly id: string;
        readonly evidenceId: string;
        readonly name: string;
        readonly file?: city.smartb.fs.s2.file.domain.model.FilePathDTO;
        readonly url?: string;
        readonly isConformantTo: string[];
        readonly supportsConcept: string[];
        s2Id(): string;

    }
}
export namespace cccev.s2.certification.domain.command {
    interface CertificationAddRequirementsCommandDTO extends cccev.s2.certification.domain.CertificationCommand {
        readonly id: string;
        readonly requirementIds: string[];

    }
    interface CertificationAddedRequirementsEventDTO extends cccev.s2.certification.domain.CertificationEvent {
        readonly id: string;
        readonly requirementIds: string[];
        s2Id(): string;

    }
}
export namespace cccev.s2.certification.domain.command {
    interface CertificationAddValuesCommandDTO extends cccev.s2.certification.domain.CertificationCommand {
        readonly id: string;
        readonly values: Record<string, Nullable<string>>;

    }
    interface CertificationAddedValuesEventDTO extends cccev.s2.certification.domain.CertificationEvent {
        readonly id: string;
        readonly values: Record<string, Nullable<string>>;
        s2Id(): string;

    }
}
export namespace cccev.s2.certification.domain.command {
    interface CertificationCreateCommandDTO extends cccev.s2.certification.domain.CertificationInitCommand {
        readonly identifier: string;
        readonly name: string;
        readonly description?: string;
        readonly requirements: string[];

    }
    interface CertificationCreatedEventDTO extends cccev.s2.certification.domain.CertificationEvent {
        readonly id: string;
        readonly identifier: string;
        readonly name: string;
        readonly description?: string;
        readonly requirements: string[];
        s2Id(): string;

    }
}
export namespace cccev.s2.certification.domain.command {
    interface CertificationRemoveEvidenceCommandDTO extends cccev.s2.certification.domain.CertificationCommand {
        readonly id: string;
        readonly evidenceId: string;

    }
    interface CertificationRemovedEvidenceEventDTO extends cccev.s2.certification.domain.CertificationEvent {
        readonly id: string;
        readonly evidenceId: string;
        s2Id(): string;

    }
}
export namespace cccev.s2.certification.domain.command {
    interface CertificationRemoveRequirementsCommandDTO extends cccev.s2.certification.domain.CertificationCommand {
        readonly id: string;
        readonly requirementIds: string[];

    }
    interface CertificationRemovedRequirementsEventDTO extends cccev.s2.certification.domain.CertificationEvent {
        readonly id: string;
        readonly requirementIds: string[];
        s2Id(): string;

    }
}
export namespace cccev.s2.certification.domain.model {
    interface CertificationDTO {
        readonly id: string;
        readonly identifier: string;
        readonly name: string;
        readonly description?: string;
        readonly startDate?: number;
        readonly endDate?: number;
        readonly estimatedEndDate?: number;
        readonly creator?: string;
        readonly executor?: string;
        readonly validator?: string;
        readonly isPublic: boolean;
        readonly issuable: boolean;
        readonly verifiable: boolean;
        readonly verifier?: string;
        readonly verificationDate?: number;
        readonly requirements: string[];
        readonly evidences: Record<string, cccev.s2.certification.domain.model.EvidenceDTO>[];
        readonly supportedValues: Record<string, Nullable<string>>;
        readonly requirementStats: Record<string, cccev.s2.certification.domain.model.RequirementStatsDTO>;

    }
}
export namespace cccev.s2.certification.domain.model {
    interface EvidenceDTO {
        readonly id: string;
        readonly name: string;
        readonly file?: city.smartb.fs.s2.file.domain.model.FilePathDTO;
        readonly url?: string;
        readonly isConformantTo: string[];
        readonly supportsConcept: string[];

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

    }
    interface DataUnitCreatedEventDTO extends cccev.s2.unit.domain.command.DataUnitCreatedEventDTO {
        readonly id: string;
        readonly identifier: string;
        readonly name: string;
        readonly description: string;
        readonly notation?: string;
        readonly type: cccev.s2.unit.domain.model.DataUnitType;
        readonly status: s2.dsl.automate.S2State/* cccev.s2.unit.domain.DataUnitState */;
        s2Id(): string;

    }
}
export namespace cccev.f2.unit.domain.model {
    interface DataUnitDTO {
        readonly id: string;
        readonly name: string;
        readonly description: string;
        readonly notation?: string;
        readonly type: string;

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
    interface RequestInformationConceptDTO extends cccev.dsl.model.InformationConcept {
        readonly evidenceTypeChoices: cccev.f2.evidence.domain.model.EvidenceTypeListChoicesDTO;
        readonly supportedValue: cccev.dsl.model.SupportedValueDTO;
        readonly identifier: string;
        readonly name: string;
        readonly unit?: cccev.dsl.model.DataUnitDTO;
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
export namespace cccev.f2.certification.domain.command {
    interface CertificationAddEvidenceCommandDTO {
        readonly id: string;
        readonly name: string;
        readonly url?: string;
        readonly isConformantTo: string[];
        readonly supportsConcept: string[];
        readonly metadata?: Record<string, string>;
        readonly vectorize?: boolean;

    }
    interface CertificationAddedEvidenceEventDTO extends cccev.s2.certification.domain.command.CertificationAddedEvidenceEventDTO {
        readonly id: string;
        readonly evidenceId: string;
        readonly name: string;
        readonly file?: city.smartb.fs.s2.file.domain.model.FilePathDTO;
        readonly url?: string;
        readonly isConformantTo: string[];
        readonly supportsConcept: string[];
        s2Id(): string;

    }
}
export namespace cccev.f2.certification.domain.command {
    interface CertificationAddRequirementsCommandDTO extends cccev.s2.certification.domain.command.CertificationAddRequirementsCommandDTO {
        readonly id: string;
        readonly requirementIds: string[];

    }
    interface CertificationAddedRequirementsEventDTO extends cccev.s2.certification.domain.command.CertificationAddedRequirementsEventDTO {
        readonly id: string;
        readonly requirementIds: string[];
        s2Id(): string;

    }
}
export namespace cccev.f2.certification.domain.command {
    interface CertificationAddValuesCommandDTO extends cccev.s2.certification.domain.command.CertificationAddValuesCommandDTO {
        readonly id: string;
        readonly values: Record<string, Nullable<string>>;

    }
    interface CertificationAddedValuesEventDTO extends cccev.s2.certification.domain.command.CertificationAddedValuesEventDTO {
        readonly id: string;
        readonly values: Record<string, Nullable<string>>;
        s2Id(): string;

    }
}
export namespace cccev.f2.certification.domain.command {
    interface RequestCreateCommandDTO extends cccev.s2.certification.domain.command.CertificationCreateCommandDTO {
        readonly identifier: string;
        readonly name: string;
        readonly description?: string;
        readonly requirements: string[];

    }
    interface RequestCreatedEventDTO extends cccev.s2.certification.domain.command.CertificationCreatedEventDTO {
        readonly id: string;
        readonly identifier: string;
        readonly name: string;
        readonly description?: string;
        readonly requirements: string[];
        s2Id(): string;

    }
}
export namespace cccev.f2.certification.domain.command {
    interface RequestRemoveEvidenceCommandDTO extends cccev.s2.certification.domain.command.CertificationRemoveEvidenceCommandDTO {
        readonly id: string;
        readonly evidenceId: string;

    }
    interface RequestRemovedEvidenceEventDTO extends cccev.s2.certification.domain.command.CertificationRemovedEvidenceEventDTO {
        readonly id: string;
        readonly evidenceId: string;
        s2Id(): string;

    }
}
export namespace cccev.f2.certification.domain.command {
    interface RequestRemoveRequirementsCommandDTO extends cccev.s2.certification.domain.command.CertificationRemoveRequirementsCommandDTO {
        readonly id: string;
        readonly requirementIds: string[];

    }
    interface RequestRemovedRequirementsEventDTO extends cccev.s2.certification.domain.command.CertificationRemovedRequirementsEventDTO {
        readonly id: string;
        readonly requirementIds: string[];
        s2Id(): string;

    }
}
export namespace cccev.f2.certification.domain.model {
    interface CertificationDTO extends cccev.s2.certification.domain.model.CertificationDTO {
        readonly id: string;
        readonly identifier: string;
        readonly name: string;
        readonly description?: string;
        readonly startDate?: number;
        readonly endDate?: number;
        readonly estimatedEndDate?: number;
        readonly creator?: string;
        readonly executor?: string;
        readonly validator?: string;
        readonly isPublic: boolean;
        readonly issuable: boolean;
        readonly verifiable: boolean;
        readonly verifier?: string;
        readonly verificationDate?: number;
        readonly requirements: string[];
        readonly evidences: Record<string, cccev.s2.certification.domain.model.EvidenceDTO>[];
        readonly supportedValues: Record<string, Nullable<string>>;
        readonly requirementStats: Record<string, cccev.s2.certification.domain.model.RequirementStatsDTO>;

    }
}
export namespace cccev.f2.certification.domain.model {
    interface EvidenceDTO extends cccev.s2.certification.domain.model.EvidenceDTO {
        readonly id: string;
        readonly name: string;
        readonly file?: city.smartb.fs.s2.file.domain.model.FilePathDTO;
        readonly url?: string;
        readonly isConformantTo: string[];
        readonly supportsConcept: string[];

    }
}
export namespace cccev.f2.certification.domain.query {
    interface CertificationDownloadEvidenceQueryDTO {
        readonly id: string;
        readonly evidenceId: string;

    }
}
export namespace cccev.f2.certification.domain.query {
    interface CertificationGetByIdentifierQueryDTO {
        readonly identifier: string;

    }
    interface CertificationGetByIdentifierResultDTO {
        readonly item?: cccev.s2.certification.domain.model.CertificationDTO;

    }
}
export namespace cccev.f2.certification.domain.query {
    interface CertificationGetQueryDTO {
        readonly id: string;

    }
    interface CertificationGetResultDTO {
        readonly item?: cccev.s2.certification.domain.model.CertificationDTO;

    }
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
        readonly status: s2.dsl.automate.S2State/* cccev.s2.requirement.domain.RequirementState */;
        s2Id(): string;

    }
}
export namespace cccev.f2.requirement.domain.command {
    interface RequirementUpdateCommandDTO extends cccev.s2.requirement.domain.command.RequirementUpdateCommandDTO {
        readonly id: string;
        readonly name?: string;
        readonly description?: string;

    }
    interface RequirementUpdatedEventDTO extends cccev.s2.requirement.domain.command.RequirementUpdatedEventDTO {
        readonly id: string;
        readonly name?: string;
        readonly description?: string;
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
export namespace city.smartb.registry.program.s2.asset.domain.automate {
    interface AssetPoolInitCommand extends s2.dsl.automate.S2InitCommand {

    }
    interface AssetPoolCommand extends s2.dsl.automate.S2Command<string> {
        readonly id: string;

    }
    interface AssetPoolEvent extends f2.dsl.cqrs.Event, s2.dsl.automate.WithId<string>, s2.dsl.automate.model.WithS2Id<string>/*, city.smartb.registry.program.api.commons.model.S2SourcingEvent<string> */ {
        s2Id(): string;
        readonly id: string;

    }
}
export namespace city.smartb.registry.program.s2.asset.domain.automate {
    interface AssetTransactionInitCommand extends s2.dsl.automate.S2InitCommand {

    }
    interface AssetTransactionCommand extends s2.dsl.automate.S2Command<string> {
        readonly id: string;

    }
    interface AssetTransactionEvent extends f2.dsl.cqrs.Event, s2.dsl.automate.WithId<string>, s2.dsl.automate.model.WithS2Id<string>/*, city.smartb.registry.program.api.commons.model.S2SourcingEvent<string> */ {
        s2Id(): string;
        readonly id: string;

    }
}
export namespace city.smartb.registry.program.s2.asset.domain.command.pool {
    interface AssetPoolCloseCommandDTO extends city.smartb.registry.program.s2.asset.domain.automate.AssetPoolCommand {
        readonly id: string;

    }
}
export namespace city.smartb.registry.program.s2.asset.domain.command.pool {
    interface AssetPoolHoldCommandDTO extends city.smartb.registry.program.s2.asset.domain.automate.AssetPoolCommand {
        readonly id: string;

    }
}
export namespace city.smartb.registry.program.s2.asset.domain.command.pool {
    interface AssetPoolResumeCommandDTO extends city.smartb.registry.program.s2.asset.domain.automate.AssetPoolCommand {
        readonly id: string;

    }
}
export namespace city.smartb.registry.program.s2.asset.domain.model {
    interface AssetPoolStats {
        readonly available: number;
        readonly retired: number;
        readonly transferred: number;

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
export namespace cccev.f2.certification.client {
    class CertificationClient /* implements cccev.f2.certification.domain.CertificationApi */ {
        constructor(client: f2.client.F2Client);
        get client(): f2.client.F2Client;
    }
}
export namespace cccev.f2.certification.client {
    function requestClient(urlBase: string): f2.dsl.fnc.F2SupplierSingle<cccev.f2.certification.client.CertificationClient>;
}
export namespace cccev.s2.requirement.client {
    class RequirementClient /* implements cccev.f2.requirement.domain.RequirementApi */ {
        constructor(client: f2.client.F2Client);
    }
}
export namespace cccev.s2.requirement.client {
    function requirementClient(urlBase: string): f2.dsl.fnc.F2SupplierSingle<cccev.s2.requirement.client.RequirementClient>;
}
export namespace cccev.f2.concept.client {
    class InformationConceptClient /* implements cccev.f2.concept.domain.InformationConceptApi */ {
        constructor(client: f2.client.F2Client);
    }
}
export namespace cccev.f2.concept.client {
    function informationConceptClient(urlBase: string): f2.dsl.fnc.F2SupplierSingle<cccev.f2.concept.client.InformationConceptClient>;
}
export namespace cccev.f2.evidence.type.client {
    class EvidenceTypeClient /* implements cccev.f2.evidence.type.domain.EvidenceTypeApi */ {
        constructor(client: f2.client.F2Client);
    }
}
export namespace cccev.f2.evidence.type.client {
    function evidenceTypeClient(urlBase: string): f2.dsl.fnc.F2SupplierSingle<cccev.f2.evidence.type.client.EvidenceTypeClient>;
}
export namespace cccev.f2.framework.client {
    class FrameworkClient /* implements cccev.f2.framework.domain.FrameworkApi */ {
        constructor(client: f2.client.F2Client);
    }
}
export namespace cccev.f2.framework.client {
    function frameworkClient(urlBase: string): f2.dsl.fnc.F2SupplierSingle<cccev.f2.framework.client.FrameworkClient>;
}
export namespace cccev.f2.unit.client {
    class DataUnitClient /* implements cccev.f2.unit.domain.DataUnitApi */ {
        constructor(client: f2.client.F2Client);
    }
}
export namespace cccev.f2.unit.client {
    function dataUnitClient(urlBase: string): f2.dsl.fnc.F2SupplierSingle<cccev.f2.unit.client.DataUnitClient>;
}
export namespace city.smartb.registry.program.s2.project.domain.automate {
    interface ProjectInitCommand extends s2.dsl.automate.S2InitCommand {

    }
    interface ProjectCommand extends s2.dsl.automate.S2Command<string> {
        readonly id: string;

    }
    interface ProjectEvent extends f2.dsl.cqrs.Event, s2.dsl.automate.WithId<string>, s2.dsl.automate.model.WithS2Id<string>/*, city.smartb.registry.program.api.commons.model.S2SourcingEvent<string> */ {
        s2Id(): string;
        readonly id: string;

    }
}
export namespace city.smartb.registry.program.s2.project.domain.command {
    interface ProjectAddAssetPoolCommandDTO extends city.smartb.registry.program.s2.project.domain.automate.ProjectCommand {
        readonly id: string;

    }
    interface ProjectAddedAssetPoolEventDTO extends city.smartb.registry.program.s2.project.domain.automate.ProjectEvent {
        readonly id: string;
        readonly poolId: string;
        s2Id(): string;

    }
}
export namespace city.smartb.registry.program.s2.project.domain.command {
    interface ProjectChangePrivacyCommandDTO extends city.smartb.registry.program.s2.project.domain.automate.ProjectCommand {
        readonly id: string;

    }
    interface ProjectChangedPrivacyEventDTO extends city.smartb.registry.program.s2.project.domain.automate.ProjectEvent {
        readonly id: string;
        readonly isPrivate: boolean;
        s2Id(): string;

    }
}
export namespace city.smartb.registry.program.s2.project.domain.command {
    interface ProjectCreateCommandDTO /* extends city.smartb.registry.program.s2.project.domain.command.ProjectAbstractMsg */ {
        isPrivate: Nullable<boolean>;

    }
    interface ProjectCreatedEventDTO extends city.smartb.registry.program.s2.project.domain.automate.ProjectEvent/*, city.smartb.registry.program.s2.project.domain.command.ProjectAbstractMsg */ {
        readonly id: string;
        isPrivate: Nullable<boolean>;
        s2Id(): string;

    }
}
export namespace city.smartb.registry.program.s2.project.domain.command {
    interface ProjectDeleteCommandDTO extends city.smartb.registry.program.s2.project.domain.automate.ProjectCommand {
        readonly id: string;

    }
    interface ProjectDeletedEventDTO extends city.smartb.registry.program.s2.project.domain.automate.ProjectEvent {
        readonly id: string;
        s2Id(): string;

    }
}
export namespace city.smartb.registry.program.s2.project.domain.command {
    interface ProjectUpdateCommandDTO /* extends city.smartb.registry.program.s2.project.domain.command.ProjectAbstractMsg */ {

    }
    interface ProjectUpdatedEventDTO extends city.smartb.registry.program.s2.project.domain.automate.ProjectEvent/*, city.smartb.registry.program.s2.project.domain.command.ProjectAbstractMsg */ {
        readonly id: string;
        s2Id(): string;

    }
}
export namespace city.smartb.registry.program.s2.project.domain.model {
    interface CertificationRefDTO {
        readonly id: string;
        readonly identifier: string;

    }
}
export namespace city.smartb.registry.program.s2.project.domain.model {
    interface ProjectDTO extends s2.dsl.automate.model.WithS2State<s2.dsl.automate.S2State/* city.smartb.registry.program.s2.project.domain.automate.ProjectState */>, s2.dsl.automate.model.WithS2Id<string> {
        readonly id: string;
        readonly identifier?: string;
        readonly name?: string;
        readonly country?: string;
        readonly indicator: string;
        readonly creditingPeriodStartDate?: number;
        readonly creditingPeriodEndDate?: number;
        readonly description?: string;
        readonly dueDate?: number;
        readonly estimatedReductions?: string;
        readonly localization?: string;
        readonly proponent?: city.smartb.registry.program.s2.project.domain.model.OrganizationRefDTO/* Nullable<city.smartb.registry.program.s2.project.domain.model.OrganizationRef> */;
        readonly type?: number;
        readonly referenceYear?: string;
        readonly registrationDate?: number;
        readonly vintage?: string;
        readonly slug?: string;
        readonly vvb?: city.smartb.registry.program.s2.project.domain.model.OrganizationRefDTO/* Nullable<city.smartb.registry.program.s2.project.domain.model.OrganizationRef> */;
        readonly assessor?: city.smartb.registry.program.s2.project.domain.model.OrganizationRefDTO/* Nullable<city.smartb.registry.program.s2.project.domain.model.OrganizationRef> */;
        readonly location?: city.smartb.registry.program.api.commons.model.GeoLocationDTO;
        readonly activities?: string[];
        readonly certification?: city.smartb.registry.program.s2.project.domain.model.CertificationRefDTO;
        readonly status: s2.dsl.automate.S2State/* city.smartb.registry.program.s2.project.domain.automate.ProjectState */;
        readonly creationDate?: number;
        readonly lastModificationDate?: number;
        readonly sdgs?: number[];
        readonly assetPools: string[];
        readonly isPrivate: boolean;
        s2State(): s2.dsl.automate.S2State/* city.smartb.registry.program.s2.project.domain.automate.ProjectState */;
        s2Id(): string;

    }
    interface OrganizationRefDTO {
        readonly id: string;
        readonly name: string;

    }
}
export namespace city.smartb.registry.program.f2.pool.domain.command {
    interface AssetIssueCommandDTO /* extends city.smartb.registry.program.f2.pool.domain.command.AbstractAssetTransactionCommand */ {

    }
    interface AssetIssuedEventDTO {
        readonly id: string;
        readonly transactionId: string;

    }
}
export namespace city.smartb.registry.program.f2.pool.domain.command {
    interface AssetOffsetCommandDTO {
        readonly id: string;
        readonly from: string;
        readonly to: string;
        readonly quantity: number;
        readonly draft: boolean;

    }
    interface AssetOffsettedEventDTO {
        readonly id: string;

    }
}
export namespace city.smartb.registry.program.f2.pool.domain.command {
    interface AssetPoolCloseCommandDTO extends city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolCloseCommandDTO {
        readonly id: string;

    }
    interface AssetPoolClosedEventDTO {
        readonly id: string;

    }
}
export namespace city.smartb.registry.program.f2.pool.domain.command {
    interface AssetPoolCreateCommandDTO {
        readonly vintage: string;
        readonly indicator: string;
        readonly granularity: number;

    }
    interface AssetPoolCreatedEventDTO {
        readonly id: string;

    }
}
export namespace city.smartb.registry.program.f2.pool.domain.command {
    interface AssetPoolHoldCommandDTO extends city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolHoldCommandDTO {
        readonly id: string;

    }
    interface AssetPoolHeldEventDTO {
        readonly id: string;

    }
}
export namespace city.smartb.registry.program.f2.pool.domain.command {
    interface AssetPoolResumeCommandDTO extends city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolResumeCommandDTO {
        readonly id: string;

    }
    interface AssetPoolResumedEventDTO {
        readonly id: string;

    }
}
export namespace city.smartb.registry.program.f2.pool.domain.command {
    interface AssetRetireCommandDTO {
        readonly id: string;
        readonly from: string;
        readonly quantity: number;
        readonly draft: boolean;

    }
    interface AssetRetiredEventDTO {
        readonly id: string;

    }
}
export namespace city.smartb.registry.program.f2.pool.domain.command {
    interface AssetTransferCommandDTO {
        readonly id: string;
        readonly from: string;
        readonly to: string;
        readonly quantity: number;
        readonly draft: boolean;

    }
    interface AssetTransferredEventDTO {
        readonly id: string;

    }
}
export namespace city.smartb.registry.program.f2.pool.domain.model {
    interface AssetPoolDTO extends s2.dsl.automate.model.WithS2State<s2.dsl.automate.S2State/* city.smartb.registry.program.s2.asset.domain.automate.AssetPoolState */> {
        readonly id: string;
        readonly status: string;
        readonly vintage?: string;
        readonly indicator: cccev.f2.concept.domain.model.InformationConceptDTO;
        readonly granularity: number;
        readonly wallets: Record<string, number>;
        readonly stats: city.smartb.registry.program.s2.asset.domain.model.AssetPoolStats;
        readonly metadata: Record<string, Nullable<string>>;
        s2State(): s2.dsl.automate.S2State/* city.smartb.registry.program.s2.asset.domain.automate.AssetPoolState */;

    }
}
export namespace city.smartb.registry.program.f2.pool.domain.model {
    interface AssetTransactionDTO extends s2.dsl.automate.model.WithS2State<s2.dsl.automate.S2State/* city.smartb.registry.program.s2.asset.domain.automate.AssetTransactionState */> {
        readonly id: string;
        readonly date: number;
        readonly poolId: string;
        readonly type: string;
        readonly from?: string;
        readonly to?: string;
        readonly by: string;
        readonly quantity: number;
        readonly unit: string;
        readonly vintage?: string;
        readonly file?: city.smartb.fs.s2.file.domain.model.FilePathDTO;
        readonly status: string;
        s2State(): s2.dsl.automate.S2State/* city.smartb.registry.program.s2.asset.domain.automate.AssetTransactionState */;

    }
}
export namespace city.smartb.registry.program.f2.pool.domain.query {
    interface AssetCertificateDownloadQueryDTO {
        readonly transactionId: string;

    }
}
export namespace city.smartb.registry.program.f2.pool.domain.query {
    interface AssetStatsGetQueryDTO {
        readonly projectId: string;

    }
    interface AssetStatsGetResultDTO {
        readonly available: number;
        readonly retired: number;
        readonly transferred: number;

    }
}
export namespace city.smartb.registry.program.f2.pool.domain.query {
    interface AssetPoolGetQueryDTO {
        readonly id: string;

    }
    interface AssetPoolGetResultDTO {
        readonly item?: city.smartb.registry.program.f2.pool.domain.model.AssetPoolDTO;

    }
}
export namespace city.smartb.registry.program.f2.pool.domain.query {
    interface AssetPoolPageQueryDTO {
        readonly limit?: number;
        readonly offset?: number;
        readonly status?: string;
        readonly vintage?: string;

    }
    interface AssetPoolPageResultDTO extends f2.dsl.cqrs.page.PageQueryResultDTO<city.smartb.registry.program.f2.pool.domain.model.AssetPoolDTO> {
        readonly total: number;
        readonly items: city.smartb.registry.program.f2.pool.domain.model.AssetPoolDTO[];
        readonly pagination?: f2.dsl.cqrs.page.OffsetPaginationDTO;

    }
}
export namespace city.smartb.registry.program.f2.pool.domain.query {
    interface AssetTransactionGetQueryDTO {
        readonly transactionId: string;

    }
    interface AssetTransactionGetResultDTO {
        readonly item?: city.smartb.registry.program.f2.pool.domain.model.AssetTransactionDTO;

    }
}
export namespace city.smartb.registry.program.f2.pool.domain.query {
    interface AssetTransactionPageQueryDTO {
        readonly limit?: number;
        readonly offset?: number;
        readonly projectId?: string;
        readonly poolId?: string;
        readonly transactionId?: string;
        readonly transactionFrom?: string;
        readonly transactionTo?: string;
        readonly type?: string;

    }
    interface AssetTransactionPageResultDTO extends f2.dsl.cqrs.page.PageDTO<city.smartb.registry.program.f2.pool.domain.model.AssetTransactionDTO> {
        readonly total: number;
        readonly items: city.smartb.registry.program.f2.pool.domain.model.AssetTransactionDTO[];

    }
}
export namespace city.smartb.registry.program.f2.pool.domain.utils {
    const AssetPoolPolicies: {
        canList(authedUser: city.smartb.im.commons.auth.AuthedUserDTO): boolean;
        canCreate(authedUser: city.smartb.im.commons.auth.AuthedUserDTO): boolean;
        canHold(authedUser: city.smartb.im.commons.auth.AuthedUserDTO, assetPool: city.smartb.registry.program.f2.pool.domain.model.AssetPoolDTO): boolean;
        canResume(authedUser: city.smartb.im.commons.auth.AuthedUserDTO, assetPool: city.smartb.registry.program.f2.pool.domain.model.AssetPoolDTO): boolean;
        canClose(authedUser: city.smartb.im.commons.auth.AuthedUserDTO, assetPool: city.smartb.registry.program.f2.pool.domain.model.AssetPoolDTO): boolean;
        canIssue(authedUser: city.smartb.im.commons.auth.AuthedUserDTO): boolean;
        canTransfer(authedUser: city.smartb.im.commons.auth.AuthedUserDTO): boolean;
        canOffset(authedUser: city.smartb.im.commons.auth.AuthedUserDTO): boolean;
        canRetire(authedUser: city.smartb.im.commons.auth.AuthedUserDTO): boolean;
        canEmitTransactionForOther(authedUser: city.smartb.im.commons.auth.AuthedUserDTO): boolean;
    };
}
export namespace city.smartb.registry.program.f2.pool.domain.utils {
    const AssetPoolStatusValues: {
        active(): string;
        onHold(): string;
        closed(): string;
    };
}
export namespace city.smartb.registry.program.f2.pool.domain.utils {
    const TransactionStatusValues: {
        emitted(): string;
        cancelled(): string;
    };
}
export namespace city.smartb.registry.program.f2.pool.domain.utils {
    const TransactionTypeValues: {
        issued(): string;
        transferred(): string;
        retired(): string;
        offset(): string;
    };
}
export as namespace verified_emission_reduction_registry_asset_pool_f2_domain;