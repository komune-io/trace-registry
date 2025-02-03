import { useCallback, useRef } from 'react'
import {
    RichtTextEditor,
    SectionPaper,
    useRefetchOnDismount,
} from 'components'
import { useParams } from "react-router-dom"
import { Stack } from '@mui/material'
import { useQueryClient } from '@tanstack/react-query'
import { EditorState } from 'lexical'
import { useDebouncedCallback } from "@mantine/hooks"
import { SectionSettings } from './SectionSettings';
import { Catalogue } from '../../model'


export interface SectionEditorProps {
    catalogue?: Catalogue
    markdown: string
    reloadSection: () => Promise<any>
    readOnly?: boolean
}

export const SectionEditor = (props: SectionEditorProps) => {
    const { reloadSection, catalogue, markdown, readOnly = false } = props
    const { auditId } = useParams()
    const lexicalStateRef = useRef<EditorState | undefined>(undefined)
    const queryClient = useQueryClient()


    // const reportUpdateSectionContentCommand = useReportUpdateSectionContent({})

    const reloadSectionAndReports = useCallback(
        () => {
            reloadSection()
            queryClient.invalidateQueries({ queryKey: ["auditGet", { id: auditId }] })
        },
        [reloadSection, auditId],
    )

    const { doRefetchOnDismount } = useRefetchOnDismount({ refetch: reloadSectionAndReports })

    const handleSaveEditorState = useDebouncedCallback(async () => {
        // let markdown = lexicalStateRef.current ? lexicalStateToMarkdown(lexicalStateRef.current) : ""
        // await reportUpdateSectionContentCommand.mutateAsync({
        //     id: section.reportId!,
        //     sectionId: section.id!,
        //     contentText: markdown,
        //     contentRaw: JSON.stringify(lexicalStateRef.current?.toJSON()),
        //     originalVersionId: section.selectedVersion?.id
        // })
        doRefetchOnDismount()
    }, 700);

    const handleContentChange = useCallback(
        (editorState: EditorState) => {
            lexicalStateRef.current = editorState
            handleSaveEditorState()
        },
        []
    )

    return (
        <SectionPaper
            id={catalogue?.id}
        >
            {!readOnly && <SectionSettings
                refetchReport={reloadSection}
            />}
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
                <RichtTextEditor
                    readOnly={readOnly}
                    displayToolBarOnFocus
                    markdown={markdown}
                    onChange={handleContentChange}
                    placeholder="Le contenu de la section..."
                />
            </Stack>
        </SectionPaper>
    )
}