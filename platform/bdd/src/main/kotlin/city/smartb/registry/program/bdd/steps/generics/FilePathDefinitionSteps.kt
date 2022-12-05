package city.smartb.registry.program.bdd.steps.generics

import city.smartb.fs.s2.file.domain.model.FilePath
import city.smartb.registry.program.bdd.CucumberStepsDefinition
import city.smartb.registry.program.bdd.data.TestContextKey
import city.smartb.registry.program.bdd.data.parser.safeExtract
import io.cucumber.datatable.DataTable
import io.cucumber.java8.En

class FilePathDefinitionSteps: En, CucumberStepsDefinition() {
    init {
        DataTableType(::filePathDefineParams)

        Given("A file path is defined:") { params: FilePathDefineParams ->
            step {
                defineFilePath(params)
            }
        }

        Given("Some file paths are defined:") { dataTable: DataTable ->
            step {
                dataTable.asList(FilePathDefineParams::class.java)
                    .forEach(::defineFilePath)
            }
        }
    }

    private fun defineFilePath(params: FilePathDefineParams) = context.filePaths.register(params.identifier) {
        FilePath(
            objectType = params.objectType,
            objectId = params.objectId,
            directory = params.directory,
            name = params.name,
        )
    }

    private fun filePathDefineParams(entry: Map<String, String>) = FilePathDefineParams(
        identifier = entry.safeExtract("identifier"),
        objectType = entry["objectType"].orRandom(),
        objectId = entry["objectId"].orRandom(),
        directory = entry["directory"].orRandom(),
        name = entry["name"].orRandom()
    )

    private data class FilePathDefineParams(
        val identifier: TestContextKey,
        val objectType: String,
        val objectId: String,
        val directory: String,
        val name: String
    )
}
