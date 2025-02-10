import { Box, styled } from "@mui/material"
import { TableStyles } from "./plugins/TablePlugin"
import { ImageStyles } from "./plugins/ImagesPlugin"

export const MarkdownStyleContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'titlesTopLevel' && prop !== 'readOnly' && prop !== "citations"
})<{
  titlesTopLevel?: 'h1' | 'h4',
  readOnly?: boolean,
}>(({ theme, titlesTopLevel, readOnly }) => ({

  lineHeight: "28px",
  "& .editor-input": {
    outline: "unset",
    padding: "16px 0",
  },
  "& blockquote": {
    borderLeft: `${theme.palette.primary.main}4D .2rem solid`,
    marginLeft: 0,
    paddingLeft: "1em"
  },
  '& .editor-input :first-child': {
    marginTop: '0px',
    marginBlockStart: "unset"
  },
  '& .editor-input :last-child': {
    marginBottom: '0px',
    marginBlockEnd: "unset"
  },
  "& .editor-text-underline": {
    textDecoration: "underline"
  },
  "& .editor-text-italic": {
    fontStyle: "italic"
  },
  '& ol, ul': {
    paddingInlineStart: '18px'
  },
  '& li::marker': {
    fontWeight: 600
  },
  '& ol li::marker': {
    color: theme.palette.primary.main
  },
  '& li': {
    paddingLeft: '4px',
    margin: '8px 0px',
    lineHeight: 1.5
  },
  "& .editor-nested-listitem": {
    listStyleType: "none",
  },
  "& .editor-nested-listitem:before, .editor-nested-listitem:after": {
    display: "none"
  },
  "& .editor-code": {
    borderRadius: "8px",
    border: "1px solid #E0E0E0",
    backgroundColor: "#FCFCFC",
    fontFamily: "Menlo, Consolas, Monaco, monospace",
    display: "block",
    padding: "8px",
    lineHeight: 1.53,
    fontSize: "13px",
    tabSize: 2,
    overflowX: "auto",
    position: "relative",
  },
  "& code span": {
    border: "none",
  },
  ...(titlesTopLevel === 'h1'
    ? {
      '& h1': {
        ...theme.typography.h4
      },
      '& h2': {
        ...theme.typography.h5
      },
      '& h3': {
        ...theme.typography.h6
      },
      '& h4': {
        ...theme.typography.h6
      },
      '& h5': {
        ...theme.typography.h6
      },
      '& h6': {
        ...theme.typography.h6
      }
    }
    : {
      '& h1': {
        ...theme.typography.h4
      },
      '& h2': {
        ...theme.typography.h4
      },
      '& h3': {
        ...theme.typography.h4
      },
      '& h4': {
        ...theme.typography.h4
      },
      '& h5': {
        ...theme.typography.h5
      },
      '& h6': {
        ...theme.typography.h6
      }
    }),
  '& h1, h2, h3, h4, h5, h6': {
    fontWeight: 500
  },
  "& .editor-layout-container": {
    display: "grid",
    gap: readOnly ? "28px" : "28px",
    margin: "24px 0",
  },
  "& .editor-layout-item": {
    borderRadius: 8,
    border: readOnly ? undefined : `2px solid ${theme.palette.primary.main}80`,
    padding: readOnly ? undefined : "8px 10px  !important",
    margin: readOnly ? undefined : "-10px -12px !important"
  },
  "& .placeholder": {
    color: "#CBC9C4",
    overflow: "hidden",
    position: "absolute",
    textOverflow: "ellipsis",
    top: "6px",
    left: "50px",
    userSelect: "none",
    whiteSpace: "nowrap",
    display: "inline-block",
    pointerEvents: "none",
  },
  ...TableStyles,
  ...ImageStyles(readOnly),
}))