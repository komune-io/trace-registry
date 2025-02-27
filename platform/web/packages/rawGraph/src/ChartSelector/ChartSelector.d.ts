export interface ChartSelectorProps {
    availableCharts: any
    currentChart: any
    setCurrentChart: (chart: any) => void
    onRemoveCustomChart?: () => {}
    onAddChartClick?: () => {}
  }

export const ChartSelector = (props: ChartSelectorProps) => JSX.Element