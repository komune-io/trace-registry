import { FormComposable, AutoFormData, useAutoFormState, CommandWithFile } from "@komune-io/g2"
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Stack, Typography } from "@mui/material";
import { CustomButton, TmsPopUp, useRoutesDefinition } from "components";
import { useNavigate, useParams } from "react-router-dom";


export interface AddProtocolModalProps {
    formData?: AutoFormData
    open: boolean
    onClose: () => void
}

export const AddProtocolModal = (props: AddProtocolModalProps) => {
    const { onClose, open, formData } = props
    const { catalogueId, draftId, tab } = useParams()
    const { t } = useTranslation()
    const {cataloguesCatalogueIdDraftIdTabProtocolIdProtocol} = useRoutesDefinition()
    const navigate = useNavigate()

    const onSubmit = useCallback((command: CommandWithFile<any>, values: any) => {
        console.log("Command submitted:", command);
        console.log(catalogueId, draftId, tab, values.id);
        navigate(cataloguesCatalogueIdDraftIdTabProtocolIdProtocol(catalogueId!, draftId!, tab!, values.id))
        onClose();
    }, [onClose, catalogueId, draftId, tab])

    const formState = useAutoFormState({
        formData,
        onSubmit
    })

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
                fields={formData?.sections[0].fields ?? []}
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
