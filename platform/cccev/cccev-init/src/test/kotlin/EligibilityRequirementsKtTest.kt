//import cccev.dsl.model.InformationRequirement
//import cccev.dsl.model.informationRequirement
//import cee.baten101.BAT_EN_101
//import cee.indba116.IND_BA_116
//import city.smartb.registry.program.cccev.eligibilityStep
//import com.fasterxml.jackson.annotation.JsonInclude
//import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
//import kotlinx.serialization.encodeToString
//import kotlinx.serialization.json.Json
//import org.assertj.core.api.Assertions
//import org.junit.jupiter.api.Test
//
//class EligibilityRequirementsKtTest {
//
//    @Test
//    fun eligibilityStepSingleTest() {
//        val mapNumbering = eligibilityStep {
//            identifier = "B102"
//            name = "Map numbering"
//            description = "Assign a number to the project location on the map."
//        }
//
//        Assertions.assertThat(mapNumbering.identifier).isEqualTo("B102")
//        Assertions.assertThat(mapNumbering.name).isEqualTo("Map numbering")
//        Assertions.assertThat(mapNumbering.description).isEqualTo("Assign a number to the project location on the map.")
//    }
//    @Test
//    fun informationRequirementHasEligibilityStepRequirement() {
//        val firstDoc: InformationRequirement = informationRequirement {
//            identifier = "FirstDocumentation"
//            name = "First Documentation"
//            description = "Obtaining the necessary legal and administrative documents for the project."
//            hasRequirement {
//                eligibilityStep {
//                    identifier = "B200"
//                    name = "Notarial Deeds"
//                    description = "Obtaining notarized documents such as articles of incorporation or bylaws."
//                }
//            }
//        }
//
//        Assertions.assertThat(firstDoc.hasRequirement).hasSize(1)
//    }
//
//}
