

export const TableStyles = {
    "& .editor-table": {
        borderCollapse: "collapse",
        borderSpacing: 0,
        overflowY: "scroll",
        overflowX: "scroll",
        tableLayout: "fixed",
        width: "fit-content",
        margin: "0px 25px 30px 0px",
      },
      "& .editor-tableRowStriping tr:nth-child(even)": {
        backgroundColor: "#f2f5fb",
      },
      "& .editor-tableSelection *::selection": {
        backgroundColor: "transparent",
      },
      "& .editor-tableSelected": {
        outline: "2px solid rgb(60, 132, 244)",
      },
      "& .editor-tableCell": {
        border: "1px solid #bbb",
        width: "75px",
        verticalAlign: "top",
        textAlign: "start",
        padding: "6px 8px",
        position: "relative",
        outline: "none",
        overflow: "auto",
      },
      /*
        A firefox workaround to allow scrolling of overflowing table cell
        ref: https://bugzilla.mozilla.org/show_bug.cgi?id=1904159
      */
      "& .editor-tableCell > *": {
        overflow: "inherit",
      },
      ".editor-tableCellResizer": {
        position: "absolute",
        right: "-4px",
        height: "100%",
        width: "8px",
        cursor: "ew-resize",
        zIndex: 10,
        top: 0,
      },
      ".editor-tableCellHeader": {
        backgroundColor: "#f2f3f5",
        textAlign: "start",
      },
      ".editor-tableCellSelected": {
        caretColor: "transparent",
      },
      ".editor-tableCellSelected::after": {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        backgroundColor: "highlight",
        mixBlendMode: 'multiply',
        content: '" "',
        pointerEvents: 'none',
      }
}