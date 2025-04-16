import { mergeRegister } from '@lexical/utils';
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { $getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND, SELECTION_CHANGE_COMMAND, TextFormatType } from 'lexical';
import { FormatBoldRounded, FormatItalicRounded, FormatUnderlinedRounded, Link } from '@mui/icons-material';
import { TglButton } from './TglButton';
import { getSelectedNode } from '../../utils';
import { $isLinkNode, TOGGLE_LINK_COMMAND } from '@lexical/link';

const LowPriority = 1;

export const useTextFormatButtons = () => {
    const [editor] = useLexicalComposerContext();
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isUnderline, setIsUnderline] = useState(false);
    const [isLink, setIsLink] = useState(false);
    const $updateToolbar = useCallback(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
            setIsBold(selection.hasFormat('bold'));
            setIsItalic(selection.hasFormat('italic'));
            setIsUnderline(selection.hasFormat('underline'));
            const node = getSelectedNode(selection);
            const parent = node.getParent();
            const isLink = $isLinkNode(parent) || $isLinkNode(node);
            setIsLink(isLink);
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

    const insertLink = useCallback(() => {
        if (!isLink) {
          editor.dispatchCommand(
            TOGGLE_LINK_COMMAND,
            "",
          );
        } else {
          editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
        }
      }, [editor, isLink]);

    return useMemo(
        () =>
            [
                ...([
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
            })),
            <TglButton
            key={"link"}
            value="link"
            aria-label="link"
            selected={isLink}
            onChange={insertLink}
        >
            <Link />
        </TglButton>
        ],
        [isBold, isItalic, isUnderline, editor.dispatchCommand, insertLink, isLink]
    )
}
