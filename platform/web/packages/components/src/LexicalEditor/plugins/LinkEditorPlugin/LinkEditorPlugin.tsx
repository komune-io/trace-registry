import type { JSX } from 'react';
import {
  $createLinkNode,
  $isAutoLinkNode,
  $isLinkNode,
  TOGGLE_LINK_COMMAND,
} from '@lexical/link';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $findMatchingParent, mergeRegister } from '@lexical/utils';
import {
  $getSelection,
  $isLineBreakNode,
  $isNodeSelection,
  $isRangeSelection,
  CLICK_COMMAND,
  COMMAND_PRIORITY_CRITICAL,
  COMMAND_PRIORITY_HIGH,
  COMMAND_PRIORITY_LOW,
  getDOMSelection,
  KEY_ESCAPE_COMMAND,
  LexicalEditor,
  SELECTION_CHANGE_COMMAND,
} from 'lexical';
import { Dispatch, useCallback, useEffect, useRef, useState } from 'react';
import * as React from 'react';
import { createPortal } from 'react-dom';
import { IconButton, Paper } from '@mui/material';
import { TextField } from '@komune-io/g2';
import { iconPack } from '../../../Icons';
import { getSelectedNode, sanitizeUrl } from '../../utils';
import { OpenInNewRounded } from '@mui/icons-material';
import { MentionPlugin } from './MentionPlugin';
import { setFloatingElemPositionForLinkEditor } from './setFloatingElemPositionForLinkEditor';

function FloatingLinkEditor({
  editor,
  isLink,
  setIsLink,
  anchorElem,
}: {
  editor: LexicalEditor;
  isLink: boolean;
  setIsLink: Dispatch<boolean>;
  anchorElem: HTMLElement;
}): JSX.Element {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const [editedLinkUrl, setEditedLinkUrl] = useState('');
  const [isSaved, setIsSaved] = useState(true)

  const $updateLinkEditor = useCallback(() => {
    if (!isLink) return
    const selection = $getSelection();
    let url = ""
    if ($isRangeSelection(selection)) {
      const node = getSelectedNode(selection);
      const linkParent = $findMatchingParent(node, $isLinkNode);

      if (linkParent) {
        url = linkParent.getURL()
      } else if ($isLinkNode(node)) {
        url = node.getURL();
      }
      setEditedLinkUrl(url);
    } else if ($isNodeSelection(selection)) {
      const nodes = selection.getNodes();
      if (nodes.length > 0) {
        const node = nodes[0];
        const parent = node.getParent();
        if ($isLinkNode(parent)) {
          url = parent.getURL()
        } else if ($isLinkNode(node)) {
          url = node.getURL()
        }
        setEditedLinkUrl(url);
      }
    }

    const editorElem = editorRef.current;
    const nativeSelection = getDOMSelection(editor._window);
    const activeElement = document.activeElement;

    if (editorElem === null) {
      return;
    }

    const rootElement = editor.getRootElement();

    if (selection !== null && rootElement !== null && editor.isEditable()) {
      let domRect: DOMRect | undefined;

      if ($isNodeSelection(selection)) {
        const nodes = selection.getNodes();
        if (nodes.length > 0) {
          const element = editor.getElementByKey(nodes[0].getKey());
          if (element) {
            domRect = element.getBoundingClientRect();
          }
        }
      } else if (
        nativeSelection !== null &&
        rootElement.contains(nativeSelection.anchorNode)
      ) {
        domRect =
          nativeSelection.focusNode?.parentElement?.getBoundingClientRect();
      }

      if (domRect) {
        setFloatingElemPositionForLinkEditor(domRect, editorElem, anchorElem);
      }
    } else if (!activeElement || activeElement.className !== 'link-input') {
      if (rootElement !== null) {
        setFloatingElemPositionForLinkEditor(null, editorElem, anchorElem);
      }
    }

    return true;
  }, [anchorElem, editor, isLink]);

  const onEscape = useCallback(
    (isSaved?: boolean) => {
      if (isLink) {
        isSaved && setIsSaved(isSaved)
        setIsLink(false);
        return true;
      }
      return false;
    },
    [isLink],
  )


  useEffect(() => {
    const scrollerElem = anchorElem.parentElement;

    const update = () => {
      editor.getEditorState().read(() => {
        $updateLinkEditor();
      });
    };

    window.addEventListener('resize', update);

    if (scrollerElem) {
      scrollerElem.addEventListener('scroll', update);
    }

    return () => {
      window.removeEventListener('resize', update);

      if (scrollerElem) {
        scrollerElem.removeEventListener('scroll', update);
      }
    };
  }, [anchorElem.parentElement, editor, $updateLinkEditor]);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          $updateLinkEditor();
        });
      }),

      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        () => {
          $updateLinkEditor();
          return true;
        },
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand(
        KEY_ESCAPE_COMMAND,
        onEscape,
        COMMAND_PRIORITY_HIGH,
      ),
    );
  }, [editor, $updateLinkEditor, setIsLink, isLink, onEscape]);

  useEffect(() => {
    editor.getEditorState().read(() => {
      $updateLinkEditor();
    });
  }, [editor, $updateLinkEditor]);



  const monitorInputInteraction = useCallback(
    (
      event: React.KeyboardEvent<HTMLDivElement>,
    ) => {
      if (event.key === 'Enter') {
        onEscape()
      } else if (event.key === 'Escape') {
        event.stopPropagation()
        onEscape()
      }
    },
    [onEscape],
  )

  const onValidate = useCallback(
    () => {
      editor.update(() => {
        editor.dispatchCommand(
          TOGGLE_LINK_COMMAND,
          sanitizeUrl(editedLinkUrl),
        );
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          const parent = getSelectedNode(selection).getParent();
          if ($isAutoLinkNode(parent)) {
            const linkNode = $createLinkNode(parent.getURL(), {
              rel: parent.__rel,
              target: parent.__target,
              title: parent.__title,
            });
            parent.replace(linkNode, true);
          }
        }
      });
      setIsSaved(true)
    },
    [editedLinkUrl],
  )


  return (
    <Paper
      ref={editorRef}

      sx={{
        display: isLink ? "flex" : "none",
        position: "absolute",
        top: 0,
        left: 0,
        opacity: isLink ? 1 : 0,
        alignItems: "center",
        gap: 1,
        transition: "opacity 0.5s",
        willChange: "transform",
        width: "fit-content",
        zIndex: 3,
        p: 1
      }}
      elevation={2}
    >
      <TextField
        sx={{
          width: "350px !important",
        }}
        value={editedLinkUrl}
        onChange={(value) => {
          setEditedLinkUrl(value);
          setIsSaved(false)
        }}
        onKeyDown={monitorInputInteraction}
      />
      {!isSaved && <IconButton
        onClick={onValidate}
      >
        {iconPack.validate}
      </IconButton>}
      <IconButton
        component="a"
        href={editedLinkUrl}
        target="_blank"
        sx={{
          color: "black"
        }}
      >
        <OpenInNewRounded />
      </IconButton>
      <IconButton
        onClick={() => {
          editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
        }}
      >
        {iconPack.trash}
      </IconButton>
      <MentionPlugin
        editor={editor}
        linkUrl={editedLinkUrl}
        onEscape={onEscape}
      />
    </Paper>
  );
}

