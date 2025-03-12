import { ChartSelector, DataGrid, DataMapping, charts, ChartPreviewWithOptions } from "raw-graph"
import {
    getOptionsConfig,
    getDefaultOptionsValues
    //@ts-ignore
} from '@rawgraphs/rawgraphs-core'
//@ts-ignore
import rawGraphScssUrl from "raw-graph/rawGraphTheme.scss?url"
import { useCallback, useEffect, useRef, useState } from 'react'
import { TitleDivider, CustomButton } from "components"
import { Stack } from "@mui/material"
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next"
import { useCsvDownloadDistribution } from "../../api"

export interface RawGraphState {
    chart: string
    mapping: any
    visualOptions: any
    csvDistributionId?: string
}

export interface GraphFormProps {
    onSave: (graphSvg: Blob, state: RawGraphState) => Promise<any>
    csvDistributionId?: string
    graphDatasetId?: string
    state?: RawGraphState
}

const emptyFunction = () => {}

export const GraphForm = (props: GraphFormProps) => {
    const { onSave, csvDistributionId, graphDatasetId, state } = props
    const { t } = useTranslation()
    

    const {parsed} = useCsvDownloadDistribution(graphDatasetId, csvDistributionId)
    
    const [currentChart, setCurrentChart] = useState(charts[0])
    const [mapping, setMapping] = useState({})
    const [visualOptions, setVisualOptions] = useState(() => {
        const options = getOptionsConfig(charts[0]?.visualOptions)
        return getDefaultOptionsValues(options)
    })
    const [rawViz, setRawViz] = useState<any>(null)
    const dataMappingRef = useRef<any>(null)

    useEffect(() => {
      if (state) {
        const selectedChart = charts.find((chart) => chart.metadata.name === state.chart)
        if (selectedChart) setCurrentChart(selectedChart)
        setMapping(state.mapping)
        setVisualOptions(state.visualOptions)
      }
    }, [state])
    
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
            await onSave(svg, {
                chart: currentChart.metadata.name,
                mapping,
                visualOptions
            })
        },
        [rawViz, onSave, currentChart, mapping, visualOptions]
    )

    if(!parsed) return <></>
    return (
        <Stack
            className="rawGraph-container"
            gap={3}
        >
            <Helmet>
                <link rel="stylesheet" href={rawGraphScssUrl} />
            </Helmet>
            <DataGrid
                dataset={parsed.dataset}
                dataTypes={parsed.dataTypes}
                errors={parsed.errors}
            />
            <TitleDivider
                title={"2. " + t("catalogues.graphConfiguration")}
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
                dataTypes={parsed.dataTypes}
                mapping={mapping}
                setMapping={setMapping}
            />
            {
                currentChart && <ChartPreviewWithOptions
                    chart={currentChart}
                    dataset={parsed.dataset}
                    dataTypes={parsed.dataTypes}
                    mapping={mapping}
                    visualOptions={visualOptions}
                    setVisualOptions={setVisualOptions}
                    setRawViz={setRawViz}
                    setMappingLoading={emptyFunction}
                />
            }
            <CustomButton
                disabled={!rawViz}
                onClick={onSaveMemo}
                sx={{
                    alignSelf: "flex-end"
                }}
            >
                {t("save")}
            </CustomButton>
        </Stack>
    )
}
