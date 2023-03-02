package city.smartb.registry.program.s2.activity.domain

import city.smartb.registry.program.s2.protocol.domain.automate.s2Protocol
import org.junit.jupiter.api.Test
import s2.automate.documenter.S2Documenter
import s2.automate.documenter.writeS2Automate

class S2ProtocolTest {

    @Test
    fun generateS2DocumentationDiagram() {
        S2Documenter()
            .writeS2Automate(s2Protocol)
    }

}



