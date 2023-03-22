package city.smartb.registry.program.f2.project.client

import city.smartb.registry.program.f2.project.domain.ProjectApi
import city.smartb.registry.program.f2.project.domain.command.ProjectCreateFunction
import city.smartb.registry.program.f2.project.domain.command.ProjectDeleteFunction
import city.smartb.registry.program.f2.project.domain.command.ProjectUpdateFunction
import city.smartb.registry.program.f2.project.domain.query.ProjectGetFunction
import city.smartb.registry.program.f2.project.domain.query.ProjectPageFunction
import f2.client.F2Client
import f2.client.function
import f2.dsl.fnc.F2SupplierSingle
import kotlin.js.JsExport
import kotlin.js.JsName

expect fun F2Client.projectClient(): F2SupplierSingle<ProjectClient>
expect fun projectClient(urlBase: String): F2SupplierSingle<ProjectClient>

@JsName("ProjectClient")
@JsExport
open class ProjectClient constructor(private val client: F2Client) : ProjectApi {
    override fun projectCreate(): ProjectCreateFunction = client.function(this::projectCreate.name)
    override fun projectUpdate(): ProjectUpdateFunction = client.function(this::projectUpdate.name)
    override fun projectDelete(): ProjectDeleteFunction = client.function(this::projectDelete.name)

    override fun projectGet(): ProjectGetFunction = client.function(this::projectGet.name)
    override fun projectPage(): ProjectPageFunction = client.function(this::projectPage.name)
}
