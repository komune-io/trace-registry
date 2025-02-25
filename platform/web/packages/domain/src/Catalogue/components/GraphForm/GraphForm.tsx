import { ChartSelector, DataGrid, DataMapping, charts, ChartPreviewWithOptions, useDataLoader, Exporter } from "raw-graph"
import {
    getOptionsConfig,
    getDefaultOptionsValues,
    serializeProject
    //@ts-ignore
} from '@rawgraphs/rawgraphs-core'
import { dataSet, dataTypes } from './dataset'
//@ts-ignore
import rawGraphScssUrl from "raw-graph/rawGraphTheme.scss?url"
import { useCallback, useRef, useState } from 'react'
import { TitleDivider } from "components"
import { Stack } from "@mui/material"
import {Helmet} from "react-helmet";

export const GraphForm = () => {
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

    const dataLoader = useDataLoader()
    const {
        userInput,
        userData,
        userDataType,
        parseError,
        unstackedData,
        unstackedColumns,
        data,
        separator,
        thousandsSeparator,
        decimalsSeparator,
        locale,
        stackDimension,
        dataSource,
    } = dataLoader

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

    const exportProject = useCallback(async () => {
        return serializeProject({
            userInput,
            userData,
            userDataType,
            parseError,
            unstackedData,
            unstackedColumns,
            data,
            separator,
            thousandsSeparator,
            decimalsSeparator,
            locale,
            stackDimension,
            dataSource,
            currentChart,
            mapping,
            visualOptions,
        })
    }, [
        currentChart,
        data,
        dataSource,
        decimalsSeparator,
        locale,
        mapping,
        parseError,
        separator,
        stackDimension,
        thousandsSeparator,
        userData,
        userDataType,
        userInput,
        visualOptions,
        unstackedColumns,
        unstackedData,
    ])

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

            {
                currentChart && rawViz && (
                    <Exporter rawViz={rawViz} exportProject={exportProject} />
                )
            }
        </Stack>
    )
}
