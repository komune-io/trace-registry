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
import { EmbedComponent } from "./EmbedComponent"

export interface EmbedPayload {
  height?: string | number;
  key?: NodeKey;
  src: string;
  width?: string | number;
}

export type SerializedEmbedNode = Spread<
  {
    height?: string | number;
    src: string;
    width?: string | number;
  },
  SerializedLexicalNode
>;

export class EmbedNode extends DecoratorNode<JSX.Element> {
  __src: string;
  __width: string | number;
  __height: string | number;

  static getType(): string {
    return 'embed';
  }

  static clone(node: EmbedNode): EmbedNode {
    return new EmbedNode(
      node.__src,
      node.__width,
      node.__height,
      node.__key,
    );
  }

  static importJSON(serializedNode: SerializedEmbedNode): EmbedNode {
    const { height, width, src } =
      serializedNode;
    const node = $createEmbedNode({
      height,
      src,
      width
    });
    return node;
  }

  exportDOM(): DOMExportOutput {
    const element = document.createElement('iframe');
    element.setAttribute('src', this.__src);
    element.setAttribute('width', this.__width.toString());
    element.setAttribute('height', this.__height.toString());
    return { element };
  }

  static importDOM(): DOMConversionMap | null {
    return {
      iframe: (_: Node) => ({
        conversion: (domNode: Node) => {
          const element = domNode as HTMLIFrameElement;
          const { src, width, height } = element;
          return {
            node: $createEmbedNode({
              src,
              width: Number(width),
              height: Number(height),
            }),
          } as DOMConversionOutput;
        },
        priority: 0,
      }),
    };
  }


  constructor(
    src: string,
    width?: string | number,
    height?: string | number,
    key?: NodeKey,
  ) {
    super(key);
    this.__src = src;
    this.__width = width || '100%';
    this.__height = height || 300;
  }

  exportJSON(): SerializedEmbedNode {
    return {
      height: this.__height === 'inherit' ? 0 : this.__height,
      src: this.getSrc(),
      type: 'embed',
      version: 1,
      width: this.__width === 'inherit' ? 0 : this.__width,
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
    if (theme.embed) {
      span.classList.add(theme.embed);
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

  decorate(): JSX.Element {
    return (
      <Suspense fallback={null}>
        <EmbedComponent
          src={this.__src}
          width={this.__width}
          height={this.__height}
          nodeKey={this.getKey()}
          resizable={true}
        />
      </Suspense>
    );
  }
}

export function $createEmbedNode({
  height,
  src,
  width,
  key,
}: EmbedPayload): EmbedNode {
  return $applyNodeReplacement(
    new EmbedNode(
      src,
      width,
      height,
      key,
    ),
  );
}

export function $isEmbedNode(
  node: LexicalNode | null | undefined,
): node is EmbedNode {
  return node instanceof EmbedNode;
}