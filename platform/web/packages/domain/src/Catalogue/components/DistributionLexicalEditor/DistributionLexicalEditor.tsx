import {LexicalDistribution, useDownloadDistribution} from "domain-components";
import {LexicalEditorProps, RichtTextEditor} from "components";

export interface DistributionLexicalEditorProps extends LexicalDistribution, Omit<LexicalEditorProps, "markdown" | "editorState"> {
}

export const DistributionLexicalEditor = (props: DistributionLexicalEditorProps) => {
  const {readOnly = true, dataset, distribution, ...other}  = props
  const contentType = distribution?.mediaType === "application/json" ? "json" : "text"
  const {data} = useDownloadDistribution<any>(
    contentType, dataset?.id, distribution?.id
  )
  const isMarkdown = distribution?.mediaType === "text/markdown"
  return (<RichtTextEditor
    {...other}
    readOnly={readOnly}
    markdown={isMarkdown && data ? data : undefined}
    editorState={!isMarkdown && data ? JSON.stringify(data) : undefined}
    styleContainerProps={{
      sx: {
        "h1, h2, h3, h4, h5, h6": {
          borderBottom: "unset",
        },
      }
    }}
  />)
}