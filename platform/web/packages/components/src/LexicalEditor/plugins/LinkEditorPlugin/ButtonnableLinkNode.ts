import { LinkAttributes, LinkNode, SerializedLinkNode } from '@lexical/link';
import { addClassNamesToElement } from '@lexical/utils';
import { $applyNodeReplacement, EditorConfig, LexicalNode, LexicalUpdateJSON, NodeKey } from 'lexical';

type LinkHTMLElementType = HTMLAnchorElement | HTMLSpanElement

export type SerializedButtonnableLinkNode = SerializedLinkNode & {
  isButton: boolean;
}

export class ButtonnableLinkNode extends LinkNode {
  __isButton: boolean;

  static getType(): string {
    return 'buttonnableLink';
  }

  static clone(node: ButtonnableLinkNode): ButtonnableLinkNode {
    return new ButtonnableLinkNode(
      node.__url,
      { rel: node.__rel, target: node.__target, title: node.__title },
      node.__isButton,
      node.__key,
    );
  }

  constructor(
    url: string = '',
    attributes: LinkAttributes = {},
    isButton: boolean = false,
    key?: NodeKey,
  ) {
    super(url, attributes, key);
    this.__isButton = isButton;
  }

  getIsButton(): boolean {
    return this.__isButton;
  }

  setIsButton(isButton: boolean): this {
    const writable = this.getWritable();
    writable.__isButton = isButton;
    return writable
  }

  createDOM(config: EditorConfig): LinkHTMLElementType {
    const element = document.createElement('a');
    this.updateLinkDOM(null, element, config);
    addClassNamesToElement(element, config.theme.link, this.__isButton ? config.theme.linkButton : "");
    return element;
  }

  updateDOM(
    prevNode: this,
    anchor: LinkHTMLElementType,
    config: EditorConfig,
  ): boolean {
    this.updateLinkDOM(prevNode, anchor, config);
    if (!this.__isButton && anchor.classList.contains(config.theme.linkButton)) {
      anchor.classList.remove(config.theme.linkButton);
    }
    if (this.__isButton && !anchor.classList.contains(config.theme.linkButton)) {
      anchor.classList.add(config.theme.linkButton);
    }
    return false;
  }

  static importJSON(serializedNode: SerializedButtonnableLinkNode): ButtonnableLinkNode {
    return $createButtonableLinkNode().updateFromJSON(serializedNode);
  }

  updateFromJSON(serializedNode: LexicalUpdateJSON<SerializedButtonnableLinkNode>): this {
    return super
      .updateFromJSON(serializedNode)
      .setIsButton(serializedNode.isButton || false);
  }

  exportJSON(): SerializedButtonnableLinkNode {
    return {
      ...super.exportJSON(),
      isButton: this.getIsButton(),
    };
  }


}

export function $createButtonableLinkNode(
  url: string = '',
  attributes?: LinkAttributes,
  isButton: boolean = false,
): ButtonnableLinkNode {
  return $applyNodeReplacement(new ButtonnableLinkNode(url, attributes, isButton));
}

export function $isButtonableLinkNode(
  node: LexicalNode | null | undefined,
): node is ButtonnableLinkNode {
  return node instanceof ButtonnableLinkNode;
}