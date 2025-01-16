import {io} from "registry-platform-api-api-js-export";
import {QueryParams, useQueryRequest} from "@komune-io/g2-utils";
import {useNoAuthenticatedRequest} from "../../config";
import {useFetchBinary} from "@komune-io/g2";

export interface ActivityPageQuery extends io.komune.registry.f2.activity.domain.query.ActivityPageQueryDTO { }
export interface ActivityPageResult extends io.komune.registry.f2.activity.domain.query.ActivityPageResultDTO { }

export interface ActivityStepPageQuery extends io.komune.registry.f2.activity.domain.query.ActivityStepPageQueryDTO { }
export interface ActivityStepPageResult extends io.komune.registry.f2.activity.domain.query.ActivityStepPageResultDTO { }
export interface ActivityStepEvidenceDownloadQuery extends io.komune.registry.f2.activity.domain.query.ActivityStepEvidenceDownloadQueryDTO { }

export const useActivityPageQuery = (params: QueryParams<ActivityPageQuery, ActivityPageResult>) => {
  const requestProps = useNoAuthenticatedRequest()
  return useQueryRequest<ActivityPageQuery, ActivityPageResult>(
    "control/activityPage", requestProps, params
  )
}

export const useActivityStepPageQuery = (params: QueryParams<ActivityStepPageQuery, ActivityStepPageResult>) => {
  const requestProps = useNoAuthenticatedRequest()
  return useQueryRequest<ActivityStepPageQuery, ActivityStepPageResult>(
    "control/activityStepPage", requestProps, params
  )
}

export const useProductEvidenceDownloadQuery = (): (query?: (ActivityStepEvidenceDownloadQuery | undefined)) => Promise<string | undefined>  => {
  const requestProps = useNoAuthenticatedRequest()
  return useFetchBinary<ActivityStepEvidenceDownloadQuery>("activityStepEvidenceDownload", requestProps)
}
