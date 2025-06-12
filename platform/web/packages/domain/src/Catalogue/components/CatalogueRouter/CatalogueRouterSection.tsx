import { CatalogueRef } from "../../model"
import { SubCatalogueModule } from "../SubCatalogueModule"


interface CatalogueRouterSectionProps {
    item: CatalogueRef
    isLoading: boolean
    isEmpty: (isEmpty: boolean) => void
}

export const CatalogueRouterSection = (props: CatalogueRouterSectionProps) => {
    const { item, isEmpty } = props
    
    if (item.type === "inventory") {
        return (
            <SubCatalogueModule type={item.structure?.type ?? "LIST"} isEmpty={isEmpty} relatedInId={item.id} />
        )
    }  else {
        return
    }
}
