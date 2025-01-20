import { useCallback, useEffect, useMemo, useState } from 'react'
import { TMSMenuItem, useButtonMenu } from '../../../hooks'
import { $createParagraphNode, $getNodeByKey, $getSelection, $isElementNode, $isParagraphNode, $isRangeSelection, $isTextNode, ElementNode } from 'lexical';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $deleteTableColumn__EXPERIMENTAL, $deleteTableRow__EXPERIMENTAL, $getNodeTriplet, $insertTableColumn__EXPERIMENTAL, $insertTableRow__EXPERIMENTAL, $isTableCellNode, $isTableNode, $isTableSelection, $unmergeCell, TableCellNode, TableSelection } from '@lexical/table';
import { $findMatchingParent } from '@lexical/utils';

function computeSelectionCount(selection: TableSelection): {
  columns: number;
  rows: number;
} {
  const selectionShape = selection.getShape();
  return {
    columns: selectionShape.toX - selectionShape.fromX + 1,
    rows: selectionShape.toY - selectionShape.fromY + 1,
  };
}

function $canUnmerge(): boolean {
  const selection = $getSelection();
  if (
    ($isRangeSelection(selection) && !selection.isCollapsed()) ||
    ($isTableSelection(selection) && !selection.anchor.is(selection.focus)) ||
    (!$isRangeSelection(selection) && !$isTableSelection(selection))
  ) {
    return false;
  }
  const [cell] = $getNodeTriplet(selection.anchor);
  return cell.__colSpan > 1 || cell.__rowSpan > 1;
}

function $cellContainsEmptyParagraph(cell: TableCellNode): boolean {
  if (cell.getChildrenSize() !== 1) {
    return false;
  }
  const firstChild = cell.getFirstChildOrThrow();
  if (!$isParagraphNode(firstChild) || !firstChild.isEmpty()) {
    return false;
  }
  return true;
}

function $selectLastDescendant(node: ElementNode): void {
  const lastDescendant = node.getLastDescendant();
  if ($isTextNode(lastDescendant)) {
    lastDescendant.select();
  } else if ($isElementNode(lastDescendant)) {
    lastDescendant.selectEnd();
  } else if (lastDescendant !== null) {
    lastDescendant.selectNext();
  }
}



interface useTableCellActionMenuParams {
  hoveredCellNodeKey: string
}

