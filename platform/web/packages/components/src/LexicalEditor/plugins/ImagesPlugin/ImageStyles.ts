

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

    "& .image-resizer": {
        display: readOnly ? "none" : "block",
        width: "7px",
        height: "7px",
        position: "absolute",
        backgroundColor: "rgb(60, 132, 244)",
        border: "1px solid #fff",
    },

    "& .image-resizer.image-resizer-n": {
        top: "-6px",
        left: "48%",
        cursor: "n-resize",
    },

    "& .image-resizer.image-resizer-ne": {
        top: "-6px",
        right: "-6px",
        cursor: "ne-resize",
    },

    "& .image-resizer.image-resizer-e": {
        bottom: "48%",
        right: "-6px",
        cursor: "e-resize",
    },

    "& .image-resizer.image-resizer-se": {
        bottom: "-2px",
        right: "-6px",
        cursor: "nwse-resize",
    },

    "& .image-resizer.image-resizer-s": {
        bottom: "-2px",
        left: "48%",
        cursor: "s-resize",
    },

    "& .image-resizer.image-resizer-sw": {
        bottom: "-2px",
        left: "-6px",
        cursor: "sw-resize",
    },

    "& .image-resizer.image-resizer-w": {
        bottom: "48%",
        left: "-6px",
        cursor: "w-resize",
    },

    "& .image-resizer.image-resizer-nw": {
        top: "-6px",
        left: "-6px",
        cursor: "nw-resize",
    },

})