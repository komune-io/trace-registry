import { Action, Actions, FormComposable, FormComposableField, g2Config, useFormComposable } from "@komune-io/g2"
import { useCallback, useMemo, useState } from 'react';
import { TmsPopUp } from '../../../TmsPopUp';
import { useTranslation } from 'react-i18next';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { INSERT_IMAGE_COMMAND } from "./ImagesPlugin";
import { useDatasetAddMediaDistributionCommand } from '../../api';
import { useParams } from "react-router-dom";
import { SectionTab, Tab } from "../../../SectionTab";
import { useCatalogueDraftGetQuery } from "domain-components";
import { ImageCard } from "../../../ImageCard";
import { Stack } from "@mui/material";

export interface UploadImageModalProps {
    open: boolean
    onClose: () => void
}

export const UploadImageModal = (props: UploadImageModalProps) => {
    const { onClose, open } = props
    const { t } = useTranslation()
    const { draftId } = useParams()
    const [editor] = useLexicalComposerContext();
    const [currentTab, setCurrentTab] = useState("upload")

    const catalogueDraftQuery = useCatalogueDraftGetQuery({
        query: {
            id: draftId!
        },
    })

    const draft = catalogueDraftQuery.data?.item

    const uploadImage = useDatasetAddMediaDistributionCommand({})

    const onClickImage = useCallback((src: string) => {
        editor.dispatchCommand(INSERT_IMAGE_COMMAND, { altText: "graph", src: src });
        onClose();
    }, [onClose, editor])

    const onSubmit = useCallback(async (values: any) => {
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
    }, [onClose, uploadImage.mutateAsync, draftId, editor])

    const formState = useFormComposable({
        onSubmit,
    })

    const fields = useMemo((): FormComposableField[] => ([{
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
        disabled: !formState.values.image,
        size: "large",
    }], [formState.submitForm, formState.values])

    const graphsDisplay = useMemo(() => draft?.catalogue.datasets?.find((dataset) => dataset.type === "graphs")?.datasets?.map((dataset) => {
        const imageDistribution = dataset.distributions?.find((dist) => dist.mediaType === "image/svg+xml")
        if (!imageDistribution) return
        const src = g2Config().platform.url + `/data/datasetDownloadDistribution/${dataset.id}/${imageDistribution.id}`
        return (
            <ImageCard
                imageUrl={src}
                onClick={() => onClickImage(src)}
                label={dataset.title}
            />
        )
    }), [draft, onClickImage])


    const tabs = useMemo((): Tab[] => [{
        key: "upload",
        label: t("editor.uploadImage"),
        component: (
            <>
                <FormComposable
                    fields={fields}
                    formState={formState}
                />
                <Actions actions={actions} />
            </>
        )
    }, {
        key: "galery",
        label: t("editor.gallery"),
        component: (
            <Stack
                direction="row"
                gap={3}
                flexWrap="wrap"
                alignItems="flex-start"
            >
                {graphsDisplay}
            </Stack>
        )
    }], [t, fields, formState, actions, graphsDisplay])

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
