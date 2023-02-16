import city.smartb.registry.program.s2.activity.domain.automate.s2Activity
import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import java.io.File
import java.io.FileWriter
import java.io.IOException
import java.nio.file.Files
import java.nio.file.Path
import java.nio.file.Paths
import kotlin.test.Test
import s2.dsl.automate.S2Automate
import s2.dsl.automate.ssm.toSsm

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
    val ssm = s2.toSsm()
    val file: Path = recreateFile("${s2.name}.json", outputFolder )
    try {
        FileWriter(file.toFile()).use { writer -> writer.write(objectMapper.writeValueAsString(ssm)) }
    } catch (o : IOException) {
        throw RuntimeException(o)
    }
    return this
}

