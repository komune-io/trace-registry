import {Stack} from '@mui/material'
import { FormComposable, FormComposableField, FormComposableState } from '@smartb/g2'
import { addMapBaseProps } from 'components'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Project } from '../../model'

export interface ProjectProtocolesLocationProps {
    formState: FormComposableState
}

export const ProjectProtocolesLocation = (props: ProjectProtocolesLocationProps) => {
    const { formState } = props
    const { t } = useTranslation()

    const map = useMemo((): FormComposableField<keyof Project>[] => [{
        name: "location",
        type: "map",
        params: addMapBaseProps(t, {
            draggableMarkerPlugin: {
                enable: true
            },
            style: {
                height: "400px"
            }
        }),
    }], [t])
    // const vcus = useMemo((): FormComposableField<keyof Project>[] => [{
    //     name: "estimatedReductions",
    //     label: t("projects.estimatedReduction"),
    //     type: "textField",
    //     params: {
    //         orientation: "horizontal",
    //
    //     }
    // }], [t])

    return (
        <Stack
            gap={2}
            sx={{
                flexGrow: 1,
                flexBasis: 0
            }}
        >
            {/*{*/}
            {/*    <>*/}
            {/*        <Typography variant="h6">{t("protocoles")}</Typography>*/}
            {/*        <Box*/}
            {/*            sx={{*/}
            {/*                height: "100px",*/}
            {/*                width: "100%",*/}
            {/*                padding: 2,*/}
            {/*                background: (theme) => theme.palette.background.default,*/}
            {/*                borderRadius: (theme) => theme.shape.borderRadius + "px",*/}
            {/*            }}*/}
            {/*        >*/}
            {/*            <Typography sx={{paddingBottom: 2}}variant="body2">{t("BIODIV")}</Typography>*/}
            {/*            <FormComposable*/}
            {/*              sx={{*/}
            {/*                  "& .AruiForm-field": {*/}
            {/*                      justifyContent: "flex-start"*/}
            {/*                  },*/}
            {/*                  "& .AruiForm-field > *": {*/}
            {/*                      flexGrow: 1,*/}
            {/*                      flexBasis: 0*/}
            {/*                  }*/}
            {/*              }}*/}
            {/*              formState={formState} fields={vcus} />*/}
            {/*        </Box>*/}
            {/*    </>*/}
            {/*}*/}
            <FormComposable fields={map} formState={formState} />
        </Stack>
    )
}
