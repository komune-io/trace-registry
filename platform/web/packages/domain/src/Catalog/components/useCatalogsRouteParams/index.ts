import { useParams } from 'react-router-dom'
import { useMemo } from "react"

export interface CatalogsRouteParams {
    ids: string[]
    display: "item" | "grid"
    tab?: string
}

export const useCatalogsRouteParams = (): CatalogsRouteParams => {
    const { "*": splat } = useParams()

    return useMemo(() => {
        const splited = splat?.split("/")
        const ids: string[] = []
        let tab: string | undefined
        let display: "item" | "grid" = "item"
        splited?.forEach((str, index) => {
            if (str === "view") display = "item"
            else if (str === "grid") display = "grid"
            else if (index === splited.length - 1) tab = str
            else {
                ids.push(str)
            }
        })
        return {
            ids,
            display,
            tab,
        }
    }, [splat])
}