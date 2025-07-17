import { Node, Position, Edge } from "reactflow"

export type Requirement = {
    identifier?: string
    name: string
    description?: string
    type?: {
        identifier: string
    }
    hasQualifiedRelation?: any[]
    hasRequirement?: Requirement[]
}

export const requirementsToNodes = (obj: Requirement, level: number = 0, parentY: number = 0, index: number = 0, siblingNumber?: number): Node[] => {
    const nodes: Node[] = []

    let currentY = 0
    if (obj.hasRequirement) {
        if (siblingNumber) {
            currentY = ((obj.hasRequirement.length / 2) * 250) + parentY + (((index) - siblingNumber / 2) * 250)
        } else {
            currentY = ((obj.hasRequirement.length / 2) * 250) + parentY
        }
    } else {
        if (siblingNumber) {
            currentY = parentY + (((index) - siblingNumber / 2) * 250)
        } else {
            currentY = parentY
        }
    }

    nodes.push({
        id: obj.identifier ?? obj.name,
        data: obj,
        position: {
            x: level * 500,
            y: currentY
        },
        // type: level === 0 ? 'input' : !obj.hasRequirement ? "output" : undefined,
        type: "custom",
        sourcePosition: !!obj.hasRequirement ? Position.Right : undefined,
        targetPosition: level !== 0 ? Position.Left : undefined,
    })
    if (obj.hasRequirement) {
        obj.hasRequirement.forEach((element, index) => {
            nodes.push(...requirementsToNodes(element, level + 1, currentY, index, obj.hasRequirement?.length))
        });
    }
    return nodes
}

export const requirementsToEdges = (obj: Requirement, parentId?: string): Edge[] => {
    const edges: Edge[] = []
    if (parentId) {
        edges.push({
            id: `${parentId}-to-${obj.identifier ?? obj.name}`,
            source: parentId,
            target: obj.identifier ?? obj.name,
            animated: true,
            type: 'smoothstep',
        })
    }
    if (obj.hasRequirement) {
        obj.hasRequirement.forEach((element) => {
            edges.push(...requirementsToEdges(element, obj.identifier ?? obj.name))
        });
    }
    return edges
}

