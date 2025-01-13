import io.komune.registry.f2.dataset.domain.command.DatasetCreateFunction
import io.komune.registry.f2.dataset.domain.command.DatasetDeleteFunction
import io.komune.registry.f2.dataset.domain.command.DatasetLinkDatasetsFunction
import io.komune.registry.f2.dataset.domain.command.DatasetLinkThemesFunction

interface DatasetCommandApi {
    /** Create a dataset */
    fun datasetCreate(): DatasetCreateFunction
    fun datasetLinkDatasets(): DatasetLinkDatasetsFunction
    fun datasetLinkThemes(): DatasetLinkThemesFunction
    fun datasetDelete(): DatasetDeleteFunction
}
