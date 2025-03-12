import { FormComposable, FormComposableField, useFormComposable } from "@komune-io/g2"
import { useCallback, useMemo } from 'react';
import { INSERT_LAYOUT_COMMAND } from './LayoutPlugin';
import { TmsPopUp } from '../../../TmsPopUp';
import { useTranslation } from 'react-i18next';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { Stack } from "@mui/material";
import { CustomButton } from "../../../CustomButton";

export interface LayoutModalProps {
    open: boolean
    onClose: () => void
}

export const LayoutModal = (props: LayoutModalProps) => {
    const { onClose, open } = props
    const { t } = useTranslation()
    const [editor] = useLexicalComposerContext();

    const onSubmit = useCallback((values: any) => {
        editor.dispatchCommand(INSERT_LAYOUT_COMMAND, values.type);
        onClose();
    }, [onClose])

    const formState = useFormComposable({
        onSubmit,
        formikConfig: {
            initialValues: {
                type: '1fr 1fr'
            }
        }
    })

    const fields = useMemo((): FormComposableField[] => ([{
        name: "type",
        type: "select",
        params: {
            options: [
                { label: t("editor.columnsType.1-1"), key: '1fr 1fr' },
                { label: t("editor.columnsType.1-3"), key: '1fr 3fr' },
                { label: t("editor.columnsType.3-1"), key: '3fr 1fr' },
                { label: t("editor.columnsType.1-1-1"), key: '1fr 1fr 1fr' },
                { label: t("editor.columnsType.1-2-1"), key: '1fr 2fr 1fr' },
                { label: t("editor.columnsType.1-1-1-1"), key: '1fr 1fr 1fr 1fr' },
            ]
        },
        required: true
    }]), [t])

    return (
        <TmsPopUp
            open={open}
            onClose={onClose}
            title={t("editor.addColumnLayout")}
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
