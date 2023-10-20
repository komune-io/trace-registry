import {Dataset} from "../model";
import {useDatasetDataQuery} from "../api";
import {DocumentsPage, FilePath} from "../../Documents";
import {ActivitiesSection} from "../../Project/components/ActivitiesSection";
import {Activity} from "../../Activity";

interface DatasetDataSectionProps {
    item: Dataset
    isLoading: boolean
}

export const DatasetDataSection = (props: DatasetDataSectionProps) => {
    const { item, isLoading } = props
    const fileListQuery = useDatasetDataQuery({ query: { id: item.id! } })
    if(item.type === "document" ) {
        return (
            <DocumentsPage isLoading={isLoading || fileListQuery.isLoading} files={fileListQuery.data?.items as FilePath[]} />
        )
    } else if(item.type === "activity" ) {
        return (
            <ActivitiesSection isLoading={isLoading || fileListQuery.isLoading} items={fileListQuery.data?.items as  Activity[]} />
        )
    } else if(item.type === "table" ) {
        return (
            // TODO HERE DO Composable table
           <div>Comming Soon</div>
        )
    } else {
        return (
           <div>Comming Soon</div>
        )
    }

}