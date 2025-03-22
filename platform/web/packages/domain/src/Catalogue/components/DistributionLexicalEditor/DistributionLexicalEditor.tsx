import {LexicalDownloadDistribution} from "domain-components";
import {RichtTextEditor} from "components";

interface DistributionLexicalEditorProps extends LexicalDownloadDistribution {
  readOnly?: boolean
}

export const DistributionLexicalEditor = (props: DistributionLexicalEditorProps) => {
  const {readOnly = true, query, distribution}  = props
  const data = query.data
  const isMarkdown = distribution?.mediaType === "text/markdown"
  return (<RichtTextEditor
    readOnly={readOnly}
    markdown={isMarkdown && data ? data : undefined}
    editorState={!isMarkdown && data ? JSON.stringify(data) : undefined}
  />)
}