import { useQueryRequest } from "@komune-io/g2"
import { useNoAuthenticatedRequest } from "../../config"


export interface FlagProperties{
  module: ModuleFlagProperties
}

export interface ModuleFlagProperties{
  control: boolean
  data: boolean,
  project: boolean,
  identity: boolean
}


export const useFlagGetQuery = () => {
    const requestProps = useNoAuthenticatedRequest()
    return useQueryRequest<{}, FlagProperties>(
      "config/flagGet", requestProps, {
          query: {}
      }
    )
}