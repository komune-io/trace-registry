package io.komune.registry.s2.activity.domain

import io.komune.registry.s2.asset.domain.automate.s2AssetPool
import io.komune.registry.s2.asset.domain.automate.s2AssetTransaction
import org.junit.jupiter.api.Test
import s2.automate.documenter.S2Documenter
import s2.automate.documenter.writeS2Automate


class S2AssetTest {

    @Test
    fun s2Documenter() {
        S2Documenter()
            .writeS2Automate(s2AssetPool)
            .writeS2Automate(s2AssetTransaction)
    }

}
