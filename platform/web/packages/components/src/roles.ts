import { QueryParams, i2Config, useQueryRequest } from "@smartb/g2"
import { city } from "@smartb/privilege-domain"
import { useMemo } from "react"
import { useOidcAccessToken } from '@axa-fr/react-oidc'

export interface Role extends city.smartb.im.f2.privilege.domain.role.model.RoleDTO { }

export interface Permission extends city.smartb.im.f2.privilege.domain.permission.model.PermissionDTO { }

export const RoleTargetValues = city.smartb.im.f2.privilege.domain.role.model.RoleTargetValues

export interface RoleListQuery extends city.smartb.im.f2.privilege.domain.role.query.RoleListQueryDTO { }

export interface RoleListResult extends city.smartb.im.f2.privilege.domain.role.query.RoleListResultDTO { }

export const useRoleListQuery = (params: QueryParams<RoleListQuery, RoleListResult>) => {
    const { accessToken } = useOidcAccessToken()
    const requestProps = useMemo(() => ({
        url: i2Config().url,
        jwt: accessToken
    }), [accessToken])
    return useQueryRequest<RoleListQuery, RoleListResult>(
        "roleList", requestProps, params
    )
}

export interface PermissionListQuery extends city.smartb.im.f2.privilege.domain.permission.query.PermissionListQueryDTO { }

export interface PermissionListResult extends city.smartb.im.f2.privilege.domain.permission.query.PermissionListResultDTO { }

export const usePermissionListQuery = (params: QueryParams<PermissionListQuery, PermissionListResult>) => {
    const { accessToken } = useOidcAccessToken()
    const requestProps = useMemo(() => ({
        url: i2Config().url,
        jwt: accessToken
    }), [accessToken])
    return useQueryRequest<PermissionListQuery, PermissionListResult>(
        "permissionList", requestProps, params
    )
}

export const permissions = [
    "im_user_read",
    "im_user_write",
    "im_organization_read",
    "im_organization_write_own",
    "im_organization_write",
    "im_role_read",
    "im_role_write",
    "im_apikey_read",
    "im_apikey_write"
] as const

export type Permissions = typeof permissions[number]

export const mutablePermissions: Permissions[] = [...permissions]
