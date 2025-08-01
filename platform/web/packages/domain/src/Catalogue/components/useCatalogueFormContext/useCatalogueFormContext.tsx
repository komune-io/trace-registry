import {Catalogue, CatalogueFormContext} from "../../model";
import {useExtendedAuth} from "components";

export interface useCatalogueFormContextProps {
    catalogue?: Catalogue
    context?: CatalogueFormContext
}

export const useCatalogueFormContext = ({
    catalogue,
    context
}: useCatalogueFormContextProps) => {
    const { policies } = useExtendedAuth()

    return {
        context: context,
        policies: {
            canUpdateOwner: policies.catalogue.canUpdateOwner(catalogue),
        }
    }
}
