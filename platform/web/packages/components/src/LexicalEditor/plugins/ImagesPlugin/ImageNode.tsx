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
    LexicalEditor,
    LexicalNode,
    NodeKey,
    SerializedEditor,
    SerializedLexicalNode,
    Spread,
  } from 'lexical';
  
  import {$applyNodeReplacement, createEditor, DecoratorNode} from 'lexical';
  import {Suspense} from 'react';
  import {ImageComponent} from "./ImageComponent"
  
  export interface ImagePayload {
    altText: string;
    caption?: LexicalEditor;
    height?: number;
    key?: NodeKey;
    maxWidth?: number;
    src: string;
    width?: number;
    captionsEnabled?: boolean;
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
    const {alt: altText, src, width, height} = img;
    const node = $createImageNode({altText, height, src, width});
    return {node};
  }
  
  export type SerializedImageNode = Spread<
    {
      altText: string;
      caption: SerializedEditor;
      height?: number;
      maxWidth?: number;
      src: string;
      width?: number;
      unCached?: boolean;
    },
    SerializedLexicalNode
  >;
  
  export class ImageNode extends DecoratorNode<JSX.Element> {
    __src: string;
    __altText: string;
    __width: 'inherit' | number;
    __height: 'inherit' | number;
    __unCached?: boolean;
    __maxWidth?: number;
    __caption: LexicalEditor;
    // Captions cannot yet be used within editor cells
    __captionsEnabled: boolean;
  
    static getType(): string {
      return 'image';
    }
  
    static clone(node: ImageNode): ImageNode {
      return new ImageNode(
        node.__src,
        node.__altText,
        node.__maxWidth,
        node.__width,
        node.__height,
        node.__caption,
        node.__captionsEnabled,
        node.__key,
        node.__unCached,
      );
    }
  
    static importJSON(serializedNode: SerializedImageNode): ImageNode {
      const {altText, height, width, maxWidth, caption, src, unCached} =
        serializedNode;
      const node = $createImageNode({
        altText,
        height,
        maxWidth,
        src,
        width,
        unCached
      });
      const nestedEditor = node.__caption;
      const editorState = nestedEditor.parseEditorState(caption.editorState);
      if (!editorState.isEmpty()) {
        nestedEditor.setEditorState(editorState);
      }
      return node;
    }
  
    exportDOM(): DOMExportOutput {
      const element = document.createElement('img');
      element.setAttribute('src', this.__src);
      element.setAttribute('alt', this.__altText);
      element.setAttribute('width', this.__width.toString());
      element.setAttribute('height', this.__height.toString());
      return {element};
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
      maxWidth?: number,
      width?: 'inherit' | number,
      height?: 'inherit' | number,
      caption?: LexicalEditor,
      captionsEnabled?: boolean,
      key?: NodeKey,
      unCached?: boolean
    ) {
      super(key);
      this.__src = src;
      this.__altText = altText;
      this.__maxWidth = maxWidth;
      this.__width = width || 'inherit';
      this.__height = height || 'inherit';
      this.__caption =
        caption ||
        createEditor({
          nodes: [],
        });
      this.__captionsEnabled = captionsEnabled || captionsEnabled === undefined;
      this.__unCached = unCached;
    }
  
    exportJSON(): SerializedImageNode {
      return {
        altText: this.getAltText(),
        caption: this.__caption.toJSON(),
        height: this.__height === 'inherit' ? 0 : this.__height,
        maxWidth: this.__maxWidth,
        src: this.getSrc(),
        type: 'image',
        version: 1,
        width: this.__width === 'inherit' ? 0 : this.__width,
        unCached: this.__unCached
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
      const className = theme.image;
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
            maxWidth={this.__maxWidth}
            nodeKey={this.getKey()}
            caption={this.__caption}
            captionsEnabled={this.__captionsEnabled}
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
    maxWidth,
    captionsEnabled,
    src,
    width,
    caption,
    key,
    unCached,
  }: ImagePayload): ImageNode {
    return $applyNodeReplacement(
      new ImageNode(
        src,
        altText,
        maxWidth,
        width,
        height,
        caption,
        captionsEnabled,
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