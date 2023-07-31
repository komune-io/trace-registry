import {useMemo} from 'react'
import {Activity, ActivityStep, Evidence} from '../../model'
import { FormComposable, FormComposableField, useFormComposable } from '@smartb/g2'
import { Box, Divider, Skeleton, Stack, Typography } from '@mui/material'
import {useProductEvidenceDownloadQuery} from "../../api";

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
        ...(v.evidences?.reduce((a: any, e: Evidence) =>({
            ...a,
            [e.id]: e.name + "Uploaded"
        }), {}))
    }), {}), [steps])

    const formState = useFormComposable({
        isLoading: isLoading,
        readOnly: true,
        emptyValueInReadOnly: "-",
        formikConfig: {
            initialValues: values
        }
    })
    const productEvidenceDownloadQuery = useProductEvidenceDownloadQuery()

    const fields = useMemo((): FormComposableField[] => {
        return steps?.flatMap((it: ActivityStep) => {
            const evidences = (it.evidences ?? []).map((evidence: Evidence) => {
                const productEvidenceDownloadUrl = async () => {
                    return await productEvidenceDownloadQuery({
                        evidenceId: evidence.id,
                        certificationIdentifier: activity?.certification?.identifier ?? "",
                    })
                }
                return ({
                    name: evidence.id,
                    type: 'documentHandler',
                    fullRow: true,
                    label: evidence.name,
                    params: {
                        getFileUrl: () => productEvidenceDownloadUrl(),
                    }
                } as FormComposableField)
              }
            );
            const field: FormComposableField = {
                name: it.identifier,
                label: `${it.identifier} - ${it.name}`,
                params: {
                    orientation: "horizontal"
                },
                type: "textField"
            }
            return [field, ...evidences];
        }) ?? [];
    }, [steps]);


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
