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
import s2.dsl.automate.S2Automate
import s2.dsl.automate.S2Transition
import s2.dsl.automate.ssm.toSsm
import ssm.chaincode.dsl.model.Ssm
import ssm.chaincode.dsl.model.SsmTransition

class S2ActivityTest {

    @Test
    fun s2() {
        Documenter()
            .writeS2Automate(s2Activity)
    }

}



class Documenter(
    val outputFolder: String = getDefaultOutputDirectory(),
    val objectMapper: ObjectMapper = jacksonObjectMapper()
) {

    fun recreateFile(name: String, outputFolder: String): Path {
        return try {
            Files.createDirectories(Paths.get(outputFolder))
            val filePath = Paths.get(outputFolder, name)
            Files.deleteIfExists(filePath)
            Files.createFile(filePath)
        } catch (o_O: IOException) {
            throw RuntimeException(o_O)
        }
    }
}

fun getDefaultOutputDirectory(): String {
    return (if (File("pom.xml").exists()) "target" else "build") + "/smartb-d2-documenter"
}


fun Documenter.writeS2Automate(s2: S2Automate): Documenter {
    val json = s2.toJson()
    val file: Path = recreateFile("${s2.name}.json", outputFolder )
    try {
        FileWriter(file.toFile()).use { writer -> writer.write(json) }
    } catch (o : IOException) {
        throw RuntimeException(o)
    }
    return this
}


fun S2Automate.toJson(): String {
    val json = jacksonObjectMapper().writeValueAsString(this)
    println(json)
    return json
}
