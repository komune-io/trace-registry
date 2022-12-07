package city.smartb.registry.program.f2.asset.domain.policy

import city.smartb.registry.program.api.commons.auth.AuthedUserDTO
import city.smartb.registry.program.api.commons.auth.Roles
import city.smartb.registry.program.api.commons.auth.hasRole
import city.smartb.registry.program.api.commons.auth.hasRoles
import city.smartb.registry.program.s2.asset.domain.automate.AssetCommand
import city.smartb.registry.program.s2.asset.domain.automate.s2Asset
import city.smartb.registry.program.s2.asset.domain.command.AssetUpdateCommand
import city.smartb.registry.program.s2.asset.domain.model.AssetDTO
import kotlin.js.JsExport
import kotlin.js.JsName
import s2.dsl.automate.extention.canExecuteTransitionAnd

@JsExport
@JsName("AssetPolicies")
object AssetPolicies {

    /**
     * User can list the assets
     */
    fun canList(authedUser: AuthedUserDTO): Boolean {
        return authedUser.hasRoles(Roles.FUB, Roles.ADMIN)
                || authedUser.hasRole(Roles.BENEFICIARY)
    }

    /**
     * User can create a asset
     */
    fun canCreate(authedUser: AuthedUserDTO): Boolean {
        return authedUser.hasRole(Roles.BENEFICIARY)
    }

    /**
     * User can update the given asset
     */
    @Suppress("FunctionOnlyReturningConstant")
    fun canUpdate(authedUser: AuthedUserDTO, asset: AssetDTO): Boolean {
        return true
    }

    /**
     * User can delete the given asset
     */
    @Suppress("FunctionOnlyReturningConstant")
    fun canDelete(authedUser: AuthedUserDTO, asset: AssetDTO): Boolean = canTransitionAnd<AssetUpdateCommand>(asset) {
        true
    }

    private inline fun <reified C: AssetCommand> canTransitionAnd(asset: AssetDTO?, hasAccess: () -> Boolean): Boolean {
        return asset != null &&  s2Asset.canExecuteTransitionAnd<C>(asset, hasAccess)
    }
}
