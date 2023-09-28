import { Option } from '@smartb/g2'
import { LimitedTagList } from 'components'

export interface CatalogTagsProps {
    values: Option[]
}

export const CatalogTags = (props: CatalogTagsProps) => {
    const { values } = props
    return (
        <LimitedTagList 
        //@ts-ignore
        tags={values}
        flexWrap="nowrap" 
        />
    )
}
