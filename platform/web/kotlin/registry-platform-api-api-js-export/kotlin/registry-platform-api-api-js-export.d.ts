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

    }
}
export declare namespace io.komune.im.commons.auth {
    type ImRole = "ORCHESTRATOR" | "ORCHESTRATOR_ADMIN" | "ORCHESTRATOR_USER" | "IM_USER_READ" | "IM_USER_ROLE_READ" | "IM_USER_WRITE" | "IM_ORGANIZATION_READ" | "IM_ORGANIZATION_WRITE" | "IM_MY_ORGANIZATION_WRITE" | "IM_APIKEY_READ" | "IM_APIKEY_WRITE" | "IM_SPACE_READ" | "IM_SPACE_WRITE" | "IM_ROLE_READ" | "IM_ROLE_WRITE";
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
    interface GeoLocationDTO {
        readonly lat: number;
        readonly lon: number;

    }
}
export declare namespace io.komune.registry.s2.commons.model {
    const RedirectableRoutes: {
        quotations(): string;
        projects(): string;
    };
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
export declare namespace cccev.dsl.model {
    class Code {
        constructor();
        toString(): string;
        
    }
}
export declare namespace cccev.dsl.model {
    interface DataUnitOptionDTO {
        readonly identifier: string;
        readonly name: string;
        readonly value: string;
        readonly order: number;
        readonly icon?: io.komune.fs.s2.file.domain.model.FilePathDTO;
        readonly color?: string;

    }
}
export declare namespace cccev.dsl.model {
    const DataUnitTypeValues: {
        boolean(): string;
        date(): string;
        number(): string;
        string(): string;
    };
}
export declare namespace cccev.dsl.model {
    interface EvidenceDTO {
        readonly identifier: string;
        readonly isConformantTo?: string[];
        readonly supportsValue?: string[];
        readonly supportsConcept?: string[];
        readonly supportsRequirement?: string[];
        readonly validityPeriod?: cccev.dsl.model.PeriodOfTime;
        readonly name: string;
        readonly file?: string;

    }
}
export declare namespace cccev.dsl.model {
    interface EvidenceTypeList {
        readonly description: string;
        readonly identifier: string;
        readonly name: string;
        readonly specifiesEvidenceType?: cccev.dsl.model.EvidenceType[];

    }
    interface EvidenceType {
        readonly identifier: string;
        readonly name: string;
        readonly supportConcept: cccev.dsl.model.InformationConceptDTO[];
        readonly evidenceTypeClassification?: cccev.dsl.model.Code;
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
        copy(duration?: string, endTime?: number, startTime?: number): cccev.dsl.model.PeriodOfTime;
        toString(): string;
        hashCode(): number;
        equals(other?: any): boolean;
        
    }
}
export declare namespace cccev.dsl.model {
    interface InformationConceptDTO {
        readonly id: string;
        readonly identifier: string;
        readonly name: string;
        readonly unit: cccev.dsl.model.DataUnitDTO;
        readonly type?: cccev.dsl.model.Code;
        readonly description?: string;
        readonly expressionOfExpectedValue?: string;
        readonly dependsOn?: string[];

    }
}
export declare namespace cccev.dsl.model {
    interface SupportedValueDTO {
        readonly identifier: string;
        readonly value?: string;
        readonly query?: string;
        readonly providesValueFor: string;

    }
}
export declare namespace cccev.dsl.model {
    interface DataUnitDTO {
        readonly identifier: string;
        readonly name: string;
        readonly description?: string;
        readonly notation?: string;
        readonly type: cccev.dsl.model.DataUnitType;
        readonly options?: cccev.dsl.model.DataUnitOption[];

    }
}
export declare namespace cccev.f2 {
    interface CccevFlatGraphDTO {
        readonly certifications: Record<string, cccev.f2.certification.model.CertificationFlatDTO>;
        readonly requirementCertifications: Record<string, cccev.f2.certification.model.RequirementCertificationFlatDTO>;
        readonly requirements: Record<string, cccev.f2.requirement.model.RequirementFlatDTO>;
        readonly concepts: Record<string, cccev.f2.concept.model.InformationConceptFlatDTO>;
        readonly evidenceListTypes: Record<string, cccev.f2.evidencetypelist.model.EvidenceTypeListFlatDTO>;
        readonly evidenceTypes: Record<string, cccev.f2.evidencetype.model.EvidenceTypeFlatDTO>;
        readonly units: Record<string, cccev.f2.unit.model.DataUnitFlatDTO>;
        readonly unitOptions: Record<string, cccev.dsl.model.DataUnitOptionDTO>;
        readonly supportedValues: Record<string, cccev.f2.certification.model.SupportedValueFlatDTO>;

    }
}
export declare namespace cccev.f2.certification.command {
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
export declare namespace cccev.f2.certification.command {
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
export declare namespace cccev.f2.certification.command {
    interface CertificationCreateCommandDTO {
        readonly id?: string;
        readonly requirementIdentifiers: string[];

    }
    interface CertificationCreatedEventDTO {
        readonly id: string;

    }
}
export declare namespace cccev.f2.certification.command {
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
export declare namespace cccev.f2.certification.command {
    interface CertificationRemoveRequirementsCommandDTO {
        readonly id: string;
        readonly requirementIds: string[];

    }
    interface CertificationRemovedRequirementsEventDTO {
        readonly id: string;
        readonly requirementIds: string[];

    }
}
export declare namespace cccev.f2.certification.model {
    interface CertificationFlatDTO {
        readonly id: string;
        readonly requirementCertificationIds: string[];

    }
}
export declare namespace cccev.f2.certification.model {
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
export declare namespace cccev.f2.certification.model {
    interface SupportedValueFlatDTO {
        readonly id: string;
        readonly identifier: string;
        readonly value?: string;
        readonly conceptIdentifier: string;

    }
}
export declare namespace cccev.f2.certification.query {
    interface CertificationGetQueryDTO {
        readonly id: string;

    }
    interface CertificationGetResultDTO {
        readonly certification?: cccev.f2.certification.model.CertificationFlatDTO;
        readonly graph: cccev.f2.CccevFlatGraphDTO;

    }
}
export declare namespace cccev.f2.concept.command {
    interface InformationConceptCreateCommandDTO {
        readonly identifier?: string;
        readonly name: string;
        readonly hasUnit: string;
        readonly description?: string;
        readonly expressionOfExpectedValue?: string;
        readonly dependsOn?: string[];

    }
    interface InformationConceptCreatedEventDTO {
        readonly id: string;

    }
}
export declare namespace cccev.f2.concept.command {
    interface InformationConceptUpdateCommandDTO {
        readonly id: string;
        readonly name: string;
        readonly description?: string;
        readonly expressionOfExpectedValue?: string;
        readonly dependsOn?: string[];

    }
    interface InformationConceptUpdatedEventDTO {
        readonly id: string;

    }
}
export declare namespace cccev.f2.concept.model {
    interface InformationConceptFlatDTO {
        readonly id: string;
        readonly identifier: string;
        readonly name: string;
        readonly unitIdentifier: string;
        readonly description?: string;
        readonly expressionOfExpectedValue?: string;
        readonly dependsOn?: string[];

    }
}
export declare namespace cccev.f2.concept.query {
    interface InformationConceptGetByIdentifierQueryDTO {
        readonly identifier: string;

    }
    interface InformationConceptGetByIdentifierResultDTO {
        readonly item?: cccev.f2.concept.model.InformationConceptFlatDTO;
        readonly graph: cccev.f2.CccevFlatGraphDTO;

    }
}
export declare namespace cccev.f2.concept.query {
    interface InformationConceptGetQueryDTO {
        readonly id: string;

    }
    interface InformationConceptGetResultDTO {
        readonly item?: cccev.f2.concept.model.InformationConceptFlatDTO;
        readonly graph: cccev.f2.CccevFlatGraphDTO;

    }
}
export declare namespace cccev.f2.evidencetype.command {
    interface EvidenceTypeCreateCommandDTO {
        readonly id?: string;
        readonly identifier?: string;
        readonly name: string;
        readonly conceptIdentifiers: string[];

    }
    interface EvidenceTypeCreatedEventDTO {
        readonly id: string;

    }
}
export declare namespace cccev.f2.evidencetype.model {
    interface EvidenceTypeFlatDTO {
        readonly id: string;
        readonly identifier: string;
        readonly name: string;
        readonly conceptIdentifiers: string[];

    }
}
export declare namespace cccev.f2.evidencetype.query {
    interface EvidenceTypeGetByIdentifierQueryDTO {
        readonly identifier: string;

    }
    interface EvidenceTypeGetByIdentifierResultDTO {
        readonly item?: cccev.f2.evidencetype.model.EvidenceTypeFlatDTO;
        readonly graph: cccev.f2.CccevFlatGraphDTO;

    }
}
export declare namespace cccev.f2.evidencetype.query {
    interface EvidenceTypeGetQueryDTO {
        readonly id: string;

    }
    interface EvidenceTypeGetResultDTO {
        readonly item?: cccev.f2.evidencetype.model.EvidenceTypeFlatDTO;
        readonly graph: cccev.f2.CccevFlatGraphDTO;

    }
}
export declare namespace cccev.f2.evidencetypelist.command {
    interface EvidenceTypeListCreateCommandDTO {
        readonly id?: string;
        readonly identifier?: string;
        readonly name: string;
        readonly description: string;
        readonly specifiesEvidenceType?: string[];

    }
    interface EvidenceTypeListCreatedEventDTO {
        readonly id: string;

    }
}
export declare namespace cccev.f2.evidencetypelist.model {
    interface EvidenceTypeListFlatDTO {
        readonly id: string;
        readonly identifier: string;
        readonly name: string;
        readonly description: string;
        readonly specifiesEvidenceType?: string[];

    }
}
export declare namespace cccev.f2.evidencetypelist.query {
    interface EvidenceTypeListGetByIdentifierQueryDTO {
        readonly identifier: string;

    }
    interface EvidenceTypeListGetByIdentifierResultDTO {
        readonly item?: cccev.f2.evidencetypelist.model.EvidenceTypeListFlatDTO;
        readonly graph: cccev.f2.CccevFlatGraphDTO;

    }
}
export declare namespace cccev.f2.evidencetypelist.query {
    interface EvidenceTypeListGetQueryDTO {
        readonly id: string;

    }
    interface EvidenceTypeListGetResultDTO {
        readonly item?: cccev.f2.evidencetypelist.model.EvidenceTypeListFlatDTO/* Nullable<cccev.f2.evidencetypelist.model.EvidenceTypeListFlat> */;
        readonly graph: cccev.f2.CccevFlatGraphDTO;

    }
}
export declare namespace cccev.f2.requirement.command {
    interface RequirementAddRequirementsCommandDTO {
        readonly id: string;
        readonly requirementIds: string[];

    }
    interface RequirementAddedRequirementsEventDTO {
        readonly id: string;
        readonly requirementIds: string[];

    }
}
export declare namespace cccev.f2.requirement.command {
    interface RequirementCreatedEventDTO {
        readonly id: string;

    }
}
export declare namespace cccev.f2.requirement.command {
    interface RequirementUpdateCommandDTO {
        readonly id: string;
        readonly name?: string;
        readonly description?: string;
        readonly type?: string;
        readonly conceptIds?: string[];
        readonly evidenceTypeIds?: string[];
        readonly subRequirementIds?: string[];
        readonly enablingCondition?: string;
        readonly enablingConditionDependencies?: string[];
        readonly required: boolean;
        readonly validatingCondition?: string;
        readonly validatingConditionDependencies?: string[];
        readonly evidenceValidatingCondition?: string;
        readonly order?: number;
        readonly properties?: Record<string, string>;

    }
    interface RequirementUpdatedEventDTO {
        readonly id: string;

    }
}
export declare namespace cccev.f2.requirement.model {
    interface RequirementFlatDTO {
        readonly id: string;
        readonly identifier: string;
        readonly kind: string;
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
        readonly evidenceValidatingCondition?: string;
        readonly validatingConditionDependencies: string[];
        readonly order?: number;
        readonly properties?: Record<string, string>;

    }
}
export declare namespace cccev.f2.requirement.query {
    interface RequirementGetByIdentifierQueryDTO {
        readonly identifier: string;

    }
    interface RequirementGetByIdentifierResultDTO {
        readonly item?: cccev.f2.requirement.model.RequirementFlatDTO;
        readonly graph: cccev.f2.CccevFlatGraphDTO;

    }
}
export declare namespace cccev.f2.requirement.query {
    interface RequirementGetQueryDTO {
        readonly id: string;

    }
    interface RequirementGetResultDTO {
        readonly item?: cccev.f2.requirement.model.RequirementFlatDTO;
        readonly graph: cccev.f2.CccevFlatGraphDTO;

    }
}
export declare namespace cccev.f2.unit.command {
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
export declare namespace cccev.f2.unit.model {
    interface DataUnitFlatDTO {
        readonly id: string;
        readonly identifier: string;
        readonly name: string;
        readonly description?: string;
        readonly notation?: string;
        readonly type: string;
        readonly optionIdentifiers?: string[];

    }
}
export declare namespace cccev.f2.unit.query {
    interface DataUnitGetByIdentifierQueryDTO {
        readonly identifier: string;

    }
    interface DataUnitGetByIdentifierResultDTO {
        readonly item?: cccev.f2.unit.model.DataUnitFlatDTO;
        readonly graph: cccev.f2.CccevFlatGraphDTO;

    }
}
export declare namespace cccev.f2.unit.query {
    interface DataUnitGetQueryDTO {
        readonly id: string;

    }
    interface DataUnitGetResultDTO {
        readonly item?: cccev.f2.unit.model.DataUnitFlatDTO;
        readonly graph: cccev.f2.CccevFlatGraphDTO;

    }
}
export declare namespace io.komune.registry.s2.asset.domain.automate {
    interface AssetPoolInitCommand extends s2.dsl.automate.S2InitCommand {

    }
    interface AssetPoolCommand extends s2.dsl.automate.S2Command<string> {
        readonly id: string;

    }
    interface AssetPoolEvent extends f2.dsl.cqrs.Event, s2.dsl.automate.WithId<string>, s2.dsl.automate.model.WithS2Id<string>/*, io.komune.registry.s2.commons.model.S2SourcingEvent<string> */ {
        s2Id(): string;
        readonly id: string;

    }
}
export declare namespace io.komune.registry.s2.asset.domain.automate {
    interface AssetTransactionInitCommand extends s2.dsl.automate.S2InitCommand {

    }
    interface AssetTransactionCommand extends s2.dsl.automate.S2Command<string> {
        readonly id: string;

    }
    interface AssetTransactionEvent extends f2.dsl.cqrs.Event, s2.dsl.automate.WithId<string>, s2.dsl.automate.model.WithS2Id<string>/*, io.komune.registry.s2.commons.model.S2SourcingEvent<string> */ {
        s2Id(): string;
        readonly id: string;

    }
}
export declare namespace io.komune.registry.s2.asset.domain.command.pool {
    interface AssetPoolCloseCommandDTO extends io.komune.registry.s2.asset.domain.automate.AssetPoolCommand {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.s2.asset.domain.command.pool {
    interface AssetPoolHoldCommandDTO extends io.komune.registry.s2.asset.domain.automate.AssetPoolCommand {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.s2.asset.domain.command.pool {
    interface AssetPoolResumeCommandDTO extends io.komune.registry.s2.asset.domain.automate.AssetPoolCommand {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.s2.asset.domain.model {
    interface AssetPoolStats {
        readonly available: number;
        readonly retired: number;
        readonly transferred: number;

    }
}
export declare namespace io.komune.registry.s2.project.domain.automate {
    interface ProjectInitCommand extends s2.dsl.automate.S2InitCommand {

    }
    interface ProjectCommand extends s2.dsl.automate.S2Command<string> {
        readonly id: string;

    }
    interface ProjectEvent extends f2.dsl.cqrs.Event, s2.dsl.automate.WithId<string>, s2.dsl.automate.model.WithS2Id<string>/*, io.komune.registry.s2.commons.model.S2SourcingEvent<string> */ {
        s2Id(): string;
        readonly id: string;

    }
}
export declare namespace io.komune.registry.s2.project.domain.command {
    interface ProjectAddAssetPoolCommandDTO extends io.komune.registry.s2.project.domain.automate.ProjectCommand {
        readonly id: string;

    }
    interface ProjectAddedAssetPoolEventDTO extends io.komune.registry.s2.project.domain.automate.ProjectEvent {
        readonly id: string;
        readonly poolId: string;
        s2Id(): string;

    }
}
export declare namespace io.komune.registry.s2.project.domain.command {
    interface ProjectChangePrivacyCommandDTO extends io.komune.registry.s2.project.domain.automate.ProjectCommand {
        readonly id: string;

    }
    interface ProjectChangedPrivacyEventDTO extends io.komune.registry.s2.project.domain.automate.ProjectEvent {
        readonly id: string;
        readonly isPrivate: boolean;
        s2Id(): string;

    }
}
export declare namespace io.komune.registry.s2.project.domain.command {
    interface ProjectCreateCommandDTO /* extends io.komune.registry.s2.project.domain.command.ProjectAbstractMsg */ {
        isPrivate: Nullable<boolean>;

    }
    interface ProjectCreatedEventDTO extends io.komune.registry.s2.project.domain.automate.ProjectEvent/*, io.komune.registry.s2.project.domain.command.ProjectAbstractMsg */ {
        readonly id: string;
        isPrivate: Nullable<boolean>;
        s2Id(): string;

    }
}
export declare namespace io.komune.registry.s2.project.domain.command {
    interface ProjectDeleteCommandDTO extends io.komune.registry.s2.project.domain.automate.ProjectCommand {
        readonly id: string;

    }
    interface ProjectDeletedEventDTO extends io.komune.registry.s2.project.domain.automate.ProjectEvent {
        readonly id: string;
        s2Id(): string;

    }
}
export declare namespace io.komune.registry.s2.project.domain.command {
    interface ProjectUpdateCommandDTO /* extends io.komune.registry.s2.project.domain.command.ProjectAbstractMsg */ {

    }
    interface ProjectUpdatedEventDTO extends io.komune.registry.s2.project.domain.automate.ProjectEvent/*, io.komune.registry.s2.project.domain.command.ProjectAbstractMsg */ {
        readonly id: string;
        s2Id(): string;

    }
}
export declare namespace io.komune.registry.s2.project.domain.model {
    interface OrganizationRefDTO {
        readonly id: string;
        readonly name: string;

    }
}
export declare namespace io.komune.registry.f2.activity.domain.command {
    interface ActivityCreateCommandDTO {
        readonly identifier: string;
        readonly name: string;
        readonly description?: string;
        readonly hasActivity?: Array<io.komune.registry.f2.activity.domain.command.ActivityCreateCommandDTO>;
        readonly hasStep?: Array<io.komune.registry.f2.activity.domain.command.ActivityStepCreateCommandDTO>;

    }
    interface ActivityCreatedEventDTO extends f2.dsl.cqrs.Event {
        readonly identifier: string;

    }
}
export declare namespace io.komune.registry.f2.activity.domain.command {
    interface ActivityStepCreateCommandDTO {
        readonly identifier: string;
        readonly name: string;
        readonly description?: string;
        readonly hasConcept?: cccev.dsl.model.InformationConceptDTO/* Nullable<cccev.dsl.model.InformationConcept> */;

    }
    interface ActivityStepCreatedEventDTO extends f2.dsl.cqrs.Event {
        readonly identifier: string;

    }
}
export declare namespace io.komune.registry.f2.activity.domain.command {
    interface ActivityStepFulfillCommandDTO {
        readonly certificationId: string;
        readonly identifier: string;
        readonly value?: string;

    }
    interface ActivityStepFulfilledEventDTO extends f2.dsl.cqrs.Event {
        readonly identifier: string;
        readonly value?: string;
        readonly file?: io.komune.fs.s2.file.domain.model.FilePathDTO;

    }
}
export declare namespace io.komune.registry.f2.activity.domain.command {
    interface ActivityStepEvidenceFulfillCommandDTO {
        readonly certificationId: string;
        readonly identifier: string;
        readonly url?: string;
        readonly isPublic?: boolean;

    }
    interface ActivityStepEvidenceFulfilledEventDTO extends f2.dsl.cqrs.Event {
        readonly identifier: string;
        readonly file?: io.komune.fs.s2.file.domain.model.FilePathDTO;

    }
}
export declare namespace io.komune.registry.f2.activity.domain.model {
    interface ActivityDTO {
        readonly identifier: string;
        readonly certificationId?: string;
        readonly name?: string;
        readonly type?: string;
        readonly description?: string;
        readonly hasQualifiedRelation: string[];
        readonly hasRequirement: io.komune.registry.f2.activity.domain.model.ActivityDTO[];
        readonly progression: number;

    }
}
export declare namespace io.komune.registry.f2.activity.domain.model {
    interface ActivityFileDTO {
        readonly name: string;
        readonly content: Int8Array;
        readonly metadata?: Record<string, string>;

    }
}
export declare namespace io.komune.registry.f2.activity.domain.model {
    interface ActivityStepDTO {
        readonly id: string;
        readonly identifier: string;
        readonly name?: string;
        readonly description?: string;
        readonly hasConcept?: cccev.dsl.model.InformationConceptDTO/* Nullable<cccev.dsl.model.InformationConcept> */;
        readonly value?: string;
        readonly evidences: cccev.dsl.model.EvidenceDTO[];
        readonly completed: boolean;

    }
}
export declare namespace io.komune.registry.f2.activity.domain.policy {
    const ActivityPolicies: {
        canPage(authedUser?: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        canPageSteps(authedUser?: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        canCreate(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        canCreateStep(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        canFulfillTask(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
    };
}
export declare namespace io.komune.registry.f2.activity.domain.query {
    interface ActivityPageQueryDTO {
        readonly projectId: string;
        readonly offset?: number;
        readonly limit?: number;

    }
    interface ActivityPageResultDTO extends f2.dsl.cqrs.page.PageDTO<io.komune.registry.f2.activity.domain.model.ActivityDTO> {
        readonly total: number;
        readonly items: io.komune.registry.f2.activity.domain.model.ActivityDTO[];

    }
}
export declare namespace io.komune.registry.f2.activity.domain.query {
    interface ActivityStepEvidenceDownloadQueryDTO {
        readonly certificationId: string;
        readonly evidenceId: string;

    }
}
export declare namespace io.komune.registry.f2.activity.domain.query {
    interface ActivityStepPageQueryDTO {
        readonly activityIdentifier: string;
        readonly certificationId: string;
        readonly offset?: number;
        readonly limit?: number;

    }
    interface ActivityStepPageResultDTO extends f2.dsl.cqrs.page.PageDTO<io.komune.registry.f2.activity.domain.model.ActivityStepDTO> {
        readonly total: number;
        readonly items: io.komune.registry.f2.activity.domain.model.ActivityStepDTO[];

    }
}
export declare namespace io.komune.registry.f2.dcs.domain.command {
    interface DataCollectionStepDefineCommandDTO {
        readonly identifier: string;
        readonly label: string;
        readonly description?: string;
        readonly sections: io.komune.registry.f2.dcs.domain.model.DataSectionDTO[];
        readonly properties?: Record<string, string>;

    }
    interface DataCollectionStepDefinedEventDTO {
        readonly identifier: string;

    }
}
export declare namespace io.komune.registry.f2.dcs.domain.command {
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
export declare namespace io.komune.registry.f2.dcs.domain.model {
    interface DataCollectionStepDTO {
        readonly identifier: string;
        readonly label: string;
        readonly description?: string;
        readonly sections: io.komune.registry.f2.dcs.domain.model.DataSectionDTO[];
        readonly properties?: Record<string, string>;

    }
}
export declare namespace io.komune.registry.f2.dcs.domain.model {
    interface DataConditionDTO {
        readonly identifier: string;
        readonly type: string;
        readonly expression: string;
        readonly dependencies?: string[];
        readonly error?: string;

    }
}
export declare namespace io.komune.registry.f2.dcs.domain.model {
    const DataConditionTypeValues: {
        display(): string;
        validator(): string;
        get all(): kotlin.collections.Set<string>;
    };
}
export declare namespace io.komune.registry.f2.dcs.domain.model {
    interface DataFieldDTO {
        readonly name: string;
        readonly label: string;
        readonly type: string;
        readonly dataType: string;
        readonly required: boolean;
        readonly options?: io.komune.registry.f2.dcs.domain.model.DataFieldOptionDTO[];
        readonly conditions?: io.komune.registry.f2.dcs.domain.model.DataConditionDTO[];
        readonly properties?: Record<string, string>;

    }
}
export declare namespace io.komune.registry.f2.dcs.domain.model {
    interface DataFieldOptionDTO {
        readonly key: string;
        readonly label: string;
        readonly icon?: io.komune.fs.s2.file.domain.model.FilePathDTO;
        readonly color?: string;

    }
}
export declare namespace io.komune.registry.f2.dcs.domain.model {
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
export declare namespace io.komune.registry.f2.dcs.domain.model {
    interface DataSectionDTO {
        readonly identifier: string;
        readonly label?: string;
        readonly description?: string;
        readonly fields: io.komune.registry.f2.dcs.domain.model.DataFieldDTO[];
        readonly properties?: Record<string, string>;

    }
}
export declare namespace io.komune.registry.f2.dcs.domain.model {
    interface SectionConditionDTO {
        readonly identifier: string;
        readonly type: string;
        readonly expression: string;
        readonly dependencies: string[];
        readonly message?: string;

    }
}
export declare namespace io.komune.registry.f2.dcs.domain.model {
    const SectionConditionTypeValues: {
        error(): string;
        warning(): string;
        info(): string;
    };
}
export declare namespace io.komune.registry.f2.dcs.domain.query {
    interface DataCollectionStepGetQueryDTO {
        readonly identifier: string;
        readonly certificationId?: string;

    }
    interface DataCollectionStepGetResultDTO {
        readonly structure: io.komune.registry.f2.dcs.domain.model.DataCollectionStepDTO;
        readonly values: Record<string, Nullable<string>>;

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
    interface StructureDto {
        readonly type: string;
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
        readonly structure?: io.komune.registry.s2.structure.domain.model.StructureDto/* Nullable<io.komune.registry.s2.structure.domain.model.Structure> */;
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
export declare namespace io.komune.registry.f2.dataset.domain.command {
    interface DatasetAddJsonDistributionCommandDTO {
        readonly id: string;
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
        readonly mediaType: string;

    }
    interface DatasetAddedMediaDistributionEventDTO {
        readonly id: string;
        readonly distributionId: string;

    }
}
export declare namespace io.komune.registry.f2.dataset.domain.command {
    interface DatasetCreateCommandDTO {
        readonly identifier: string;
        readonly title: string;
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
    interface DatasetSetImageCommandDTO {
        readonly id: string;

    }
    interface DatasetSetImageEventDTO {
        readonly id: string;
        readonly img?: io.komune.fs.s2.file.domain.model.FilePathDTO/* Nullable<io.komune.fs.s2.file.domain.model.FilePath> */;

    }
}
export declare namespace io.komune.registry.f2.dataset.domain.command {
    interface DatasetUpdateJsonDistributionCommandDTO {
        readonly id: string;
        readonly distributionId: string;
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
        readonly mediaType: string;

    }
    interface DatasetUpdatedMediaDistributionEventDTO {
        readonly id: string;
        readonly distributionId: string;

    }
}
export declare namespace io.komune.registry.f2.dataset.domain.dto {
    interface DatasetDTO {
        readonly id: string;
        readonly identifier: string;
        readonly type: string;
        readonly temporalResolution?: string;
        readonly wasGeneratedBy?: io.komune.registry.dsl.dcat.domain.model.Activity;
        readonly accessRights?: string;
        readonly conformsTo?: io.komune.registry.dsl.skos.domain.model.SkosConceptScheme[];
        readonly creator?: io.komune.registry.dsl.dcat.domain.model.Agent;
        readonly description?: string;
        readonly title: string;
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
        readonly datasets?: io.komune.registry.f2.dataset.domain.dto.DatasetRefDTOBase[];
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

    }
    interface DatasetRefDTO {
        readonly id: string;
        readonly identifier: string;
        readonly title: string;
        readonly type: string;
        readonly description?: string;
        readonly homepage?: string;
        readonly img?: string;
        readonly display?: string;
        readonly themes?: io.komune.registry.dsl.skos.domain.model.SkosConceptDTO[];
        readonly status?: io.komune.registry.s2.dataset.domain.automate.DatasetState;

    }
}
export declare namespace io.komune.registry.f2.dataset.domain.dto {
    interface DistributionDTO {
        readonly id: string;
        readonly downloadPath: io.komune.fs.s2.file.domain.model.FilePathDTO/* io.komune.fs.s2.file.domain.model.FilePath */;
        readonly mediaType: string;
        readonly issued: number;
        readonly modified: number;

    }
}
export declare namespace io.komune.registry.f2.dataset.domain.policy {
    const DatasetPolicies: {
        canPage(authedUser?: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        canPageSteps(authedUser?: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        canCreate(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        canSetImg(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        canDelete(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        checkLinkDatasets(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        checkLinkThemes(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        canFulfillTask(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        canUpdateDistributions(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
    };
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
export declare namespace io.komune.registry.f2.dataset.domain.query {
    interface DatasetRefListQueryDTO {

    }
    interface DatasetRefListResultDTO {
        readonly items: io.komune.registry.f2.dataset.domain.dto.DatasetRefDTO[];
        readonly total: number;

    }
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
export declare namespace io.komune.registry.f2.catalogue.domain.command {
    interface CatalogueCreateCommandDTO {
        readonly identifier?: string;
        readonly parentId?: string;
        readonly title: string;
        readonly description?: string;
        readonly type: string;
        readonly language: string;
        readonly structure?: io.komune.registry.s2.structure.domain.model.StructureDto/* Nullable<io.komune.registry.s2.structure.domain.model.Structure> */;
        readonly homepage?: string;
        readonly themes?: string[];
        readonly catalogues?: string[];
        readonly creator?: io.komune.registry.dsl.dcat.domain.model.Agent;
        readonly publisher?: io.komune.registry.dsl.dcat.domain.model.Agent;
        readonly validator?: io.komune.registry.dsl.dcat.domain.model.Agent;
        readonly accessRights?: string;
        readonly license?: string;
        readonly hidden?: boolean;

    }
    interface CatalogueCreatedEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;
        readonly identifier: string;

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
    interface CatalogueLinkCataloguesCommandDTO {
        readonly id: string;
        readonly catalogues: string[];

    }
    interface CatalogueLinkCataloguesEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.command {
    interface CatalogueLinkDatasetsCommandDTO {
        readonly id: string;
        readonly datasetIds: string[];

    }
    interface CatalogueLinkDatasetsEventDTO extends f2.dsl.cqrs.Event {
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
    interface CatalogueUpdateCommandDTO {
        readonly id: string;
        readonly title: string;
        readonly description?: string;
        readonly language: string;
        readonly structure?: io.komune.registry.s2.structure.domain.model.StructureDto/* Nullable<io.komune.registry.s2.structure.domain.model.Structure> */;
        readonly homepage?: string;
        readonly themes?: string[];
        readonly creator?: io.komune.registry.dsl.dcat.domain.model.Agent;
        readonly publisher?: io.komune.registry.dsl.dcat.domain.model.Agent;
        readonly validator?: io.komune.registry.dsl.dcat.domain.model.Agent;
        readonly accessRights?: string;
        readonly license?: string;
        readonly hidden?: boolean;

    }
    interface CatalogueUpdatedEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.dto {
    interface CatalogueDTO {
        readonly id: string;
        readonly identifier: string;
        readonly parentId?: string;
        readonly description?: string;
        readonly homepage?: string;
        readonly title: string;
        readonly language: string;
        readonly availableLanguages: string[];
        readonly img?: string;
        readonly type: string;
        readonly structure?: io.komune.registry.s2.structure.domain.model.StructureDto;
        readonly themes?: io.komune.registry.f2.concept.domain.model.ConceptTranslatedDTO[];
        readonly datasets?: io.komune.registry.f2.dataset.domain.dto.DatasetDTO[];
        readonly catalogues?: io.komune.registry.f2.catalogue.domain.dto.CatalogueRefDTO[];
        readonly status: io.komune.registry.s2.catalogue.domain.automate.CatalogueState;
        readonly creator?: io.komune.registry.dsl.dcat.domain.model.Agent;
        readonly publisher?: io.komune.registry.dsl.dcat.domain.model.Agent;
        readonly validator?: io.komune.registry.dsl.dcat.domain.model.Agent;
        readonly accessRights?: string;
        readonly license?: io.komune.registry.f2.license.domain.model.LicenseDTO;
        readonly issued?: number;
        readonly modified?: number;
        readonly hidden: boolean;

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.dto {
    interface CatalogueRefDTO {
        readonly id: string;
        readonly identifier: string;
        readonly title: string;
        readonly language: string;
        readonly availableLanguages: string[];
        readonly type: string;
        readonly description?: string;
        readonly img?: string;

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
        readonly catalogues?: io.komune.registry.f2.catalogue.domain.dto.CatalogueRefTreeDTO[];

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.policy {
    const CataloguePolicies: {
        canPage(authedUser?: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        canPageSteps(authedUser?: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        canCreate(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        canUpdate(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        canSetImg(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        canDelete(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        checkLinkCatalogues(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        checkLinkThemes(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        checkLinkDatasets(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
    };
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
    interface CatalogueGetQueryDTO {
        readonly id: string;
        readonly language?: string;

    }
    interface CatalogueGetResultDTO {
        readonly item?: io.komune.registry.f2.catalogue.domain.dto.CatalogueDTO;

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
        readonly parentIdentifier?: string;
        readonly title?: string;
        readonly status?: string;
        readonly language: string;
        readonly type?: string[];
        readonly offset?: number;
        readonly limit?: number;

    }
    interface CataloguePageResultDTO extends f2.dsl.cqrs.page.PageDTO<io.komune.registry.f2.catalogue.domain.dto.CatalogueDTO> {
        readonly total: number;
        readonly items: io.komune.registry.f2.catalogue.domain.dto.CatalogueDTO[];

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
    interface CatalogueRefListQueryDTO {
        readonly language: string;

    }
    interface CatalogueRefListResultDTO {
        readonly items: io.komune.registry.f2.catalogue.domain.dto.CatalogueRefDTO[];
        readonly total: number;

    }
}
export declare namespace io.komune.registry.f2.catalogue.domain.query {
    interface CatalogueSearchQueryDTO {
        readonly offset?: number;
        readonly limit?: number;
        readonly language: string;
        readonly query?: string;
        readonly accessRights?: string[];
        readonly catalogueIds?: string[];
        readonly parentIdentifier?: string[];
        readonly type?: string[];
        readonly themeIds?: string[];
        readonly licenseId?: string[];

    }
    interface CatalogueSearchResultDTO extends f2.dsl.cqrs.page.PageDTO<io.komune.registry.f2.catalogue.domain.dto.CatalogueDTO>/*, io.komune.registry.s2.catalogue.domain.model.FacetPageDTO<io.komune.registry.f2.catalogue.domain.dto.CatalogueDTO> */ {
        readonly total: number;
        readonly items: io.komune.registry.f2.catalogue.domain.dto.CatalogueDTO[];

    }
}
export declare namespace io.komune.registry.f2.user.domain.command {
    interface UserOnboardCommandDTO {
        readonly email: string;
        readonly password: string;
        readonly givenName: string;
        readonly familyName: string;
        readonly organizationName: string;
        readonly joinReason: string;
        readonly acceptTermsOfUse: boolean;
        readonly acceptChart100M: boolean;
        readonly acceptNewsletter: boolean;

    }
    interface UserOnboardedEventDTO {
        readonly id: string;
        readonly organizationId: string;

    }
}
export declare namespace io.komune.registry.s2.order.domain {
    interface OrderInitCommand extends s2.dsl.automate.S2InitCommand {

    }
    interface OrderCommand extends s2.dsl.automate.S2Command<string> {
        readonly id: string;

    }
    interface OrderEvent extends f2.dsl.cqrs.Event, s2.dsl.automate.WithId<string>, s2.dsl.automate.model.WithS2Id<string>/*, io.komune.registry.s2.commons.model.S2SourcingEvent<string> */ {
        s2Id(): string;
        readonly id: string;

    }
}
export declare namespace io.komune.registry.s2.order.domain.command {
    interface OrderPlaceCommandDTO extends io.komune.registry.s2.order.domain.OrderInitCommand {
        readonly from?: string;
        readonly to?: string;
        readonly by: string;
        readonly poolId?: string;
        readonly quantity: number;
        readonly type: io.komune.registry.s2.asset.domain.model.AssetTransactionType;

    }
}
export declare namespace io.komune.registry.s2.order.domain.command {
    interface OrderSubmitCommandDTO extends io.komune.registry.s2.order.domain.OrderCommand {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.s2.order.domain.command {
    interface OrderUpdateCommandDTO extends io.komune.registry.s2.order.domain.OrderCommand {
        readonly id: string;
        readonly poolId?: string;
        readonly quantity: number;

    }
}
export declare namespace io.komune.registry.f2.asset.order.domain.command {
    interface AssetOrderCancelCommandDTO {
        readonly id: string;

    }
    interface AssetOrderCanceledEventDTO {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.f2.asset.order.domain.command {
    interface AssetOrderCompleteCommandDTO {
        readonly id: string;

    }
    interface AssetOrderCompletedEventDTO {
        readonly id: string;
        readonly transactionId: string;

    }
}
export declare namespace io.komune.registry.f2.asset.order.domain.command {
    interface AssetOrderDeleteCommandDTO {
        readonly id: string;

    }
    interface AssetOrderDeletedEventDTO {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.f2.asset.order.domain.command {
    interface AssetOrderPlaceCommandDTO extends io.komune.registry.s2.order.domain.command.OrderPlaceCommandDTO {
        readonly from?: string;
        readonly to?: string;
        readonly by: string;
        readonly poolId?: string;
        readonly quantity: number;
        readonly type: io.komune.registry.s2.asset.domain.model.AssetTransactionType;

    }
    interface AssetOrderPlacedEventDTO {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.f2.asset.order.domain.command {
    interface AssetOrderSubmitCommandDTO extends io.komune.registry.s2.order.domain.command.OrderSubmitCommandDTO {
        readonly id: string;

    }
    interface AssetOrderSubmittedEventDTO {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.f2.asset.order.domain.command {
    interface AssetOrderUpdateCommandDTO extends io.komune.registry.s2.order.domain.command.OrderUpdateCommandDTO {
        readonly id: string;
        readonly poolId?: string;
        readonly quantity: number;

    }
    interface AssetOrderUpdatedEventDTO {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.f2.asset.order.domain.model {
    interface OrderDTO extends s2.dsl.automate.model.WithS2State<s2.dsl.automate.S2State/* io.komune.registry.s2.asset.domain.automate.AssetTransactionState */> {
        readonly id: string;
        readonly status: string;
        readonly poolId?: string;
        readonly from?: string;
        readonly to?: string;
        readonly by: string;
        readonly quantity: number;
        readonly type: string;
        readonly creationDate: number;
        readonly certificate?: io.komune.fs.s2.file.domain.model.FilePathDTO;
        readonly cancelReason?: string;
        s2State(): s2.dsl.automate.S2State/* io.komune.registry.s2.asset.domain.automate.AssetTransactionState */;

    }
}
export declare namespace io.komune.registry.f2.asset.order.domain.query {
    interface AssetOrderGetQueryDTO {
        readonly id: string;

    }
    interface AssetOrderGetResultDTO {
        readonly item?: io.komune.registry.f2.asset.order.domain.model.OrderDTO;

    }
}
export declare namespace io.komune.registry.f2.asset.order.domain.query {
    interface AssetOrderPageQueryDTO {
        readonly limit?: number;
        readonly offset?: number;
        readonly status?: string;
        readonly from?: string;
        readonly to?: string;
        readonly by?: string;
        readonly type?: string;
        readonly poolId?: string;

    }
    interface AssetOrderPageResultDTO extends f2.dsl.cqrs.page.PageQueryResultDTO<io.komune.registry.f2.asset.order.domain.model.OrderDTO> {
        readonly total: number;
        readonly items: io.komune.registry.f2.asset.order.domain.model.OrderDTO[];
        readonly pagination?: f2.dsl.cqrs.page.OffsetPaginationDTO;

    }
}
export declare namespace io.komune.registry.f2.asset.order.domain.utils {
    const AssetPolicies: {
        canGetOrder(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        canListOrder(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        canPlaceOrder(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        canSubmitOrder(authedUser: io.komune.im.commons.auth.AuthedUserDTO, order: io.komune.registry.f2.asset.order.domain.model.OrderDTO): boolean;
        canUpdateOrder(authedUser: io.komune.im.commons.auth.AuthedUserDTO, order: io.komune.registry.f2.asset.order.domain.model.OrderDTO): boolean;
        canCompleteOrder(authedUser: io.komune.im.commons.auth.AuthedUserDTO, order: io.komune.registry.f2.asset.order.domain.model.OrderDTO): boolean;
        canCancelOrder(authedUser: io.komune.im.commons.auth.AuthedUserDTO, order: io.komune.registry.f2.asset.order.domain.model.OrderDTO): boolean;
        canDeleteOrder(authedUser: io.komune.im.commons.auth.AuthedUserDTO, order: io.komune.registry.f2.asset.order.domain.model.OrderDTO): boolean;
    };
}
export declare namespace io.komune.registry.f2.asset.order.domain.utils {
    const OrderStatusValues: {
        draft(): string;
        submitted(): string;
        pending(): string;
        completed(): string;
        cancelled(): string;
        deleted(): string;
    };
}
export declare namespace io.komune.registry.f2.asset.pool.domain.command {
    interface AssetIssueCommandDTO /* extends io.komune.registry.f2.asset.pool.domain.command.AbstractAssetTransactionCommand */ {

    }
    interface AssetIssuedEventDTO {
        readonly id: string;
        readonly transactionId: string;

    }
}
export declare namespace io.komune.registry.f2.asset.pool.domain.command {
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
export declare namespace io.komune.registry.f2.asset.pool.domain.command {
    interface AssetPoolCloseCommandDTO extends io.komune.registry.s2.asset.domain.command.pool.AssetPoolCloseCommandDTO {
        readonly id: string;

    }
    interface AssetPoolClosedEventDTO {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.f2.asset.pool.domain.command {
    interface AssetPoolCreateCommandDTO {
        readonly vintage: string;
        readonly indicator: cccev.dsl.model.InformationConceptDTO/* cccev.dsl.model.InformationConcept */;
        readonly granularity: number;

    }
    interface AssetPoolCreatedEventDTO {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.f2.asset.pool.domain.command {
    interface AssetPoolHoldCommandDTO extends io.komune.registry.s2.asset.domain.command.pool.AssetPoolHoldCommandDTO {
        readonly id: string;

    }
    interface AssetPoolHeldEventDTO {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.f2.asset.pool.domain.command {
    interface AssetPoolResumeCommandDTO extends io.komune.registry.s2.asset.domain.command.pool.AssetPoolResumeCommandDTO {
        readonly id: string;

    }
    interface AssetPoolResumedEventDTO {
        readonly id: string;

    }
}
export declare namespace io.komune.registry.f2.asset.pool.domain.command {
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
export declare namespace io.komune.registry.f2.asset.pool.domain.command {
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
export declare namespace io.komune.registry.f2.asset.pool.domain.model {
    interface AssetPoolDTO extends s2.dsl.automate.model.WithS2State<s2.dsl.automate.S2State/* io.komune.registry.s2.asset.domain.automate.AssetPoolState */> {
        readonly id: string;
        readonly status: string;
        readonly vintage?: string;
        readonly indicator: cccev.dsl.model.InformationConceptDTO/* cccev.dsl.model.InformationConcept */;
        readonly granularity: number;
        readonly wallets: Record<string, number>;
        readonly stats: io.komune.registry.s2.asset.domain.model.AssetPoolStats;
        readonly metadata: Record<string, Nullable<string>>;
        s2State(): s2.dsl.automate.S2State/* io.komune.registry.s2.asset.domain.automate.AssetPoolState */;

    }
}
export declare namespace io.komune.registry.f2.asset.pool.domain.model {
    interface AssetTransactionDTO extends s2.dsl.automate.model.WithS2State<s2.dsl.automate.S2State/* io.komune.registry.s2.asset.domain.automate.AssetTransactionState */> {
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
        readonly file?: io.komune.fs.s2.file.domain.model.FilePathDTO;
        readonly status: string;
        s2State(): s2.dsl.automate.S2State/* io.komune.registry.s2.asset.domain.automate.AssetTransactionState */;

    }
}
export declare namespace io.komune.registry.f2.asset.pool.domain.query {
    interface AssetCertificateDownloadQueryDTO {
        readonly transactionId: string;

    }
}
export declare namespace io.komune.registry.f2.asset.pool.domain.query {
    interface AssetStatsGetQueryDTO {
        readonly projectId: string;

    }
    interface AssetStatsGetResultDTO {
        readonly available: number;
        readonly retired: number;
        readonly transferred: number;

    }
}
export declare namespace io.komune.registry.f2.asset.pool.domain.query {
    interface AssetPoolGetQueryDTO {
        readonly id: string;

    }
    interface AssetPoolGetResultDTO {
        readonly item?: io.komune.registry.f2.asset.pool.domain.model.AssetPoolDTO;

    }
}
export declare namespace io.komune.registry.f2.asset.pool.domain.query {
    interface AssetPoolPageQueryDTO {
        readonly limit?: number;
        readonly offset?: number;
        readonly status?: string;
        readonly vintage?: string;

    }
    interface AssetPoolPageResultDTO extends f2.dsl.cqrs.page.PageQueryResultDTO<io.komune.registry.f2.asset.pool.domain.model.AssetPoolDTO> {
        readonly total: number;
        readonly items: io.komune.registry.f2.asset.pool.domain.model.AssetPoolDTO[];
        readonly pagination?: f2.dsl.cqrs.page.OffsetPaginationDTO;

    }
}
export declare namespace io.komune.registry.f2.asset.pool.domain.query {
    interface AssetTransactionGetQueryDTO {
        readonly transactionId: string;

    }
    interface AssetTransactionGetResultDTO {
        readonly item?: io.komune.registry.f2.asset.pool.domain.model.AssetTransactionDTO;

    }
}
export declare namespace io.komune.registry.f2.asset.pool.domain.query {
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
    interface AssetTransactionPageResultDTO extends f2.dsl.cqrs.page.PageDTO<io.komune.registry.f2.asset.pool.domain.model.AssetTransactionDTO> {
        readonly total: number;
        readonly items: io.komune.registry.f2.asset.pool.domain.model.AssetTransactionDTO[];

    }
}
export declare namespace io.komune.registry.f2.asset.pool.domain.utils {
    const AssetPoolPolicies: {
        canList(authedUser?: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        canCreate(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        canHold(authedUser: io.komune.im.commons.auth.AuthedUserDTO, assetPool: io.komune.registry.f2.asset.pool.domain.model.AssetPoolDTO): boolean;
        canResume(authedUser: io.komune.im.commons.auth.AuthedUserDTO, assetPool: io.komune.registry.f2.asset.pool.domain.model.AssetPoolDTO): boolean;
        canClose(authedUser: io.komune.im.commons.auth.AuthedUserDTO, assetPool: io.komune.registry.f2.asset.pool.domain.model.AssetPoolDTO): boolean;
        canIssue(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        canTransfer(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        canOffset(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        canRetire(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        canEmitTransactionForOther(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
    };
}
export declare namespace io.komune.registry.f2.asset.pool.domain.utils {
    const AssetPoolStatusValues: {
        active(): string;
        onHold(): string;
        closed(): string;
    };
}
export declare namespace io.komune.registry.f2.asset.pool.domain.utils {
    const TransactionStatusValues: {
        emitted(): string;
        cancelled(): string;
    };
}
export declare namespace io.komune.registry.f2.asset.pool.domain.utils {
    const TransactionTypeValues: {
        issued(): string;
        transferred(): string;
        retired(): string;
        offset(): string;
    };
}
export declare namespace io.komune.registry.f2.chat.domain.model {
    interface ChatMessageDTO {
        readonly content: string;
        readonly type: string;

    }
}
export declare namespace io.komune.registry.f2.chat.domain.model {
    interface ChatMetadataDTO {
        readonly targetedFiles: string[];

    }
}
export declare namespace io.komune.registry.f2.chat.domain.query {
    interface ChatAskQuestionQueryDTO {
        readonly question: string;
        readonly history: io.komune.registry.f2.chat.domain.model.ChatMessageDTO[];
        readonly metadata: io.komune.registry.f2.chat.domain.model.ChatMetadataDTO;
        readonly projectId?: string;

    }
    interface ChatAskQuestionResultDTO {
        readonly item: string;

    }
}
export declare namespace io.komune.registry.f2.project.domain.command {
    interface ProjectAddAssetPoolCommandDTO extends io.komune.registry.s2.project.domain.command.ProjectAddAssetPoolCommandDTO {
        readonly id: string;

    }
    interface ProjectAddedAssetPoolEventDTO extends io.komune.registry.s2.project.domain.command.ProjectAddedAssetPoolEventDTO {
        readonly id: string;
        readonly date: number;
        readonly poolId: string;
        s2Id(): string;

    }
}
export declare namespace io.komune.registry.f2.project.domain.command {
    interface ProjectChangePrivacyCommandDTO extends io.komune.registry.s2.project.domain.command.ProjectChangePrivacyCommandDTO {
        readonly id: string;

    }
    interface ProjectChangedPrivacyEventDTO extends io.komune.registry.s2.project.domain.command.ProjectChangedPrivacyEventDTO {
        readonly id: string;
        readonly date: number;
        readonly isPrivate: boolean;
        s2Id(): string;

    }
}
export declare namespace io.komune.registry.f2.project.domain.command {
    interface ProjectCreateCommandDTO extends io.komune.registry.s2.project.domain.command.ProjectCreateCommandDTO {
        isPrivate: Nullable<boolean>;

    }
    interface ProjectCreatedEventDTO extends io.komune.registry.s2.project.domain.command.ProjectCreatedEventDTO {
        readonly id: string;
        isPrivate: Nullable<boolean>;
        s2Id(): string;

    }
}
export declare namespace io.komune.registry.f2.project.domain.command {
    interface ProjectDeleteCommandDTO extends io.komune.registry.s2.project.domain.command.ProjectDeleteCommandDTO {
        readonly id: string;

    }
    interface ProjectDeletedEventDTO extends io.komune.registry.s2.project.domain.command.ProjectDeletedEventDTO {
        readonly id: string;
        s2Id(): string;

    }
}
export declare namespace io.komune.registry.f2.project.domain.command {
    interface ProjectUpdateCommandDTO extends io.komune.registry.s2.project.domain.command.ProjectUpdateCommandDTO {

    }
    interface ProjectUpdatedEventDTO extends io.komune.registry.s2.project.domain.command.ProjectUpdatedEventDTO {
        readonly id: string;
        s2Id(): string;

    }
}
export declare namespace io.komune.registry.f2.project.domain.model {
    interface ProjectDTO extends s2.dsl.automate.model.WithS2State<s2.dsl.automate.S2State/* io.komune.registry.s2.project.domain.automate.ProjectState */>, s2.dsl.automate.model.WithS2Id<string> {
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
        readonly proponent?: io.komune.registry.s2.project.domain.model.OrganizationRefDTO/* Nullable<io.komune.registry.s2.project.domain.model.OrganizationRef> */;
        readonly type?: number;
        readonly referenceYear?: string;
        readonly registrationDate?: number;
        readonly vintage: string[];
        readonly slug?: string;
        readonly vvb?: io.komune.registry.s2.project.domain.model.OrganizationRefDTO/* Nullable<io.komune.registry.s2.project.domain.model.OrganizationRef> */;
        readonly assessor?: io.komune.registry.s2.project.domain.model.OrganizationRefDTO/* Nullable<io.komune.registry.s2.project.domain.model.OrganizationRef> */;
        readonly location?: io.komune.registry.s2.commons.model.GeoLocationDTO;
        readonly activities?: string[];
        readonly certificationId?: string;
        readonly status: s2.dsl.automate.S2State/* io.komune.registry.s2.project.domain.automate.ProjectState */;
        readonly creationDate: number;
        readonly lastModificationDate: number;
        readonly sdgs?: number[];
        readonly assetPools: string[];
        readonly isPrivate: boolean;
        s2State(): s2.dsl.automate.S2State/* io.komune.registry.s2.project.domain.automate.ProjectState */;
        s2Id(): string;

    }
}
export declare namespace io.komune.registry.f2.project.domain.query {
    interface ProjectDownloadFileQueryDTO {
        readonly id: string;
        readonly path: io.komune.fs.s2.file.domain.model.FilePathDTO;

    }
}
export declare namespace io.komune.registry.f2.project.domain.query {
    interface ProjectGetByIdentifierQueryDTO {
        readonly identifier: string;

    }
    interface ProjectGetByIdentifierResultDTO {
        readonly item?: io.komune.registry.f2.project.domain.model.ProjectDTO;

    }
}
export declare namespace io.komune.registry.f2.project.domain.query {
    interface ProjectGetQueryDTO {
        readonly id: string;

    }
    interface ProjectGetResultDTO {
        readonly item?: io.komune.registry.f2.project.domain.model.ProjectDTO;

    }
}
export declare namespace io.komune.registry.f2.project.domain.query {
    interface ProjectListFilesQueryDTO {
        readonly id: string;

    }
    interface ProjectListFilesResultDTO {
        readonly items: io.komune.fs.s2.file.domain.model.FilePathDTO[];

    }
}
export declare namespace io.komune.registry.f2.project.domain.query {
    interface ProjectPageQueryDTO {
        readonly limit?: number;
        readonly offset?: number;
        readonly identifier?: string;
        readonly name?: string;
        readonly proponent?: string;
        readonly type?: number;
        readonly estimatedReductions?: string;
        readonly referenceYear?: string;
        readonly vintage?: string;
        readonly origin?: string;
        readonly dueDate?: number;
        readonly status?: string;

    }
    interface ProjectPageResultDTO extends f2.dsl.cqrs.page.PageQueryResultDTO<io.komune.registry.f2.project.domain.model.ProjectDTO> {
        readonly total: number;
        readonly items: io.komune.registry.f2.project.domain.model.ProjectDTO[];
        readonly pagination?: f2.dsl.cqrs.page.OffsetPaginationDTO;

    }
}
export declare namespace io.komune.registry.f2.project.domain.utils {
    const ProjectPolicies: {
        canGet(authedUser?: io.komune.im.commons.auth.AuthedUserDTO, project: io.komune.registry.f2.project.domain.model.ProjectDTO): boolean;
        canList(authedUser?: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        privateOrganizationId(authedUser?: io.komune.im.commons.auth.AuthedUserDTO): Nullable<string>;
        canCreate(authedUser: io.komune.im.commons.auth.AuthedUserDTO): boolean;
        canUpdate(authedUser: io.komune.im.commons.auth.AuthedUserDTO, project: io.komune.registry.f2.project.domain.model.ProjectDTO): boolean;
        canDelete(authedUser: io.komune.im.commons.auth.AuthedUserDTO, project: io.komune.registry.f2.project.domain.model.ProjectDTO): boolean;
    };
}
export declare interface EnableModuleExport {

}
export as namespace io_komune_registry_api_js_export;