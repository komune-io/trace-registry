import { Option, LimitedList, Chip } from '@smartb/g2'

export interface CatalogTagsProps {
    values: Option[]
}

export const CatalogTags = (props: CatalogTagsProps) => {
    const { values } = props
    return (
        <LimitedList
        values={values}
        listedComponent={Chip}
        flexWrap="nowrap" 
        />
    )
}
