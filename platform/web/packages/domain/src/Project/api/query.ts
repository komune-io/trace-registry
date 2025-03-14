import { QueryParams, useQueryRequest } from "@komune-io/g2-utils"
import {io} from "registry-platform-api-api-js-export";
import {useNoAuthenticatedRequest} from "@komune-io/g2";

export interface ProjectPageQuery extends io.komune.registry.f2.project.domain.query.ProjectPageQueryDTO { }
export interface ProjectPageResult extends io.komune.registry.f2.project.domain.query.ProjectPageResultDTO { }

export const useProjectPageQuery = (params: QueryParams<ProjectPageQuery, ProjectPageResult>) => {
  const requestProps = useNoAuthenticatedRequest()
  return useQueryRequest<ProjectPageQuery, ProjectPageResult>(
    "project/projectPage", requestProps, params
  )
}


export interface ProjectGetQuery extends io.komune.registry.f2.project.domain.query.ProjectGetQueryDTO { }
export interface ProjectGetResult extends io.komune.registry.f2.project.domain.query.ProjectGetResultDTO { }

export const useProjectGetQuery = (params: QueryParams<ProjectGetQuery, ProjectGetResult>) => {
  const requestProps = useNoAuthenticatedRequest()
  return useQueryRequest<ProjectGetQuery, ProjectGetResult>(
    "project/projectGet", requestProps, params
  )
}