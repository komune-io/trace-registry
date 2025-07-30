import { Dataset } from "../model";
import { DocumentsPage } from "../../Documents";
import { ActivitiesSection } from "../../Project/components/ActivitiesSection";
import { Catalogue, CatalogueInformation, CataloguePdfCertificate } from "../../Catalogue";
import { DatasetIndicator } from "./DatasetIndicator";
import { CatalogueGraphManager } from "../../Draft";

interface DatasetDataSectionProps {
    catalogue: Catalogue
    item: Dataset
    isLoading: boolean
    isEmpty: (isEmpty: boolean) => void
}

export const DatasetRouterSection = (props: DatasetDataSectionProps) => {
    const { catalogue, item, isLoading, isEmpty } = props
    
    if (item.type === "document") {
        return (
            <DocumentsPage isLoading={isLoading} dataset={item} />
        )
    } else if (item.type === "activity") {
        return (
            <ActivitiesSection isLoading={isLoading} dataset={item} />
        )
    } else if (item.type === "table") {
        return
    } else if (item.type === "lexical") {
        return <CatalogueInformation
            dataset={item}
            catalogue={catalogue}
            isEmpty={isEmpty}
        />
    } else if (item.type === "indicators") {
        return (
            <DatasetIndicator
                item={item}
                relatedDatasets={catalogue.referencedDatasets.filter((dataset) => dataset.type === "indicator")}
                isEmpty={isEmpty}
            />
        )
    } else if (item.type === "graphs") {
        return (
            <CatalogueGraphManager catalogue={catalogue} />
        )
    } else if (item.type === "attestations") {
        return (
            <CataloguePdfCertificate catalogue={catalogue} />
        )
    } else {
        return
    }
}
