package city.smartb.registry.program.bdd.assertion

import org.assertj.core.api.Assertions
import org.springframework.data.repository.CrudRepository

abstract class AssertionPostgresEntity<Entity, ID: Any, Asserter> {
    protected abstract val repository: CrudRepository<Entity, ID>

    fun exists(id: ID) {
        Assertions.assertThat(repository.existsById(id)).isTrue
    }

    fun notExists(id: ID) {
        Assertions.assertThat(repository.existsById(id)).isFalse
    }

    fun assertThat(id: ID): Asserter {
        exists(id)
        val entity = repository.findById(id).get()
        return assertThat(entity)
    }

    abstract fun assertThat(entity: Entity): Asserter
}
