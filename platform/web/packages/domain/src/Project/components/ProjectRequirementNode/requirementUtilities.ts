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
    current: Requirement,
    selectRequirement: (id: string) => void,
    hasSource?: boolean
    hasTarget?: boolean
    isAncestor?: boolean
}

export type GroupData = {
    children: Node<RequirementData>[]
}

export const requirementsToNodes = (requirements: Requirement[], obj: Requirement, selectRequirement: (id: string) => void, level: number = 0, parentX: number = 0, index: number = 0, siblingNumber?: number): Node<RequirementData>[] => {
    const nodes: Node<RequirementData>[] = []

    const xGap = 260
    const yGap = 150

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
            current: obj,
            selectRequirement,
            hasSource: !!obj.hasQualifiedRelation,
            hasTarget: level !== 0
        },
        position: {
            x: currentX,
            y: level * yGap
        },
        type: "requirement",
        sourcePosition: !!obj.hasQualifiedRelation ? Position.Bottom : undefined,
        targetPosition: level !== 0 ? Position.Top : undefined,
    })
    if (obj.hasQualifiedRelation) {
        obj.hasQualifiedRelation.forEach((id, index) => {
            const targetedRequirement = requirements.find(el => el.id === id)
            if (targetedRequirement) {
                nodes.push(...requirementsToNodes(requirements, targetedRequirement, selectRequirement, level + 1, currentX, index, obj.hasQualifiedRelation?.length! - 1))
            }
        });
    }
    return nodes
}

export const getNodesAnEdgesOfRequirements = (requirements: Requirement[], obj: Requirement, selectRequirement: (id: string) => void) => {
    const nodes: Node<RequirementData>[] = requirementsToNodes(requirements, obj, selectRequirement)
    const edges = requirementsToEdges(requirements, obj)
    const ancestor = requirements.find((el) => el.hasRequirement?.find((id) => obj.id === id))
    console.log(ancestor)
    if (ancestor) {
        // nodes.forEach((el, index) => {
        //     nodes[index] = {
        //         ...el,
        //         parentNode: "requirementGroup"
        //     }
        // })
        // nodes.push({
        //     id: "requirementGroup",
        //     data: {
        //         //@ts-ignore
        //         children: nodes,
        //     },
        //     position: {
        //         x: - 100,
        //         y: - 100
        //     },
        //     type: "group",
        //     sourcePosition: Position.Left,
        // } as Node<GroupData>)
        nodes.push({
            id: ancestor.id,
            data: {
                all: requirements,
                current: ancestor,
                selectRequirement,
                hasSource: true,
                isAncestor: true
            },
            position: {
                x: -300,
                y: (nodes.length / 2) * 120
            },
            type: "requirement",
            sourcePosition: Position.Right,
        })
        nodes[0] = {
            ...nodes[0],
            data: {
                ...nodes[0].data,
                hasTarget: true
            },
            targetPosition: Position.Left
        }
        edges.push({
            id: `${ancestor.id}-to-${nodes[0].id}`,
            source: ancestor.id,
            target: nodes[0].id,
        })
    }
    return  {
        nodes,
        edges
    }
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