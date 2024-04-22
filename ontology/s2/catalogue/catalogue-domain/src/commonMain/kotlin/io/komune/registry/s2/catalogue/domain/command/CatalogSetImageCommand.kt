package io.komune.registry.s2.catalogue.domain.command

import io.komune.fs.s2.file.domain.model.FilePath
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import kotlinx.serialization.Serializable

@Serializable
data class CatalogueSetImageCommand(
    override val id: CatalogueId,
    val img: FilePath? = null
): CatalogueCommand


@Serializable
data class CatalogueSetImageEvent(
    override val id: CatalogueId,
    val img: FilePath? = null,
    override val date: Long
): CatalogueEvent
