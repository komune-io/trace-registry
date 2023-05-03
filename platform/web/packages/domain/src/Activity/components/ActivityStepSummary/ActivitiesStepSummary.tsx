import { useMemo } from 'react'
import { Activity, ActivityStep } from '../../model'
import { FormComposable, FormComposableField, useFormComposable } from '@smartb/g2'
import { Box, Divider, Skeleton, Stack, Typography } from '@mui/material'

export interface ActivitiesSummaryFormProps {
    activity?: Activity
    steps?: ActivityStep[]
    isLoading?: boolean
}


export const ActivitiesStepSummary = (props: ActivitiesSummaryFormProps) => {
    const { activity, isLoading, steps } = props

    const values = useMemo(() => steps?.reduce((a: any, v: ActivityStep) => ({
        ...a,
        [v.identifier]: v.value
    }
    ), {}), [steps])

    const formState = useFormComposable({
        isLoading: isLoading,
        readonly: true,
        emptyValueInReadonly: "-",
        formikConfig: {
            initialValues: values
        }
    })

    const fields: FormComposableField[] = useMemo(() => steps?.map(it => ({
        name: it.identifier,
        label: `${it.identifier} - ${it.name}`,
        params: {
            orientation: "horizontal"
        },
        type: "textField",
    }
    )) ?? [], [steps])

    return (
        <Stack
            sx={{
                height: "100%",
                width: "550px",
                padding: "24px 32px",
                overflowY: "auto"
            }}
            gap={2}
        >
            <Box>
                <Typography variant="h5">{activity?.name}</Typography>
                <Divider sx={{ marginTop: "8px" }} />
            </Box>
            {
                isLoading ?
                    <Skeleton
                        sx={{
                            width: '100%',
                            height: '200px',
                            transform: 'none'
                        }}
                        animation='wave'
                        variant='text'
                    />
                    :
                    <>
                        <Typography color="text.secondary" >{activity?.description}</Typography>
                        <FormComposable fields={fields} formState={formState} />
                    </>
            }
        </Stack>
    )
}
