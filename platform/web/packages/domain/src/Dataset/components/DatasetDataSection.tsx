import {Dataset} from "../model";
import {useDatasetDataQuery} from "../api";
import {DocumentsPage, FilePath} from "../../Documents";
import {ActivitiesSection} from "../../Project/components/ActivitiesSection";
import {Activity} from "../../Activity";
import {Catalogue, CatalogueInformation} from "../../Catalogue";

interface DatasetDataSectionProps {
    catalogue: Catalogue
    item: Dataset
    isLoading: boolean
}

export const DatasetDataSection = (props: DatasetDataSectionProps) => {
    const { catalogue, item, isLoading } = props
    const fileListQuery = useDatasetDataQuery({ query: { id: item.id! } })
    if(item.type === "document" ) {
        return (
            <DocumentsPage isLoading={isLoading || fileListQuery.isLoading} files={fileListQuery.data?.items ?? [] as FilePath[]} />
        )
    } else if(item.type === "activity" && fileListQuery.data?.items) {
        return (
            <ActivitiesSection isLoading={isLoading || fileListQuery.isLoading} items={fileListQuery.data?.items ?? [] as  Activity[]} />
        )
    } else if(item.type === "table" ) {
        return (
            // TODO HERE DO Composable table
           <div>Comming Soon</div>
        )
    } else if(item.type === "lexical" ) {
        return (
          <CatalogueInformation
            catalogue={catalogue}
          />
        )
    }  else if(item.type === "graph" ) {
        return (
            // TODO HERE DO Composable table
           <div>Graph Comming Soon</div>
        )
    } else {
        return (
           <div>Comming Soon</div>
        )
    }

}