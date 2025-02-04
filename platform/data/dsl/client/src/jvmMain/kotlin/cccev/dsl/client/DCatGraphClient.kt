package cccev.dsl.client

import f2.dsl.fnc.invokeWith
import io.komune.registry.dsl.dcat.domain.model.DCatApCatalogueModel
import io.komune.registry.dsl.dcat.domain.model.DcatDataset
import io.komune.registry.f2.catalogue.client.CatalogueClient
import io.komune.registry.f2.catalogue.client.catalogueCreate
import io.komune.registry.f2.catalogue.client.catalogueUpdate
import io.komune.registry.f2.catalogue.domain.command.CatalogueCreateCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkCataloguesCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkDatasetsCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueUpdateCommandDTOBase
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.f2.catalogue.domain.dto.CatalogueRefDTOBase
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetByIdentifierQuery
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetQuery
import io.komune.registry.f2.dataset.client.DatasetClient
import io.komune.registry.f2.dataset.domain.command.DatasetCreateCommandDTOBase
import io.komune.registry.f2.dataset.domain.query.DatasetGetByIdentifierQuery
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.catalogue.domain.automate.CatalogueIdentifier
import io.komune.registry.s2.commons.model.SimpleFile
import io.komune.registry.s2.dataset.domain.automate.DatasetId
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.emitAll
import kotlinx.coroutines.flow.flatMapConcat
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.flow.map
import org.springframework.core.io.support.PathMatchingResourcePatternResolver

typealias Language = String

