export interface DataMappingProps {
    dataTypes: any
    dimensions: any
    mapping: any
    setMapping: (mapping: any) => void
}

export const DataMapping = (props: DataMappingProps) => JSX.Element