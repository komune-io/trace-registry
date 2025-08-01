package io.komune.registry.s2.catalogue.domain.model.structure

import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.commons.model.form.Form
import kotlinx.serialization.Serializable

@Serializable
data class CatalogueProtocolButtonModel(
    val label: Map<Language, String>,
    val form: Form
)
