import {city} from "registry-activity-f2-domain"
import {cccev} from "registry-activity-f2-domain"

export type ActivityId = string
export interface Activity extends city.smartb.registry.f2.activity.domain.model.ActivityDTO {}
export interface ActivityStep extends city.smartb.registry.f2.activity.domain.model.ActivityStepDTO {}
export interface Evidence extends cccev.s2.certification.domain.model.EvidenceDTO {}

export const activitiesExample: Activity[] = [
  {
    identifier: "P0",
    name: "P0 - LOI",
    description: "P0 - LOI",
    hasQualifiedRelation: [],
    hasRequirement: [],
    progression: 10
  },
  {
    identifier: "P1",
    name: "P1 - Eligibility",
    description: "P1 - Eligibility",
    hasQualifiedRelation: [],
    progression: 10,
    hasRequirement: [
      {
        identifier: "R1",
        name: "Survey of eligibility",
        description: "Survey of eligibility",
        hasQualifiedRelation: ["R2"],
        hasRequirement: [],
        progression: 10
      },
      {
        identifier: "R2",
        name: "Identification of the project",
        description: "Identification of the project",
        hasQualifiedRelation: ["R3"],
        hasRequirement: [],
        progression: 10
      },
      {
        identifier: "R3",
        name: "First Documentation",
        description: "First Documentation",
        hasQualifiedRelation: ["R4"],
        hasRequirement: [],
        progression: 10
      },
      {
        identifier: "R4",
        name: "First Estimate",
        description: "First Estimate",
        hasQualifiedRelation: ["R5"],
        hasRequirement: [],
        progression: 10
      },
      {
        identifier: "R5",
        name: "Third party audit",
        description: "Third party audit",
        hasQualifiedRelation: ["R6"],
        hasRequirement: [],
        progression: 10
      },
      {
        identifier: "R6",
        name: "Validation",
        description: "Validation",
        hasQualifiedRelation: [],
        hasRequirement: [],
        progression: 10
      }
    ]
  },
  {
    identifier: "P2",
    name: "P2 - Implementation",
    description: "P2 - Implementation",
    hasQualifiedRelation: [],
    hasRequirement: [],
    progression: 10
  }, {
    identifier: "P3",
    name: "P3 - Protocol preparation",
    description: "P3 - Protocol preparation",
    hasQualifiedRelation: [],
    hasRequirement: [],
    progression: 10
  }, {
    identifier: "P4",
    name: "P4 - Protocol validation",
    description: "P4 - Protocol validation",
    hasQualifiedRelation: [],
    hasRequirement: [],
    progression: 10
  }, {
    identifier: "P5",
    name: "P5 - Certification",
    description: "P5 - Certification",
    hasQualifiedRelation: [],
    hasRequirement: [],
    progression: 10
  }
]
