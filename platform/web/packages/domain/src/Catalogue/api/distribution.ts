import { useEffect, useMemo, useState } from "react";
import { Catalogue } from "../model";
import { UseQueryResult} from "@tanstack/react-query";
import { parseCsv } from "raw-graph";
import { useTranslation } from "react-i18next";
import { Dataset, Distribution } from "../../Dataset";
import {useDownloadDistribution} from "./query";


export interface LexicalDownloadDistribution {
  query: UseQueryResult<string, Error>
  dataset?: Dataset
  distribution?: Distribution
}

export const useLexicalDownloadDistribution = (catalogue?: Catalogue): LexicalDownloadDistribution => {
  const dataset = useMemo(() => {
    if (!catalogue) return
    return findLexicalDataset(catalogue)
  }, [catalogue])

  const query = useDownloadDistribution<any>(
    dataset?.distribution.mediaType === "application/json"
      ? "json"
      : "text", dataset?.dataset.id, dataset?.distribution.id
  )

  return {
    query,
    dataset: dataset?.dataset,
    distribution: dataset?.distribution,
  }
}

export const useCsvDownloadDistribution = (datasetId?: string, distributionId?: string) => {
  const [parsed, setParsed] = useState<{
    dataset: any;
    dataTypes: any;
    errors: any;
  } | undefined>(undefined)
  const {i18n} = useTranslation()

  const query = useDownloadDistribution<Blob>("blob", datasetId, distributionId)

  useEffect(() => {
    if (query.data) {
      parseCsv(query.data, i18n.language).then((res) => {
        setParsed(res)
      })
    }
  }, [query.data, i18n.language])

  return {
    query,
    parsed
  }
}

export interface DatasetWithDistribution {
  dataset: Dataset
  distribution: Distribution
}

export const findLexicalDataset = (catalogue: Catalogue): DatasetWithDistribution | undefined => {
  const dataset = catalogue?.datasets?.find((dataSet) => dataSet.type === "lexical")
  const distribution = dataset?.distributions?.find((distribution) => distribution.mediaType === "application/json")

  if (dataset && distribution) return {
    dataset,
    distribution
  }

  const markdownDistribution = dataset?.distributions?.find((distribution) => distribution.mediaType === "text/markdown")

  if (dataset && markdownDistribution) return {
    dataset,
    distribution: markdownDistribution
  }

  return undefined
}