export const cccev: Requirement = {
    "description": "AxessImpact's Activities",
    "name": "AxessImpact's Activities",
    "hasRequirement": [
        {
            "description": "A preliminary document indicating the intention of the project developers to participate in a VERs project and comply with its requirements.",
            "identifier": "A100",
            "name": "Letter of Intent (LOI)",
            "type": {
                "identifier": "Steps"
            }
        },
        {
            "description": "Conduct an initial assessment of the project to determine if it meets the eligibility criteria.",
            "identifier": "B100",
            "name": "Survey of eligibility",
            "type": {
                "identifier": "Steps"
            }
        },
        {
            "description": "This activity involves identifying the project and its location.",
            "identifier": "IdentificationOfProject",
            "name": "Identification of the project",
            "type": {
                "identifier": "Activities"
            }
        },
        {
            "description": "Obtaining the necessary legal and administrative documents for the project.",
            "identifier": "FirstDocumentation",
            "name": "First Documentation",
            "type": {
                "identifier": "Activities"
            }
        },
        {
            "description": "An initial estimation of the baseline emissions of the project, used as a reference for measuring emissions reductions.",
            "identifier": "B300",
            "name": "First emissions estimate",
            "type": {
                "identifier": "Steps"
            }
        },
        {
            "description": "An independent review of the project's emissions data and reduction claims by a third-party organization to ensure accuracy and credibility.",
            "identifier": "B400",
            "name": "Third-party audit",
            "type": {
                "identifier": "Steps"
            }
        },
        {
            "description": "A formal process of verifying that the project meets the criteria or conditions set out in the project protocol and is eligible to receive certification.",
            "identifier": "B500",
            "name": "Validation",
            "type": {
                "identifier": "Steps"
            }
        },
        {
            "description": "Defining the procedures and guidelines for the project's implementation, including the scope of the project, \nthe methods for measuring emissions, and the requirements for data collection and reporting.",
            "identifier": "C100",
            "name": "Protocol definition",
            "type": {
                "identifier": "Steps"
            }
        },
        {
            "description": "Collecting data on emissions sources and activities related to the project.",
            "identifier": "C200",
            "name": "Data collection",
            "type": {
                "identifier": "Steps"
            }
        },
        {
            "description": "Establishing a communication and information-sharing system between project developers and third-party verifiers.",
            "identifier": "C300",
            "name": "Project interface",
            "type": {
                "identifier": "Steps"
            }
        },
        {
            "description": "Implementing a blockchain-based system for storing and verifying emissions data.",
            "identifier": "C400",
            "name": "Blockchain organization",
            "type": {
                "identifier": "Steps"
            }
        },
        {
            "description": "Using smart protocols to allocate validation keys to project participants based on their level of compliance \nwith project requirements.",
            "identifier": "C500",
            "name": "Allocation of validation keys",
            "type": {
                "identifier": "Steps"
            }
        },
        {
            "description": "Establishing a system for monitoring project activities and emissions reductions over time.",
            "identifier": "C600",
            "name": "Monitoring process",
            "type": {
                "identifier": "Steps"
            }
        },
        {
            "description": "",
            "identifier": "",
            "name": "RedactionDuPIN"
        },
        {
            "description": "This activity involves submitting the Project Idea Note (PIN) to the Ministry for approval and certification.",
            "identifier": "PINSubmission",
            "name": "Submission of the Project Idea Note (PIN) to the Ministry"
        },
        {
            "description": "This activity involves the preparation and revision of the Project Design Document (PDD) for the VCS+CCB certification process.",
            "identifier": "DPVCS+CCB",
            "name": "Draft PDD VCS+CCB"
        },
        {
            "description": "This activity involves submitting the project for validation and verification by the Verra registry.",
            "identifier": "EntréeAuPipelineVerra",
            "name": "Entrée au pipeline Verra"
        },
        {
            "description": "This activity involves the validation process of the Project Design Document (PDD) under the Verified Carbon Standard (VCS) and the Climate, Community and Biodiversity (CCB) Standards.",
            "identifier": "ValidationPDDVCS_CCB",
            "name": "Validation PDD VCS+CCB"
        },
        {
            "description": "This activity involves verifying the emissions reductions claimed in the PDD according to the VCS+CCB standards.",
            "identifier": "VerificationPDDVCS+CCB",
            "name": "Verification PDD VCS+CCB"
        }
    ]
}

export const multiple = [
    {
       "description":"Conduct an initial assessment of the project to determine if it meets the eligibility criteria.",
       "identifier":"B100",
       "name":"Survey of eligibility",
       "type":{
          "identifier":"Steps"
       }
    },
    {
       "description":"This activity involves identifying the project and its location.",
       "identifier":"IdentificationOfProject",
       "name":"Identification of the project",
       "type":{
          "identifier":"Activities"
       }
    },
    {
       "description":"Obtaining the necessary legal and administrative documents for the project.",
       "identifier":"FirstDocumentation",
       "name":"First Documentation",
       "type":{
          "identifier":"Activities"
       }
    },
    {
       "description":"An initial estimation of the baseline emissions of the project, used as a reference for measuring emissions reductions.",
       "identifier":"B300",
       "name":"First emissions estimate",
       "type":{
          "identifier":"Steps"
       }
    },
    {
       "description":"An independent review of the project's emissions data and reduction claims by a third-party organization to ensure accuracy and credibility.",
       "identifier":"B400",
       "name":"Third-party audit",
       "type":{
          "identifier":"Steps"
       }
    },
    {
       "description":"A formal process of verifying that the project meets the criteria or conditions set out in the project protocol and is eligible to receive certification.",
       "identifier":"B500",
       "name":"Validation",
       "type":{
          "identifier":"Steps"
       }
    }
 ]