package city.smartb.registry.program.s2.activity.domain

import city.smartb.registry.program.s2.project.domain.automate.s2Project
import org.junit.jupiter.api.Test
import s2.automate.documenter.S2Documenter
import s2.automate.documenter.writeS2Automate

class S2ProjectTest {

    @Test
    fun s2Documenter() {
        S2Documenter()
            .writeS2Automate(s2Project)
    }

}
