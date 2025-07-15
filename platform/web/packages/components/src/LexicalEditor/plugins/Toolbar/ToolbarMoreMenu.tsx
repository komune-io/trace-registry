import { useButtonMenu, useToggleState } from '../../../hooks'
import { useTranslation } from 'react-i18next'
import { AddCircleRounded, AddPhotoAlternateRounded, CropOriginal, HorizontalRule, TableChart, ViewWeekOutlined } from '@mui/icons-material'
import { TglButton } from './TglButton'
import { LayoutModal } from '../LayoutPlugin'
import { TableModal } from '../TablePlugin/TableModal'
import { UploadImageModal } from '../ImagesPlugin'
import {INSERT_HORIZONTAL_RULE_COMMAND} from '@lexical/react/LexicalHorizontalRuleNode';
import { useMemo } from 'react'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { EmbedCreationModal } from '../EmbedPlugin'

export const ToolbarMoreMenu = () => {

    const [editor] = useLexicalComposerContext();

    const [openLayoutModal, _, toggleLayoutModal] = useToggleState()
    const [openTableModal, _1, toggleTableModal] = useToggleState()
    const [openImageModal, _2, toggleImageModal] = useToggleState()
    const [openEmbedModal, _3, toggleEmbedModal] = useToggleState()

    const { t } = useTranslation()

    const items = useMemo(() => [{
            key: "columnLayout",
            onClick: toggleLayoutModal,
            label: t("editor.addColumnLayout"),
            icon: <ViewWeekOutlined />,

        }, {
            key: "addTable",
            onClick: toggleTableModal,
            label: t("editor.addTable"),
            icon: <TableChart />
        }, {
            key: "addImage",
            onClick: toggleImageModal,
            label: t("editor.addImage"),
            icon: <AddPhotoAlternateRounded />
        }, {
            key: "addDivider",
            onClick: () => {
                    editor.dispatchCommand(
                      INSERT_HORIZONTAL_RULE_COMMAND,
                      undefined,
                    );
                  },
            label: t("editor.addDivider"),
            icon: <HorizontalRule />
        }, {
            key: "addEmbed",
            onClick: toggleEmbedModal,
            label: t("editor.addEmbed"),
            icon: <CropOriginal />
        }], [t, editor])

    const { buttonProps, menu } = useButtonMenu({
        items, 
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
            <EmbedCreationModal open={openEmbedModal} onClose={toggleEmbedModal} />
        </>
    )
}
