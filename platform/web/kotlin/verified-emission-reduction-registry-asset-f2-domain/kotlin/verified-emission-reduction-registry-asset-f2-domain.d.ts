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
        static F2Error_init_$Create$(seen1: number, message?: string, id?: string, timestamp?: string, code: number, requestId?: string, serializationConstructorMarker: Nullable<any>/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): f2.dsl.cqrs.error.F2Error;
        static get Companion(): {
            serializer(): kotlinx.serialization.KSerializer<f2.dsl.cqrs.error.F2Error>;
        };
        static get $serializer(): {
        } & kotlinx.serialization.internal.GeneratedSerializer<f2.dsl.cqrs.error.F2Error>;
    }
}
export namespace f2.dsl.cqrs.exception {
    class F2Exception /* extends kotlin.RuntimeException */ {
        constructor(error: f2.dsl.cqrs.error.F2ErrorDTO, cause?: Error);
        get error(): f2.dsl.cqrs.error.F2ErrorDTO;
        static get Companion(): {
            invoke(message: string, id?: string, requestId?: string, code?: number, cause?: Error): f2.dsl.cqrs.exception.F2Exception;
        };
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
        readonly items: kotlin.collections.List<OBJECT>;

    }
    class Page<OBJECT> implements f2.dsl.cqrs.page.PageDTO<OBJECT> {
        constructor(total: number, items: kotlin.collections.List<OBJECT>);
        get total(): number;
        get items(): kotlin.collections.List<OBJECT>;
        static Page_init_$Create$<OBJECT>(seen1: number, total: number, items: Nullable<any>/* Nullable<kotlin.collections.List<OBJECT>> */, serializationConstructorMarker: Nullable<any>/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): f2.dsl.cqrs.page.Page<OBJECT>;
        static get Companion(): {
            serializer<T0>(typeSerial0: kotlinx.serialization.KSerializer<T0>): kotlinx.serialization.KSerializer<f2.dsl.cqrs.page.Page<T0>>;
        } & kotlinx.serialization.internal.SerializerFactory;
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
        readonly items: kotlin.collections.List<OBJECT>;
        readonly pagination?: f2.dsl.cqrs.page.OffsetPaginationDTO;

    }
    class PageQuery implements f2.dsl.cqrs.page.PageQueryDTO {
        constructor(pagination?: f2.dsl.cqrs.page.OffsetPaginationDTO);
        get pagination(): Nullable<f2.dsl.cqrs.page.OffsetPaginationDTO>;
        static PageQuery_init_$Create$(seen1: number, pagination?: f2.dsl.cqrs.page.OffsetPaginationDTO, serializationConstructorMarker: Nullable<any>/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): f2.dsl.cqrs.page.PageQuery;
        static get Companion(): {
            serializer(): kotlinx.serialization.KSerializer<f2.dsl.cqrs.page.PageQuery>;
        };
        static get $serializer(): {
        } & kotlinx.serialization.internal.GeneratedSerializer<f2.dsl.cqrs.page.PageQuery>;
    }
    class PageQueryResult<OBJECT> implements f2.dsl.cqrs.page.PageQueryResultDTO<OBJECT> {
        constructor(pagination?: f2.dsl.cqrs.page.OffsetPagination, total: number, items: kotlin.collections.List<OBJECT>);
        get pagination(): Nullable<f2.dsl.cqrs.page.OffsetPagination>;
        get total(): number;
        get items(): kotlin.collections.List<OBJECT>;
        static PageQueryResult_init_$Create$<OBJECT>(seen1: number, pagination?: f2.dsl.cqrs.page.OffsetPagination, total: number, items: Nullable<any>/* Nullable<kotlin.collections.List<OBJECT>> */, serializationConstructorMarker: Nullable<any>/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): f2.dsl.cqrs.page.PageQueryResult<OBJECT>;
        static get Companion(): {
            serializer<T0>(typeSerial0: kotlinx.serialization.KSerializer<T0>): kotlinx.serialization.KSerializer<f2.dsl.cqrs.page.PageQueryResult<T0>>;
        } & kotlinx.serialization.internal.SerializerFactory;
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
        static OffsetPagination_init_$Create$(seen1: number, offset: number, limit: number, serializationConstructorMarker: Nullable<any>/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): f2.dsl.cqrs.page.OffsetPagination;
        static get Companion(): {
            serializer(): kotlinx.serialization.KSerializer<f2.dsl.cqrs.page.OffsetPagination>;
        };
        static get $serializer(): {
        } & kotlinx.serialization.internal.GeneratedSerializer<f2.dsl.cqrs.page.OffsetPagination>;
    }
    class PagePagination implements f2.dsl.cqrs.page.PagePaginationDTO {
        constructor(page?: number, size?: number);
        get page(): Nullable<number>;
        get size(): Nullable<number>;
        static PagePagination_init_$Create$(seen1: number, page?: number, size?: number, serializationConstructorMarker: Nullable<any>/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): f2.dsl.cqrs.page.PagePagination;
        static get Companion(): {
            serializer(): kotlinx.serialization.KSerializer<f2.dsl.cqrs.page.PagePagination>;
        };
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
export namespace city.smartb.im.commons.model {
    interface AddressDTO {
        readonly street: string;
        readonly postalCode: string;
        readonly city: string;

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
        constructor(id: string, name: string, description?: string, isClientRole: boolean);
        get id(): string;
        get name(): string;
        get description(): Nullable<string>;
        get isClientRole(): boolean;
    }
}
export namespace i2.keycloak.f2.role.domain {
    class RoleCompositesModel {
        constructor(assignedRole: string, effectiveRoles: kotlin.collections.List<string>);
        get assignedRole(): string;
        get effectiveRoles(): kotlin.collections.List<string>;
    }
    class RolesCompositeModel {
        constructor(assignedRoles: kotlin.collections.List<string>, effectiveRoles: kotlin.collections.List<string>);
        get assignedRoles(): kotlin.collections.List<string>;
        get effectiveRoles(): kotlin.collections.List<string>;
    }
}
export namespace i2.keycloak.f2.role.domain.features.query {
    class RoleCompositeGetQuery implements i2.keycloak.f2.commons.domain.KeycloakF2Command {
        constructor(realmId: string, objId: string, objType: i2.keycloak.f2.role.domain.features.query.RoleCompositeObjType, auth: i2.keycloak.master.domain.AuthRealm);
        get realmId(): string;
        get objId(): string;
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
        static valueOf(value: string): i2.keycloak.f2.role.domain.features.query.RoleCompositeObjType;
        get name(): "USER" | "GROUP";
        get ordinal(): 0 | 1;
    }
}
export namespace i2.keycloak.f2.role.domain.features.query {
    class RoleGetByIdQuery {
        constructor(realmId: string, id: string, auth: i2.keycloak.master.domain.AuthRealm);
        get realmId(): string;
        get id(): string;
        get auth(): i2.keycloak.master.domain.AuthRealm;
    }
    class RoleGetByIdResult {
        constructor(item?: i2.keycloak.f2.role.domain.Role);
        get item(): Nullable<i2.keycloak.f2.role.domain.Role>;
    }
}
export namespace i2.keycloak.f2.role.domain.features.query {
    class RoleGetByNameQuery {
        constructor(realmId: string, auth: i2.keycloak.master.domain.AuthRealm, name: string);
        get realmId(): string;
        get auth(): i2.keycloak.master.domain.AuthRealm;
        get name(): string;
    }
    class RoleGetByNameResult {
        constructor(item?: i2.keycloak.f2.role.domain.Role);
        get item(): Nullable<i2.keycloak.f2.role.domain.Role>;
    }
}
export namespace i2.keycloak.f2.role.domain.features.query {
    class RolePageQuery {
        constructor(realmId: string, auth: i2.keycloak.master.domain.AuthRealm, page: f2.dsl.cqrs.page.PagePagination);
        get realmId(): string;
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
        constructor(roleName: string, composites: kotlin.collections.List<string>, auth: i2.keycloak.master.domain.AuthRealm, realmId: string);
        get roleName(): string;
        get composites(): kotlin.collections.List<string>;
        get auth(): i2.keycloak.master.domain.AuthRealm;
        get realmId(): string;
    }
    class RoleAddedCompositesEvent implements i2.keycloak.f2.commons.domain.KeycloakF2Result {
        constructor(id: string);
        get id(): string;
    }
}
export namespace i2.keycloak.f2.role.domain.features.command {
    class RoleCreateCommand implements i2.keycloak.f2.commons.domain.KeycloakF2Command {
        constructor(name: string, description?: string, isClientRole: boolean, composites: kotlin.collections.List<string>, auth: i2.keycloak.master.domain.AuthRealm, realmId: string);
        get name(): string;
        get description(): Nullable<string>;
        get isClientRole(): boolean;
        get composites(): kotlin.collections.List<string>;
        get auth(): i2.keycloak.master.domain.AuthRealm;
        get realmId(): string;
    }
    class RoleCreatedEvent implements i2.keycloak.f2.commons.domain.KeycloakF2Result {
        constructor(id: string);
        get id(): string;
    }
}
export namespace i2.keycloak.f2.role.domain.features.command {
    class RoleUpdateCommand implements i2.keycloak.f2.commons.domain.KeycloakF2Command {
        constructor(name: string, description?: string, isClientRole: boolean, composites: kotlin.collections.List<string>, auth: i2.keycloak.master.domain.AuthRealm, realmId: string);
        get name(): string;
        get description(): Nullable<string>;
        get isClientRole(): boolean;
        get composites(): kotlin.collections.List<string>;
        get auth(): i2.keycloak.master.domain.AuthRealm;
        get realmId(): string;
    }
    class RoleUpdatedEvent implements i2.keycloak.f2.commons.domain.KeycloakF2Result {
        constructor(id: string);
        get id(): string;
    }
}
export namespace i2.keycloak.f2.group.domain.features.command {
    class GroupCreateCommand implements i2.keycloak.f2.commons.domain.KeycloakF2Command {
        constructor(name: string, attributes: kotlin.collections.Map<string, string>, roles: kotlin.collections.List<string>, auth: i2.keycloak.master.domain.AuthRealm, realmId: string, parentGroupId?: string);
        get name(): string;
        get attributes(): kotlin.collections.Map<string, string>;
        get roles(): kotlin.collections.List<string>;
        get auth(): i2.keycloak.master.domain.AuthRealm;
        get realmId(): string;
        get parentGroupId(): Nullable<string>;
    }
    class GroupCreatedEvent implements i2.keycloak.f2.commons.domain.KeycloakF2Result {
        constructor(id: string);
        get id(): string;
    }
}
export namespace i2.keycloak.f2.group.domain.features.command {
    class GroupDisableCommand implements i2.keycloak.f2.commons.domain.KeycloakF2Command {
        constructor(id: string, realmId: string, auth: i2.keycloak.master.domain.AuthRealm);
        get id(): string;
        get realmId(): string;
        get auth(): i2.keycloak.master.domain.AuthRealm;
    }
    class GroupDisabledEvent implements f2.dsl.cqrs.Event {
        constructor(id: string);
        get id(): string;
    }
}
export namespace i2.keycloak.f2.group.domain.features.command {
    class GroupSetAttributesCommand implements i2.keycloak.f2.commons.domain.KeycloakF2Command {
        constructor(id: string, attributes: kotlin.collections.Map<string, Nullable<string>>, realmId: string, auth: i2.keycloak.master.domain.AuthRealm);
        get id(): string;
        get attributes(): kotlin.collections.Map<string, Nullable<string>>;
        get realmId(): string;
        get auth(): i2.keycloak.master.domain.AuthRealm;
    }
    class GroupSetAttributesEvent implements f2.dsl.cqrs.Event {
        constructor(id: string);
        get id(): string;
    }
}
export namespace i2.keycloak.f2.group.domain.features.command {
    class GroupUpdateCommand implements i2.keycloak.f2.commons.domain.KeycloakF2Command {
        constructor(id: string, name: string, attributes: kotlin.collections.Map<string, string>, roles: kotlin.collections.List<string>, auth: i2.keycloak.master.domain.AuthRealm, realmId: string);
        get id(): string;
        get name(): string;
        get attributes(): kotlin.collections.Map<string, string>;
        get roles(): kotlin.collections.List<string>;
        get auth(): i2.keycloak.master.domain.AuthRealm;
        get realmId(): string;
    }
    class GroupUpdatedEvent implements i2.keycloak.f2.commons.domain.KeycloakF2Result {
        constructor(id: string);
        get id(): string;
    }
}
export namespace city.smartb.im.organization.domain.features.command {
    interface OrganizationCreateCommandDTO extends f2.dsl.cqrs.Command {
        readonly siret?: string;
        readonly name: string;
        readonly description?: string;
        readonly address?: city.smartb.im.commons.model.AddressDTO;
        readonly website?: string;
        readonly roles: Nullable<any>/* Nullable<kotlin.collections.List<string>> */;
        readonly parentOrganizationId?: string;
        readonly attributes: Nullable<any>/* Nullable<kotlin.collections.Map<string, string>> */;

    }
    interface OrganizationCreatedEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;
        readonly parentOrganization?: string;

    }
}
export namespace city.smartb.im.organization.domain.features.command {
    interface OrganizationDeleteCommandDTO extends f2.dsl.cqrs.Command {
        readonly id: string;

    }
    interface OrganizationDeletedEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;

    }
}
export namespace city.smartb.im.organization.domain.features.command {
    interface OrganizationDisableCommandDTO extends f2.dsl.cqrs.Command {
        readonly id: string;
        readonly disabledBy?: string;
        readonly anonymize: boolean;
        readonly attributes: Nullable<any>/* Nullable<kotlin.collections.Map<string, string>> */;
        readonly userAttributes: Nullable<any>/* Nullable<kotlin.collections.Map<string, string>> */;

    }
    interface OrganizationDisabledEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;
        readonly userIds: kotlin.collections.List<string>;

    }
}
export namespace city.smartb.im.organization.domain.features.command {
    interface OrganizationUpdateCommandDTO extends f2.dsl.cqrs.Command {
        readonly id: string;
        readonly name: string;
        readonly description?: string;
        readonly address?: city.smartb.im.commons.model.AddressDTO;
        readonly website?: string;
        readonly roles: Nullable<any>/* Nullable<kotlin.collections.List<string>> */;
        readonly attributes: Nullable<any>/* Nullable<kotlin.collections.Map<string, string>> */;

    }
    interface OrganizationUpdatedResultDTO extends f2.dsl.cqrs.Event {
        readonly id: string;

    }
}
export namespace city.smartb.im.organization.domain.features.command {
    interface OrganizationUploadLogoCommandDTO extends f2.dsl.cqrs.Command {
        readonly id: string;

    }
    interface OrganizationUploadedLogoEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;
        readonly url: string;

    }
}
export namespace city.smartb.im.organization.domain.features.query {
    interface OrganizationGetFromInseeQueryDTO extends f2.dsl.cqrs.Query {
        readonly siret: string;

    }
    interface OrganizationGetFromInseeResultDTO extends f2.dsl.cqrs.Event {
        readonly item?: city.smartb.im.organization.domain.model.OrganizationDTO;

    }
}
export namespace city.smartb.im.organization.domain.features.query {
    interface OrganizationGetQueryDTO extends f2.dsl.cqrs.Query {
        readonly id: string;

    }
    interface OrganizationGetResultDTO<MODEL extends city.smartb.im.organization.domain.model.OrganizationDTO> extends f2.dsl.cqrs.Event {
        readonly item?: MODEL;

    }
}
export namespace city.smartb.im.organization.domain.features.query {
    interface OrganizationPageQueryDTO extends f2.dsl.cqrs.Query {
        readonly search?: string;
        readonly role?: string;
        readonly attributes: Nullable<any>/* Nullable<kotlin.collections.Map<string, string>> */;
        readonly withDisabled?: boolean;
        readonly page?: number;
        readonly size?: number;

    }
    interface OrganizationPageResultDTO<MODEL extends city.smartb.im.organization.domain.model.OrganizationDTO> extends f2.dsl.cqrs.page.PageDTO<MODEL> {
        readonly total: number;
        readonly items: kotlin.collections.List<MODEL>;

    }
}
export namespace city.smartb.im.organization.domain.features.query {
    interface OrganizationRefListQueryDTO extends f2.dsl.cqrs.Query {
        readonly withDisabled: boolean;

    }
    interface OrganizationRefListResultDTO extends f2.dsl.cqrs.Event {
        readonly items: kotlin.collections.List<city.smartb.im.organization.domain.model.OrganizationRefDTO>;

    }
}
export namespace city.smartb.im.organization.domain.model {
    interface OrganizationDTO {
        readonly id: string;
        readonly siret?: string;
        readonly name: string;
        readonly description?: string;
        readonly address?: city.smartb.im.commons.model.AddressDTO;
        readonly website?: string;
        readonly attributes: kotlin.collections.Map<string, string>;
        readonly roles: kotlin.collections.List<string>;
        readonly rolesComposites: i2.keycloak.f2.role.domain.RolesCompositeModel;
        readonly enabled: boolean;
        readonly disabledBy?: string;
        readonly creationDate: kotlin.Long;
        readonly disabledDate: Nullable<any>/* Nullable<kotlin.Long> */;

    }
}
export namespace city.smartb.im.organization.domain.model {
    interface OrganizationRefDTO {
        readonly id: string;
        readonly name: string;
        readonly roles: kotlin.collections.List<string>;

    }
}
export namespace city.smartb.im.organization.domain.policies {
    const OrganizationPolicies: {
        canGet(authedUser: city.smartb.im.commons.auth.AuthedUserDTO, organizationId: string): boolean;
        canList(authedUser: city.smartb.im.commons.auth.AuthedUserDTO): boolean;
        checkRefList(authedUser: city.smartb.im.commons.auth.AuthedUserDTO): boolean;
        canCreate(authedUser: city.smartb.im.commons.auth.AuthedUserDTO): boolean;
        canUpdate(authedUser: city.smartb.im.commons.auth.AuthedUserDTO, organizationId: string): boolean;
        canDisable(authedUser: city.smartb.im.commons.auth.AuthedUserDTO, organizationId: string): boolean;
        canDelete(authedUser: city.smartb.im.commons.auth.AuthedUserDTO, organizationId: string): boolean;
    };
}
export namespace i2.keycloak.f2.user.domain.features.command {
    class UserCreateCommand implements f2.dsl.cqrs.Command {
        constructor(realmId: string, username: string, firstname?: string, lastname?: string, email: string, isEnable: boolean, isEmailVerified: boolean, attributes: kotlin.collections.Map<string, string>, auth: i2.keycloak.master.domain.AuthRealm, password?: string, isPasswordTemporary?: boolean);
        get realmId(): string;
        get username(): string;
        get firstname(): Nullable<string>;
        get lastname(): Nullable<string>;
        get email(): string;
        get isEnable(): boolean;
        get isEmailVerified(): boolean;
        get attributes(): kotlin.collections.Map<string, string>;
        get auth(): i2.keycloak.master.domain.AuthRealm;
        get password(): Nullable<string>;
        get isPasswordTemporary(): boolean;
    }
    class UserCreatedEvent implements f2.dsl.cqrs.Event {
        constructor(id: string);
        get id(): string;
    }
}
export namespace i2.keycloak.f2.user.domain.features.command {
    class UserDeleteCommand implements i2.keycloak.f2.commons.domain.KeycloakF2Command {
        constructor(id: string, realmId: string, auth: i2.keycloak.master.domain.AuthRealm);
        get id(): string;
        get realmId(): string;
        get auth(): i2.keycloak.master.domain.AuthRealm;
    }
    class UserDeletedEvent implements f2.dsl.cqrs.Event {
        constructor(id: string);
        get id(): string;
    }
}
export namespace i2.keycloak.f2.user.domain.features.command {
    class UserDisableCommand implements f2.dsl.cqrs.Command {
        constructor(id: string, realmId: string, auth: i2.keycloak.master.domain.AuthRealm);
        get id(): string;
        get realmId(): string;
        get auth(): i2.keycloak.master.domain.AuthRealm;
    }
    class UserDisabledEvent implements f2.dsl.cqrs.Event {
        constructor(id: string);
        get id(): string;
    }
}
export namespace i2.keycloak.f2.user.domain.features.command {
    class UserEmailSendActionsCommand implements i2.keycloak.f2.commons.domain.KeycloakF2Command {
        constructor(userId: string, clientId?: string, redirectUri?: string, actions: kotlin.collections.List<string>, realmId: string, auth: i2.keycloak.master.domain.AuthRealm);
        get userId(): string;
        get clientId(): Nullable<string>;
        get redirectUri(): Nullable<string>;
        get actions(): kotlin.collections.List<string>;
        get realmId(): string;
        get auth(): i2.keycloak.master.domain.AuthRealm;
    }
    class UserEmailSentActionsEvent implements i2.keycloak.f2.commons.domain.KeycloakF2Result {
        constructor(id: string);
        get id(): string;
    }
}
export namespace i2.keycloak.f2.user.domain.features.command {
    class UserJoinGroupCommand implements i2.keycloak.f2.commons.domain.KeycloakF2Command {
        constructor(id: string, groupId: string, leaveOtherGroups?: boolean, realmId: string, auth: i2.keycloak.master.domain.AuthRealm);
        get id(): string;
        get groupId(): string;
        get leaveOtherGroups(): Nullable<boolean>;
        get realmId(): string;
        get auth(): i2.keycloak.master.domain.AuthRealm;
    }
    class UserJoinedGroupEvent implements i2.keycloak.f2.commons.domain.KeycloakF2Result {
        constructor(id: string, groupId: string, groupsLeft: kotlin.collections.List<string>);
        get id(): string;
        get groupId(): string;
        get groupsLeft(): kotlin.collections.List<string>;
    }
}
export namespace i2.keycloak.f2.user.domain.features.command {
    class UserRolesGrantCommand implements i2.keycloak.f2.commons.domain.KeycloakF2Command {
        constructor(id: string, roles: kotlin.collections.List<string>, auth: i2.keycloak.master.domain.AuthRealm, realmId?: string, clientId?: string);
        get id(): string;
        get roles(): kotlin.collections.List<string>;
        get auth(): i2.keycloak.master.domain.AuthRealm;
        get realmId(): string;
        get clientId(): Nullable<string>;
    }
    class UserRolesGrantedEvent implements f2.dsl.cqrs.Event {
        constructor(id: string);
        get id(): string;
    }
}
export namespace i2.keycloak.f2.user.domain.features.command {
    class UserRolesRevokeCommand implements i2.keycloak.f2.commons.domain.KeycloakF2Command {
        constructor(id: string, roles: kotlin.collections.List<string>, auth: i2.keycloak.master.domain.AuthRealm, realmId?: string);
        get id(): string;
        get roles(): kotlin.collections.List<string>;
        get auth(): i2.keycloak.master.domain.AuthRealm;
        get realmId(): string;
    }
    class UserRolesRevokedEvent implements f2.dsl.cqrs.Event {
        constructor(id: string);
        get id(): string;
    }
}
export namespace i2.keycloak.f2.user.domain.features.command {
    class UserRolesSetCommand implements i2.keycloak.f2.commons.domain.KeycloakF2Command {
        constructor(id: string, roles: kotlin.collections.List<string>, auth: i2.keycloak.master.domain.AuthRealm, realmId?: string);
        get id(): string;
        get roles(): kotlin.collections.List<string>;
        get auth(): i2.keycloak.master.domain.AuthRealm;
        get realmId(): string;
    }
    class UserRolesSetEvent implements f2.dsl.cqrs.Event {
        constructor(id: string);
        get id(): string;
    }
}
export namespace i2.keycloak.f2.user.domain.features.command {
    class UserSetAttributesCommand implements i2.keycloak.f2.commons.domain.KeycloakF2Command {
        constructor(id: string, attributes: kotlin.collections.Map<string, Nullable<string>>, realmId: string, auth: i2.keycloak.master.domain.AuthRealm);
        get id(): string;
        get attributes(): kotlin.collections.Map<string, Nullable<string>>;
        get realmId(): string;
        get auth(): i2.keycloak.master.domain.AuthRealm;
    }
    class UserSetAttributesEvent implements f2.dsl.cqrs.Event {
        constructor(id: string);
        get id(): string;
    }
}
export namespace i2.keycloak.f2.user.domain.features.command {
    class UserUpdateEmailCommand implements i2.keycloak.f2.commons.domain.KeycloakF2Command {
        constructor(userId: string, email: string, sendVerificationEmail: boolean, clientId?: string, redirectUri?: string, realmId: string, auth: i2.keycloak.master.domain.AuthRealm);
        get userId(): string;
        get email(): string;
        get sendVerificationEmail(): boolean;
        get clientId(): Nullable<string>;
        get redirectUri(): Nullable<string>;
        get realmId(): string;
        get auth(): i2.keycloak.master.domain.AuthRealm;
    }
    class UserUpdatedEmailEvent implements i2.keycloak.f2.commons.domain.KeycloakF2Result {
        constructor(userId: string);
        get userId(): string;
    }
}
export namespace i2.keycloak.f2.user.domain.features.command {
    class UserUpdateCommand implements f2.dsl.cqrs.Command {
        constructor(userId: string, realmId: string, auth: i2.keycloak.master.domain.AuthRealm, firstname?: string, lastname?: string, attributes: kotlin.collections.Map<string, string>);
        get userId(): string;
        get realmId(): string;
        get auth(): i2.keycloak.master.domain.AuthRealm;
        get firstname(): Nullable<string>;
        get lastname(): Nullable<string>;
        get attributes(): kotlin.collections.Map<string, string>;
    }
    class UserUpdatedEvent implements f2.dsl.cqrs.Event {
        constructor(id: string);
        get id(): string;
    }
}
export namespace i2.keycloak.f2.user.domain.features.command {
    class UserUpdatePasswordCommand implements i2.keycloak.f2.commons.domain.KeycloakF2Command {
        constructor(userId: string, password: string, realmId: string, auth: i2.keycloak.master.domain.AuthRealm);
        get userId(): string;
        get password(): string;
        get realmId(): string;
        get auth(): i2.keycloak.master.domain.AuthRealm;
    }
    class UserUpdatedPasswordEvent implements i2.keycloak.f2.commons.domain.KeycloakF2Result {
        constructor(userId: string);
        get userId(): string;
    }
}
export namespace i2.keycloak.f2.user.domain.features.query {
    class UserGetByEmailQuery implements i2.keycloak.f2.commons.domain.KeycloakF2Query {
        constructor(email: string, realmId: string, auth: i2.keycloak.master.domain.AuthRealm);
        get email(): string;
        get realmId(): string;
        get auth(): i2.keycloak.master.domain.AuthRealm;
    }
    class UserGetByEmailQueryResult implements f2.dsl.cqrs.Event {
        constructor(item?: i2.keycloak.f2.user.domain.model.UserModel);
        get item(): Nullable<i2.keycloak.f2.user.domain.model.UserModel>;
    }
}
export namespace i2.keycloak.f2.user.domain.features.query {
    class UserGetByUsernameQuery implements i2.keycloak.f2.commons.domain.KeycloakF2Query {
        constructor(realmId: string, username: string, auth: i2.keycloak.master.domain.AuthRealm);
        get realmId(): string;
        get username(): string;
        get auth(): i2.keycloak.master.domain.AuthRealm;
    }
    class UserGetByUsernameResult implements f2.dsl.cqrs.Event {
        constructor(item?: i2.keycloak.f2.user.domain.model.UserModel);
        get item(): Nullable<i2.keycloak.f2.user.domain.model.UserModel>;
    }
}
export namespace i2.keycloak.f2.user.domain.features.query {
    class UserGetQuery implements i2.keycloak.f2.commons.domain.KeycloakF2Query {
        constructor(id: string, realmId: string, auth: i2.keycloak.master.domain.AuthRealm);
        get id(): string;
        get realmId(): string;
        get auth(): i2.keycloak.master.domain.AuthRealm;
    }
    class UserGetResult implements f2.dsl.cqrs.Event {
        constructor(item?: i2.keycloak.f2.user.domain.model.UserModel);
        get item(): Nullable<i2.keycloak.f2.user.domain.model.UserModel>;
    }
}
export namespace i2.keycloak.f2.user.domain.features.query {
    class UserGetGroupsQuery implements i2.keycloak.f2.commons.domain.KeycloakF2Query {
        constructor(userId: string, realmId: string, auth: i2.keycloak.master.domain.AuthRealm);
        get userId(): string;
        get realmId(): string;
        get auth(): i2.keycloak.master.domain.AuthRealm;
    }
    class UserGetGroupsResult implements f2.dsl.cqrs.Event {
        constructor(items: kotlin.collections.List<i2.keycloak.f2.user.domain.model.UserGroup>);
        get items(): kotlin.collections.List<i2.keycloak.f2.user.domain.model.UserGroup>;
    }
}
export namespace i2.keycloak.f2.user.domain.features.query {
    class UserGetRolesQuery implements i2.keycloak.f2.commons.domain.KeycloakF2Query {
        constructor(userId: string, realmId: string, auth: i2.keycloak.master.domain.AuthRealm);
        get userId(): string;
        get realmId(): string;
        get auth(): i2.keycloak.master.domain.AuthRealm;
    }
    class UserGetRolesResult implements f2.dsl.cqrs.Event {
        constructor(roles: i2.keycloak.f2.role.domain.RolesCompositeModel);
        get roles(): i2.keycloak.f2.role.domain.RolesCompositeModel;
    }
}
export namespace i2.keycloak.f2.user.domain.features.query {
    class UserPageQuery implements i2.keycloak.f2.commons.domain.KeycloakF2Query {
        constructor(groupId?: string, search?: string, role?: string, attributes?: kotlin.collections.Map<string, string>, withDisabled: boolean, page: f2.dsl.cqrs.page.PagePagination, realmId: string, auth: i2.keycloak.master.domain.AuthRealm);
        get groupId(): Nullable<string>;
        get search(): Nullable<string>;
        get role(): Nullable<string>;
        get attributes(): kotlin.collections.Map<string, string>;
        get withDisabled(): boolean;
        get page(): f2.dsl.cqrs.page.PagePagination;
        get realmId(): string;
        get auth(): i2.keycloak.master.domain.AuthRealm;
    }
    class UserPageResult implements f2.dsl.cqrs.Event {
        constructor(items: f2.dsl.cqrs.page.Page<i2.keycloak.f2.user.domain.model.UserModel>);
        get items(): f2.dsl.cqrs.page.Page<i2.keycloak.f2.user.domain.model.UserModel>;
    }
}
export namespace i2.keycloak.f2.user.domain.model {
    class UserGroup {
        constructor(id: string, name: string, roles: kotlin.collections.List<string>);
        get id(): string;
        get name(): string;
        get roles(): kotlin.collections.List<string>;
    }
}
export namespace i2.keycloak.f2.user.domain.model {
    class UserModel {
        constructor(id: string, email?: string, firstName?: string, lastName?: string, roles: i2.keycloak.f2.role.domain.RolesCompositeModel, attributes: kotlin.collections.Map<string, string>, enabled: boolean, creationDate: kotlin.Long);
        get id(): string;
        get email(): Nullable<string>;
        get firstName(): Nullable<string>;
        get lastName(): Nullable<string>;
        get roles(): i2.keycloak.f2.role.domain.RolesCompositeModel;
        get attributes(): kotlin.collections.Map<string, string>;
        get enabled(): boolean;
        get creationDate(): kotlin.Long;
    }
}
export namespace city.smartb.im.user.domain.features.command {
    interface UserCreateCommandDTO extends f2.dsl.cqrs.Command {
        readonly email: string;
        readonly password?: string;
        readonly givenName: string;
        readonly familyName: string;
        readonly address: Nullable<city.smartb.im.commons.model.AddressDTO>/* Nullable<city.smartb.im.commons.model.Address> */;
        readonly phone?: string;
        readonly roles: kotlin.collections.List<string>;
        readonly memberOf?: string;
        readonly attributes: Nullable<any>/* Nullable<kotlin.collections.Map<string, string>> */;
        readonly isEmailVerified: boolean;
        readonly isPasswordTemporary: boolean;
        readonly sendResetPassword: boolean;
        readonly sendVerifyEmail: boolean;

    }
    interface UserCreatedEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;

    }
}
export namespace city.smartb.im.user.domain.features.command {
    interface UserDeleteCommandDTO extends f2.dsl.cqrs.Command {
        readonly id: string;

    }
    interface UserDeletedEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;

    }
}
export namespace city.smartb.im.user.domain.features.command {
    interface UserDisableCommandDTO extends f2.dsl.cqrs.Command {
        readonly id: string;
        readonly disabledBy?: string;
        readonly anonymize: boolean;
        readonly attributes: Nullable<any>/* Nullable<kotlin.collections.Map<string, string>> */;

    }
    interface UserDisabledEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;

    }
}
export namespace city.smartb.im.user.domain.features.command {
    interface UserResetPasswordCommandDTO extends f2.dsl.cqrs.Command {
        readonly id: string;

    }
    interface UserResetPasswordEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;

    }
}
export namespace city.smartb.im.user.domain.features.command {
    interface UserUpdateEmailCommandDTO extends f2.dsl.cqrs.Command {
        readonly id: string;
        readonly email: string;
        readonly sendVerificationEmail: boolean;

    }
    interface UserUpdatedEmailEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;

    }
}
export namespace city.smartb.im.user.domain.features.command {
    interface UserUpdateCommandDTO extends f2.dsl.cqrs.Command {
        readonly id: string;
        readonly givenName: string;
        readonly familyName: string;
        readonly address: Nullable<city.smartb.im.commons.model.AddressDTO>/* Nullable<city.smartb.im.commons.model.Address> */;
        readonly phone?: string;
        readonly memberOf?: string;
        readonly roles: kotlin.collections.List<string>;
        readonly attributes: Nullable<any>/* Nullable<kotlin.collections.Map<string, string>> */;

    }
    interface UserUpdatedEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;

    }
}
export namespace city.smartb.im.user.domain.features.command {
    interface UserUpdatePasswordCommandDTO extends f2.dsl.cqrs.Command {
        readonly id: string;
        readonly password: string;

    }
    interface UserUpdatedPasswordEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;

    }
}
export namespace city.smartb.im.user.domain.features.command {
    interface UserUploadLogoCommandDTO extends f2.dsl.cqrs.Command {
        readonly id: string;

    }
    interface UserUploadedLogoEventDTO extends f2.dsl.cqrs.Event {
        readonly id: string;
        readonly url: string;

    }
}
export namespace city.smartb.im.user.domain.features.query {
    interface UserExistsByEmailQueryDTO extends f2.dsl.cqrs.Query {
        readonly email: string;

    }
    interface UserExistsByEmailResultDTO extends f2.dsl.cqrs.Event {
        readonly item: boolean;

    }
}
export namespace city.smartb.im.user.domain.features.query {
    interface UserGetByEmailQueryDTO extends f2.dsl.cqrs.Query {
        readonly email: string;

    }
    interface UserGetByEmailResultDTO extends f2.dsl.cqrs.Event {
        readonly item?: city.smartb.im.user.domain.model.UserDTO;

    }
}
export namespace city.smartb.im.user.domain.features.query {
    interface UserGetQueryDTO extends f2.dsl.cqrs.Query {
        readonly id: string;

    }
    interface UserGetResultDTO extends f2.dsl.cqrs.Event {
        readonly item?: city.smartb.im.user.domain.model.UserDTO;

    }
}
export namespace city.smartb.im.user.domain.features.query {
    interface UserPageQueryDTO extends f2.dsl.cqrs.Query {
        readonly organizationId?: string;
        readonly search?: string;
        readonly role?: string;
        readonly attributes: Nullable<any>/* Nullable<kotlin.collections.Map<string, string>> */;
        readonly withDisabled: boolean;
        readonly page?: number;
        readonly size?: number;

    }
    interface UserPageResultDTO extends f2.dsl.cqrs.Event {
        readonly items: kotlin.collections.List<city.smartb.im.user.domain.model.UserDTO>;
        readonly total: number;

    }
}
export namespace city.smartb.im.user.domain.model {
    interface UserDTO {
        readonly id: string;
        readonly memberOf?: city.smartb.im.organization.domain.model.OrganizationRefDTO;
        readonly email: string;
        readonly givenName: string;
        readonly familyName: string;
        readonly address?: city.smartb.im.commons.model.AddressDTO;
        readonly phone?: string;
        readonly roles: kotlin.collections.List<string>;
        readonly rolesComposites: i2.keycloak.f2.role.domain.RolesCompositeModel;
        readonly attributes: kotlin.collections.Map<string, string>;
        readonly enabled: boolean;
        readonly disabledBy?: string;
        readonly creationDate: kotlin.Long;
        readonly disabledDate: Nullable<any>/* Nullable<kotlin.Long> */;

    }
}
export namespace city.smartb.im.user.domain.policies {
    const UserPolicies: {
        canGet(authedUser: city.smartb.im.commons.auth.AuthedUserDTO, user?: city.smartb.im.user.domain.model.UserDTO): boolean;
        canPage(authedUser: city.smartb.im.commons.auth.AuthedUserDTO): boolean;
        checkRefList(authedUser: city.smartb.im.commons.auth.AuthedUserDTO): boolean;
        canCreate(authedUser: city.smartb.im.commons.auth.AuthedUserDTO): boolean;
        canUpdate(authedUser: city.smartb.im.commons.auth.AuthedUserDTO, userId: string): boolean;
        canDisable(authedUser: city.smartb.im.commons.auth.AuthedUserDTO, userId: string): boolean;
        canDelete(authedUser: city.smartb.im.commons.auth.AuthedUserDTO, userId: string): boolean;
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
        static get Companion(): {
        };
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
        readonly transitions: kotlin.collections.List<ssm.chaincode.dsl.model.SsmTransitionDTO>;

    }
    class Ssm implements ssm.chaincode.dsl.model.SsmDTO {
        constructor(name: string, transitions: kotlin.collections.List<ssm.chaincode.dsl.model.SsmTransition>);
        get name(): string;
        get transitions(): kotlin.collections.List<ssm.chaincode.dsl.model.SsmTransition>;
        component1(): string;
        component2(): kotlin.collections.List<ssm.chaincode.dsl.model.SsmTransition>;
        copy(name?: string, transitions?: kotlin.collections.List<ssm.chaincode.dsl.model.SsmTransition>): ssm.chaincode.dsl.model.Ssm;
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
        readonly private: Nullable<any>/* Nullable<kotlin.collections.Map<string, string>> */;

    }
    class SsmContext implements ssm.chaincode.dsl.model.SsmContextDTO {
        constructor(session: string, _public: string, iteration: number, _private?: Nullable<any>/* Nullable<kotlin.collections.Map<string, string>> */);
        get session(): string;
        get public(): string;
        get iteration(): number;
        get private(): Nullable<any>/* Nullable<kotlin.collections.Map<string, string>> */;
        component1(): string;
        component2(): string;
        component3(): number;
        component4(): Nullable<any>/* Nullable<kotlin.collections.Map<string, string>> */;
        copy(session?: string, _public?: string, iteration?: number, _private?: Nullable<any>/* Nullable<kotlin.collections.Map<string, string>> */): ssm.chaincode.dsl.model.SsmContext;
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
        copy(user?: string, iteration?: number, credits?: kotlin.collections.Map<string, ssm.chaincode.dsl.model.Credit>): ssm.chaincode.dsl.model.SsmGrant;
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
        readonly roles: Nullable<any>/* Nullable<kotlin.collections.Map<string, string>> */;
        readonly public?: any;
        readonly private: Nullable<any>/* Nullable<kotlin.collections.Map<string, string>> */;

    }
    class SsmSession implements ssm.chaincode.dsl.model.SsmSessionDTO {
        constructor(ssm: string, session: string, roles: kotlin.collections.Map<string, string>, _public: string, _private?: Nullable<any>/* Nullable<kotlin.collections.Map<string, string>> */);
        get ssm(): string;
        get session(): string;
        get roles(): kotlin.collections.Map<string, string>;
        get public(): string;
        get private(): Nullable<any>/* Nullable<kotlin.collections.Map<string, string>> */;
    }
}
export namespace ssm.chaincode.dsl.model {
    interface SsmSessionStateDTO extends ssm.chaincode.dsl.model.SsmSessionDTO, ssm.chaincode.dsl.model.WithPrivate {
        readonly ssm?: string;
        readonly session: string;
        readonly roles: Nullable<any>/* Nullable<kotlin.collections.Map<string, string>> */;
        readonly public?: any;
        readonly private: Nullable<any>/* Nullable<kotlin.collections.Map<string, string>> */;
        readonly origin?: ssm.chaincode.dsl.model.SsmTransitionDTO;
        readonly current: number;
        readonly iteration: number;

    }
    class SsmSessionState implements ssm.chaincode.dsl.model.SsmSessionStateDTO {
        constructor(ssm?: string, session: string, roles: Nullable<any>/* Nullable<kotlin.collections.Map<string, string>> */, _public?: any, _private?: Nullable<any>/* Nullable<kotlin.collections.Map<string, string>> */, origin?: ssm.chaincode.dsl.model.SsmTransition, current: number, iteration: number);
        get ssm(): Nullable<string>;
        get session(): string;
        get roles(): Nullable<any>/* Nullable<kotlin.collections.Map<string, string>> */;
        get public(): Nullable<any>;
        get private(): Nullable<any>/* Nullable<kotlin.collections.Map<string, string>> */;
        get origin(): Nullable<ssm.chaincode.dsl.model.SsmTransition>;
        get current(): number;
        get iteration(): number;
        component1(): Nullable<string>;
        component2(): string;
        component3(): Nullable<any>/* Nullable<kotlin.collections.Map<string, string>> */;
        component4(): Nullable<any>;
        component5(): Nullable<any>/* Nullable<kotlin.collections.Map<string, string>> */;
        component6(): Nullable<ssm.chaincode.dsl.model.SsmTransition>;
        component7(): number;
        component8(): number;
        copy(ssm?: string, session?: string, roles?: Nullable<any>/* Nullable<kotlin.collections.Map<string, string>> */, _public?: any, _private?: Nullable<any>/* Nullable<kotlin.collections.Map<string, string>> */, origin?: ssm.chaincode.dsl.model.SsmTransition, current?: number, iteration?: number): ssm.chaincode.dsl.model.SsmSessionState;
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
        readonly private: Nullable<any>/* Nullable<kotlin.collections.Map<string, string>> */;

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
        static get Companion(): {
            get PARTS(): number;
            get PREFIX(): string;
        };
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
        static get Companion(): {
            get PARTS(): number;
            get PREFIX(): string;
        };
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
        copy(ssmName?: string, sessionName?: string, logs?: kotlin.collections.List<ssm.chaincode.dsl.model.SsmSessionStateLog>): ssm.chaincode.dsl.query.SsmGetSessionLogsQueryResult;
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
        static S2Automate_init_$Create$(seen1: number, name?: string, version?: string, transitions?: Array<s2.dsl.automate.S2Transition>, serializationConstructorMarker: Nullable<any>/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): s2.dsl.automate.S2Automate;
        static get Companion(): {
            serializer(): kotlinx.serialization.KSerializer<s2.dsl.automate.S2Automate>;
        };
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
        readonly payload: kotlin.collections.Map<string, string>;

    }
    class S2ErrorBase implements s2.dsl.automate.S2Error {
        constructor(type: string, description: string, date: string, payload: kotlin.collections.Map<string, string>);
        get type(): string;
        get description(): string;
        get date(): string;
        get payload(): kotlin.collections.Map<string, string>;
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
        constructor(automate: s2.dsl.automate.S2Automate, startsOn?: kotlin.collections.List<kotlin.reflect.KClass<f2.dsl.cqrs.Message>>, endsOn?: kotlin.collections.List<kotlin.reflect.KClass<f2.dsl.cqrs.Message>>, autostart?: boolean, blocking?: boolean, singleton?: boolean);
        get automate(): s2.dsl.automate.S2Automate;
        get startsOn(): kotlin.collections.List<kotlin.reflect.KClass<f2.dsl.cqrs.Message>>;
        get endsOn(): kotlin.collections.List<kotlin.reflect.KClass<f2.dsl.cqrs.Message>>;
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
        static S2Transition_init_$Create$(seen1: number, from?: s2.dsl.automate.S2StateValue, to?: s2.dsl.automate.S2StateValue, role?: s2.dsl.automate.S2RoleValue, action?: s2.dsl.automate.S2TransitionValue, result?: s2.dsl.automate.S2TransitionValue, serializationConstructorMarker: Nullable<any>/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): s2.dsl.automate.S2Transition;
        static get Companion(): {
            serializer(): kotlinx.serialization.KSerializer<s2.dsl.automate.S2Transition>;
        };
        static get $serializer(): {
        } & kotlinx.serialization.internal.GeneratedSerializer<s2.dsl.automate.S2Transition>;
    }
    class S2TransitionValue {
        constructor(name: string);
        get name(): string;
        static S2TransitionValue_init_$Create$(seen1: number, name?: string, serializationConstructorMarker: Nullable<any>/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): s2.dsl.automate.S2TransitionValue;
        static get Companion(): {
            serializer(): kotlinx.serialization.KSerializer<s2.dsl.automate.S2TransitionValue>;
        };
        static get $serializer(): {
        } & kotlinx.serialization.internal.GeneratedSerializer<s2.dsl.automate.S2TransitionValue>;
    }
    class S2RoleValue {
        constructor(name: string);
        get name(): string;
        static S2RoleValue_init_$Create$(seen1: number, name?: string, serializationConstructorMarker: Nullable<any>/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): s2.dsl.automate.S2RoleValue;
        static get Companion(): {
            serializer(): kotlinx.serialization.KSerializer<s2.dsl.automate.S2RoleValue>;
        };
        static get $serializer(): {
        } & kotlinx.serialization.internal.GeneratedSerializer<s2.dsl.automate.S2RoleValue>;
    }
    class S2StateValue {
        constructor(name: string, position: number);
        get name(): string;
        get position(): number;
        static S2StateValue_init_$Create$(seen1: number, name?: string, position: number, serializationConstructorMarker: Nullable<any>/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): s2.dsl.automate.S2StateValue;
        static get Companion(): {
            serializer(): kotlinx.serialization.KSerializer<s2.dsl.automate.S2StateValue>;
        };
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
        readonly id: string;
        readonly memberOf?: string;
        readonly roles: Array<string>;

    }
}
export namespace city.smartb.registry.program.api.commons.auth {
    const Roles: {
        get ADMIN(): string;
        get USER(): string;
        get ONBOARDING_USER(): string;
        get FUB(): string;
        get SUPPORT(): string;
        get BENEFICIARY(): string;
        get PROVIDER_COUNSELING(): string;
        get PROVIDER_EQUIPMENT(): string;
        get PROVIDER_TRAINING(): string;
        get ONBOARDING(): string;
        get UNCHARTED(): string;
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
        quotations(): string;
        projects(): string;
    };
}
export namespace city.smartb.registry.program.s2.asset.domain.automate {
    interface AssetInitCommand extends s2.dsl.automate.S2InitCommand {

    }
    interface AssetCommand extends s2.dsl.automate.S2Command<string> {
        readonly id: string;

    }
    interface AssetEvent extends f2.dsl.cqrs.Event, s2.dsl.automate.WithId<string> {
        readonly id: string;

    }
}
export namespace city.smartb.registry.program.s2.asset.domain.command {
    interface AssetDeletedEventDTO extends city.smartb.registry.program.s2.asset.domain.automate.AssetEvent {
        readonly id: string;

    }
}
export namespace city.smartb.registry.program.s2.asset.domain.command {
    interface AssetUpdatedEventDTO extends city.smartb.registry.program.s2.asset.domain.automate.AssetEvent {
        readonly id: string;

    }
}
export namespace city.smartb.registry.program.f2.asset.domain.policy {
    const AssetPolicies: {
        canList(authedUser: city.smartb.registry.program.api.commons.auth.AuthedUserDTO): boolean;
        canCreate(authedUser: city.smartb.registry.program.api.commons.auth.AuthedUserDTO): boolean;
        canUpdate(authedUser: city.smartb.registry.program.api.commons.auth.AuthedUserDTO, asset: s2.dsl.automate.model.WithS2State<s2.dsl.automate.S2State/* city.smartb.registry.program.s2.asset.domain.automate.AssetState */>/* city.smartb.registry.program.s2.asset.domain.model.AssetDTO */): boolean;
        canDelete(authedUser: city.smartb.registry.program.api.commons.auth.AuthedUserDTO, asset: s2.dsl.automate.model.WithS2State<s2.dsl.automate.S2State/* city.smartb.registry.program.s2.asset.domain.automate.AssetState */>/* city.smartb.registry.program.s2.asset.domain.model.AssetDTO */): boolean;
    };
}
export namespace city.smartb.registry.program.f2.asset.domain.query {
    interface AssetGetQueryDTO {
        readonly id: string;

    }
    interface AssetGetResultDTO {
        readonly item: Nullable<s2.dsl.automate.model.WithS2State<s2.dsl.automate.S2State/* city.smartb.registry.program.s2.asset.domain.automate.AssetState */>>/* Nullable<city.smartb.registry.program.s2.asset.domain.model.AssetDTO> */;

    }
}
export namespace city.smartb.registry.program.f2.asset.domain.query {
    interface AssetPageQueryDTO {
        readonly name?: string;
        readonly offset?: number;
        readonly limit?: number;

    }
    interface AssetPageResultDTO extends f2.dsl.cqrs.page.PageDTO<s2.dsl.automate.model.WithS2State<s2.dsl.automate.S2State/* city.smartb.registry.program.s2.asset.domain.automate.AssetState */>/* city.smartb.registry.program.s2.asset.domain.model.AssetDTO */> {
        readonly total: number;
        readonly items: kotlin.collections.List<city.smartb.registry.program.s2.asset.domain.model.AssetDTO>;

    }
}
export as namespace verified_emission_reduction_registry_asset_f2_domain;