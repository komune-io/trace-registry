import { Dataset } from '../../model'
import {useMemo} from "react";
import {IndicatorVisualization} from "../../../Catalogue/components/IndicatorVisualization";

export interface DatasetIndicatorProps {
    item: Dataset
    relatedDatasets?: Dataset[]
}

export const DatasetIndicator = (props: DatasetIndicatorProps) => {
    const { item, relatedDatasets } = props

    const indicatorVisualization = useMemo(() => {
        return [...(item.datasets ?? []), ...(relatedDatasets ?? [])]?.map((dataset: Dataset) => {
            const distribution = (dataset.distributions ?? [])[0]
            const indicators = distribution?.aggregators ?? [] 
            return (<IndicatorVisualization key={dataset.id} title={dataset.title} indicators={indicators} referenceId={item.catalogueId === dataset.catalogueId ? dataset.referencingCatalogueIds[0] : dataset.catalogueId} />)
        })
    },[item, relatedDatasets])


    return (
     <>{indicatorVisualization}</>
    )
}
