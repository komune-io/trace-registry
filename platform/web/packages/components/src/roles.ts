import { QueryParams, imConfig, useQueryRequest } from "@komune-io/g2"
import { io } from "@komune-io/im-privilege-domain"
import { useMemo } from "react"
import { useOidcAccessToken } from '@axa-fr/react-oidc'

export interface Role extends io.komune.im.f2.privilege.domain.role.model.RoleDTO { }

export interface Permission extends io.komune.im.f2.privilege.domain.permission.model.PermissionDTO { }

export const RoleTargetValues = io.komune.im.f2.privilege.domain.role.model.RoleTargetValues

export interface RoleListQuery extends io.komune.im.f2.privilege.domain.role.query.RoleListQueryDTO { }

export interface RoleListResult extends io.komune.im.f2.privilege.domain.role.query.RoleListResultDTO { }

export const useRoleListQuery = (params: QueryParams<RoleListQuery, RoleListResult>) => {
    const { accessToken } = useOidcAccessToken()
    const requestProps = useMemo(() => ({
        url: imConfig().url,
        jwt: accessToken
    }), [accessToken])
    return useQueryRequest<RoleListQuery, RoleListResult>(
        "roleList", requestProps, params
    )
}

export interface PermissionListQuery extends io.komune.im.f2.privilege.domain.permission.query.PermissionListQueryDTO { }

export interface PermissionListResult extends io.komune.im.f2.privilege.domain.permission.query.PermissionListResultDTO { }

export const usePermissionListQuery = (params: QueryParams<PermissionListQuery, PermissionListResult>) => {
    const { accessToken } = useOidcAccessToken()
    const requestProps = useMemo(() => ({
        url: imConfig().url,
        jwt: accessToken
    }), [accessToken])
    return useQueryRequest<PermissionListQuery, PermissionListResult>(
        "permissionList", requestProps, params
    )
}

export const userAdminRoles = [
    "tr_orchestrator_admin",
    "tr_project_manager_admin",
    "tr_stakeholder_admin"
] as const

export const userBaseRoles = [
    "tr_orchestrator_user",
    "tr_project_manager_user",
    "tr_stakeholder_user",
] as const

export const userRoles = [
    "super_admin",
    ...userAdminRoles,
    ...userBaseRoles
] as const

export const orgRoles = [
    "tr_orchestrator",
    "tr_project_manager",
    "tr_stakeholder"
] as const


export const userEffectiveRoles = [...userRoles, ...orgRoles]
export type Roles = typeof userEffectiveRoles[number]

