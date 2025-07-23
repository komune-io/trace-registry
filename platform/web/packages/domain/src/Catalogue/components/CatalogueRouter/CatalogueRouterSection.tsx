import {CatalogueRef} from "../../model"
import {SubCatalogueModule} from "../SubCatalogueModule"


interface CatalogueRouterSectionProps {
    item: CatalogueRef
    isLoading: boolean
    isEmpty: (isEmpty: boolean) => void
}

export const CatalogueRouterSection = (props: CatalogueRouterSectionProps) => {
    const { item, isEmpty } = props

    if (item.structure?.isInventory) {
        return (
            <SubCatalogueModule catalogue={item} type={item.structure?.type ?? "LIST"} isEmpty={isEmpty} relatedInId={item.id} />
        )
    }  else {
        return
    }
}
