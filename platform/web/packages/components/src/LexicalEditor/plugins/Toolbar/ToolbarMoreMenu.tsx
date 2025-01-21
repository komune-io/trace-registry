import { useButtonMenu, useToggleState } from '../../../hooks'
import { useTranslation } from 'react-i18next'
import { AddCircleRounded, TableChart, ViewWeekOutlined } from '@mui/icons-material'
import { TglButton } from './TglButton'
import { LayoutModal } from '../LayoutPlugin'
import { TableModal } from '../TablePlugin/TableModal'

export const ToolbarMoreMenu = () => {

    const [openLayoutModal, _, toggleLayoutModal] = useToggleState()
    const [openTableModal, _1, toggleTableModal] = useToggleState()

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
        }], closeOnMenuClick: true
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
        </>
    )
}
