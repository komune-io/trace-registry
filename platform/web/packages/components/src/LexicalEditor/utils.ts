import { $isAtNodeEnd } from '@lexical/selection';
import { ElementNode, LexicalNode, RangeSelection, TextNode } from 'lexical';

export const getSelectedNode = (
  selection: RangeSelection,
): TextNode | ElementNode => {
  const anchor = selection.anchor;
  const focus = selection.focus;
  const anchorNode = selection.anchor.getNode();
  const focusNode = selection.focus.getNode();
  if (anchorNode === focusNode) {
    return anchorNode;
  }
  const isBackward = selection.isBackward();
  if (isBackward) {
    return $isAtNodeEnd(focus) ? anchorNode : focusNode;
  } else {
    return $isAtNodeEnd(anchor) ? anchorNode : focusNode;
  }
}

export function getDOMRangeRect(
  nativeSelection: Selection,
  rootElement: HTMLElement,
): DOMRect {
  const domRange = nativeSelection.getRangeAt(0);

  let rect;

  if (nativeSelection.anchorNode === rootElement) {
    let inner = rootElement;
    while (inner.firstElementChild != null) {
      inner = inner.firstElementChild as HTMLElement;
    }
    rect = inner.getBoundingClientRect();
  } else {
    rect = domRange.getBoundingClientRect();
  }

  return rect;
}


const VERTICAL_GAP = 10;
const HORIZONTAL_OFFSET = 5;

export function setFloatingElemPosition(
  targetRect: DOMRect | null,
  floatingElem: HTMLElement,
  anchorElem: HTMLElement,
  isLink: boolean = false,
  verticalGap: number = VERTICAL_GAP,
  horizontalOffset: number = HORIZONTAL_OFFSET,
): void {
  const scrollerElem = anchorElem.parentElement;

  if (targetRect === null || !scrollerElem) {
    if (!isLink) floatingElem.style.opacity = '0';
    floatingElem.style.transform = 'translate(-10000px, -10000px)';
    return;
  }

  const floatingElemRect = floatingElem.getBoundingClientRect();
  const anchorElementRect = anchorElem.getBoundingClientRect();
  const editorScrollerRect = scrollerElem.getBoundingClientRect();
  console.log("///////")
  console.log("targetRect.top", targetRect.top)
  console.log("floatingElemRect.height", floatingElemRect.height)
  console.log("verticalGap", verticalGap)
  console.log("///////")
  let top = targetRect.top - floatingElemRect.height - verticalGap;
  let left = targetRect.left - horizontalOffset;
 

  if (top < editorScrollerRect.top) {
    // adjusted height for link element if the element is at top
    top +=
      floatingElemRect.height +
      targetRect.height +
      verticalGap * (isLink ? 9 : 2);
  }

  if (left + floatingElemRect.width > editorScrollerRect.right) {
    left = editorScrollerRect.right - floatingElemRect.width - horizontalOffset;
  }

  top -= anchorElementRect.top;
  left -= anchorElementRect.left;

  if (!isLink) floatingElem.style.opacity = '1';
  floatingElem.style.transform = `translate(${left}px, ${top}px)`;
}

export function $getNextSiblingOrParentSibling(
  node: LexicalNode,
): null | [LexicalNode, number] {
  let node_: null | LexicalNode = node;
  // Find immediate sibling or nearest parent sibling
  let sibling: LexicalNode | null = null;
  let depthDiff = 0;

  while (sibling === null && node_ !== null) {
    sibling = node_.getNextSibling();

    if (sibling === null) {
      node_ = node_.getParent();
      depthDiff--;
    } else {
      node_ = sibling;
    }
  }

  if (node_ === null) {
    return null;
  }
  return [node_, depthDiff];
}


const SUPPORTED_URL_PROTOCOLS = new Set([
  'http:',
  'https:',
  'mailto:',
  'sms:',
  'tel:',
]);

export function sanitizeUrl(url: string): string {
  try {
    const parsedUrl = new URL(url);
    // eslint-disable-next-line no-script-url
    if (!SUPPORTED_URL_PROTOCOLS.has(parsedUrl.protocol)) {
      return 'about:blank';
    }
  } catch {
    return url;
  }
  return url;
}