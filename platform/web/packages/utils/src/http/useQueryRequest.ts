import { useQuery, useQueryClient, UseQueryOptions } from "react-query";
import { useCallback } from "react";
import { HttpOptions, AvErrorHandler, request } from "./index";
import { RequestProps } from "./RequestProps";

export type QueryOptions<QUERY, RESULT> = Omit<
  UseQueryOptions<
    RESULT | undefined,
    unknown,
    RESULT,
    [string, QUERY]
  >,
  'queryKey' | 'queryFn'
>

export type QueryParams<QUERY, RESULT> = {
  queryKey?: string,
  options?: QueryOptions<QUERY, RESULT>,
  query: QUERY
}

export const useQueryRequest = <QUERY, RESULT>(props: RequestProps, params: QueryParams<QUERY, RESULT>) => {
  const { queryKey = props.path, options } = params
  const queryFn = useFetchQueryRequest<QUERY, RESULT>(props)
  const queryClient = useQueryClient()

  const invalidateQuery = useCallback(
    () => queryClient.invalidateQueries(queryKey),
    [queryClient.invalidateQueries, queryKey],
  )
  

  return {
    ...useQuery<RESULT | undefined, unknown, RESULT, [string, QUERY]>([queryKey, params.query], () => queryFn(params.query), {
      ...options
    }),
    key: queryKey,
    invalidateQuery: invalidateQuery
  }
}

export const useFetchQueryRequest = <QUERY, RESULT>(props: RequestProps): (query?: QUERY) => Promise<RESULT | undefined> => {
  return useCallback(
    async (query?: QUERY) => query && (await fetchQueryRequest<QUERY, RESULT[]>(query, props))?.pop(),
    [props]
  )
}

export const useFetchBinary = <QUERY>(props: RequestProps): (query?: QUERY) => Promise<string | undefined> => {
  return useCallback(
    async (query?: QUERY) => query && fetchQueryRequest(query, props, { returnType: "objectUrl" }),
    [props]
  )
}

export const fetchQueryRequest = async <QUERY, RESULT>(query: QUERY, props: RequestProps, options?: Partial<HttpOptions>) => {
  const { path, jwt, url } = props
  const res = await request<RESULT>({
    url: `${url}/${path}`,
    method: 'POST',
    body: JSON.stringify(query),
    jwt: jwt,
    errorHandler: AvErrorHandler(path),
    ...options,
  })
  if (res) { //no success handler on a query
    return res
  } else {
    return undefined
  }
}