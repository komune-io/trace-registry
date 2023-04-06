package city.smartb.registry.program.ver.test

import city.smartb.registry.program.s2.project.domain.model.ProjectId
import org.springframework.stereotype.Component
import s2.bdd.data.BddContext
import s2.bdd.data.TestContext
import s2.bdd.data.TestContextKey

@Component
class VerTestContext(
    private val testContext: TestContext
): BddContext by testContext {

    val projectIds = testContext.testEntities<TestContextKey, ProjectId>("Project")
    val activityIds = testContext.testEntities<TestContextKey, ProjectId>("Activity")

    final var fetched = FetchContext()
        private set

    override fun resetEnv() {
        fetched = FetchContext()
    }

    class FetchContext {
//    lateinit var traces: List<TraceEntity>
    }
}
