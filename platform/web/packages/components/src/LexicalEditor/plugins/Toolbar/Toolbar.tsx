
import {
  FormatListBulletedRounded,
  FormatListNumberedRounded,
  FormatQuoteRounded,
  RedoRounded,
  UndoRounded,
  FormatAlignLeftRounded,
  FormatAlignJustifyRounded,
  FormatAlignCenterRounded,
} from '@mui/icons-material'
import {
  Box,
  Divider,
  Stack,
  ToggleButton,
  Typography,
  styled,
  toggleButtonGroupClasses
} from '@mui/material'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { $getNearestNodeOfType, mergeRegister, $findMatchingParent } from '@lexical/utils'
import {
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  REDO_COMMAND,
  UNDO_COMMAND,
  $createParagraphNode,
  $getSelection,
  $isRangeSelection,
  SELECTION_CHANGE_COMMAND,
  RangeSelection,
  LexicalEditor,
  $isElementNode,
  ElementNode,
  TextNode,
  FORMAT_ELEMENT_COMMAND,
  ElementFormatType
} from 'lexical'
import { $createHeadingNode, $createQuoteNode, $isHeadingNode, HeadingTagType } from '@lexical/rich-text'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { $isListNode, INSERT_ORDERED_LIST_COMMAND, INSERT_UNORDERED_LIST_COMMAND, ListNode } from '@lexical/list'
import { getSelectedNode } from '../../utils'
import { $isLinkNode } from '@lexical/link'
import { TglButton, ToolBarFormatButton } from './TglButton'
import { useTextFormatButtons } from './useTextFormatButtons'
import { $isMarkNode } from '@lexical/mark'
import { ToolbarMoreMenu } from './ToolbarMoreMenu'

const LowPriority = 1;

const HistoryActionButton = styled(ToggleButton)({
  border: 0,
  background: 'unset',
  color: '#616161',
  [`&.${toggleButtonGroupClasses.disabled}`]: {
    border: 0,
    color: '#BDBDBD'
  }
})

export interface ToolbarProps {
  displayToolBarOnFocus?: boolean
  titlesTopLevel?: 'h1' | 'h4'
  isFocused?: boolean
}

