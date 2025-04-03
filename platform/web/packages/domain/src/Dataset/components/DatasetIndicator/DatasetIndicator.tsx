import { Dataset } from '../../model'
import {useMemo} from "react";
import {IndicatorVisualization} from "../../../Catalogue/components/IndicatorVisualization";

export interface DatasetIndicatorProps {
    item: Dataset
}

export const DatasetIndicator = (props: DatasetIndicatorProps) => {
    const { item } = props

    const indicatorVisualization = useMemo(() => {
        return item.datasets?.map((dataset: Dataset) => {
            const distribution = (dataset.distributions ?? [])[0]
            const indicators = distribution?.aggregators ?? []
            return ( <IndicatorVisualization key={dataset.id} title={dataset.title} indicators={indicators} />)
        })
    },[item.datasets])


    return (
     <>{indicatorVisualization}</>
    )
}
