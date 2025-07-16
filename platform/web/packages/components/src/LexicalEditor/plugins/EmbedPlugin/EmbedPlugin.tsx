/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $wrapNodeInElement, mergeRegister } from '@lexical/utils';
import {
  $createParagraphNode,
  $createRangeSelection,
  $getSelection,
  $insertNodes,
  $isNodeSelection,
  $isRootOrShadowRoot,
  $setSelection,
  COMMAND_PRIORITY_EDITOR,
  COMMAND_PRIORITY_HIGH,
  COMMAND_PRIORITY_LOW,
  createCommand,
  DRAGOVER_COMMAND,
  DRAGSTART_COMMAND,
  DROP_COMMAND,
  getDOMSelectionFromTarget,
  isHTMLElement,
  KEY_ENTER_COMMAND,
  KEY_ESCAPE_COMMAND,
  LexicalCommand,
  LexicalEditor,
  ParagraphNode,
} from 'lexical';
import { useEffect } from 'react';
import {
  $createEmbedNode,
  $isEmbedNode,
  EmbedNode,
  EmbedPayload,
} from './EmbedNode';

export type InsertEmbedPayload = Readonly<EmbedPayload>;

export const INSERT_EMBED_COMMAND: LexicalCommand<InsertEmbedPayload> =
  createCommand('INSERT_EMBED_COMMAND');

export const insertEmbedNode = (embedNode: EmbedNode) => {
  $insertNodes([embedNode]);
  if ($isRootOrShadowRoot(embedNode.getParentOrThrow())) {
    $wrapNodeInElement(embedNode, $createParagraphNode).selectEnd();
  }
}


export const EmbedPlugin = (): JSX.Element | null => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (!editor.hasNodes([EmbedNode])) {
      throw new Error('EmbedPlugin: EmbedNode not registered on editor');
    }

    return mergeRegister(
      editor.registerCommand<InsertEmbedPayload>(
        INSERT_EMBED_COMMAND,
        (payload) => {
          const embedNode = $createEmbedNode(payload);
          insertEmbedNode(embedNode)

          return true;
        },
        COMMAND_PRIORITY_EDITOR,
      ),
      editor.registerCommand<DragEvent>(
        DRAGSTART_COMMAND,
        (event) => {
          return $onDragStart(event);
        },
        COMMAND_PRIORITY_HIGH,
      ),
      editor.registerCommand<DragEvent>(
        DRAGOVER_COMMAND,
        (event) => {
          return $onDragover(event);
        },
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand<DragEvent>(
        DROP_COMMAND,
        (event) => {
          return $onDrop(event, editor);
        },
        COMMAND_PRIORITY_HIGH,
      ),
      editor.registerCommand<DragEvent>(
        KEY_ESCAPE_COMMAND,
        () => {
          const node = $getEmbedNodeInSelection();
          if (!node) {
            return false;
          }
          node.selectNext()
          return true;
        },
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand<DragEvent>(
        KEY_ENTER_COMMAND,
        () => {
          const node = $getEmbedNodeInSelection();
          if (!node) {
            return false;
          }
          const sibling = node.getParent()?.getNextSibling() ?? node.getNextSibling()
          if (sibling) {
            sibling.selectStart()
          } else {
            const paragraph = new ParagraphNode()
             const current = node.getParent() ?? node
             current.insertAfter(paragraph)
             paragraph.selectStart()
          }
          return true;
        },
        COMMAND_PRIORITY_LOW,
      ),
    );
  }, [editor]);

  return null;
}

const TRANSPARENT_EMBED =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
const img = document.createElement('img');
img.src = TRANSPARENT_EMBED;

function $onDragStart(event: DragEvent): boolean {
  const node = $getEmbedNodeInSelection();
  if (!node) {
    return false;
  }
  const dataTransfer = event.dataTransfer;
  if (!dataTransfer) {
    return false;
  }
  dataTransfer.setData('text/plain', '_');
  dataTransfer.setDragImage(img, 0, 0);
  dataTransfer.setData(
    'application/x-lexical-drag',
    JSON.stringify({
      data: {
        height: node.__height,
        key: node.getKey(),
        src: node.__src,
        width: node.__width,
      },
      type: 'embed',
    }),
  );

  return true;
}

function $onDragover(event: DragEvent): boolean {
  const node = $getEmbedNodeInSelection();
  if (!node) {
    return false;
  }
  if (!canDropEmbed(event)) {
    event.preventDefault();
  }
  return true;
}

function $onDrop(event: DragEvent, editor: LexicalEditor): boolean {
  const node = $getEmbedNodeInSelection();
  if (!node) {
    return false;
  }
  const data = getDragEmbedData(event);
  if (!data) {
    return false;
  }
  event.preventDefault();
  if (canDropEmbed(event)) {
    const range = getDragSelection(event);
    node.remove();
    const rangeSelection = $createRangeSelection();
    if (range !== null && range !== undefined) {
      rangeSelection.applyDOMRange(range);
    }
    $setSelection(rangeSelection);
    
    editor.dispatchCommand(INSERT_EMBED_COMMAND, data);
  }
  return true;
}

function $getEmbedNodeInSelection(): EmbedNode | null {
  const selection = $getSelection();
  if (!$isNodeSelection(selection)) {
    return null;
  }
  const nodes = selection.getNodes();
  const node = nodes[0];
  return $isEmbedNode(node) ? node : null;
}

function getDragEmbedData(event: DragEvent): null | InsertEmbedPayload {
  const dragData = event.dataTransfer?.getData('application/x-lexical-drag');
  if (!dragData) {
    return null;
  }
  const { type, data } = JSON.parse(dragData);
  if (type !== 'embed') {
    return null;
  }

  return data;
}

declare global {
  interface DragEvent {
    rangeOffset?: number;
    rangeParent?: Node;
  }
}

function canDropEmbed(event: DragEvent): boolean {
  const target = event.target;
  return !!(
    isHTMLElement(target) &&
    !target.closest('code, span.editor-embed') &&
    isHTMLElement(target.parentElement) &&
    target.parentElement.closest('div.editor-input')
  );
}

function getDragSelection(event: DragEvent): Range | null | undefined {
  let range;
  const domSelection = getDOMSelectionFromTarget(event.target);
  if (document.caretRangeFromPoint) {
    range = document.caretRangeFromPoint(event.clientX, event.clientY);
  } else if (event.rangeParent && domSelection !== null) {
    domSelection.collapse(event.rangeParent, event.rangeOffset || 0);
    range = domSelection.getRangeAt(0);
  } else {
    throw Error(`Cannot get the selection when dragging`);
  }

  return range;
}