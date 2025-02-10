import { Action, Actions, FormComposable, FormComposableField, g2Config, useFormComposable } from "@komune-io/g2"
import { useCallback, useMemo } from 'react';
import { TmsPopUp } from '../../../TmsPopUp';
import { useTranslation } from 'react-i18next';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { INSERT_IMAGE_COMMAND } from "./ImagesPlugin";
import { Typography } from "@mui/material";
import { useDatasetAddMediaDistributionCommand } from '../../api';
import { useParams } from "react-router-dom";

export interface UploadImageModalProps {
    open: boolean
    onClose: () => void
}

export const UploadImageModal = (props: UploadImageModalProps) => {
    const { onClose, open } = props
    const { t } = useTranslation()
    const { reportId } = useParams()
    const [editor] = useLexicalComposerContext();

    const uploadImage = useDatasetAddMediaDistributionCommand({})

    const onSubmit = useCallback(async (values: any) => {
        if (values.url) {
            editor.dispatchCommand(INSERT_IMAGE_COMMAND, { altText: values.url, src: values.url });
            onClose();
        }
        if (values.image) {
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
            }
        }
    }, [onClose, uploadImage.mutateAsync, reportId, editor])

    const formState = useFormComposable({
        onSubmit,
    })

    const fields = useMemo((): FormComposableField[] => ([{
        name: "url",
        type: "textField",
        label: t("editor.imageUrl"),
        customDisplay: (input) => (
            <>
                {input}
                <Typography variant="subtitle2">{t("or")}</Typography>
            </>
        )
    }, {
        name: "image",
        type: "documentHandler",
        params: {
            fileTypesAllowed: ["jpeg", "png", "svg", "webp"],
            outterLabel: t("editor.uploadImage")
        }
    }]), [t])

    const actions = useMemo((): Action[] => [{
        key: "cancel",
        label: t("cancel"),
        onClick: onClose,
        variant: "text",
        size: "large"
    }, {
        key: "validate",
        label: t("validate"),
        onClick: formState.submitForm,
        disabled: !formState.values.url && !formState.values.image,
        size: "large",
    }], [formState.submitForm, formState.values])

    return (
        <TmsPopUp
            open={open}
            onClose={onClose}
            title={t("editor.addImage")}
        >
            <FormComposable
                fields={fields}
                formState={formState}
            />
            <Actions actions={actions} />
        </TmsPopUp>
    )
}
