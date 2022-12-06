package city.smartb.registry.program.s2.asset.domain.automate

import city.smartb.registry.program.s2.asset.domain.command.AssetCreateCommand
import city.smartb.registry.program.s2.asset.domain.command.AssetDeleteCommand
import city.smartb.registry.program.s2.asset.domain.command.AssetUpdateCommand
import city.smartb.registry.program.s2.asset.domain.model.AssetId
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable
import s2.dsl.automate.Evt
import s2.dsl.automate.S2Command
import s2.dsl.automate.S2InitCommand
import s2.dsl.automate.S2Role
import s2.dsl.automate.S2State
import s2.dsl.automate.WithId
import s2.dsl.automate.builder.s2

val s2Asset = s2 {
	name = "Asset"
	init<AssetCreateCommand> {
		to = AssetState.ISSUED
		role = AssetRole.Issuer
	}
	transaction<AssetDeleteCommand> {
		from = AssetState.ISSUED
		to = AssetState.ASSIGNED
		role = AssetRole.Issuer
	}
	selfTransaction<AssetUpdateCommand> {
		states += AssetState.ASSIGNED
		role = AssetRole.Issuer
	}
	selfTransaction<AssetDeleteCommand> {
		states += AssetState.RETIRED
		role = AssetRole.Issuer
	}
}

@Serializable
enum class AssetState(override val position: Int): S2State {
	ISSUED(0),
	ASSIGNED(1),
	RETIRED(2),
}

enum class AssetRole(val value: String): S2Role {
	Issuer("Issuer");
	override fun toString() = value
}

@JsExport
@JsName("AssetInitCommand")
interface AssetInitCommand: S2InitCommand

@JsExport
@JsName("AssetCommand")
interface AssetCommand: S2Command<AssetId>

@JsExport
@JsName("AssetEvent")
interface AssetEvent: Evt, WithId<AssetId>
