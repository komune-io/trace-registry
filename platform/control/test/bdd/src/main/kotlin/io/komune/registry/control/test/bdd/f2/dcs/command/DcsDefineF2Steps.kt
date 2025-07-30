//package io.komune.registry.control.test.bdd.f2.dcs.command
//
//import au.com.origin.snapshots.Expect
//import cccev.dsl.client.CCCEVClient
//import cccev.dsl.client.model.unflatten
//import cccev.dsl.model.Requirement
//import cccev.f2.requirement.query.RequirementGetByIdentifierQuery
//import f2.dsl.fnc.invokeWith
//import io.cucumber.java8.En
//import io.komune.registry.api.commons.utils.parseFile
//import io.komune.registry.control.test.bdd.VerCucumberStepsDefinition
//import io.komune.registry.f2.dcs.api.DcsEndpoint
//import io.komune.registry.f2.dcs.domain.command.DataCollectionStepDefineCommand
//import io.komune.registry.f2.dcs.domain.model.DataCollectionStep
//import io.komune.registry.f2.dcs.domain.query.DataCollectionStepGetQuery
//import kotlin.reflect.jvm.javaMethod
//import org.springframework.beans.factory.annotation.Autowired
//
//class DcsDefineF2Steps: En, VerCucumberStepsDefinition() {
//
//    @Autowired
//    private lateinit var cccevClient: CCCEVClient
//
//    @Autowired
//    private lateinit var dcsEndpoint: DcsEndpoint
//
//    init {
//        When("I define and fetch a DCS with the scenario {string}") { scenario: String ->
//            step {
//                val command = parseFile<DataCollectionStepDefineCommand>(
//                    "classpath:io.komune.registry.control.test.bdd/f2/dcs/data/${scenario}.json"
//                )
//                command.invokeWith(dcsEndpoint.dataCollectionStepDefine())
//                val savedRequirements = RequirementGetByIdentifierQuery(identifier = command.identifier)
//                    .invokeWith(cccevClient.requirementClient.requirementGetByIdentifier())
//                    .unflatten()
//                val savedDcs = DataCollectionStepGetQuery(
//                    identifier = command.identifier,
//                    certificationId = null
//                ).invokeWith(dcsEndpoint.dataCollectionStepGet())
//                    .structure
//
//                checkSavedRequirements(scenario, savedRequirements)
//                checkSavedDCS(scenario, savedDcs)
//            }
//        }
//    }
//
//    private fun checkSavedRequirements(scenario: String, requirement: Requirement?) {
//        Expect.of(context.snapshotVerifier, ::checkSavedRequirements.javaMethod)
//            .scenario(scenario)
//            .toMatchSnapshot(requirement)
//    }
//
//    private fun checkSavedDCS(scenario: String, dcs: DataCollectionStep) {
//        Expect.of(context.snapshotVerifier, ::checkSavedDCS.javaMethod)
//            .scenario(scenario)
//            .toMatchSnapshot(dcs)
//    }
//}
