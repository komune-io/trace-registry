

export const ImageStyles = (readOnly?: boolean) => ({
    "& span.editor-image": {
        cursor: "default",
        display: "block",
        position: "relative",
        userSelect: "none",
        width: "fit-content",
    },
    "& span.editor-image.full-width": {
        width: "100%",
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
        width: "8px",
        height: "8px",
        position: "absolute",
        backgroundColor: "rgb(60, 132, 244)",
        border: "1px solid #fff",
        zIndex: 2
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

    "& .component-resizer-full-width": {
        display: readOnly ? "none" : "block",
        position: "absolute",
        width: "20px",
        height: "20px",
        bottom: "calc(48% - 6px)",
        right: "-30px",
        cursor: "pointer",
        color: "rgb(60, 132, 244)",
    }, 

    "& .component-resizer-auto-height": {
        display: readOnly ? "none" : "block",
        position: "absolute",
        width: "20px",
        height: "20px",
        left: "calc(48% - 6px)",
        bottom: "-20px",
        cursor: "pointer",
        color: "rgb(60, 132, 244)",
    },

    "& .component-resizer.component-resizer-e": {
        bottom: "48%",
        right: "-6px",
        cursor: "e-resize",
    },

    "& .component-resizer.component-resizer-se": {
        bottom: "0px",
        right: "-6px",
        cursor: "nwse-resize",
    },

    "& .component-resizer.component-resizer-s": {
        bottom: "0px",
        left: "48%",
        cursor: "s-resize",
    },

    "& .component-resizer.component-resizer-sw": {
        bottom: "0px",
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