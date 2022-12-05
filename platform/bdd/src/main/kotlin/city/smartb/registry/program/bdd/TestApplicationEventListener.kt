package city.smartb.registry.program.bdd

import f2.dsl.cqrs.Event
import city.smartb.registry.program.bdd.data.TestContext
import org.springframework.context.event.EventListener
import org.springframework.stereotype.Service

@Service
class TestApplicationEventListener(
    private val testContext: TestContext
) {

    @EventListener
    fun onApplicationEvent(event: Event) {
        testContext.events.add(event)
    }
}
