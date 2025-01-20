import { useCallback, useMemo } from 'react'
import { TMSMenuItem, useButtonMenu } from '../../../hooks'
import { $getNodeByKey, $getRoot, $getSelection, $isRangeSelection } from 'lexical';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $isTableNode, getTableElement, getTableObserverFromTableElement, TableNode } from '@lexical/table';
import { $findMatchingParent } from '@lexical/utils';

interface useTableActionMenuParams {
  tableNodeKey: string
}

export const useTableActionMenu = (params: useTableActionMenuParams) => {
  const { tableNodeKey } = params
  const [editor] = useLexicalComposerContext();

  const clearTableSelection = useCallback(() => {
    editor.update(() => {
      const tableNode = $getNodeByKey<TableNode>(tableNodeKey);

      if (!tableNode) return
      const tableElement = getTableElement(
        tableNode,
        editor.getElementByKey(tableNodeKey),
      );

      if (!tableElement) return
      const tableObserver = getTableObserverFromTableElement(tableElement);
      if (tableObserver !== null) {
        tableObserver.$clearHighlight();
      }

      tableNode.markDirty();

      const selection = $getSelection()

      if ($isRangeSelection(selection)) {
        const tableNode = $findMatchingParent(selection.anchor.getNode(), $isTableNode)
        if (tableNode?.getKey() === tableNodeKey) {
          const rootNode = $getRoot();
          rootNode.selectStart();
        }
      }   
    });
  }, [editor, tableNodeKey]);

  const deleteTable = useCallback(() => {
    editor.update(() => {
      const tableNode = $getNodeByKey<TableNode>(tableNodeKey);
      tableNode?.remove();

      clearTableSelection();
    });
  }, [editor, clearTableSelection]);

  const toggleRowStriping = useCallback(() => {
      editor.update(() => {
          const tableNode = $getNodeByKey<TableNode>(tableNodeKey);
          if (tableNode) {
            tableNode.setRowStriping(!tableNode.getRowStriping());
          }
      });
    }, [editor, clearTableSelection]);

  const items = useMemo((): TMSMenuItem[] => [
    {
      key: "delete",
      label: "Delete table",
      onClick: () => deleteTable()
    },
    {
      key: "stripping",
      label: "Toggle row stripping",
      onClick: () => toggleRowStriping()
    },
  ], [
    deleteTable
  ])

  return useButtonMenu({
    closeOnMenuClick: true,
    items
  })
}
