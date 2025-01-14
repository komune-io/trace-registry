import { CommandParams, useCommandRequest, useNoAuthenticatedRequest } from "@komune-io/g2"
import { io } from "consulting-platform-api-api-js-export"

export interface UserOnboardCommand extends io.komune.trace.consulting.f2.onboarding.domain.command.UserOnboardCommandDTO { }
export interface UserOnboardedEvent extends io.komune.trace.consulting.f2.onboarding.domain.command.UserOnboardedEventDTO { }

export const useUserOnboardCommand  = (
    params?: CommandParams<UserOnboardCommand, UserOnboardedEvent>
) => {
    const requestProps = useNoAuthenticatedRequest()
    return useCommandRequest('userOnboard ', requestProps, params)
}