package city.smartb.registry.program.ver.test.f2.activity.query


import city.smartb.registry.program.f2.activity.api.ActivityEndpoint
import city.smartb.registry.program.f2.activity.domain.model.ActivityDTO
import city.smartb.registry.program.f2.activity.domain.query.ActivityPageQuery
import city.smartb.registry.program.ver.test.VerCucumberStepsDefinition
import f2.dsl.fnc.invokeWith
import io.cucumber.datatable.DataTable
import io.cucumber.java8.En
import org.assertj.core.api.Assertions
import org.springframework.beans.factory.annotation.Autowired
import s2.bdd.data.TestContextKey
import s2.bdd.data.parser.safeExtract

class ActivityPageSteps: En, VerCucumberStepsDefinition() {

    @Autowired
    private lateinit var activityEndpoint: ActivityEndpoint

    private lateinit var activityPage: Collection<ActivityDTO>

    init {
        DataTableType(::activityPageParam)
        DataTableType(::activityAssertParams)

        When("I fetch page of activities") {
            step {
                fetchActivity(activityPageParam(emptyMap()))
            }
        }

        When("I fetch page of activities:") { params: ActivityPageParams ->
            step {
                fetchActivity(params)
            }
        }

        Then("I should receive activities:") { dataTable: DataTable ->
            step {
                dataTable.asList(ActivityPageAssertParams::class.java)
                    .let(::assertActivity)
            }
        }

        Then("I should not receive activities:") { dataTable: DataTable ->
            step {
                dataTable.asList(ActivityPageAssertParams::class.java)
                    .let(::assertNotActivity)
            }
        }

        Then("I should not receive any activities") {
            step {
                assertActivity(emptyList())
            }
        }
    }

    private suspend fun fetchActivity(params: ActivityPageParams) {
        activityPage = ActivityPageQuery(
            limit = params.limit,
            offset = params.offset,
            projectId = params.projectId
        ).invokeWith(activityEndpoint.activityPage()).items
    }

    private fun assertNotActivity(params: Collection<ActivityPageAssertParams>) {
        val paramsMap = params.associateBy { context.activityIds.get(it.identifier) }

        Assertions.assertThat(activityPage).allSatisfy { provider ->
            val providerParams = paramsMap[provider.identifier]
            Assertions.assertThat(providerParams).withFailMessage("Activity[${provider.identifier}] should not be returns").isNull()
        }
    }
    private fun assertActivity(params: Collection<ActivityPageAssertParams>) {
        val paramsMap = params.associateBy { context.activityIds.safeGet(it.identifier) }

        Assertions.assertThat(activityPage).hasSameSizeAs(params)
        Assertions.assertThat(activityPage).allSatisfy { provider ->
            val providerParams = paramsMap[provider.identifier]
            Assertions.assertThat(providerParams).isNotNull
            providerParams!!.name?.let { Assertions.assertThat(provider.name).isEqualTo(it) }
        }
    }

    private fun activityPageParam(entry: Map<String, String>) = ActivityPageParams(
        limit = entry["limit"]?.toInt(),
        offset = entry["offset"]?.toInt(),
        projectId = entry["projectId"].orRandom(),
    )

    private fun activityAssertParams(entry: Map<String, String>) = ActivityPageAssertParams(
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

    private data class ActivityPageParams(
        val limit: Int?,
        val offset: Int?,
        val projectId: String,
    )

    private data class ActivityPageAssertParams(
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
