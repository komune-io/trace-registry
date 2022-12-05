package city.smartb.registry.program.bdd.steps.generics

import city.smartb.registry.program.bdd.CucumberStepsDefinition
import city.smartb.registry.program.bdd.data.TestContextKey
import city.smartb.registry.program.bdd.data.parser.keycloak.safeExtractKeycloakEventType
import city.smartb.registry.infra.keycloak.KeycloakEventEndpoint
import i2.keycloak.plugin.domain.model.KeycloakHttpEvent
import io.cucumber.datatable.DataTable
import io.cucumber.java8.En
import kotlinx.coroutines.flow.asFlow
import org.keycloak.events.EventType
import org.springframework.beans.factory.annotation.Autowired
import java.util.UUID

class KeycloakEventPublishSteps: En, CucumberStepsDefinition() {

    @Autowired
    private lateinit var keycloakEventEndpoint: KeycloakEventEndpoint

    init {
        DataTableType(::keycloakEventParams)

        When("A keycloak event is published:") { params: KeycloakEventParams ->
            step {
                publishKeycloakEvent(params)
            }
        }

        When("Some keycloak events are published:") { dataTable: DataTable ->
            step {
                dataTable.asList(KeycloakEventParams::class.java)
                    .forEach { publishKeycloakEvent(it) }
            }
        }
    }

    private suspend fun publishKeycloakEvent(params: KeycloakEventParams) {
        KeycloakHttpEvent(
            id = UUID.randomUUID().toString(),
            time = System.currentTimeMillis(),
            type = params.type,
            realmId = "",
            clientId = "",
            userId = context.userIds[params.user] ?: params.user,
            sessionId = null,
            error = null,
            details = null
        ).let { keycloakEventEndpoint.keycloakEvent().invoke(listOf(it).asFlow()) }
    }

    private fun keycloakEventParams(entry: Map<String, String>) = KeycloakEventParams(
        type = entry.safeExtractKeycloakEventType("type"),
        user = entry["user"] ?: context.userIds.lastUsedKey
    )

    private data class KeycloakEventParams(
        val type: EventType,
        val user: TestContextKey
    )
}
