import { DraggableBlockPlugin_EXPERIMENTAL } from '@lexical/react/LexicalDraggableBlockPlugin';
import { DragIndicator } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import { useRef } from 'react';

const DRAGGABLE_BLOCK_MENU_CLASSNAME = 'draggable-block-menu';

const isOnMenu = (element: HTMLElement): boolean => {
    return !!element.closest(`.${DRAGGABLE_BLOCK_MENU_CLASSNAME}`);
}

export interface DraggableBlockPluginProps {
    anchorElem?: HTMLElement;
}

export const DraggableBlockPlugin = (props: DraggableBlockPluginProps) => {
    const { anchorElem } = props
    const menuRef = useRef<HTMLButtonElement>(null);
    const targetLineRef = useRef<HTMLDivElement>(null);

    return (
        <DraggableBlockPlugin_EXPERIMENTAL
            anchorElem={anchorElem}
            menuRef={menuRef}
            targetLineRef={targetLineRef}
            menuComponent={
                <IconButton
                    ref={menuRef}
                    className="icon draggable-block-menu"
                    size='small'
                    sx={{
                        cursor: "grab",
                        opacity: '0',
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        willChange: "transform",
                        "&:active": {
                            cursor: "grabbing",
                        }
                    }}
                >
                    <DragIndicator className="icon" />
                </IconButton>
            }
            targetLineComponent={
                <Box 
                ref={targetLineRef}
                className="draggable-block-target-line"
                    sx={{
                        pointerEvents: "none",
                        bgcolor: "primary.main",
                        height: "4px",
                        position: "absolute",
                        left: 0,
                        top: 0,
                        opacity: 0,
                        willChange: "transform",
                    }}
                />
            }
            isOnMenu={isOnMenu}
        />
    );
}
