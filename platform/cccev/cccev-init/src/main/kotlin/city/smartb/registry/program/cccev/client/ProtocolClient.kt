package city.smartb.registry.program.cccev.client

import cccev.dsl.client.CCCEVClient
import cccev.dsl.model.Requirement
import city.smartb.registry.program.cccev.EligibilityRequirements
import city.smartb.registry.program.cccev.ImplementationRequirements
import city.smartb.registry.program.cccev.LocalConsultationRequirements
import city.smartb.registry.program.cccev.ReddPlusRequirement
import city.smartb.registry.program.cccev.VerraVcsRequirement
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.collect
import kotlinx.coroutines.runBlocking

fun main(): Unit = runBlocking {
    val url = "https://api.registry.smartb.network/cccev"
    val client = CCCEVClient(url)
    client.requirementCreate(
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
