package io.komune.registry.f2.catalogue.client

import f2.client.F2Client
import f2.client.domain.AuthRealm
import f2.client.function
import f2.client.ktor.F2ClientBuilder
import f2.client.ktor.http.plugin.F2Auth
import f2.dsl.fnc.F2SupplierSingle
import f2.dsl.fnc.f2SupplierSingle
import io.komune.registry.f2.catalogue.domain.CatalogueApi
import io.komune.registry.f2.catalogue.domain.command.CatalogueAddRelatedCataloguesFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueClaimOwnershipFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueDeleteFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkCataloguesFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkThemesFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueReferenceDatasetsFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueRemoveRelatedCataloguesFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueUnlinkCataloguesFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueUnreferenceDatasetsFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueUpdateAccessRightsFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetBlueprintsFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetByIdentifierFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetStructureFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueHistoryGetFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueListAllowedTypesFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueListAvailableOwnersFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueListAvailableParentsFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueListAvailableThemesFunction
import io.komune.registry.f2.catalogue.domain.query.CataloguePageFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueRefGetFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueRefGetTreeFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueRefSearchFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueSearchFunction
import io.ktor.client.plugins.logging.DEFAULT
import io.ktor.client.plugins.logging.LogLevel
import io.ktor.client.plugins.logging.Logger
import io.ktor.client.plugins.logging.Logging
import kotlin.js.JsExport
import kotlin.js.JsName

fun F2Client.catalogueClient(): F2SupplierSingle<CatalogueClient> = f2SupplierSingle {
    CatalogueClient(this)
}
typealias AuthRealmProvider = suspend () -> AuthRealm

fun catalogueClient(
    urlBase: String,
    authRealmProvider: AuthRealmProvider
): F2SupplierSingle<CatalogueClient> = f2SupplierSingle {
    CatalogueClient(
        F2ClientBuilder.get(urlBase) {
            install(F2Auth) {
                this.getAuth = authRealmProvider
            }
            install(Logging) {
                logger = Logger.DEFAULT
                level = LogLevel.HEADERS
                sanitizeHeader {
                    false
                }
            }
        }
    )
}

@JsExport
@JsName("CatalogueClient")
open class CatalogueClient(val client: F2Client) : CatalogueApi {
    override fun catalogueUpdateAccessRights(): CatalogueUpdateAccessRightsFunction
        = client.function("data/${this::catalogueUpdateAccessRights.name}")
    override fun catalogueLinkCatalogues(): CatalogueLinkCataloguesFunction
        = client.function("data/${this::catalogueLinkCatalogues.name}")
    override fun catalogueUnlinkCatalogues(): CatalogueUnlinkCataloguesFunction
        = client.function("data/${this::catalogueUnlinkCatalogues.name}")
    override fun catalogueAddRelatedCatalogues(): CatalogueAddRelatedCataloguesFunction
        = client.function("data/${this::catalogueAddRelatedCatalogues.name}")
    override fun catalogueRemoveRelatedCatalogues(): CatalogueRemoveRelatedCataloguesFunction
        = client.function("data/${this::catalogueRemoveRelatedCatalogues.name}")
    override fun catalogueReferenceDatasets(): CatalogueReferenceDatasetsFunction
        = client.function("data/${this::catalogueReferenceDatasets.name}")
    override fun catalogueUnreferenceDatasets(): CatalogueUnreferenceDatasetsFunction
        = client.function("data/${this::catalogueUnreferenceDatasets.name}")
    override fun catalogueLinkThemes(): CatalogueLinkThemesFunction = client.function("data/${this::catalogueLinkThemes.name}")
    override fun catalogueClaimOwnership(): CatalogueClaimOwnershipFunction = client.function("data/${this::catalogueClaimOwnership.name}")
    override fun catalogueDelete(): CatalogueDeleteFunction = client.function("data/${this::catalogueDelete.name}")

    override fun catalogueHistoryGet(): CatalogueHistoryGetFunction = client.function("data/${this::catalogueDelete.name}")
    override fun cataloguePage(): CataloguePageFunction = client.function("data/${this::cataloguePage.name}")
    override fun catalogueSearch(): CatalogueSearchFunction= client.function("data/${this::catalogueSearch.name}")
    override fun catalogueGet(): CatalogueGetFunction = client.function("data/${this::catalogueGet.name}")
    override fun catalogueGetByIdentifier(): CatalogueGetByIdentifierFunction
        = client.function("data/${this::catalogueGetByIdentifier.name}")
    override fun catalogueGetStructure(): CatalogueGetStructureFunction = client.function("data/${this::catalogueGetStructure.name}")
    override fun catalogueGetBlueprints(): CatalogueGetBlueprintsFunction = client.function("data/${this::catalogueGetBlueprints.name}")

    override fun catalogueListAvailableParents(): CatalogueListAvailableParentsFunction
        = client.function("data/${this::catalogueListAvailableParents.name}")
    override fun catalogueListAvailableThemes(): CatalogueListAvailableThemesFunction
        = client.function("data/${this::catalogueListAvailableThemes.name}")
    override fun catalogueListAvailableOwners(): CatalogueListAvailableOwnersFunction
        = client.function("data/${this::catalogueListAvailableOwners.name}")
    override fun catalogueListAllowedTypes(): CatalogueListAllowedTypesFunction
        = client.function("data/${this::catalogueListAllowedTypes.name}")

    override fun catalogueRefGet(): CatalogueRefGetFunction = client.function("data/${this::catalogueRefGet.name}")
    override fun catalogueRefGetTree(): CatalogueRefGetTreeFunction = client.function("data/${this::catalogueRefGetTree.name}")
    override fun catalogueRefSearch(): CatalogueRefSearchFunction = client.function("data/${this::catalogueRefSearch.name}")
}
