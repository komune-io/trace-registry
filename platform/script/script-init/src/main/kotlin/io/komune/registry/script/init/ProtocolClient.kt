//package io.komune.registry.script.init
//
//import cccev.dsl.client.CCCEVClient
//import cccev.dsl.model.Requirement
//import io.komune.registry.script.init.cccev.requirement.EligibilityRequirements
//import io.komune.registry.script.init.cccev.requirement.ImplementationRequirements
//import io.komune.registry.script.init.cccev.requirement.LocalConsultationRequirements
//import io.komune.registry.script.init.cccev.requirement.ReddPlusRequirement
//import io.komune.registry.script.init.cccev.requirement.VerraVcsRequirement
//import io.komune.registry.script.init.cccev.ver.ActivitiesVerraProject
//import io.ktor.client.plugins.HttpTimeout
//import kotlinx.coroutines.flow.asFlow
//import kotlinx.coroutines.flow.onEach
//import kotlinx.coroutines.flow.toList
//
//suspend fun initRequirement(url: String): List<Requirement> {
//    val client = CCCEVClient(url) {
//        install(HttpTimeout) {
//            requestTimeoutMillis = 60000
//        }
//    }
//    return client.graphClient.save(
//        buildList<Requirement> {
//            add(ActivitiesVerraProject)
//            addAll(EligibilityRequirements)
//            addAll(ImplementationRequirements)
//            addAll(LocalConsultationRequirements)
//            addAll(ReddPlusRequirement)
//            addAll(VerraVcsRequirement)
//        }.asFlow()
//    ).onEach {
//        println("Created requirement: ${it}")
//    }.toList()
//}
//
