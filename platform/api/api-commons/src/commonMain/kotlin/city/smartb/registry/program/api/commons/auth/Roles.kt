package city.smartb.registry.program.api.commons.auth

import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport
@JsName("Roles")
object Roles {
    const val ADMIN = "admin"
    const val USER = "user"
    const val ONBOARDING_USER = "onboarding_user"

    const val FUB = "fub"
    const val SUPPORT = "support"
    const val BENEFICIARY = "beneficiary"
    const val PROVIDER_COUNSELING = "provider_counseling"
    const val PROVIDER_EQUIPMENT = "provider_equipment"

    const val PROVIDER_TRAINING = "provider_training"
    const val ONBOARDING = "onboarding"
    const val UNCHARTED = "uncharted"
}
