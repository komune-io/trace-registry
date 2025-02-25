import { ChartSelector, DataGrid, DataMapping, charts, ChartPreviewWithOptions } from "raw-graph"
import {
    getOptionsConfig,
    getDefaultOptionsValues
    //@ts-ignore
} from '@rawgraphs/rawgraphs-core'
import { dataSet, dataTypes } from './dataset'
//@ts-ignore
import rawGraphScssUrl from "raw-graph/rawGraphTheme.scss?url"
import { useCallback, useRef, useState } from 'react'
import { TitleDivider } from "components"
import { Stack } from "@mui/material"
import { Helmet } from "react-helmet";
import { Button } from "@komune-io/g2"
import { useTranslation } from "react-i18next"

export interface GraphFormProps {
    onSave: (graphSvg: Blob) => Promise<any>
}

export const GraphForm = (props: GraphFormProps) => {
    const {onSave} = props
    const { t } = useTranslation()
    const [currentChart, setCurrentChart] = useState(charts[0])
    const [mapping, setMapping] = useState({})
    const [visualOptions, setVisualOptions] = useState(() => {
        const options = getOptionsConfig(charts[0]?.visualOptions)
        return getDefaultOptionsValues(options)
    })
    const [rawViz, setRawViz] = useState<any>(null)
    const dataMappingRef = useRef<any>(null)

    const clearLocalMapping = useCallback(() => {
        if (dataMappingRef.current) {
            dataMappingRef.current.clearLocalMapping()
        }
    }, [])

    const handleChartChange = useCallback(
        (nextChart: any) => {
            setMapping({})
            setCurrentChart(nextChart)
            clearLocalMapping()
            const options = getOptionsConfig(nextChart?.visualOptions)
            setVisualOptions(getDefaultOptionsValues(options))
            setRawViz(null)
        },
        [clearLocalMapping]
    )

    const onSaveMemo = useCallback(
        async () => {
          var svgString = new XMLSerializer().serializeToString(
            rawViz._node.firstChild
          )
          var svg = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' })
          await onSave(svg)
        },
        [rawViz, onSave]
      )

    return (
        <Stack
            className="rawGraph-container"
            gap={3}
        >
            <Helmet>
                <link rel="stylesheet" href={rawGraphScssUrl} />
            </Helmet>
            <TitleDivider
                title="2. Configurez votre jeu de données"
                size="subtitle1"
            />
            <DataGrid
                dataset={dataSet}
                dataTypes={dataTypes}
                coerceTypes={() => { }}
                errors={[]}
                userDataset={dataSet}
            />
            <TitleDivider
                title="3. Configurez votre graphe"
                size="subtitle1"
            />
            <ChartSelector
                availableCharts={charts}
                currentChart={currentChart}
                setCurrentChart={handleChartChange}
            />
            <DataMapping
                ref={dataMappingRef}
                dimensions={currentChart.dimensions}
                dataTypes={dataTypes}
                mapping={mapping}
                setMapping={setMapping}
            />
            {
                currentChart && <ChartPreviewWithOptions
                    chart={currentChart}
                    dataset={dataSet}
                    dataTypes={dataTypes}
                    mapping={mapping}
                    visualOptions={visualOptions}
                    setVisualOptions={setVisualOptions}
                    setRawViz={setRawViz}
                    setMappingLoading={() => { }}
                />
            }
            <Button
                disabled={!rawViz}
                onClick={onSaveMemo}
                sx={{
                    alignSelf: "flex-end"
                }}
            >
                {t("save")}
            </Button>
        </Stack>
    )
}
