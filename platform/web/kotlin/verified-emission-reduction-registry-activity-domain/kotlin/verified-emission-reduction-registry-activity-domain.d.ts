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
        readonly id?: String;
        readonly timestamp: String;
        readonly code: number;
        readonly requestId?: String;
        readonly message: String;

    }
    class F2Error implements f2.dsl.cqrs.error.F2ErrorDTO {
        constructor(message: String, id?: String, timestamp?: String, code?: number, requestId?: String);
        get message(): String;
        get id(): Nullable<String>;
        get timestamp(): String;
        get code(): number;
        get requestId(): Nullable<String>;
        toString(): String;
        static F2Error_init_$Create$(seen1: number, message?: String, id?: String, timestamp?: String, code: number, requestId?: String, serializationConstructorMarker?: kotlinx.serialization.internal.SerializationConstructorMarker): f2.dsl.cqrs.error.F2Error;
        
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
        readonly property: String;
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
        static Page_init_$Create$<OBJECT>(seen1: number, total: number, items?: OBJECT>, serializationConstructorMarker?: kotlinx.serialization.internal.SerializationConstructorMarker): f2.dsl.cqrs.page.Page<OBJECT[];
        
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
        static PageQueryResult_init_$Create$<OBJECT>(seen1: number, pagination?: f2.dsl.cqrs.page.OffsetPagination, total: number, items?: OBJECT>, serializationConstructorMarker?: kotlinx.serialization.internal.SerializationConstructorMarker): f2.dsl.cqrs.page.PageQueryResult<OBJECT[];
        
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
        readonly id: String;
        readonly memberOf?: String;
        readonly roles: Array<String>;

    }
}
export namespace city.smartb.im.commons.model {
    interface AddressDTO {
        readonly street: String;
        readonly postalCode: String;
        readonly city: String;

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
export namespace i2.keycloak.f2.commons.domain {
    interface KeycloakF2Message {
        readonly auth: i2.keycloak.master.domain.AuthRealm;

    }
    interface KeycloakF2Query extends f2.dsl.cqrs.Query, i2.keycloak.f2.commons.domain.KeycloakF2Message {
        readonly auth: i2.keycloak.master.domain.AuthRealm;

    }
    interface KeycloakF2Command extends f2.dsl.cqrs.Command, i2.keycloak.f2.commons.domain.KeycloakF2Message {
        readonly auth: i2.keycloak.master.domain.AuthRealm;

    }
    interface KeycloakF2Result extends f2.dsl.cqrs.Event {

    }
}
export namespace i2.keycloak.f2.role.domain {
    class Role {
        constructor(id: String, name: String, description?: String, isClientRole: boolean);
        get id(): String;
        get name(): String;
        get description(): Nullable<String>;
        get isClientRole(): boolean;
    }
}
export namespace i2.keycloak.f2.role.domain {
    class RoleCompositesModel {
        constructor(assignedRole: String, effectiveRoles: String[]);
        get assignedRole(): String;
        get effectiveRoles(): String[];
    }
    class RolesCompositeModel {
        constructor(assignedRoles: String>, effectiveRoles: kotlin.collections.List<String[]);
        get assignedRoles(): String[];
        get effectiveRoles(): String[];
    }
}
export namespace i2.keycloak.f2.role.domain.features.query {
    class RoleCompositeGetQuery implements i2.keycloak.f2.commons.domain.KeycloakF2Command {
        constructor(realmId: String, objId: String, objType: i2.keycloak.f2.role.domain.features.query.RoleCompositeObjType, auth: i2.keycloak.master.domain.AuthRealm);
        get realmId(): String;
        get objId(): String;
        get objType(): i2.keycloak.f2.role.domain.features.query.RoleCompositeObjType;
        get auth(): i2.keycloak.master.domain.AuthRealm;
    }
    class RoleCompositeGetResult {
        constructor(item: i2.keycloak.f2.role.domain.RolesCompositeModel);
        get item(): i2.keycloak.f2.role.domain.RolesCompositeModel;
    }
    abstract class RoleCompositeObjType {
        private constructor();
        static get USER(): i2.keycloak.f2.role.domain.features.query.RoleCompositeObjType & {
            get name(): "USER";
            get ordinal(): 0;
        };
        static get GROUP(): i2.keycloak.f2.role.domain.features.query.RoleCompositeObjType & {
            get name(): "GROUP";
            get ordinal(): 1;
        };
        static values(): Array<i2.keycloak.f2.role.domain.features.query.RoleCompositeObjType>;
        static valueOf(value: String): i2.keycloak.f2.role.domain.features.query.RoleCompositeObjType;
        get name(): "USER" | "GROUP";
        get ordinal(): 0 | 1;
    }
}
export namespace i2.keycloak.f2.role.domain.features.query {
    class RoleGetByIdQuery {
        constructor(realmId: String, id: String, auth: i2.keycloak.master.domain.AuthRealm);
        get realmId(): String;
        get id(): String;
        get auth(): i2.keycloak.master.domain.AuthRealm;
    }
    class RoleGetByIdResult {
        constructor(item?: i2.keycloak.f2.role.domain.Role);
        get item(): Nullable<i2.keycloak.f2.role.domain.Role>;
    }
}
export namespace i2.keycloak.f2.role.domain.features.query {
    class RoleGetByNameQuery {
        constructor(realmId: String, auth: i2.keycloak.master.domain.AuthRealm, name: String);
        get realmId(): String;
        get auth(): i2.keycloak.master.domain.AuthRealm;
        get name(): String;
    }
    class RoleGetByNameResult {
        constructor(item?: i2.keycloak.f2.role.domain.Role);
        get item(): Nullable<i2.keycloak.f2.role.domain.Role>;
    }
}
export namespace i2.keycloak.f2.role.domain.features.query {
    class RolePageQuery {
        constructor(realmId: String, auth: i2.keycloak.master.domain.AuthRealm, page: f2.dsl.cqrs.page.PagePagination);
        get realmId(): String;
        get auth(): i2.keycloak.master.domain.AuthRealm;
        get page(): f2.dsl.cqrs.page.PagePagination;
    }
    class RolePageResult {
        constructor(page: f2.dsl.cqrs.page.Page<i2.keycloak.f2.role.domain.Role>);
        get page(): f2.dsl.cqrs.page.Page<i2.keycloak.f2.role.domain.Role>;
    }
}
export namespace i2.keycloak.f2.role.domain.features.command {
    class RoleAddCompositesCommand implements i2.keycloak.f2.commons.domain.KeycloakF2Command {
        constructor(roleName: String, composites: String[], auth: i2.keycloak.master.domain.AuthRealm, realmId: String);
        get roleName(): String;
        get composites(): String[];
        get auth(): i2.keycloak.master.domain.AuthRealm;
        get realmId(): String;
    }
    class RoleAddedCompositesEvent implements i2.keycloak.f2.commons.domain.KeycloakF2Result {
        constructor(id: String);
        get id(): String;
    }
}
export namespace i2.keycloak.f2.role.domain.features.command {
    class RoleCreateCommand implements i2.keycloak.f2.commons.domain.KeycloakF2Command {
        constructor(name: String, description?: String, isClientRole: boolean, composites: String[], auth: i2.keycloak.master.domain.AuthRealm, realmId: String);
        get name(): String;
        get description(): Nullable<String>;
        get isClientRole(): boolean;
        get composites(): String[];
        get auth(): i2.keycloak.master.domain.AuthRealm;
        get realmId(): String;
    }
    class RoleCreatedEvent implements i2.keycloak.f2.commons.domain.KeycloakF2Result {
        constructor(id: String);
        get id(): String;
    }
}
export namespace i2.keycloak.f2.role.domain.features.command {
    class RoleUpdateCommand implements i2.keycloak.f2.commons.domain.KeycloakF2Command {
        constructor(name: String, description?: String, isClientRole: boolean, composites: String[], auth: i2.keycloak.master.domain.AuthRealm, realmId: String);
        get name(): String;
        get description(): Nullable<String>;
        get isClientRole(): boolean;
        get composites(): String[];
        get auth(): i2.keycloak.master.domain.AuthRealm;
        get realmId(): String;
    }
    class RoleUpdatedEvent implements i2.keycloak.f2.commons.domain.KeycloakF2Result {
        constructor(id: String);
        get id(): String;
    }
}
export namespace i2.keycloak.f2.group.domain.features.command {
    class GroupCreateCommand implements i2.keycloak.f2.commons.domain.KeycloakF2Command {
        constructor(name: String, attributes: Record<String, String>, roles: String[], auth: i2.keycloak.master.domain.AuthRealm, realmId: String, parentGroupId?: String);
        get name(): String;
        get attributes(): Record<String, String>;
        get roles(): String[];
        get auth(): i2.keycloak.master.domain.AuthRealm;
        get realmId(): String;
        get parentGroupId(): Nullable<String>;
    }
    class GroupCreatedEvent implements i2.keycloak.f2.commons.domain.KeycloakF2Result {
        constructor(id: String);
        get id(): String;
    }
}
export namespace i2.keycloak.f2.group.domain.features.command {
    class GroupDisableCommand implements i2.keycloak.f2.commons.domain.KeycloakF2Command {
        constructor(id: String, realmId: String, auth: i2.keycloak.master.domain.AuthRealm);
        get id(): String;
        get realmId(): String;
        get auth(): i2.keycloak.master.domain.AuthRealm;
    }
    class GroupDisabledEvent implements f2.dsl.cqrs.Event {
        constructor(id: String);
        get id(): String;
    }
}
export namespace i2.keycloak.f2.group.domain.features.command {
    class GroupSetAttributesCommand implements i2.keycloak.f2.commons.domain.KeycloakF2Command {
        constructor(id: String, attributes: Record<String, Nullable<String>>, realmId: String, auth: i2.keycloak.master.domain.AuthRealm);
        get id(): String;
        get attributes(): Record<String, Nullable<String>>;
        get realmId(): String;
        get auth(): i2.keycloak.master.domain.AuthRealm;
    }
    class GroupSetAttributesEvent implements f2.dsl.cqrs.Event {
        constructor(id: String);
        get id(): String;
    }
}
export namespace i2.keycloak.f2.group.domain.features.command {
    class GroupUpdateCommand implements i2.keycloak.f2.commons.domain.KeycloakF2Command {
        constructor(id: String, name: String, attributes: Record<String, String>, roles: String[], auth: i2.keycloak.master.domain.AuthRealm, realmId: String);
        get id(): String;
        get name(): String;
        get attributes(): Record<String, String>;
        get roles(): String[];
        get auth(): i2.keycloak.master.domain.AuthRealm;
        get realmId(): String;
    }
    class GroupUpdatedEvent implements i2.keycloak.f2.commons.domain.KeycloakF2Result {
        constructor(id: String);
        get id(): String;
    }
}
export namespace city.smartb.im.organization.domain.features.command {
    interface OrganizationCreateCommandDTO extends f2.dsl.cqrs.Command {
        readonly siret?: String;
        readonly name: String;
        readonly description?: String;
        readonly address?: city.smartb.im.commons.model.AddressDTO;
        readonly website?: String;
        readonly roles?: String[];
        readonly parentOrganizationId?: String;
        readonly attributes?: Record<String, String>;

    }
    interface OrganizationCreatedEventDTO extends f2.dsl.cqrs.Event {
        readonly id: String;
        readonly parentOrganization?: String;

    }
}
export namespace city.smartb.im.organization.domain.features.command {
    interface OrganizationDeleteCommandDTO extends f2.dsl.cqrs.Command {
        readonly id: String;

    }
    interface OrganizationDeletedEventDTO extends f2.dsl.cqrs.Event {
        readonly id: String;

    }
}
export namespace city.smartb.im.organization.domain.features.command {
    interface OrganizationDisableCommandDTO extends f2.dsl.cqrs.Command {
        readonly id: String;
        readonly disabledBy?: String;
        readonly anonymize: boolean;
        readonly attributes?: Record<String, String>;
        readonly userAttributes?: Record<String, String>;

    }
    interface OrganizationDisabledEventDTO extends f2.dsl.cqrs.Event {
        readonly id: String;
        readonly userIds: String[];

    }
}
export namespace city.smartb.im.organization.domain.features.command {
    interface OrganizationUpdateCommandDTO extends f2.dsl.cqrs.Command {
        readonly id: String;
        readonly name: String;
        readonly description?: String;
        readonly address?: city.smartb.im.commons.model.AddressDTO;
        readonly website?: String;
        readonly roles?: String[];
        readonly attributes?: Record<String, String>;

    }
    interface OrganizationUpdatedResultDTO extends f2.dsl.cqrs.Event {
        readonly id: String;

    }
}
export namespace city.smartb.im.organization.domain.features.command {
    interface OrganizationUploadLogoCommandDTO extends f2.dsl.cqrs.Command {
        readonly id: String;

    }
    interface OrganizationUploadedLogoEventDTO extends f2.dsl.cqrs.Event {
        readonly id: String;
        readonly url: String;

    }
}
export namespace city.smartb.im.organization.domain.features.query {
    interface OrganizationGetFromInseeQueryDTO extends f2.dsl.cqrs.Query {
        readonly siret: String;

    }
    interface OrganizationGetFromInseeResultDTO extends f2.dsl.cqrs.Event {
        readonly item?: city.smartb.im.organization.domain.model.OrganizationDTO;

    }
}
export namespace city.smartb.im.organization.domain.features.query {
    interface OrganizationGetQueryDTO extends f2.dsl.cqrs.Query {
        readonly id: String;

    }
    interface OrganizationGetResultDTO<MODEL extends city.smartb.im.organization.domain.model.OrganizationDTO> extends f2.dsl.cqrs.Event {
        readonly item?: MODEL;

    }
}
export namespace city.smartb.im.organization.domain.features.query {
    interface OrganizationPageQueryDTO extends f2.dsl.cqrs.Query {
        readonly search?: String;
        readonly role?: String;
        readonly attributes?: Record<String, String>;
        readonly withDisabled?: boolean;
        readonly page?: number;
        readonly size?: number;

    }
    interface OrganizationPageResultDTO<MODEL extends city.smartb.im.organization.domain.model.OrganizationDTO> extends f2.dsl.cqrs.page.PageDTO<MODEL> {
        readonly total: number;
        readonly items: MODEL[];

    }
}
export namespace city.smartb.im.organization.domain.features.query {
    interface OrganizationRefListQueryDTO extends f2.dsl.cqrs.Query {
        readonly withDisabled: boolean;

    }
    interface OrganizationRefListResultDTO extends f2.dsl.cqrs.Event {
        readonly items: city.smartb.im.organization.domain.model.OrganizationRefDTO[];

    }
}
export namespace city.smartb.im.organization.domain.model {
    interface OrganizationDTO {
        readonly id: String;
        readonly siret?: String;
        readonly name: String;
        readonly description?: String;
        readonly address?: city.smartb.im.commons.model.AddressDTO;
        readonly website?: String;
        readonly attributes: Record<String, String>;
        readonly roles: String[];
        readonly rolesComposites: i2.keycloak.f2.role.domain.RolesCompositeModel;
        readonly enabled: boolean;
        readonly disabledBy?: String;
        readonly creationDate: number;
        readonly disabledDate?: number;

    }
}
export namespace city.smartb.im.organization.domain.model {
    interface OrganizationRefDTO {
        readonly id: String;
        readonly name: String;
        readonly roles: String[];

    }
}
export namespace city.smartb.im.organization.domain.policies {
    const OrganizationPolicies: {
        canGet(authedUser: city.smartb.im.commons.auth.AuthedUserDTO, organizationId: String): boolean;
        canList(authedUser: city.smartb.im.commons.auth.AuthedUserDTO): boolean;
        checkRefList(authedUser: city.smartb.im.commons.auth.AuthedUserDTO): boolean;
        canCreate(authedUser: city.smartb.im.commons.auth.AuthedUserDTO): boolean;
        canUpdate(authedUser: city.smartb.im.commons.auth.AuthedUserDTO, organizationId: String): boolean;
        canDisable(authedUser: city.smartb.im.commons.auth.AuthedUserDTO, organizationId: String): boolean;
        canDelete(authedUser: city.smartb.im.commons.auth.AuthedUserDTO, organizationId: String): boolean;
    };
}
export namespace i2.keycloak.f2.user.domain.features.command {
    class UserCreateCommand implements f2.dsl.cqrs.Command {
        constructor(realmId: String, username: String, firstname?: String, lastname?: String, email: String, isEnable: boolean, isEmailVerified: boolean, attributes: Record<String, String>, auth: i2.keycloak.master.domain.AuthRealm, password?: String, isPasswordTemporary?: boolean);
        get realmId(): String;
        get username(): String;
        get firstname(): Nullable<String>;
        get lastname(): Nullable<String>;
        get email(): String;
        get isEnable(): boolean;
        get isEmailVerified(): boolean;
        get attributes(): Record<String, String>;
        get auth(): i2.keycloak.master.domain.AuthRealm;
        get password(): Nullable<String>;
        get isPasswordTemporary(): boolean;
    }
    class UserCreatedEvent implements f2.dsl.cqrs.Event {
        constructor(id: String);
        get id(): String;
    }
}
export namespace i2.keycloak.f2.user.domain.features.command {
    class UserDeleteCommand implements i2.keycloak.f2.commons.domain.KeycloakF2Command {
        constructor(id: String, realmId: String, auth: i2.keycloak.master.domain.AuthRealm);
        get id(): String;
        get realmId(): String;
        get auth(): i2.keycloak.master.domain.AuthRealm;
    }
    class UserDeletedEvent implements f2.dsl.cqrs.Event {
        constructor(id: String);
        get id(): String;
    }
}
export namespace i2.keycloak.f2.user.domain.features.command {
    class UserDisableCommand implements f2.dsl.cqrs.Command {
        constructor(id: String, realmId: String, auth: i2.keycloak.master.domain.AuthRealm);
        get id(): String;
        get realmId(): String;
        get auth(): i2.keycloak.master.domain.AuthRealm;
    }
    class UserDisabledEvent implements f2.dsl.cqrs.Event {
        constructor(id: String);
        get id(): String;
    }
}
export namespace i2.keycloak.f2.user.domain.features.command {
    class UserEmailSendActionsCommand implements i2.keycloak.f2.commons.domain.KeycloakF2Command {
        constructor(userId: String, clientId?: String, redirectUri?: String, actions: String[], realmId: String, auth: i2.keycloak.master.domain.AuthRealm);
        get userId(): String;
        get clientId(): Nullable<String>;
        get redirectUri(): Nullable<String>;
        get actions(): String[];
        get realmId(): String;
        get auth(): i2.keycloak.master.domain.AuthRealm;
    }
    class UserEmailSentActionsEvent implements i2.keycloak.f2.commons.domain.KeycloakF2Result {
        constructor(id: String);
        get id(): String;
    }
}
export namespace i2.keycloak.f2.user.domain.features.command {
    class UserJoinGroupCommand implements i2.keycloak.f2.commons.domain.KeycloakF2Command {
        constructor(id: String, groupId: String, leaveOtherGroups?: boolean, realmId: String, auth: i2.keycloak.master.domain.AuthRealm);
        get id(): String;
        get groupId(): String;
        get leaveOtherGroups(): Nullable<boolean>;
        get realmId(): String;
        get auth(): i2.keycloak.master.domain.AuthRealm;
    }
    class UserJoinedGroupEvent implements i2.keycloak.f2.commons.domain.KeycloakF2Result {
        constructor(id: String, groupId: String, groupsLeft: String[]);
        get id(): String;
        get groupId(): String;
        get groupsLeft(): String[];
    }
}
export namespace i2.keycloak.f2.user.domain.features.command {
    class UserRolesGrantCommand implements i2.keycloak.f2.commons.domain.KeycloakF2Command {
        constructor(id: String, roles: String[], auth: i2.keycloak.master.domain.AuthRealm, realmId?: String, clientId?: String);
        get id(): String;
        get roles(): String[];
        get auth(): i2.keycloak.master.domain.AuthRealm;
        get realmId(): String;
        get clientId(): Nullable<String>;
    }
    class UserRolesGrantedEvent implements f2.dsl.cqrs.Event {
        constructor(id: String);
        get id(): String;
    }
}
export namespace i2.keycloak.f2.user.domain.features.command {
    class UserRolesRevokeCommand implements i2.keycloak.f2.commons.domain.KeycloakF2Command {
        constructor(id: String, roles: String[], auth: i2.keycloak.master.domain.AuthRealm, realmId?: String);
        get id(): String;
        get roles(): String[];
        get auth(): i2.keycloak.master.domain.AuthRealm;
        get realmId(): String;
    }
    class UserRolesRevokedEvent implements f2.dsl.cqrs.Event {
        constructor(id: String);
        get id(): String;
    }
}
export namespace i2.keycloak.f2.user.domain.features.command {
    class UserRolesSetCommand implements i2.keycloak.f2.commons.domain.KeycloakF2Command {
        constructor(id: String, roles: String[], auth: i2.keycloak.master.domain.AuthRealm, realmId?: String);
        get id(): String;
        get roles(): String[];
        get auth(): i2.keycloak.master.domain.AuthRealm;
        get realmId(): String;
    }
    class UserRolesSetEvent implements f2.dsl.cqrs.Event {
        constructor(id: String);
        get id(): String;
    }
}
export namespace i2.keycloak.f2.user.domain.features.command {
    class UserSetAttributesCommand implements i2.keycloak.f2.commons.domain.KeycloakF2Command {
        constructor(id: String, attributes: Record<String, Nullable<String>>, realmId: String, auth: i2.keycloak.master.domain.AuthRealm);
        get id(): String;
        get attributes(): Record<String, Nullable<String>>;
        get realmId(): String;
        get auth(): i2.keycloak.master.domain.AuthRealm;
    }
    class UserSetAttributesEvent implements f2.dsl.cqrs.Event {
        constructor(id: String);
        get id(): String;
    }
}
export namespace i2.keycloak.f2.user.domain.features.command {
    class UserUpdateEmailCommand implements i2.keycloak.f2.commons.domain.KeycloakF2Command {
        constructor(userId: String, email: String, sendVerificationEmail: boolean, clientId?: String, redirectUri?: String, realmId: String, auth: i2.keycloak.master.domain.AuthRealm);
        get userId(): String;
        get email(): String;
        get sendVerificationEmail(): boolean;
        get clientId(): Nullable<String>;
        get redirectUri(): Nullable<String>;
        get realmId(): String;
        get auth(): i2.keycloak.master.domain.AuthRealm;
    }
    class UserUpdatedEmailEvent implements i2.keycloak.f2.commons.domain.KeycloakF2Result {
        constructor(userId: String);
        get userId(): String;
    }
}
export namespace i2.keycloak.f2.user.domain.features.command {
    class UserUpdateCommand implements f2.dsl.cqrs.Command {
        constructor(userId: String, realmId: String, auth: i2.keycloak.master.domain.AuthRealm, firstname?: String, lastname?: String, attributes: Record<String, String>);
        get userId(): String;
        get realmId(): String;
        get auth(): i2.keycloak.master.domain.AuthRealm;
        get firstname(): Nullable<String>;
        get lastname(): Nullable<String>;
        get attributes(): Record<String, String>;
    }
    class UserUpdatedEvent implements f2.dsl.cqrs.Event {
        constructor(id: String);
        get id(): String;
    }
}
export namespace i2.keycloak.f2.user.domain.features.command {
    class UserUpdatePasswordCommand implements i2.keycloak.f2.commons.domain.KeycloakF2Command {
        constructor(userId: String, password: String, realmId: String, auth: i2.keycloak.master.domain.AuthRealm);
        get userId(): String;
        get password(): String;
        get realmId(): String;
        get auth(): i2.keycloak.master.domain.AuthRealm;
    }
    class UserUpdatedPasswordEvent implements i2.keycloak.f2.commons.domain.KeycloakF2Result {
        constructor(userId: String);
        get userId(): String;
    }
}
export namespace i2.keycloak.f2.user.domain.features.query {
    class UserGetByEmailQuery implements i2.keycloak.f2.commons.domain.KeycloakF2Query {
        constructor(email: String, realmId: String, auth: i2.keycloak.master.domain.AuthRealm);
        get email(): String;
        get realmId(): String;
        get auth(): i2.keycloak.master.domain.AuthRealm;
    }
    class UserGetByEmailQueryResult implements f2.dsl.cqrs.Event {
        constructor(item?: i2.keycloak.f2.user.domain.model.UserModel);
        get item(): Nullable<i2.keycloak.f2.user.domain.model.UserModel>;
    }
}
export namespace i2.keycloak.f2.user.domain.features.query {
    class UserGetByUsernameQuery implements i2.keycloak.f2.commons.domain.KeycloakF2Query {
        constructor(realmId: String, username: String, auth: i2.keycloak.master.domain.AuthRealm);
        get realmId(): String;
        get username(): String;
        get auth(): i2.keycloak.master.domain.AuthRealm;
    }
    class UserGetByUsernameResult implements f2.dsl.cqrs.Event {
        constructor(item?: i2.keycloak.f2.user.domain.model.UserModel);
        get item(): Nullable<i2.keycloak.f2.user.domain.model.UserModel>;
    }
}
export namespace i2.keycloak.f2.user.domain.features.query {
    class UserGetQuery implements i2.keycloak.f2.commons.domain.KeycloakF2Query {
        constructor(id: String, realmId: String, auth: i2.keycloak.master.domain.AuthRealm);
        get id(): String;
        get realmId(): String;
        get auth(): i2.keycloak.master.domain.AuthRealm;
    }
    class UserGetResult implements f2.dsl.cqrs.Event {
        constructor(item?: i2.keycloak.f2.user.domain.model.UserModel);
        get item(): Nullable<i2.keycloak.f2.user.domain.model.UserModel>;
    }
}
export namespace i2.keycloak.f2.user.domain.features.query {
    class UserGetGroupsQuery implements i2.keycloak.f2.commons.domain.KeycloakF2Query {
        constructor(userId: String, realmId: String, auth: i2.keycloak.master.domain.AuthRealm);
        get userId(): String;
        get realmId(): String;
        get auth(): i2.keycloak.master.domain.AuthRealm;
    }
    class UserGetGroupsResult implements f2.dsl.cqrs.Event {
        constructor(items: i2.keycloak.f2.user.domain.model.UserGroup[]);
        get items(): i2.keycloak.f2.user.domain.model.UserGroup[];
    }
}
export namespace i2.keycloak.f2.user.domain.features.query {
    class UserGetRolesQuery implements i2.keycloak.f2.commons.domain.KeycloakF2Query {
        constructor(userId: String, realmId: String, auth: i2.keycloak.master.domain.AuthRealm);
        get userId(): String;
        get realmId(): String;
        get auth(): i2.keycloak.master.domain.AuthRealm;
    }
    class UserGetRolesResult implements f2.dsl.cqrs.Event {
        constructor(roles: i2.keycloak.f2.role.domain.RolesCompositeModel);
        get roles(): i2.keycloak.f2.role.domain.RolesCompositeModel;
    }
}
export namespace i2.keycloak.f2.user.domain.features.query {
    class UserPageQuery implements i2.keycloak.f2.commons.domain.KeycloakF2Query {
        constructor(groupId?: String, search?: String, role?: String, attributes?: Record<String, String>, withDisabled: boolean, page: f2.dsl.cqrs.page.PagePagination, realmId: String, auth: i2.keycloak.master.domain.AuthRealm);
        get groupId(): Nullable<String>;
        get search(): Nullable<String>;
        get role(): Nullable<String>;
        get attributes(): Record<String, String>;
        get withDisabled(): boolean;
        get page(): f2.dsl.cqrs.page.PagePagination;
        get realmId(): String;
        get auth(): i2.keycloak.master.domain.AuthRealm;
    }
    class UserPageResult implements f2.dsl.cqrs.Event {
        constructor(items: f2.dsl.cqrs.page.Page<i2.keycloak.f2.user.domain.model.UserModel>);
        get items(): f2.dsl.cqrs.page.Page<i2.keycloak.f2.user.domain.model.UserModel>;
    }
}
export namespace i2.keycloak.f2.user.domain.model {
    class UserGroup {
        constructor(id: String, name: String, roles: String[]);
        get id(): String;
        get name(): String;
        get roles(): String[];
    }
}
export namespace i2.keycloak.f2.user.domain.model {
    class UserModel {
        constructor(id: String, email?: String, firstName?: String, lastName?: String, roles: i2.keycloak.f2.role.domain.RolesCompositeModel, attributes: Record<String, String>, enabled: boolean, creationDate: number);
        get id(): String;
        get email(): Nullable<String>;
        get firstName(): Nullable<String>;
        get lastName(): Nullable<String>;
        get roles(): i2.keycloak.f2.role.domain.RolesCompositeModel;
        get attributes(): Record<String, String>;
        get enabled(): boolean;
        get creationDate(): number;
    }
}
export namespace city.smartb.im.user.domain.features.command {
    interface UserCreateCommandDTO extends f2.dsl.cqrs.Command {
        readonly email: String;
        readonly password?: String;
        readonly givenName: String;
        readonly familyName: String;
        readonly address?: city.smartb.im.commons.model.AddressDTO/* Nullable<city.smartb.im.commons.model.Address> */;
        readonly phone?: String;
        readonly roles: String[];
        readonly memberOf?: String;
        readonly attributes?: Record<String, String>;
        readonly isEmailVerified: boolean;
        readonly isPasswordTemporary: boolean;
        readonly sendResetPassword: boolean;
        readonly sendVerifyEmail: boolean;

    }
    interface UserCreatedEventDTO extends f2.dsl.cqrs.Event {
        readonly id: String;

    }
}
export namespace city.smartb.im.user.domain.features.command {
    interface UserDeleteCommandDTO extends f2.dsl.cqrs.Command {
        readonly id: String;

    }
    interface UserDeletedEventDTO extends f2.dsl.cqrs.Event {
        readonly id: String;

    }
}
export namespace city.smartb.im.user.domain.features.command {
    interface UserDisableCommandDTO extends f2.dsl.cqrs.Command {
        readonly id: String;
        readonly disabledBy?: String;
        readonly anonymize: boolean;
        readonly attributes?: Record<String, String>;

    }
    interface UserDisabledEventDTO extends f2.dsl.cqrs.Event {
        readonly id: String;

    }
}
export namespace city.smartb.im.user.domain.features.command {
    interface UserResetPasswordCommandDTO extends f2.dsl.cqrs.Command {
        readonly id: String;

    }
    interface UserResetPasswordEventDTO extends f2.dsl.cqrs.Event {
        readonly id: String;

    }
}
export namespace city.smartb.im.user.domain.features.command {
    interface UserUpdateEmailCommandDTO extends f2.dsl.cqrs.Command {
        readonly id: String;
        readonly email: String;
        readonly sendVerificationEmail: boolean;

    }
    interface UserUpdatedEmailEventDTO extends f2.dsl.cqrs.Event {
        readonly id: String;

    }
}
export namespace city.smartb.im.user.domain.features.command {
    interface UserUpdateCommandDTO extends f2.dsl.cqrs.Command {
        readonly id: String;
        readonly givenName: String;
        readonly familyName: String;
        readonly address?: city.smartb.im.commons.model.AddressDTO/* Nullable<city.smartb.im.commons.model.Address> */;
        readonly phone?: String;
        readonly memberOf?: String;
        readonly roles: String[];
        readonly attributes?: Record<String, String>;

    }
    interface UserUpdatedEventDTO extends f2.dsl.cqrs.Event {
        readonly id: String;

    }
}
export namespace city.smartb.im.user.domain.features.command {
    interface UserUpdatePasswordCommandDTO extends f2.dsl.cqrs.Command {
        readonly id: String;
        readonly password: String;

    }
    interface UserUpdatedPasswordEventDTO extends f2.dsl.cqrs.Event {
        readonly id: String;

    }
}
export namespace city.smartb.im.user.domain.features.command {
    interface UserUploadLogoCommandDTO extends f2.dsl.cqrs.Command {
        readonly id: String;

    }
    interface UserUploadedLogoEventDTO extends f2.dsl.cqrs.Event {
        readonly id: String;
        readonly url: String;

    }
}
export namespace city.smartb.im.user.domain.features.query {
    interface UserExistsByEmailQueryDTO extends f2.dsl.cqrs.Query {
        readonly email: String;

    }
    interface UserExistsByEmailResultDTO extends f2.dsl.cqrs.Event {
        readonly item: boolean;

    }
}
export namespace city.smartb.im.user.domain.features.query {
    interface UserGetByEmailQueryDTO extends f2.dsl.cqrs.Query {
        readonly email: String;

    }
    interface UserGetByEmailResultDTO extends f2.dsl.cqrs.Event {
        readonly item?: city.smartb.im.user.domain.model.UserDTO;

    }
}
export namespace city.smartb.im.user.domain.features.query {
    interface UserGetQueryDTO extends f2.dsl.cqrs.Query {
        readonly id: String;

    }
    interface UserGetResultDTO extends f2.dsl.cqrs.Event {
        readonly item?: city.smartb.im.user.domain.model.UserDTO;

    }
}
export namespace city.smartb.im.user.domain.features.query {
    interface UserPageQueryDTO extends f2.dsl.cqrs.Query {
        readonly organizationId?: String;
        readonly search?: String;
        readonly role?: String;
        readonly attributes?: Record<String, String>;
        readonly withDisabled: boolean;
        readonly page?: number;
        readonly size?: number;

    }
    interface UserPageResultDTO extends f2.dsl.cqrs.Event {
        readonly items: city.smartb.im.user.domain.model.UserDTO[];
        readonly total: number;

    }
}
export namespace city.smartb.im.user.domain.model {
    interface UserDTO {
        readonly id: String;
        readonly memberOf?: city.smartb.im.organization.domain.model.OrganizationRefDTO;
        readonly email: String;
        readonly givenName: String;
        readonly familyName: String;
        readonly address?: city.smartb.im.commons.model.AddressDTO;
        readonly phone?: String;
        readonly roles: String[];
        readonly rolesComposites: i2.keycloak.f2.role.domain.RolesCompositeModel;
        readonly attributes: Record<String, String>;
        readonly enabled: boolean;
        readonly disabledBy?: String;
        readonly creationDate: number;
        readonly disabledDate?: number;

    }
}
export namespace city.smartb.im.user.domain.policies {
    const UserPolicies: {
        canGet(authedUser: city.smartb.im.commons.auth.AuthedUserDTO, user?: city.smartb.im.user.domain.model.UserDTO): boolean;
        canPage(authedUser: city.smartb.im.commons.auth.AuthedUserDTO): boolean;
        checkRefList(authedUser: city.smartb.im.commons.auth.AuthedUserDTO): boolean;
        canCreate(authedUser: city.smartb.im.commons.auth.AuthedUserDTO): boolean;
        canUpdate(authedUser: city.smartb.im.commons.auth.AuthedUserDTO, userId: String): boolean;
        canDisable(authedUser: city.smartb.im.commons.auth.AuthedUserDTO, userId: String): boolean;
        canDelete(authedUser: city.smartb.im.commons.auth.AuthedUserDTO, userId: String): boolean;
    };
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
        readonly blockId: String;
        readonly previousHash: Int8Array;
        readonly dataHash: Int8Array;
        readonly transactions: ssm.chaincode.dsl.blockchain.TransactionDTO[];

    }
    class Block implements ssm.chaincode.dsl.blockchain.BlockDTO {
        constructor(blockId: String, previousHash: Int8Array, dataHash: Int8Array, transactions: ssm.chaincode.dsl.blockchain.Transaction[]);
        get blockId(): String;
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
        static valueOf(value: String): ssm.chaincode.dsl.blockchain.EnvelopeType;
        get name(): "TRANSACTION_ENVELOPE" | "ENVELOPE";
        get ordinal(): 0 | 1;
    }
}
export namespace ssm.chaincode.dsl.blockchain {
    interface IdentitiesInfoDTO {
        readonly id: String;
        readonly mspid: String;

    }
    class IdentitiesInfo implements ssm.chaincode.dsl.blockchain.IdentitiesInfoDTO {
        constructor(id: String, mspid: String);
        get id(): String;
        get mspid(): String;
    }
}
export namespace ssm.chaincode.dsl.blockchain {
    interface TransactionDTO {
        readonly transactionId: String;
        readonly blockId: String;
        readonly timestamp: number;
        readonly isValid: boolean;
        readonly channelId: String;
        readonly creator: ssm.chaincode.dsl.blockchain.IdentitiesInfoDTO;
        readonly nonce: Int8Array;
        readonly type: ssm.chaincode.dsl.blockchain.EnvelopeType;
        readonly validationCode: number;

    }
    class Transaction implements ssm.chaincode.dsl.blockchain.TransactionDTO {
        constructor(transactionId: String, blockId: String, timestamp: number, isValid: boolean, channelId: String, creator: ssm.chaincode.dsl.blockchain.IdentitiesInfo, nonce: Int8Array, type: ssm.chaincode.dsl.blockchain.EnvelopeType, validationCode: number);
        get transactionId(): String;
        get blockId(): String;
        get timestamp(): number;
        get isValid(): boolean;
        get channelId(): String;
        get creator(): ssm.chaincode.dsl.blockchain.IdentitiesInfo;
        get nonce(): Int8Array;
        get type(): ssm.chaincode.dsl.blockchain.EnvelopeType;
        get validationCode(): number;
    }
}
export namespace ssm.chaincode.dsl.config {
    interface SsmChaincodePropertiesDTO {
        readonly url: String;

    }
    class ChaincodeSsmConfig implements ssm.chaincode.dsl.config.SsmChaincodePropertiesDTO {
        constructor(url: String);
        get url(): String;
    }
}
export namespace ssm.chaincode.dsl.model {
    interface AgentDTO {
        readonly name: String;
        readonly pub: Int8Array;

    }
    class Agent implements ssm.chaincode.dsl.model.AgentDTO {
        constructor(name: String, pub: Int8Array);
        get name(): String;
        get pub(): Int8Array;
        equals(other?: any): boolean;
        hashCode(): number;
        component1(): String;
        component2(): Int8Array;
        copy(name?: String, pub?: Int8Array): ssm.chaincode.dsl.model.Agent;
        toString(): String;
        
    }
}
export namespace ssm.chaincode.dsl.model {
    interface ChaincodeDTO {
        readonly id: String;
        readonly channelId: String;

    }
    class Chaincode implements ssm.chaincode.dsl.model.ChaincodeDTO {
        constructor(id: String, channelId: String);
        get id(): String;
        get channelId(): String;
        component1(): String;
        component2(): String;
        copy(id?: String, channelId?: String): ssm.chaincode.dsl.model.Chaincode;
        toString(): String;
        hashCode(): number;
        equals(other?: any): boolean;
    }
}
export namespace ssm.chaincode.dsl.model {
    interface SsmDTO {
        readonly name: String;
        readonly transitions: ssm.chaincode.dsl.model.SsmTransitionDTO[];

    }
    class Ssm implements ssm.chaincode.dsl.model.SsmDTO {
        constructor(name: String, transitions: ssm.chaincode.dsl.model.SsmTransition[]);
        get name(): String;
        get transitions(): ssm.chaincode.dsl.model.SsmTransition[];
        component1(): String;
        component2(): ssm.chaincode.dsl.model.SsmTransition[];
        copy(name?: String, transitions?: ssm.chaincode.dsl.model.SsmTransition[]): ssm.chaincode.dsl.model.Ssm;
        toString(): String;
        hashCode(): number;
        equals(other?: any): boolean;
    }
}
export namespace ssm.chaincode.dsl.model {
    interface SsmContextDTO extends ssm.chaincode.dsl.model.WithPrivate {
        readonly session: String;
        readonly public: String;
        readonly iteration: number;
        readonly private?: Record<String, String>;

    }
    class SsmContext implements ssm.chaincode.dsl.model.SsmContextDTO {
        constructor(session: String, _public: String, iteration: number, _private?: Record<String, String>);
        get session(): String;
        get public(): String;
        get iteration(): number;
        get private(): Nullable<any>/* Nullable<Record<String, String>> */;
        component1(): String;
        component2(): String;
        component3(): number;
        component4(): Nullable<any>/* Nullable<Record<String, String>> */;
        copy(session?: String, _public?: String, iteration?: number, _private?: Record<String, String>): ssm.chaincode.dsl.model.SsmContext;
        toString(): String;
        hashCode(): number;
        equals(other?: any): boolean;
    }
}
export namespace ssm.chaincode.dsl.model {
    interface SsmGrantDTO {
        readonly user: String;
        readonly iteration: number;
        readonly credits: Record<String, ssm.chaincode.dsl.model.CreditDTO>;

    }
    class SsmGrant {
        constructor(user: String, iteration: number, credits: Record<String, ssm.chaincode.dsl.model.Credit>);
        get user(): String;
        get iteration(): number;
        get credits(): Record<String, ssm.chaincode.dsl.model.Credit>;
        component1(): String;
        component2(): number;
        component3(): Record<String, ssm.chaincode.dsl.model.Credit>;
        copy(user?: String, iteration?: number, credits?: Record<String, ssm.chaincode.dsl.model.Credit>): ssm.chaincode.dsl.model.SsmGrant;
        toString(): String;
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
        toString(): String;
        hashCode(): number;
        equals(other?: any): boolean;
    }
}
export namespace ssm.chaincode.dsl.model {
    interface SsmSessionDTO extends ssm.chaincode.dsl.model.WithPrivate {
        readonly ssm?: String;
        readonly session: String;
        readonly roles?: Record<String, String>;
        readonly public?: any;
        readonly private?: Record<String, String>;

    }
    class SsmSession implements ssm.chaincode.dsl.model.SsmSessionDTO {
        constructor(ssm: String, session: String, roles: Record<String, String>, _public: String, _private?: Record<String, String>);
        get ssm(): String;
        get session(): String;
        get roles(): Record<String, String>;
        get public(): String;
        get private(): Nullable<any>/* Nullable<Record<String, String>> */;
    }
}
export namespace ssm.chaincode.dsl.model {
    interface SsmSessionStateDTO extends ssm.chaincode.dsl.model.SsmSessionDTO, ssm.chaincode.dsl.model.WithPrivate {
        readonly ssm?: String;
        readonly session: String;
        readonly roles?: Record<String, String>;
        readonly public?: any;
        readonly private?: Record<String, String>;
        readonly origin?: ssm.chaincode.dsl.model.SsmTransitionDTO;
        readonly current: number;
        readonly iteration: number;

    }
    class SsmSessionState implements ssm.chaincode.dsl.model.SsmSessionStateDTO {
        constructor(ssm?: String, session: String, roles?: Record<String, String>, _public?: any, _private?: Record<String, String>, origin?: ssm.chaincode.dsl.model.SsmTransition, current: number, iteration: number);
        get ssm(): Nullable<String>;
        get session(): String;
        get roles(): Nullable<any>/* Nullable<Record<String, String>> */;
        get public(): Nullable<any>;
        get private(): Nullable<any>/* Nullable<Record<String, String>> */;
        get origin(): Nullable<ssm.chaincode.dsl.model.SsmTransition>;
        get current(): number;
        get iteration(): number;
        component1(): Nullable<String>;
        component2(): String;
        component3(): Nullable<any>/* Nullable<Record<String, String>> */;
        component4(): Nullable<any>;
        component5(): Nullable<any>/* Nullable<Record<String, String>> */;
        component6(): Nullable<ssm.chaincode.dsl.model.SsmTransition>;
        component7(): number;
        component8(): number;
        copy(ssm?: String, session?: String, roles?: Record<String, String>, _public?: any, _private?: Record<String, String>, origin?: ssm.chaincode.dsl.model.SsmTransition, current?: number, iteration?: number): ssm.chaincode.dsl.model.SsmSessionState;
        toString(): String;
        hashCode(): number;
        equals(other?: any): boolean;
    }
}
export namespace ssm.chaincode.dsl.model {
    interface SsmSessionStateLogDTO {
        readonly txId: String;
        readonly state: ssm.chaincode.dsl.model.SsmSessionStateDTO;

    }
    class SsmSessionStateLog implements ssm.chaincode.dsl.model.SsmSessionStateLogDTO {
        constructor(txId: String, state: ssm.chaincode.dsl.model.SsmSessionState);
        get txId(): String;
        get state(): ssm.chaincode.dsl.model.SsmSessionState;
        component1(): String;
        component2(): ssm.chaincode.dsl.model.SsmSessionState;
        copy(txId?: String, state?: ssm.chaincode.dsl.model.SsmSessionState): ssm.chaincode.dsl.model.SsmSessionStateLog;
        toString(): String;
        hashCode(): number;
        equals(other?: any): boolean;
    }
}
export namespace ssm.chaincode.dsl.model {
    interface SsmTransitionDTO {
        readonly from: number;
        readonly to: number;
        readonly role: String;
        readonly action: String;

    }
    class SsmTransition implements ssm.chaincode.dsl.model.SsmTransitionDTO {
        constructor(from: number, to: number, role: String, action: String);
        get from(): number;
        get to(): number;
        get role(): String;
        get action(): String;
        component1(): number;
        component2(): number;
        component3(): String;
        component4(): String;
        copy(from?: number, to?: number, role?: String, action?: String): ssm.chaincode.dsl.model.SsmTransition;
        toString(): String;
        hashCode(): number;
        equals(other?: any): boolean;
    }
}
export namespace ssm.chaincode.dsl.model {
    interface WithPrivate {
        readonly private?: Record<String, String>;

    }
}
export namespace ssm.chaincode.dsl.model.uri {
    interface ChaincodeUriDTO {
        readonly uri: String;

    }
    class ChaincodeUri implements ssm.chaincode.dsl.model.uri.ChaincodeUriDTO {
        constructor(uri: String);
        get uri(): String;
        get channelId(): String;
        get chaincodeId(): String;
        
    }
}
export namespace ssm.chaincode.dsl.model.uri {
    interface SsmUriDTO {
        readonly uri: String;

    }
    class SsmUri implements ssm.chaincode.dsl.model.uri.SsmUriDTO {
        constructor(uri: String);
        get uri(): String;
        get channelId(): String;
        get chaincodeId(): String;
        get ssmName(): String;
        get ssmVersion(): String;
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;
        component1(): String;
        copy(uri?: String): ssm.chaincode.dsl.model.uri.SsmUri;
        toString(): String;
        hashCode(): number;
        equals(other?: any): boolean;
        
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmGetAdminQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor(chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri, name: String);
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;
        get name(): String;
    }
    class SsmGetAdminResult implements ssm.chaincode.dsl.SsmItemResultDTO<ssm.chaincode.dsl.model.Agent> {
        constructor(item?: ssm.chaincode.dsl.model.Agent);
        get item(): Nullable<ssm.chaincode.dsl.model.Agent>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmGetQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor(chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri, name: String);
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;
        get name(): String;
    }
    class SsmGetResult implements ssm.chaincode.dsl.SsmItemResultDTO<ssm.chaincode.dsl.model.Ssm> {
        constructor(item?: ssm.chaincode.dsl.model.Ssm);
        get item(): Nullable<ssm.chaincode.dsl.model.Ssm>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmGetSessionLogsQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor(chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri, ssmName: String, sessionName: String);
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;
        get ssmName(): String;
        get sessionName(): String;
    }
    class SsmGetSessionLogsQueryResult {
        constructor(ssmName: String, sessionName: String, logs: ssm.chaincode.dsl.model.SsmSessionStateLog[]);
        get ssmName(): String;
        get sessionName(): String;
        get logs(): ssm.chaincode.dsl.model.SsmSessionStateLog[];
        component1(): String;
        component2(): String;
        component3(): ssm.chaincode.dsl.model.SsmSessionStateLog[];
        copy(ssmName?: String, sessionName?: String, logs?: ssm.chaincode.dsl.model.SsmSessionStateLog[]): ssm.chaincode.dsl.query.SsmGetSessionLogsQueryResult;
        toString(): String;
        hashCode(): number;
        equals(other?: any): boolean;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmGetSessionQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor(chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri, sessionName: String);
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;
        get sessionName(): String;
    }
    class SsmGetSessionResult implements ssm.chaincode.dsl.SsmItemResultDTO<ssm.chaincode.dsl.model.SsmSessionState> {
        constructor(item?: ssm.chaincode.dsl.model.SsmSessionState);
        get item(): Nullable<ssm.chaincode.dsl.model.SsmSessionState>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmGetTransactionQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor(chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri, id: String);
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;
        get id(): String;
        component1(): ssm.chaincode.dsl.model.uri.ChaincodeUri;
        component2(): String;
        copy(chaincodeUri?: ssm.chaincode.dsl.model.uri.ChaincodeUri, id?: String): ssm.chaincode.dsl.query.SsmGetTransactionQuery;
        toString(): String;
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
        constructor(chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri, name: String);
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;
        get name(): String;
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
    class SsmListAdminResult implements ssm.chaincode.dsl.SsmItemsResultDTO<String> {
        constructor(items: Array<String>);
        get items(): Array<String>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmListSessionQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor(chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri);
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;
    }
    class SsmListSessionResult implements ssm.chaincode.dsl.SsmItemsResultDTO<String> {
        constructor(items: Array<String>);
        get items(): Array<String>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmListSsmQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor(chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri);
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;
    }
    class SsmListSsmResult implements ssm.chaincode.dsl.SsmItemsResultDTO<String> {
        constructor(items: Array<String>);
        get items(): Array<String>;
    }
}
export namespace ssm.chaincode.dsl.query {
    class SsmListUserQuery implements ssm.chaincode.dsl.SsmQueryDTO {
        constructor(chaincodeUri: ssm.chaincode.dsl.model.uri.ChaincodeUri);
        get chaincodeUri(): ssm.chaincode.dsl.model.uri.ChaincodeUri;
    }
    class SsmListUserResult implements ssm.chaincode.dsl.SsmItemsResultDTO<String> {
        constructor(items: Array<String>);
        get items(): Array<String>;
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
        constructor(name: String, version?: String, transitions: Array<s2.dsl.automate.S2Transition>);
        get name(): String;
        get version(): Nullable<String>;
        get transitions(): Array<s2.dsl.automate.S2Transition>;
        getAvailableTransitions(state: s2.dsl.automate.S2State): Array<s2.dsl.automate.S2Transition>;
        isAvailableTransition(currentState: s2.dsl.automate.S2State, msg: f2.dsl.cqrs.Message): boolean;
        isAvailableInitTransition(command: f2.dsl.cqrs.Message): boolean;
        isFinalState(state: s2.dsl.automate.S2State): boolean;
        isSameState(from?: s2.dsl.automate.S2State, to: s2.dsl.automate.S2State): boolean;
        static S2Automate_init_$Create$(seen1: number, name?: String, version?: String, transitions?: Array<s2.dsl.automate.S2Transition>, serializationConstructorMarker?: kotlinx.serialization.internal.SerializationConstructorMarker): s2.dsl.automate.S2Automate;
        
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
        readonly type: String;
        readonly description: String;
        readonly date: String;
        readonly payload: Record<String, String>;

    }
    class S2ErrorBase implements s2.dsl.automate.S2Error {
        constructor(type: String, description: String, date: String, payload: Record<String, String>);
        get type(): String;
        get description(): String;
        get date(): String;
        get payload(): Record<String, String>;
        toString(): String;
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
        constructor(automate: s2.dsl.automate.S2Automate, startsOn?: kotlin.reflect.KClass<f2.dsl.cqrs.Message>>, endsOn?: kotlin.reflect.KClass<f2.dsl.cqrs.Message[][], autostart?: boolean, blocking?: boolean, singleton?: boolean);
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
        constructor(name: String);
        get name(): String;
        static S2TransitionValue_init_$Create$(seen1: number, name?: String, serializationConstructorMarker?: kotlinx.serialization.internal.SerializationConstructorMarker): s2.dsl.automate.S2TransitionValue;
        
