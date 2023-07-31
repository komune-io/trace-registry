import { Stack } from '@mui/material'
import { FormComposable, FormComposableField, useFormComposable } from '@smartb/g2'
import { Organization, requiredString } from "@smartb/g2-i2-v2"
import { useEffect, useMemo } from 'react'


export interface OrganizationDomainDetailsProps {
    isLoading?: boolean
    readOnly?: boolean
    onSubmit: (values: Partial<Organization>) => void
    registerSubmitter: (submitForm: () => Promise<any>, validateForm: (values?: any) => Promise<any>) => () => void
    hidden?: boolean
}

export const OrganizationDomainDetails = (props: OrganizationDomainDetailsProps) => {
    const {readOnly, onSubmit, isLoading, registerSubmitter, hidden = false } = props

    const formState = useFormComposable({
        onSubmit: onSubmit
    })

    const fields = useMemo((): FormComposableField[] => [{
        name: "example",
        type: "textField",
        label: "This is an example",
        validator: (value) => requiredString("this field is required", value)
    }], [])

    useEffect(registerSubmitter(formState.submitForm, formState.validateForm), [formState.submitForm, formState.validateForm])
    

    return (
        <Stack
            gap={3}
            display={hidden ? "none" : "flex"}
        >
            <FormComposable fields={fields} formState={formState} readOnly={readOnly} isLoading={isLoading} />
        </Stack>
    )
}
