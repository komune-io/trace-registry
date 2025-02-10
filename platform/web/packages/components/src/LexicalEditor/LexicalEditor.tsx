import { InitialConfigType, LexicalComposer } from '@lexical/react/LexicalComposer';
import { EditorRefPlugin } from '@lexical/react/LexicalEditorRefPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { theme } from './editorTheme';
import { HeadingNode, QuoteNode } from '@lexical/rich-text'
import { AutoLinkNode, LinkNode } from '@lexical/link'
import { ListItemNode, ListNode } from '@lexical/list'
import { MarkNode } from '@lexical/mark'
import { useCallback, useMemo, useRef, useState } from 'react';
import { Toolbar } from './plugins/Toolbar/Toolbar';
import { DraggableBlockPlugin } from './plugins/DraggableBlockPlugin';
import { Backdrop, Box, BoxProps, CircularProgress, ClickAwayListener, Typography } from '@mui/material';
import { MarkdownStyleContainer } from './MarkdownStyleContainer';
import { useDebouncedCallback, useDidUpdate } from '@mantine/hooks';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { EditorState, Klass, LexicalEditor as LexicalEditorState, LexicalNode, LexicalNodeReplacement } from 'lexical';
import { LayoutPlugin, LayoutContainerNode, LayoutItemNode } from './plugins/LayoutPlugin';
import { OnUserModificationPlugin } from './plugins/OnUserModificationPlugin';
import { AutoLinkPlugin } from './plugins/AutoLinkPlugin';
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { CodeHighlightPlugin } from './plugins/CodeHighlightPlugin';
import FloatingToolbarPlugin from './plugins/FloatingToolbarPlugin/FloatingToolbarPlugin';
import { mardownToLexicalState } from './markdownUtils';
import { PermanentEndParagraphPugin } from './plugins/PermanentEndParagraphPugin';
import { enqueueSnackbar } from 'notistack'
import { useTranslation } from 'react-i18next';
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table'
import { TablePlugin } from '@lexical/react/LexicalTablePlugin';
import { TableActionMenuPlugin, TableCellActionMenuPlugin, TableCellResizerPlugin } from './plugins/TablePlugin';
import { ImageNode, ImagesPlugin } from './plugins/ImagesPlugin';
import { DragDropPasteImgPlugin } from './plugins/DragDropPasteImgPlugin';

const editorConfig: InitialConfigType = {
    namespace: 'Editor',
    // Handling of errors during update
    onError(error: Error) {
        throw error;
    },
    // The editor theme
    theme: theme,
    nodes: [
        MarkNode,
        HeadingNode,
        QuoteNode,
        AutoLinkNode,
        LinkNode,
        ListNode,
        ListItemNode,
        ImageNode,
        LayoutContainerNode,
        LayoutItemNode,
        CodeNode,
        CodeHighlightNode,
        TableCellNode,
        TableNode,
        TableRowNode
    ]
};

export interface LexicalEditorProps {
    markdown?: string
    editorState?: string
    /**
   * Choose the 3 titles levels `["h1", "h2", "h3"]` or `["h4", "h5", "h6"]`
   *
   * @default "h1"
   */
    titlesTopLevel?: 'h1' | 'h4'
    /**
     * The props of the style container that styles the markdown
     */
    styleContainerProps?: BoxProps
    /**
     * Use this prop if you want to remove the toolbar
     *
     * @default false
     */
    removeToolBar?: boolean
    plugins?: ((props: { anchorElem: HTMLDivElement, isFocused: boolean }) => JSX.Element)[]
    nodes?: (Klass<LexicalNode> | LexicalNodeReplacement)[]
    displayToolBarOnFocus?: boolean
    onChange?: (editorState: EditorState) => void
    readOnly?: boolean
    namespace?: string
    rootProps?: Omit<BoxProps, "onFocus">
    disableDraggableBlocks?: boolean
    placeholder?: string
    basic?: boolean
}

