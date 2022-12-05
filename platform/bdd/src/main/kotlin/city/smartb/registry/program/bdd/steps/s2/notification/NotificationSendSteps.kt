package city.smartb.registry.program.bdd.steps.s2.notification

import city.smartb.registry.program.bdd.CucumberStepsDefinition
import city.smartb.registry.program.bdd.assertion.AssertionBdd
import city.smartb.registry.program.bdd.assertion.events
import city.smartb.registry.program.bdd.data.TestContextKey
import city.smartb.registry.program.bdd.data.parser.notification.NotificationPayloadParser
import city.smartb.registry.program.bdd.data.parser.notification.safeExtractNotificationType
import city.smartb.registry.program.bdd.data.parser.safeExtractList
import city.smartb.registry.program.s2.notification.domain.command.NotificationSentEvent
import city.smartb.registry.program.s2.notification.domain.model.NotificationType
import io.cucumber.datatable.DataTable
import io.cucumber.java8.En
import org.springframework.beans.factory.annotation.Autowired

class NotificationSendSteps: En, CucumberStepsDefinition() {

    @Autowired
    private lateinit var notificationPayloadParser: NotificationPayloadParser

    init {
        DataTableType(::notificationAssertParams)

        Then("A notification should have been sent:") { params: NotificationAssertParams ->
            step {
                assertNotificationSent(params)
            }
        }

        Then("Some notifications have been sent:") { dataTable: DataTable ->
            step {
                dataTable.asList(NotificationAssertParams::class.java)
                    .forEach { assertNotificationSent(it) }
            }
        }

        Then("A notification should not have been sent:") { params: NotificationAssertParams ->
            step {
                assertNotificationNotSent(params)
            }
        }

        Then("Some notifications have not been sent:") { dataTable: DataTable ->
            step {
                dataTable.asList(NotificationAssertParams::class.java)
                    .forEach { assertNotificationNotSent(it) }
            }
        }
    }

    private fun assertNotificationSent(params: NotificationAssertParams) {
        AssertionBdd.events(context).assertThat(NotificationSentEvent::class)
            .hasBeenSent { notification -> params.matches(notification) }
    }

    private fun assertNotificationNotSent(params: NotificationAssertParams) {
        AssertionBdd.events(context).assertThat(NotificationSentEvent::class)
            .hasNotBeenSent { notification -> params.matches(notification) }
    }

    private fun NotificationAssertParams.matches(event: NotificationSentEvent): Boolean {
        val receivers = this.receivers.map(context.userIds::safeGet)
        return event.type == type
                && event.receivers.size == receivers.size
                && event.receivers.containsAll(receivers)
                && event.payload == payload
    }

    private fun notificationAssertParams(entry: Map<String, String>): NotificationAssertParams {
        val type = entry.safeExtractNotificationType("type")
        return NotificationAssertParams(
            type = type,
            receivers = entry.safeExtractList("receivers"),
            payload = notificationPayloadParser.extractNotificationPayload(entry, type),
        )
    }

    data class NotificationAssertParams(
        val type: NotificationType,
        val receivers: Collection<TestContextKey>,
        val payload: Any?
    )
}
