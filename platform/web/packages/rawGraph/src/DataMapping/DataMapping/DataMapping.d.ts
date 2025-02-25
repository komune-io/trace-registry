export interface DataMappingProps {
    dataTypes: any
    dimensions: any
    mapping: any
    setMapping: (mapping: any) => void
    ref: MutableRefObject<any>
}

export const DataMapping = (props: DataMappingProps) => JSX.Element

export default DataMapping