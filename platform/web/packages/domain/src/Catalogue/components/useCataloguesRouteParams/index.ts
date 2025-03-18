import { useParams } from 'react-router-dom'
import { useMemo } from "react"

export interface CataloguesRouteParams {
    ids: string[]
}

export const useCataloguesRouteParams = (): CataloguesRouteParams => {
    const { "*": splat = "" } = useParams()

    return useMemo(() => {
        const ids = splat?.split("/").filter((str) => !!str)
        return {
            ids: ids,
        }
    }, [splat])
}