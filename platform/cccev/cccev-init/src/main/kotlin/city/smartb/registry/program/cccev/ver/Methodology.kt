package city.smartb.registry.program.cccev.ver

import  cccev.dsl.model.informationRequirement

object Methodology {
    val VM0011 = informationRequirement {
        identifier = "VM0011"
        name = "VM0011"
        type = Type.Methodology
        isDerivedFrom {
            +ReferenceFramework.Verra
            +ReferenceFramework.REDDPlus
        }
    }
    val LOI = informationRequirement {
        identifier = "P0"
        name = "LOI"
    }
    val Eligibility = informationRequirement {
        identifier = "P1"
        name = "Eligibility"
    }
    val FicheLocalConsultation = informationRequirement {
        identifier = "LocalConsultation"
        name = "Local Consultation"
        description = """
            Local consultation is a process that involves engaging and consulting with local communities
            and stakeholders in decision-making processes related to REDD+ initiatives.
            The purpose of local consultation is to ensure that the voices, needs, and interests of local communities
            and stakeholders are taken into account in the design and implementation of REDD+ projects.
            """
        type = Type.Methodology
        isDerivedFrom {
            +ReferenceFramework.REDDPlus
        }
    }
}
