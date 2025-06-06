import {Dataset} from '../../model'
import {useMemo} from "react";
import {IndicatorVisualization} from "../../../Catalogue/components/IndicatorVisualization";

export interface DatasetIndicatorProps {
    item: Dataset
    relatedDatasets?: Dataset[]
    isEmpty: (isEmpty: boolean) => void
}

export const DatasetIndicator = (props: DatasetIndicatorProps) => {
    const { item, relatedDatasets, isEmpty } = props

    const indicatorVisualization = useMemo(() => {
        const orderedDatasets = item.datasets?.sort((a, b) => {
            if (a.referencingCatalogueIds[0] && !b.referencingCatalogueIds[0]) return 1
            if (!a.referencingCatalogueIds[0] && b.referencingCatalogueIds[0]) return -1
            return 0
        })

        const indicators = [
            ...buildIndicatorsVisualizations(orderedDatasets ?? [], (dataset: Dataset) => dataset.referencingCatalogueIds[0]),
            ...buildIndicatorsVisualizations(relatedDatasets ?? [], (dataset: Dataset) => dataset.catalogueId)
        ]
        console.log("orderedDatasets", orderedDatasets)
        console.log("relatedDatasets", relatedDatasets)
        if ((orderedDatasets ?? []).length === 0 && (relatedDatasets ?? []).length === 0) isEmpty(true)
        return indicators
    },[item, relatedDatasets])

    return (
     <>{indicatorVisualization}</>
    )
}

function buildIndicatorsVisualizations(datasets: Dataset[], getReferenceId: (dataset: Dataset) => string | undefined) {
    return datasets.map(dataset => {
        const distribution = dataset.distributions?.[0]
        const indicators = distribution?.aggregators ?? []
        return <IndicatorVisualization key={dataset.id} title={dataset.title} indicators={indicators} referenceId={getReferenceId(dataset)}/>
    })
}
