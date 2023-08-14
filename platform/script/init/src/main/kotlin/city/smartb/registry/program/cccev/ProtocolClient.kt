package city.smartb.registry.program.cccev

import cccev.dsl.client.CCCEVClient
import cccev.dsl.model.Requirement
import city.smartb.registry.program.cccev.cccev.requirement.EligibilityRequirements
import city.smartb.registry.program.cccev.cccev.requirement.ImplementationRequirements
import city.smartb.registry.program.cccev.cccev.requirement.LocalConsultationRequirements
import city.smartb.registry.program.cccev.cccev.requirement.ReddPlusRequirement
import city.smartb.registry.program.cccev.cccev.requirement.VerraVcsRequirement
import city.smartb.registry.program.cccev.cccev.ver.ActivitiesAxess
import city.smartb.registry.program.cccev.cccev.ver.IndicatorsCarbon
import io.ktor.client.plugins.HttpTimeout
import io.ktor.client.plugins.logging.DEFAULT
import io.ktor.client.plugins.logging.LogLevel
import io.ktor.client.plugins.logging.Logger
import io.ktor.client.plugins.logging.Logging
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.collect
import kotlinx.coroutines.flow.onEach
import kotlinx.coroutines.runBlocking

fun main(): Unit = runBlocking {
//    val url = "https://api.registry.smartb.network/cccev"
    val url = "http://localhost:8083"
    initRequirement(url)
}

suspend fun initRequirement(url: String) {
    val client = CCCEVClient(url) {
        install(HttpTimeout) {
            requestTimeoutMillis = 60000
        }
        install(Logging) {
            logger = Logger.DEFAULT
            level = LogLevel.ALL
        }
    }
    client.graphClient.create(
        buildList<Requirement> {
            add(ActivitiesAxess)
            addAll(EligibilityRequirements)
            addAll(ImplementationRequirements)
            addAll(LocalConsultationRequirements)
            addAll(ReddPlusRequirement)
            addAll(VerraVcsRequirement)
        }.asFlow()
    ).onEach {
        println("Created requirement: ${it}")
    }.collect()
}

suspend fun initIndicatorsCarbon(url: String) {
    val client = CCCEVClient(url) {
        install(HttpTimeout) {
            requestTimeoutMillis = 60000
        }
        install(Logging)
    }
    client.graphClient.create(
        buildList<Requirement> {
            add(IndicatorsCarbon)
        }.asFlow()
    ).onEach {
        println("Created requirement: ${it}")
    }.collect()
}