export const useTableCellActionMenu = (params: useTableCellActionMenuParams) => {
  const { hoveredCellNodeKey } = params
  const [editor] = useLexicalComposerContext();
  const [selectionCounts, updateSelectionCounts] = useState({
    columns: 1,
    rows: 1,
  });
  const [canMergeCells, setCanMergeCells] = useState(false);
  const [canUnmergeCell, setCanUnmergeCell] = useState(false);

  useEffect(() => {
    editor.getEditorState().read(() => {
      const selection = $getSelection();
      // Merge cells
      if ($isTableSelection(selection)) {
        const currentSelectionCounts = computeSelectionCount(selection);
        updateSelectionCounts(computeSelectionCount(selection));
        setCanMergeCells(
          currentSelectionCounts.columns > 1 || currentSelectionCounts.rows > 1,
        );
      }

      if ($isRangeSelection(selection)) {
        const table = $findMatchingParent(selection.anchor.getNode(), $isTableNode)
        if (table) {
          // Unmerge cell
          setCanUnmergeCell($canUnmerge());
        }
      }

    });
  }, [editor]);

  const mergeTableCellsAtSelection = useCallback(
    () => {
      editor.update(() => {
        const selection = $getSelection();
        if ($isTableSelection(selection)) {
          const { columns, rows } = computeSelectionCount(selection);
          const nodes = selection.getNodes();
          let firstCell: null | TableCellNode = null;
          for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            if ($isTableCellNode(node)) {
              if (firstCell === null) {
                node.setColSpan(columns).setRowSpan(rows);
                firstCell = node;
                const isEmpty = $cellContainsEmptyParagraph(node);
                let firstChild;
                if (
                  isEmpty &&
                  $isParagraphNode((firstChild = node.getFirstChild()))
                ) {
                  firstChild.remove();
                }
              } else if ($isTableCellNode(firstCell)) {
                const isEmpty = $cellContainsEmptyParagraph(node);
                if (!isEmpty) {
                  firstCell.append(...node.getChildren());
                }
                node.remove();
              }
            }
          }
          if (firstCell !== null) {
            if (firstCell.getChildrenSize() === 0) {
              firstCell.append($createParagraphNode());
            }
            $selectLastDescendant(firstCell);
          }
        }
      });
    },
    [editor],
  )

  const unmergeTableCellsAtSelection = useCallback(
    () => {
      editor.update(() => {
        $unmergeCell();
      });
    },
    [editor],
  )


  const insertTableRowAtSelection = useCallback(
    (shouldInsertAfter: boolean) => {
      editor.update(() => {
        for (let i = 0; i < selectionCounts.rows; i++) {
          $insertTableRow__EXPERIMENTAL(shouldInsertAfter);
        }
      });
    },
    [editor, selectionCounts.rows],
  );

  const insertTableColumnAtSelection = useCallback(
    (shouldInsertAfter: boolean) => {
      editor.update(() => {
        for (let i = 0; i < selectionCounts.columns; i++) {
          $insertTableColumn__EXPERIMENTAL(shouldInsertAfter);
        }
      });
    },
    [editor, selectionCounts.columns],
  );

  const deleteTableRowAtSelection = useCallback(() => {
    editor.update(() => {
      $deleteTableRow__EXPERIMENTAL();
    });
  }, [editor]);

  const deleteTableColumnAtSelection = useCallback(() => {
    editor.update(() => {
      $deleteTableColumn__EXPERIMENTAL();
    });
  }, [editor]);

  const items = useMemo((): TMSMenuItem[] => [
    ...(canMergeCells ? [{
      key: "merge",
      label: "Merge cells",
      onClick: mergeTableCellsAtSelection
    }] as TMSMenuItem[] :
      canUnmergeCell ? [{
        key: "unmerge",
        label: "Unmerge cells",
        onClick: unmergeTableCellsAtSelection
      }] as TMSMenuItem[] : [] as TMSMenuItem[]),
    {
      key: "insertRowAbove",
      label: `Insert ${selectionCounts.rows === 1 ? 'row' : `${selectionCounts.rows} rows`} above`,
      onClick: () => insertTableRowAtSelection(false)
    },
    {
      key: "insertRowBelow",
      label: `Insert ${selectionCounts.rows === 1 ? 'row' : `${selectionCounts.rows} rows`} below`,
      onClick: () => insertTableRowAtSelection(true)
    },
    {
      key: "insertColumnBefore",
      label: `Insert ${selectionCounts.columns === 1 ? 'column' : `${selectionCounts.columns} columns`} left`,
      onClick: () => insertTableColumnAtSelection(false)
    },
    {
      key: "insertColumnAfter",
      label: `Insert ${selectionCounts.columns === 1 ? 'column' : `${selectionCounts.columns} columns`} right`,
      onClick: () => insertTableColumnAtSelection(true)
    },
    {
      key: "deleteColumn",
      label: `Delete column`,
      onClick: () => deleteTableColumnAtSelection()
    },
    {
      key: "deleteRow",
      label: `Delete row`,
      onClick: () => deleteTableRowAtSelection()
    }
  ], [
    mergeTableCellsAtSelection,
    unmergeTableCellsAtSelection,
    insertTableRowAtSelection,
    insertTableColumnAtSelection,
    deleteTableColumnAtSelection,
    deleteTableRowAtSelection
  ])

  const menu = useButtonMenu({
    closeOnMenuClick: true,
    items
  })

  const moveSelectionToHoveredCellNodeOnButtonClick = useCallback(
    (event: React.ChangeEvent<{}>) => {
      if (canMergeCells) {
        menu.buttonProps.onClick && menu.buttonProps.onClick(event)
        return
      }
      editor.update(() => {
        const tableCellNode = $getNodeByKey<TableCellNode>(hoveredCellNodeKey)
        if (tableCellNode) {
          tableCellNode.select()
          menu.buttonProps.onClick && menu.buttonProps.onClick(event)
        }
      })
    },
    [hoveredCellNodeKey, editor, menu.buttonProps.onClick, canMergeCells],
  )

  return {
    ...menu,
    buttonProps: {
      ...menu.buttonProps,
      onClick: moveSelectionToHoveredCellNodeOnButtonClick
    }
  }
}
