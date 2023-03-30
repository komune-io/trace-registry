import { Node, Position, Edge } from "reactflow"
import {Activity} from "../model";

export type ActivityData = {
    all: Activity[],
    current: Activity,
    select: (id: string) => void,
    hasSource?: boolean
    hasTarget?: boolean
    isAncestor?: boolean
}

export type ActivityDataNode = Node<ActivityData>

export const activitiesToNodes = (
  activities: Activity[],
  obj: Activity,
  select: (id: string) => void,
  level: number = 0,
  parentX: number = 0,
  index: number = 0,
  siblingNumber?: number
): Node<ActivityData>[] => {
    const nodes: Node<ActivityData>[] = []

    const xGap = 260
    const yGap = 150

    let currentX = 0
    if (siblingNumber) {
        currentX = parentX + (((index) - siblingNumber / 2) * xGap)
    } else {
        currentX = parentX
    }

    nodes.push({
        id: obj.identifier,
        data: {
            all: activities,
            current: obj,
            select: select,
            hasSource: !!obj.hasQualifiedRelation,
            hasTarget: level !== 0
        },
        position: {
            x: currentX,
            y: level * yGap
        },
        type: obj.type || "requirement",
        sourcePosition: !!obj.hasQualifiedRelation ? Position.Bottom : undefined,
        targetPosition: level !== 0 ? Position.Top : undefined,
    })
    if (obj.hasQualifiedRelation) {
        obj.hasQualifiedRelation.forEach((id, index) => {
            const targetedActivity = activities.find(el => el.identifier === id)
            if (targetedActivity) {
                nodes.push(...activitiesToNodes(activities, targetedActivity, select, level + 1, currentX, index, obj.hasQualifiedRelation?.length! - 1))
            }
        });
    }
    return nodes
}

interface NodesAnEdgesOfActivities {
    nodes: Node<ActivityData>[]
    edges: Edge[]
}

export const getNodesAnEdgesOfActivities = (activities: Activity[], obj: Activity | undefined, select: (id: string) => void): NodesAnEdgesOfActivities => {
    if(obj === undefined) {
        return {
            nodes: [],
            edges: []
        }
    }
    const nodes: Node<ActivityData>[] = activitiesToNodes(activities, obj, select)
    const edges = toEdges(activities, obj)
    const ancestor = activities.find((el) => el.hasRequirement?.find((id) => obj.identifier === id))
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
            id: ancestor.identifier,
            data: {
                all: activities,
                current: ancestor,
                select: select,
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
            id: `${ancestor.identifier}-to-${nodes[0].id}`,
            source: ancestor.identifier,
            target: nodes[0].id,
        })
    }
    return  {
        nodes,
        edges
    }
}

export const toEdges = (activities: Activity[], obj: Activity, parentId?: string): Edge[] => {
    const edges: Edge[] = []
    if (parentId) {
        edges.push({
            id: `${parentId}-to-${obj.identifier}`,
            source: parentId,
            target: obj.identifier,
        })
    }
    if (obj.hasQualifiedRelation) {
        obj.hasQualifiedRelation.forEach((id) => {
            const targetedActivity = activities.find(el => el.identifier === id)
            if (targetedActivity) {
                edges.push(...toEdges(activities, targetedActivity, obj.identifier))
            }
        });
    }
    return edges
}
