import { ArrowDownwardRounded, ArrowUpwardRounded, DeleteRounded, DragIndicator } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useButtonMenu } from 'components'
import { useTranslation } from 'react-i18next'

export interface SectionSettingsProps {
    refetchReport: () => Promise<any>
}

export const SectionSettings = (props: SectionSettingsProps) => {
    const { /* refetchReport */ } = props
    // const queryClient = useQueryClient()
    const { t } = useTranslation()

    // const deleteSection = useReportDeleteSectionCommand({})

    // const onDelete = useCallback(
    //   async () => {
    //     const res = await deleteSection.mutateAsync({
    //         id: section.reportId,
    //         sectionId: section.id
    //     })
    //     if (res) {
    //         queryClient.invalidateQueries({ queryKey: ["auditGet", { id: report.auditId }] })
    //         await refetchReport()
    //     }
    //   },
    //   [deleteSection.mutateAsync, section, refetchReport],
    // )
    

    // const { popup, handleOpen } = useConfirmationPopUp({
    //     title: t("sectionView.sectionDeleteTitle"),
    //     description: t("sectionView.sectionConfirmDeletion", { sectionTitle: section.title }),
    //     onSubmit: onDelete,
    //     variant: "deletion"
    // })

    // const updateSectionIndex = useReportUpdateSectionIndexCommand({})

    // const handleSectionIndexChange = useCallback(async (newIndex: number) => {
    //     const res = await updateSectionIndex.mutateAsync({
    //         id: section.reportId,
    //         sectionId: section.id,
    //         index: newIndex,
    //     })
    //     if (res) {
    //         await refetchReport()
    //         queryClient.invalidateQueries({ queryKey: ["auditGet", { id: report.auditId }] })
    //     }
    // }, [section, report, refetchReport]);

    const { menu, buttonProps } = useButtonMenu({
        items: [{
            key: "moveUp",
            label: t("moveUp"),
            icon: <ArrowUpwardRounded />,
            // onClick: () => handleSectionIndexChange(section.position.previousIndex!),
            // disabled: section.position.isFirst
        },{
            key: "moveDown",
            label: t("moveDown"),
            icon: <ArrowDownwardRounded />,
            // onClick: () => handleSectionIndexChange(section.position.nextIndex!),
            // disabled: section.position.isLast
        },{
            key: "delete",
            label: t("delete"),
            color: "#B01717",
            icon: <DeleteRounded />,
            // onClick: handleOpen,
        }],
        closeOnMenuClick: false
    })

    return (
        <>
            <IconButton
            {...buttonProps}
            sx={{
                position: "absolute",
                top: 0,
                left: "-40px"
            }}
            >
                <DragIndicator />
            </IconButton>
            {menu}
            {/* popup */}
        </>
    )
}
