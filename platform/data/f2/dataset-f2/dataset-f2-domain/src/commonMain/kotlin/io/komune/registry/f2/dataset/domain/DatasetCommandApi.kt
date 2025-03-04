import io.komune.registry.f2.dataset.domain.command.DatasetAddJsonDistributionFunction
import io.komune.registry.f2.dataset.domain.command.DatasetCreateFunction
import io.komune.registry.f2.dataset.domain.command.DatasetDeleteFunction
import io.komune.registry.f2.dataset.domain.command.DatasetLinkDatasetsFunction
import io.komune.registry.f2.dataset.domain.command.DatasetLinkThemesFunction
import io.komune.registry.f2.dataset.domain.command.DatasetRemoveDistributionFunction
import io.komune.registry.f2.dataset.domain.command.DatasetUpdateFunction
import io.komune.registry.f2.dataset.domain.command.DatasetUpdateJsonDistributionFunction

interface DatasetCommandApi {
    fun datasetCreate(): DatasetCreateFunction
    fun datasetUpdate(): DatasetUpdateFunction
    fun datasetLinkDatasets(): DatasetLinkDatasetsFunction
    fun datasetLinkThemes(): DatasetLinkThemesFunction
    fun datasetDelete(): DatasetDeleteFunction

    fun datasetAddJsonDistribution(): DatasetAddJsonDistributionFunction
    fun datasetUpdateJsonDistribution(): DatasetUpdateJsonDistributionFunction
    fun datasetRemoveDistribution(): DatasetRemoveDistributionFunction
}
