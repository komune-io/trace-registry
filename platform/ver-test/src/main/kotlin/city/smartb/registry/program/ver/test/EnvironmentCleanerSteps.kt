package city.smartb.registry.program.ver.test

import city.smartb.registry.program.s2.project.api.entity.ProjectRepository
import s2.bdd.data.TestContext
import io.cucumber.java8.En
import kotlinx.coroutines.runBlocking

class EnvironmentCleanerSteps(
    private val context: TestContext,
    private val projectRepository: ProjectRepository
): En {
    init {
        Before { _ ->
            context.reset()
            cleanDb()
        }
    }
    private fun cleanDb() = runBlocking {
        projectRepository.deleteAll()
    }
}
