import {Dataset, Distribution} from "../../../Dataset";
import {Catalogue} from "../../model";
import {DistributionLexicalEditor, DistributionLexicalEditorProps} from "./DistributionLexicalEditor";
import {useLexicalDistribution} from "../../api";

export interface UseLexicalDistributionEditorParams extends DistributionLexicalEditorProps {}

export interface useDistributionLexicalEditorResult {
  dataset?: Dataset
  distribution?: Distribution,
  editor: JSX.Element
}

export const useCatalogueDistributionLexicalEditor = (
  catalogue?: Catalogue, params?: UseLexicalDistributionEditorParams
): useDistributionLexicalEditorResult => {
  const {readOnly = true} = params || {}
  const distributionDownload = useLexicalDistribution(catalogue)
  const editor = (<DistributionLexicalEditor readOnly={readOnly} {...distributionDownload}/>)
  return {
    ...distributionDownload,
    editor
  }

}
