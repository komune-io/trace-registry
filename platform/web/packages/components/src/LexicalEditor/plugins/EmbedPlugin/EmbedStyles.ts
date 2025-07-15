

export const EmbedStyles = (readOnly?: boolean) => ({
    "& span.editor-embed": {
        cursor: "default",
        display: "inline-block",
        position: "relative",
        userSelect: "none",
      },
    "& .editor-embed iframe": {
        maxWidth: "100%",
        cursor: "default",
    },

    "& .editor-embed iframe.focused": {
        outline: readOnly ? "none" : "2px solid rgb(60, 132, 244)",
        userSelect: "none",
    },

    "& .editor-embed iframe.focused.draggable": {
        cursor: readOnly ? "default" : "grab",
    },

    "& .editor-embed iframe.focused.draggable:active": {
        cursor: readOnly ? "default" : "grab"
    },

})