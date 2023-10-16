package city.smartb.registry.s2.dataset.domain.command

import city.smartb.fs.s2.file.domain.model.FilePath
import city.smartb.registry.s2.dataset.domain.automate.DatasetId
import kotlinx.serialization.Serializable

@Serializable
data class DatasetSetImageCommand(
    override val id: DatasetId,
    val img: FilePath? = null
): DatasetCommand


@Serializable
data class DatasetSetImageEvent(
    override val id: DatasetId,
    val img: FilePath? = null,
    override val date: Long
): DatasetEvent
