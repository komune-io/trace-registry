package io.komune.registry.s2.catalogue.domain

import io.komune.registry.dsl.skos.domain.model.SkosConcept
import io.komune.registry.dsl.skos.domain.model.concept
import org.assertj.core.api.Assertions
import org.junit.jupiter.api.Test

class ConceptDslTest {
    @Test
    fun shouldCreateConceptWithLabels() {
        val concept1: SkosConcept = concept {
            id = "concept1"
            prefLabels = mutableMapOf("en" to "Forestry and Land Use")
        }
        Assertions.assertThat(concept1.id).isEqualTo("concept1")
        Assertions.assertThat(concept1.prefLabels).hasSize(1)
    }
    @Test
    fun shouldCreateConceptWithDefinitions() {
        val concept1: SkosConcept = concept {
            id = "concept1"
            definitions = mutableMapOf("en" to "Forestry and Land Use")
        }
        Assertions.assertThat(concept1.id).isEqualTo("concept1")
        Assertions.assertThat(concept1.definitions).hasSize(1)
    }
}