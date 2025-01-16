import { QueryParams, useQueryRequest, useFetchBinary } from "@komune-io/g2-utils"
import {io} from "registry-platform-api-api-js-export";
import { useNoAuthenticatedRequest } from "../../config"
import { useQuery } from "@tanstack/react-query";
import {useCallback} from "react"
import {request} from "@komune-io/g2-utils";
import { Message } from "components";
import {QueryOptions} from "@komune-io/g2";

export interface ProjectListFilesQuery extends io.komune.registry.f2.project.domain.query.ProjectListFilesQueryDTO  { }
export interface ProjectListFilesResult extends io.komune.registry.f2.project.domain.query.ProjectListFilesResultDTO  { }


export const useProjectListFilesQuery = (params: QueryParams<ProjectListFilesQuery, ProjectListFilesResult>) => {
  const requestProps = useNoAuthenticatedRequest()
  return useQueryRequest<ProjectListFilesQuery, ProjectListFilesResult>(
    "project/projectListFiles", requestProps, params
  )
}

export interface ChatAskQuestionQuery extends io.komune.registry.f2.chat.domain.query.ChatAskQuestionQueryDTO  { }
export interface ChatAskQuestionResult extends io.komune.registry.f2.chat.domain.query.ChatAskQuestionResultDTO  { }

export const askQuestion = async (message: string, history: Message[], targetedFiles?: string[], projectId?: string) => {
  const res = await request<ChatAskQuestionResult[]>({
    method: "POST",
    //@ts-ignore
    url: window._env_.platform.url + "/chatAskQuestion",
    body: JSON.stringify({
      question: message,
      history: history.map((message) => ({...message, additional_kwargs: {}})),
      metadata: {targetedFiles},
      projectId
    } as ChatAskQuestionQuery),
    returnType: "json"
  })
  return res ? res[0]?.item : undefined
}


export interface ProjectDownloadFileQuery extends io.komune.registry.f2.project.domain.query.ProjectDownloadFileQueryDTO  { }

export const useProjectDownloadFileQuery = (): (query?: (ProjectDownloadFileQuery | undefined)) => Promise<string | undefined>  => {
  const requestProps = useNoAuthenticatedRequest()
  return useFetchBinary<ProjectDownloadFileQuery>("projectDownloadFile", requestProps)
}

type ProjectDownloadFileQueries = (ProjectDownloadFileQuery | undefined)[]
type ProjectDownloadFileResults = (String | undefined)[]

export const useProjectFilesQuery = (queries: ProjectDownloadFileQueries, options?: QueryOptions<ProjectDownloadFileQueries, ProjectDownloadFileResults>) => {
  const download = useProjectDownloadFileQuery()
  const getAllFiles = useCallback(
    async () => {
      const all = queries.map((query) => download(query))
      const files = await Promise.all(all)
      return files
    },
    [queries, download],
  )
  
  return {
    ... useQuery({
      queryKey: ["projectFiles", queries],
      queryFn: getAllFiles,
      ...options
    }),
    key: "projectFiles",
  }
}

export interface FilePath extends io.komune.fs.s2.file.domain.model.FilePathDTO  { }

