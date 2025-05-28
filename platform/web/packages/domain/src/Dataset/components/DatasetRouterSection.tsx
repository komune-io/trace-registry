import { Dataset } from "../model";
import { useDatasetDataQuery } from "../api";
import { DocumentsPage, FilePath } from "../../Documents";
import { ActivitiesSection } from "../../Project/components/ActivitiesSection";
import { Activity } from "../../Activity";
import { Catalogue, CatalogueInformation } from "../../Catalogue";
import { CatalogueGraphManager } from "../../Catalogue/components/DraftGraphManager/CatalogueGraphManager";
import { CataloguePdfCertificate } from "../../Catalogue/components/CataloguePdfCertificate";
import { DatasetIndicator } from "./DatasetIndicator";

interface DatasetDataSectionProps {
    catalogue: Catalogue
    item: Dataset
    isLoading: boolean
    isEmpty: (isEmpty: boolean) => void
}

export const DatasetRouterSection = (props: DatasetDataSectionProps) => {
    const { catalogue, item, isLoading, isEmpty } = props
    const fileListQuery = useDatasetDataQuery({ query: { id: item.id! } })
    if (item.type === "document") {
        return (
            <DocumentsPage isLoading={isLoading || fileListQuery.isLoading} files={fileListQuery.data?.items ?? [] as FilePath[]} />
        )
    } else if (item.type === "activity" && fileListQuery.data?.items) {
        return (
            <ActivitiesSection isLoading={isLoading || fileListQuery.isLoading} items={fileListQuery.data?.items ?? [] as Activity[]} />
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
