import { QueryParams, useQueryRequest, useFetchBinary } from "@smartb/g2-utils"
import { city } from "verified-emission-reduction-registry-project-f2-domain"
import { city as chat } from "verified-emission-reduction-registry-chat-f2-domain"
import { useNoAuthenticatedRequest } from "../../config"
import { useQuery, UseQueryOptions } from "react-query";
import {useCallback} from "react"
import {request} from "@smartb/g2-utils";
import { Message } from "components";

export interface ProjectListFilesQuery extends city.smartb.registry.program.f2.project.domain.query.ProjectListFilesQueryDTO  { }
export interface ProjectListFilesResult extends city.smartb.registry.program.f2.project.domain.query.ProjectListFilesResultDTO  { }


export const useProjectListFilesQuery = (params: QueryParams<ProjectListFilesQuery, ProjectListFilesResult>) => {
  const requestProps = useNoAuthenticatedRequest()
  return useQueryRequest<ProjectListFilesQuery, ProjectListFilesResult>(
    "projectListFiles", requestProps, params
  )
}

export interface ChatAskQuestionQuery extends chat.smartb.registry.program.f2.chat.domain.query.ChatAskQuestionQueryDTO  { }
export interface ChatAskQuestionResult extends chat.smartb.registry.program.f2.chat.domain.query.ChatAskQuestionResultDTO  { }

export const askQuestion = async (message: string, history: Message[], projectId?: string) => {
  const res = await request<ChatAskQuestionResult[]>({
    method: "POST",
    //@ts-ignore
    url: window._env_.platform.url + "/chatAskQuestion",
    body: JSON.stringify({
      question: message,
      history: history.map((message) => ({...message, additional_kwargs: {}})),
      projectId
    } as ChatAskQuestionQuery),
    returnType: "json"
  })
  return res ? res[0]?.item : undefined
}


export interface ProjectDownloadFileQuery extends city.smartb.registry.program.f2.project.domain.query.ProjectDownloadFileQueryDTO  { }

export const useProjectDownloadFileQuery = (): (query?: (ProjectDownloadFileQuery | undefined)) => Promise<string | undefined>  => {
  const requestProps = useNoAuthenticatedRequest()
  return useFetchBinary<ProjectDownloadFileQuery>("projectDownloadFile", requestProps)
}

export const useProjectFilesQuery = (queries: (ProjectDownloadFileQuery | undefined)[], options?: UseQueryOptions<(string | undefined)[]>) => {
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
    ...useQuery<(string | undefined)[], unknown, (string | undefined)[]>(
      ["projectFiles", queries],
      getAllFiles,
      options
    ),
    key: "projectFiles",
  }
}

export interface FilePath extends city.smartb.fs.s2.file.domain.model.FilePathDTO  { }

