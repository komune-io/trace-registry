import { ChartSelector, DataGrid, DataMapping, charts, ChartPreviewWithOptions, parseCsv } from "raw-graph"
import {
    getOptionsConfig,
    getDefaultOptionsValues
    //@ts-ignore
} from '@rawgraphs/rawgraphs-core'
import { dataSet, dataTypes } from './dataset'
//@ts-ignore
import rawGraphScssUrl from "raw-graph/rawGraphTheme.scss?url"
import { useCallback, useRef, useState, useEffect } from 'react'
import { TitleDivider } from "components"
import { Stack } from "@mui/material"
import { Helmet } from "react-helmet";
import { Button } from "@komune-io/g2"
import { useTranslation } from "react-i18next"
import { useCsvDownloadDistribution } from "../../api"

export interface GraphFormProps {
    onSave: (graphSvg: Blob) => Promise<any>
    distributionId?: string
    graphDatasetId?: string
}

export const GraphForm = (props: GraphFormProps) => {
    const { onSave, distributionId, graphDatasetId } = props
    const { t, i18n } = useTranslation()
     const [parsed, setParsed] = useState<{
            dataset: any;
            dataTypes: any;
            errors: any;
        } | undefined>(undefined)

    const csvQuery = useCsvDownloadDistribution(graphDatasetId, distributionId)

    useEffect(() => {
        if (csvQuery.data) {
            parseCsv(csvQuery.data, i18n.language).then((res) => {
                setParsed(res)
            })
        }
    }, [csvQuery.data])

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
                coerceTypes={() => { }}
                errors={parsed.errors}
                userDataset={parsed.dataset}
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
