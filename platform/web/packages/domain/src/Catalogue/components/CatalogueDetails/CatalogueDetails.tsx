import { Stack } from '@mui/material'
import { FormComposable, FormComposableField, useFormComposable } from '@smartb/g2'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Catalogue } from '../../model'
import {config} from "../../../config";
// import { CatalogueTags } from './CatalogueTags'

export interface CatalogueDetailsProps {
    catalogue?: Catalogue
    isLoading?: boolean
}

export const CatalogueDetails = (props: CatalogueDetailsProps) => {
    const { catalogue, isLoading } = props

    const { t } = useTranslation()

    const formState = useFormComposable({
        isLoading,
        readOnly: true,
        formikConfig: {
            initialValues: catalogue
        }
    })

    const fields = useMemo((): FormComposableField<keyof Catalogue>[] => [
        {
            name: "description",
            type: "textField",
            params: {
                multiline: true,
                rows: 8,
                className: "descriptionField"
            }
        }, {
            name: "title",
            label: t("catalogues.standardAdministrator"),
            type: "textField",
            params: {
                orientation: "horizontal",
                getReadOnlyTextUrl: () => catalogue?.homepage
            }
        }, 
        // {
        //     name: "themes",
        //     label: t("catalogues.sectoralScopes"),
        //     type: "select",
        //     params: {
        //         readOnlyType: "customContainer",
        //         readOnlyElement: CatalogueTags
        //     }
        // }
    ], [t, catalogue])

    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="stretch"
            gap={2}
            sx={{
                "& .catalogLogo": {
                    width: "auto",
                    height: "auto",
                    maxWidth: "400px",
                    maxHeight: "200px",
                    flexShrink: 0,
                    flexGrow: 1,
                    objectFit: "contain"
                }
            }}
        >
            <FormComposable
                sx={{
                    flexGrow: 1,
                    flexBasis: 0,
                    "& .AruiForm-field": {
                        justifyContent: "flex-start"
                    },
                    "& .AruiForm-field > *": {
                        flexGrow: 1,
                        flexBasis: 0
                    },
                    "& .descriptionField .AruiInputForm-readOnlyText": {
                        whiteSpace: "pre-line"
                    }
                }}
                formState={formState}
                fields={fields}
            />
            {catalogue?.img && <img
                className='catalogLogo'
                src={`${config().platform.url}${catalogue.img}`}
                alt="The standard logo"
            />}
        </Stack>
    )
}
