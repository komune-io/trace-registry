import {UseQueryResult} from "@tanstack/react-query";
import {Dataset, Distribution} from "../../../Dataset";
import {Catalogue} from "../../model";
import {DistributionLexicalEditor} from "./DistributionLexicalEditor";
import {useLexicalDownloadDistribution} from "../../api";

export interface UseLexicalDistributionEditorParams {
  readOnly?: boolean
}

export interface useDistributionLexicalEditorResult {
  query: UseQueryResult<string, Error>
  dataset?: Dataset
  distribution?: Distribution,
  editor: JSX.Element
}

export const useCatalogueDistributionLexicalEditor = (
  catalogue?: Catalogue, params?: UseLexicalDistributionEditorParams
): useDistributionLexicalEditorResult => {
  const {readOnly = true} = params || {}
  const distributionDownload = useLexicalDownloadDistribution(catalogue)
  const editor = (<DistributionLexicalEditor readOnly={readOnly} {...distributionDownload}/>)
  return {
    ...distributionDownload,
    editor
  }

}
