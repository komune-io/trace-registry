export interface DataGridProps {
    userDataset: any
    dataset: any
    errors: string[]
    dataTypes: any
    coerceTypes?: () => void
    onDataUpdate?: (newData: any) => void
}

export const DataGrid = (props: DataGridProps) => JSX.Element