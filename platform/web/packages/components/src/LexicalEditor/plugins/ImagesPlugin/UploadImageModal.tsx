import { FormComposable, FormComposableField, g2Config, useFormComposable } from "@komune-io/g2"
import { useCallback, useMemo, useState } from 'react';
import { TmsPopUp } from '../../../TmsPopUp';
import { useTranslation } from 'react-i18next';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { INSERT_IMAGE_COMMAND } from "./ImagesPlugin";
import { useDatasetAddMediaDistributionCommand } from '../../api';
import { useParams } from "react-router-dom";
import { SectionTab, Tab } from "../../../SectionTab";
import { Stack } from "@mui/material";
import { CustomButton } from "../../../CustomButton";
import { ResourceGallery, GraphGallery } from "../../../dataset";
import { FormikHelpers } from "formik";

export interface UploadImageModalProps {
    open: boolean
    onClose: () => void
}


export const UploadImageModal = (props: UploadImageModalProps) => {
    const { onClose, open } = props
    const { t, i18n } = useTranslation()
    const { draftId } = useParams()
    const [editor] = useLexicalComposerContext();
    const [currentTab, setCurrentTab] = useState("upload")

    const uploadImage = useDatasetAddMediaDistributionCommand({})

    const onClickImage = useCallback((src: string) => {
        onClose();
        editor.dispatchCommand(INSERT_IMAGE_COMMAND, { altText: "graph", src: src, unCached: true });
    }, [onClose, editor])

    const onSubmit = useCallback(async (values: any, formikHelpers: FormikHelpers<any>) => {
        const file: File = values.image
        const res = await uploadImage.mutateAsync({
            command: {
                id: editor._config.namespace,
                mediaType: file.type,
            },
            files: [{
                file: file
            }]
        })
        if (res) {
            const imgSrc = g2Config().platform.url + `/data/datasetDownloadDistribution/${res.id}/${res.distributionId}`
            editor.dispatchCommand(INSERT_IMAGE_COMMAND, { altText: file.name, src: imgSrc });
            onClose();
            formikHelpers.resetForm()
        }
    }, [onClose, uploadImage.mutateAsync, draftId, editor])

    const formState = useFormComposable({
        onSubmit,
    })

    const fields = useMemo((): FormComposableField[] => ([{
        name: "image",
        type: "documentHandler",
        label: t("editor.uploadImage"),
        params: {
            fileTypesAllowed: ["jpeg", "png", "svg", "webp", "gif"],
        }
    }]), [t])


    const tabs = useMemo((): Tab[] => [{
        key: "upload",
        label: t("editor.uploadImage"),
        component: (
            <>
                <FormComposable
                    fields={fields}
                    formState={formState}
                />
                <Stack
                    direction="row"
                    gap={1}
                    alignItems="center"
                    justifyContent="flex-end"
                >
                    <CustomButton
                        variant='text'
                        onClick={onClose}
                    >
                        {t("cancel")}
                    </CustomButton>

                    <CustomButton
                        disabled={!formState.values.image}
                        onClick={formState.submitForm}
                    >
                        {t("validate")}
                    </CustomButton>
                </Stack>
            </>
        )
    }, {
        key: "gallery",
        label: t("editor.gallery"),
        component: <ResourceGallery draftId={draftId!} onClickImage={onClickImage} open={open} />
    }, {
        key: "charts",
        label: t("editor.charts"),
        component: <GraphGallery language={i18n.language} onClickImage={onClickImage} open={open} />
    }], [t, fields, formState, draftId, onClickImage, onClose, open])

    return (
        <TmsPopUp
            open={open}
            onClose={onClose}
            title={t("editor.addImage")}
            sx={{
                width: "1024px"
            }}
        >
            <SectionTab
                currentTab={currentTab}
                onTabChange={(_, tab) => setCurrentTab(tab)}
                tabs={tabs}
            />

        </TmsPopUp>
    )
}
