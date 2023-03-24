import { Node, Position, Edge } from "reactflow"

export type Requirement = {
    id: string
    identifier?: string
    name: string
    description?: string
    type?: {
        identifier: string
    }
    group?: boolean
    hasQualifiedRelation?: string[]
    hasRequirement?: string[]
}

export type RequirementData = {
    all: Requirement[],
    current: Requirement
}

export const requirementsToNodes = (requirements: Requirement[], obj: Requirement, level: number = 0, parentX: number = 0, index: number = 0, siblingNumber?: number): Node[] => {
    const nodes: Node[] = []

    const xGap = 250
    const yGap = 200

    let currentX = 0
    if (siblingNumber) {   
        currentX = parentX + (((index) - siblingNumber / 2) * xGap)
    } else {
        currentX = parentX
    }

    nodes.push({
        id: obj.id,
        data: {
            all: requirements,
            current: obj
        },
        position: {
            x: currentX,
            y: level * yGap
        },
        type: "custom",
        sourcePosition: !!obj.hasQualifiedRelation ? Position.Bottom : undefined,
        targetPosition: level !== 0 ? Position.Top : undefined,
    })
    if (obj.hasQualifiedRelation) {
        obj.hasQualifiedRelation.forEach((id, index) => {
            const targetedRequirement = requirements.find(el => el.id === id)
            if (targetedRequirement) {
                nodes.push(...requirementsToNodes(requirements, targetedRequirement, level + 1, currentX, index, obj.hasQualifiedRelation?.length! - 1))
            }
        });
    }
    return nodes
}

export const requirementsToEdges = (requirements: Requirement[], obj: Requirement, parentId?: string): Edge[] => {
    const edges: Edge[] = []
    if (parentId) {
        edges.push({
            id: `${parentId}-to-${obj.id}`,
            source: parentId,
            target: obj.id,
        })
    }
    if (obj.hasQualifiedRelation) {
        obj.hasQualifiedRelation.forEach((id) => {
            const targetedRequirement = requirements.find(el => el.id === id)
            if (targetedRequirement) {
                edges.push(...requirementsToEdges(requirements, targetedRequirement, obj.id))
            }
        });
    }
    return edges
}