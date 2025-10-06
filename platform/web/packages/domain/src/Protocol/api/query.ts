import {QueryParams, useAuthenticatedRequest, useNoAuthenticatedRequest, useQueryRequest} from "@komune-io/g2"
import {io} from "registry-platform-api-api-js-export";

export interface ProtocolPageQuery extends io.komune.registry.control.f2.protocol.domain.query.ProtocolPageQueryDTO { }
export interface ProtocolPageResult extends io.komune.registry.control.f2.protocol.domain.query.ProtocolPageResultDTO { }

export const useProtocolPageQuery = (params: QueryParams<ProtocolPageQuery, ProtocolPageResult>) => {
  const requestProps = useAuthenticatedRequest()
  return useQueryRequest<ProtocolPageQuery, ProtocolPageResult>(
    "control/protocolPage", requestProps, params
  )
}

export interface ProtocolGetQuery extends io.komune.registry.control.f2.protocol.domain.query.ProtocolGetQueryDTO { }
export interface ProtocolGetResult extends io.komune.registry.control.f2.protocol.domain.query.ProtocolGetResultDTO { }

export const useProtocolGetQuery = (params: QueryParams<ProtocolGetQuery, ProtocolGetResult>) => {
  const requestProps = useAuthenticatedRequest()
  return useQueryRequest<ProtocolGetQuery, ProtocolGetResult>(
    "control/protocolGet", requestProps, params
  )
}

export interface BadgePageQuery extends io.komune.registry.control.f2.protocol.domain.query.BadgePageQueryDTO { }
export interface BadgePageResult extends io.komune.registry.control.f2.protocol.domain.query.BadgePageResultDTO { }

export const useBadgePageQuery = (params: QueryParams<BadgePageQuery, BadgePageResult>) => {
  const requestProps = useAuthenticatedRequest()
  return useQueryRequest<BadgePageQuery, BadgePageResult>(
      "control/badgePage", requestProps, params
  )
}

export interface CertificationGetQuery extends io.komune.registry.control.f2.certification.domain.query.CertificationGetQueryDTO { }
export interface CertificationGetResult extends io.komune.registry.control.f2.certification.domain.query.CertificationGetResultDTO { }

export const useCertificationGetQuery = (params: QueryParams<CertificationGetQuery, CertificationGetResult>) => {
  const requestProps = useAuthenticatedRequest()
  return useQueryRequest<CertificationGetQuery, CertificationGetResult>(
    "control/certificationGet", requestProps, params
  )
}

export interface CertificationPageQuery extends io.komune.registry.control.f2.certification.domain.query.CertificationPageQueryDTO { }
export interface CertificationPageResult extends io.komune.registry.control.f2.certification.domain.query.CertificationPageResultDTO { }

export const useCertificationPageQuery = (params: QueryParams<CertificationPageQuery, CertificationPageResult>) => {
  const requestProps = useAuthenticatedRequest()
  return useQueryRequest<CertificationPageQuery, CertificationPageResult>(
    "control/certificationPage", requestProps, params
  )
}

export interface BadgeCertificationGetQuery extends io.komune.registry.control.f2.certification.domain.query.BadgeCertificationGetQueryDTO { }
export interface BadgeCertificationGetResult extends io.komune.registry.control.f2.certification.domain.query.BadgeCertificationGetResultDTO { }

export const useBadgeCertificationGetQuery = (params: QueryParams<BadgeCertificationGetQuery, BadgeCertificationGetResult>) => {
  const requestProps = useNoAuthenticatedRequest()
  return useQueryRequest<BadgeCertificationGetQuery, BadgeCertificationGetResult>(
      "control/badgeCertificationGet", requestProps, params
  )
}
