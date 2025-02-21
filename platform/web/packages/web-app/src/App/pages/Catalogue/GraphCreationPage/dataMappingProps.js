import { charts } from "raw-graph";

import {
  alluvialdiagram,
} from '@rawgraphs/rawgraphs-charts'

export const dataMappingProps = {
  "dimensions": alluvialdiagram.dimensions,
  "dataTypes": {
    "Country": "string",
  },
  "mapping": {
    "stacks": {
      "ids": [],
      "value": [],
      "isValid": true,
      "mappedType": "number"
    },
    "bars": {
      "ids": [],
      "value": [],
      "isValid": true,
      "mappedType": "number",
      "config": {
        "aggregation": "[]"
      }
    },
    "series": {
      "ids": [],
      "value": [],
      "isValid": true,
      "mappedType": "number"
    }
  },
  "setMapping": () => { }
}