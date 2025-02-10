import { Fragment, useMemo } from 'react'
import { Catalogue } from '../../model'
import { SectionEditor } from '../SectionEditor'
import { EditorState } from 'lexical'
import { useDatasetDownloadDistribution } from '../../api'

interface CatalogueSectionsProps {
    catalogue?: Catalogue
    readOnly?: boolean
    onSectionChange?: (editorState: EditorState) => void
}

export const CatalogueSections = (props: CatalogueSectionsProps) => {
    const { catalogue, readOnly = false, onSectionChange } = props

    const {
        query,
        dataSet
    } = useDatasetDownloadDistribution(catalogue)

    // const reportAddSection = useReportAddSection()
    // const handleAddSection = useCallback(async (index: number) => {
    //     const res = await reportAddSection.mutateAsync({
    //         id: report.id,
    //         index
    //     })
    //     if (res) {
    //         queryClient.invalidateQueries({ queryKey: ["auditGet", { id: report.auditId }] })
    //         await refetchReport()
    //         setTimeout(() => {
    //             const createdSection = document.getElementById(res.sectionId) as HTMLElement
    //             if (createdSection) {
    //                 createdSection.scrollIntoView({
    //                     behavior: "smooth",
    //                     block: "center"
    //                 })
    //             }
    //         }, 500);

    //     }
    // }, [reportAddSection.mutateAsync, refetchReport, report])

    const sectionsDisplay = useMemo(() => {
        const isMarkdown = dataSet?.distribution.mediaType === "text/markdown"

        return (
            <Fragment
                key={dataSet?.dataSet.id ?? "newSection"}
            >

                {/* !readOnly && <AddSectionDivider
                    onAddSection={handleAddSection(section.position.index)}
                /> */}
                <SectionEditor
                    readOnly={readOnly}
                    markdown={isMarkdown && query.data ? query.data : undefined}
                    editorState={!isMarkdown && query.data ? JSON.stringify(query.data): undefined}
                    catalogue={catalogue}
                    onChange={onSectionChange}
                    namespace={dataSet?.dataSet.id}
                />
                {/* index === sections.length - 1 && !readOnly && <AddSectionDivider
                    onAddSection={handleAddSection(section.position.index + 1)}
                /> */}
            </Fragment>
        )
    }, [catalogue, readOnly, onSectionChange, query.data, dataSet])

    return (
        <>
            {sectionsDisplay}
            {/* sections.length === 0 && !readOnly &&
                <AddSectionDivider
                    onAddSection={handleAddSection(0)}
                />
             */}
        </>
    )
}

/* export interface AddSectionDividerProps {
    onAddSection: () => void
}

const AddSectionDivider = (props: AddSectionDividerProps) => {
    const { onAddSection } = props

    const { t } = useTranslation()

    return (
        <Divider
            sx={{
                my: -2.5,
                "&::before": {
                    borderTop: "2px dashed#E0E0E0"
                },
                "&::after": {
                    borderTop: "2px dashed#E0E0E0"
                }
            }}
        >
            <CustomButton
                onClick={onAddSection}
                startIcon={<ControlPointRounded />} >
                {t("catalogues.newSection")}
            </CustomButton>
        </Divider>
    )
}
 */