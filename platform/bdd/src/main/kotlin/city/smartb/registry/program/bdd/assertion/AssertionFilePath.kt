package city.smartb.registry.program.bdd.assertion

import city.smartb.fs.s2.file.domain.model.FilePathDTO
import org.assertj.core.api.Assertions

fun AssertionBdd.filePath() = AssertionFilePath()

class AssertionFilePath {
    fun assertThat(filePath: FilePathDTO) = FilePathAssert(filePath)

    inner class FilePathAssert(
        private val filePath: FilePathDTO
    ) {
        fun hasFields(
            objectType: String = filePath.objectType,
            objectId: String = filePath.objectId,
            directory: String = filePath.directory,
            name: String = filePath.name,
        ) = also {
            Assertions.assertThat(filePath.objectType).isEqualTo(objectType)
            Assertions.assertThat(filePath.objectId).isEqualTo(objectId)
            Assertions.assertThat(filePath.directory).isEqualTo(directory)
            Assertions.assertThat(filePath.name).isEqualTo(name)
        }

        fun matches(filePath: FilePathDTO) = hasFields(
            objectType = filePath.objectType,
            objectId = filePath.objectId,
            directory = filePath.directory,
            name = filePath.name,
        )
    }
}
