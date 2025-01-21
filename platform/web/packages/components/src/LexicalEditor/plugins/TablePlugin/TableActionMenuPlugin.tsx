import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useEffect, useMemo, useState, } from "react";
import { createPortal } from "react-dom";
import { NodeKey, NodeMutation } from "lexical"
import { TableNode } from "@lexical/table";
import { MoreVertRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useTableActionMenu } from "./useTableActionMenu";


export interface TableActionMenuPluginProps {
  anchorElem?: HTMLElement;
}

export const TableActionMenuPlugin = (props: TableActionMenuPluginProps) => {
  const { anchorElem } = props
  const [editor] = useLexicalComposerContext();

  const [allTableNodeKey, setAllTableNodeKey] = useState<string[]>([])

  const $bindListeners = (nodes: Map<NodeKey, NodeMutation>) => {
    nodes.forEach((mutation, key) => {
      if (mutation === "created") {
        setAllTableNodeKey((old) => {
          if (old.find((el) => el === key)) return old
          const copy = [...old]
          copy.push(key)
          return copy
        })
      }
      if (mutation === "destroyed") {
        setAllTableNodeKey((old) => {
          const copy = [...old]
          const index = copy.findIndex((value) => value === key)
          copy.splice(index, 1)
          return copy
        })
      } 
    })
  };

  useEffect(() => {
    return editor.registerMutationListener(TableNode, $bindListeners)
  }, [editor]);

  if (!anchorElem || allTableNodeKey.length === 0 || !editor.isEditable) return null

  return allTableNodeKey.map((key) => (
    <TableMoreOptionsButton
      key={key}
      anchorElem={anchorElem}
      tableNodeKey={key}
    />
  ))
}



interface TableMoreOptionsButtonProps {
  anchorElem: HTMLElement
  tableNodeKey: string
}

const TableMoreOptionsButton = (props: TableMoreOptionsButtonProps) => {
  const { anchorElem, tableNodeKey } = props
  const [editor] = useLexicalComposerContext();

  const tableElement = useMemo(() => {
    let element: HTMLElement | null = null
    editor.read(() => {
      element = editor.getElementByKey(tableNodeKey)
    })
    return element as HTMLElement | null
  }, [tableNodeKey, editor])

  const { buttonProps, menu } = useTableActionMenu({
    tableNodeKey
  })

  if (tableElement == null || !editor.isEditable()) return null
  const tableElementRect = tableElement.getBoundingClientRect();
  const anchorElemRect = anchorElem.getBoundingClientRect()
  return createPortal(
    <>
      <IconButton
        {...buttonProps}
        sx={{
          position: "absolute",
          top: 0, left: 0,
          transform: `translate(${tableElementRect.left - anchorElemRect.left + tableElementRect.width + 12}px, ${tableElementRect.top - anchorElemRect.top + 6}px)`
        }}
        size="small"
      >
        <MoreVertRounded />
      </IconButton>
      {menu}
    </>,
    anchorElem,
  )
}