        static get $serializer(): {
        } & kotlinx.serialization.internal.GeneratedSerializer<s2.dsl.automate.S2TransitionValue>;
    }
    class S2RoleValue {
        constructor(name: String);
        get name(): String;
        static S2RoleValue_init_$Create$(seen1: number, name?: String, serializationConstructorMarker?: kotlinx.serialization.internal.SerializationConstructorMarker): s2.dsl.automate.S2RoleValue;
        
        static get $serializer(): {
        } & kotlinx.serialization.internal.GeneratedSerializer<s2.dsl.automate.S2RoleValue>;
    }
    class S2StateValue {
        constructor(name: String, position: number);
        get name(): String;
        get position(): number;
        static S2StateValue_init_$Create$(seen1: number, name?: String, position: number, serializationConstructorMarker?: kotlinx.serialization.internal.SerializationConstructorMarker): s2.dsl.automate.S2StateValue;
        
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
    interface AuthedUserDTO {
        readonly id: String;
        readonly memberOf?: String;
        readonly roles: Array<String>;

    }
}
export namespace city.smartb.registry.program.api.commons.auth {
    const Roles: {
        get ADMIN(): String;
        get USER(): String;
        get ONBOARDING_USER(): String;
        get FUB(): String;
        get SUPPORT(): String;
        get BENEFICIARY(): String;
        get PROVIDER_COUNSELING(): String;
        get PROVIDER_EQUIPMENT(): String;
        get PROVIDER_TRAINING(): String;
        get ONBOARDING(): String;
        get UNCHARTED(): String;
    };
}
export namespace city.smartb.registry.program.api.commons.exception {
    const ExceptionCodes: {
        notEligible(): number;
        unacceptedTerms(): number;
        quotationMissingFile(): number;
        userSupervisesProject(): number;
        userSupervisesQuotation(): number;
        userSupervisesTask(): number;
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
        quotations(): String;
        projects(): String;
    };
}
export namespace city.smartb.registry.program.s2.activity.domain.automate {
    interface ActivityInitCommand extends s2.dsl.automate.S2InitCommand {

    }
    interface ActivityCommand extends s2.dsl.automate.S2Command<String> {
        readonly id: String;

    }
    interface ActivityEvent extends f2.dsl.cqrs.Event, s2.dsl.automate.WithId<String> {
        readonly id: String;

    }
}
export namespace city.smartb.registry.program.s2.activity.domain.command {
    interface ActivityUpdatedEventDTO extends city.smartb.registry.program.s2.activity.domain.automate.ActivityEvent {
        readonly id: String;

    }
}
export as namespace verified_emission_reduction_registry_activity_domain;