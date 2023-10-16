import city.smartb.registry.f2.dataset.domain.command.DatasetCreateFunction
import city.smartb.registry.f2.dataset.domain.command.DatasetDeleteFunction
import city.smartb.registry.f2.dataset.domain.command.DatasetLinkDatasetsFunction
import city.smartb.registry.f2.dataset.domain.command.DatasetLinkThemesFunction

interface DatasetCommandApi {
    /** Create a dataset */
    fun datasetCreate(): DatasetCreateFunction
    fun datasetLinkDatasets(): DatasetLinkDatasetsFunction
    fun datasetLinkThemes(): DatasetLinkThemesFunction
    fun datasetDelete(): DatasetDeleteFunction
}
