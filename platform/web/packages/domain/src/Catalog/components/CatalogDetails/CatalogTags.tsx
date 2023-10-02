import { Option } from '@smartb/g2'
import { LimitedChipList } from 'components'

export interface CatalogTagsProps {
    values: Option[]
}

export const CatalogTags = (props: CatalogTagsProps) => {
    const { values } = props
    return (
        <LimitedChipList 
        //@ts-ignore
        tags={values}
        flexWrap="nowrap" 
        />
    )
}
