package io.komune.registry.f2.dcs.domain

import io.komune.registry.f2.dcs.domain.command.DataCollectionStepDefineFunction
import io.komune.registry.f2.dcs.domain.query.DataCollectionStepGetFunction

interface DcsApi: DcsCommandApi, DcsQueryApi

interface DcsCommandApi {
    fun dataCollectionStepDefine(): DataCollectionStepDefineFunction
}

interface DcsQueryApi {
    fun dataCollectionStepGet(): DataCollectionStepGetFunction
}
