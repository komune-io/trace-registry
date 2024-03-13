//package cccev.test.s2.requirement.command
//
//import cccev.core.requirement.RequirementAggregateService
//import cccev.core.requirement.command.RequirementAddEvidenceTypeListsCommand
//import cccev.core.requirement.entity.RequirementRepository
//import cccev.test.CccevCucumberStepsDefinition
//import cccev.test.s2.requirement.data.requirement
//import io.cucumber.java8.En
//import org.springframework.beans.factory.annotation.Autowired
//import s2.bdd.assertion.AssertionBdd
//import s2.bdd.data.TestContextKey
//import s2.bdd.data.parser.safeExtractList
//
//class RequirementAddEvidenceTypeListsSteps: En, CccevCucumberStepsDefinition() {
//
//    @Autowired
//    private lateinit var requirementAggregateService: RequirementAggregateService
//
//    @Autowired
//    private lateinit var requirementRepository: RequirementRepository
//
//    private lateinit var command: RequirementAddEvidenceTypeListsCommand
//
//    init {
//        DataTableType(::requirementAddEvidenceTypeListsParams)
//        DataTableType(::requirementAssertParams)
//
//        When("I add evidence type lists to the requirement:") { params: RequirementAddEvidenceTypeListsParams ->
//            step {
//                addEvidenceTypeLists(params)
//            }
//        }
//
//        Given("Some evidence type lists are added to the requirement:") { params: RequirementAddEvidenceTypeListsParams ->
//            step {
//                addEvidenceTypeLists(params)
//            }
//        }
//
//        Then("The requirement should contain the evidence type lists") {
//            step {
//                AssertionBdd.requirement(requirementRepository).assertThatId(command.id)
//                    .hasEvidenceTypeLists(command.evidenceTypeListIds)
//            }
//        }
//
//        Then("The requirement should contain the evidence type lists:") { params: RequirementAssertParams ->
//            step {
//                val requirementId = context.requirementIds.safeGet(params.identifier)
//                val evidenceTypeListIds = params.evidenceTypeLists.map(context.evidenceTypeListIds::safeGet)
//                AssertionBdd.requirement(requirementRepository).assertThatId(requirementId)
//                    .hasEvidenceTypeLists(evidenceTypeListIds)
//            }
//        }
//    }
//
//    private suspend fun addEvidenceTypeLists(params: RequirementAddEvidenceTypeListsParams) {
//        command = RequirementAddEvidenceTypeListsCommand(
//            id = context.requirementIds[params.identifier] ?: params.identifier,
//            evidenceTypeListIds = params.evidenceTypeLists.map { context.evidenceTypeListIds[it] ?: it }
//        )
//        requirementAggregateService.addEvidenceTypeLists(command)
//    }
//
//    private fun requirementAddEvidenceTypeListsParams(entry: Map<String, String>) = RequirementAddEvidenceTypeListsParams(
//        identifier = entry["identifier"] ?: context.requirementIds.lastUsedKey,
//        evidenceTypeLists = entry.safeExtractList("evidenceTypeLists"),
//    )
//
//    private data class RequirementAddEvidenceTypeListsParams(
//        val identifier: TestContextKey,
//        val evidenceTypeLists: List<TestContextKey>
//    )
//
//    private fun requirementAssertParams(entry: Map<String, String>) = RequirementAssertParams(
//        identifier = entry["identifier"] ?: context.requirementIds.lastUsedKey,
//        evidenceTypeLists = entry.safeExtractList("evidenceTypeLists"),
//    )
//
//    private data class RequirementAssertParams(
//        val identifier: TestContextKey,
//        val evidenceTypeLists: List<TestContextKey>
//    )
//}
