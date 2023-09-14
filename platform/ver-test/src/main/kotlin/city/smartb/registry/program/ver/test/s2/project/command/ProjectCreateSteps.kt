package city.smartb.registry.program.ver.test.s2.project.command

import city.smartb.registry.program.s2.commons.model.GeoLocation
import city.smartb.registry.program.s2.project.api.ProjectAggregateService
import city.smartb.registry.program.s2.project.api.entity.ProjectRepository
import city.smartb.registry.program.s2.project.domain.command.ProjectCreateCommand
import city.smartb.registry.program.s2.project.domain.model.DateTime
import city.smartb.registry.program.s2.project.domain.model.OrganizationRef
import city.smartb.registry.program.s2.project.domain.model.SdgNumber
import city.smartb.registry.program.ver.test.VerCucumberStepsDefinition
import io.cucumber.datatable.DataTable
import io.cucumber.java8.En
import kotlinx.coroutines.async
import kotlinx.coroutines.awaitAll
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.toList
import org.assertj.core.api.Assertions
import org.springframework.beans.factory.annotation.Autowired
import s2.bdd.data.TestContextKey
import s2.bdd.data.parser.extractList
import java.util.UUID
import kotlin.jvm.optionals.getOrNull

class ProjectCreateSteps: En, VerCucumberStepsDefinition() {

    @Autowired
    private lateinit var projectAggregateService: ProjectAggregateService

    @Autowired
    private lateinit var projectRepository: ProjectRepository

    private lateinit var command: ProjectCreateCommand

    init {
        DataTableType(::projectCreateParams)
        DataTableType(::projectAssertParams)

        When("I create a project") {
            step {
                createProject(projectCreateParams(null))
            }
        }

        When("I create a project:") { params: ProjectCreateParams ->
            step {
                createProject(params)
            }
        }

        Given("A project is created") {
            step {
                createProject(projectCreateParams(null))
            }
        }

        Given("A project is created:") { params: ProjectCreateParams ->
            step {
                createProject(params)
            }
        }

        Given("Some projects are created:") { dataTable: DataTable ->
            step {
                dataTable.asList(ProjectCreateParams::class.java)
                    .forEach { createProject(it) }
            }
        }

        Then("The project should be created") {
            step {
                val projectId = context.projectIds.lastUsed
//                AssertionBdd.project(projectRepository).assertThatId(projectId).hasFields(
//                    status = ProjectState.STAMPED,
//                    name = command.name,
//                    description = command.description,
//                    type = command.type,
//                )
            }
        }

        Then("The project should be created:") { params: ProjectAssertParams ->
            step {
                val projectId = context.projectIds.safeGet(params.identifier)
                val project = projectRepository.findById(projectId).getOrNull()
                Assertions.assertThat(project).isNotNull
                params.isPrivate?.let { isPrivate ->
                    Assertions.assertThat(project?.privacy).isEqualTo(isPrivate)
                }

//                AssertionBdd.project(projectRepository).assertThat(project!!).hasFields(
//                    status = ProjectState.STAMPED,
//                    name = params.name ?: project.name,
//                    description = params.description ?: project.description,
//                    type = params.type ?: project.type,
//                )
            }
        }
    }

    private suspend fun createProject(params: ProjectCreateParams) = context.projectIds.register(params.identifier) {
        command = ProjectCreateCommand(
            identifier = "${params.identifier}_${UUID.randomUUID()}",
            name = params.name,
            description = params.description,
            type = params.type,
            country = params.country,
            indicator = params.indicator,
            creditingPeriodStartDate = params.creditingPeriodStartDate,
            creditingPeriodEndDate = params.creditingPeriodEndDate,
            dueDate = params.dueDate,
            estimatedReduction = params.estimatedReduction,
            localization = params.localization,
            proponent = params.proponent,
            referenceYear = params.referenceYear,
            registrationDate = params.registrationDate,
            slug = params.slug,
            vintage = params.vintage,
            vvb = params.vvb,
            assessor = params.assessor,
            location = params.location,
            activities = params.activities,
            subContinent = params.subContinent,
            sdgs =  params.sdgs,
            isPrivate = params.isPrivate
        )
        projectAggregateService.create(command).id
    }

