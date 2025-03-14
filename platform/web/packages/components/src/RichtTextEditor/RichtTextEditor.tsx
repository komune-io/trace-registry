import { LexicalEditor, LexicalEditorProps } from '../LexicalEditor'

interface RichtTextEditorProps extends LexicalEditorProps {

}

export const RichtTextEditor = (props: RichtTextEditorProps) => {
    const { styleContainerProps, ...other } = props
    return <LexicalEditor
        styleContainerProps={{
            ...styleContainerProps,
            sx: {
                '& h1, h2, h3, h4, h5, h6': {
                    borderBottom: "#e0e0e0 solid 1px",
                    pb: "8px",
                    mt: 7
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
