package city.smartb.registry.f2.dcs.domain

import city.smartb.registry.f2.dcs.domain.command.DataCollectionStepDefineFunction

interface DcsApi: DcsCommandApi, DcsQueryApi

interface DcsCommandApi {
    fun dataCollectionStepDefine(): DataCollectionStepDefineFunction
}

interface DcsQueryApi
