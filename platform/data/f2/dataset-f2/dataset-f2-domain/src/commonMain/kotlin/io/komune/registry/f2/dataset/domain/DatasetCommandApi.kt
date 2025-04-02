import io.komune.registry.f2.dataset.domain.command.DatasetAddDistributionValueFunction
import io.komune.registry.f2.dataset.domain.command.DatasetAddEmptyDistributionFunction
import io.komune.registry.f2.dataset.domain.command.DatasetAddJsonDistributionFunction
import io.komune.registry.f2.dataset.domain.command.DatasetCreateFunction
import io.komune.registry.f2.dataset.domain.command.DatasetDeleteFunction
import io.komune.registry.f2.dataset.domain.command.DatasetLinkDatasetsFunction
import io.komune.registry.f2.dataset.domain.command.DatasetLinkThemesFunction
import io.komune.registry.f2.dataset.domain.command.DatasetRemoveDistributionFunction
import io.komune.registry.f2.dataset.domain.command.DatasetRemoveDistributionValueFunction
import io.komune.registry.f2.dataset.domain.command.DatasetReplaceDistributionValueFunction
import io.komune.registry.f2.dataset.domain.command.DatasetUpdateFunction
import io.komune.registry.f2.dataset.domain.command.DatasetUpdateJsonDistributionFunction

interface DatasetCommandApi {
    fun datasetCreate(): DatasetCreateFunction
    fun datasetUpdate(): DatasetUpdateFunction
    fun datasetLinkDatasets(): DatasetLinkDatasetsFunction
    fun datasetLinkThemes(): DatasetLinkThemesFunction
    fun datasetDelete(): DatasetDeleteFunction

    fun datasetAddEmptyDistribution(): DatasetAddEmptyDistributionFunction
    fun datasetAddJsonDistribution(): DatasetAddJsonDistributionFunction
    fun datasetUpdateJsonDistribution(): DatasetUpdateJsonDistributionFunction
    fun datasetAddDistributionValue(): DatasetAddDistributionValueFunction
    fun datasetReplaceDistributionValue(): DatasetReplaceDistributionValueFunction
    fun datasetRemoveDistributionValue(): DatasetRemoveDistributionValueFunction
    fun datasetRemoveDistribution(): DatasetRemoveDistributionFunction
}
