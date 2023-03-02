package city.smartb.registry.program.cccev.ver

import  cccev.dsl.model.informationRequirement

object Methodology {
    val VM0011 = informationRequirement {
        identifier = "VM0011"
        name = "VM0011"
        type = Type.Methodology
        isDerivedFrom {
            +ReferenceFramework.Verra
        }

    }

    val FicherLocalConsultationName = informationRequirement {
        identifier = "FicherLocalConsultationName"
        name = "FicherLocalConsultationName"
        description = ""
        type = Type.Methodology
        isDerivedFrom {
            +ReferenceFramework.LocalConsultation
        }

    }
}
