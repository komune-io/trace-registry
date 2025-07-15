

export const ImageStyles = (readOnly?: boolean) => ({
    "& span.editor-image": {
        cursor: "default",
        display: "inline-block",
        position: "relative",
        userSelect: "none",
      },
    "& .editor-image img": {
        maxWidth: "100%",
        cursor: "default",
    },

    "& .editor-image img.focused": {
        outline: readOnly ? "none" : "2px solid rgb(60, 132, 244)",
        userSelect: "none",
    },

    "& .editor-image img.focused.draggable": {
        cursor: readOnly ? "default" : "grab",
    },

    "& .editor-image img.focused.draggable:active": {
        cursor: readOnly ? "default" : "grab"
    },

    "& .component-resizer": {
        display: readOnly ? "none" : "block",
        width: "7px",
        height: "7px",
        position: "absolute",
        backgroundColor: "rgb(60, 132, 244)",
        border: "1px solid #fff",
    },

    "& .component-resizer.component-resizer-n": {
        top: "-6px",
        left: "48%",
        cursor: "n-resize",
    },

    "& .component-resizer.component-resizer-ne": {
        top: "-6px",
        right: "-6px",
        cursor: "ne-resize",
    },

    "& .component-resizer.component-resizer-e": {
        bottom: "48%",
        right: "-6px",
        cursor: "e-resize",
    },

    "& .component-resizer.component-resizer-se": {
        bottom: "-2px",
        right: "-6px",
        cursor: "nwse-resize",
    },

    "& .component-resizer.component-resizer-s": {
        bottom: "-2px",
        left: "48%",
        cursor: "s-resize",
    },

    "& .component-resizer.component-resizer-sw": {
        bottom: "-2px",
        left: "-6px",
        cursor: "sw-resize",
    },

    "& .component-resizer.component-resizer-w": {
        bottom: "48%",
        left: "-6px",
        cursor: "w-resize",
    },

    "& .component-resizer.component-resizer-nw": {
        top: "-6px",
        left: "-6px",
        cursor: "nw-resize",
    },

})