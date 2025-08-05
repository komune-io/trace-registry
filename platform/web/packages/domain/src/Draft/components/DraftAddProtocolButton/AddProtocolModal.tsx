import { FormComposable, AutoFormData, useAutoFormState, CommandWithFile, FormComposableField } from "@komune-io/g2"
import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Stack, Typography } from "@mui/material";
import { CustomButton, TmsPopUp, useRoutesDefinition } from "components";
import { useNavigate, useParams } from "react-router-dom";
import { ProtocolPageQuery, useProtocolPageQuery } from "../../../Protocol";
import { useCatalogueStartCertificationCommand } from "../../../Catalogue";


export interface AddProtocolModalProps {
    formData?: AutoFormData
    open: boolean
    onClose: () => void
}

export const AddProtocolModal = (props: AddProtocolModalProps) => {
    const { onClose, open, formData } = props
    const { catalogueId, draftId, tab } = useParams()
    const { t } = useTranslation()
    const { cataloguesCatalogueIdDraftIdTabProtocolIdCertificationIdProtocol } = useRoutesDefinition()
    const navigate = useNavigate()

    const [filters, setFilters] = useState<ProtocolPageQuery | undefined>(undefined)

    const startCertification = useCatalogueStartCertificationCommand({})


    const protocols = useProtocolPageQuery({
        query: {
            ...filters!,
            limit: 1000,
        },
        options: {
            enabled: !!filters
        }
    })

    const onSubmit = useCallback(async (_: CommandWithFile<any>, values: any) => {
        const res = await startCertification.mutateAsync({
            id: catalogueId!,
            protocolId: values.protocolId
        })
        if (res) {
            navigate(cataloguesCatalogueIdDraftIdTabProtocolIdCertificationIdProtocol(catalogueId!, draftId!, tab!, values.protocolId, res.certificationId))
            onClose();
        }
    }, [onClose, catalogueId, draftId, tab])

    const formState = useAutoFormState({
        formData,
        onSubmit
    })

    const fields = useMemo(
        () => {
            return formData?.sections[0].fields.map((field) => {
                //@ts-ignore
                if (field.type === "select-protocol") {
                    //@ts-ignore
                    const fieldCopy = { ...field } as FormComposableField
                    if (!filters) {
                        //@ts-ignore
                        fieldCopy.params?.filters && setFilters(JSON.parse(fieldCopy.params?.filters))
                    }
                    return {
                        ...fieldCopy,
                        type: "select",
                        params: {
                            ...fieldCopy.params,
                            options: protocols.data?.items.map((protocol) => ({
                                label: protocol.label,
                                key: protocol.id
                            })) ?? []
                        }
                    }
                }
                return field
            })
        },
        [formData, protocols.data?.items, filters]
    )


    return (
        <TmsPopUp
            open={open}
            onClose={onClose}
            title={formData?.sections[0].label}
            sx={{
                maxWidth: "600px",
            }}
        >
            {formData?.sections[0].description && (
                <Typography
                    variant="body2"
                >
                    {formData.sections[0].description}
                </Typography>
            )}
            <FormComposable
                fields={fields ?? []}
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
                    onClick={formState.submitForm}
                >
                    {t("confirm")}
                </CustomButton>
            </Stack>
        </TmsPopUp>
    )
}
