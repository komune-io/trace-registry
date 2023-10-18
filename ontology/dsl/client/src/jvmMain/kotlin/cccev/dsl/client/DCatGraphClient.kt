package cccev.dsl.client

import cccev.dsl.model.InformationConcept
import cccev.f2.concept.domain.query.InformationConceptGetByIdentifierQueryDTOBase
import cccev.s2.concept.domain.command.InformationConceptCreateCommand
import city.smartb.registry.f2.catalogue.client.CatalogueClient
import city.smartb.registry.f2.catalogue.client.catalogueSetImageFunction
import city.smartb.registry.f2.catalogue.domain.command.CatalogueCreateCommandDTOBase
import city.smartb.registry.f2.catalogue.domain.command.CatalogueFile
import city.smartb.registry.f2.catalogue.domain.command.CatalogueLinkCataloguesCommandDTOBase
import city.smartb.registry.f2.catalogue.domain.command.CatalogueLinkDatasetsCommandDTOBase
import city.smartb.registry.f2.catalogue.domain.command.CatalogueSetImageCommandDTOBase
import city.smartb.registry.f2.catalogue.domain.dto.CatalogueDTO
import city.smartb.registry.f2.catalogue.domain.dto.CatalogueRefDTO
import city.smartb.registry.f2.catalogue.domain.query.CatalogueGetQuery
import city.smartb.registry.f2.dataset.client.DatasetClient
import city.smartb.registry.f2.dataset.domain.command.DatasetCreateCommandDTOBase
import city.smartb.registry.f2.dataset.domain.query.DatasetGetQuery
import city.smartb.registry.f2.dataset.domain.query.DatasetGetQueryDTO
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueId
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueIdentifier
import city.smartb.registry.s2.catalogue.domain.model.DCatApCatalogueModel
import city.smartb.registry.s2.catalogue.domain.model.DcatDataset
import city.smartb.registry.s2.dataset.domain.automate.DatasetId
import city.smartb.registry.s2.dataset.domain.command.DatasetCreateCommand
import f2.dsl.fnc.F2SupplierSingle
import f2.dsl.fnc.invokeWith
import java.io.File
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.emitAll
import kotlinx.coroutines.flow.flatMapConcat
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.flow.map
import org.slf4j.LoggerFactory

