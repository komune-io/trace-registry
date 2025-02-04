import { io } from "registry-platform-api-api-js-export";
import { useAuthenticatedRequest } from "../../config";
import {useCommandWithFileRequest, CommandParams, CommandWithFile} from "@komune-io/g2"

export interface CatalogueCreateCommand extends io.komune.registry.f2.catalogue.domain.command.CatalogueCreateCommandDTO { }
export interface CatalogueCreatedEvent extends io.komune.registry.f2.catalogue.domain.command.CatalogueCreatedEventDTO { }

export const useCatalogueCreateCommand = (
    params: CommandParams<CommandWithFile<CatalogueCreateCommand>, CatalogueCreatedEvent>
) => {
    const requestProps = useAuthenticatedRequest()
    return useCommandWithFileRequest<
        CatalogueCreateCommand,
        CatalogueCreatedEvent
    >('catalogueCreate', requestProps, params)
}
