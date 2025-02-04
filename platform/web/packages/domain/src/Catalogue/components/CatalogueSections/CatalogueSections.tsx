import { ControlPointRounded } from '@mui/icons-material'
import { Divider } from '@mui/material'
import { CustomButton } from 'components'
import { Fragment, useMemo } from 'react'
import { Catalogue } from '../../model'
import { SectionEditor } from '../SectionEditor'
import { useTranslation } from 'react-i18next'

interface CatalogueSectionsProps {
    catalogue?: Catalogue
    sections: string[]
    readOnly?: boolean
}

export const CatalogueSections = (props: CatalogueSectionsProps) => {
    const { catalogue, sections, readOnly = false } = props

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

    const sectionsDisplay = useMemo(() => sections.map((markdown, index) => (
        <Fragment
            key={index}
        >

            {!readOnly && <AddSectionDivider
                onAddSection={() => { } /* handleAddSection(section.position.index) */}
            />}
            <SectionEditor
            readOnly={readOnly}
                markdown={markdown}
                catalogue={catalogue}
                reloadSection={() => {
                    return Promise.resolve()
                }}
            />
            {index === sections.length - 1 && !readOnly && <AddSectionDivider
                onAddSection={() => { }/* handleAddSection(section.position.index + 1) */}
            />}
        </Fragment>
    )), [catalogue, sections, readOnly])

    return (
        <>
            {sectionsDisplay}
            {sections.length === 0 && !readOnly &&
                <AddSectionDivider
                    onAddSection={() => { } /* handleAddSection(0) */}
                />
            }
        </>
    )
}

export interface AddSectionDividerProps {
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