class DCatGraphClient(
    private val catalogueClient: CatalogueClient,
    private val datasetClient: DatasetClient,
) {

    @Suppress("ComplexMethod", "LongMethod")
    suspend fun create(allCatalogues: Flow<DCatApCatalogueModel>): Flow<CatalogueIdentifier> {
        val visitedCatalogueKeys = mutableSetOf<CatalogueIdentifier>()
        val createdCatalogues = mutableMapOf<CatalogueIdentifier, CatalogueId>()
        val createdDatasets = mutableMapOf<String, DatasetId>()

        fun DCatApCatalogueModel.flatten(): Flow<DCatApCatalogueModel> = flow {
            if (identifier in visitedCatalogueKeys) {
                return@flow
            }
            visitedCatalogueKeys += identifier

            catalogues?.forEach { emitAll(it.flatten()) }
            emit(this@flatten)
        }

        return allCatalogues.flatMapConcat(DCatApCatalogueModel::flatten)
            .map { catalogue ->
                val catalogueIdentifier = initCatalogue(
                    catalogue,
                    createdCatalogues
                )
                val catalogueId = createdCatalogues[catalogueIdentifier]!!

                catalogue.datasets?.mapNotNull { dataset ->
                    val datasetId = if (dataset.identifier !in createdDatasets) {
                        val datasetId = dataset.getOrCreate()
                        createdDatasets[dataset.identifier] = datasetId
                        datasetId
                    } else createdDatasets[dataset.identifier]
                    datasetId
                }?.takeIf { it.isNotEmpty() }?.let { datasetIds ->
                    linkDatasetToCatalogue(catalogueId, datasetIds)
                }
                catalogueIdentifier
            }
    }

    private suspend fun initCatalogue(
        catalogue: DCatApCatalogueModel,
        createdCatalogues: MutableMap<CatalogueIdentifier, CatalogueId>
    ): CatalogueIdentifier {
        val existingCatalogue = CatalogueGetByIdentifierQuery(
            identifier = catalogue.identifier,
            language = null
        ).invokeWith(catalogueClient.catalogueGetByIdentifier()).item
            ?: run {
                val translation = catalogue.translations?.values?.firstOrNull()

                val catalogueId = createCatalogue(
                    catalogue = if (translation == null) {
                        catalogue
                    } else {
                        catalogue.copy(
                            title = translation.title,
                            description = translation.description,
                            language = translation.language
                        )},
                    createdCatalogues
                )
                CatalogueGetQuery(
                    id = catalogueId,
                    language = null
                ).invokeWith(catalogueClient.catalogueGet()).item!!
            }

        catalogue.translations
            ?.filterKeys { it !in existingCatalogue.availableLanguages }
            ?.map { (_, translation) ->
                (CatalogueUpdateCommandDTOBase(
                    id = existingCatalogue.id,
                    title = translation.title,
                    description = translation.description,
                    language = translation.language,
                    structure = existingCatalogue.structure,
                    homepage = existingCatalogue.homepage,
                    themes = existingCatalogue.themes,
                    creator = existingCatalogue.creator,
                    publisher = existingCatalogue.publisher,
                    validator = existingCatalogue.validator,
                    accessRights = existingCatalogue.accessRights,
                    license = existingCatalogue.license,
                    hidden = existingCatalogue.hidden
                ) to null).invokeWith(catalogueClient.catalogueUpdate())
            }

        createdCatalogues[catalogue.identifier] = existingCatalogue.id

        catalogue.catalogues
            ?.takeIf { it.isNotEmpty() }
            ?.filter { c -> existingCatalogue.catalogues.orEmpty().none { c.identifier == it.identifier } }
            ?.let { catalogues ->
                linkCatalogues(
                    createdCatalogues,
                    catalogue,
                    catalogues.map { createdCatalogues[it.identifier]!! })
            }

        return existingCatalogue.identifier
    }

    private suspend fun DCatGraphClient.linkCatalogues(
        createdCatalogues: MutableMap<CatalogueIdentifier, CatalogueId>,
        parent: DCatApCatalogueModel,
        catalogueIds: List<CatalogueId>
    ) {
        CatalogueLinkCataloguesCommandDTOBase(
            id = createdCatalogues[parent.identifier]!!,
            catalogues = catalogueIds
        ).invokeWith(catalogueClient.catalogueLinkCatalogues())
        println("Linked catalogue ${parent.identifier} to $catalogueIds")
    }

    private suspend fun createCatalogue(
        catalogue: DCatApCatalogueModel,
        createdCatalogues: MutableMap<CatalogueIdentifier, CatalogueId>
    ): CatalogueId {
        return (CatalogueCreateCommandDTOBase(
            identifier = catalogue.identifier,
            title = catalogue.title,
            description = catalogue.description,
            catalogues = catalogue.catalogues
                ?.map { createdCatalogues[it.identifier]!! }
                .orEmpty(),
            type = catalogue.type,
            language = catalogue.language,
            structure = catalogue.structure,
            homepage = catalogue.homepage,
            themes = catalogue.themes,
        ) to catalogue.img?.let { SimpleFile(
            name = it,
            content = PathMatchingResourcePatternResolver().getResource(it).contentAsByteArray
        ) }).invokeWith(catalogueClient.catalogueCreate()).id
            .also { println("Created catalogue ${catalogue.identifier} (${catalogue.language}) with id $it") }
    }

//    private suspend fun initDataset(
//        dataset: DcatDataset,
//        createdDatasets: MutableMap<String, DatasetId>
//    ) {
//        if (dataset.identifier !in createdDatasets) {
//            val datasetId = dataset.getOrCreate()
//            createdDatasets[dataset.identifier] = datasetId
//        }
//    }

    private suspend fun DcatDataset.getOrCreate(): DatasetId {
        val client = datasetClient
        return DatasetGetByIdentifierQuery(
            identifier = identifier,
            language = language
        ).invokeWith(client.datasetGetByIdentifier()).item?.id
            ?: createDataset(client)
    }

    suspend fun linkDatasetToCatalogue(catalogueId: String, datasets: List<DatasetId>) {
        val client = catalogueClient
        println("Linking catalogue $catalogueId to datasets $datasets")
        CatalogueLinkDatasetsCommandDTOBase(
            id = catalogueId,
            datasets = datasets
        ).invokeWith(client.catalogueLinkDatasets())
    }

    private suspend fun DcatDataset.createDataset(client: DatasetClient): DatasetId {
        return DatasetCreateCommandDTOBase(
            identifier = identifier,
            title = title,
            type = type,
            description = description,
            language = language,
            wasGeneratedBy = wasGeneratedBy,
            source = source,
            creator = creator,
            publisher = publisher,
            validator = validator,
            accessRights = accessRights,
            license = license?.identifier,
            temporalResolution = temporalResolution,
            conformsTo = conformsTo,
            format = format,
            theme = theme,
            keywords = keywords,
            homepage = homepage,
            landingPage = landingPage,
            version = version,
            versionNotes = versionNotes,
            length = length,
            releaseDate = releaseDate,
        ).invokeWith(client.datasetCreate()).id.also {
            println("Created dataset ${identifier} with id ${it}")
        }
    }
}


fun CatalogueDTOBase.toDsl(): DCatApCatalogueModel = DCatApCatalogueModel(
    identifier = identifier,
    homepage = homepage,
    img = img,
    type = type,
    language = language,
    themes = themes,
    catalogues = catalogues?.map { it.toDsl() },
    description = description,
    title = title,
    structure = structure,
)

fun CatalogueRefDTOBase.toDsl(): DCatApCatalogueModel = DCatApCatalogueModel(
    identifier = identifier,
    img = img,
    type = type,
    language = language,
    description = description,
    title = title,
)
