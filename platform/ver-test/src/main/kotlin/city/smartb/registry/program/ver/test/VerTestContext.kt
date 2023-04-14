package city.smartb.registry.program.ver.test

import city.smartb.registry.program.f2.activity.domain.model.ActivityId
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import org.springframework.stereotype.Component
import s2.bdd.data.TestContext
import s2.bdd.data.TestContextKey

@Component
class VerTestContext: TestContext() {

    val projectIds = testEntities<TestContextKey, ProjectId>("Project")
    val activityIds = testEntities<TestContextKey, ActivityId>("Activity")

    final var fetched = FetchContext()
        private set

    override fun resetEnv() {
        fetched = FetchContext()
    }

    class FetchContext {
//    lateinit var traces: List<TraceEntity>
    }
}
