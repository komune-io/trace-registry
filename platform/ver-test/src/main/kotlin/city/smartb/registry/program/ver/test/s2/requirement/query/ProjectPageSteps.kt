package city.smartb.registry.program.ver.test.s2.requirement.query

import city.smartb.registry.program.f2.project.api.ProjectEndpoint
import city.smartb.registry.program.f2.project.domain.query.ProjectPageQuery
import city.smartb.registry.program.s2.project.domain.model.ProjectDTO
import city.smartb.registry.program.ver.test.VerCucumberStepsDefinition
import f2.dsl.fnc.invokeWith
import io.cucumber.datatable.DataTable
import io.cucumber.java8.En
import org.assertj.core.api.Assertions
import org.springframework.beans.factory.annotation.Autowired
import s2.bdd.data.TestContextKey
import s2.bdd.data.parser.safeExtract

class ProjectPageSteps: En, VerCucumberStepsDefinition() {

    @Autowired
    private lateinit var projectEndpoint: ProjectEndpoint

    private lateinit var projectPage: Collection<ProjectDTO>

    init {
        DataTableType(::projectPageParam)
        DataTableType(::projectAssertParams)

        When("I fetch page of projects") {
            step {
                fetchProject(projectPageParam(emptyMap()))
            }
        }

        When("I fetch page of projects:") { params: ProjectPageParams ->
            step {
                fetchProject(params)
            }
        }

        Then("I should receive projects:") { dataTable: DataTable ->
            step {
                dataTable.asList(ProjectPageAssertParams::class.java)
                    .let(::assertProject)
            }
        }

        Then("I should not receive projects:") { dataTable: DataTable ->
            step {
                dataTable.asList(ProjectPageAssertParams::class.java)
                    .let(::assertNotProject)
            }
        }

        Then("I should not receive any projects") {
            step {
                assertProject(emptyList())
            }
        }
    }

    private suspend fun fetchProject(params: ProjectPageParams) {
        projectPage = ProjectPageQuery(
            limit = params.limit,
            offset = params.offset,
            identifier = params.identifier,
            name = params.name,
            proponent = params.proponent,
            type = params.type,
            estimatedReductions = params.estimatedReductions,
            referenceYear = params.referenceYear,
            dueDate = params.dueDate,
            status = params.status,

        ).invokeWith(projectEndpoint.projectPage()).items
    }

    private fun assertNotProject(params: Collection<ProjectPageAssertParams>) {
        val paramsMap = params.associateBy { context.projectIds.get(it.identifier) }

        Assertions.assertThat(projectPage).allSatisfy { provider ->
            val providerParams = paramsMap[provider.id]
            Assertions.assertThat(providerParams).withFailMessage("Project[${provider.id}] should not be returns").isNull()
        }
    }
    private fun assertProject(params: Collection<ProjectPageAssertParams>) {
        val paramsMap = params.associateBy { context.projectIds.safeGet(it.identifier) }

        Assertions.assertThat(projectPage).hasSameSizeAs(params)
        Assertions.assertThat(projectPage).allSatisfy { provider ->
            val providerParams = paramsMap[provider.id]
            Assertions.assertThat(providerParams).isNotNull
            providerParams!!.name?.let { Assertions.assertThat(provider.name).isEqualTo(it) }
            providerParams.proponent?.let { Assertions.assertThat(provider.proponent?.name).isEqualTo(it) }
            providerParams.estimatedReductions?.let { Assertions.assertThat(provider.estimatedReductions).isEqualTo(it) }
            providerParams.referenceYear?.let { Assertions.assertThat(provider.referenceYear).isEqualTo(it) }
            providerParams.dueDate?.let { Assertions.assertThat(provider.dueDate).isEqualTo(it) }
            providerParams.status?.let { Assertions.assertThat(provider.status.name).isEqualTo(it) }
        }
    }

    private fun projectPageParam(entry: Map<String, String>) = ProjectPageParams(
        identifier = entry["identifier"],
        limit = entry["limit"]?.toInt(),
        offset = entry["offset"]?.toInt(),
        name = entry["name"],
        proponent = entry["proponent"],
        type = entry["type"],
        estimatedReductions = entry["estimatedReductions"],
        referenceYear = entry["referenceYear"],
        dueDate = entry["dueDate"]?.toLong(),
        status = entry["status"],
    )

    private fun projectAssertParams(entry: Map<String, String>) = ProjectPageAssertParams(
        //id = entry.safeExtract("id"),
        identifier = entry.safeExtract("identifier"),
        limit = entry["limit"]?.toInt(),
        offset = entry["offset"]?.toInt(),
        name = entry["name"],
        proponent = entry["proponent"],
        type = entry["type"],
        estimatedReductions = entry["estimatedReductions"],
        referenceYear = entry["referenceYear"],
        dueDate = entry["dueDate"]?.toLong(),
        status = entry["status"],
    )

    private data class ProjectPageParams(
        val identifier: String?,
        val limit: Int?,
        val offset: Int?,
        val name: String?,
        val proponent: String?,
        val type: String?,
        val estimatedReductions: String?,
        val referenceYear: String?,
        val dueDate: Long?,
        val status: String?
    )

    private data class ProjectPageAssertParams(
        //val id: TestContextKey,
        val identifier: TestContextKey,
        val limit: Int?,
        val offset: Int?,
        val name: String?,
        val proponent: String?,
        val type: String?,
        val estimatedReductions: String?,
        val referenceYear: String?,
        val dueDate: Long?,
        val status: String?
    )
}
