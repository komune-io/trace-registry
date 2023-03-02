package city.smartb.registry.program.cccev.client

import cccev.dsl.client.CCCEVClient
import cccev.dsl.model.InformationConcept
import cccev.dsl.model.InformationConceptBase
import cccev.dsl.model.Requirement
import cccev.dsl.model.informationRequirement
import city.smartb.registry.program.cccev.EligibilityRequirements
import city.smartb.registry.program.cccev.ImplementationRequirements
import city.smartb.registry.program.cccev.LocalConsultation
import city.smartb.registry.program.cccev.LocalConsultationProtocolPreparationRequirements
import city.smartb.registry.program.cccev.ReddPlusProtocol
import city.smartb.registry.program.cccev.VerraVcsProtocol
import com.fasterxml.jackson.annotation.JsonInclude
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.collect
import kotlinx.coroutines.runBlocking
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import kotlinx.serialization.modules.SerializersModule
import kotlinx.serialization.modules.polymorphic
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper


fun main(): Unit = runBlocking {
//    val client = CCCEVClient("http://localhost:8083")
    val client = CCCEVClient("https://api.registry.smartb.network/cccev")
    val information = informationRequirement {
        name = "AxessImpact's Activities"
        description = "AxessImpact's Activities"
        hasRequirement {
            +EligibilityRequirements
            +ImplementationRequirements
            +LocalConsultation
            +ReddPlusProtocol
            +VerraVcsProtocol
        }
    }
//    val module = SerializersModule {
//        polymorphic(Requirement::class) {
//            subclass(InformationConceptBase::class)
//        }
//    }
    //val json = Json.encodeToString(information)
    val mapper = jacksonObjectMapper().setSerializationInclusion(JsonInclude.Include.NON_NULL)
    println(mapper.writeValueAsString(EligibilityRequirements))
    println(mapper.writeValueAsString(ImplementationRequirements))
    println(mapper.writeValueAsString(LocalConsultation))
    println(mapper.writeValueAsString(ReddPlusProtocol))
    println(mapper.writeValueAsString(VerraVcsProtocol))
    println(mapper.writeValueAsString(information))
}
