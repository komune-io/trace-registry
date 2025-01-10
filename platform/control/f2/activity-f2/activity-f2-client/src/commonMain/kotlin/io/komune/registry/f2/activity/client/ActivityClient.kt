package io.komune.registry.f2.activity.client

import f2.client.F2Client
import f2.client.domain.AuthRealm
import f2.client.function
import f2.client.ktor.F2ClientBuilder
import f2.client.ktor.http.plugin.F2Auth
import f2.dsl.fnc.F2SupplierSingle
import f2.dsl.fnc.f2SupplierSingle
import io.komune.registry.f2.activity.domain.ActivityApi
import io.komune.registry.f2.activity.domain.command.ActivityCreateFunction
import io.komune.registry.f2.activity.domain.command.ActivityStepCreateFunction
import io.komune.registry.f2.activity.domain.command.ActivityStepFulfillFunction
import io.komune.registry.f2.activity.domain.query.ActivityPageFunction
import io.komune.registry.f2.activity.domain.query.ActivityStepPageFunction
import kotlin.js.JsExport
import kotlin.js.JsName

fun F2Client.activityClient(): F2SupplierSingle<ActivityClient> = f2SupplierSingle {
    ActivityClient(this)
}
typealias AuthRealmProvider = suspend () -> AuthRealm
fun activityClient(
    urlBase: String,
    authRealmProvider: AuthRealmProvider,
): F2SupplierSingle<ActivityClient> = f2SupplierSingle {
    ActivityClient(
        F2ClientBuilder.get(urlBase) {
            install(F2Auth) {
                this.getAuth = authRealmProvider
            }
        }
    )
}

@JsExport
@JsName("ActivityClient")
open class ActivityClient(val client: F2Client) : ActivityApi {
    override fun activityCreate(): ActivityCreateFunction = client.function(this::activityCreate.name)
    override fun activityStepCreate(): ActivityStepCreateFunction = client.function(this::activityStepCreate.name)
    override fun activityStepFulfill(): ActivityStepFulfillFunction = client.function(this::activityStepFulfill.name)
    override fun activityPage(): ActivityPageFunction = client.function(this::activityPage.name)
    override fun activityStepPage(): ActivityStepPageFunction = client.function(this::activityStepPage.name)
}