export const Toolbar = (props: ToolbarProps) => {
  const { titlesTopLevel, displayToolBarOnFocus, isFocused } = props

  const [editor] = useLexicalComposerContext();
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const [blockType, setBlockType] = useState<string | undefined>(undefined)
  const [alignementFormat, setalignementFormat] = useState<string | undefined>(undefined)

  const $updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      setBlockType(getCurrentBlockType({ selection, editor }))
      const node = getSelectedNode(selection);
      let parent = node.getParent();
      while ($isMarkNode(parent)) {
        parent = parent.getParent()
      }
      setalignementFormat(getBlockAlignementFormat(node, parent))
    }
  }, [editor]);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          $updateToolbar();
        });
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        (_payload, _newEditor) => {
          $updateToolbar();
          return false;
        },
        LowPriority,
      ),
      editor.registerCommand(
        CAN_UNDO_COMMAND,
        (payload) => {
          setCanUndo(payload);
          return false;
        },
        LowPriority,
      ),
      editor.registerCommand(
        CAN_REDO_COMMAND,
        (payload) => {
          setCanRedo(payload);
          return false;
        },
        LowPriority,
      ),
    );
  }, [editor, $updateToolbar]);

  const textFormatButtons = useTextFormatButtons()

  const titlesLogic = useMemo(
    () =>
      titlesTopLevel === 'h1'
        ? [
          {
            value: 'h1',
            selected: blockType === 'h1'
          },
          {
            value: 'h2',
            selected: blockType === 'h2'
          },
          {
            value: 'h3',
            selected: ['h3', 'h4', 'h5', 'h6'].includes(blockType ?? "")
          }
        ]
        : [
          {
            value: 'h4',
            selected: ['h1', 'h2', 'h3', 'h4'].includes(blockType ?? "")
          },
          {
            value: 'h5',
            selected: blockType === 'h5'
          },
          {
            value: 'h6',
            selected: blockType === 'h6'
          }
        ],
    [titlesTopLevel, blockType]
  )

  const titlesDisplay = useMemo(
    () =>
      titlesLogic.map((logic, index) => {
        const count = index + 1
        const label = 'H' + count
        return (
          <ToolBarFormatButton
            key={count}
            value={logic.value}
            aria-label={label}
            selected={logic.selected}
            createElementFnc={() => $createHeadingNode(logic.value as HeadingTagType)}
          >
            <Typography sx={{ color: 'currentColor' }} variant='body2'>
              {label}
            </Typography>
          </ToolBarFormatButton>
        )
      }),
    [titlesLogic]
  )

  const alignmentDisplay = useMemo(
    () =>
      [
        { value: "left", icon: <FormatAlignLeftRounded /> },
        { value: "justify", icon: <FormatAlignJustifyRounded /> },
        { value: "center", icon: <FormatAlignCenterRounded /> }
      ].map(({ value, icon }) => {
        return (
          <TglButton
            key={value}
            value={value}
            aria-label={`${value}-align`}
            selected={alignementFormat === value}
            onClick={() => {
              editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, value as ElementFormatType);
            }}
          >
            {icon}
          </TglButton>
        )
      }),
    [alignementFormat, editor.dispatchCommand]
  )

 
  return (
    <Stack
      sx={{
        display: displayToolBarOnFocus ? isFocused ? "flex" : "none" : "flex",
        "& .MuiToggleButton-root": { height: "44px", width: "44px" }
      }}
      className='editor-toolbar'
      direction='row'
      zIndex={1}
      gap={0}
      width='100%'
      alignItems='center'
    >
      <Stack direction='row' gap={0} width='100%' flexWrap='wrap'>
        {textFormatButtons}
        <Divider orientation='vertical' flexItem variant='middle' />
        <TglButton
          value='bullet'
          aria-label='bullet list'
          selected={blockType === 'bullet'}
          onChange={() => editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined)}
        >
          <FormatListBulletedRounded />
        </TglButton>
        <TglButton
          value='number'
          aria-label='numbered list'
          selected={blockType === 'number'}
          onChange={() => editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined)}
        >
          <FormatListNumberedRounded />
        </TglButton>
        <Divider orientation='vertical' flexItem variant='middle' />
        <ToolBarFormatButton
          value='quote'
          selected={blockType === 'quote'}
          createElementFnc={$createQuoteNode}
        >
          <FormatQuoteRounded />
        </ToolBarFormatButton>
        <ToolBarFormatButton
          value='paragraph'
          selected={blockType === 'paragraph'}
          createElementFnc={$createParagraphNode}
        >
          <Typography sx={{ color: 'currentColor' }} variant='body2'>
            P
          </Typography>
        </ToolBarFormatButton>
        {titlesDisplay}
        <Divider orientation='vertical' flexItem variant='middle' />
        {alignmentDisplay}
        <Divider orientation='vertical' flexItem variant='middle' />
        <ToolbarMoreMenu />
      </Stack>
      <Box sx={{ flexGrow: 1 }} />
      <HistoryActionButton
        value='undo'
        aria-label='undo'
        disabled={!canUndo}
        selected={false}
        onChange={() => editor?.dispatchCommand(UNDO_COMMAND, undefined)}
      >
        <UndoRounded />
      </HistoryActionButton>
      <HistoryActionButton
        value='redo'
        aria-label='redo'
        disabled={!canRedo}
        selected={false}
        onChange={() => editor?.dispatchCommand(REDO_COMMAND, undefined)}
      >
        <RedoRounded />
      </HistoryActionButton>
    </Stack>
  )
}

const getCurrentBlockType = (params: { selection: RangeSelection, editor: LexicalEditor }) => {
  const { selection, editor } = params
  const anchorNode = selection.anchor.getNode();
  const element =
    anchorNode.getKey() === "root"
      ? anchorNode
      : anchorNode.getTopLevelElementOrThrow();
  const elementKey = element.getKey();
  const elementDOM = editor.getElementByKey(elementKey);
  if (elementDOM !== null) {
    if ($isListNode(element)) {
      const parentList = $getNearestNodeOfType<ListNode>(
        anchorNode,
        ListNode,
      );
      const type = parentList
        ? parentList.getListType()
        : element.getListType();
      return type;
    } else {
      const type = $isHeadingNode(element)
        ? element.getTag()
        : element.getType();
      return type
    }
  }
}

const getBlockAlignementFormat = (node: TextNode | ElementNode, parentNode: ElementNode | null) => {
  let matchingParent;
  if ($isLinkNode(parentNode)) {
    // If node is a link, we need to fetch the parent paragraph node to set format
    matchingParent = $findMatchingParent(
      node,
      (parentNode) => $isElementNode(parentNode) && !parentNode.isInline(),
    );
  }
  // If matchingParent is a valid node, pass it's format type
  return $isElementNode(matchingParent)
    ? matchingParent.getFormatType()
    : $isElementNode(node)
      ? node.getFormatType()
      : parentNode?.getFormatType() || 'left'
}