package city.smartb.registry.f2.dcs.domain

import city.smartb.registry.f2.dcs.domain.command.DataCollectionStepDefineFunction
import city.smartb.registry.f2.dcs.domain.query.DataCollectionStepGetFunction

interface DcsApi: DcsCommandApi, DcsQueryApi

interface DcsCommandApi {
    fun dataCollectionStepDefine(): DataCollectionStepDefineFunction
}

interface DcsQueryApi {
    fun dataCollectionStepGet(): DataCollectionStepGetFunction
}