function useFloatingLinkEditorToolbar(
  editor: LexicalEditor,
  anchorElem: HTMLElement,
): JSX.Element | null {
  const [activeEditor, setActiveEditor] = useState(editor);
  const [isLink, setIsLink] = useState(false);

  useEffect(() => {
    function $updateToolbar() {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        const focusNode = getSelectedNode(selection);
        const focusLinkNode = $findMatchingParent(focusNode, $isLinkNode);
        const focusAutoLinkNode = $findMatchingParent(
          focusNode,
          $isAutoLinkNode,
        );
        if (!(focusLinkNode || focusAutoLinkNode)) {
          setIsLink(false);
          return;
        }
        const badNode = selection
          .getNodes()
          .filter((node) => !$isLineBreakNode(node))
          .find((node) => {
            const linkNode = $findMatchingParent(node, $isLinkNode);
            const autoLinkNode = $findMatchingParent(node, $isAutoLinkNode);
            return (
              (focusLinkNode && !focusLinkNode.is(linkNode)) ||
              (linkNode && !linkNode.is(focusLinkNode)) ||
              (focusAutoLinkNode && !focusAutoLinkNode.is(autoLinkNode)) ||
              (autoLinkNode &&
                (!autoLinkNode.is(focusAutoLinkNode) ||
                  autoLinkNode.getIsUnlinked()))
            );
          });
        if (!badNode) {
          setIsLink(true);
        } else {
          setIsLink(false);
        }
      } else if ($isNodeSelection(selection)) {
        const nodes = selection.getNodes();
        if (nodes.length === 0) {
          setIsLink(false);
          return;
        }
        const node = nodes[0];
        const parent = node.getParent();
        if ($isLinkNode(parent) || $isLinkNode(node)) {
          setIsLink(true);
        } else {
          setIsLink(false);
        }
      }
    }
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          $updateToolbar();
        });
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        (_payload, newEditor) => {
          $updateToolbar();
          setActiveEditor(newEditor);
          return false;
        },
        COMMAND_PRIORITY_CRITICAL,
      ),
      editor.registerCommand(
        CLICK_COMMAND,
        (payload) => {
          const selection = $getSelection();
          if ($isRangeSelection(selection)) {
            const node = getSelectedNode(selection);
            const linkNode = $findMatchingParent(node, $isLinkNode);
            if ($isLinkNode(linkNode) && (payload.metaKey || payload.ctrlKey)) {
              window.open(linkNode.getURL(), '_blank');
              return true;
            }
          }
          return false;
        },
        COMMAND_PRIORITY_LOW,
      ),
    );
  }, [editor]);

  return createPortal(
    <FloatingLinkEditor
      editor={activeEditor}
      isLink={isLink}
      anchorElem={anchorElem}
      setIsLink={setIsLink}
    />,
    anchorElem,
  );
}

export const LinkEditorPlugin = ({
  anchorElem = document.body,
}: {
  anchorElem?: HTMLElement;
}): JSX.Element | null => {
  const [editor] = useLexicalComposerContext();
  return useFloatingLinkEditorToolbar(
    editor,
    anchorElem,
  );
}