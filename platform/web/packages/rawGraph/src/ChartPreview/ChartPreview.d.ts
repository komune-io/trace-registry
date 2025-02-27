export interface ChartPreviewProps {
  chart: any
  dataset: any
  dataTypes: any
  mapping: any
  visualOptions: any
  error?: string
  setError: (error: string) => void
  setRawViz?: (rawViz: any) => void
  mappedData?: any
}

export const ChartPreview = (props: ChartPreviewProps) => JSX.Element