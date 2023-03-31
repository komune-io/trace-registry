import {city} from "verified-emission-reduction-registry-activity-f2-domain"

export type ActivityId = String
export interface Activity extends city.smartb.registry.program.f2.activity.domain.model.ActivityDTO {}
export interface ActivityStep extends city.smartb.registry.program.f2.activity.domain.model.ActivityStepDTO {}


export const activitiesExample: Activity[] = [
  {
    identifier: "P0",
    name: "P0 - LOI",
    description: "P0 - LOI",
    hasQualifiedRelation: [],
    hasRequirement: [],
  },
  {
    identifier: "P1",
    name: "P1 - Eligibility",
    description: "P1 - Eligibility",
    hasQualifiedRelation: [],
    hasRequirement: [
      {
      identifier: "R1",
      name: "Survey of eligibility",
      description: "Survey of eligibility",
      hasQualifiedRelation: ["R2"],
      hasRequirement: []
      },
      {
        identifier: "R2",
        name: "Identification of the project",
        description: "Identification of the project",
        hasQualifiedRelation: ["R3"],
        hasRequirement: []
      },
      {
        identifier: "R3",
        name: "First Documentation",
        description: "First Documentation",
        hasQualifiedRelation: ["R4"],
        hasRequirement: []
      },
      {
        identifier: "R4",
        name: "First Estimate",
        description: "First Estimate",
        hasQualifiedRelation: ["R5"],
        hasRequirement: []
      },
      {
        identifier: "R5",
        name: "Third party audit",
        description: "Third party audit",
        hasQualifiedRelation: ["R6"],
        hasRequirement: []
      },
      {
        identifier: "R6",
        name: "Validation",
        description: "Validation",
        hasQualifiedRelation: [],
        hasRequirement: [],
      }
    ]
  },
  {
    identifier: "P2",
    name: "P2 - Implementation",
    description: "P2 - Implementation",
    hasQualifiedRelation: [],
    hasRequirement: []
  }, {
    identifier: "P3",
    name: "P3 - Protocol preparation",
    description: "P3 - Protocol preparation",
    hasQualifiedRelation: [],
    hasRequirement: []
  }, {
    identifier: "P4",
    name: "P4 - Protocol validation",
    description: "P4 - Protocol validation",
    hasQualifiedRelation: [],
    hasRequirement: []
  }, {
    identifier: "P5",
    name: "P5 - Certification",
    description: "P5 - Certification",
    hasQualifiedRelation: [],
    hasRequirement: [],
  }
]
