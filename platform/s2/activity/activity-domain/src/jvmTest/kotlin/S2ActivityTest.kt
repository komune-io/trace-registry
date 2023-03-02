package city.smartb.registry.program.s2.activity.domain

import city.smartb.registry.program.s2.activity.domain.automate.s2Activity
import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import java.io.File
import java.io.FileWriter
import java.io.IOException
import java.nio.file.Files
import java.nio.file.Path
import java.nio.file.Paths
import org.junit.jupiter.api.Test
import s2.automate.documenter.S2Documenter
import s2.automate.documenter.writeS2Automate
import s2.dsl.automate.S2Automate
import s2.dsl.automate.S2Transition
import s2.dsl.automate.ssm.toSsm
import ssm.chaincode.dsl.model.Ssm
import ssm.chaincode.dsl.model.SsmTransition

class S2ActivityTest {

    @Test
    fun s2() {
        S2Documenter()
            .writeS2Automate(s2Activity)
    }

}
