package city.smartb.registry.program.cccev.client

import cccev.dsl.client.CCCEVClient
import city.smartb.registry.program.cccev.LocalConsultationProtocolPreparationRequirements
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.collect
import kotlinx.coroutines.runBlocking

fun main(): Unit = runBlocking {
    val client = CCCEVClient("http://localhost:8083")
    client.requirementCreate(LocalConsultationProtocolPreparationRequirements.asFlow()).collect()
}
