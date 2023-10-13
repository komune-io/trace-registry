import { Stack } from '@mui/material'
import { FormComposable, FormComposableField, Option, useFormComposable } from '@smartb/g2'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Catalogue } from '../../model'
import {config} from "../../../config";
import { CatalogueTags } from './CatalogueTags'

export interface CatalogueDetailsProps {
    catalogue?: Catalogue
    isLoading?: boolean
}

export const CatalogueDetails = (props: CatalogueDetailsProps) => {
    const { catalogue, isLoading } = props

    const { t, i18n } = useTranslation()

    const initialValues = useMemo(() => ({
        ...catalogue,
        themes: catalogue?.themes.map((theme: any) => theme.id)
    }), [catalogue])

    const formState = useFormComposable({
        isLoading,
        readOnly: true,
        formikConfig: {
            initialValues
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
            label: t("catalogues.administrator", {entity: t(catalogue?.type ?? "standard")}),
            type: "textField",
            params: {
                orientation: "horizontal",
                getReadOnlyTextUrl: () => catalogue?.homepage
            }
        }, 
        {
            name: "themes",
            label: t("catalogues.sectoralScopes"),
            type: "select",
            params: {
                orientation: "horizontal",
                readOnlyType: "customContainer",
                readOnlyElement: CatalogueTags,
                multiple: true,
                options: catalogue?.themes?.map((theme: any): Option => ({
                    key: theme.id, label: theme.prefLabels[i18n.resolvedLanguage ?? "en"], color: "#18159D"
                }))
            }
        }
    ], [t, catalogue, i18n.resolvedLanguage])

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
                    },
                    "& .MuiInputLabel-root": {
                        maxWidth: "250px"
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