    private fun projectCreateParams(entry: Map<String, String>?) =
        ProjectCreateParams(
            identifier = entry?.get("identifier").orRandom(),
            name = entry?.get("name").orRandom(),
            description = entry?.get("description").orRandom(),
            type = entry?.get("type")?.toInt() ?: 4,
            country = entry?.get("country").orRandom(),
            indicator = entry?.get("indicator").orRandom(),
            creditingPeriodStartDate = entry?.get("creditingPeriodStartDate")?.toLong(),
            creditingPeriodEndDate = entry?.get("creditingPeriodEndDate")?.toLong(),
            dueDate = entry?.get("dueDate")?.toLong(),
            estimatedReduction = entry?.get("estimatedReduction").orRandom(),
            localization = entry?.get("localization").orRandom(),
            proponent = entry?.get("proponent")?.toOrganizationRef(),
            referenceYear = entry?.get("referenceYear").orRandom(),
            registrationDate = entry?.get("registrationDate")?.toLong(),
            slug = entry?.get("slug").orRandom(),
            vintage = entry?.get("vintage")?.orRandom(),
            vvb = null, //entry?.get("vvb")?.toOrganizationRef(),
            assessor = null, //entry?.get("assessor")?.toOrganizationRef(),
            location = null, //entry?.get("location")?.toGeoLocation(),
            activities = entry?.extractList("activities").orEmpty(),
            subContinent = entry?.get("subContinent")?.orRandom(),
            sdgs = entry?.extractList("sdgs")?.map { it.toInt() }.orEmpty(),
            isPrivate = entry?.get("isPrivate")?.toBoolean(),
        )

    private data class ProjectCreateParams(
        val identifier: TestContextKey,
        val name: String,
        val description: String,
        val type: Int,
        var country: String?,
        var indicator: String,
        var creditingPeriodStartDate: DateTime?,
        var creditingPeriodEndDate: DateTime?,
        var dueDate: DateTime?,
        var estimatedReduction: String?,
        var localization: String?,
        var proponent: OrganizationRef?,
        var referenceYear: String?,
        var registrationDate: DateTime?,
        var slug: String?,
        val vintage: String?,
        var vvb: OrganizationRef?,
        var assessor: OrganizationRef?,
        var location: GeoLocation?,
        val activities: List<TestContextKey>?,
        var subContinent: String?,
        var isPrivate: Boolean?,
        var sdgs: List<SdgNumber>?
    )

    private suspend fun createProjects(params: List<ProjectCreateParams>) = coroutineScope {
        params.asFlow().map {
            async {
                createProject(it)
            }
        }.toList().awaitAll()
    }

    private fun projectAssertParams(entry: Map<String, String>) = ProjectAssertParams(
            identifier = entry["identifier"] ?: context.projectIds.lastUsedKey,
            name = entry["name"],
            description = entry["description"],
            type = entry["type"]?.toInt(),
            isPrivate = entry["isPrivate"]?.toBoolean(),
            hasProject = entry.extractList("hasProject"),
            hasConcept = entry.extractList("hasConcept"),
            hasEvidenceTypeList = entry.extractList("hasEvidenceTypeList")
        )

    private data class ProjectAssertParams(
        val identifier: TestContextKey,
        val name: String?,
        val description: String?,
        val type: Int?,
        val isPrivate: Boolean?,
        val hasProject: List<TestContextKey>?,
        val hasConcept: List<TestContextKey>?,
        val hasEvidenceTypeList: List<TestContextKey>?
    )

    private fun String.toOrganizationRef(): OrganizationRef {
        val organization = context.organizations[this]
        return OrganizationRef(organization?.id?:UUID.randomUUID().toString(), organization?.name?:this)
    }
}
