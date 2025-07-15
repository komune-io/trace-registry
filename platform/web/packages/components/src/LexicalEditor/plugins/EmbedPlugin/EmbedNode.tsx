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
  
  import {$applyNodeReplacement, DecoratorNode} from 'lexical';
  import {Suspense} from 'react';
  import {EmbedComponent} from "./EmbedComponent"
  
  export interface EmbedPayload {
    height?: number;
    key?: NodeKey;
    src: string;
    width?: number;
  }
  
  export type SerializedEmbedNode = Spread<
    {
      height?: number;
      src: string;
      width?: number;
    },
    SerializedLexicalNode
  >;
  
  export class EmbedNode extends DecoratorNode<JSX.Element> {
    __src: string;
    __width: 'inherit' | number;
    __height: 'inherit' | number;
  
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
      const {height, width, src} =
        serializedNode;
      const node = $createEmbedNode({
        height,
        src,
        width
      });
      return node;
    }
  
    exportDOM(): DOMExportOutput {
      const element = document.createElement('embed');
      element.setAttribute('src', this.__src);
      element.setAttribute('width', this.__width.toString());
      element.setAttribute('height', this.__height.toString());
      return {element};
    }
  
    static importDOM(): DOMConversionMap | null {
      return {
        embed: (_: Node) => ({
          conversion: (domNode: Node) => {
            const element = domNode as HTMLIFrameElement;
            const {src, width, height} = element;
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
      width?: 'inherit' | number,
      height?: 'inherit' | number,
      key?: NodeKey,
    ) {
      super(key);
      this.__src = src;
      this.__width = width || 'inherit';
      this.__height = height || 'inherit';
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
      width: 'inherit' | number,
      height: 'inherit' | number,
    ): void {
      const writable = this.getWritable();
      writable.__width = width;
      writable.__height = height;
    }
  
    // View
  
    createDOM(config: EditorConfig): HTMLElement {
      const span = document.createElement('span');
      const theme = config.theme;
      const className = theme.embed;
      if (className !== undefined) {
        span.className = className;
      }
      return span;
    }
  
    updateDOM(): false {
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