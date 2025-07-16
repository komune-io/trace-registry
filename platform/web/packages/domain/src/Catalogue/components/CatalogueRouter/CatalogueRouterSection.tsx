import { useExtendedAuth } from "components"
import {CatalogueRef} from "../../model"
import {SubCatalogueModule} from "../SubCatalogueModule"


interface CatalogueRouterSectionProps {
    item: CatalogueRef
    isLoading: boolean
    isEmpty: (isEmpty: boolean) => void
}

export const CatalogueRouterSection = (props: CatalogueRouterSectionProps) => {
    const { item, isEmpty } = props

    const {keycloak} = useExtendedAuth()

    const isProtected = item?.accessRights === "PROTECTED"

    const canDisplayItem = !(isProtected && !keycloak.isAuthenticated)
    
    if (!canDisplayItem) {
        isEmpty(true)
        return
    }
    if (item.structure?.isInventory) {
        return (
            <SubCatalogueModule type={item.structure?.type ?? "LIST"} isEmpty={isEmpty} relatedInId={item.id} />
        )
    }  else {
        return
    }
}
