package io.komune.registry.f2.dcs.api.model

import cccev.dsl.model.Code

sealed class DcsCode: Code() {
    object DataCollectionStep: DcsCode()
    object Section: DcsCode()
}
