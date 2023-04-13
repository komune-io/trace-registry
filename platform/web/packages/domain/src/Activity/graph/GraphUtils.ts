import { Node, Position, Edge } from "reactflow"
import {Activity, ActivityId} from "../model";



type SubActivitySelection = (selected: ActivityId, parent?: ActivityId,) => void

export type ActivityData = {
    current: Activity,
    select: SubActivitySelection,
    hasSource?: boolean
    hasTarget?: boolean
    isAncestor?: boolean
}

export type ActivityDataNode = Node<ActivityData>

interface NodesAnEdgesOfActivities {
    nodes: Node<ActivityData>[]
    edges: Edge[]
}


export const getNodesAnEdgesOfActivities = (activities: Activity[], ancestor: Activity[] | undefined, select: SubActivitySelection): NodesAnEdgesOfActivities => {
    const nodes: Node<ActivityData>[] = toNodes(activities, ancestor, select)
    const edges = toEdges(activities, ancestor)
    if (ancestor) {
        // nodes.forEach((el, index) => {
        //     nodes[index] = {
        //         ...el,
        //         parentNode: "group"
        //     }
        // })
        // //@ts-ignore
        // nodes.push({
        //     id: "group",
        //     position: {
        //         x: 0,
        //         y: 100
        //     },
        //     type: "group",
            
        // })
        nodes.push({
            id: ancestor.identifier,
            data: {
                current: ancestor,
                select: select,
                hasSource: true,
                isAncestor: true
            },
            position: {
                x: -300,
                y: (nodes.length / 2) * 120
            },
            type: "Activity",
            sourcePosition: Position.Right,
        })
    }
    return  {
        nodes,
        edges
    }
}

export const toNodes = (
  activities: Activity[],
  ancestor: Activity | undefined,
  select: SubActivitySelection,
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
    activities.forEach((obj, index) => {
    nodes.push({
        id: obj.identifier,
        data: {
            current: obj,
            select: select,
            hasSource: !!obj.hasQualifiedRelation,
            hasTarget: level !== 0 || !!ancestor,
        },
        position: {
            x: currentX,
            y: (level + 1) * yGap * (index + 1)
        },
        type: obj.type || "Activity",
        sourcePosition: !!obj.hasQualifiedRelation ? Position.Bottom : undefined,
        targetPosition: level !== 0 ? Position.Top : (ancestor ? Position.Left : undefined),
    })
    if (obj.hasQualifiedRelation) {
        obj.hasQualifiedRelation.forEach((id, index) => {
            const targetedActivity = activities.find(el => el.identifier === id)
            if (targetedActivity) {
                nodes.push(...toNodes(activities, undefined, select,level + 1, currentX, index, obj.hasQualifiedRelation?.length! - 1))
            }
        });
    }
    })
    return nodes
}

export const toEdges = (activities: Activity[], obj?: Activity, parentId?: string): Edge[] => {
    const edges: Edge[] = []
    obj?.hasRequirement?.forEach((activity) => {
        edges.push({
            id: `${obj.identifier}-to-${activity.identifier}`,
            source: obj.identifier,
            target: activity.identifier,
        })
    })
    if (parentId && obj) {
        edges.push({
            id: `${parentId}-to-${obj.identifier}`,
            source: parentId,
            target: obj.identifier,
        })
    }
    if (obj && obj.hasQualifiedRelation) {
        obj.hasQualifiedRelation.forEach((id) => {
            const targetedActivity = activities.find(el => el.identifier === id)
            if (targetedActivity) {
                edges.push(...toEdges(activities, targetedActivity, obj.identifier))
            }
        });
    }
    return edges
}
