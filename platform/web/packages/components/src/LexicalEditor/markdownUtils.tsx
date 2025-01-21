import { createHeadlessEditor } from "@lexical/headless";
import { $convertFromMarkdownString, $convertToMarkdownString } from "@lexical/markdown";
import { EditorState, } from "lexical";
import { MARKDOWN_TRANSFORMERS } from "./plugins/MarkdownTransformers";

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
        markdown = $convertToMarkdownString(MARKDOWN_TRANSFORMERS);
    });
    return markdown
}

export const mardownToLexicalState = (
    markdown: string,
) => {
    $convertFromMarkdownString(markdown, MARKDOWN_TRANSFORMERS)
}
