import {QueryParams, useAuthenticatedRequest, useQueryRequest} from "@komune-io/g2"
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
