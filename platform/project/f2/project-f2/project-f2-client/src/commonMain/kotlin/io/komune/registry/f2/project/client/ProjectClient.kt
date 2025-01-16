package io.komune.registry.f2.project.client

import f2.client.F2Client
import f2.client.domain.AuthRealm
import f2.client.function
import f2.client.ktor.F2ClientBuilder
import f2.client.ktor.http.plugin.F2Auth
import f2.dsl.fnc.F2SupplierSingle
import f2.dsl.fnc.f2SupplierSingle
import io.komune.registry.f2.project.domain.ProjectApi
import io.komune.registry.f2.project.domain.command.ProjectAddAssetPoolFunction
import io.komune.registry.f2.project.domain.command.ProjectChangePrivacyFunction
import io.komune.registry.f2.project.domain.command.ProjectCreateFunction
import io.komune.registry.f2.project.domain.command.ProjectDeleteFunction
import io.komune.registry.f2.project.domain.command.ProjectUpdateFunction
import io.komune.registry.f2.project.domain.query.ProjectGetByIdentifierFunction
import io.komune.registry.f2.project.domain.query.ProjectGetFunction
import io.komune.registry.f2.project.domain.query.ProjectListFilesFunction
import io.komune.registry.f2.project.domain.query.ProjectPageFunction
import kotlin.js.JsExport
import kotlin.js.JsName

fun F2Client.projectClient(): F2SupplierSingle<ProjectClient> = f2SupplierSingle {
    ProjectClient(this)
}
typealias AuthRealmProvider = suspend () -> AuthRealm
fun projectClient(
    urlBase: String,
    authRealmProvider: AuthRealmProvider,
): F2SupplierSingle<ProjectClient> = f2SupplierSingle {
    ProjectClient(
        F2ClientBuilder.get(urlBase) {
            install(F2Auth) {
                this.getAuth = authRealmProvider
            }
        }
    )
}

@JsName("ProjectClient")
@JsExport
open class ProjectClient(private val client: F2Client) : ProjectApi {
    override fun projectCreate(): ProjectCreateFunction = client.function("project/${this::projectCreate.name}")
    override fun projectUpdate(): ProjectUpdateFunction = client.function("project/${this::projectUpdate.name}")
    override fun projectAddAssetPool(): ProjectAddAssetPoolFunction = client.function("project/${this::projectAddAssetPool.name}")
    override fun projectChangePrivacy(): ProjectChangePrivacyFunction = client.function("project/${this::projectChangePrivacy.name}")
    override fun projectDelete(): ProjectDeleteFunction = client.function("project/${this::projectDelete.name}")
    override fun projectGetByIdentifier(): ProjectGetByIdentifierFunction
        = client.function("project/${this::projectGetByIdentifier.name}")

    override fun projectGet(): ProjectGetFunction = client.function("project/${this::projectGet.name}")
    override fun projectPage(): ProjectPageFunction = client.function("project/${this::projectPage.name}")
    override fun projectListFiles(): ProjectListFilesFunction = client.function("project/${this::projectListFiles.name}")
}
