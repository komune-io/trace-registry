import { QueryParams, useQueryRequest, useFetchBinary } from "@smartb/g2-utils"
import { city } from "verified-emission-reduction-registry-project-f2-domain"
import { useNoAuthenticatedRequest } from "../../config"

export interface ProjectListFilesQuery extends city.smartb.registry.program.f2.project.domain.query.ProjectListFilesQueryDTO  { }
export interface ProjectListFilesResult extends city.smartb.registry.program.f2.project.domain.query.ProjectListFilesResultDTO  { }


export const useProjectListFilesQuery = (params: QueryParams<ProjectListFilesQuery, ProjectListFilesResult>) => {
  const requestProps = useNoAuthenticatedRequest()
  return useQueryRequest<ProjectListFilesQuery, ProjectListFilesResult>(
    "projectListFiles", requestProps, params
  )
}

export interface ProjectDownloadFileQuery extends city.smartb.registry.program.f2.project.domain.query.ProjectDownloadFileQueryDTO  { }

export const useProjectDownloadFileQuery = (): (query?: (ProjectDownloadFileQuery | undefined)) => Promise<string | undefined>  => {
  const requestProps = useNoAuthenticatedRequest()
  return useFetchBinary<ProjectDownloadFileQuery>("projectDownloadFile", requestProps)
}

