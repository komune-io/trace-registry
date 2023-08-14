package city.smartb.registry.program.cccev

import city.smartb.registry.program.cccev.actor.Actor
import city.smartb.registry.program.cccev.project.ProjectFakeBuilder
import city.smartb.registry.program.f2.pool.domain.command.AssetIssueCommandDTOBase
import city.smartb.registry.program.f2.pool.domain.command.AssetOffsetCommandDTOBase
import city.smartb.registry.program.f2.pool.domain.command.AssetTransferCommandDTOBase
import city.smartb.registry.program.f2.pool.domain.command.AssetPoolCreateCommandDTOBase
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import com.ionspin.kotlin.bignum.decimal.toBigDecimal
import f2.dsl.fnc.invokeWith
import java.util.UUID

suspend fun createAssetPool(
    verUrl: String,
    issuer: Actor,
    offsetter: Actor,
): AssetPoolId {

    val helperIssuer = ProjectFakeBuilder(verUrl, issuer.accessToken.access_token)
    val helperOffseter = ProjectFakeBuilder(verUrl, offsetter.accessToken.access_token)

    val assetPoolClient = helperIssuer.assetPoolClient.invoke()
    val assetClientIssuer = helperIssuer.assetClient.invoke()
    val assetClientOffseter = helperOffseter.assetClient.invoke()


    val assetPoolId = assetPoolCreateCommand().invokeWith(assetPoolClient.assetPoolCreate()).id
    val assetIssue = assetIssueCommand(assetPoolId = assetPoolId, to = issuer).invokeWith(assetPoolClient.assetIssue())
    val assetTransfer = assetTransferCommand(assetPoolId, from = issuer, to = offsetter).invokeWith(assetPoolClient.assetTransfer())
    val assetOffset1 = assetOffsetCommand(assetPoolId, from = offsetter, to = UUID.randomUUID().toString()).invokeWith(assetPoolClient.assetOffset())

    return assetPoolId
}

private fun assetPoolCreateCommand(vintage: String = "2013", granularity: Double = 0.001): AssetPoolCreateCommandDTOBase {
    println("assetPoolCommand")
    return AssetPoolCreateCommandDTOBase(
        vintage = vintage,
        indicator = "carbon",
        granularity = granularity
    )
}

private fun assetIssueCommand(assetPoolId: AssetPoolId, to: Actor, quantity: Double = 10000.0): AssetIssueCommandDTOBase {
    println("assetIssueCommand, assetPoolId: $assetPoolId")
    return AssetIssueCommandDTOBase(
        id = assetPoolId,
        to = to.name,
        quantity = quantity.toBigDecimal()
    )
}

private fun assetTransferCommand(assetPoolId: AssetPoolId, from: Actor, to: Actor): AssetTransferCommandDTOBase {
    println("assetTransferCommand, assetPoolId: $assetPoolId")
    return AssetTransferCommandDTOBase(
        id = assetPoolId,
        from = from.name,
        to = to.name,
        quantity = 10000.toBigDecimal()
    )
}

private fun assetOffsetCommand(assetPoolId: AssetPoolId, from: Actor, to: String, quantity: Double = 0.123): AssetOffsetCommandDTOBase {
    println("assetOffset1Command, assetPoolId: $assetPoolId")
    return AssetOffsetCommandDTOBase(
        id = assetPoolId,
        from = from.name,
        to = to,
        quantity = quantity.toBigDecimal()
    )
}
