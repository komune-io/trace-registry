import { FormComposable, FormComposableField, FormComposableState, Option } from '@komune-io/g2'
import { SearchIcon, TitleDivider } from 'components'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { CatalogueDraft } from '../../../Draft'

interface GraphDatasetFormProps {
    formState: FormComposableState
    draft?: CatalogueDraft
}

export const GraphDatasetForm = (props: GraphDatasetFormProps) => {
    const { formState, draft } = props

    const { t } = useTranslation()

    const csvDistributions = useMemo(() => draft?.catalogue.datasets?.find((dataset) => dataset.type === "graphs")?.distributions?.filter((dist) => dist.mediaType === "text/csv"), [draft])

    const name = useMemo((): FormComposableField[] => [{
        name: "title",
        label: t("name"),
        type: "textField",
        required: true
    }], [t])

    const projects = useMemo((): FormComposableField[] => [{
        name: "distributionId",
        type: "autoComplete",
        label: t("datasets"),
        params: {
            popupIcon: <SearchIcon style={{ transform: "none" }} />,
            className: "autoCompleteField",
            options: csvDistributions?.map((dist):Option => ({
                key: dist.id,
                label: dist.name
            })),
            noOptionsText: t("catalogues.noDataset"),
            optionsResultLimit: 50
        },
        required: true
    }], [t, csvDistributions])

    return (
        <>
            <FormComposable
                fields={name}
                formState={formState}
            />
            <TitleDivider
                title={"1. " + t("catalogues.chooseDataset")}
                size="subtitle1"
            />
            <FormComposable
                fields={projects}
                formState={formState}
                sx={{
                    "& .autoCompleteField .MuiAutocomplete-popupIndicator": {
                        transform: "none !important"
                    }
                }}
            />
        </>
    )
}
