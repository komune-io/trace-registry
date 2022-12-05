@file:Suppress("FunctionOnlyReturningConstant")
package city.smartb.registry.program.api.commons.exception

import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport
@JsName("ExceptionCodes")
object ExceptionCodes {
    // onboarding
    fun notEligible() = 1000
    fun unacceptedTerms() = 1001

    // quotation
    fun quotationMissingFile() = 2000

    // user
    fun userSupervisesProject() = 3000
    fun userSupervisesQuotation() = 3001
    fun userSupervisesTask() = 3002
}
