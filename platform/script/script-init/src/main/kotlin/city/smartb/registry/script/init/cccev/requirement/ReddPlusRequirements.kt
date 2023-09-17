package city.smartb.registry.script.init.cccev.requirement

import cccev.dsl.model.XSDString
import cccev.dsl.model.builder.InformationConceptBuilder
import cccev.dsl.model.builder.InformationConceptListBuilder
import cccev.dsl.model.builder.InformationRequirementBuilder
import city.smartb.registry.program.f2.activity.domain.model.RequirementType
import city.smartb.registry.script.init.cccev.ver.Activities
import city.smartb.registry.script.init.cccev.ver.Methodology
import city.smartb.registry.script.init.cccev.ver.ReferenceFramework

fun InformationConceptListBuilder.reddPlusProtocolStep(init: InformationConceptBuilder.() -> Unit) =
    +InformationConceptBuilder().apply {
        type = RequirementType.Step
        unit = XSDString
    }.apply(init).build()

fun reddPlusProtocolPreparationActivity(init: InformationRequirementBuilder.() -> Unit) =
    InformationRequirementBuilder().apply {
        isRequirementOf {
            +Activities.ProtocolPreparation
            +Methodology.VM0011
        }
        isDerivedFrom {
            +ReferenceFramework.REDDPlus
        }
        type = RequirementType.Activity
    }.apply(init).build()

fun reddPlusProtocolValidationActivity(init: InformationRequirementBuilder.() -> Unit) =
    InformationRequirementBuilder().apply {
        isRequirementOf {
            +Activities.ProtocolValidation
            +Methodology.VM0011
        }
        isDerivedFrom {
            +ReferenceFramework.REDDPlus
        }
        type = RequirementType.Activity
    }.apply(init).build()

fun reddPlusProtocolCertificationActivity(init: InformationRequirementBuilder.() -> Unit) =
    InformationRequirementBuilder().apply {
        isRequirementOf {
            +Activities.Certification
            +Methodology.VM0011
        }
        isDerivedFrom {
            +ReferenceFramework.REDDPlus
        }
        type = RequirementType.Activity
    }.apply(init).build()


val RedactionDuPIN = reddPlusProtocolPreparationActivity {
    identifier = "E10"
    name = "Redaction Du PIN"
    description = ""
    hasConcept {
        reddPlusProtocolStep {
            identifier = "E100"
            name = "Document PA/SE"
            description =
                "Obtaining and analyzing relevant documents, such as the Protected Area (PA) or Sustainable Forest Management (SE) plans, to determine the scope of the project area and the legal framework for project implementation."
        }
        reddPlusProtocolStep {
            identifier = "E101"
            name = "Cartography"
            description =
                "Mapping the project area and identifying the location and boundaries of forests, as well as other land uses such as agriculture, settlements, and infrastructure."
        }
        reddPlusProtocolStep {
            identifier = "E102"
            name = "Local Consultation"
            description =
                "Engaging with local communities and stakeholders to understand the historical and current land use practices and to gather information on the drivers of deforestation and forest degradation."
        }
        reddPlusProtocolStep {
            identifier = "E103"
            name = "Legality"
            description =
                "Analyzing the legal and regulatory framework governing the project area to assess compliance with relevant laws, regulations, and standards."
        }
        reddPlusProtocolStep {
            identifier = "E104"
            name = "Forest Inventories"
            description =
                "Conducting field inventories to determine the type, age, and density of forests, as well as the presence of degraded or secondary forests."
        }
        reddPlusProtocolStep {
            identifier = "E105"
            name = "Coefficients, Indicators, and Parameters"
            description =
                "Developing and selecting appropriate coefficients, indicators, and parameters to estimate carbon stocks, emissions, and the effects of different land use practices on carbon dynamics."
        }
        reddPlusProtocolStep {
            identifier = "E106"
            name = "Degradation"
            description =
                "Identifying and quantifying the drivers and extent of forest degradation, as well as the potential for restoration and rehabilitation."
        }
        reddPlusProtocolStep {
            identifier = "E107"
            name = "Regeneration"
            description =
                "Assessing the potential for natural regeneration of forests, as well as the potential for reforestation or afforestation."
        }
        reddPlusProtocolStep {
            identifier = "E108"
            name = "Harvesting Activity"
            description =
                "Assessing the level and type of current and past forest harvesting activities, as well as the potential for sustainable forest management practices."
        }
        reddPlusProtocolStep {
            identifier = "E109"
            name = "Unplanned Exploitation"
            description =
                "Assessing the extent and impact of unplanned forest exploitation and illegal logging, as well as the potential for addressing these practices through project interventions."
        }
        reddPlusProtocolStep {
            identifier = "E110"
            name = "Regeneration anihilated under baseline"
            description =
                "Assessing the potential for regeneration under the baseline scenario, and determining the impact of project activities on regeneration rates."
        }
        reddPlusProtocolStep {
            identifier = "E111"
            name = "Project Activities"
            description =
                "Identifying and assessing the potential impact of project activities, such as alternative livelihoods, sustainable land use practices, and conservation interventions, on carbon stocks and emissions."
        }
        reddPlusProtocolStep {
            identifier = "E112"
            name = "Non-Planned Exploitation"
            description = "Prevention and mitigation of unauthorized extraction of natural resources outside of the planned or permitted activities of a project, which can have negative environmental and social impacts."
        }
    }
}


val RedactionDuPINAuMinistere = reddPlusProtocolValidationActivity {
    identifier = "E20"
    name = "Redaction of the Project Idea Note (PIN) to the Ministry"
    description =
        "This activity involves submitting the Project Idea Note (PIN) to the Ministry for approval and certification."
    hasConcept {
        reddPlusProtocolStep {
            identifier = "E200"
            name = "Submission of the Project Idea Note (PIN) to the Ministry"
            description =
                "This activity involves submitting the Project Idea Note (PIN) to the Ministry for approval and certification."
        }
        reddPlusProtocolStep {
            identifier = "E201"
            name = "Proof of payment"
            description = "Provide evidence of payment of any applicable fees related to the submission of the PIN."
        }
        reddPlusProtocolStep {
            identifier = "E202"
            name = "Receipt of PIN"
            description = "Obtain an acknowledgment of receipt of the PIN from the Ministry."
        }
        reddPlusProtocolStep {
            identifier = "E203"
            name = "Approval letter"
            description = "Receive a letter from the Ministry indicating approval of the PIN."
        }
    }
}
val DepotDuPINAuMinistere = reddPlusProtocolCertificationActivity {
    identifier = "E30"
    name = "Submission of the Project Idea Note (PIN) to the Ministry"
    description =
        "This activity involves submitting the Project Idea Note (PIN) to the Ministry for approval and certification."
    hasConcept {
        reddPlusProtocolStep {
            identifier = "E300"
            name = "Certification"
            description = "Obtain a certificate of approval or homologation from the Ministry."
        }
    }
}

val ReddPlusRequirement = buildList {
    add(RedactionDuPIN)
    add(RedactionDuPINAuMinistere)
    add(DepotDuPINAuMinistere)
}
