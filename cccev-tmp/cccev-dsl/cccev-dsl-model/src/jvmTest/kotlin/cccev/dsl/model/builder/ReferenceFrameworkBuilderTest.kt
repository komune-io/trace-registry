package cccev.dsl.model.builder

import cccev.dsl.model.ReferenceFramework
import cccev.dsl.model.constraint
import cccev.dsl.model.criterion
import cccev.dsl.model.informationRequirement
import org.assertj.core.api.Assertions
import org.junit.jupiter.api.Test

class ReferenceFrameworkBuilderTest {

    @Test
    fun informationRequirementReferenceFrameworkBuilderBuilder() {
        val referenceFramework = ReferenceFramework("ReferenceFrameworkInformationRequirement","Reference Framework Information Requirement",)
        val localConsultation = informationRequirement {
            identifier = "LocalConsultation"
            name = "Loc"
            isDerivedFrom {
                +referenceFramework
                +referenceFramework {
                    identifier = "OtherReferenceFrameworkInformationRequirement"
                }
            }
        }

        println(localConsultation)
    }

    @Test
    fun criterionReferenceFrameworkBuilderBuilder() {
        val referenceFramework = ReferenceFramework("ReferenceFrameworkCriterion","Reference Framework Criterion",)
        val localConsultation = criterion {
            identifier = "LocalConsultation"
            name = "Loc"
            isDerivedFrom {
                +referenceFramework
                +referenceFramework {
                    identifier = "OtherReferenceFrameworkInformationRequirement"
                }
            }
        }

        println(localConsultation)
    }
    @Test
    fun criterionBuilder() {
        val referenceFramework = ReferenceFramework("ReferenceFrameworkCriterion","Reference Framework Criterion",)
        val localConsultation = constraint {
            identifier = "LocalConsultation"
            name = "Loc"
            isDerivedFrom {
                +referenceFramework
                +referenceFramework {
                    identifier = "OtherReferenceFrameworkInformationRequirement"
                }
            }
        }

        Assertions.assertThat(localConsultation.isDerivedFrom).hasSize(2).contains(
            referenceFramework,
            ReferenceFramework("OtherReferenceFrameworkInformationRequirement", "Other Reference Framework Information Requirement",)
        )


        println(localConsultation)
    }
}