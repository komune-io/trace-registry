import { useMemo } from 'react'
import { Activity, ActivityStep } from '../../model'
import { FormComposable, FormComposableField, useFormComposable } from '@smartb/g2'
import { Box, Divider, Skeleton, Stack, Typography } from '@mui/material'
import { cccev } from 'verified-emission-reduction-registry-activity-f2-domain'
export interface ActivitiesSummaryFormProps {
    activity?: Activity
    steps?: ActivityStep[]
    isLoading?: boolean
}

export const ActivitiesStepSummary = (props: ActivitiesSummaryFormProps) => {
    const { activity, isLoading, steps } = props

    const values = useMemo(() => steps?.reduce((a: any, v: ActivityStep) => ({
        ...a,
        [v.identifier]: v.value,
        ...(v.evidences?.reduce((a: any, e: cccev.s2.certification.domain.model.EvidenceDTO) =>({
            ...a,
            [e.id]: e.name + "Uploaded"
        })))
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

    const filesFields = useMemo((): FormComposableField[] => {
        return steps?.flatMap((it: ActivityStep) => {
            console.log(it.evidences)
            return (it.evidences ?? []).map((file: cccev.s2.certification.domain.model.EvidenceDTO) =>
                ({
                name: file.id,
                type: 'documentHandler',
                fullRow: true,
                label: file.name,
                // params: {
                //     fileTypesAllowed: ["pdf", "jpeg", "png"],
                // }
            }));
        }) ?? [];
    }, [steps]);

    const fields = useMemo((): FormComposableField[] => {
        return ([
        ...(steps?.map((it: ActivityStep): FormComposableField => ({
                name: it.identifier,
                    label: `${it.identifier} - ${it.name}`,
                    params: {
                    orientation: "horizontal"
                },
                type: "textField"
            })) ?? []),
            ...filesFields
       ] );
    }, [steps, filesFields]);

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
