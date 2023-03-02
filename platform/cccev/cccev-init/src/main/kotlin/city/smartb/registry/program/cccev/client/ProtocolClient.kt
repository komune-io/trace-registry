package city.smartb.registry.program.cccev.client

import cccev.dsl.client.CCCEVClient
import cccev.dsl.model.Requirement
import city.smartb.registry.program.cccev.EligibilityRequirements
import city.smartb.registry.program.cccev.ImplementationRequirements
import city.smartb.registry.program.cccev.LocalConsultation
import city.smartb.registry.program.cccev.LocalConsultationProtocolPreparationRequirements
import city.smartb.registry.program.cccev.ReddPlusProtocol
import city.smartb.registry.program.cccev.VerraVcsProtocol
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.collect
import kotlinx.coroutines.runBlocking

fun main(): Unit = runBlocking {
//    val client = CCCEVClient("http://localhost:8083")
    val client = CCCEVClient("https://api.registry.smartb.network/cccev")
    client.requirementCreate(
        buildList<Requirement> {
            addAll(EligibilityRequirements)
            addAll(ImplementationRequirements)
            addAll(LocalConsultation)
            addAll(ReddPlusProtocol)
            addAll(VerraVcsProtocol)
        }.asFlow()
    ).collect()

//    client.
}
