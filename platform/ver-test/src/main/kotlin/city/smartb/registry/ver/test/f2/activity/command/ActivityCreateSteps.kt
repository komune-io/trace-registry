package city.smartb.registry.ver.test.f2.activity.command

import city.smartb.registry.f2.activity.api.ActivityEndpoint
import city.smartb.registry.f2.activity.api.service.ActivityF2FinderService
import city.smartb.registry.f2.activity.domain.command.ActivityCreateCommandDTOBase
import f2.dsl.fnc.invokeWith
import io.cucumber.datatable.DataTable
import io.cucumber.java8.En
import java.util.UUID
import kotlinx.coroutines.async
import kotlinx.coroutines.awaitAll
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.toList
import org.springframework.beans.factory.annotation.Autowired
import s2.bdd.data.TestContextKey
import s2.bdd.data.parser.extractList

class ActivityCreateSteps: En, city.smartb.registry.ver.test.VerCucumberStepsDefinition() {

    @Autowired
    private lateinit var activityAggregateService: ActivityEndpoint
    @Autowired
    private lateinit var activityF2FinderService: ActivityF2FinderService

//    @Autowired
//    private lateinit var activityRepository: ActivityRepository

    private lateinit var command: ActivityCreateCommandDTOBase

    init {
        DataTableType(::activityCreateParams)
        DataTableType(::activityAssertParams)

        When("I create an activity") {
            step {
                createActivity(activityCreateParams(null))
            }
        }

        When("I create an activity:") { params: ActivityCreateParams ->
            step {
                createActivity(params)
            }
        }

        Given("A activity is created") {
            step {
                createActivity(activityCreateParams(null))
            }
        }

        Given("A activity is created:") { params: ActivityCreateParams ->
            step {
                createActivity(params)
            }
        }

        Given("Some activities are created:") { dataTable: DataTable ->
            step {
                dataTable.asList(ActivityCreateParams::class.java)
                    .forEach { createActivity(it) }
            }
        }

        Then("The activity should be created") {
            step {
                val activityId = context.activityIds.lastUsed
//                AssertionBdd.activity(activityF2FinderService).assertThatId(activityId).hasFields(
//                    name = command.name,
//                    description = command.description,
//                    type = RequirementType.Activity.identifier
//                )
            }
        }

        Then("The activity should be created:") { params: ActivityAssertParams ->
            step {
                val activityId = context.activityIds.safeGet(params.identifier)
//                AssertionBdd.activity(activityF2FinderService).exists(activityId)

//                AssertionBdd.activity(activityF2FinderService).assertThatId(activityId).hasFields(
//                    name = params.name,
//                    description = params.description,
//                    type = params.type,
//                )
            }
        }
    }

    private suspend fun createActivity(params: ActivityCreateParams) = context.activityIds.register(params.identifier) {
       command = ActivityCreateCommandDTOBase(
            identifier = "${params.identifier}_${UUID.randomUUID()}",
            name = params.name,
            description = params.description,
            hasActivity = emptyArray(),
            hasStep = emptyArray()
        )
        command.invokeWith(activityAggregateService.activityCreate()).identifier
    }

    private fun activityCreateParams(entry: Map<String, String>?) =
        ActivityCreateParams(
            identifier = entry?.get("identifier").orRandom(),
            name = entry?.get("name").orRandom(),
            description = entry?.get("description").orRandom(),

        )

    private data class ActivityCreateParams(
        val identifier: TestContextKey,
        val name: String,
        val description: String,
    )

    private suspend fun createActivities(params: List<ActivityCreateParams>) = coroutineScope {
        params.asFlow().map {
            async {
                createActivity(it)
            }
        }.toList().awaitAll()
    }

    private fun activityAssertParams(entry: Map<String, String>) = ActivityAssertParams(
            identifier = entry["identifier"] ?: context.activityIds.lastUsedKey,
            name = entry["name"],
            description = entry["description"],
            type = entry["type"],
            hasActivity = entry.extractList("hasActivity"),
            hasConcept = entry.extractList("hasConcept"),
            hasEvidenceTypeList = entry.extractList("hasEvidenceTypeList")
        )

    private data class ActivityAssertParams(
        val identifier: TestContextKey,
        val name: String?,
        val description: String?,
        val type: String?,
        val hasActivity: List<TestContextKey>?,
        val hasConcept: List<TestContextKey>?,
        val hasEvidenceTypeList: List<TestContextKey>?
    )
}
