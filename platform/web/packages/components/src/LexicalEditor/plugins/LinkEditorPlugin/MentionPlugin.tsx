import { $isAutoLinkNode, $isLinkNode, AutoLinkNode, LinkNode, TOGGLE_LINK_COMMAND } from '@lexical/link';
import { useDebouncedValue } from '@mantine/hooks';
import { List, ListItemButton, ListItemText, Paper, Typography } from '@mui/material';
import { useCatalogueRefSearchQuery } from 'domain-components';
import { $getSelection, $isRangeSelection, LexicalEditor, TextNode } from 'lexical';
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next';
import { useRoutesDefinition } from '../../../routes';
import { getSelectedNode } from '../../utils';
import { $findMatchingParent } from '@lexical/utils';

export interface MentionPluginProps {
    linkUrl: string
    editor: LexicalEditor;
    onEscape: (isSaved?: boolean) => void;
}

export const MentionPlugin = (props: MentionPluginProps) => {
    const { linkUrl, editor, onEscape } = props
    const [debouncedSearch] = useDebouncedValue(linkUrl, 500);
    const { t, i18n } = useTranslation()
    const { cataloguesAll } = useRoutesDefinition()

    const isMentionSearch = !debouncedSearch.startsWith("http") && !debouncedSearch.startsWith("/")

    const refs = useCatalogueRefSearchQuery({
        query: {
            language: i18n.language,
            query: debouncedSearch,
            limit: 20
        },
        options: {
            enabled: !!debouncedSearch && isMentionSearch,
        }
    }).data?.items

    const items = useMemo(() => refs?.map((ref) => (
        <ListItemButton
            key={ref.id}
            onClick={() => {
                editor.dispatchCommand(
                    TOGGLE_LINK_COMMAND,
                    cataloguesAll(ref.identifier),
                )
                editor.update(() => {
                    const selection = $getSelection();
                    if ($isRangeSelection(selection)) {
                        const node = getSelectedNode(selection)
                        const linkNode  = ($findMatchingParent(node, $isLinkNode) ?? $findMatchingParent(node, $isAutoLinkNode)) as LinkNode | AutoLinkNode | null
                        if (linkNode) {
                            const refTitle = new TextNode(`${ref.identifier.split("-").pop()} - ${ref.title}`)
                            linkNode.append(refTitle)
                            const size = linkNode.getChildrenSize()
                            linkNode.getChildren().forEach((child, index) => {
                                if (index < size - 1) {
                                    child.remove()
                                }
                            })
                        }
                    }
                })
                onEscape(true)
            }}
        >
            <ListItemText primary={`${ref.identifier.split("-").pop()} - ${ref.title}`} />
        </ListItemButton>
    )), [refs, editor, onEscape])

    const searched = !!items && isMentionSearch

    return (
        <Paper
            sx={{
                display: "flex",
                flexDirection: "column",
                position: "absolute",
                height: searched ? "350px" : "80px",
                width: "350px",
                top: searched ? "-362px" : "-92px",
                left: "8px",
                alignItems: "center",
                gap: 1,
            }}
            elevation={2}
        >
            {searched ? <List
                sx={{ width: '100%', height: "100%", overflow: "auto" }}
            >
                {items}
            </List> : <Typography
                variant="subtitle2"
                sx={{
                    p: 2
                }}
            >
                {t("catalogues.searchMention")}
            </Typography>}
        </Paper>
    )
}