export const LexicalEditor = (props: LexicalEditorProps) => {
    const { markdown, readOnly = false, editorState, namespace, onChange, nodes } = props

    const { t } = useTranslation()

    const [isBroken, setisBroken] = useState(false)
    const alreadyAlerted = useRef(false)

    const editorRef = useRef<LexicalEditorState | null>(null)
    const emergencyEditorHistory = useRef<(EditorState | string)[]>(editorState ? [editorState] : [])

    const handleChange = useCallback(
        (editorState: EditorState) => {
            if (!isBroken) {
                if (emergencyEditorHistory.current.length === 5) {
                    alreadyAlerted.current = false
                    emergencyEditorHistory.current.shift();
                }
                emergencyEditorHistory.current.push(editorState);
                onChange && onChange(editorState)
            }
        },
        [onChange, isBroken],
    )


    const userErrorFeedback = useDebouncedCallback(
        () => {
            enqueueSnackbar(t('sectionView.editorBroken'), {
                //@ts-ignore
                variant: 'G2Alert',
                //@ts-ignore
                severity: 'error',
                autoHideDuration: 15000
            })
        },
        1000
    )

    const brokenFeedback = useDebouncedCallback(
        () => {
            enqueueSnackbar(t('sectionView.editorErrorCaught'), {
                //@ts-ignore
                variant: 'G2Alert',
                //@ts-ignore
                severity: 'error',
                autoHideDuration: 15000
            })
        },
        500
    )

    const onError = useCallback(
        (error: Error) => {
            const emergencyGoback = () => {
                setTimeout(() => {
                    const oldState = emergencyEditorHistory.current[0]
                    if (!!oldState && !!editorRef.current) {
                        const parsedState = typeof oldState === "string" ? editorRef.current.parseEditorState(oldState) : oldState
                        editorRef.current.setEditorState(parsedState)
                        emergencyEditorHistory.current = []
                    }
                    setisBroken(false)
                    alreadyAlerted.current = true
                }, 1000);
            }
            if (isBroken && emergencyEditorHistory.current.length > 3) {
                emergencyGoback()
            } else if (emergencyEditorHistory.current.length > 3 && !alreadyAlerted.current) {
                setisBroken(true)
                brokenFeedback()
                emergencyGoback()
            } else if (!isBroken) {
                userErrorFeedback()
            }

            throw error;
        },
        [alreadyAlerted, isBroken],
    )

    const completeNodes = useMemo(() => {

        const completeNodes = [
            ...editorConfig.nodes!,
            ...(nodes ?? [])
        ] as const

        return completeNodes
    }, [nodes])


    return (
        <LexicalComposer
            initialConfig={{
                editorState: editorState ? editorState : markdown ? () => mardownToLexicalState(markdown) : undefined,
                editable: !readOnly,
                ...editorConfig,
                nodes: completeNodes,
                namespace: namespace ?? editorConfig.namespace,
                onError
            }}

        >
            <Backdrop
                sx={{ position: "absolute", color: "white", zIndex: 5, borderRadius: "2px 24px 24px 2px" }}
                open={isBroken}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <EditorRefPlugin editorRef={editorRef} />
            <InnerEditor {...props} onChange={handleChange} />
        </LexicalComposer >
    )
}

export interface InnerEditorProps extends LexicalEditorProps {
}

