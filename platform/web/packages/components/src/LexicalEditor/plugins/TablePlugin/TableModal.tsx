import { Action, Actions, FormComposable, FormComposableField, useFormComposable } from "@komune-io/g2"
import { useCallback, useMemo } from 'react';
import { TmsPopUp } from '../../../TmsPopUp';
import { useTranslation } from 'react-i18next';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { INSERT_TABLE_COMMAND } from "@lexical/table";

export interface TableModalProps {
    open: boolean
    onClose: () => void
}

export const TableModal = (props: TableModalProps) => {
    const { onClose, open } = props
    const { t } = useTranslation()
    const [editor] = useLexicalComposerContext();

    const onSubmit = useCallback((values: any) => {
        editor.dispatchCommand(INSERT_TABLE_COMMAND, values);
        onClose();
    }, [onClose])

    const formState = useFormComposable({
        onSubmit,
        formikConfig: {
            initialValues: {
                rows: 5,
                columns: 5
            }
        }
    })

    const fields = useMemo((): FormComposableField[] => ([{
        name: "rows",
        type: "textField",
        label: t("editor.rowsNumber"),
        params: {
            textFieldType: "number"
        },
        required: true
    }, {
        name: "columns",
        type: "textField",
        label: t("editor.columnsNumber"),
        params: {
            textFieldType: "number"
        },
        required: true
    }]), [t])

    const disabled = useMemo(() => {
        const row = Number(formState.values.rows);
            const column = Number(formState.values.columns);
            if (row && row > 0 && row <= 500 && column && column > 0 && column <= 50) {
              return false
            }
            return true
    }, [formState.values])

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
        disabled,
        size: "large",
    }], [formState.submitForm, disabled])

    return (
        <TmsPopUp
            open={open}
            onClose={onClose}
            title={t("editor.addTable")}
        >
            <FormComposable
                fields={fields}
                formState={formState}
            />
            <Actions actions={actions} />
        </TmsPopUp>
    )
}
