package io.komune.registry.script.init.asset

import cccev.dsl.model.InformationConcept
import com.ionspin.kotlin.bignum.decimal.toBigDecimal
import f2.client.domain.AuthRealm
import f2.dsl.fnc.invokeWith
import io.komune.registry.f2.asset.pool.client.assetPoolClient
import io.komune.registry.f2.asset.pool.domain.command.AssetIssueCommandDTOBase
import io.komune.registry.f2.asset.pool.domain.command.AssetOffsetCommandDTOBase
import io.komune.registry.f2.asset.pool.domain.command.AssetPoolCreateCommandDTOBase
import io.komune.registry.f2.asset.pool.domain.command.AssetTransferCommandDTOBase
import io.komune.registry.s2.asset.domain.automate.AssetPoolId
import io.komune.registry.script.init.actor.Actor
import io.komune.registry.script.init.cccev.ver.Indicators
import java.util.UUID
import net.datafaker.Faker

class AssetFactory(url: String, authRealm: AuthRealm) {
    val faker = Faker()
    val assetPoolClient = assetPoolClient(url, { authRealm })
    val years = (1980..2022)
    val types = listOf("Solar", "Wind power", "Biogaz", "AFLU")
    val subContinents = listOf("South Asia",
        "Southeast Asia",
        "East Asia",
        "Central Asia",
        "West Asia/Middle East",
        "Europe",
        "North America",
        "Central America",
        "South America",
        "Africa",
        "Oceania"
    )
}

suspend fun createAssetPool(
    verUrl: String,
    orchestrator: Actor,
    projectManager: Actor,
    issuer: Actor,
    offsetter: Actor,
): AssetPoolId {

    val helperOrchestrator = AssetFactory(verUrl, orchestrator.authRealm)
//    val helperProjectManager = AssetFactory(verUrl, projectManager.authRealm)
    val helperIssuer = AssetFactory(verUrl, issuer.authRealm)
    val helperOffseter = AssetFactory(verUrl, offsetter.authRealm)

    val assetPoolClient = helperOrchestrator.assetPoolClient.invoke()
    val assetClientIssuer = helperIssuer.assetPoolClient.invoke()
    val assetClientOffseter = helperOffseter.assetPoolClient.invoke()


    val assetPoolId = assetPoolCreateCommand().invokeWith(assetPoolClient.assetPoolCreate()).id
    val assetIssue = assetIssueCommand(
        assetPoolId = assetPoolId, to = issuer
    ).invokeWith(assetPoolClient.assetIssue())
    println(assetIssue)
    val assetTransfer = assetTransferCommand(
        assetPoolId, from = issuer, to = offsetter
    ).invokeWith(assetClientIssuer.assetTransfer())
    println(assetTransfer)
    val assetOffset1 = assetOffsetCommand(
        assetPoolId, from = offsetter, to = UUID.randomUUID().toString()
    ).invokeWith(assetClientOffseter.assetOffset())
    println(assetOffset1)
    return assetPoolId
}

private fun assetPoolCreateCommand(
    vintage: String = "2013", granularity: Double = 0.001
): AssetPoolCreateCommandDTOBase {
    println("assetPoolCommand")
    return AssetPoolCreateCommandDTOBase(
        vintage = vintage,
        indicator = Indicators.carbon as InformationConcept,
        granularity = granularity
    )
}

private fun assetIssueCommand(
    assetPoolId: AssetPoolId, to: Actor, quantity: Double = 10000.0
): AssetIssueCommandDTOBase {
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

private fun assetOffsetCommand(
    assetPoolId: AssetPoolId, from: Actor, to: String, quantity: Double = 0.123
): AssetOffsetCommandDTOBase {
    println("assetOffset1Command, assetPoolId: $assetPoolId")
    return AssetOffsetCommandDTOBase(
        id = assetPoolId,
        from = from.name,
        to = to,
        quantity = quantity.toBigDecimal()
    )
}
