package cccev.dsl.client

import city.smartb.registry.f2.catalogue.client.CatalogueClient
import city.smartb.registry.f2.catalogue.client.catalogueSetImageFunction
import city.smartb.registry.f2.catalogue.domain.command.CatalogueCreateCommandDTOBase
import city.smartb.registry.f2.catalogue.domain.command.CatalogueFile
import city.smartb.registry.f2.catalogue.domain.command.CatalogueLinkCataloguesCommandDTOBase
import city.smartb.registry.f2.catalogue.domain.command.CatalogueSetImageCommandDTOBase
import city.smartb.registry.f2.catalogue.domain.dto.CatalogueDTO
import city.smartb.registry.f2.catalogue.domain.dto.CatalogueRefDTO
import city.smartb.registry.f2.catalogue.domain.query.CatalogueGetQuery
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueId
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueIdentifier
import city.smartb.registry.s2.catalogue.domain.model.DCatApCatalogueModel
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
) {

    private val logger = LoggerFactory.getLogger(DCatGraphClient::class.java)
    @Suppress("ComplexMethod", "LongMethod")
    suspend fun create(allCatalogues: Flow<DCatApCatalogueModel>): Flow<DCatApCatalogueModel> {
        val visitedCatalogueIdentifiers = mutableSetOf<CatalogueIdentifier>()
        val createdCatalogues = mutableMapOf<CatalogueIdentifier, CatalogueId>()

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
            return existingCatalogue.toDsl()
        }

        val catalogueId = createCatalogue(
            catalogue,
            createdCatalogues
        )

        createdCatalogues[catalogue.identifier] = catalogueId

        catalogue.catalogues?.forEach { parent ->
            linkCatalogues(createdCatalogues, parent, catalogueId)
        }
        return CatalogueGetQuery(
            id = catalogueId
        ).invokeWith(catalogueClient().catalogueGet()).item?.toDsl()!!
    }

    private suspend fun DCatGraphClient.linkCatalogues(
        createdCatalogues: MutableMap<CatalogueIdentifier, CatalogueId>,
        parent: DCatApCatalogueModel,
        catalogueId: CatalogueId
    ) {
        CatalogueLinkCataloguesCommandDTOBase(
            id = createdCatalogues[parent.identifier]!!,
            catalogues = listOf(catalogueId)
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
}


fun CatalogueDTO.toDsl(): DCatApCatalogueModel = DCatApCatalogueModel(
    identifier = identifier,
    title = title,
    description = description,
    homepage = homepage,
    img = img,
    type = type,
    catalogues = catalogues?.map { it.toDsl() },
    themes = themes,
)

fun CatalogueRefDTO.toDsl(): DCatApCatalogueModel = DCatApCatalogueModel(
    identifier = identifier,
    title = title,
    description = description,
    homepage = homepage,
    img = img,
    type = type,
    themes = themes,
)
