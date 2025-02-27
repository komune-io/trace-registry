import { Button, FormComposable, FormComposableField, useFormComposable } from '@komune-io/g2'
import { Stack, Typography } from '@mui/material'
import { useQueryClient } from '@tanstack/react-query'
import { Accordion, MultiFileDropzone, TmsPopUp } from 'components'
import { useDatasetAddMediaDistributionCommand } from 'components/src/LexicalEditor/api'
import React, { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

interface CSVUploadPopupProps {
    open: boolean
    onClose: (event: React.ChangeEvent<{}>) => void
    datasetId: string
}

export const CSVUploadPopup = (props: CSVUploadPopupProps) => {
    const { open, onClose, datasetId } = props
    const { t } = useTranslation()
    const { draftId } = useParams()
    const queryClient = useQueryClient()

    const [currentCsv, setCurrentCsv] = useState<File | undefined>(undefined)

    const onAddFile = useCallback(
        (files: File[]) => {
            if (files[0]) setCurrentCsv(files[0])
        },
        [],
    )

    const uploadMedia = useDatasetAddMediaDistributionCommand({

    })

    const onSaveMemo = useCallback(
        async (values: any) => {
            const res = await uploadMedia.mutateAsync({
                command: {
                    id: datasetId,
                    mediaType: currentCsv!.type,
                    draftId: draftId!,
                    name: values.name
                },
                files: [{
                    file: currentCsv!
                }]
            })
            if (res) {
                queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftGet", { id: draftId! }] })
                onClose
            }
        },
        [datasetId, currentCsv, uploadMedia.mutateAsync, onClose],
    )


    const fields = useMemo((): FormComposableField[] => [{
        name: "file",
        type: "documentHandler",
        label: currentCsv?.name,
        params: {
            outterLabel: t("file"),
            onDelete: () => setCurrentCsv(undefined)
        }
    }, {
        name: "name",
        label: t("name"),
        type: "textField",
        required: true
    }], [t, currentCsv])

    const initialValues = useMemo(() => {
        if (!currentCsv) return
        const splited = currentCsv.name.split(".")
        splited.pop()
        const fileName = splited.join(".")
        return {
            fileUploaded: () => URL.createObjectURL(currentCsv),
            name: fileName
        }
    }, [currentCsv])

    const formState = useFormComposable({
        onSubmit: onSaveMemo,
        formikConfig: {
            initialValues
        }
    })


    return (
        <TmsPopUp
            open={open}
            onClose={onClose}
            title={t("cataogues.csvDeposit")}
        >
            {!currentCsv ? <MultiFileDropzone fileTypesAllowed={["csv"]} onAdd={onAddFile} /> :
                <>
                    <FormComposable
                        fields={fields}
                        formState={formState}
                    />
                    <Accordion
                        size='small'
                        summary={
                            <Typography
                                variant='subtitle1'
                            >
                                {currentCsv.name}
                            </Typography>
                        }
                        defaultExpanded
                    >
                    </Accordion>
                </>
            }
            <Stack
                gap={1}
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
            >
                <Button
                    onClick={onClose}
                    variant='text'
                >
                    {t("cancel")}
                </Button>
                <Button
                    onClick={formState.submitForm}
                    disabled={!currentCsv}
                >
                    {t("save")}
                </Button>
            </Stack>

        </TmsPopUp>
    )
}

