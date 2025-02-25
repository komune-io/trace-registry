import {
    alluvialdiagram,
} from '@rawgraphs/rawgraphs-charts'

export const charPreviewProps = {
    "chart": alluvialdiagram,
    "dataset": [
        { Country: "China" },
    ],
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
    "visualOptions": alluvialdiagram.visualOptions,
    "setVisualOptions": () => { },
    "setRawViz": () => { },
    "setMappingLoading": () => { },
    error: "",
    setError: () => { },
}