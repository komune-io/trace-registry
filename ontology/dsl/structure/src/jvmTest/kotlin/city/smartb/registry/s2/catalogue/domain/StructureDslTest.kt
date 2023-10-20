package city.smartb.registry.s2.catalogue.domain

import city.smartb.registry.s2.structure.domain.model.Structure
import city.smartb.registry.s2.structure.domain.model.structure
import org.assertj.core.api.Assertions
import org.junit.jupiter.api.Test

class StructureDslTest {
    @Test
    fun shouldCreateConceptWithLabels() {
        val structure1: Structure = structure {
            type = "structure1"
            definitions {
                put("en", "Forestry and Land Use")
            }
        }
        Assertions.assertThat(structure1.type).isEqualTo("structure1")
        Assertions.assertThat(structure1.definitions).containsEntry("en", "Forestry and Land Use")
    }
}