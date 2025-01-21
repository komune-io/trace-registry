import { createHeadlessEditor } from "@lexical/headless";
import { $convertFromMarkdownString, $convertToMarkdownString, TRANSFORMERS } from "@lexical/markdown";
import { EditorState, } from "lexical";

export const lexicalStateToMarkdown = (
    editorState: EditorState,
) => {
    let markdown = ""
    const editor = createHeadlessEditor({
        nodes: [],
        onError: () => { },
    });
    editor.setEditorState(editorState);

    editor.update(() => {
        markdown = $convertToMarkdownString(TRANSFORMERS);
    });
    return markdown
}

export const mardownToLexicalState = (
    markdown: string,
) => {
    $convertFromMarkdownString(markdown, TRANSFORMERS)
}