export const InnerEditor = (props: InnerEditorProps) => {
    const {
        markdown,
        removeToolBar = false,
        styleContainerProps,
        titlesTopLevel = "h1",
        readOnly = false,
        editorState,
        displayToolBarOnFocus = false,
        disableDraggableBlocks = false,
        onChange,
        rootProps,
        placeholder,
        basic = false,
        plugins
    } = props
    const [editor] = useLexicalComposerContext();
    console.log(editor._config.namespace)
    const [floatingAnchorElem, setFloatingAnchorElem] = useState<HTMLDivElement | null>(null);
    const [isClicked, setIsClicked] = useState(false)
    const [isEditorFocused, setIsEditorFocused] = useState(false)
    const isFocused = isClicked || isEditorFocused

    const onFocusEditor = useCallback(
        () => {
            setIsClicked(true)
            setIsEditorFocused(true)
        },
        [],
    )

    const onClickAwayEditor = useCallback(
        () => {
            setIsClicked(false)
        },
        [],
    )

    const onBlurEditor = useCallback(
        () => {
            setIsEditorFocused(false)
        },
        [],
    )

    const onRef = (_floatingAnchorElem: HTMLDivElement) => {
        if (_floatingAnchorElem !== null) {
            setFloatingAnchorElem(_floatingAnchorElem);
        }
    };

    useDidUpdate(() => {
        editor.setEditable(!readOnly)
    }, [readOnly])

    useDidUpdate(() => {
        if (markdown && !editorState) {
            editor.update(() => {
                mardownToLexicalState(markdown);
            })
        }
    }, [markdown])

    useDidUpdate(() => {
        if (editorState) {
            const initialEditorState = editor.parseEditorState(editorState)
            editor.setEditorState(initialEditorState)
        }
    }, [editorState])

    const displayPlugins = useMemo(() => {
        if (!floatingAnchorElem) return
        return plugins?.map((component, index) => {
            if (component) {
                const PluginComponent = component
                return <PluginComponent key={index} anchorElem={floatingAnchorElem} isFocused={isFocused} />
            }

        })
    }, [plugins])

    return (
        <ClickAwayListener
            onClickAway={onClickAwayEditor}

        >
            <Box
                className="editor-container"
                onFocus={onFocusEditor}
                onBlur={onBlurEditor}
                {...rootProps}
                sx={{
                    position: "relative",
                    ...rootProps?.sx
                }}
            >
                {!removeToolBar && !readOnly && <Toolbar isFocused={isFocused} displayToolBarOnFocus={displayToolBarOnFocus} titlesTopLevel={titlesTopLevel} />}
                <Box
                    className="editor-inner"
                >
                    <OnUserModificationPlugin onChange={onChange} />
                    <RichTextPlugin
                        contentEditable={
                            <Box
                                sx={{
                                    position: "relative",
                                    px: 6,
                                    mx: -6,
                                    height: "100%"
                                }}
                                ref={onRef}

                            >
                                <MarkdownStyleContainer
                                    titlesTopLevel={titlesTopLevel}
                                    readOnly={readOnly}
                                    {...styleContainerProps}
                                >
                                    {/* @ts-ignore */}
                                    <ContentEditable

                                        className="editor-input"
                                        aria-placeholder={placeholder ?? ""}
                                        placeholder={placeholder && !readOnly ? <Typography className='placeholder' variant='body2' >{placeholder}</Typography> : undefined}
                                    />
                                </MarkdownStyleContainer>
                            </Box>
                        }
                        ErrorBoundary={LexicalErrorBoundary}
                    />
                    <TablePlugin
                    />
                    <TableCellResizerPlugin />
                    <ImagesPlugin />
                    <HistoryPlugin />
                    <LayoutPlugin />
                    <CodeHighlightPlugin />
                    <ListPlugin />
                    <LinkPlugin />
                    <AutoLinkPlugin />
                    <DragDropPasteImgPlugin />
                    {floatingAnchorElem && !basic && (
                        <>
                            {!disableDraggableBlocks && <DraggableBlockPlugin anchorElem={floatingAnchorElem} />}
                            <FloatingToolbarPlugin
                                anchorElem={floatingAnchorElem}
                            />
                            <TableCellActionMenuPlugin anchorElem={floatingAnchorElem} />
                            <TableActionMenuPlugin anchorElem={floatingAnchorElem} />
                        </>
                    )}
                    {displayPlugins}
                    <PermanentEndParagraphPugin readOnly={readOnly} />
                </Box>
            </Box>
        </ClickAwayListener>
    )
}