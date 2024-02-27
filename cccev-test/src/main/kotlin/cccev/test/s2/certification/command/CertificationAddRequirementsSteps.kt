//package cccev.test.s2.certification.command
//
//import cccev.projection.api.entity.certification.CertificationRepositoryOld
//import cccev.s2.certification.api.CertificationAggregateService
//import cccev.s2.certification.domain.command.CertificationAddRequirementsCommand
//import cccev.test.CccevCucumberStepsDefinition
//import cccev.test.s2.certification.data.certification
//import io.cucumber.java8.En
//import kotlinx.coroutines.reactor.awaitSingleOrNull
//import org.assertj.core.api.Assertions
//import org.springframework.beans.factory.annotation.Autowired
//import s2.bdd.assertion.AssertionBdd
//import s2.bdd.data.TestContextKey
//import s2.bdd.data.parser.safeExtractList
//
//class CertificationAddRequirementsSteps: En, CccevCucumberStepsDefinition() {
//
//    @Autowired
//    private lateinit var certificationAggregateService: CertificationAggregateService
//
//    @Autowired
//    private lateinit var certificationRepository: CertificationRepositoryOld
//
//    private lateinit var command: CertificationAddRequirementsCommand
//
//    init {
//        DataTableType(::certificationAddRequirementsParams)
//        DataTableType(::certificationAssertParams)
//
//        When("I add requirements to the certification:") { params: CertificationAddRequirementsParams ->
//            step {
//                addRequirements(params)
//            }
//        }
//
//        Given("Some requirements are added to the certification:") { params: CertificationAddRequirementsParams ->
//            step {
//                addRequirements(params)
//            }
//        }
//
//        Then("The certification should contain the requirements") {
//            step {
//                val certificationId = context.certificationIds.lastUsed
//                AssertionBdd.certification(certificationRepository).assertThatId(certificationId)
//                    .hasRequirements(command.requirementIds)
//            }
//        }
//
//        Then("The certification should contain the requirements:") { params: CertificationAssertParams ->
//            step {
//                val certificationId = context.certificationIds.safeGet(params.identifier)
//                val certification = certificationRepository.findById(certificationId).awaitSingleOrNull()
//                Assertions.assertThat(certification).isNotNull
//
//                AssertionBdd.certification(certificationRepository).assertThatId(certificationId)
//                    .hasRequirements(params.requirements.map(context.requirementIds::safeGet))
//            }
//        }
//    }
//
//    private suspend fun addRequirements(params: CertificationAddRequirementsParams) {
//        command = CertificationAddRequirementsCommand(
//            id = context.certificationIds[params.identifier] ?: params.identifier,
//            requirementIds = params.requirements.map(context.requirementIds::safeGet),
//        )
//        certificationAggregateService.addRequirements(command)
//    }
//
//    private fun certificationAddRequirementsParams(entry: Map<String, String>) = CertificationAddRequirementsParams(
//        identifier = entry["identifier"] ?: context.certificationIds.lastUsedKey,
//        requirements = entry.safeExtractList("requirements")
//    )
//
//    private data class CertificationAddRequirementsParams(
//        val identifier: TestContextKey,
//        val requirements: List<TestContextKey>
//    )
//
//    private fun certificationAssertParams(entry: Map<String, String>) = CertificationAssertParams(
//        identifier = entry["identifier"] ?: context.certificationIds.lastUsedKey,
//        requirements = entry.safeExtractList("requirements")
//    )
//
//    private data class CertificationAssertParams(
//        val identifier: TestContextKey,
//        val requirements: List<TestContextKey>
//    )
//}
