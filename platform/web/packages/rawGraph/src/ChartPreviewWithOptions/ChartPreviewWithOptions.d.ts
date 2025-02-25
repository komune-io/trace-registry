export interface ChartPreviewWithOptionsProps {
  chart: any
  dataset: any
  dataTypes: any
  mapping: any
  visualOptions: any
  setVisualOptions: (options: any) => void
  setRawViz: (rawViz: any) => void
  setMappingLoading: (loading: boolean) => void

}

export const ChartPreviewWithOptions = (props: ChartPreviewWithOptionsProps) => JSX.Element