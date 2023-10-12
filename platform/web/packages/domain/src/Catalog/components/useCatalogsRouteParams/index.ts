import { useParams } from 'react-router-dom'
import { useMemo } from "react"

export interface CatalogsRouteParams {
    ids: string[]
    tab?: string
}

export const useCatalogsRouteParams = (): CatalogsRouteParams => {
    const { "*": splat } = useParams()

    return useMemo(() => {
        const splited = splat?.split("/")
        const ids: string[] = []
        let tab: string | undefined
        splited?.forEach((str, index) => {
            if(!str) return
            if (index === splited.length - 1) tab = str
            else {
                ids.push(str)
            }
        })
        return {
            ids,
            tab,
        }
    }, [splat])
}