import { QueryParams, useQueryRequest } from "utils"
import { city } from "verified-emission-reduction-registry-project-f2-domain"
import { useNoAuthenticatedRequest } from "../../config"

export interface ProjectPageQuery extends city.smartb.registry.program.f2.project.domain.query.ProjectPageQueryDTO { }
export interface ProjectPageResult extends city.smartb.registry.program.f2.project.domain.query.ProjectPageResultDTO { }

export const useProjectPageQuery = (params: QueryParams<ProjectPageQuery, ProjectPageResult>) => {
  const requestProps = useNoAuthenticatedRequest("projectPage")
  return useQueryRequest<ProjectPageQuery, ProjectPageResult>(
    requestProps, params
  )
}


export interface ProjectGetQuery extends city.smartb.registry.program.f2.project.domain.query.ProjectGetQueryDTO { }
export interface ProjectGetResult extends city.smartb.registry.program.f2.project.domain.query.ProjectGetResultDTO { }

export const useProjectGetQuery = (params: QueryParams<ProjectGetQuery, ProjectGetResult>) => {
  const requestProps = useNoAuthenticatedRequest("projectGet")
  return useQueryRequest<ProjectGetQuery, ProjectGetResult>(
    requestProps, params
  )
}