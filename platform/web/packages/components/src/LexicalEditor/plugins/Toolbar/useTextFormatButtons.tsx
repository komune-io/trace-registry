import { mergeRegister } from '@lexical/utils';
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { $getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND, SELECTION_CHANGE_COMMAND, TextFormatType } from 'lexical';
import { FormatBoldRounded, FormatItalicRounded, FormatUnderlinedRounded } from '@mui/icons-material';
import { TglButton } from './TglButton';

const LowPriority = 1;

export const useTextFormatButtons = () => {
    const [editor] = useLexicalComposerContext();
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isUnderline, setIsUnderline] = useState(false);
    const $updateToolbar = useCallback(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
            setIsBold(selection.hasFormat('bold'));
            setIsItalic(selection.hasFormat('italic'));
            setIsUnderline(selection.hasFormat('underline'));
        }
    }, [editor]);

    useEffect(() => {
        return mergeRegister(
            editor.registerUpdateListener(({ editorState }) => {
                editorState.read(() => {
                    $updateToolbar();
                });
            }),
            editor.registerCommand(
                SELECTION_CHANGE_COMMAND,
                (_payload, _newEditor) => {
                    $updateToolbar();
                    return false;
                },
                LowPriority,
            )
        );
    }, [editor, $updateToolbar]);
    return useMemo(
        () =>
            [
                {
                    value: 'bold',
                    isOn: isBold,
                    icon: <FormatBoldRounded />
                },
                {
                    value: 'italic',
                    isOn: isItalic,
                    icon: <FormatItalicRounded />
                },
                {
                    value: 'underline',
                    isOn: isUnderline,
                    icon: <FormatUnderlinedRounded />
                }
            ].map((deco) => {
                return (
                    <TglButton
                        key={deco.value}
                        value={deco.value}
                        aria-label={deco.value}
                        selected={deco.isOn}
                        onChange={() => {
                            editor.dispatchCommand(FORMAT_TEXT_COMMAND, deco.value as TextFormatType);
                        }}
                    >
                        {deco.icon}
                    </TglButton>
                )
            }),
        [isBold, isItalic, isUnderline, editor.dispatchCommand]
    )
}
