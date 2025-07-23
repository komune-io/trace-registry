import {Catalogue, CatalogueFormContext} from "../../model";
import {useExtendedAuth} from "components";

export interface UseCatalogueFormAdditionalContextProps {
    catalogue?: Catalogue
    context?: CatalogueFormContext
}

export const useCatalogueFormAdditionalContext = ({
    catalogue,
    context
}: UseCatalogueFormAdditionalContextProps) => {
    const { policies } = useExtendedAuth()

    return {
        context: context,
        policies: {
            canUpdateOwner: policies.catalogue.canUpdateOwner(catalogue),
        }
    }
}
