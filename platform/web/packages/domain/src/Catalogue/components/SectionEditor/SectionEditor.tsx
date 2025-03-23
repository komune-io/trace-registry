import {
    SectionPaper,
} from 'components'
import { Stack } from '@mui/material'
import { EditorState } from 'lexical'
import { t } from 'i18next'
import {DistributionLexicalEditor, DistributionLexicalEditorProps} from "../DistributionLexicalEditor";


export interface SectionEditorProps extends DistributionLexicalEditorProps {
    onChange?: (editorState: EditorState) => void
    readOnly?: boolean
}

export const SectionEditor = (props: SectionEditorProps) => {
    const { onChange, readOnly = false, ...other } = props
    // const lexicalStateRef = useRef<EditorState | undefined>(undefined)
    // const queryClient = useQueryClient()


    // const reportUpdateSectionContentCommand = useReportUpdateSectionContent({})

    // const reloadSectionAndReports = useCallback(
    //     () => {
    //         reloadSection()
    //         queryClient.invalidateQueries({ queryKey: ["auditGet", { id: auditId }] })
    //     },
    //     [reloadSection, auditId],
    // )

    // const { doRefetchOnDismount } = useRefetchOnDismount({ refetch: reloadSectionAndReports })

    // const handleSaveEditorState = useDebouncedCallback(async () => {
    //     let markdown = lexicalStateRef.current ? lexicalStateToMarkdown(lexicalStateRef.current) : ""
    //     await reportUpdateSectionContentCommand.mutateAsync({
    //         id: section.reportId!,
    //         sectionId: section.id!,
    //         contentText: markdown,
    //         contentRaw: JSON.stringify(lexicalStateRef.current?.toJSON()),
    //         originalVersionId: section.selectedVersion?.id
    //     })
    //     doRefetchOnDismount()
    // }, 700);

    // const handleContentChange = useCallback(
    //     (editorState: EditorState) => {
    //         lexicalStateRef.current = editorState
    //         handleSaveEditorState()
    //     },
    //     []
    // )

    return (
        <SectionPaper
            id={other.dataset?.id}
        >
            <Stack
                sx={{
                    maxWidth: "750px",
                    width: "100%",
                    "& .editor-toolbar": {
                        position: "sticky",
                        top: "190px",
                        transform: "translate(0, -55px)",
                        my: "-22px",
                        bgcolor: "white",
                        borderRadius: 1,
                        boxShadow: (theme) => theme.shadows[2]
                    }
                }}
            >
                <DistributionLexicalEditor
                    readOnly={readOnly}
                    displayToolBarOnFocus
                    onChange={onChange}
                    placeholder={t("catalogues.startWritingContent")}
                    { ...other}
                />
            </Stack>
        </SectionPaper>
    )
}