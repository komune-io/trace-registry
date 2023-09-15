package city.smartb.registry.program.ver.test.s2.project.command

import cccev.s2.concept.domain.InformationConceptIdentifier
import city.smartb.registry.program.s2.commons.model.GeoLocation
import city.smartb.registry.program.s2.project.api.ProjectAggregateService
import city.smartb.registry.program.s2.project.api.entity.ProjectRepository
import city.smartb.registry.program.s2.project.domain.command.ProjectAddAssetPoolCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectChangePrivacyCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectUpdateCommand
import city.smartb.registry.program.s2.project.domain.model.ActivityIdentifier
import city.smartb.registry.program.s2.project.domain.model.DateTime
import city.smartb.registry.program.s2.project.domain.model.OrganizationRef
import city.smartb.registry.program.s2.project.domain.model.SdgNumber
import city.smartb.registry.program.ver.test.VerCucumberStepsDefinition
import io.cucumber.datatable.DataTable
import io.cucumber.java8.En
import kotlin.jvm.optionals.getOrNull
import org.assertj.core.api.Assertions
import org.springframework.beans.factory.annotation.Autowired
import s2.bdd.data.TestContextKey
import s2.bdd.data.parser.extractList

class ProjectUpdateSteps: En, VerCucumberStepsDefinition() {

    @Autowired
    private lateinit var projectAggregateService: ProjectAggregateService

    @Autowired
    private lateinit var projectRepository: ProjectRepository


    init {
        DataTableType(::projectUpdateParams)
        DataTableType(::projectAddAssetPoolParams)
        DataTableType(::projectChangePrivacyParams)

        Given("The project privacy is changed:") { params: ProjectChangePrivacyParams ->
            step {
                changeProjectPrivacy(params)
            }
        }

        Given("The projects have asset pools:") { dataTable: DataTable ->
            step {
                dataTable.asList(ProjectAddAssetPoolParams::class.java)
                    .forEach { addAssetPoolToProject(it) }
            }
        }

        When("I update the project:") { params: ProjectUpdateParams ->
            step {
                updateProject(params)
            }
        }

        Then("The project should be updated:") { params: ProjectUpdateParams ->
            step {
                val projectId = context.projectIds.safeGet(params.identifier)
                val project = projectRepository.findById(projectId).getOrNull()
                Assertions.assertThat(project?.name).isEqualTo(params.name)
            }
        }

        When("I add an asset pool to a project:") { params: ProjectAddAssetPoolParams ->
            step {
                addAssetPoolToProject(params)
            }
        }

        Then("The project should contain the asset pool:") { params: ProjectAddAssetPoolParams ->
            step {
                val projectId = context.projectIds.safeGet(params.identifier)
                val project = projectRepository.findById(projectId).getOrNull()
                Assertions.assertThat(project?.assetPools?.toList()?.last()).isEqualTo(context.assetPoolIds.lastUsed)
            }
        }

        When("I change the project privacy:") { params: ProjectChangePrivacyParams ->
            step {
                changeProjectPrivacy(params)
            }
        }

        Then("The project privacy should changed:") { params: ProjectChangePrivacyParams ->
            step {
                val projectId = context.projectIds.safeGet(params.identifier)
                val project = projectRepository.findById(projectId).getOrNull()
                Assertions.assertThat(project?.privacy).isEqualTo(params.private)
            }
        }
    }

    private suspend fun updateProject(params: ProjectUpdateParams) {
        projectAggregateService.update(
            ProjectUpdateCommand(
                id = context.projectIds.safeGet(params.identifier),
                identifier = context.projectIds.safeGet(params.identifier),
                name = params.name,
                country = params.country,
                indicator = params.indicator,
                creditingPeriodStartDate = params.creditingPeriodStartDate,
                creditingPeriodEndDate = params.creditingPeriodEndDate,
                description = params.description,
                dueDate = params.dueDate,
                estimatedReduction = params.estimatedReduction,
                localization = params.localization,
                proponent = params.proponent,
                type = params.type,
                referenceYear = params.referenceYear,
                registrationDate = params.registrationDate,
                vintage = params.vintage,
                slug = params.slug,
                vvb = params.vvb,
                assessor = params.assessor,
                location = params.location,
                activities = params.activities,
                subContinent = params.subContinent,
                sdgs = params.sdgs
            )
        )
    }

    private fun projectUpdateParams(entry: Map<String, String>?) = ProjectUpdateParams(
        identifier = entry?.get("identifier") ?: context.projectIds.lastUsed,
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
        proponent = null, //entry?.get("proponent")?.toOrganizationRef(),
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
    )

    private data class ProjectUpdateParams(
        val identifier: TestContextKey,
        var name: String,
        var country: String?,
        var indicator: InformationConceptIdentifier,
        var creditingPeriodStartDate: DateTime?,
        var creditingPeriodEndDate: DateTime?,
        var description: String?,
        var dueDate: DateTime?,
        var estimatedReduction: String?,
        var localization: String?,
        var proponent: OrganizationRef?,
        var type: Int?,
        var referenceYear: String?,
        var registrationDate: DateTime?,
        var slug: String?,
        var vintage: String?,
        var vvb: OrganizationRef?,
        var assessor: OrganizationRef?,
        var location: GeoLocation?,
        var activities: List<ActivityIdentifier>?,
        var subContinent: String?,
        var sdgs: List<SdgNumber>?,
    )
    
    private suspend fun addAssetPoolToProject(params: ProjectAddAssetPoolParams) {
        projectAggregateService.addAssetPool(
            ProjectAddAssetPoolCommand(
                id = context.projectIds.safeGet(params.identifier),
                poolId = params.poolIdentifier?.let { context.assetPoolIds.safeGet(it)} ?: params.poolId,
            )
        )
    }

    private fun projectAddAssetPoolParams(entry: Map<String, String>?) = ProjectAddAssetPoolParams(
        identifier = entry?.get("identifier") ?: context.projectIds.lastUsed,
        poolIdentifier = entry?.get("poolIdentifier"),
        poolId = entry?.get("poolId") ?: context.assetPoolIds.lastUsed
    )

    private data class ProjectAddAssetPoolParams(
        val identifier: TestContextKey,
        val poolIdentifier: TestContextKey?,
        val poolId: String,
    )

    private suspend fun changeProjectPrivacy(params: ProjectChangePrivacyParams) {
        projectAggregateService.changePrivacy(
            ProjectChangePrivacyCommand(
                id = context.projectIds.safeGet(params.identifier),
                isPrivate = params.private
            )
        )
    }

    private fun projectChangePrivacyParams(entry: Map<String, String>?) = ProjectChangePrivacyParams(
        identifier = entry?.get("identifier") ?: context.projectIds.lastUsed,
        private = entry?.get("private")?.toBooleanStrictOrNull() ?: false
    )

    private data class ProjectChangePrivacyParams(
        val identifier: TestContextKey,
        val private: Boolean,
    )
}
