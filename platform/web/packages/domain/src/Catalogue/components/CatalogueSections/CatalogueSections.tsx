import { Fragment, useCallback, useMemo } from 'react'
import { Catalogue } from '../../model'
import { SectionEditor } from '../SectionEditor'
import { EditorState } from 'lexical'
import { useQuery } from '@tanstack/react-query'
import { g2Config, request } from '@komune-io/g2'

interface CatalogueSectionsProps {
    catalogue?: Catalogue
    readOnly?: boolean
    onSectionChange?: (editorState: EditorState) => void
}

export const CatalogueSections = (props: CatalogueSectionsProps) => {
    const { catalogue, readOnly = false, onSectionChange } = props

    const dataSet = useMemo(() => {
        if (!catalogue) return
        return findLexicalDataset(catalogue)
    }, [catalogue])

    const distributionContentQuery = useCallback(
        async () => {
            if (!dataSet) return
            const res = await request<any>({
                url: `${g2Config().platform.url}/data/datasetDownloadDistribution/${dataSet.dataSet.id}/${dataSet.distribution.id}`,
                method: "GET",
                returnType: dataSet.distribution.mediaType === "application/json" ? "json" : "text"
                // errorHandler: errorHandler(path),
            });
            return res
        },
        [dataSet],
    )

    const sectionDataQuery = useQuery({
        queryKey: ["data/datasetDownloadDistribution", { id: dataSet?.dataSet.id, distributionId: dataSet?.distribution.id }],
        queryFn: distributionContentQuery,
        enabled: !!dataSet,
    })

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
                    markdown={isMarkdown ? sectionDataQuery.data : undefined}
                    editorState={isMarkdown ? undefined : JSON.stringify(sectionDataQuery.data)}
                    catalogue={catalogue}
                    onChange={onSectionChange}
                    namespace={dataSet?.dataSet.id}
                />
                {/* index === sections.length - 1 && !readOnly && <AddSectionDivider
                    onAddSection={handleAddSection(section.position.index + 1)}
                /> */}
            </Fragment>
        )
    }, [catalogue, readOnly, onSectionChange, sectionDataQuery.data, dataSet])

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

export const findLexicalDataset = (catalogue: Catalogue) => {

    const dataSet = catalogue?.datasets?.find((dataSet) => dataSet.type === "lexical")
    const distribution = dataSet?.distributions?.find((distribution) => distribution.mediaType === "application/json")

    if (dataSet && distribution) return {
        dataSet,
        distribution
    }

    const markdownDataSet = catalogue?.datasets?.find((dataSet) =>  dataSet.type === "lexical-markdown")

    const markdownDistribution = markdownDataSet?.distributions?.find((distribution) => distribution.mediaType === "text/markdown")

    if (markdownDataSet && markdownDistribution) return {
        dataSet: markdownDataSet,
        distribution: markdownDistribution
    }

    return undefined
}