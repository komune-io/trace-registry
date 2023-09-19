import { QueryParams, useQueryRequest } from "@smartb/g2-utils"
import { city } from "verified-emission-reduction-registry-project-f2-domain"
import { useNoAuthenticatedRequest } from "../../config"

export interface ProjectPageQuery extends city.smartb.registry.f2.project.domain.query.ProjectPageQueryDTO { }
export interface ProjectPageResult extends city.smartb.registry.f2.project.domain.query.ProjectPageResultDTO { }

export const useProjectPageQuery = (params: QueryParams<ProjectPageQuery, ProjectPageResult>) => {
  const requestProps = useNoAuthenticatedRequest()
  return useQueryRequest<ProjectPageQuery, ProjectPageResult>(
    "projectPage", requestProps, params
  )
}


export interface ProjectGetQuery extends city.smartb.registry.f2.project.domain.query.ProjectGetQueryDTO { }
export interface ProjectGetResult extends city.smartb.registry.f2.project.domain.query.ProjectGetResultDTO { }

export const useProjectGetQuery = (params: QueryParams<ProjectGetQuery, ProjectGetResult>) => {
  const requestProps = useNoAuthenticatedRequest()
  return useQueryRequest<ProjectGetQuery, ProjectGetResult>(
    "projectGet", requestProps, params
  )
}