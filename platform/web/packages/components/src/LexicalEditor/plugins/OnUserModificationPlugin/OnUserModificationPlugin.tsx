import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'
import { EditorState } from 'lexical'
import { useCallback, useEffect, useRef } from 'react'

export interface OnUserModificationPluginProps {
    onChange?: (editorState: EditorState) => void
    defaultContent?: any
}

export const OnUserModificationPlugin = (props: OnUserModificationPluginProps) => {
    const { onChange, defaultContent} = props
    const isInit = useRef(!defaultContent)

    useEffect(() => {
      if (!!defaultContent) {
        isInit.current = false
      }
    }, [defaultContent])
    

    const onChangeMemoized = useCallback(
        (editorState: EditorState) => {
            if (onChange) {
                if (!isInit.current) {
                    isInit.current = true
                } else {
                    onChange(editorState)
                }
            }
        },
        [onChange],
    )

    if (!onChange) return <></>
    return (
        <OnChangePlugin ignoreSelectionChange onChange={onChangeMemoized} />
    )
}
