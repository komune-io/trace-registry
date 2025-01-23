import { LexicalEditor, LexicalEditorProps } from '../LexicalEditor'

interface WCo2EditorProps extends LexicalEditorProps {

}

export const WCo2Editor = (props: WCo2EditorProps) => {
    const { styleContainerProps, ...other } = props
    return <LexicalEditor
        styleContainerProps={{
            ...styleContainerProps,
            sx: {
                '& h1, h2, h3, h4, h5, h6': {
                    borderBottom: "#e0e0e0 solid 1px",
                    pb: "6px"
                },
                "& .editor-input": {
                    p: 0
                },
                ...styleContainerProps?.sx
            }
        }}
        {...other}
    />
}
