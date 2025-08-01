package cccev.dsl.client

import f2.dsl.fnc.invokeWith
import io.komune.registry.dsl.dcat.domain.model.DCatApCatalogueModel
import io.komune.registry.dsl.dcat.domain.model.DcatDataset
import io.komune.registry.dsl.dcat.domain.model.LicenseDocument
import io.komune.registry.dsl.skos.domain.model.SkosConceptScheme
import io.komune.registry.f2.catalogue.client.CatalogueClient
import io.komune.registry.f2.catalogue.client.catalogueCreate
import io.komune.registry.f2.catalogue.client.catalogueUpdate
import io.komune.registry.f2.catalogue.domain.command.CatalogueCreateCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkCataloguesCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueUpdateCommandDTOBase
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.f2.catalogue.domain.dto.CatalogueRefDTOBase
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetByIdentifierQuery
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetQuery
import io.komune.registry.f2.concept.client.ConceptClient
import io.komune.registry.f2.concept.domain.query.ConceptGetByIdentifierQuery
import io.komune.registry.f2.dataset.client.DatasetClient
import io.komune.registry.f2.dataset.domain.command.DatasetCreateCommandDTOBase
import io.komune.registry.f2.dataset.domain.query.DatasetGetByIdentifierQuery
import io.komune.registry.f2.license.client.LicenseClient
import io.komune.registry.f2.license.domain.query.LicenseGetByIdentifierQuery
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.CatalogueIdentifier
import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.commons.model.SimpleFile
import io.komune.registry.s2.concept.domain.command.ConceptCreateCommand
import io.komune.registry.s2.license.domain.command.LicenseCreateCommand
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.emitAll
import kotlinx.coroutines.flow.flatMapConcat
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.flow.map
import org.springframework.core.io.support.PathMatchingResourcePatternResolver

class DCatGraphClient(
    private val catalogueClient: CatalogueClient,
    private val conceptClient: ConceptClient,
    private val datasetClient: DatasetClient,
    private val licenseClient: LicenseClient,
) {

    @OptIn(ExperimentalCoroutinesApi::class)
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
                    createdCatalogues,
                )
                val catalogueId = createdCatalogues[catalogueIdentifier]!!

                catalogue.datasets?.forEach { dataset ->
                    if (dataset.identifier !in createdDatasets) {
                        val datasetId = dataset.getOrCreate(catalogueId)
                        createdDatasets[dataset.identifier] = datasetId
                    }
                }
                catalogueIdentifier
            }
    }

    suspend fun createSchemes(schemes: List<SkosConceptScheme>) {
        schemes.forEach { scheme ->
            scheme.concepts.forEach { concept ->
                ConceptGetByIdentifierQuery(concept.id).invokeWith(conceptClient.conceptGetByIdentifier()).item
                    ?: ConceptCreateCommand(
                        identifier = concept.id,
                        prefLabels = concept.prefLabels,
                        definitions = concept.definitions,
                        schemes = setOf(scheme.id)
                    ).invokeWith(conceptClient.conceptCreate())
            }
        }
    }

    suspend fun createLicenses(licenses: List<LicenseDocument>) {
        licenses.forEach { license ->
            LicenseGetByIdentifierQuery(license.identifier).invokeWith(licenseClient.licenseGetByIdentifier()).item
                ?: LicenseCreateCommand(
                    identifier = license.identifier,
                    name = license.name,
                    url = license.url,
                ).invokeWith(licenseClient.licenseCreate())
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
                (existingCatalogue.toUpdateCommand().copy(
                    title = translation.title,
                    description = translation.description,
                    language = translation.language
                ) to null).invokeWith(catalogueClient.catalogueUpdate())
            }

        createdCatalogues[catalogue.identifier] = existingCatalogue.id

        catalogue.catalogues
            ?.filter { c -> existingCatalogue.catalogues.orEmpty().none { c.identifier == it.identifier } }
            ?.takeIf { it.isNotEmpty() }
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
            homepage = catalogue.homepage,
            themes = catalogue.themes?.mapNotNull {
                ConceptGetByIdentifierQuery(it.id).invokeWith(conceptClient.conceptGetByIdentifier()).item?.id
            },
            license = catalogue.license?.let {
                LicenseGetByIdentifierQuery(it.identifier).invokeWith(licenseClient.licenseGetByIdentifier()).item?.id
            }
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

    private suspend fun DcatDataset.getOrCreate(catalogueId: CatalogueId): DatasetId {
        val client = datasetClient
        return DatasetGetByIdentifierQuery(
            identifier = identifier,
            language = language
        ).invokeWith(client.datasetGetByIdentifier()).item?.id
            ?: createDataset(catalogueId)
    }

    private suspend fun DcatDataset.createDataset(catalogueId: CatalogueId): DatasetId {
        return DatasetCreateCommandDTOBase(
            identifier = identifier,
            catalogueId = catalogueId,
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
        ).invokeWith(datasetClient.datasetCreate()).id.also {
            println("Created dataset ${identifier} with id ${it}")
        }
    }
}


fun CatalogueRefDTOBase.toDsl(): DCatApCatalogueModel = DCatApCatalogueModel(
    identifier = identifier,
    img = img,
    type = type,
    language = language,
    description = description,
    title = title,
)

fun CatalogueDTOBase.toUpdateCommand() = CatalogueUpdateCommandDTOBase(
    id = id,
    title = title,
    description = description,
    language = language,
    homepage = homepage,
    themes = themes.map { it.id },
    accessRights = accessRights,
    license = license?.id,
    location = location,
    stakeholder = stakeholder,
    integrateCounter = integrateCounter,
    parentId = parent?.id,
    versionNotes = versionNotes,
    ownerOrganizationId = ownerOrganization?.id,
    relatedCatalogueIds = relatedCatalogues
        ?.map { it.key to it.value.map { catalogue -> catalogue.id } }
        ?.toMap(),
    hidden = hidden,
)
