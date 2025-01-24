package cccev.dsl.client

import f2.dsl.fnc.invokeWith
import io.komune.registry.dsl.dcat.domain.model.DCatApCatalogueModel
import io.komune.registry.dsl.dcat.domain.model.DcatDataset
import io.komune.registry.f2.catalogue.client.CatalogueClient
import io.komune.registry.f2.catalogue.client.catalogueSetImageFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueCreateCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueFile
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkCataloguesCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkDatasetsCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueSetImageCommandDTOBase
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.f2.catalogue.domain.dto.CatalogueRefDTOBase
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetByIdentifierQuery
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetQuery
import io.komune.registry.f2.dataset.client.DatasetClient
import io.komune.registry.f2.dataset.domain.command.DatasetCreateCommandDTOBase
import io.komune.registry.f2.dataset.domain.query.DatasetGetByIdentifierQuery
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.catalogue.domain.automate.CatalogueIdentifier
import io.komune.registry.s2.dataset.domain.automate.DatasetId
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.emitAll
import kotlinx.coroutines.flow.flatMapConcat
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.flow.map
import java.io.File

typealias Language = String
typealias CatalogueKey = Pair<CatalogueIdentifier, Language>

class DCatGraphClient(
    private val catalogueClient: CatalogueClient,
    private val datasetClient: DatasetClient,
) {

    @Suppress("ComplexMethod", "LongMethod")
    suspend fun create(allCatalogues: Flow<DCatApCatalogueModel>): Flow<CatalogueKey> {
        val visitedCatalogueKeys = mutableSetOf<CatalogueKey>()
        val createdCatalogues = mutableMapOf<CatalogueKey, CatalogueId>()
        val createdDatasets = mutableMapOf<String, DatasetId>()

        fun DCatApCatalogueModel.flatten(): Flow<DCatApCatalogueModel> = flow {
            val key = toKey()
            if (key in visitedCatalogueKeys) {
                return@flow
            }
            visitedCatalogueKeys += key

            catalogues?.forEach { emitAll(it.flatten()) }
            emit(this@flatten)
        }

        return allCatalogues.flatMapConcat(DCatApCatalogueModel::flatten)
            .map { catalogue ->

                val catalogueKey = initCatalogue(
                    catalogue,
                    createdCatalogues
                )
                val catalogueId = createdCatalogues[catalogueKey]!!

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
                catalogueKey
            }
    }

    private suspend fun initCatalogue(
        catalogue: DCatApCatalogueModel,
        createdCatalogues: MutableMap<CatalogueKey, CatalogueId>
    ): CatalogueKey {
        val key = catalogue.toKey()

        val existingCatalogue = CatalogueGetByIdentifierQuery(
            identifier = catalogue.identifier,
            language = catalogue.language
        ).invokeWith(catalogueClient.catalogueGetByIdentifier()).item

        if (existingCatalogue != null) {
            createdCatalogues[key] = existingCatalogue.id
            return existingCatalogue.toKey()
        }

        val catalogueId = createCatalogue(
            catalogue,
            createdCatalogues
        )

        createdCatalogues[key] = catalogueId
        catalogue.catalogues?.takeIf { it.isNotEmpty() }?.let { catalogues ->
            linkCatalogues(
                createdCatalogues,
                catalogue,
                catalogues.map { createdCatalogues[it.toKey()]!! })
        }
        return CatalogueGetQuery(
            id = catalogueId
        ).invokeWith(catalogueClient.catalogueGet()).item!!.toKey()
    }

    private suspend fun DCatGraphClient.linkCatalogues(
        createdCatalogues: MutableMap<CatalogueKey, CatalogueId>,
        parent: DCatApCatalogueModel,
        catalogueId: List<CatalogueId>
    ) {
        CatalogueLinkCataloguesCommandDTOBase(
            id = createdCatalogues[parent.toKey()]!!,
            catalogues = catalogueId
        ).invokeWith(catalogueClient.catalogueLinkCatalogues())
        println("Linked catalogue ${parent.identifier} to ${catalogueId}")
    }

    private suspend fun createCatalogue(
        catalogue: DCatApCatalogueModel,
        createdCatalogues: MutableMap<CatalogueKey, CatalogueId>
    ): CatalogueId {
        return CatalogueCreateCommandDTOBase(
            identifier = catalogue.identifier,
            title = catalogue.title,
            description = catalogue.description,
            catalogues = catalogue.catalogues
                ?.map { createdCatalogues[it.toKey()]!! }
                .orEmpty(),
            type = catalogue.type,
            language = catalogue.language,
            structure = catalogue.structure,
            homepage = catalogue.homepage,
            themes = catalogue.themes,
        ).invokeWith(catalogueClient.catalogueCreate())
            .id
            .also { println("Created catalogue ${catalogue.identifier} (${catalogue.language}) with id $it") }
            .also { catalogueId ->
                catalogue.img?.let { img ->
                    val ff = File(img).readBytes()
                    (CatalogueSetImageCommandDTOBase(
                        id = catalogueId,
                    ) to CatalogueFile(
                        name = img,
                        content = ff
                    )).invokeWith(catalogueClient.catalogueSetImageFunction())
                }
            }
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

    private fun key(identifier: CatalogueIdentifier, language: Language): CatalogueKey = identifier to language
    private fun DCatApCatalogueModel.toKey(): CatalogueKey = key(identifier, language)
    private fun CatalogueDTOBase.toKey(): CatalogueKey = key(identifier, language)
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
