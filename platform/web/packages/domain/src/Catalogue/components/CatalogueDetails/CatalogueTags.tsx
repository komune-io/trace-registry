import { Option, LimitedList, Chip } from '@komune-io/g2'

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
