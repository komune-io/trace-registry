import {city} from "verified-emission-reduction-registry-activity-f2-domain";
import {QueryParams, useQueryRequest} from "@smartb/g2-utils";
import {useNoAuthenticatedRequest} from "../../config";
import {useFetchBinary} from "@smartb/g2";

export interface ActivityPageQuery extends city.smartb.registry.f2.activity.domain.query.ActivityPageQueryDTO { }
export interface ActivityPageResult extends city.smartb.registry.f2.activity.domain.query.ActivityPageResultDTO { }

export interface ActivityStepPageQuery extends city.smartb.registry.f2.activity.domain.query.ActivityStepPageQueryDTO { }
export interface ActivityStepPageResult extends city.smartb.registry.f2.activity.domain.query.ActivityStepPageResultDTO { }
export interface ActivityStepEvidenceDownloadQuery extends city.smartb.registry.f2.activity.domain.query.ActivityStepEvidenceDownloadQueryDTO { }

export const useActivityPageQuery = (params: QueryParams<ActivityPageQuery, ActivityPageResult>) => {
  const requestProps = useNoAuthenticatedRequest()
  return useQueryRequest<ActivityPageQuery, ActivityPageResult>(
    "activityPage", requestProps, params
  )
}

export const useActivityStepPageQuery = (params: QueryParams<ActivityStepPageQuery, ActivityStepPageResult>) => {
  const requestProps = useNoAuthenticatedRequest()
  return useQueryRequest<ActivityStepPageQuery, ActivityStepPageResult>(
    "activityStepPage", requestProps, params
  )
}

export const useProductEvidenceDownloadQuery = (): (query?: (ActivityStepEvidenceDownloadQuery | undefined)) => Promise<string | undefined>  => {
  const requestProps = useNoAuthenticatedRequest()
  return useFetchBinary<ActivityStepEvidenceDownloadQuery>("activityStepEvidenceDownload", requestProps)
}
