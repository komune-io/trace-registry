import { useAuth, KeycloackService } from "@komune-io/g2"
import {io} from "registry-platform-api-api-js-export";

type StaticServices = {
}

const staticServices: KeycloackService<StaticServices, ""> = {
}

const policies = {
    catalogue: io.komune.registry.f2.catalogue.domain.CataloguePolicies,
    draft: io.komune.registry.f2.catalogue.draft.domain.CatalogueDraftPolicies,
}

export type Policies = typeof policies

export const useExtendedAuth = () => {
    return useAuth<StaticServices, "", Policies>([], staticServices, policies)
}
