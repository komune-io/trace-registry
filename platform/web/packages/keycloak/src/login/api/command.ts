import { CommandParams, useCommandRequest, useNoAuthenticatedRequest } from "@komune-io/g2"
import {io} from "registry-platform-api-api-js-export";

export interface UserOnboardCommand extends io.komune.registry.f2.user.domain.command.UserOnboardCommandDTO { }
export interface UserOnboardedEvent extends io.komune.registry.f2.user.domain.command.UserOnboardedEventDTO { }

export const useUserOnboardCommand  = (
    params?: CommandParams<UserOnboardCommand, UserOnboardedEvent>
) => {
    const requestProps = useNoAuthenticatedRequest()
    return useCommandRequest('identity/userOnboard', requestProps, params)
}