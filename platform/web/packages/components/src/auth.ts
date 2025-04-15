import { useAuth, KeycloackService } from "@komune-io/g2"
import { Roles, userEffectiveRoles, } from "./roles";
import { Routes, routesAuthorizations, RoutesRoles } from "./routes";
import {io} from "registry-platform-api-api-js-export";

type StaticServices = {
    hasUserRouteAuth: {
        returnType: boolean;
        paramsType: {
            route: Routes,
            authorizedUserId?: string
            authorizedUserOrgId?: string
        }
    }
}

const staticServices: KeycloackService<StaticServices, Roles> = {
    hasUserRouteAuth: (_, services, params) => {
        const { route = "", authorizedUserId, authorizedUserOrgId } = params ?? {}
        const currentUser = services.getUser()
        const isAuthedUserId = !!authorizedUserId && currentUser?.id === authorizedUserId
        const isAuthedOrgId = !!authorizedUserOrgId && currentUser?.memberOf === authorizedUserOrgId
        const authorizations = routesAuthorizations[route]
        if (authorizations === "open") return true
        else return checkRelations(authorizations, isAuthedUserId, isAuthedOrgId, services.hasRole)
    }
}

const policies = {
    catalogue: io.komune.registry.f2.catalogue.domain.CataloguePolicies,
    draft: io.komune.registry.f2.catalogue.draft.domain.CatalogueDraftPolicies,
}

export type Policies = typeof policies


export const useExtendedAuth = () => {
    return useAuth<StaticServices, Roles, Policies>(userEffectiveRoles, staticServices, policies)
}

const matches = (authorization: RoutesRoles, isAuthedUserId: boolean, isAuthedOrgId: boolean, hasRole: (roles: (Roles)[]) => boolean) => {
    if (authorization === "currentUser") {
        return isAuthedUserId
    }
    if (authorization === "memberOf") {
        return isAuthedOrgId
    }
    return hasRole([authorization])
}

const checkRelations = (authorizations: RoutesRoles[] | RoutesRoles[][], isAuthedUserId: boolean, isAuthedOrgId: boolean, hasRole: (roles: (Roles)[]) => boolean) => {
    return authorizations.some((roles: any) => {
        if (Array.isArray(roles)) {
            return roles.every(role => matches(role, isAuthedUserId, isAuthedOrgId, hasRole))
        } else {
            return matches(roles, isAuthedUserId, isAuthedOrgId, hasRole)
        }
    })
}
