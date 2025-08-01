/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { LexicalEditor } from 'lexical';

import { calculateZoomLevel } from '@lexical/utils';
import * as React from 'react';
import { useRef, useCallback } from 'react';
import { AspectRatio, KeyboardTabRounded } from '@mui/icons-material';
import { Tooltip } from '@komune-io/g2';
import { useTranslation } from 'react-i18next';

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

const Direction = {
  east: 1 << 0,
  north: 1 << 3,
  south: 1 << 1,
  west: 1 << 2,
};

export const ComponentResizer = ({
  onResizeStart,
  onResizeEnd,
  componentRef,
  editor,
  width,
  height,
  isImage
}: {
  editor: LexicalEditor;
  buttonRef: { current: null | HTMLButtonElement };
  componentRef: { current: null | HTMLElement };
  onResizeEnd: (width?: string | number, height?: string | number) => void;
  onResizeStart: () => void;
  height?: string | number;
  width?: string | number;
  isImage?: boolean;
}): JSX.Element => {
  const { t } = useTranslation()
  const controlWrapperRef = useRef<HTMLDivElement>(null);
  const userSelect = useRef({
    priority: '',
    value: 'default',
  });
  const positioningRef = useRef<{
    currentHeight: string | number;
    currentWidth: string | number;
    direction: number;
    isResizing: boolean;
    ratio: number;
    startHeight: number;
    startWidth: number;
    startX: number;
    startY: number;
  }>({
    currentHeight: 0,
    currentWidth: 0,
    direction: 0,
    isResizing: false,
    ratio: 0,
    startHeight: 0,
    startWidth: 0,
    startX: 0,
    startY: 0,
  });
  const editorRootElement = editor.getRootElement();
  // Find max width, accounting for editor padding.
  const maxWidthContainer = editorRootElement !== null
    ? editorRootElement.getBoundingClientRect().width - 20
    : 100;
  const maxHeightContainer =
    editorRootElement !== null
      ? editorRootElement.getBoundingClientRect().height - 20
      : 100;

  const minWidth = 100;
  const minHeight = 100;

  const setStartCursor = (direction: number) => {
    const ew = direction === Direction.east || direction === Direction.west;
    const ns = direction === Direction.north || direction === Direction.south;
    const nwse =
      (direction & Direction.north && direction & Direction.west) ||
      (direction & Direction.south && direction & Direction.east);

    const cursorDir = ew ? 'ew' : ns ? 'ns' : nwse ? 'nwse' : 'nesw';

    if (editorRootElement !== null) {
      editorRootElement.style.setProperty(
        'cursor',
        `${cursorDir}-resize`,
        'important',
      );
    }
    if (document.body !== null) {
      document.body.style.setProperty(
        'cursor',
        `${cursorDir}-resize`,
        'important',
      );
      userSelect.current.value = document.body.style.getPropertyValue(
        '-webkit-user-select',
      );
      userSelect.current.priority = document.body.style.getPropertyPriority(
        '-webkit-user-select',
      );
      document.body.style.setProperty(
        '-webkit-user-select',
        `none`,
        'important',
      );
    }
  };

  const setEndCursor = () => {
    if (editorRootElement !== null) {
      editorRootElement.style.setProperty('cursor', 'text');
    }
    if (document.body !== null) {
      document.body.style.setProperty('cursor', 'default');
      document.body.style.setProperty(
        '-webkit-user-select',
        userSelect.current.value,
        userSelect.current.priority,
      );
    }
  };

  const onFullWidthClick = useCallback(
    () => {
      if (!editor.isEditable()) {
        return;
      }
      const component = componentRef.current;
      if (component !== null) {

        component.style.width = "100%";
        onResizeEnd("100%", undefined);
      }
    },
    [editor, onResizeEnd],
  )

  const onAutoHeightClick = useCallback(
    () => {
      if (!editor.isEditable()) {
        return;
      }
      const component = componentRef.current;
      if (component !== null) {

        component.style.height = "auto";
        onResizeEnd(undefined, "auto");
      }
    },
    [editor, onResizeEnd],
  )

  const handlePointerDown = (
    event: React.PointerEvent<HTMLDivElement>,
    direction: number,
  ) => {
    if (!editor.isEditable()) {
      return;
    }

    const component = componentRef.current;
    const controlWrapper = controlWrapperRef.current;

    if (component !== null && controlWrapper !== null) {
      event.preventDefault();
      const { width, height } = component.getBoundingClientRect();
      const zoom = calculateZoomLevel(component);
      const positioning = positioningRef.current;
      positioning.startWidth = width;
      positioning.startHeight = height;
      positioning.ratio = width / height;
      positioning.currentWidth = width;
      positioning.currentHeight = height;
      positioning.startX = event.clientX / zoom;
      positioning.startY = event.clientY / zoom;
      positioning.isResizing = true;
      positioning.direction = direction;

      setStartCursor(direction);
      onResizeStart();

      controlWrapper.classList.add('component-control-wrapper--resizing');
      component.style.height = `${height}px`;
      component.style.width = `${width}px`;

      document.addEventListener('pointermove', handlePointerMove);
      document.addEventListener('pointerup', handlePointerUp);
    }
  };
  const handlePointerMove = (event: PointerEvent) => {
    const component = componentRef.current;
    const positioning = positioningRef.current;

    const isHorizontal =
      positioning.direction & (Direction.east | Direction.west);
    const isVertical =
      positioning.direction & (Direction.south | Direction.north);

    if (component !== null && positioning.isResizing) {
      const zoom = calculateZoomLevel(component);
      // Corner cursor
      if (isHorizontal && isVertical) {
        let diff = Math.floor(positioning.startX - event.clientX / zoom);
        diff = positioning.direction & Direction.east ? -diff : diff;

        const width = clamp(
          positioning.startWidth + diff,
          minWidth,
          maxWidthContainer,
        );

        const height = width / positioning.ratio;
        component.style.width = `${width}px`;
        component.style.height = `${height}px`;
        positioning.currentHeight = height;
        positioning.currentWidth = width;
      } else if (isVertical) {
        let diff = Math.floor(positioning.startY - event.clientY / zoom);
        diff = positioning.direction & Direction.south ? -diff : diff;

        const height = clamp(
          positioning.startHeight + diff,
          minHeight,
          maxHeightContainer,
        );

        component.style.height = `${height}px`;
        positioning.currentHeight = height;
      } else {
        let diff = Math.floor(positioning.startX - event.clientX / zoom);
        diff = positioning.direction & Direction.east ? -diff : diff;

        const width = clamp(
          positioning.startWidth + diff,
          minWidth,
          maxWidthContainer,
        );

        component.style.width = `${width}px`;
        positioning.currentWidth = width;
      }
    }
  };
  const handlePointerUp = () => {
    const component = componentRef.current;
    const positioning = positioningRef.current;
    const controlWrapper = controlWrapperRef.current;
    const isHorizontal =
      positioning.direction & (Direction.east | Direction.west);
    const isVertical =
      positioning.direction & (Direction.south | Direction.north);

    if (component !== null && controlWrapper !== null && positioning.isResizing) {
      const width = positioning.currentWidth;
      const height = positioning.currentHeight;
      positioning.startWidth = 0;
      positioning.startHeight = 0;
      positioning.ratio = 0;
      positioning.startX = 0;
      positioning.startY = 0;
      positioning.currentWidth = 0;
      positioning.currentHeight = 0;
      positioning.isResizing = false;

      controlWrapper.classList.remove('component-control-wrapper--resizing');

      setEndCursor();
      if (isHorizontal && isVertical) {
        onResizeEnd(width, height);
      } else if (isVertical) {
        onResizeEnd(undefined, height);
      }
      else if (isHorizontal) {
        onResizeEnd(width, undefined);
      }

      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
    }
  };
  return (
    <div ref={controlWrapperRef}>
      <div
        className="component-resizer component-resizer-n"
        onPointerDown={(event) => {
          handlePointerDown(event, Direction.north);
        }}
      />
      <div
        className="component-resizer component-resizer-ne"
        onPointerDown={(event) => {
          handlePointerDown(event, Direction.north | Direction.east);
        }}
      />
      <div
        className="component-resizer component-resizer-e"
        onPointerDown={(event) => {
          handlePointerDown(event, Direction.east);
        }}
      />
      <div
        className="component-resizer component-resizer-se"
        onPointerDown={(event) => {
          handlePointerDown(event, Direction.south | Direction.east);
        }}
      />
      <div
        className="component-resizer component-resizer-s"
        onPointerDown={(event) => {
          handlePointerDown(event, Direction.south);
        }}
      />
      <div
        className="component-resizer component-resizer-sw"
        onPointerDown={(event) => {
          handlePointerDown(event, Direction.south | Direction.west);
        }}
      />
      <div
        className="component-resizer component-resizer-w"
        onPointerDown={(event) => {
          handlePointerDown(event, Direction.west);
        }}
      />
      <div
        className="component-resizer component-resizer-nw"
        onPointerDown={(event) => {
          handlePointerDown(event, Direction.north | Direction.west);
        }}
      />
      {width !== "100%" && (
        <Tooltip
          helperText={t('editor.setFullWidth')}
        >
          <KeyboardTabRounded
            className="component-resizer-full-width"
            onClick={onFullWidthClick}
          />
        </Tooltip>
      )}
      {isImage && height !== "auto" && (
        <Tooltip
          helperText={t('editor.setOriginalRatio')}
        >
          <AspectRatio
            className="component-resizer-auto-height"
            onClick={onAutoHeightClick}
          />
        </Tooltip>
      )}
    </div>
  );
}