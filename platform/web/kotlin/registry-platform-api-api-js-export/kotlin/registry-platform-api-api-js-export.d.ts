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
    interface Problem extends f2.dsl.cqrs.Message {

    }
}
export declare namespace f2.dsl.cqrs {
    interface Query extends f2.dsl.cqrs.Message {

    }
}
export declare namespace f2.dsl.cqrs.envelope {
    interface EnvelopeDTO<T> extends f2.dsl.cqrs.Message/*, f2.dsl.cqrs.envelope.WithEnvelopeId, f2.dsl.cqrs.envelope.WithEnvelopeData<T> */ {
        readonly type: string;
        readonly datacontenttype?: string;
        readonly specversion?: string;
        readonly source?: string;
        readonly time?: string;

    }
    class Envelope<T> implements f2.dsl.cqrs.envelope.EnvelopeDTO<T> {
        constructor(id: string, data: T, type: string, datacontenttype?: string, specversion?: string, source?: string, time?: string);
        get type(): string;
        get datacontenttype(): Nullable<string>;
        get specversion(): Nullable<string>;
        get source(): Nullable<string>;
        get time(): Nullable<string>;
        
    }
}
export declare namespace f2.dsl.cqrs.error {
    interface F2ErrorDTO extends f2.dsl.cqrs.Problem {
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
export declare namespace f2.client.domain {
    abstract class AuthRealm {
        protected constructor(serverUrl: string, realmId: string, clientId: string, redirectUrl?: string);
        get serverUrl(): string;
        get realmId(): string;
        get clientId(): string;
        get redirectUrl(): Nullable<string>;
    }
    class AuthRealmPassword extends f2.client.domain.AuthRealm {
        constructor(serverUrl: string, realmId: string, redirectUrl: string, clientId: string, username: string, password: string);
        get serverUrl(): string;
        get realmId(): string;
        get redirectUrl(): string;
        get clientId(): string;
        get username(): string;
        get password(): string;
        copy(serverUrl?: string, realmId?: string, redirectUrl?: string, clientId?: string, username?: string, password?: string): f2.client.domain.AuthRealmPassword;
        toString(): string;
        hashCode(): number;
        equals(other?: any): boolean;
    }
    class AuthRealmClientSecret extends f2.client.domain.AuthRealm {
        constructor(serverUrl: string, realmId: string, clientId: string, redirectUrl?: string | undefined, clientSecret: string, isPublic?: boolean);
        get serverUrl(): string;
        get realmId(): string;
        get clientId(): string;
        get redirectUrl(): Nullable<string>;
        get clientSecret(): string;
        get isPublic(): boolean;
        copy(serverUrl?: string, realmId?: string, clientId?: string, redirectUrl?: string, clientSecret?: string, isPublic?: boolean): f2.client.domain.AuthRealmClientSecret;
        toString(): string;
        hashCode(): number;
        equals(other?: any): boolean;
    }
}
export declare namespace io.komune.im.commons.auth {
    interface AuthedUserDTO {
        readonly id: string;
        readonly identifier?: string;
        readonly memberOf?: string;
        readonly roles?: Array<string>;
        readonly acr?: string;

    }
}
export declare namespace io.komune.im.commons.auth {
    type ImPermission = "IM_FORCE_MFA_OTP" | "IM_USER_READ" | "IM_USER_ROLE_READ" | "IM_USER_WRITE" | "IM_ORGANIZATION_READ" | "IM_ORGANIZATION_WRITE" | "IM_MY_ORGANIZATION_WRITE" | "IM_ORGANIZATION_API_KEY_READ" | "IM_ORGANIZATION_STATUS_WRITE" | "IM_APIKEY_READ" | "IM_APIKEY_WRITE" | "IM_SPACE_READ" | "IM_SPACE_WRITE" | "IM_ROLE_READ" | "IM_ROLE_WRITE";
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
export declare namespace f2.dsl.fnc.operators {
    class Batch {
        constructor(size?: number, concurrency?: number);
        get size(): number;
        get concurrency(): number;
        copy(size?: number, concurrency?: number): f2.dsl.fnc.operators.Batch;
        toString(): string;
        hashCode(): number;
        equals(other?: any): boolean;
        
    }
}
export declare namespace f2.dsl.fnc {
    interface F2Function<T, R> {
        invokePromise(cmds: Array<T>): Promise<Array<R>>;

    }
    interface F2Consumer<T> {
        invokePromise(cmds: Array<T>): Promise<void>;

    }
    interface F2Supplier<R> {
        invokePromise(): Promise<Array<R>>;

    }
    interface F2SupplierSingle<R> {
        invokePromise(): Promise<R>;

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
export declare namespace io.komune.im.core.mfa.domain.model {
    type ImMfaPasswordOtpFlowAcr = "PASSWORD_ONLY" | "PASSWORD_OTP";
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
export declare namespace io.komune.im.f2.privilege.domain.feature.command {
    interface FeatureDefineCommandDTO {
        readonly identifier: string;
        readonly description: string;

    }
    interface FeatureDefinedEventDTO extends f2.dsl.cqrs.Event {
        readonly identifier: string;

    }
}
export declare namespace io.komune.im.f2.privilege.domain.feature.model {
    interface FeatureDTO extends io.komune.im.f2.privilege.domain.model.PrivilegeDTO {
        readonly id: string;
        readonly type: string;
        readonly identifier: string;
        readonly description: string;

    }
}
export declare namespace io.komune.im.f2.privilege.domain.feature.query {
    interface FeatureGetQueryDTO {
        readonly identifier: string;

    }
    interface FeatureGetResultDTO {
        readonly item?: io.komune.im.f2.privilege.domain.feature.model.FeatureDTO;

    }
}
export declare namespace io.komune.im.f2.privilege.domain.feature.query {
    interface FeatureListQueryDTO {

    }
    interface FeatureListResultDTO {
        readonly items: io.komune.im.f2.privilege.domain.feature.model.FeatureDTO[];

    }
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
        readonly features?: string[][];

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
        readonly features?: string[][];

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
        checkRefList(authedUser?: io.komune.im.commons.auth.AuthedUserDTO): boolean;
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
    interface OrganizationRefGetQueryDTO extends f2.dsl.cqrs.Query {
        readonly id: string;

    }
    interface OrganizationRefGetResultDTO extends f2.dsl.cqrs.Event {
        readonly item?: io.komune.im.f2.organization.domain.model.OrganizationRefDTO;

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
    interface UserDisableMfaCommandDTO extends f2.dsl.cqrs.Command {
        readonly id: string;

    }
    interface UserDisabledMfaEventDTO extends f2.dsl.cqrs.Event {
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
        readonly memberOf?: string;
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
        readonly mfa?: string[];
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
        canConfigureMfa(authedUser: io.komune.im.commons.auth.AuthedUserDTO, user: io.komune.im.f2.user.domain.model.UserDTO): boolean;
        canDisableMfa(authedUser: io.komune.im.commons.auth.AuthedUserDTO, user: io.komune.im.f2.user.domain.model.UserDTO): boolean;
        canDisableMfaAcr(authedUser: io.komune.im.commons.auth.AuthedUserDTO, user: io.komune.im.f2.user.domain.model.UserDTO): boolean;
        canUpdateMemberOf(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        canUpdateRole(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
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
    type EnvelopeType = "TRANSACTION_ENVELOPE" | "ENVELOPE";
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
    interface BatchPropertiesDTO {
        readonly timeout: number;
        readonly size: number;
        readonly concurrency: number;

    }
    class SsmBatchProperties implements ssm.chaincode.dsl.config.BatchPropertiesDTO {
        constructor(timeout?: number, size?: number, concurrency?: number);
        get timeout(): number;
        get size(): number;
        get concurrency(): number;
        
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
        get private(): Nullable<Record<string, string>>;
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
        get private(): Nullable<Record<string, string>>;
        
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
        get roles(): Nullable<Record<string, string>>;
        get public(): Nullable<any>;
        get private(): Nullable<Record<string, string>>;
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
        copy(uri?: string): ssm.chaincode.dsl.model.uri.ChaincodeUri;
        toString(): string;
        hashCode(): number;
        equals(other?: any): boolean;
        
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
        get withResultAsAction(): boolean;
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
        readonly cause?: Error;

    }
    class S2ErrorBase implements s2.dsl.automate.S2Error {
        constructor(type: string, description: string, date: string, payload: Record<string, string>, cause?: Error);
        get type(): string;
        get description(): string;
        get date(): string;
        get payload(): Record<string, string>;
        get cause(): Nullable<Error>;
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
    interface WithS2Iteration {
        s2Iteration(): number;

    }
}
export declare namespace s2.dsl.automate.model {
    interface WithS2State<STATE> {
        s2State(): STATE;

    }
}
export declare namespace io.komune.registry.s2.commons.auth {
    /** @deprecated Will be removed, use Permissions instead. */
    const Roles: {
        get ORCHESTRATOR(): string;
        get ORCHESTRATOR_ADMIN(): string;
        get ORCHESTRATOR_USER(): string;
        get PROJECT_MANAGER(): string;
        get PROJECT_MANAGER_ADMIN(): string;
        get PROJECT_MANAGER_USER(): string;
        get STAKEHOLDER(): string;
        get STAKEHOLDER_ADMIN(): string;
        get STAKEHOLDER_USER(): string;
    };
}
export declare namespace io.komune.registry.s2.commons.model {
    interface FacetPageDTO<T> extends f2.dsl.cqrs.page.PageDTO<T> {
        readonly total: number;
        readonly items: T[];
        readonly facets: io.komune.registry.s2.commons.model.FacetDTO[];

    }
    interface FacetDTO {
        readonly key: string;
        readonly label: string;
        readonly values: io.komune.registry.s2.commons.model.FacetValueDTO[];

    }
    interface FacetValueDTO {
        readonly key: string;
        readonly label: string;
        readonly count: number;

    }
}
export declare namespace io.komune.registry.s2.commons.model {
    interface GeoLocationDTO {
        readonly lat: number;
        readonly lon: number;

    }
}
export declare namespace io.komune.registry.s2.commons.model {
    interface LocationDTO {
        readonly country?: string;
        readonly region?: string;

    }
}
export declare namespace io.komune.registry.s2.commons.model.form {
    interface FormDTO {
        readonly sections: io.komune.registry.s2.commons.model.form.FormSectionDTO[];
        readonly properties?: io.komune.registry.s2.commons.model.form.FormPropertiesDTO;
        readonly initialValues?: Record<string, string>;

    }
}
export declare namespace io.komune.registry.s2.commons.model.form {
    interface FormConditionDTO {
        readonly type: io.komune.registry.s2.commons.model.form.FormConditionType;
        readonly expression: string;
        readonly error?: string;
        readonly message?: string;

    }
    type FormConditionType = "display" | "enable" | "validator" | "info" | "error" | "warning";
}
export declare namespace io.komune.registry.s2.commons.model.form {
    interface FormFieldDTO {
        readonly name: string;
        readonly label?: string;
        readonly type: string;
        readonly required: boolean;
        readonly description?: string;
        readonly helperText?: string;
        readonly options?: io.komune.registry.s2.commons.model.form.FormOptionDTO[];
        readonly conditions?: io.komune.registry.s2.commons.model.form.FormConditionDTO[];
        readonly properties?: io.komune.registry.s2.commons.model.form.FormFieldPropertiesDTO;

    }
}
export declare namespace io.komune.registry.s2.commons.model.form {
    interface FormFieldPropertiesDTO {
        readonly chipLimit?: number;
        readonly fileTypesAllowed?: string[];
        readonly filters?: string;
        readonly multiline?: boolean;
        readonly multiple?: boolean;
        readonly options?: io.komune.registry.s2.commons.model.form.FormOptionDTO[];
        readonly rows?: number;
        readonly textFieldType?: io.komune.registry.s2.commons.model.form.TextFieldType;

    }
}
export declare namespace io.komune.registry.s2.commons.model.form {
    interface FormOptionDTO {
        readonly key: string;
        readonly label?: string;
        readonly color?: string;

    }
}
export declare namespace io.komune.registry.s2.commons.model.form {
    interface FormPropertiesDTO {
        readonly readOnly?: boolean;

    }
}
export declare namespace io.komune.registry.s2.commons.model.form {
    interface FormSectionDTO {
        readonly id: string;
        readonly label?: string;
        readonly fields: io.komune.registry.s2.commons.model.form.FormFieldDTO[];
        readonly conditions?: io.komune.registry.s2.commons.model.form.FormConditionDTO[];
        readonly properties?: Record<string, any>;

    }
}
export declare namespace io.komune.registry.s2.commons.model.form {
    type TextFieldType = "number" | "text" | "email" | "password" | "search";
}
export declare namespace io.komune.registry.s2.commons.model.table {
    interface TableDTO {
        readonly columns: io.komune.registry.s2.commons.model.table.TableColumnDTO[];

    }
}
export declare namespace io.komune.registry.s2.commons.model.table {
    interface TableColumnDTO {
        readonly type: string;
        readonly label: string;
        readonly value: string;
        readonly properties?: io.komune.registry.s2.commons.model.table.TableColumnPropertiesDTO;
        readonly style?: Record<string, string>;

    }
}
export declare namespace io.komune.registry.s2.commons.model.table {
    interface TableColumnPropertiesDTO {
        readonly limit?: number;

    }
}
export declare namespace io.komune.fs.s2.file.domain.features.query {
    interface FileAskQuestionQueryDTO {
        readonly question: string;
        readonly history: io.komune.fs.s2.file.domain.model.ChatMessageDTO[];
        readonly metadata: io.komune.fs.s2.file.domain.model.ChatMetadataDTO;

    }
    interface FileAskQuestionResultDTO {
        readonly item: string;

    }
}
export declare namespace io.komune.fs.s2.file.domain.model {
    interface DirectoryPathDTO {
        readonly objectType: string;
        readonly objectId: string;
        readonly directory: string;

    }
}
export declare namespace io.komune.fs.s2.file.domain.model {
    interface ChatMessageDTO {
        readonly content: string;
        readonly type: string;

    }
}
export declare namespace io.komune.fs.s2.file.domain.model {
    interface ChatMetadataDTO {
        readonly targetedFiles: string[];

    }
}
export declare namespace io.komune.fs.s2.file.domain.model {
    interface FilePathDTO {
        readonly objectType: string;
        readonly objectId: string;
        readonly directory: string;
        readonly name: string;

    }
}
export declare namespace io.komune.registry.control.core.cccev {
    interface CccevFlatGraphDTO {
        readonly certifications: Record<string, io.komune.registry.control.core.cccev.certification.model.CertificationFlatDTO>;
        readonly requirementCertifications: Record<string, io.komune.registry.control.core.cccev.certification.model.RequirementCertificationFlatDTO>;
        readonly requirements: Record<string, io.komune.registry.control.core.cccev.requirement.model.RequirementFlatDTO>;
        readonly concepts: Record<string, io.komune.registry.control.core.cccev.concept.model.InformationConceptFlatDTO>;
        readonly evidenceTypes: Record<string, io.komune.registry.control.core.cccev.evidencetype.model.EvidenceTypeFlatDTO>;
        readonly units: Record<string, io.komune.registry.control.core.cccev.unit.model.DataUnitFlatDTO>;
        readonly unitOptions: Record<string, io.komune.registry.control.core.cccev.unit.model.DataUnitOptionFlatDTO>;
        readonly supportedValues: Record<string, io.komune.registry.control.core.cccev.certification.model.SupportedValueFlatDTO>;

    }
}
export declare namespace io.komune.registry.control.core.cccev.certification.command {
    interface CertificationAddEvidenceCommandDTO {
        readonly id: string;
        readonly rootRequirementCertificationId?: string;
        readonly evidenceTypeId: string;
        readonly filePath?: io.komune.fs.s2.file.domain.model.FilePathDTO;
        readonly vectorize: boolean;

    }
    interface CertificationAddedEvidenceEventDTO {
        readonly id: string;
        readonly rootRequirementCertificationId?: string;
        readonly evidenceId: string;
        readonly filePath: io.komune.fs.s2.file.domain.model.FilePathDTO;

    }
}
export declare namespace io.komune.registry.control.core.cccev.certification.command {
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
export declare namespace io.komune.registry.control.core.cccev.certification.command {
    interface CertificationCreateCommandDTO {
        readonly id?: string;
        readonly requirementIdentifiers: string[];

    }
    interface CertificationCreatedEventDTO {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.control.core.cccev.certification.command {
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
export declare namespace io.komune.registry.control.core.cccev.certification.command {
    interface CertificationRemoveRequirementsCommandDTO {
        readonly id: string;
        readonly requirementIds: string[];

    }
    interface CertificationRemovedRequirementsEventDTO {
        readonly id: string;
        readonly requirementIds: string[];

    }
}
export declare namespace io.komune.registry.control.core.cccev.certification.model {
    interface CertificationFlatDTO {
        readonly id: string;
        readonly requirementCertificationIds: string[];

    }
}
export declare namespace io.komune.registry.control.core.cccev.certification.model {
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
export declare namespace io.komune.registry.control.core.cccev.certification.model {
    interface SupportedValueFlatDTO {
        readonly id: string;
        readonly value?: string;
        readonly conceptIdentifier: string;

    }
}
export declare namespace io.komune.registry.control.core.cccev.concept.command {
    interface InformationConceptCreateCommandDTO {
        readonly identifier?: string;
        readonly name: string;
        readonly unitId: string;
        readonly description?: string;
        readonly expressionOfExpectedValue?: string;
        readonly dependsOn: string[];

    }
    interface InformationConceptCreatedEventDTO {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.control.core.cccev.concept.command {
    interface InformationConceptUpdateCommandDTO {
        readonly id: string;
        readonly name: string;
        readonly description?: string;
        readonly expressionOfExpectedValue?: string;
        readonly dependsOn: string[];

    }
    interface InformationConceptUpdatedEventDTO {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.control.core.cccev.concept.model {
    interface InformationConceptFlatDTO {
        readonly id: string;
        readonly identifier: string;
        readonly name: string;
        readonly unitIdentifier: string;
        readonly description?: string;
        readonly expressionOfExpectedValue?: string;
        readonly dependsOn: string[];

    }
}
export declare namespace io.komune.registry.control.core.cccev.evidencetype.command {
    interface EvidenceTypeCreateCommandDTO {
        readonly id?: string;
        readonly name: string;
        readonly conceptIdentifiers: string[];

    }
    interface EvidenceTypeCreatedEventDTO {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.control.core.cccev.evidencetype.model {
    interface EvidenceTypeFlatDTO {
        readonly id: string;
        readonly name: string;
        readonly conceptIdentifiers: string[];

    }
}
export declare namespace io.komune.registry.control.core.cccev.requirement.command {
    interface RequirementAddRequirementsCommandDTO {
        readonly id: string;
        readonly requirementIds: string[];

    }
    interface RequirementAddedRequirementsEventDTO {
        readonly id: string;
        readonly requirementIds: string[];

    }
}
export declare namespace io.komune.registry.control.core.cccev.requirement.command {
    interface RequirementCreatedEventDTO {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.control.core.cccev.requirement.command {
    interface RequirementUpdateCommandDTO {
        readonly id: string;
        readonly name?: string;
        readonly description?: string;
        readonly type?: string;
        readonly conceptIds: string[];
        readonly evidenceTypeIds: string[];
        readonly subRequirementIds: string[];
        readonly enablingCondition?: string;
        readonly enablingConditionDependencies: string[];
        readonly required: boolean;
        readonly validatingCondition?: string;
        readonly validatingConditionDependencies: string[];
        readonly evidenceValidatingCondition?: string;
        readonly order?: number;
        readonly properties?: Record<string, Nullable<string>>;

    }
    interface RequirementUpdatedEventDTO {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.control.core.cccev.requirement.model {
    interface RequirementFlatDTO {
        readonly id: string;
        readonly identifier: string;
        readonly kind: io.komune.registry.control.core.cccev.requirement.model.RequirementKind;
        readonly description?: string;
        readonly type?: string;
        readonly name?: string;
        readonly subRequirementIds: string[];
        readonly conceptIdentifiers: string[];
        readonly evidenceTypeIds: string[];
        readonly enablingCondition?: string;
        readonly enablingConditionDependencies: string[];
        readonly required: boolean;
        readonly validatingCondition?: string;
        readonly validatingConditionDependencies: string[];
        readonly order?: number;
        readonly properties?: Record<string, Nullable<string>>;

    }
}
export declare namespace io.komune.registry.control.core.cccev.requirement.model {
    type RequirementKind = "CONSTRAINT" | "CRITERION" | "INFORMATION";
}
export declare namespace io.komune.registry.control.core.cccev.unit.command {
    interface DataUnitOptionCommandDTO {
        readonly id?: string;
        readonly identifier: string;
        readonly name: string;
        readonly value: string;
        readonly order: number;
        readonly icon?: io.komune.fs.s2.file.domain.model.FilePathDTO;
        readonly color?: string;

    }
}
export declare namespace io.komune.registry.control.core.cccev.unit.model {
    interface DataUnitFlatDTO {
        readonly id: string;
        readonly identifier: string;
        readonly name: string;
        readonly description?: string;
        readonly abbreviation?: string;
        readonly type: io.komune.registry.control.core.cccev.unit.model.DataUnitType;
        readonly optionIdentifiers: string[];

    }
}
export declare namespace io.komune.registry.control.core.cccev.unit.model {
    interface DataUnitOptionFlatDTO {
        readonly id: string;
        readonly identifier: string;
        readonly name: string;
        readonly value: string;
        readonly order: number;
        readonly icon?: io.komune.fs.s2.file.domain.model.FilePathDTO;
        readonly color?: string;

    }
}
export declare namespace io.komune.registry.control.core.cccev.unit.model {
    type DataUnitType = "BOOLEAN" | "NUMBER" | "STRING";
}
export declare namespace io.komune.registry.control.f2.protocol.domain.command {
    interface ProtocolDefineCommandDTO {
        readonly protocol: io.komune.registry.control.f2.protocol.domain.model.ProtocolDTO;

    }
    interface ProtocolDefinedEventDTO {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.control.f2.protocol.domain.model {
    interface DataCollectionStepDTO extends io.komune.registry.control.f2.protocol.domain.model.ProtocolDTO {
        readonly sections: io.komune.registry.control.f2.protocol.domain.model.DataSectionDTO[];
        readonly identifier: string;
        readonly type: string;
        readonly label?: string;
        readonly description?: string;
        readonly steps?: io.komune.registry.control.f2.protocol.domain.model.ProtocolDTO[];
        readonly conditions?: io.komune.registry.control.f2.protocol.domain.model.DataConditionDTO[];
        readonly properties?: string;

    }
}
export declare namespace io.komune.registry.control.f2.protocol.domain.model {
    interface DataConditionDTO {
        readonly identifier: string;
        readonly type: io.komune.registry.control.f2.protocol.domain.model.DataConditionType;
        readonly expression: string;
        readonly dependencies?: string[];
        readonly error?: string;

    }
}
export declare namespace io.komune.registry.control.f2.protocol.domain.model {
    type DataConditionType = "display" | "validator";
}
export declare namespace io.komune.registry.control.f2.protocol.domain.model {
    interface DataFieldDTO {
        readonly name: string;
        readonly label?: string;
        readonly type: string;
        readonly description?: string;
        readonly helperText?: string;
        readonly unit: io.komune.registry.control.f2.protocol.domain.model.DataUnitRefDTO;
        readonly required: boolean;
        readonly options?: io.komune.registry.control.f2.protocol.domain.model.DataFieldOptionDTO[];
        readonly conditions?: io.komune.registry.control.f2.protocol.domain.model.DataConditionDTO[];
        readonly properties?: string;

    }
}
export declare namespace io.komune.registry.control.f2.protocol.domain.model {
    interface DataFieldOptionDTO {
        readonly key: string;
        readonly label: string;
        readonly icon?: io.komune.fs.s2.file.domain.model.FilePathDTO;
        readonly color?: string;

    }
}
export declare namespace io.komune.registry.control.f2.protocol.domain.model {
    interface DataSectionDTO extends io.komune.registry.control.f2.protocol.domain.model.ProtocolDTO {
        readonly fields: io.komune.registry.control.f2.protocol.domain.model.DataFieldDTO[];
        readonly identifier: string;
        readonly type: string;
        readonly label?: string;
        readonly description?: string;
        readonly steps?: io.komune.registry.control.f2.protocol.domain.model.ProtocolDTO[];
        readonly conditions?: io.komune.registry.control.f2.protocol.domain.model.DataConditionDTO[];
        readonly properties?: string;

    }
}
export declare namespace io.komune.registry.control.f2.protocol.domain.model {
    interface DataUnitRefDTO {
        readonly identifier: string;
        readonly type: io.komune.registry.control.core.cccev.unit.model.DataUnitType;
        readonly name?: string;
        readonly abbreviation?: string;

    }
}
export declare namespace io.komune.registry.control.f2.protocol.domain.model {
    interface ProtocolDTO {
        readonly identifier: string;
        readonly type: string;
        readonly label?: string;
        readonly description?: string;
        readonly steps?: io.komune.registry.control.f2.protocol.domain.model.ProtocolDTO[];
        readonly conditions?: io.komune.registry.control.f2.protocol.domain.model.DataConditionDTO[];
        readonly properties?: string;

    }
}
export declare namespace io.komune.registry.control.f2.protocol.domain.model {
    const ReservedProtocolTypes: {
        get DATA_COLLECTION_STEP(): string;
        get DATA_SECTION(): string;
        dataCollectionStep(): string;
        dataSection(): string;
    };
}
export declare namespace io.komune.registry.control.f2.protocol.domain.query {
    interface ProtocolGetQueryDTO {
        readonly id: string;

    }
    interface ProtocolGetResultDTO {
        readonly item?: io.komune.registry.control.f2.protocol.domain.model.ProtocolDTO;

    }
}
export declare namespace io.komune.registry.s2.concept.domain.command {
    interface ConceptCreateCommandDTO {
        readonly identifier?: string;
        readonly prefLabels: Record<string, string>;
        readonly definitions: Record<string, string>;
        readonly schemes: kotlin.collections.Set<string>;

    }
}
export declare namespace io.komune.registry.s2.concept.domain.command {
    interface ConceptEvent extends f2.dsl.cqrs.Event, s2.dsl.automate.WithId<string>, s2.dsl.automate.model.WithS2Id<string>/*, io.komune.registry.s2.commons.model.S2SourcingEvent<string> */ {
        s2Id(): string;
        readonly id: string;

    }
    interface ConceptInitCommand extends s2.dsl.automate.S2InitCommand {

    }
    interface ConceptCommand extends s2.dsl.automate.S2Command<string> {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.s2.concept.domain.command {
    interface ConceptUpdateCommandDTO extends io.komune.registry.s2.concept.domain.command.ConceptCommand {
        readonly id: string;
        readonly prefLabels: Record<string, string>;
        readonly definitions: Record<string, string>;
        readonly schemes: kotlin.collections.Set<string>;

    }
}
export declare namespace io.komune.registry.s2.cccev.domain.command.concept {
    interface InformationConceptCreateCommandDTO {
        readonly identifier: string;
        readonly name: Record<string, string>;
        readonly unit?: io.komune.registry.s2.cccev.domain.model.CompositeDataUnitRefDTO;
        readonly aggregator?: io.komune.registry.s2.cccev.domain.model.AggregatorConfigDTO;
        readonly themeIds: string[];

    }
}
export declare namespace io.komune.registry.s2.cccev.domain.command.concept {
    interface InformationConceptDeleteCommandDTO {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.s2.cccev.domain.command.concept {
    interface InformationConceptEvent extends f2.dsl.cqrs.Event, s2.dsl.automate.WithId<string>, s2.dsl.automate.model.WithS2Id<string>/*, io.komune.registry.s2.commons.model.S2SourcingEvent<string> */ {
        s2Id(): string;
        readonly id: string;

    }
    interface InformationConceptInitCommand extends s2.dsl.automate.S2InitCommand {

    }
    interface InformationConceptCommand extends s2.dsl.automate.S2Command<string> {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.s2.cccev.domain.command.concept {
    interface InformationConceptUpdateCommandDTO {
        readonly id: string;
        readonly name: Record<string, string>;
        readonly unit?: io.komune.registry.s2.cccev.domain.model.CompositeDataUnitRefDTO;
        readonly aggregator?: io.komune.registry.s2.cccev.domain.model.AggregatorConfigDTO;
        readonly themeIds: string[];

    }
}
export declare namespace io.komune.registry.s2.cccev.domain.command.unit {
    interface DataUnitCreateCommandDTO {
        readonly identifier: string;
        readonly name: Record<string, string>;
        readonly abbreviation: Record<string, string>;
        readonly type: io.komune.registry.s2.cccev.domain.model.DataUnitType;

    }
}
export declare namespace io.komune.registry.s2.cccev.domain.command.unit {
    interface DataUnitEvent extends f2.dsl.cqrs.Event, s2.dsl.automate.WithId<string>, s2.dsl.automate.model.WithS2Id<string>/*, io.komune.registry.s2.commons.model.S2SourcingEvent<string> */ {
        s2Id(): string;
        readonly id: string;

    }
    interface DataUnitInitCommand extends s2.dsl.automate.S2InitCommand {

    }
    interface DataUnitCommand extends s2.dsl.automate.S2Command<string> {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.s2.cccev.domain.command.value {
    interface SupportedValueEvent extends f2.dsl.cqrs.Event, s2.dsl.automate.WithId<string>, s2.dsl.automate.model.WithS2Id<string>/*, io.komune.registry.s2.commons.model.S2SourcingEvent<string> */ {
        s2Id(): string;
        readonly id: string;

    }
    interface SupportedValueInitCommand extends s2.dsl.automate.S2InitCommand {

    }
    interface SupportedValueCommand extends s2.dsl.automate.S2Command<string> {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.s2.cccev.domain.model {
    interface AggregatorConfigDTO {
        readonly type: io.komune.registry.s2.cccev.domain.model.AggregatorType;
        readonly persistValue: boolean;
        readonly aggregatedConceptIds?: kotlin.collections.Set<string>;
        readonly defaultValue?: string;

    }
}
export declare namespace io.komune.registry.s2.cccev.domain.model {
    interface CompositeDataUnitRefDTO {
        readonly leftUnitId: string;
        readonly rightUnitId?: string;
        readonly operator?: io.komune.registry.s2.cccev.domain.model.CompositeDataUnitOperator;

    }
}
export declare namespace io.komune.registry.s2.cccev.domain.model {
    type CompositeDataUnitOperator = "DIVISION";
}
export declare namespace io.komune.registry.s2.cccev.domain.model {
    type DataUnitType = "BOOLEAN" | "NUMBER" | "STRING";
}
export declare namespace io.komune.registry.s2.cccev.domain.model {
    type FileProcessorType = "CSV_SQL";
    type AggregatorType = "SUM";
}
export declare namespace io.komune.registry.f2.concept.domain {
    const ConceptPolicies: {
        canCreate(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        canUpdate(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
    };
}
export declare namespace io.komune.registry.f2.concept.domain.command {
    interface ConceptCreateCommandDTO extends io.komune.registry.s2.concept.domain.command.ConceptCreateCommandDTO {
        readonly identifier?: string;
        readonly prefLabels: Record<string, string>;
        readonly definitions: Record<string, string>;
        readonly schemes: kotlin.collections.Set<string>;

    }
    interface ConceptCreatedEventDTO {
        readonly id: string;
        readonly identifier: string;

    }
}
export declare namespace io.komune.registry.f2.concept.domain.command {
    interface ConceptUpdateCommandDTO extends io.komune.registry.s2.concept.domain.command.ConceptUpdateCommandDTO {
        readonly id: string;
        readonly prefLabels: Record<string, string>;
        readonly definitions: Record<string, string>;
        readonly schemes: kotlin.collections.Set<string>;

    }
    interface ConceptUpdatedEventDTO {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.f2.concept.domain.model {
    interface ConceptDTO {
        readonly id: string;
        readonly identifier: string;
        readonly prefLabels: Record<string, string>;
        readonly definitions: Record<string, string>;
        readonly schemes: kotlin.collections.Set<string>;

    }
}
export declare namespace io.komune.registry.f2.concept.domain.model {
    interface ConceptTranslatedDTO {
        readonly id: string;
        readonly identifier: string;
        readonly language: string;
        readonly prefLabel: string;
        readonly definition: string;
        readonly schemes: kotlin.collections.Set<string>;

    }
}
export declare namespace io.komune.registry.f2.concept.domain.query {
    interface ConceptGetByIdentifierQueryDTO {
        readonly identifier: string;

    }
    interface ConceptGetByIdentifierResultDTO {
        readonly item?: io.komune.registry.f2.concept.domain.model.ConceptDTO;

    }
}
export declare namespace io.komune.registry.f2.concept.domain.query {
    interface ConceptGetQueryDTO {
        readonly id: string;

    }
    interface ConceptGetResultDTO {
        readonly item?: io.komune.registry.f2.concept.domain.model.ConceptDTO;

    }
}
export declare namespace io.komune.registry.f2.concept.domain.query {
    interface ConceptGetTranslatedQueryDTO {
        readonly id: string;
        readonly language: string;
        readonly otherLanguageIfAbsent: boolean;

    }
    interface ConceptGetTranslatedResultDTO {
        readonly item?: io.komune.registry.f2.concept.domain.model.ConceptTranslatedDTO;

    }
}
export declare namespace io.komune.registry.f2.cccev.domain.concept {
    const InformationConceptPolicies: {
        canCreate(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        canDelete(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
    };
}
export declare namespace io.komune.registry.f2.cccev.domain.concept.command {
    interface InformationConceptCreateCommandDTO extends io.komune.registry.s2.cccev.domain.command.concept.InformationConceptCreateCommandDTO {
        readonly identifier: string;
        readonly name: Record<string, string>;
        readonly unit?: io.komune.registry.s2.cccev.domain.model.CompositeDataUnitRefDTO;
        readonly aggregator?: io.komune.registry.s2.cccev.domain.model.AggregatorConfigDTO;
        readonly themeIds: string[];

    }
    interface InformationConceptCreatedEventDTO {
        readonly item: io.komune.registry.f2.cccev.domain.concept.model.InformationConceptDTO;

    }
}
export declare namespace io.komune.registry.f2.cccev.domain.concept.command {
    interface InformationConceptDeleteCommandDTO extends io.komune.registry.s2.cccev.domain.command.concept.InformationConceptDeleteCommandDTO {
        readonly id: string;

    }
    interface InformationConceptDeletedEventDTO {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.f2.cccev.domain.concept.command {
    interface InformationConceptUpdateCommandDTO extends io.komune.registry.s2.cccev.domain.command.concept.InformationConceptUpdateCommandDTO {
        readonly id: string;
        readonly name: Record<string, string>;
        readonly unit?: io.komune.registry.s2.cccev.domain.model.CompositeDataUnitRefDTO;
        readonly aggregator?: io.komune.registry.s2.cccev.domain.model.AggregatorConfigDTO;
        readonly themeIds: string[];

    }
    interface InformationConceptUpdatedEventDTO {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.f2.cccev.domain.concept.model {
    interface InformationConceptComputedDTO extends io.komune.registry.f2.cccev.domain.concept.model.InformationConceptTranslatedDTO {
        readonly unit: io.komune.registry.f2.cccev.domain.unit.model.CompositeDataUnitTranslatedDTO;
        readonly isRange: boolean;
        readonly valueId: string;
        readonly value: string;
        readonly valueDescription?: string;
        readonly aggregatedValue: string;
        readonly id: string;
        readonly identifier: string;
        readonly language: string;
        readonly name?: string;
        readonly themes: io.komune.registry.f2.concept.domain.model.ConceptTranslatedDTO[];

    }
}
export declare namespace io.komune.registry.f2.cccev.domain.concept.model {
    interface InformationConceptDTO {
        readonly id: string;
        readonly identifier: string;
        readonly name: Record<string, string>;
        readonly unit?: io.komune.registry.f2.cccev.domain.unit.model.CompositeDataUnitDTO;
        readonly themes: io.komune.registry.f2.concept.domain.model.ConceptDTO[];

    }
}
export declare namespace io.komune.registry.f2.cccev.domain.concept.model {
    interface InformationConceptTranslatedDTO {
        readonly id: string;
        readonly identifier: string;
        readonly language: string;
        readonly name?: string;
        readonly unit?: io.komune.registry.f2.cccev.domain.unit.model.CompositeDataUnitTranslatedDTO;
        readonly themes: io.komune.registry.f2.concept.domain.model.ConceptTranslatedDTO[];

    }
}
export declare namespace io.komune.registry.f2.cccev.domain.concept.query {
    interface InformationConceptGetByIdentifierQueryDTO {
        readonly identifier: string;

    }
    interface InformationConceptGetByIdentifierResultDTO {
        readonly item?: io.komune.registry.f2.cccev.domain.concept.model.InformationConceptDTO;

    }
}
export declare namespace io.komune.registry.f2.cccev.domain.concept.query {
    interface InformationConceptGetGlobalValueQueryDTO {
        readonly identifier: string;
        readonly language: string;

    }
    interface InformationConceptGetGlobalValueResultDTO {
        readonly item?: io.komune.registry.f2.cccev.domain.concept.model.InformationConceptComputedDTO;

    }
}
export declare namespace io.komune.registry.f2.cccev.domain.concept.query {
    interface InformationConceptListQueryDTO {
        readonly language: string;

    }
    interface InformationConceptListResultDTO {
        readonly items: io.komune.registry.f2.cccev.domain.concept.model.InformationConceptTranslatedDTO[];

    }
}
export declare namespace io.komune.registry.f2.cccev.domain.unit {
    const DataUnitPolicies: {
        canCreate(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
    };
}
export declare namespace io.komune.registry.f2.cccev.domain.unit.command {
    interface DataUnitCreateCommandDTO extends io.komune.registry.s2.cccev.domain.command.unit.DataUnitCreateCommandDTO {
        readonly identifier: string;
        readonly name: Record<string, string>;
        readonly abbreviation: Record<string, string>;
        readonly type: io.komune.registry.s2.cccev.domain.model.DataUnitType;

    }
    interface DataUnitCreatedEventDTO {
        readonly item: io.komune.registry.f2.cccev.domain.unit.model.DataUnitDTO;

    }
}
export declare namespace io.komune.registry.f2.cccev.domain.unit.model {
    interface CompositeDataUnitDTO {
        readonly leftUnit: io.komune.registry.f2.cccev.domain.unit.model.DataUnitDTO;
        readonly rightUnit?: io.komune.registry.f2.cccev.domain.unit.model.DataUnitDTO;
        readonly operator?: io.komune.registry.s2.cccev.domain.model.CompositeDataUnitOperator;

    }
}
export declare namespace io.komune.registry.f2.cccev.domain.unit.model {
    interface CompositeDataUnitTranslatedDTO {
        readonly leftUnit: io.komune.registry.f2.cccev.domain.unit.model.DataUnitTranslatedDTO;
        readonly rightUnit?: io.komune.registry.f2.cccev.domain.unit.model.DataUnitTranslatedDTO;
        readonly operator?: io.komune.registry.s2.cccev.domain.model.CompositeDataUnitOperator;

    }
}
export declare namespace io.komune.registry.f2.cccev.domain.unit.model {
    interface DataUnitDTO {
        readonly id: string;
        readonly identifier: string;
        readonly type: io.komune.registry.s2.cccev.domain.model.DataUnitType;
        readonly name: Record<string, string>;
        readonly abbreviation: Record<string, string>;

    }
}
export declare namespace io.komune.registry.f2.cccev.domain.unit.model {
    interface DataUnitTranslatedDTO {
        readonly id: string;
        readonly identifier: string;
        readonly language: string;
        readonly name?: string;
        readonly abbreviation?: string;
        readonly type: io.komune.registry.s2.cccev.domain.model.DataUnitType;

    }
}
export declare namespace io.komune.registry.f2.cccev.domain.unit.query {
    interface DataUnitGetByIdentifierQueryDTO {
        readonly identifier: string;

    }
    interface DataUnitGetByIdentifierResultDTO {
        readonly item?: io.komune.registry.f2.cccev.domain.unit.model.DataUnitDTO;

    }
}
export declare namespace io.komune.registry.f2.cccev.domain.unit.query {
    interface DataUnitGetQueryDTO {
        readonly id: string;

    }
    interface DataUnitGetResultDTO {
        readonly item?: io.komune.registry.f2.cccev.domain.unit.model.DataUnitDTO;

    }
}
export declare namespace io.komune.registry.f2.cccev.domain.unit.query {
    interface DataUnitListQueryDTO {
        readonly language: string;

    }
    interface DataUnitListResultDTO {
        readonly items: io.komune.registry.f2.cccev.domain.unit.model.DataUnitTranslatedDTO[];

    }
}
export declare namespace io.komune.registry.s2.license.domain.command {
    interface LicenseCreateCommandDTO {
        readonly identifier?: string;
        readonly name: string;
        readonly url?: string;

    }
}
export declare namespace io.komune.registry.s2.license.domain.command {
    interface LicenseEvent extends f2.dsl.cqrs.Event, s2.dsl.automate.WithId<string>, s2.dsl.automate.model.WithS2Id<string>/*, io.komune.registry.s2.commons.model.S2SourcingEvent<string> */ {
        s2Id(): string;
        readonly id: string;

    }
    interface LicenseInitCommand extends s2.dsl.automate.S2InitCommand {

    }
    interface LicenseCommand extends s2.dsl.automate.S2Command<string> {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.s2.license.domain.command {
    interface LicenseUpdateCommandDTO extends io.komune.registry.s2.license.domain.command.LicenseCommand {
        readonly id: string;
        readonly name: string;
        readonly url?: string;

    }
}
export declare namespace io.komune.registry.dsl.skos.domain.model {
    interface SkosConceptDTO {
        readonly id: string;
        readonly type: string;
        readonly prefLabels: Record<string, string>;
        readonly definitions: Record<string, string>;
        readonly broader?: string;

    }
}
export declare namespace io.komune.registry.s2.structure.domain.model {
    interface StructureDTO {
        readonly type?: string;
        readonly definitions: Record<string, string>;

    }
}
export declare namespace io.komune.registry.dsl.dcat.domain.model {
    interface DcatApCatalogue extends io.komune.registry.dsl.dcat.domain.model.CataloguedResource {
        readonly identifier: string;
        readonly img?: string;
        readonly themes?: io.komune.registry.dsl.skos.domain.model.SkosConcept[];
        readonly cataloguedResource?: io.komune.registry.dsl.dcat.domain.model.CataloguedResource[];
        readonly datasets?: io.komune.registry.dsl.dcat.domain.model.DcatDataset[];
        readonly services?: io.komune.registry.dsl.dcat.domain.model.DataService[];
        readonly catalogues?: io.komune.registry.dsl.dcat.domain.model.DcatApCatalogue[];
        readonly catalogueRecords?: io.komune.registry.dsl.dcat.domain.model.DcatCatalogueRecord[];
        readonly structure?: io.komune.registry.s2.structure.domain.model.StructureDTO/* Nullable<io.komune.registry.s2.structure.domain.model.Structure> */;
        readonly title: string;
        readonly type: string;
        readonly accessRights?: string;
        readonly conformsTo?: io.komune.registry.dsl.skos.domain.model.SkosConceptScheme[];
        readonly contactPoint?: string;
        readonly creator?: io.komune.registry.dsl.dcat.domain.model.Agent;
        readonly description?: string;
        readonly releaseDate?: string;
        readonly updateDate?: string;
        readonly language: string;
        readonly publisher?: io.komune.registry.dsl.dcat.domain.model.Agent;
        readonly validator?: io.komune.registry.dsl.dcat.domain.model.Agent;
        readonly theme?: io.komune.registry.dsl.skos.domain.model.SkosConcept[];
        readonly relation?: io.komune.registry.dsl.dcat.domain.model.Relationship[];
        readonly qualifiedRelation?: io.komune.registry.dsl.dcat.domain.model.Relationship[];
        readonly keywords?: string[];
        readonly landingPage?: string;
        readonly homepage?: string;
        readonly qualifiedAttribution?: io.komune.registry.dsl.dcat.domain.model.Attribution[];
        readonly license?: io.komune.registry.dsl.dcat.domain.model.LicenseDocument;
        readonly rights?: io.komune.registry.dsl.dcat.domain.model.Rights;
        readonly hasPart?: io.komune.registry.dsl.dcat.domain.model.CataloguedResource[];
        readonly hasPolicy?: io.komune.registry.dsl.dcat.domain.model.Policy[];
        readonly isReferencedBy?: io.komune.registry.dsl.dcat.domain.model.CataloguedResource[];
        readonly previousVersion?: io.komune.registry.dsl.dcat.domain.model.CataloguedResource;
        readonly hasVersion?: io.komune.registry.dsl.dcat.domain.model.CataloguedResource[];
        readonly currentVersion?: io.komune.registry.dsl.dcat.domain.model.CataloguedResource;
        readonly replaces?: io.komune.registry.dsl.dcat.domain.model.CataloguedResource;
        readonly version?: string;
        readonly versionNotes?: string;

    }
}
export declare namespace io.komune.registry.dsl.dcat.domain.model {
    interface CataloguedResource {
        readonly title: string;
        readonly type: string;
        readonly accessRights?: string;
        readonly conformsTo?: io.komune.registry.dsl.skos.domain.model.SkosConceptScheme[];
        readonly contactPoint?: string;
        readonly creator?: io.komune.registry.dsl.dcat.domain.model.Agent;
        readonly description?: string;
        readonly releaseDate?: string;
        readonly updateDate?: string;
        readonly language: string;
        readonly publisher?: io.komune.registry.dsl.dcat.domain.model.Agent;
        readonly validator?: io.komune.registry.dsl.dcat.domain.model.Agent;
        readonly identifier?: string;
        readonly theme?: io.komune.registry.dsl.skos.domain.model.SkosConcept[];
        readonly relation?: io.komune.registry.dsl.dcat.domain.model.Relationship[];
        readonly qualifiedRelation?: io.komune.registry.dsl.dcat.domain.model.Relationship[];
        readonly keywords?: string[];
        readonly landingPage?: string;
        readonly homepage?: string;
        readonly qualifiedAttribution?: io.komune.registry.dsl.dcat.domain.model.Attribution[];
        readonly license?: io.komune.registry.dsl.dcat.domain.model.LicenseDocument;
        readonly rights?: io.komune.registry.dsl.dcat.domain.model.Rights;
        readonly hasPart?: io.komune.registry.dsl.dcat.domain.model.CataloguedResource[];
        readonly hasPolicy?: io.komune.registry.dsl.dcat.domain.model.Policy[];
        readonly isReferencedBy?: io.komune.registry.dsl.dcat.domain.model.CataloguedResource[];
        readonly previousVersion?: io.komune.registry.dsl.dcat.domain.model.CataloguedResource;
        readonly hasVersion?: io.komune.registry.dsl.dcat.domain.model.CataloguedResource[];
        readonly currentVersion?: io.komune.registry.dsl.dcat.domain.model.CataloguedResource;
        readonly replaces?: io.komune.registry.dsl.dcat.domain.model.CataloguedResource;
        readonly version?: string;
        readonly versionNotes?: string;

    }
}
export declare namespace io.komune.registry.dsl.dcat.domain.model {
    interface DataService {
        readonly identifier: string;
        readonly endpointURL: string;
        readonly endpointDescription?: string;
        readonly servesDataset?: io.komune.registry.dsl.dcat.domain.model.DcatDataset[];

    }
}
export declare namespace io.komune.registry.dsl.dcat.domain.model {
    interface DcatApDatasetSeries extends io.komune.registry.dsl.dcat.domain.model.DcatDataset {
        readonly modificationDate?: string;
        readonly geographicalCoverage?: io.komune.registry.dsl.dcat.domain.model.Location;
        readonly first?: io.komune.registry.dsl.dcat.domain.model.DcatApDatasetMember;
        readonly last?: io.komune.registry.dsl.dcat.domain.model.DcatApDatasetMember;
        readonly seriesMember?: io.komune.registry.dsl.dcat.domain.model.DcatApDatasetMember[];
        readonly identifier: string;
        readonly distributions?: io.komune.registry.dsl.dcat.domain.model.DcatDistribution[];
        readonly frequency?: string;
        readonly spatialCoverage?: io.komune.registry.dsl.dcat.domain.model.Location;
        readonly spatialResolution?: string;
        readonly temporalCoverage?: io.komune.registry.dsl.dcat.domain.model.PeriodOfTime;
        readonly temporalResolution?: string;
        readonly wasGeneratedBy?: io.komune.registry.dsl.dcat.domain.model.Activity;
        readonly source?: string;
        readonly length?: number;
        readonly format?: string;
        readonly title: string;
        readonly type: string;
        readonly accessRights?: string;
        readonly conformsTo?: io.komune.registry.dsl.skos.domain.model.SkosConceptScheme[];
        readonly contactPoint?: string;
        readonly creator?: io.komune.registry.dsl.dcat.domain.model.Agent;
        readonly description?: string;
        readonly releaseDate?: string;
        readonly updateDate?: string;
        readonly language: string;
        readonly publisher?: io.komune.registry.dsl.dcat.domain.model.Agent;
        readonly validator?: io.komune.registry.dsl.dcat.domain.model.Agent;
        readonly theme?: io.komune.registry.dsl.skos.domain.model.SkosConcept[];
        readonly relation?: io.komune.registry.dsl.dcat.domain.model.Relationship[];
        readonly qualifiedRelation?: io.komune.registry.dsl.dcat.domain.model.Relationship[];
        readonly keywords?: string[];
        readonly landingPage?: string;
        readonly homepage?: string;
        readonly qualifiedAttribution?: io.komune.registry.dsl.dcat.domain.model.Attribution[];
        readonly license?: io.komune.registry.dsl.dcat.domain.model.LicenseDocument;
        readonly rights?: io.komune.registry.dsl.dcat.domain.model.Rights;
        readonly hasPart?: io.komune.registry.dsl.dcat.domain.model.CataloguedResource[];
        readonly hasPolicy?: io.komune.registry.dsl.dcat.domain.model.Policy[];
        readonly isReferencedBy?: io.komune.registry.dsl.dcat.domain.model.CataloguedResource[];
        readonly previousVersion?: io.komune.registry.dsl.dcat.domain.model.CataloguedResource;
        readonly hasVersion?: io.komune.registry.dsl.dcat.domain.model.CataloguedResource[];
        readonly currentVersion?: io.komune.registry.dsl.dcat.domain.model.CataloguedResource;
        readonly replaces?: io.komune.registry.dsl.dcat.domain.model.CataloguedResource;
        readonly version?: string;
        readonly versionNotes?: string;

    }
    interface DcatApDatasetMember extends io.komune.registry.dsl.dcat.domain.model.DcatDataset {
        readonly title: string;
        readonly inSeries: io.komune.registry.dsl.dcat.domain.model.DcatApDatasetSeries;
        readonly previous?: io.komune.registry.dsl.dcat.domain.model.DcatApDatasetMember;
        readonly next?: io.komune.registry.dsl.dcat.domain.model.DcatApDatasetMember;
        readonly identifier: string;
        readonly distributions?: io.komune.registry.dsl.dcat.domain.model.DcatDistribution[];
        readonly frequency?: string;
        readonly spatialCoverage?: io.komune.registry.dsl.dcat.domain.model.Location;
        readonly spatialResolution?: string;
        readonly temporalCoverage?: io.komune.registry.dsl.dcat.domain.model.PeriodOfTime;
        readonly temporalResolution?: string;
        readonly wasGeneratedBy?: io.komune.registry.dsl.dcat.domain.model.Activity;
        readonly source?: string;
        readonly length?: number;
        readonly format?: string;
        readonly type: string;
        readonly accessRights?: string;
        readonly conformsTo?: io.komune.registry.dsl.skos.domain.model.SkosConceptScheme[];
        readonly contactPoint?: string;
        readonly creator?: io.komune.registry.dsl.dcat.domain.model.Agent;
        readonly description?: string;
        readonly releaseDate?: string;
        readonly updateDate?: string;
        readonly language: string;
        readonly publisher?: io.komune.registry.dsl.dcat.domain.model.Agent;
        readonly validator?: io.komune.registry.dsl.dcat.domain.model.Agent;
        readonly theme?: io.komune.registry.dsl.skos.domain.model.SkosConcept[];
        readonly relation?: io.komune.registry.dsl.dcat.domain.model.Relationship[];
        readonly qualifiedRelation?: io.komune.registry.dsl.dcat.domain.model.Relationship[];
        readonly keywords?: string[];
        readonly landingPage?: string;
        readonly homepage?: string;
        readonly qualifiedAttribution?: io.komune.registry.dsl.dcat.domain.model.Attribution[];
        readonly license?: io.komune.registry.dsl.dcat.domain.model.LicenseDocument;
        readonly rights?: io.komune.registry.dsl.dcat.domain.model.Rights;
        readonly hasPart?: io.komune.registry.dsl.dcat.domain.model.CataloguedResource[];
        readonly hasPolicy?: io.komune.registry.dsl.dcat.domain.model.Policy[];
        readonly isReferencedBy?: io.komune.registry.dsl.dcat.domain.model.CataloguedResource[];
        readonly previousVersion?: io.komune.registry.dsl.dcat.domain.model.CataloguedResource;
        readonly hasVersion?: io.komune.registry.dsl.dcat.domain.model.CataloguedResource[];
        readonly currentVersion?: io.komune.registry.dsl.dcat.domain.model.CataloguedResource;
        readonly replaces?: io.komune.registry.dsl.dcat.domain.model.CataloguedResource;
        readonly version?: string;
        readonly versionNotes?: string;

    }
    interface DcatDataset extends io.komune.registry.dsl.dcat.domain.model.CataloguedResource {
        readonly identifier: string;
        readonly distributions?: io.komune.registry.dsl.dcat.domain.model.DcatDistribution[];
        readonly frequency?: string;
        readonly spatialCoverage?: io.komune.registry.dsl.dcat.domain.model.Location;
        readonly spatialResolution?: string;
        readonly temporalCoverage?: io.komune.registry.dsl.dcat.domain.model.PeriodOfTime;
        readonly temporalResolution?: string;
        readonly wasGeneratedBy?: io.komune.registry.dsl.dcat.domain.model.Activity;
        readonly source?: string;
        readonly length?: number;
        readonly format?: string;
        readonly title: string;
        readonly type: string;
        readonly accessRights?: string;
        readonly conformsTo?: io.komune.registry.dsl.skos.domain.model.SkosConceptScheme[];
        readonly contactPoint?: string;
        readonly creator?: io.komune.registry.dsl.dcat.domain.model.Agent;
        readonly description?: string;
        readonly releaseDate?: string;
        readonly updateDate?: string;
        readonly language: string;
        readonly publisher?: io.komune.registry.dsl.dcat.domain.model.Agent;
        readonly validator?: io.komune.registry.dsl.dcat.domain.model.Agent;
        readonly theme?: io.komune.registry.dsl.skos.domain.model.SkosConcept[];
        readonly relation?: io.komune.registry.dsl.dcat.domain.model.Relationship[];
        readonly qualifiedRelation?: io.komune.registry.dsl.dcat.domain.model.Relationship[];
        readonly keywords?: string[];
        readonly landingPage?: string;
        readonly homepage?: string;
        readonly qualifiedAttribution?: io.komune.registry.dsl.dcat.domain.model.Attribution[];
        readonly license?: io.komune.registry.dsl.dcat.domain.model.LicenseDocument;
        readonly rights?: io.komune.registry.dsl.dcat.domain.model.Rights;
        readonly hasPart?: io.komune.registry.dsl.dcat.domain.model.CataloguedResource[];
        readonly hasPolicy?: io.komune.registry.dsl.dcat.domain.model.Policy[];
        readonly isReferencedBy?: io.komune.registry.dsl.dcat.domain.model.CataloguedResource[];
        readonly previousVersion?: io.komune.registry.dsl.dcat.domain.model.CataloguedResource;
        readonly hasVersion?: io.komune.registry.dsl.dcat.domain.model.CataloguedResource[];
        readonly currentVersion?: io.komune.registry.dsl.dcat.domain.model.CataloguedResource;
        readonly replaces?: io.komune.registry.dsl.dcat.domain.model.CataloguedResource;
        readonly version?: string;
        readonly versionNotes?: string;

    }
}
export declare namespace io.komune.registry.dsl.dcat.domain.model {
    interface DcatCatalogueRecord {
        readonly identifier: string;
        readonly title: string;
        readonly description?: string;
        readonly listingDate?: string;
        readonly updateDate?: string;
        readonly primaryTopic?: io.komune.registry.dsl.dcat.domain.model.CataloguedResource;
        readonly conformsTo?: io.komune.registry.dsl.skos.domain.model.SkosConceptScheme[];

    }
}
export declare namespace io.komune.registry.dsl.dcat.domain.model {
    interface DcatDistribution {
        readonly identifier: string;
        readonly accessURL?: string;
        readonly accessService?: io.komune.registry.dsl.dcat.domain.model.DataService;
        readonly downloadURL?: string;
        readonly byteSize?: number;
        readonly spatialResolution?: string;
        readonly temporalResolution?: string;
        readonly conformsTo?: io.komune.registry.dsl.skos.domain.model.SkosConceptScheme[];
        readonly mediaType?: string;
        readonly format?: string;
        readonly compressionFormat?: string;
        readonly packagingFormat?: string;
        readonly checksum?: io.komune.registry.dsl.dcat.domain.model.Checksum;

    }
}
export declare namespace io.komune.registry.s2.catalogue.domain.automate {
    type CatalogueState = "ACTIVE" | "DELETED";
}
export declare namespace io.komune.registry.s2.catalogue.domain.command {
    interface CatalogueAddRelatedCataloguesCommandDTO {
        readonly id: string;
        readonly relatedCatalogueIds: Record<string, string[]>;

    }
}
export declare namespace io.komune.registry.s2.catalogue.domain.command {
    interface CatalogueEvent extends f2.dsl.cqrs.Event, s2.dsl.automate.WithId<string>, s2.dsl.automate.model.WithS2Id<string>/*, io.komune.registry.s2.commons.model.S2SourcingEvent<string> */ {
        s2Id(): string;
        readonly id: string;

    }
    interface CatalogueInitCommand extends s2.dsl.automate.S2InitCommand {

    }
    interface CatalogueCommand extends s2.dsl.automate.S2Command<string> {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.s2.catalogue.domain.command {
    interface CatalogueReferenceDatasetsCommandDTO {
        readonly id: string;
        readonly datasetIds: string[];

    }
}
export declare namespace io.komune.registry.s2.catalogue.domain.command {
    interface CatalogueRemoveRelatedCataloguesCommandDTO {
        readonly id: string;
        readonly relatedCatalogueIds: Record<string, string[]>;

    }
}
export declare namespace io.komune.registry.s2.catalogue.domain.command {
    interface CatalogueUnreferenceDatasetsCommandDTO {
        readonly id: string;
        readonly datasetIds: string[];

    }
}
export declare namespace io.komune.registry.s2.catalogue.domain.command {
    interface CatalogueUpdateAccessRightsCommandDTO {
        readonly id: string;
        readonly accessRights?: io.komune.registry.s2.catalogue.domain.model.CatalogueAccessRight;

    }
}
export declare namespace io.komune.registry.s2.catalogue.domain.model {
    type CatalogueAccessRight = "PUBLIC" | "PROTECTED" | "PRIVATE";
}
export declare namespace io.komune.registry.s2.catalogue.domain.model {
    interface CatalogueConfigurationDTO {
        readonly structureType?: io.komune.registry.s2.catalogue.domain.model.structure.StructureType;
        readonly relations: Record<string, io.komune.registry.s2.catalogue.domain.model.CatalogueRelationConfigurationDTO>;

    }
    interface CatalogueRelationConfigurationDTO {
        readonly types: string[];

    }
}
export declare namespace io.komune.registry.s2.catalogue.domain.model.structure {
    type CatalogueButtonKind = "SIMPLE" | "SELECT";
}
export declare namespace io.komune.registry.s2.catalogue.domain.model.structure {
    type CatalogueIllustrationType = "IMAGE" | "IDENTIFIER";
}
export declare namespace io.komune.registry.s2.catalogue.domain.model.structure {
    type StructureType = "FACTORY" | "GRID" | "HOME" | "ITEM" | "LIST" | "MENU" | "MENU_BRANCH" | "MENU_LEAF" | "MOSAIC" | "TABLE" | "TRANSIENT";
}
export declare namespace io.komune.registry.s2.catalogue.draft.domain {
    type CatalogueDraftState = "DRAFT" | "SUBMITTED" | "UPDATE_REQUESTED" | "VALIDATED" | "REJECTED";
}
export declare namespace io.komune.registry.s2.catalogue.draft.domain.command {
    interface CatalogueDraftDeleteCommandDTO extends io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftCommand {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.s2.catalogue.draft.domain.command {
    interface CatalogueDraftEvent extends f2.dsl.cqrs.Event, s2.dsl.automate.WithId<string>, s2.dsl.automate.model.WithS2Id<string>/*, io.komune.registry.s2.commons.model.S2SourcingEvent<string> */ {
        s2Id(): string;
        readonly id: string;

    }
    interface CatalogueDraftInitCommand extends s2.dsl.automate.S2InitCommand {

    }
    interface CatalogueDraftCommand extends s2.dsl.automate.S2Command<string> {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.s2.catalogue.draft.domain.command {
    interface CatalogueDraftRejectCommandDTO extends io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftCommand {
        readonly id: string;
        readonly reason: string;

    }
}
export declare namespace io.komune.registry.s2.catalogue.draft.domain.command {
    interface CatalogueDraftRequestUpdateCommandDTO extends io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftCommand {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.s2.catalogue.draft.domain.command {
    interface CatalogueDraftSubmitCommandDTO extends io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftCommand {
        readonly id: string;
        readonly versionNotes?: string;

    }
}
export declare namespace io.komune.registry.s2.catalogue.draft.domain.command {
    interface CatalogueDraftValidateCommandDTO extends io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftCommand {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.s2.dataset.domain.automate {
    type DatasetState = "ACTIVE" | "DELETED";
}
export declare namespace io.komune.registry.s2.dataset.domain.command {
    interface DatasetEvent extends f2.dsl.cqrs.Event, s2.dsl.automate.WithId<string>, s2.dsl.automate.model.WithS2Id<string>/*, io.komune.registry.s2.commons.model.S2SourcingEvent<string> */ {
        s2Id(): string;
        readonly id: string;

    }
    interface DatasetInitCommand extends s2.dsl.automate.S2InitCommand {

    }
    interface DatasetCommand extends s2.dsl.automate.S2Command<string> {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.s2.dataset.domain.command {
    interface DatasetRemoveAggregatorsCommandDTO {
        readonly id: string;
        readonly informationConceptIds: string[];

    }
}
export declare namespace io.komune.registry.f2.dataset.domain {
    const AggregatorConfigBuilder: {
        csvSum(informationConceptId: string, unit: io.komune.registry.s2.cccev.domain.model.CompositeDataUnitRefDTO, column: string): io.komune.registry.f2.dataset.domain.dto.AggregatorConfigDTO;
    };
}
export declare namespace io.komune.registry.f2.dataset.domain {
    const SupportedValueUtils: {
        buildRangeValue(min?: number, max?: number): string;
        parseRangeValue(value: string): Array<Nullable<number>>;
    };
}
export declare namespace io.komune.registry.f2.dataset.domain.command {
    interface DatasetAddAggregatorsCommandDTO {
        readonly id: string;
        readonly informationConceptIds: string[];

    }
    interface DatasetAddedAggregatorsEventDTO {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.f2.dataset.domain.command {
    interface DatasetAddDistributionValueCommandDTO {
        readonly id: string;
        readonly distributionId: string;
        readonly informationConceptId: string;
        readonly unit: io.komune.registry.s2.cccev.domain.model.CompositeDataUnitRefDTO;
        readonly isRange: boolean;
        readonly value: string;
        readonly description?: string;

    }
    interface DatasetAddedDistributionValueEventDTO {
        readonly id: string;
        readonly distributionId: string;
        readonly valueIds: string[];

    }
}
export declare namespace io.komune.registry.f2.dataset.domain.command {
    interface DatasetAddEmptyDistributionCommandDTO {
        readonly id: string;
        readonly name?: string;

    }
    interface DatasetAddedEmptyDistributionEventDTO {
        readonly id: string;
        readonly distributionId: string;

    }
}
export declare namespace io.komune.registry.f2.dataset.domain.command {
    interface DatasetAddJsonDistributionCommandDTO {
        readonly id: string;
        readonly name?: string;
        readonly jsonContent: string;

    }
    interface DatasetAddedJsonDistributionEventDTO {
        readonly id: string;
        readonly distributionId: string;

    }
}
export declare namespace io.komune.registry.f2.dataset.domain.command {
    interface DatasetAddMediaDistributionCommandDTO {
        readonly id: string;
        readonly name?: string;
        readonly mediaType: string;
        readonly aggregator?: io.komune.registry.f2.dataset.domain.dto.AggregatorConfigDTO;

    }
    interface DatasetAddedMediaDistributionEventDTO {
        readonly id: string;
        readonly distributionId: string;

    }
}
export declare namespace io.komune.registry.f2.dataset.domain.command {
    interface DatasetCreateCommandDTO {
        readonly identifier?: string;
        readonly parentId?: string;
        readonly catalogueId?: string;
        readonly title?: string;
        readonly type: string;
        readonly description?: string;
        readonly language: string;
        readonly wasGeneratedBy?: io.komune.registry.dsl.dcat.domain.model.Activity;
        readonly source?: string;
        readonly creator?: io.komune.registry.dsl.dcat.domain.model.Agent;
        readonly publisher?: io.komune.registry.dsl.dcat.domain.model.Agent;
        readonly validator?: io.komune.registry.dsl.dcat.domain.model.Agent;
        readonly accessRights?: string;
        readonly license?: string;
        readonly temporalResolution?: string;
        readonly conformsTo?: io.komune.registry.dsl.skos.domain.model.SkosConceptScheme[];
        readonly format?: string;
        readonly theme?: io.komune.registry.dsl.skos.domain.model.SkosConcept[];
        readonly keywords?: string[];
        readonly landingPage?: string;
        readonly homepage?: string;
        readonly version?: string;
        readonly versionNotes?: string;
        readonly length?: number;
        readonly releaseDate?: string;
        readonly structure?: io.komune.registry.s2.structure.domain.model.StructureDTO;

    }
    interface DatasetCreatedEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;
        readonly identifier: string;

    }
}
export declare namespace io.komune.registry.f2.dataset.domain.command {
    interface DatasetDeleteCommandDTO {
        readonly id: string;

    }
    interface DatasetDeletedEventDTO {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.f2.dataset.domain.command {
    interface DatasetLinkDatasetsCommandDTO {
        readonly id: string;
        readonly datasets: string[];

    }
    interface DatasetLinkDatasetsEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.f2.dataset.domain.command {
    interface DatasetLinkThemesCommandDTO {
        readonly id: string;
        readonly themes: io.komune.registry.dsl.skos.domain.model.SkosConcept[];

    }
    interface DatasetLinkThemesEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.f2.dataset.domain.command {
    interface DatasetRemoveAggregatorsCommandDTO extends io.komune.registry.s2.dataset.domain.command.DatasetRemoveAggregatorsCommandDTO {
        readonly id: string;
        readonly informationConceptIds: string[];

    }
    interface DatasetRemovedAggregatorsEventDTO {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.f2.dataset.domain.command {
    interface DatasetRemoveDistributionCommandDTO {
        readonly id: string;
        readonly distributionId: string;

    }
    interface DatasetRemovedDistributionEventDTO {
        readonly id: string;
        readonly distributionId: string;

    }
}
export declare namespace io.komune.registry.f2.dataset.domain.command {
    interface DatasetRemoveDistributionValueCommandDTO {
        readonly id: string;
        readonly distributionId: string;
        readonly informationConceptId: string;
        readonly valueId: string;

    }
    interface DatasetRemovedDistributionValueEventDTO {
        readonly id: string;
        readonly distributionId: string;
        readonly informationConceptId: string;
        readonly valueId: string;

    }
}
export declare namespace io.komune.registry.f2.dataset.domain.command {
    interface DatasetReplaceDistributionValueCommandDTO {
        readonly id: string;
        readonly distributionId: string;
        readonly informationConceptId: string;
        readonly valueId: string;
        readonly unit: io.komune.registry.s2.cccev.domain.model.CompositeDataUnitRefDTO;
        readonly isRange: boolean;
        readonly value: string;
        readonly description?: string;

    }
    interface DatasetReplacedDistributionValueEventDTO {
        readonly id: string;
        readonly distributionId: string;
        readonly valueIds: string[];

    }
}
export declare namespace io.komune.registry.f2.dataset.domain.command {
    interface DatasetSetImageCommandDTO {
        readonly id: string;

    }
    interface DatasetSetImageEventDTO {
        readonly id: string;
        readonly img?: io.komune.fs.s2.file.domain.model.FilePathDTO/* Nullable<io.komune.fs.s2.file.domain.model.FilePath> */;

    }
}
export declare namespace io.komune.registry.f2.dataset.domain.command {
    interface DatasetUpdateCommandDTO {
        readonly id: string;
        readonly title: string;
        readonly description?: string;

    }
    interface DatasetUpdatedEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;
        readonly identifier: string;

    }
}
export declare namespace io.komune.registry.f2.dataset.domain.command {
    interface DatasetUpdateJsonDistributionCommandDTO {
        readonly id: string;
        readonly distributionId: string;
        readonly name?: string;
        readonly jsonContent: string;

    }
    interface DatasetUpdatedJsonDistributionEventDTO {
        readonly id: string;
        readonly distributionId: string;

    }
}
export declare namespace io.komune.registry.f2.dataset.domain.command {
    interface DatasetUpdateMediaDistributionCommandDTO {
        readonly id: string;
        readonly distributionId: string;
        readonly name?: string;
        readonly mediaType: string;

    }
    interface DatasetUpdatedMediaDistributionEventDTO {
        readonly id: string;
        readonly distributionId: string;

    }
}
export declare namespace io.komune.registry.f2.dataset.domain.dto {
    interface AggregatorConfigDTO {
        readonly informationConceptId: string;
        readonly unit: io.komune.registry.s2.cccev.domain.model.CompositeDataUnitRefDTO;
        readonly processorType: io.komune.registry.s2.cccev.domain.model.FileProcessorType;
        readonly query: string;
        readonly valueIfEmpty: string;

    }
}
export declare namespace io.komune.registry.f2.dataset.domain.dto {
    interface DatasetDTO {
        readonly id: string;
        readonly identifier: string;
        readonly type: string;
        readonly catalogueId: string;
        readonly referencingCatalogueIds: string[];
        readonly temporalResolution?: string;
        readonly wasGeneratedBy?: io.komune.registry.dsl.dcat.domain.model.Activity;
        readonly accessRights?: string;
        readonly conformsTo?: io.komune.registry.dsl.skos.domain.model.SkosConceptScheme[];
        readonly creator?: io.komune.registry.dsl.dcat.domain.model.Agent;
        readonly description?: string;
        readonly title?: string;
        readonly releaseDate?: string;
        readonly language: string;
        readonly publisher?: io.komune.registry.dsl.dcat.domain.model.Agent;
        readonly validator?: io.komune.registry.dsl.dcat.domain.model.Agent;
        readonly theme?: io.komune.registry.dsl.skos.domain.model.SkosConcept[];
        readonly keywords?: string[];
        readonly landingPage?: string;
        readonly version?: string;
        readonly versionNotes?: string;
        readonly length?: number;
        readonly img?: string;
        readonly datasets?: io.komune.registry.f2.dataset.domain.dto.DatasetDTO[];
        readonly themes?: io.komune.registry.dsl.skos.domain.model.SkosConcept[];
        readonly status: io.komune.registry.s2.dataset.domain.automate.DatasetState;
        readonly homepage?: string;
        readonly display?: string;
        readonly source?: string;
        readonly license?: string;
        readonly format?: string;
        readonly issued?: number;
        readonly modified?: number;
        readonly distributions?: io.komune.registry.f2.dataset.domain.dto.DistributionDTO[];
        readonly structure?: io.komune.registry.s2.structure.domain.model.StructureDTO;
        readonly aggregators: io.komune.registry.f2.cccev.domain.concept.model.InformationConceptComputedDTOBase[];

    }
    interface DatasetRefDTO {
        readonly id: string;
        readonly identifier: string;
        readonly title?: string;
        readonly type: string;
        readonly description?: string;
        readonly homepage?: string;
        readonly img?: string;
        readonly display?: string;
        readonly themes?: io.komune.registry.dsl.skos.domain.model.SkosConceptDTO[];
        readonly status?: io.komune.registry.s2.dataset.domain.automate.DatasetState;
        readonly structure?: io.komune.registry.s2.structure.domain.model.StructureDTO;

    }
}
export declare namespace io.komune.registry.f2.dataset.domain.dto {
    interface DistributionDTO {
        readonly id: string;
        readonly name?: string;
        readonly downloadPath?: io.komune.fs.s2.file.domain.model.FilePathDTO/* Nullable<io.komune.fs.s2.file.domain.model.FilePath> */;
        readonly mediaType?: string;
        readonly aggregators: io.komune.registry.f2.cccev.domain.concept.model.InformationConceptComputedDTO[];
        readonly issued: number;
        readonly modified: number;

    }
}
export declare namespace io.komune.registry.f2.dataset.domain.query {
    interface DatasetDataQueryDTO {
        readonly id: string;

    }
    interface DatasetDataResultDTO {
        readonly items: kotlinx.serialization.json.JsonElement[];

    }
}
export declare namespace io.komune.registry.f2.dataset.domain.query {
    interface DatasetExistsQueryDTO {
        readonly identifier: string;
        readonly language: string;

    }
    interface DatasetExistsResultDTO {
        readonly exists: boolean;

    }
}
export declare namespace io.komune.registry.f2.dataset.domain.query {
    interface DatasetGetByIdentifierQueryDTO {
        readonly identifier: string;
        readonly language: string;

    }
    interface DatasetGetByIdentifierResultDTO {
        readonly item?: io.komune.registry.f2.dataset.domain.dto.DatasetDTO;

    }
}
export declare namespace io.komune.registry.f2.dataset.domain.query {
    interface DatasetGetQueryDTO {
        readonly id: string;

    }
    interface DatasetGetResultDTO {
        readonly item?: io.komune.registry.f2.dataset.domain.dto.DatasetDTO;

    }
}
export declare namespace io.komune.registry.f2.dataset.domain.query {
    interface DatasetGraphSearchQueryDTO {
        readonly rootCatalogueIdentifier: string;
        readonly language: string;
        readonly datasetType?: string;

    }
    interface DatasetGraphSearchResultDTO {
        readonly items: io.komune.registry.f2.dataset.domain.dto.DatasetDTO[];

    }
}
export declare namespace io.komune.registry.f2.dataset.domain.query {
    interface DatasetListLanguagesQueryDTO {
        readonly identifier: string;

    }
    interface DatasetListLanguagesResultDTO {
        readonly items: string[];

    }
}
export declare namespace io.komune.registry.f2.dataset.domain.query {
    interface DatasetPageQueryDTO {
        readonly datasetId?: string;
        readonly title?: string;
        readonly status?: string;
        readonly offset?: number;
        readonly limit?: number;

    }
    interface DatasetPageResultDTO extends f2.dsl.cqrs.page.PageDTO<io.komune.registry.f2.dataset.domain.dto.DatasetDTO> {
        readonly total: number;
        readonly items: io.komune.registry.f2.dataset.domain.dto.DatasetDTO[];

    }
}
export declare namespace io.komune.registry.f2.license.domain {
    const LicensePolicies: {
        canCreate(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        canUpdate(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
    };
}
export declare namespace io.komune.registry.f2.license.domain.command {
    interface LicenseCreateCommandDTO extends io.komune.registry.s2.license.domain.command.LicenseCreateCommandDTO {
        readonly identifier?: string;
        readonly name: string;
        readonly url?: string;

    }
    interface LicenseCreatedEventDTO {
        readonly id: string;
        readonly identifier: string;

    }
}
export declare namespace io.komune.registry.f2.license.domain.command {
    interface LicenseUpdateCommandDTO extends io.komune.registry.s2.license.domain.command.LicenseUpdateCommandDTO {
        readonly id: string;
        readonly name: string;
        readonly url?: string;

    }
    interface LicenseUpdatedEventDTO {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.f2.license.domain.model {
    interface LicenseDTO {
        readonly id: string;
        readonly identifier: string;
        readonly name: string;
        readonly url?: string;

    }
}
export declare namespace io.komune.registry.f2.license.domain.query {
    interface LicenseGetByIdentifierQueryDTO {
        readonly identifier: string;

    }
    interface LicenseGetByIdentifierResultDTO {
        readonly item?: io.komune.registry.f2.license.domain.model.LicenseDTO;

    }
}
export declare namespace io.komune.registry.f2.license.domain.query {
    interface LicenseGetQueryDTO {
        readonly id: string;

    }
    interface LicenseGetResultDTO {
        readonly item?: io.komune.registry.f2.license.domain.model.LicenseDTO;

    }
}
export declare namespace io.komune.registry.f2.license.domain.query {
    interface LicenseListQueryDTO {

    }
    interface LicenseListResultDTO {
        readonly items: io.komune.registry.f2.license.domain.model.LicenseDTO[];

    }
}
export declare namespace io.komune.registry.f2.organization.domain.model {
    interface OrganizationRefDTO {
        readonly id: string;
        readonly name: string;

    }
}
export declare namespace io.komune.registry.f2.user.domain.command {
    interface UserOnboardCommandDTO {
        readonly email: string;
        readonly password: string;
        readonly givenName: string;
        readonly familyName: string;
        readonly organizationName: string;
        readonly joinReason?: string;
        readonly acceptTermsOfUse: boolean;
        readonly acceptChart100M?: boolean;
        readonly acceptNewsletter: boolean;

    }
    interface UserOnboardedEventDTO {
        readonly id: string;
        readonly organizationId: string;

    }
}
export declare namespace io.komune.registry.f2.user.domain.model {
    interface UserRefDTO {
        readonly id: string;
        readonly email: string;
        readonly givenName: string;
        readonly familyName: string;
        readonly memberOf: string;

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain {
    const CataloguePolicies: {
        canSeeMyOrganization(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        canCreate(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        canCreateWithoutDraft(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        canUpdate(authedUser: io.komune.im.commons.auth.AuthedUserDTO, catalogue?: io.komune.registry.f2.catalogue.domain.dto.CatalogueAccessDataDTO): boolean;
        canUpdateAccessRights(authedUser: io.komune.im.commons.auth.AuthedUserDTO, catalogue?: io.komune.registry.f2.catalogue.domain.dto.CatalogueAccessDataDTO): boolean;
        canUpdateOwner(authedUser: io.komune.im.commons.auth.AuthedUserDTO, catalogue?: io.komune.registry.f2.catalogue.domain.dto.CatalogueAccessDataDTO): boolean;
        canSetImg(authedUser: io.komune.im.commons.auth.AuthedUserDTO, catalogue?: io.komune.registry.f2.catalogue.domain.dto.CatalogueAccessDataDTO): boolean;
        canDelete(authedUser: io.komune.im.commons.auth.AuthedUserDTO, catalogue?: io.komune.registry.f2.catalogue.domain.dto.CatalogueAccessDataDTO): boolean;
        canLinkCatalogues(authedUser: io.komune.im.commons.auth.AuthedUserDTO, catalogue?: io.komune.registry.f2.catalogue.domain.dto.CatalogueAccessDataDTO): boolean;
        canLinkThemes(authedUser: io.komune.im.commons.auth.AuthedUserDTO, catalogue?: io.komune.registry.f2.catalogue.domain.dto.CatalogueAccessDataDTO): boolean;
        canReferenceDatasets(authedUser: io.komune.im.commons.auth.AuthedUserDTO, catalogue?: io.komune.registry.f2.catalogue.domain.dto.CatalogueAccessDataDTO): boolean;
        canSetAggregator(authedUser: io.komune.im.commons.auth.AuthedUserDTO, catalogue?: io.komune.registry.f2.catalogue.domain.dto.CatalogueAccessDataDTO): boolean;
    };
}
export declare namespace io.komune.registry.f2.catalogue.domain.command {
    interface CatalogueAddRelatedCataloguesCommandDTO extends io.komune.registry.s2.catalogue.domain.command.CatalogueAddRelatedCataloguesCommandDTO {
        readonly id: string;
        readonly relatedCatalogueIds: Record<string, string[]>;

    }
    interface CatalogueAddedRelatedCataloguesEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.command {
    interface CatalogueClaimOwnershipCommandDTO {
        readonly id: string;

    }
    interface CatalogueClaimedOwnershipEventDTO {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.command {
    interface CatalogueCreateCommandDTO {
        readonly identifier?: string;
        readonly parentId?: string;
        readonly title: string;
        readonly description?: string;
        readonly type: string;
        readonly language?: string;
        readonly configuration?: io.komune.registry.s2.catalogue.domain.model.CatalogueConfigurationDTO;
        readonly homepage?: string;
        readonly ownerOrganizationId?: string;
        readonly stakeholder?: string;
        readonly themes?: string[];
        readonly catalogues?: string[];
        readonly relatedCatalogueIds?: Record<string, string[]>;
        readonly accessRights?: io.komune.registry.s2.catalogue.domain.model.CatalogueAccessRight;
        readonly license?: string;
        readonly location?: io.komune.registry.s2.commons.model.LocationDTO/* Nullable<io.komune.registry.s2.commons.model.Location> */;
        readonly versionNotes?: string;
        readonly order?: number;
        readonly hidden?: boolean;
        readonly withDraft: boolean;
        readonly integrateCounter?: boolean;
        readonly indicators?: Record<string, string[]>;

    }
    interface CatalogueCreatedEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;
        readonly identifier: string;
        readonly type: string;
        readonly draftId?: string;

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.command {
    interface CatalogueDeleteCommandDTO {
        readonly id: string;

    }
    interface CatalogueDeletedEventDTO {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.command {
    interface CatalogueImportCommandDTO {
        readonly type: io.komune.registry.f2.catalogue.domain.dto.CatalogueImportType;

    }
    interface CatalogueImportedEventDTO extends f2.dsl.cqrs.Event {
        readonly ids: string[];

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.command {
    interface CatalogueLinkCataloguesCommandDTO {
        readonly id: string;
        readonly catalogues: string[];

    }
    interface CatalogueLinkCataloguesEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.command {
    interface CatalogueLinkThemesCommandDTO {
        readonly id: string;
        readonly themes: string[];

    }
    interface CatalogueLinkThemesEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.command {
    interface CatalogueReferenceDatasetsCommandDTO extends io.komune.registry.s2.catalogue.domain.command.CatalogueReferenceDatasetsCommandDTO {
        readonly id: string;
        readonly datasetIds: string[];

    }
    interface CatalogueReferencedDatasetsEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.command {
    interface CatalogueRemoveRelatedCataloguesCommandDTO extends io.komune.registry.s2.catalogue.domain.command.CatalogueRemoveRelatedCataloguesCommandDTO {
        readonly id: string;
        readonly relatedCatalogueIds: Record<string, string[]>;

    }
    interface CatalogueRemovedRelatedCataloguesEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.command {
    interface CatalogueSetImageCommandDTO {
        readonly id: string;

    }
    interface CatalogueSetImageEventDTO {
        readonly id: string;
        readonly img?: io.komune.fs.s2.file.domain.model.FilePathDTO/* Nullable<io.komune.fs.s2.file.domain.model.FilePath> */;
        readonly date: number;

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.command {
    interface CatalogueUnlinkCataloguesCommandDTO {
        readonly id: string;
        readonly catalogues: string[];

    }
    interface CatalogueUnlinkCataloguesEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.command {
    interface CatalogueUnreferenceDatasetsCommandDTO extends io.komune.registry.s2.catalogue.domain.command.CatalogueUnreferenceDatasetsCommandDTO {
        readonly id: string;
        readonly datasetIds: string[];

    }
    interface CatalogueUnreferencedDatasetsEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.command {
    interface CatalogueUpdateAccessRightsCommandDTO extends io.komune.registry.s2.catalogue.domain.command.CatalogueUpdateAccessRightsCommandDTO {
        readonly id: string;
        readonly accessRights?: io.komune.registry.s2.catalogue.domain.model.CatalogueAccessRight;

    }
    interface CatalogueUpdatedAccessRightsEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.command {
    interface CatalogueUpdateCommandDTO {
        readonly id: string;
        readonly parentId?: string;
        readonly title: string;
        readonly description?: string;
        readonly language: string;
        readonly configuration?: io.komune.registry.s2.catalogue.domain.model.CatalogueConfigurationDTO;
        readonly homepage?: string;
        readonly ownerOrganizationId?: string;
        readonly stakeholder?: string;
        readonly themes?: string[];
        readonly relatedCatalogueIds?: Record<string, string[]>;
        readonly accessRights?: io.komune.registry.s2.catalogue.domain.model.CatalogueAccessRight;
        readonly license?: string;
        readonly location?: io.komune.registry.s2.commons.model.LocationDTO;
        readonly order?: number;
        readonly hidden?: boolean;
        readonly versionNotes?: string;
        readonly integrateCounter?: boolean;
        readonly indicators?: Record<string, string[]>;

    }
    interface CatalogueUpdatedEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.dto {
    interface CatalogueAccessDataDTO {
        readonly id: string;
        readonly creator?: io.komune.registry.f2.user.domain.model.UserRefDTO;
        readonly creatorOrganization?: io.komune.registry.f2.organization.domain.model.OrganizationRefDTO;
        readonly ownerOrganization?: io.komune.registry.f2.organization.domain.model.OrganizationRefDTO;
        readonly accessRights: io.komune.registry.s2.catalogue.domain.model.CatalogueAccessRight;

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.dto {
    interface CatalogueBlueprintDTO {
        readonly identifier: string;
        readonly name?: string;
        readonly icon?: string;
        readonly parentTypes?: string[];
        readonly relatedTypes?: Record<string, string[]>;
        readonly structure?: io.komune.registry.f2.catalogue.domain.dto.structure.CatalogueStructureDTO;
        readonly canUpdate: boolean;
        readonly canClaim: boolean;
        readonly includeInGlobalSearch: boolean;

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.dto {
    interface CatalogueBlueprintsDTO {
        readonly globalSearchTypes: string[];
        readonly updatableTypes: string[];
        readonly claimableTypes: string[];
        readonly types: Record<string, io.komune.registry.f2.catalogue.domain.dto.CatalogueBlueprintDTO>;

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.dto {
    interface CatalogueConfigurationDTO extends io.komune.registry.s2.catalogue.domain.model.CatalogueConfigurationDTO {
        readonly structureType?: io.komune.registry.s2.catalogue.domain.model.structure.StructureType;
        readonly relations: Record<string, io.komune.registry.s2.catalogue.domain.model.CatalogueRelationConfigurationDTO>;

    }
    interface CatalogueRelationConfigurationDTO extends io.komune.registry.s2.catalogue.domain.model.CatalogueRelationConfigurationDTO {
        readonly types: string[];

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.dto {
    interface CatalogueDTO extends io.komune.registry.f2.catalogue.domain.dto.CatalogueAccessDataDTO {
        readonly id: string;
        readonly identifier: string;
        readonly parent?: io.komune.registry.f2.catalogue.domain.dto.CatalogueRefDTO;
        readonly description?: string;
        readonly homepage?: string;
        readonly title: string;
        readonly language: string;
        readonly configuration?: io.komune.registry.s2.catalogue.domain.model.CatalogueConfigurationDTO;
        readonly availableLanguages: string[];
        readonly img?: string;
        readonly type: string;
        readonly structure?: io.komune.registry.f2.catalogue.domain.dto.structure.CatalogueStructureDTO;
        readonly themes: io.komune.registry.f2.concept.domain.model.ConceptTranslatedDTO[];
        readonly catalogues: io.komune.registry.f2.catalogue.domain.dto.CatalogueRefDTO[];
        readonly relatedCatalogues?: Record<string, io.komune.registry.f2.catalogue.domain.dto.CatalogueRefDTO[]>;
        readonly datasets: io.komune.registry.f2.dataset.domain.dto.DatasetDTO[];
        readonly referencedDatasets: io.komune.registry.f2.dataset.domain.dto.DatasetDTO[];
        readonly status: io.komune.registry.s2.catalogue.domain.automate.CatalogueState;
        readonly creator?: io.komune.registry.f2.user.domain.model.UserRefDTO;
        readonly creatorOrganization?: io.komune.registry.f2.organization.domain.model.OrganizationRefDTO;
        readonly ownerOrganization?: io.komune.registry.f2.organization.domain.model.OrganizationRefDTO;
        readonly validator?: io.komune.registry.f2.user.domain.model.UserRefDTO;
        readonly validatorOrganization?: io.komune.registry.f2.organization.domain.model.OrganizationRefDTO;
        readonly stakeholder?: string;
        readonly accessRights: io.komune.registry.s2.catalogue.domain.model.CatalogueAccessRight;
        readonly license?: io.komune.registry.f2.license.domain.model.LicenseDTO;
        readonly location?: io.komune.registry.s2.commons.model.LocationDTO;
        readonly issued: number;
        readonly modified: number;
        readonly order?: number;
        readonly hidden: boolean;
        readonly pendingDrafts?: io.komune.registry.f2.catalogue.domain.dto.CatalogueDraftRefDTO[];
        readonly aggregators: io.komune.registry.f2.cccev.domain.concept.model.InformationConceptComputedDTO[];
        readonly version: number;
        readonly versionNotes?: string;
        readonly integrateCounter?: boolean;
        readonly indicators: Record<string, string[]>;

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.dto {
    interface CatalogueTypeDTO {
        readonly identifier: string;
        readonly name: string;
        readonly icon?: string;

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.dto {
    interface CatalogueDraftRefDTO {
        readonly id: string;
        readonly originalCatalogueId: string;
        readonly language: string;
        readonly baseVersion: number;
        readonly creator?: io.komune.registry.f2.user.domain.model.UserRefDTO;
        readonly validator?: io.komune.registry.f2.user.domain.model.UserRefDTO;
        readonly validatorOrganization?: io.komune.registry.f2.organization.domain.model.OrganizationRefDTO;
        readonly status: io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftState;

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.dto {
    type CatalogueImportType = "M100_PROJECTS";
}
export declare namespace io.komune.registry.f2.catalogue.domain.dto {
    type CatalogueOperation = "ALL" | "CLAIM_OWNERSHIP" | "RELATION" | "SEARCH" | "UPDATE";
}
export declare namespace io.komune.registry.f2.catalogue.domain.dto {
    interface CatalogueRefDTO {
        readonly id: string;
        readonly identifier: string;
        readonly structure?: io.komune.registry.f2.catalogue.domain.dto.structure.CatalogueStructureDTO;
        readonly title: string;
        readonly language: string;
        readonly availableLanguages: string[];
        readonly type: string;
        readonly description?: string;
        readonly img?: string;
        readonly accessRights: io.komune.registry.s2.catalogue.domain.model.CatalogueAccessRight;
        readonly order?: number;
        readonly modified: number;

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.dto {
    interface CatalogueRefTreeDTO extends io.komune.registry.f2.catalogue.domain.dto.CatalogueRefDTO {
        readonly id: string;
        readonly identifier: string;
        readonly title: string;
        readonly language: string;
        readonly availableLanguages: string[];
        readonly type: string;
        readonly description?: string;
        readonly img?: string;
        readonly structure?: io.komune.registry.f2.catalogue.domain.dto.structure.CatalogueStructureDTO;
        readonly accessRights: io.komune.registry.s2.catalogue.domain.model.CatalogueAccessRight;
        readonly order?: number;
        readonly modified: number;
        readonly catalogues?: io.komune.registry.f2.catalogue.domain.dto.CatalogueRefTreeDTO[];
        readonly relatedCatalogues?: Record<string, io.komune.registry.f2.catalogue.domain.dto.CatalogueRefTreeDTO[]>;

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.dto.structure {
    interface CatalogueCreateButtonDTO {
        readonly label: string;
        readonly kind: io.komune.registry.s2.catalogue.domain.model.structure.CatalogueButtonKind;
        readonly types: io.komune.registry.f2.catalogue.domain.dto.CatalogueTypeDTO[];

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.dto.structure {
    interface CatalogueStructureDTO {
        readonly type?: io.komune.registry.s2.catalogue.domain.model.structure.StructureType;
        readonly alias: boolean;
        readonly color?: string;
        readonly isTab: boolean;
        readonly isInventory: boolean;
        readonly illustration?: io.komune.registry.s2.catalogue.domain.model.structure.CatalogueIllustrationType;
        readonly creationForm?: io.komune.registry.s2.commons.model.form.FormDTO;
        readonly metadataForm?: io.komune.registry.s2.commons.model.form.FormDTO;
        readonly tagForm?: io.komune.registry.s2.commons.model.form.FormDTO;
        readonly table?: io.komune.registry.s2.commons.model.table.TableDTO;
        readonly createButton?: io.komune.registry.f2.catalogue.domain.dto.structure.CatalogueCreateButtonDTO;

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.query {
    interface CatalogueGetBlueprintsQueryDTO {
        readonly language: string;

    }
    interface CatalogueGetBlueprintsResultDTO {
        readonly item?: io.komune.registry.f2.catalogue.domain.dto.CatalogueBlueprintsDTO;

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.query {
    interface CatalogueGetByIdentifierQueryDTO {
        readonly identifier?: string;
        readonly language?: string;

    }
    interface CatalogueGetByIdentifierResultDTO {
        readonly item?: io.komune.registry.f2.catalogue.domain.dto.CatalogueDTO;

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.query {
    interface CatalogueHistoryGetQueryDTO {
        readonly id: string;

    }
    interface CatalogueHistoryGetResultDTO {
        readonly actualVersion?: io.komune.registry.s2.catalogue.domain.model.CatalogueModel;
        readonly history: io.komune.registry.s2.commons.history.EventHistory<io.komune.registry.s2.catalogue.domain.command.CatalogueEvent, io.komune.registry.s2.catalogue.domain.model.CatalogueModel>[];

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.query {
    interface CatalogueGetQueryDTO {
        readonly id: string;
        readonly language?: string;

    }
    interface CatalogueGetResultDTO {
        readonly item?: io.komune.registry.f2.catalogue.domain.dto.CatalogueDTO;

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.query {
    interface CatalogueGetStructureQueryDTO {
        readonly type: string;
        readonly language: string;

    }
    interface CatalogueGetStructureResultDTO {
        readonly item?: io.komune.registry.f2.catalogue.domain.dto.structure.CatalogueStructureDTO;

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.query {
    interface CatalogueListAllowedTypesQueryDTO {
        readonly language: string;
        readonly operation: io.komune.registry.f2.catalogue.domain.dto.CatalogueOperation;
        readonly catalogueType?: string;
        readonly relationType?: string;

    }
    interface CatalogueListAllowedTypesResultDTO {
        readonly items: io.komune.registry.f2.catalogue.domain.dto.CatalogueTypeDTO[];

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.query {
    interface CatalogueListAvailableOwnersQueryDTO {
        readonly type: string;
        readonly search?: string;
        readonly limit?: number;

    }
    interface CatalogueListAvailableOwnersResultDTO {
        readonly items: io.komune.registry.f2.organization.domain.model.OrganizationRefDTO[];

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.query {
    interface CatalogueListAvailableParentsQueryDTO {
        readonly id?: string;
        readonly type: string;
        readonly language: string;

    }
    interface CatalogueListAvailableParentsResultDTO {
        readonly items: io.komune.registry.f2.catalogue.domain.dto.CatalogueRefDTO[];

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.query {
    interface CatalogueListAvailableThemesQueryDTO {
        readonly type: string;
        readonly language: string;

    }
    interface CatalogueListAvailableThemesResultDTO {
        readonly items: io.komune.registry.f2.concept.domain.model.ConceptTranslatedDTO[];

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.query {
    interface CataloguePageQueryDTO {
        readonly catalogueId?: string;
        readonly parentId?: string;
        readonly parentIdentifier?: string;
        readonly title?: string;
        readonly status?: string;
        readonly language: string;
        readonly otherLanguageIfAbsent?: boolean;
        readonly type?: string[];
        readonly relatedInCatalogueIds?: Record<string, string[]>;
        readonly creatorOrganizationId?: string;
        readonly offset?: number;
        readonly limit?: number;

    }
    interface CataloguePageResultDTO extends f2.dsl.cqrs.page.PageDTO<io.komune.registry.f2.catalogue.domain.dto.CatalogueDTO> {
        readonly total: number;
        readonly items: io.komune.registry.f2.catalogue.domain.dto.CatalogueDTO[];

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.query {
    interface CatalogueRefGetQueryDTO {
        readonly id: string;
        readonly language: string;

    }
    interface CatalogueRefGetResultDTO {
        readonly item?: io.komune.registry.f2.catalogue.domain.dto.CatalogueRefDTO;

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.query {
    interface CatalogueRefGetTreeQueryDTO {
        readonly identifier?: string;
        readonly language: string;

    }
    interface CatalogueRefGetTreeResultDTO {
        readonly item?: io.komune.registry.f2.catalogue.domain.dto.CatalogueRefTreeDTO;

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.query {
    interface CatalogueRefSearchQueryDTO extends io.komune.registry.f2.catalogue.domain.query.CatalogueSearchQueryDTO {
        readonly query?: string;
        readonly language: string;
        readonly offset?: number;
        readonly limit?: number;
        readonly otherLanguageIfAbsent?: boolean;
        readonly accessRights?: string[];
        readonly catalogueIds?: string[];
        readonly relatedCatalogueIds?: Record<string, string[]>;
        readonly relatedInCatalogueIds?: Record<string, string[]>;
        readonly parentId?: string[];
        readonly parentIdentifier?: string[];
        readonly type?: string[];
        readonly themeIds?: string[];
        readonly licenseId?: string[];
        readonly creatorOrganizationId?: string;
        readonly ownerOrganizationId?: string;
        readonly availableLanguages?: string[];
        readonly withTransient?: boolean;

    }
    interface CatalogueRefSearchResultDTO extends io.komune.registry.s2.commons.model.FacetPageDTO<io.komune.registry.f2.catalogue.domain.dto.CatalogueRefDTO/* io.komune.registry.f2.catalogue.domain.dto.CatalogueRefDTOBase */> {
        readonly total: number;
        readonly items: io.komune.registry.f2.catalogue.domain.dto.CatalogueRefDTOBase[];
        readonly facets: io.komune.registry.s2.commons.model.FacetDTO[];

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.query {
    interface CatalogueSearchQueryDTO {
        readonly query?: string;
        readonly language: string;
        readonly offset?: number;
        readonly limit?: number;
        readonly otherLanguageIfAbsent?: boolean;
        readonly accessRights?: string[];
        readonly catalogueIds?: string[];
        readonly relatedCatalogueIds?: Record<string, string[]>;
        readonly relatedInCatalogueIds?: Record<string, string[]>;
        readonly parentId?: string[];
        readonly parentIdentifier?: string[];
        readonly type?: string[];
        readonly themeIds?: string[];
        readonly licenseId?: string[];
        readonly creatorOrganizationId?: string;
        readonly ownerOrganizationId?: string;
        readonly availableLanguages?: string[];
        readonly withTransient?: boolean;

    }
    interface CatalogueSearchResultDTO extends io.komune.registry.s2.commons.model.FacetPageDTO<io.komune.registry.f2.catalogue.domain.dto.CatalogueDTO> {
        readonly total: number;
        readonly items: io.komune.registry.f2.catalogue.domain.dto.CatalogueDTO[];
        readonly facets: io.komune.registry.s2.commons.model.FacetDTO[];

    }
}
export declare namespace io.komune.registry.f2.catalogue.draft.domain {
    const CatalogueDraftPolicies: {
        canSeePublished(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        canCreate(authedUser: io.komune.im.commons.auth.AuthedUserDTO, catalogue?: io.komune.registry.f2.catalogue.domain.dto.CatalogueAccessDataDTO): boolean;
        canUpdate(authedUser: io.komune.im.commons.auth.AuthedUserDTO, draft?: io.komune.registry.f2.catalogue.domain.dto.CatalogueDraftRefDTO): boolean;
        canSubmit(authedUser: io.komune.im.commons.auth.AuthedUserDTO, draft?: io.komune.registry.f2.catalogue.domain.dto.CatalogueDraftRefDTO): boolean;
        canAudit(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        canDelete(authedUser: io.komune.im.commons.auth.AuthedUserDTO, draft?: io.komune.registry.f2.catalogue.domain.dto.CatalogueDraftRefDTO): boolean;
    };
}
export declare namespace io.komune.registry.f2.catalogue.draft.domain.command {
    interface CatalogueDraftCreateCommandDTO {
        readonly catalogueId: string;
        readonly language: string;

    }
    interface CatalogueDraftCreatedEventDTO {
        readonly item: io.komune.registry.f2.catalogue.draft.domain.model.CatalogueDraftDTO;

    }
}
export declare namespace io.komune.registry.f2.catalogue.draft.domain.command {
    interface CatalogueDraftDeleteCommandDTO extends io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftDeleteCommandDTO {
        readonly id: string;

    }
    interface CatalogueDraftDeletedEventDTO {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.f2.catalogue.draft.domain.command {
    interface CatalogueDraftRejectCommandDTO extends io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftRejectCommandDTO {
        readonly id: string;
        readonly reason: string;

    }
    interface CatalogueDraftRejectedEventDTO {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.f2.catalogue.draft.domain.command {
    interface CatalogueDraftRequestUpdateCommandDTO extends io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftRequestUpdateCommandDTO {
        readonly id: string;

    }
    interface CatalogueDraftRequestedUpdateEventDTO {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.f2.catalogue.draft.domain.command {
    interface CatalogueDraftSubmitCommandDTO extends io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftSubmitCommandDTO {
        readonly id: string;
        readonly versionNotes?: string;

    }
    interface CatalogueDraftSubmittedEventDTO {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.f2.catalogue.draft.domain.command {
    interface CatalogueDraftValidateCommandDTO extends io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftValidateCommandDTO {
        readonly id: string;

    }
    interface CatalogueDraftValidatedEventDTO {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.f2.catalogue.draft.domain.model {
    interface CatalogueDraftDTO extends io.komune.registry.f2.catalogue.domain.dto.CatalogueDraftRefDTO {
        readonly id: string;
        readonly catalogue: io.komune.registry.f2.catalogue.domain.dto.CatalogueDTO;
        readonly originalCatalogueId: string;
        readonly language: string;
        readonly baseVersion: number;
        readonly creator?: io.komune.registry.f2.user.domain.model.UserRefDTO;
        readonly validator?: io.komune.registry.f2.user.domain.model.UserRefDTO;
        readonly validatorOrganization?: io.komune.registry.f2.organization.domain.model.OrganizationRefDTO;
        readonly status: io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftState;
        readonly versionNotes?: string;
        readonly rejectReason?: string;
        readonly issued: number;
        readonly modified: number;
        readonly isDeleted: boolean;

    }
}
export declare namespace io.komune.registry.f2.catalogue.draft.domain.query {
    interface CatalogueDraftGetQueryDTO {
        readonly id: string;

    }
    interface CatalogueDraftGetResultDTO {
        readonly item?: io.komune.registry.f2.catalogue.draft.domain.model.CatalogueDraftDTO;

    }
}
export declare namespace io.komune.registry.f2.catalogue.draft.domain.query {
    interface CatalogueDraftPageQueryDTO {
        readonly originalCatalogueId?: string;
        readonly language?: string;
        readonly search?: string;
        readonly status?: io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftState[];
        readonly type?: string;
        readonly creatorId?: string;
        readonly offset?: number;
        readonly limit?: number;

    }
    interface CatalogueDraftPageResultDTO extends f2.dsl.cqrs.page.PageDTO<io.komune.registry.f2.catalogue.draft.domain.model.CatalogueDraftDTO> {
        readonly total: number;
        readonly items: io.komune.registry.f2.catalogue.draft.domain.model.CatalogueDraftDTO[];

    }
}
export declare namespace io.komune.registry.f2.entity.domain.model {
    interface EntityRefDTO {
        readonly id: string;
        readonly identifier: string;
        readonly type: io.komune.registry.f2.entity.domain.model.EntityType;
        readonly name: string;
        readonly language?: string;
        readonly availableLanguages: string[];

    }
}
export declare namespace io.komune.registry.f2.entity.domain.model {
    type EntityType = "CATALOGUE";
}
export declare namespace io.komune.registry.f2.entity.domain.query {
    interface EntityRefGetQueryDTO {
        readonly id: string;
        readonly type: io.komune.registry.f2.entity.domain.model.EntityType;
        readonly language: string;
        readonly otherLanguageIfAbsent?: boolean;

    }
    interface EntityRefGetQueryResultDTO {
        readonly item?: io.komune.registry.f2.entity.domain.model.EntityRefDTO;

    }
}
export declare namespace io.komune.sel {
    class SelException /* extends kotlin.Exception */ {
        constructor(message: string, jsonPath: string, cause?: Error);
        get jsonPath(): string;
    }
}
export declare namespace io.komune.sel {
    class SelExecutor {
        constructor();
        addOperation(expression: io.komune.sel.evaluator.SelExpression): void;
        evaluate(expressionJson: string, dataJson: string): Nullable<any>;
        evaluateToJson(expressionJson: string, dataJson: string): string;
    }
}
export declare namespace io.komune.sel {
    function isTruthy(_this_?: any): boolean;
    function normalize(_this_?: any): Nullable<any>;
    function normalizeJsonElement(_this_: kotlinx.serialization.json.JsonElement): Nullable<any>;
    function normalizeNumber(_this_?: any): Nullable<any>;
    function fixDoubleFloatingPrecision(_this_: number): number;
    function fixFloatingPrecision(_this_: number): number;
    function toBooleanOrNull(_this_: string): Nullable<boolean>;
    function toJsonElement(_this_?: any): kotlinx.serialization.json.JsonElement;
}
export declare namespace io.komune.sel.ast {
    class SelArray implements io.komune.sel.ast.SelNode/*, io.komune.sel.ast.SelNode[] */ {
        constructor(values?: io.komune.sel.ast.SelNode[]);
    }
}
export declare namespace io.komune.sel.ast {
    interface SelNode {

    }
}
export declare namespace io.komune.sel.ast {
    const SelNull: {
        get value(): Nullable<any>;
    } & io.komune.sel.ast.SelPrimitive<Nullable<any>>;
}
export declare namespace io.komune.sel.ast {
    class SelOperation implements io.komune.sel.ast.SelNode {
        constructor(operator: string, arguments: io.komune.sel.ast.SelArray);
        get operator(): string;
        get arguments(): io.komune.sel.ast.SelArray;
    }
}
export declare namespace io.komune.sel.ast {
    class SelParseException extends io.komune.sel.SelException {
        constructor(message: string, jsonPath: string, cause?: Error);
    }
}
export declare namespace io.komune.sel.ast {
    const SelParser: {
        parse(json: string): io.komune.sel.ast.SelNode;
        static parseElement$default($this: typeof io.komune.sel.ast.SelParser, root: kotlinx.serialization.json.JsonElement, jsonPath?: string): io.komune.sel.ast.SelNode;
    };
}
export declare namespace io.komune.sel.ast {
    interface SelPrimitive<T> extends io.komune.sel.ast.SelNode {
        readonly value: T;

    }
    class SelString implements io.komune.sel.ast.SelPrimitive<string> {
        constructor(value: string);
        get value(): string;
        copy(value?: string): io.komune.sel.ast.SelString;
        toString(): string;
        hashCode(): number;
        equals(other?: any): boolean;
    }
    class SelNumber implements io.komune.sel.ast.SelPrimitive<any/* kotlin.Number */> {
        constructor(value: kotlin.Number);
        get value(): kotlin.Number;
        copy(value?: kotlin.Number): io.komune.sel.ast.SelNumber;
        toString(): string;
        hashCode(): number;
        equals(other?: any): boolean;
    }
    class SelBoolean implements io.komune.sel.ast.SelPrimitive<boolean> {
        constructor(value: boolean);
        get value(): boolean;
        copy(value?: boolean): io.komune.sel.ast.SelBoolean;
        toString(): string;
        hashCode(): number;
        equals(other?: any): boolean;
        
    }
}
export declare namespace io.komune.sel.evaluator {
    class SelEvaluationException extends io.komune.sel.SelException {
        constructor(message: string, jsonPath: string, cause?: Error);
    }
}
export declare namespace io.komune.sel.evaluator {
    interface SelExpression {
        readonly key: string;
        evaluate(evaluator: io.komune.sel.evaluator.SelExpressionEvaluator, arguments: io.komune.sel.ast.SelArray, data?: any, jsonPath: string): Nullable<any>;

    }
}
export declare namespace io.komune.sel.evaluator {
    class SelExpressionEvaluator {
        constructor();
        evaluate(node: io.komune.sel.ast.SelNode, data?: any, jsonPath: string): Nullable<any>;
        evaluateArray(array: io.komune.sel.ast.SelArray, data?: any, jsonPath: string): Nullable<any>[];
        evaluateOperation(operation: io.komune.sel.ast.SelOperation, data?: any, jsonPath: string): Nullable<any>;
        addExpression(expression: io.komune.sel.evaluator.SelExpression): void;
    }
}
export declare namespace io.komune.sel.evaluator {
    const SelExpressionNativeDirectory: {
        register(expression: io.komune.sel.evaluator.SelExpression): void;
        registerAll(expressions: kotlin.collections.Iterable<io.komune.sel.evaluator.SelExpression>): void;
    } & Record<string, io.komune.sel.evaluator.SelExpression>;
}
export declare namespace io.komune.sel.evaluator.expressions {
    const AggregateExpressions: {
    } & io.komune.sel.evaluator.expressions.AggregateExpression[];
    class AggregateExpression extends io.komune.sel.evaluator.expressions.MathExpression {
        constructor(key: string, aggregate: (p0: kotlin.collections.Iterable<number>) => kotlin.Number, minArguments?: number, maxArguments?: number);
        get key(): string;
        protected get minArguments(): number;
        protected get maxArguments(): number;
        evaluateArguments(arguments: kotlin.Number[]): Nullable<any>;
    }
}
export declare namespace io.komune.sel.evaluator.expressions {
    const ArithmeticExpressions: {
    } & io.komune.sel.evaluator.expressions.ArithmeticExpression[];
    class ArithmeticExpression extends io.komune.sel.evaluator.expressions.MathExpression {
        constructor(key: string, reducerDouble: (p0: number, p1: number) => number, reducerLong?: Nullable<(p0: number, p1: number) => number>, initialValue?: kotlin.Number, minArguments?: number, maxArguments?: number, defaultFirstArgument?: kotlin.Number);
        get key(): string;
        protected get minArguments(): number;
        protected get maxArguments(): number;
        protected get defaultFirstArgument(): Nullable<kotlin.Number>;
        evaluateArguments(arguments: kotlin.Number[]): Nullable<any>;
    }
}
export declare namespace io.komune.sel.evaluator.expressions {
    const ArrayBooleanExpressions: {
    } & io.komune.sel.evaluator.expressions.ArrayBooleanExpression[];
    abstract class ArrayBooleanExpression extends io.komune.sel.evaluator.expressions.ArrayIterateExpression<boolean, boolean> {
        constructor(key: string);
        get key(): string;
        abstract eval<T>(array: kotlin.collections.Iterable<T>, checkItem: (p0: T) => boolean): boolean;
        protected evaluateArray(array: kotlin.collections.Iterable<Nullable<any>>, evalItem: (p0: number, p1?: any) => boolean): boolean;
        protected evaluateItem(evaluator: io.komune.sel.evaluator.SelExpressionEvaluator, itemEvalNode: io.komune.sel.ast.SelNode, iterationData: io.komune.sel.evaluator.expressions.ArrayIterateExpression.IterationData, jsonPath: string): boolean;
    }
}
export declare namespace io.komune.sel.evaluator.expressions {
    const ArrayFilterExpression: {
        get key(): string;
        protected evaluateArray(array: kotlin.collections.Iterable<Nullable<any>>, evalItem: (p0: number, p1?: any) => boolean): Nullable<any>[];
        protected evaluateItem(evaluator: io.komune.sel.evaluator.SelExpressionEvaluator, itemEvalNode: io.komune.sel.ast.SelNode, iterationData: io.komune.sel.evaluator.expressions.ArrayIterateExpression.IterationData, jsonPath: string): boolean;
    } & io.komune.sel.evaluator.expressions.ArrayIterateExpression<boolean, Nullable<any[]>>;
}
export declare namespace io.komune.sel.evaluator.expressions {
    abstract class ArrayIterateExpression<ItemTransformationResult, ArrayEvaluationResult> implements io.komune.sel.evaluator.SelExpression {
        constructor();
        protected abstract evaluateArray(array: kotlin.collections.Iterable<Nullable<any>>, evalItem: (p0: number, p1?: any) => ItemTransformationResult): ArrayEvaluationResult;
        protected evaluateItem(evaluator: io.komune.sel.evaluator.SelExpressionEvaluator, itemEvalNode: io.komune.sel.ast.SelNode, iterationData: io.komune.sel.evaluator.expressions.ArrayIterateExpression.IterationData, jsonPath: string): ItemTransformationResult;
        evaluate(evaluator: io.komune.sel.evaluator.SelExpressionEvaluator, arguments: io.komune.sel.ast.SelArray, data?: any, jsonPath: string): Nullable<any>;
        abstract get key(): string;
    }
    namespace ArrayIterateExpression {
        class IterationData /* implements Record<string, Nullable<any>> */ {
            constructor(data?: any, array: kotlin.collections.Iterable<Nullable<any>>, item?: any, index: number, parent?: io.komune.sel.evaluator.expressions.ArrayIterateExpression.IterationData);
            get data(): Nullable<any>;
            get array(): kotlin.collections.Iterable<Nullable<any>>;
            get item(): Nullable<any>;
            get index(): number;
            get parent(): Nullable<io.komune.sel.evaluator.expressions.ArrayIterateExpression.IterationData>;
        }
    }
}
export declare namespace io.komune.sel.evaluator.expressions {
    const ArrayMapExpression: {
        get key(): string;
        protected evaluateArray(array: kotlin.collections.Iterable<Nullable<any>>, evalItem: (p0: number, p1?: any) => Nullable<any>): Nullable<any>[];
    } & io.komune.sel.evaluator.expressions.ArrayIterateExpression<Nullable<any>, Nullable<any[]>>;
}
export declare namespace io.komune.sel.evaluator.expressions {
    const ConcatExpression: {
        get key(): string;
        evaluate(evaluator: io.komune.sel.evaluator.SelExpressionEvaluator, arguments: io.komune.sel.ast.SelArray, data?: any, jsonPath: string): Nullable<any>;
    } & io.komune.sel.evaluator.SelExpression;
}
export declare namespace io.komune.sel.evaluator.expressions {
    const EqualityExpressions: {
    } & io.komune.sel.evaluator.expressions.EqualityExpression[];
    class EqualityExpression implements io.komune.sel.evaluator.SelExpression {
        constructor(key: string, expected: boolean);
        get key(): string;
        evaluate(evaluator: io.komune.sel.evaluator.SelExpressionEvaluator, arguments: io.komune.sel.ast.SelArray, data?: any, jsonPath: string): Nullable<any>;
    }
}
export declare namespace io.komune.sel.evaluator.expressions {
    const IfExpression: {
        get key(): string;
        evaluate(evaluator: io.komune.sel.evaluator.SelExpressionEvaluator, arguments: io.komune.sel.ast.SelArray, data?: any, jsonPath: string): Nullable<any>;
    } & io.komune.sel.evaluator.SelExpression;
}
export declare namespace io.komune.sel.evaluator.expressions {
    const InExpression: {
        get key(): string;
        evaluate(evaluator: io.komune.sel.evaluator.SelExpressionEvaluator, arguments: io.komune.sel.ast.SelArray, data?: any, jsonPath: string): Nullable<any>;
    } & io.komune.sel.evaluator.SelExpression;
}
export declare namespace io.komune.sel.evaluator.expressions {
    const LogicExpressions: {
    } & io.komune.sel.evaluator.expressions.LogicExpression[];
    class LogicExpression implements io.komune.sel.evaluator.SelExpression {
        constructor(isAnd: boolean);
        get key(): string;
        evaluate(evaluator: io.komune.sel.evaluator.SelExpressionEvaluator, arguments: io.komune.sel.ast.SelArray, data?: any, jsonPath: string): Nullable<any>;
    }
}
export declare namespace io.komune.sel.evaluator.expressions {
    abstract class MathExpression implements io.komune.sel.evaluator.SelExpression {
        constructor();
        protected get defaultFirstArgument(): Nullable<kotlin.Number>;
        protected abstract get minArguments(): number;
        protected abstract get maxArguments(): number;
        abstract evaluateArguments(arguments: kotlin.Number[]): Nullable<any>;
        evaluate(evaluator: io.komune.sel.evaluator.SelExpressionEvaluator, arguments: io.komune.sel.ast.SelArray, data?: any, jsonPath: string): Nullable<any>;
        protected parseArguments(evaluator: io.komune.sel.evaluator.SelExpressionEvaluator, arguments: io.komune.sel.ast.SelArray, data?: any, jsonPath: string): kotlin.Number[];
        protected parseArgument(_this_?: any, jsonPath: string): kotlin.Number[];
        protected isFloat(_this_: kotlin.Number): boolean;
        abstract get key(): string;
    }
}
export declare namespace io.komune.sel.evaluator.expressions {
    const NotExpressions: {
    } & io.komune.sel.evaluator.expressions.NotExpression[];
    class NotExpression implements io.komune.sel.evaluator.SelExpression {
        constructor(isDoubleNot: boolean);
        get key(): string;
        evaluate(evaluator: io.komune.sel.evaluator.SelExpressionEvaluator, arguments: io.komune.sel.ast.SelArray, data?: any, jsonPath: string): Nullable<any>;
    }
}
export declare namespace io.komune.sel.evaluator.expressions {
    const NumericComparisonExpressions: {
    } & io.komune.sel.evaluator.expressions.NumericComparisonExpression[];
    class NumericComparisonExpression extends io.komune.sel.evaluator.expressions.MathExpression {
        constructor(key: string, compare: (p0: number, p1: number) => boolean);
        get key(): string;
        protected get minArguments(): number;
        protected get maxArguments(): number;
        evaluateArguments(arguments: kotlin.Number[]): Nullable<any>;
    }
}
export declare namespace io.komune.sel.evaluator.expressions {
    const VariableExpression: {
        get key(): string;
        evaluate(evaluator: io.komune.sel.evaluator.SelExpressionEvaluator, arguments: io.komune.sel.ast.SelArray, data?: any, jsonPath: string): Nullable<any>;
    } & io.komune.sel.evaluator.SelExpression;
}
export declare interface EnableModuleExport {

}
export as namespace io_komune_registry_api_js_export;