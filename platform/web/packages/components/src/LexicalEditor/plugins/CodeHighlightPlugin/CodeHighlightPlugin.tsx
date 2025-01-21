import { registerCodeHighlighting } from "@lexical/code";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useEffect } from "react";
import {
  mergeRegister,
} from '@lexical/utils';
import { $createParagraphNode, $getSelection, $isRangeSelection, COMMAND_PRIORITY_LOW, KEY_ARROW_DOWN_COMMAND, KEY_ARROW_LEFT_COMMAND, KEY_ARROW_RIGHT_COMMAND, KEY_ARROW_UP_COMMAND } from "lexical";
import {  $isCodeNode } from "@lexical/code";

export const CodeHighlightPlugin = () => {
  const [editor] = useLexicalComposerContext();
  const $onEscape = (before: boolean) => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      const anchor = selection.focus.getNode();
      const anchorsibling = before ? anchor?.getPreviousSibling() : anchor?.getNextSibling()
      const parent = anchor.getParent()
      const Parentsibling = before ? parent?.getPreviousSibling() : parent?.getNextSibling()
      const isFocusAtTheEdge = before ? selection.focus.offset === 0 : selection.focus.offset === anchor.getTextContentSize()
      if (isFocusAtTheEdge && $isCodeNode(parent) && anchorsibling === null && Parentsibling === null) {
        const newParagraph = $createParagraphNode()
        if (before) {
          parent.insertBefore(newParagraph);
        } else {
          parent.insertAfter(newParagraph);
        }
        newParagraph.select()
      }
    }

    return false;
  };
  useEffect(() => {
    return mergeRegister(
      editor.registerCommand(
        KEY_ARROW_DOWN_COMMAND,
        () => $onEscape(false),
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand(
        KEY_ARROW_RIGHT_COMMAND,
        () => $onEscape(false),
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand(
        KEY_ARROW_UP_COMMAND,
        () => $onEscape(true),
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand(
        KEY_ARROW_LEFT_COMMAND,
        () => $onEscape(true),
        COMMAND_PRIORITY_LOW,
      ),
      registerCodeHighlighting(editor)
    );
  }, [editor]);
  return null;
}
