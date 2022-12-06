package city.smartb.registry.program.bdd.data

import city.smartb.registry.program.api.commons.auth.AuthedUser
import f2.dsl.cqrs.Event
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import city.smartb.registry.program.s2.task.domain.model.TaskId
import org.springframework.stereotype.Component

typealias TestContextKey = String

@Component
class TestContext {
    private val entityLists = mutableListOf<TestEntities<*, *>>()

    var authedUser: AuthedUser? = null

    val projectIds = testEntities<String, ProjectId>("Project")
    val taskIds = testEntities<String, TaskId>("Task")
    val organizationIds = testEntities<String, TaskId>("Organization")
    val userIds = testEntities<String, TaskId>("User")

    val errors = ExceptionList()
    val events = mutableListOf<Event>()

    final var fetched = FetchContext()
        private set

    private fun <K: Any, V> testEntities(name: String) = TestEntities<K, V>(name)
        .also(entityLists::add)

    fun reset() {
        entityLists.forEach(TestEntities<*, *>::reset)
        errors.reset()
        events.clear()
        fetched = FetchContext()
    }
}
