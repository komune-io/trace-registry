import {
  useQueries,
  useQueryClient,
  UseQueryOptions,
} from "@tanstack/react-query";
import { useCallback } from "react";
import {errorHandler, HttpOptions, request, RequestProps} from "@smartb/g2";

export type QueryOptions<QUERY, RESULT> = Omit<
  UseQueryOptions<RESULT | null, unknown, RESULT, [string, QUERY]>,
  "queryKey" | "queryFn"
>;

export type QueriesParams<QUERY, RESULT> = {
  queryKey?: string;
  options?: QueryOptions<QUERY, RESULT>;
  query: QUERY[];
};

export const useQueriesRequest = <QUERY, RESULT>(
  path: string,
  props: RequestProps,
  params: QueriesParams<QUERY, RESULT>
) => {
  const { queryKey = path, options } = params;
  const queryFn = useFetchQueryRequest<QUERY, RESULT>(path, props);
  const queryClient = useQueryClient();

  const invalidateQuery = useCallback(
    () => queryClient.invalidateQueries({ queryKey: [queryKey] }),
    [queryClient.invalidateQueries, queryKey]
  );

  const queries = params.query.map((query) =>({
    queryKey: [queryKey, params.query],
    queryFn :() => queryFn(query)
  }))

  const results = useQueries({
    queries: queries,
    context: undefined
  })

  console.log(options)
  console.log("|||||||||||||||||||||||")
  console.log(results)

  return {
    results: results,
    key: queryKey,
    invalidateQuery: invalidateQuery,
  };
};



export const useFetchQueryRequest = <QUERY, RESULT>(
  path: string,
  props: RequestProps
): ((query?: QUERY) => Promise<RESULT | null>) => {
  return useCallback(
    async (query?: QUERY) =>
      query
        ? (
            await fetchQueryRequest<QUERY, RESULT[]>(path, query, props)
          )?.pop() ?? null
        : null,
    [props]
  );
};

export const fetchQueryRequest = async <QUERY, RESULT>(
  path: string,
  query: QUERY,
  props: RequestProps,
  options?: Partial<HttpOptions>
) => {
  const { jwt, url } = props;
  const res = await request<RESULT>({
    url: `${url}/${path}`,
    method: "POST",
    body: JSON.stringify(query),
    jwt: jwt,
    errorHandler: errorHandler(path),
    ...options,
  });
  if (res) {
    //no success handler on a query
    return res;
  } else {
    return undefined;
  }
};
