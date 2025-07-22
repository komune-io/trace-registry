/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type {
  DOMConversionMap,
  DOMConversionOutput,
  DOMExportOutput,
  EditorConfig,
  LexicalNode,
  NodeKey,
  SerializedLexicalNode,
  Spread,
} from 'lexical';

import { $applyNodeReplacement, DecoratorNode } from 'lexical';
import { Suspense } from 'react';
import { ImageComponent } from "./ImageComponent"

export interface ImagePayload {
  altText: string;
  height?: string | number;
  key?: NodeKey;
  src: string;
  width?: string | number;
  unCached?: boolean;
}

function isGoogleDocCheckboxImg(img: HTMLImageElement): boolean {
  return (
    img.parentElement != null &&
    img.parentElement.tagName === 'LI' &&
    img.previousSibling === null &&
    img.getAttribute('aria-roledescription') === 'checkbox'
  );
}

function $convertImageElement(domNode: Node): null | DOMConversionOutput {
  const img = domNode as HTMLImageElement;
  if (img.src.startsWith('file:///') || isGoogleDocCheckboxImg(img)) {
    return null;
  }
  const { alt: altText, src, width, height } = img;
  const node = $createImageNode({ altText, height, src, width });
  return { node };
}

export type SerializedImageNode = Spread<
  {
    altText: string;
    height?: string | number;
    src: string;
    width?: string | number;
    unCached?: boolean;
  },
  SerializedLexicalNode
>;

export class ImageNode extends DecoratorNode<JSX.Element> {
  __src: string;
  __altText: string;
  __width: string | number;
  __height: string | number;
  __unCached?: boolean;

  static getType(): string {
    return 'image';
  }

  static clone(node: ImageNode): ImageNode {
    return new ImageNode(
      node.__src,
      node.__altText,
      node.__width,
      node.__height,
      node.__key,
      node.__unCached,
    );
  }

  static importJSON(serializedNode: SerializedImageNode): ImageNode {
    const { altText, height, width, src, unCached } =
      serializedNode;
    const node = $createImageNode({
      altText,
      height,
      src,
      width,
      unCached
    });
    return node;
  }

  exportDOM(): DOMExportOutput {
    const element = document.createElement('img');
    element.setAttribute('src', this.__src);
    element.setAttribute('alt', this.__altText);
    element.setAttribute('width', this.__width.toString());
    element.setAttribute('height', this.__height.toString());
    return { element };
  }

  static importDOM(): DOMConversionMap | null {
    return {
      img: (_: Node) => ({
        conversion: $convertImageElement,
        priority: 0,
      }),
    };
  }

  constructor(
    src: string,
    altText: string,
    width?: string | number,
    height?: string | number,
    key?: NodeKey,
    unCached?: boolean
  ) {
    super(key);
    this.__src = src;
    this.__altText = altText;
    this.__width = width || 'inherit';
    this.__height = height || 'inherit';
    this.__unCached = unCached;
  }

  exportJSON(): SerializedImageNode {
    return {
      altText: this.getAltText(),
      height: this.__height === 'inherit' ? 0 : this.__height,
      src: this.getSrc(),
      type: 'image',
      version: 1,
      width: this.__width === 'inherit' ? 0 : this.__width,
      unCached: this.__unCached
    };
  }

  setWidthAndHeight(
    width?: string | number,
    height?: string | number,
  ): void {
    const writable = this.getWritable();
    if (width !== undefined) {
      writable.__width = width;
    }
    if (height !== undefined) {
      writable.__height = height;
    }
  }

  // View

  createDOM(config: EditorConfig): HTMLElement {
    const span = document.createElement('span');
    const theme = config.theme;
    if (theme.image) {
      span.classList.add(theme.image);
    }
    if (this.__width === "100%") {
      span.classList.add("full-width");
    }
    return span;
  }

  updateDOM(
    _,
    anchor: HTMLSpanElement,
  ): boolean {

    if (this.__width !== "100%" && anchor.classList.contains("full-width")) {
      anchor.classList.remove("full-width");
    }
    if (this.__width === "100%" && !anchor.classList.contains("full-width")) {
      anchor.classList.add("full-width");
    }
    return false;
  }

  setSrc(
    src: string
  ): void {
    const writable = this.getWritable();
    writable.__src = src;
  }

  getSrc(): string {
    return this.__src;
  }

  getAltText(): string {
    return this.__altText;
  }

  decorate(): JSX.Element {
    return (
      <Suspense fallback={null}>
        <ImageComponent
          src={this.__src}
          altText={this.__altText}
          width={this.__width}
          height={this.__height}
          nodeKey={this.getKey()}
          unCached={this.__unCached}
          resizable={true}
        />
      </Suspense>
    );
  }
}

export function $createImageNode({
  altText,
  height,
  src,
  width,
  key,
  unCached,
}: ImagePayload): ImageNode {
  return $applyNodeReplacement(
    new ImageNode(
      src,
      altText,
      width,
      height,
      key,
      unCached,
    ),
  );
}

export function $isImageNode(
  node: LexicalNode | null | undefined,
): node is ImageNode {
  return node instanceof ImageNode;
}