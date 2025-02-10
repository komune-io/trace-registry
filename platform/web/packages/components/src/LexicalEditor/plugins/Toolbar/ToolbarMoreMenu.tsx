import { useButtonMenu, useToggleState } from '../../../hooks'
import { useTranslation } from 'react-i18next'
import { AddCircleRounded, AddPhotoAlternateRounded, TableChart, ViewWeekOutlined } from '@mui/icons-material'
import { TglButton } from './TglButton'
import { LayoutModal } from '../LayoutPlugin'
import { TableModal } from '../TablePlugin/TableModal'
import { UploadImageModal } from '../ImagesPlugin'

export const ToolbarMoreMenu = () => {

    const [openLayoutModal, _, toggleLayoutModal] = useToggleState()
    const [openTableModal, _1, toggleTableModal] = useToggleState()
    const [openImageModal, _2, toggleImageModal] = useToggleState()

    const { t } = useTranslation()

    const { buttonProps, menu } = useButtonMenu({
        items: [{
            key: "columnLayout",
            onClick: toggleLayoutModal,
            label: t("sectionView.addColumnLayout"),
            icon: <ViewWeekOutlined />,

        }, {
            key: "addTable",
            onClick: toggleTableModal,
            label: "Add table",
            icon: <TableChart />
        }, {
            key: "addImage",
            onClick: toggleImageModal,
            label: t("sectionView.addImage"),
            icon: <AddPhotoAlternateRounded />
        }], 
        closeOnMenuClick: true
    })

    return (
        <>
            {/* @ts-ignore */}
            <TglButton
                value=""
                {...buttonProps}
            >
                <AddCircleRounded />
            </TglButton>
            {menu}
            <LayoutModal open={openLayoutModal} onClose={toggleLayoutModal} />
            <TableModal open={openTableModal} onClose={toggleTableModal} />
            <UploadImageModal open={openImageModal} onClose={toggleImageModal} />
        </>
    )
}
