package city.smartb.registry.program.cccev

import cccev.dsl.client.CCCEVClient
import cccev.dsl.model.Requirement
import city.smartb.registry.program.cccev.requirement.EligibilityRequirements
import city.smartb.registry.program.cccev.requirement.ImplementationRequirements
import city.smartb.registry.program.cccev.requirement.LocalConsultationRequirements
import city.smartb.registry.program.cccev.requirement.ReddPlusRequirement
import city.smartb.registry.program.cccev.requirement.VerraVcsRequirement
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.collect
import kotlinx.coroutines.flow.onEach
import kotlinx.coroutines.runBlocking

fun main(): Unit = runBlocking {
//    val url = "https://api.registry.smartb.network/cccev"
    val url = "http://localhost:8083"
    val client = CCCEVClient(url)
    client.createGraph(
        buildList<Requirement> {
            addAll(EligibilityRequirements)
            addAll(ImplementationRequirements)
            addAll(LocalConsultationRequirements)
            addAll(ReddPlusRequirement)
            addAll(VerraVcsRequirement)
        }.asFlow()
    ).onEach {
        println("Created requirement: ${it.identifier}")
    }.collect()
}
