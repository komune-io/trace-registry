import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'
import { EditorState } from 'lexical'
import { useCallback } from 'react'

export interface OnUserModificationPluginProps {
    onChange?: (editorState: EditorState) => void
}

export const OnUserModificationPlugin = (props: OnUserModificationPluginProps) => {
    const { onChange } = props


    const onChangeMemoized = useCallback(
        (editorState: EditorState) => {
            if (onChange) onChange(editorState)
        },
        [onChange],
    )

    if (!onChange) return <></>
    return (
        <OnChangePlugin ignoreSelectionChange onChange={onChangeMemoized} />
    )
}
