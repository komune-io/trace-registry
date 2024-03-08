package city.smartb.registry.ver.test.f2.dcs.command

import au.com.origin.snapshots.Expect
import cccev.dsl.client.CCCEVClient
import cccev.f2.requirement.domain.model.RequirementDTOBase
import cccev.f2.requirement.domain.query.RequirementGetByIdentifierQueryDTOBase
import city.smartb.registry.api.commons.utils.parseFile
import city.smartb.registry.f2.dcs.api.DcsEndpoint
import city.smartb.registry.f2.dcs.domain.command.DataCollectionStepDefineCommand
import city.smartb.registry.f2.dcs.domain.model.DataCollectionStep
import city.smartb.registry.f2.dcs.domain.query.DataCollectionStepGetQuery
import city.smartb.registry.ver.test.VerCucumberStepsDefinition
import f2.dsl.fnc.invokeWith
import io.cucumber.java8.En
import org.springframework.beans.factory.annotation.Autowired
import kotlin.reflect.jvm.javaMethod

class DcsDefineF2Steps: En, VerCucumberStepsDefinition() {

    @Autowired
    private lateinit var cccevClient: CCCEVClient

    @Autowired
    private lateinit var dcsEndpoint: DcsEndpoint

    init {
        When("I define and fetch a DCS with the scenario {string}") { scenario: String ->
            step {
                val command = parseFile<DataCollectionStepDefineCommand>("classpath:city.smartb.registry.ver.test/f2/dcs/data/${scenario}.json")
                command.invokeWith(dcsEndpoint.dataCollectionStepDefine())
                val savedRequirements = RequirementGetByIdentifierQueryDTOBase(identifier = command.identifier)
                    .invokeWith(cccevClient.requirementClient.requirementGetByIdentifier())
                    .item
                val savedDcs = DataCollectionStepGetQuery(
                    identifier = command.identifier,
                    certificationId = null
                ).invokeWith(dcsEndpoint.dataCollectionStepGet())
                    .structure

                checkSavedRequirements(scenario, savedRequirements)
                checkSavedDCS(scenario, savedDcs)
            }
        }
    }

    private fun checkSavedRequirements(scenario: String, requirement: RequirementDTOBase?) {
        Expect.of(context.snapshotVerifier, ::checkSavedRequirements.javaMethod)
            .scenario(scenario)
            .toMatchSnapshot(requirement)
    }

    private fun checkSavedDCS(scenario: String, dcs: DataCollectionStep) {
        Expect.of(context.snapshotVerifier, ::checkSavedDCS.javaMethod)
            .scenario(scenario)
            .toMatchSnapshot(dcs)
    }
}
