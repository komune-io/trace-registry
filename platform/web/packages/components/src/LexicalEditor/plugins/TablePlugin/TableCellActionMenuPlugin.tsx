import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useCallback, useEffect, useState, } from "react";
import { createPortal } from "react-dom";
import { NodeKey, NodeMutation } from "lexical"
import { TableCellNode } from "@lexical/table";
import { MoreVertRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useTableCellActionMenu } from "./useTableCellActionMenu";


export interface TableCellActionMenuPluginProps {
  anchorElem?: HTMLElement;
}

export const TableCellActionMenuPlugin = (props: TableCellActionMenuPluginProps) => {
  const { anchorElem } = props
  const [editor] = useLexicalComposerContext();

  const [hoveredElement, setHoveredElement] = useState<HTMLElement | undefined>(undefined)
  const [hoveredCellNodeKey, setHoveredCellNodeKey] = useState<string | undefined>(undefined)

  const onMouseOver = useCallback(
    (element: HTMLElement, nodeKey: string) => () => {
      setHoveredElement(element)
      setHoveredCellNodeKey(nodeKey)
    },
    [],
  )

  const onMouseOut = useCallback(
    () => {
      setHoveredElement(undefined)
      setHoveredCellNodeKey(undefined)
    },
    [],
  )

  useEffect(() => {
    if (anchorElem) {
      anchorElem?.addEventListener('mouseleave', onMouseOut)
    }

    return () => {
      if (anchorElem) {
        anchorElem?.removeEventListener('mouseleave', onMouseOut)
      }
    }
  }, [anchorElem])

  const $bindListeners = (nodes: Map<NodeKey, NodeMutation>) => {
    nodes.forEach((mutation, key) => {
      if (mutation === "created") {
        const element = editor.getElementByKey(key)
        if (element) {
          const listener = onMouseOver(element, key)
          element?.addEventListener('mouseenter', listener)
        }
      }
      if (mutation === "destroyed") {
        const element = editor.getElementByKey(key)
        if (element) {
          const listener = onMouseOver(element, key)
          element?.removeEventListener('mouseenter', listener)
          if (hoveredElement === element) {
            setHoveredElement(undefined)
          }
        }
      }
    })
  };

  useEffect(() => {
    return editor.registerMutationListener(TableCellNode, $bindListeners)
  }, [editor]);

  if (!anchorElem || !hoveredElement || !editor.isEditable() || !hoveredCellNodeKey) return null

  return <CellMoreOptionsButton anchorElem={anchorElem} hoveredElement={hoveredElement} hoveredCellNodeKey={hoveredCellNodeKey} />
}



interface CellMoreOptionsButtonProps {
  hoveredElement: HTMLElement
  anchorElem: HTMLElement
  hoveredCellNodeKey: string
}

const CellMoreOptionsButton = (props: CellMoreOptionsButtonProps) => {
  const { anchorElem, hoveredElement, hoveredCellNodeKey } = props

  const hoveredElementRect = hoveredElement.getBoundingClientRect();
  const anchorElemRect = anchorElem.getBoundingClientRect()

  const { buttonProps, menu } = useTableCellActionMenu({
    hoveredCellNodeKey
  })

  return createPortal(
    <>
      <IconButton
        {...buttonProps}
        sx={{
          position: "absolute",
          top: 0, left: 0,
          transform: `translate(${hoveredElementRect.left - anchorElemRect.left + hoveredElementRect.width - 32}px, ${hoveredElementRect.top - anchorElemRect.top + 6}px)`
        }}
        size="small"
      >
        <MoreVertRounded fontSize="small" />
      </IconButton>
      {menu}
    </>,
    anchorElem,
  )
}
