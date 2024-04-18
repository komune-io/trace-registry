package io.komune.registry.f2.activity.client

import io.komune.registry.f2.activity.domain.ActivityApi
import io.komune.registry.f2.activity.domain.command.ActivityCreateFunction
import io.komune.registry.f2.activity.domain.command.ActivityStepCreateFunction
import io.komune.registry.f2.activity.domain.command.ActivityStepFulfillFunction
import io.komune.registry.f2.activity.domain.query.ActivityPageFunction
import io.komune.registry.f2.activity.domain.query.ActivityStepPageFunction
import f2.client.F2Client
import f2.client.function
import f2.dsl.fnc.F2SupplierSingle
import kotlin.js.JsExport
import kotlin.js.JsName

expect fun F2Client.activityClient(): F2SupplierSingle<ActivityClient>
expect fun activityClient(urlBase: String, accessToken: String): F2SupplierSingle<ActivityClient>

@JsExport
@JsName("ActivityClient")
open class ActivityClient(val client: F2Client) : ActivityApi {
    override fun activityCreate(): ActivityCreateFunction = client.function(this::activityCreate.name)
    override fun activityStepCreate(): ActivityStepCreateFunction = client.function(this::activityStepCreate.name)
    override fun activityStepFulfill(): ActivityStepFulfillFunction = client.function(this::activityStepFulfill.name)
    override fun activityPage(): ActivityPageFunction = client.function(this::activityPage.name)
    override fun activityStepPage(): ActivityStepPageFunction = client.function(this::activityStepPage.name)
}
