package io.komune.registry.project.test.bdd.s2.project.query

import f2.dsl.fnc.invokeWith
import io.cucumber.datatable.DataTable
import io.cucumber.java8.En
import io.komune.registry.f2.project.api.ProjectEndpoint
import io.komune.registry.f2.project.domain.model.ProjectDTO
import io.komune.registry.f2.project.domain.query.ProjectPageQuery
import io.komune.registry.project.test.bdd.VerCucumberStepsDefinition
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
            vintage = params.vintage,
            origin = params.origin,

        ).invokeWith(projectEndpoint.projectPage()).items
    }

    private fun assertNotProject(params: Collection<ProjectPageAssertParams>) {
        val paramsMap = params.associateBy { context.projectIds.get(it.identifier) }

        Assertions.assertThat(projectPage).allSatisfy { provider ->
            val providerParams = paramsMap[provider.id]
            Assertions.assertThat(providerParams)
                .withFailMessage("Project[${provider.id}] should not be returns").isNull()
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
            providerParams.estimatedReductions?.let {
                Assertions.assertThat(provider.estimatedReductions).isEqualTo(it)
            }
            providerParams.referenceYear?.let { Assertions.assertThat(provider.referenceYear).isEqualTo(it) }
            providerParams.dueDate?.let { Assertions.assertThat(provider.dueDate).isEqualTo(it) }
            providerParams.status?.let { Assertions.assertThat(provider.status.name).isEqualTo(it) }
            providerParams.vintage?.let { Assertions.assertThat(provider.vintage).containsExactlyElementsOf(it) }
        }
    }

    private fun projectPageParam(entry: Map<String, String>) = ProjectPageParams(
        identifier = entry["identifier"],
        limit = entry["limit"]?.toInt(),
        offset = entry["offset"]?.toInt(),
        name = entry["name"],
        proponent = entry["proponent"],
        type = entry["type"]?.toInt(),
        estimatedReductions = entry["estimatedReductions"],
        referenceYear = entry["referenceYear"],
        dueDate = entry["dueDate"]?.toLong(),
        status = entry["status"],
        vintage = entry["vintage"],
        origin = entry["origin"],
    )

    private fun projectAssertParams(entry: Map<String, String>) = ProjectPageAssertParams(
        identifier = entry.safeExtract("identifier"),
        limit = entry["limit"]?.toInt(),
        offset = entry["offset"]?.toInt(),
        name = entry["name"],
        proponent = entry["proponent"],
        type = entry["type"]?.toInt(),
        estimatedReductions = entry["estimatedReductions"],
        referenceYear = entry["referenceYear"],
        dueDate = entry["dueDate"]?.toLong(),
        status = entry["status"],
        vintage = entry["vintage"]?.split(","),
    )

    private data class ProjectPageParams(
        val identifier: String?,
        val limit: Int?,
        val offset: Int?,
        val name: String?,
        val proponent: String?,
        val type: Int?,
        val estimatedReductions: String?,
        val referenceYear: String?,
        val dueDate: Long?,
        val status: String?,
        val vintage: String?,
        val origin: String?,
    )

    private data class ProjectPageAssertParams(
        val identifier: TestContextKey,
        val limit: Int?,
        val offset: Int?,
        val name: String?,
        val proponent: String?,
        val type: Int?,
        val estimatedReductions: String?,
        val referenceYear: String?,
        val dueDate: Long?,
        val status: String?,
        val vintage: List<String>?,
    )
}
