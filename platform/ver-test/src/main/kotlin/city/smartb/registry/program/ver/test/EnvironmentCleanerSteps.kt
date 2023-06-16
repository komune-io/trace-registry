package city.smartb.registry.program.ver.test

import io.cucumber.java8.En
import s2.bdd.data.TestContext

class EnvironmentCleanerSteps(
    private val context: TestContext
): En {
    init {
        Before { _ ->
            context.reset()
        }
    }
}
