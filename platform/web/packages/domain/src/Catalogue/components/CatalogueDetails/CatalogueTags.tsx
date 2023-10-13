import { Option, LimitedList, Chip } from '@smartb/g2'

export interface CatalogueTagsProps {
    values: Option[]
}

export const CatalogueTags = (props: CatalogueTagsProps) => {
    const { values } = props
    return (
        <LimitedList
        values={values}
        listedComponent={Chip}
        />
    )
}
