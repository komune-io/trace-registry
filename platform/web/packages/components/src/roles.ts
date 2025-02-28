
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

