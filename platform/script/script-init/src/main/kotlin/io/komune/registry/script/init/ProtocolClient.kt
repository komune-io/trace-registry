package io.komune.registry.script.init

import cccev.dsl.client.CCCEVClient
import cccev.dsl.model.Requirement
import io.komune.registry.script.init.cccev.requirement.EligibilityRequirements
import io.komune.registry.script.init.cccev.requirement.ImplementationRequirements
import io.komune.registry.script.init.cccev.requirement.LocalConsultationRequirements
import io.komune.registry.script.init.cccev.requirement.ReddPlusRequirement
import io.komune.registry.script.init.cccev.requirement.VerraVcsRequirement
import io.komune.registry.script.init.cccev.ver.ActivitiesAxess
import io.komune.registry.script.init.cccev.ver.IndicatorsCarbon
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
//    val url = "https://api.registry.komune.io/cccev"
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
    client.graphClient.save(
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
    client.graphClient.save(
        buildList<Requirement> {
            add(IndicatorsCarbon)
        }.asFlow()
    ).onEach {
        println("Created requirement: ${it}")
    }.collect()
}
