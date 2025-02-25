import { Dialog, Stack } from '@mui/material'
import {
  GraphCreationheader,
} from 'domain-components'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { ChartSelector, DataGrid, DataMapping, charts, ChartPreviewWithOptions, useDataLoader, Exporter } from "raw-graph"
import {
  getOptionsConfig,
  getDefaultOptionsValues,
  serializeProject
  //@ts-ignore
} from '@rawgraphs/rawgraphs-core'
import { dataSet, dataTypes } from './dataset'

export const GraphCreationPage = () => {
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

  const navigate = useNavigate()

  const onClose = useCallback(
    () => {
      navigate("/")
    },
    [navigate],
  )

  useEffect(() => {
    document.title = "WikiCO2 | " + t("search")
  }, [t])

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
    <Dialog
      fullScreen
      open
      onClose={onClose}
      sx={{
        "& .MuiDialog-paper": {
          p: 3,
          pb: 12,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3
        }
      }}
    >
      <GraphCreationheader title='Créer un draft' goBackUrl={"/"} />
      <Stack
        sx={{
          maxWidth: 1200,
          width: "100%",
          gap: 3,
          pr: 3
        }}
      >
        <DataGrid
          dataset={dataSet}
          dataTypes={dataTypes}
          coerceTypes={() => { }}
          errors={[]}
          userDataset={dataSet}
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
        {currentChart && <ChartPreviewWithOptions
          chart={currentChart}
          dataset={dataSet}
          dataTypes={dataTypes}
          mapping={mapping}
          visualOptions={visualOptions}
          setVisualOptions={setVisualOptions}
          setRawViz={setRawViz}
          setMappingLoading={() => { }}
        />}

        {currentChart && rawViz && (
          <Exporter rawViz={rawViz} exportProject={exportProject} />
        )}
      </Stack>
    </Dialog>
  )
}
