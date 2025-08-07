import { AutoFormData, FormComposable, FormComposableState } from '@komune-io/g2'
import { Paper, Stack, Typography } from '@mui/material'
import { IconPack } from 'components'

export interface CataloguePaperedAutoFormProps {
    formData?: AutoFormData
    formState: FormComposableState
}

export const CataloguePaperedAutoForm = (props: CataloguePaperedAutoFormProps) => {
    const { formData, formState } = props


    return (
        <Stack
            gap={1.5}
        >
            {
                formData?.sections.map((section) => {
                    const IconComponent = IconPack[section?.properties?.icon]
                    return (
                        <Paper
                            key={section.id}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 4,
                                py: 4,
                                px: 3,
                            }}
                        >
                            <Stack
                                direction="row"
                                gap={1.5}
                                alignItems="center"
                            >
                                <IconComponent />
                                <Typography
                                    variant="h6"
                                >
                                    {section.label}
                                </Typography>
                            </Stack>
                            {section.description && <Typography
                                variant="body1"
                            >
                                {section.description}
                            </Typography>}
                            <FormComposable
                                formState={formState}
                                fields={section.fields}
                                display={section.display}
                                gridColumnNumber={section.gridColumnNumber}
                                orientation={section.orientation}
                                fieldsStackProps={{
                                    sx: {
                                        gap: 4,
                                        "& .autoCompleteField .MuiAutocomplete-popupIndicator": {
                                            transform: "none !important"
                                        }
                                    }
                                }}
                                sx={{
                                    "& .AruiDropzone-root": {
                                        height: "204px",
                                        width: "204px !important"
                                    },
                                    "& .AruiForm-fieldsContainer": {
                                        gridTemplateColumns: section?.properties?.disableGridTemplate ? "1fr" : undefined,
                                    }
                                }}
                            />
                        </Paper>
                    )
                })
            }
        </Stack>
    )
}
