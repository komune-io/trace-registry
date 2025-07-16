import { FormComposable, FormComposableField, useFormComposable } from "@komune-io/g2"
import { useCallback, useMemo } from 'react';
import { TmsPopUp } from '../../../TmsPopUp';
import { useTranslation } from 'react-i18next';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { Stack } from "@mui/material";
import { CustomButton } from "../../../CustomButton";
import { INSERT_EMBED_COMMAND } from "./EmbedPlugin";

export interface EmbedCreationModalProps {
    open: boolean
    onClose: () => void
}

export const EmbedCreationModal = (props: EmbedCreationModalProps) => {
    const { onClose, open } = props
    const { t } = useTranslation()
    const [editor] = useLexicalComposerContext();

    const onSubmit = useCallback((values: any) => {
        editor.dispatchCommand(INSERT_EMBED_COMMAND, values);
        onClose();
    }, [onClose])

    const formState = useFormComposable({
        onSubmit
    })

    const fields = useMemo((): FormComposableField[] => ([{
        name: "src",
        type: "textField",
        label: t("editor.embedUrl"),
        required: true
    }]), [t])

    return (
        <TmsPopUp
            open={open}
            onClose={onClose}
            title={t("editor.addEmbed")}
        >
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
                    onClick={formState.submitForm}
                >
                    {t("validate")}
                </CustomButton>
            </Stack>
        </TmsPopUp>
    )
}
