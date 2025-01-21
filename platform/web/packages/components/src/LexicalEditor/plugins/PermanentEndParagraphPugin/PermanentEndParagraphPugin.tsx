import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $isHeadingNode } from '@lexical/rich-text';
import { InputBase } from '@mui/material';
import { $createParagraphNode, $getRoot, $isParagraphNode } from 'lexical';
import { useCallback, useEffect, useState } from 'react'

export interface PermanentEndParagraphPuginProps {
    readOnly: boolean
}

export const PermanentEndParagraphPugin = (props: PermanentEndParagraphPuginProps) => {
    const { readOnly } = props
    const [editor] = useLexicalComposerContext();

    const [isLastNodeAParagraph, setIsLastNodeAParagraph] = useState(true);

    const $readLastNode = useCallback(() => {
        const root = $getRoot();
        const getLastChild = root.getLastChild()
        if ($isParagraphNode(getLastChild) || $isHeadingNode(getLastChild)) {
            setIsLastNodeAParagraph(true)
        } else {
            setIsLastNodeAParagraph(false)
        }
    }, []);

    useEffect(() => {
        return editor.registerUpdateListener(({ editorState }) => {
            editorState.read(() => {
                $readLastNode();
            });
        })
    }, [editor, $readLastNode]);

    const createLastParagraphNode = useCallback(() => {
        editor.update(() => {
            setIsLastNodeAParagraph(false)
            const paragraph = $createParagraphNode()
            const root = $getRoot();
            root.append(paragraph)
            paragraph.select()
        })
    }, [editor]);

    if (readOnly || isLastNodeAParagraph) return <></>
    return (
        <InputBase sx={{ width: "100%", mt: 0.7, mb: 1.5, fontSize: "1.1rem" }} onClick={createLastParagraphNode} />
    )
}
