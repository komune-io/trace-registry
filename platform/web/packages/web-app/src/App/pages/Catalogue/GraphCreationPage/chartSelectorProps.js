import { charts } from "raw-graph";

import {
  alluvialdiagram,
} from '@rawgraphs/rawgraphs-charts'

export const chartSelectorProps = {
  "onAddChartClick": () => { },
  "onRemoveCustomChart": () => { },
  "availableCharts": charts,
  "currentChart": alluvialdiagram,
  "setCurrentChart": () => { }
}