class DCatGraphClient(
    private val catalogueClient: F2SupplierSingle<CatalogueClient>,
    private val datasetClient: F2SupplierSingle<DatasetClient>,
) {

    private val logger = LoggerFactory.getLogger(DCatGraphClient::class.java)
    @Suppress("ComplexMethod", "LongMethod")
    suspend fun create(allCatalogues: Flow<DCatApCatalogueModel>): Flow<DCatApCatalogueModel> {
        val visitedCatalogueIdentifiers = mutableSetOf<CatalogueIdentifier>()
        val createdCatalogues = mutableMapOf<CatalogueIdentifier, CatalogueId>()
        val createdDatasets = mutableMapOf<String, DatasetId>()

        fun DCatApCatalogueModel.flatten(): Flow<DCatApCatalogueModel> = flow {
            if (identifier in visitedCatalogueIdentifiers) {
                return@flow
            }
            visitedCatalogueIdentifiers += identifier

            catalogues?.forEach { emitAll(it.flatten()) }
            emit(this@flatten)
        }

        return allCatalogues.flatMapConcat(DCatApCatalogueModel::flatten)
            .map { catalogue ->

                val catalogueIdentifier = initCatalogue(
                    catalogue,
                    createdCatalogues
                )
                val calalogueId = createdCatalogues[catalogue.identifier]!!

                catalogue.datasets?.mapNotNull { dataset ->
                    val datasetId = if (dataset.identifier !in createdDatasets) {
                        val datasetId = dataset.getOrCreate()
                        createdDatasets[dataset.identifier] = datasetId
                        datasetId
                    } else createdDatasets[dataset.identifier]
                    datasetId
                }?.takeIf { it.isNotEmpty() }?.let { datasetIds ->
                    linkDatasetToCatalogue(calalogueId, datasetIds)
                }
                catalogueIdentifier
            }
    }

    private suspend fun initCatalogue(
        catalogue: DCatApCatalogueModel,
        createdCatalogues: MutableMap<CatalogueIdentifier, CatalogueId>
    ): DCatApCatalogueModel {
        val identifier = catalogue.identifier
        val existingCatalogue = CatalogueGetQuery(
            identifier = identifier
        ).invokeWith(catalogueClient().catalogueGet()).item
        if(existingCatalogue != null) {
            createdCatalogues[catalogue.identifier] = existingCatalogue.id
            return CatalogueGetQuery(
                id =  existingCatalogue.id
            ).invokeWith(catalogueClient().catalogueGet()).item?.toDsl()!!
        }

        val catalogueId = createCatalogue(
            catalogue,
            createdCatalogues
        )

        createdCatalogues[catalogue.identifier] = catalogueId
        catalogue.catalogues?.takeIf { it.isNotEmpty() }?.let { catalogues ->
            linkCatalogues(
                createdCatalogues,
                catalogue,
                catalogues.map { createdCatalogues[it.identifier]!! })
        }
        return CatalogueGetQuery(
            id = catalogueId
        ).invokeWith(catalogueClient().catalogueGet()).item?.toDsl()!!
    }

    private suspend fun DCatGraphClient.linkCatalogues(
        createdCatalogues: MutableMap<CatalogueIdentifier, CatalogueId>,
        parent: DCatApCatalogueModel,
        catalogueId: List<CatalogueId>
    ) {
        CatalogueLinkCataloguesCommandDTOBase(
            id = createdCatalogues[parent.identifier]!!,
            catalogues = catalogueId
        ).invokeWith(catalogueClient().catalogueLinkCatalogues())
        println("Linked catalogue ${parent.identifier} to ${catalogueId}")
    }

    private suspend fun createCatalogue(
        catalogue: DCatApCatalogueModel,
        createdCatalogues: MutableMap<CatalogueIdentifier, CatalogueId>
    ): CatalogueId {
        return CatalogueCreateCommandDTOBase(
            identifier = catalogue.identifier,
            title = catalogue.title,
            description = catalogue.description,
            catalogues = catalogue.catalogues?.map {
                createdCatalogues[it.identifier]!!
            }.orEmpty(),
            type = catalogue.type,
            display = catalogue.display,
            homepage = catalogue.homepage,
            themes = catalogue.themes,
        ).invokeWith(catalogueClient().catalogueCreate()).id.also {
            println("Created catalogue ${catalogue.identifier} with id ${it}")
        }.also { catalogueId ->
            catalogue.img?.let { img ->
                val ff = File(img).readBytes()
                (CatalogueSetImageCommandDTOBase(
                    id = catalogueId,
                ) to CatalogueFile(
                    name = img,
                    content = ff
                )).invokeWith( catalogueClient().catalogueSetImageFunction())
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
        val client = datasetClient()
        return DatasetGetQuery(
            identifier = identifier
        ).invokeWith(client.datasetGet()).item?.id
            ?: createDataset(client)
    }

    suspend fun linkDatasetToCatalogue(catalogueId: String, datasets: List<DatasetId>) {
        val client = catalogueClient()
        println("Linking catalogue ${catalogueId} to datasets ${datasets}")
        CatalogueLinkDatasetsCommandDTOBase(
            id = catalogueId,
            datasets = datasets
        ).invokeWith(client.catalogueLinkDatasets())
    }

    private suspend fun DcatDataset.createDataset(client: DatasetClient): DatasetId {
        return DatasetCreateCommandDTOBase(
            identifier = identifier,
            description = description,
            type = type,
            title = title,
            wasGeneratedBy = wasGeneratedBy,
            accessRights = accessRights,
            conformsTo = conformsTo,
            creator = creator,
            releaseDate = releaseDate,
            updateDate = updateDate,
            language = language,
            publisher = publisher,
            theme = theme,
            keywords = keywords,
            landingPage = landingPage,
            version = version,
            versionNotes = versionNotes,
            length = length,
        ).invokeWith(client.datasetCreate()).id.also {
            println("Created dataset ${identifier} with id ${it}")
        }
    }
}


fun CatalogueDTO.toDsl(): DCatApCatalogueModel = DCatApCatalogueModel(
    identifier = identifier,
    homepage = homepage,
    img = img,
    type = type,
    themes = themes,
    catalogues = catalogues?.map { it.toDsl() },
    description = description,
    title = title,
    display = display,
)

fun CatalogueRefDTO.toDsl(): DCatApCatalogueModel = DCatApCatalogueModel(
    identifier = identifier,
    homepage = homepage,
    img = img,
    type = type,
    themes = themes,
    description = description,
    title = title,
    display = display,
)
