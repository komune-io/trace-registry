import { Node, Position, Edge } from "reactflow"
import { Activity, ActivityId } from "../model";
import { tree, stratify } from "d3-hierarchy"


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

export const getActivitiesOfDinasty = (activities: Activity[], dinasty?: string[]) => {
    if (!dinasty || dinasty.length === 0) return {
        ancestors: undefined,
        activities,
        fixedDynasty: undefined
    }
    let ancestors: Activity[] = []
    for (let i = 0; i < dinasty.length; i++) {
        const activity = activities.find((el) => el.identifier === dinasty[i])
        if (!activity) {
            return {
                ancestors,
                activities: ancestors[ancestors.length - 1]?.hasRequirement ?? activities,
                fixedDynasty: dinasty.slice(0, i)
            }
        }
        ancestors.push(activity)
    }
    return {
        ancestors,
        activities: ancestors[ancestors.length - 1]?.hasRequirement ?? activities,
        fixedDynasty: undefined
    }
}

export const getNodesAnEdgesOfActivities = (activities: Activity[], ancestors: Activity[] | undefined, select: SubActivitySelection): NodesAnEdgesOfActivities => {

    const nodes: Node<ActivityData>[] = toNodes(activities, ancestors ? ancestors[ancestors?.length - 1] : undefined, select)
    const nodesLeveled = nodes.map((node) => ({ name: node.id, parent: ancestors ? ancestors[ancestors.length - 1].identifier : "invisibleParent"}))
    if (!ancestors) nodesLeveled.push({name: "invisibleParent", parent: ""})
    const edges = toEdges(activities, ancestors)
    if (ancestors && ancestors.length > 0) {
        ancestors.forEach((ancestor, index) => {
            nodes.push({
                id: ancestor.identifier,
                data: {
                    current: ancestor,
                    select: select,
                    hasSource: true,
                    hasTarget: index !== ancestors.length - 1,
                    isAncestor: true
                },
                position: {
                    x: 0,
                    y: 0
                },
                type: "Activity",
                sourcePosition: Position.Right,
                targetPosition: Position.Left,
                selectable: false
            })
            nodesLeveled.push({ name: ancestor.identifier, parent: index > 0 ? ancestors[index - 1].identifier : "" })
        })

    }
    const root = stratify<{name: string; parent: string}>()
    .id(function(d) { return d.name; })
    .parentId(function(d) { return d.parent; })
    (nodesLeveled)
    const treeLayout = tree().nodeSize([150, 350])
    //@ts-ignore
    treeLayout(root)
    root.descendants().map((layoutNode) => {
        const index = nodes.findIndex((node) => node.id === layoutNode.id)
        if (index !== -1) {
            //@ts-ignore
            nodes[index] = {...nodes[index], position:{x: layoutNode.y, y: layoutNode.x }}
        }
      })
    return {
        nodes,
        edges
    }
}

export const toNodes = (
    activities: Activity[],
    ancestor: Activity | undefined,
    select: SubActivitySelection,
    level: number = 0,
): Node<ActivityData>[] => {
    const nodes: Node<ActivityData>[] = []

    activities.forEach((obj) => {
        nodes.push({
            id: obj.identifier,
            data: {
                current: obj,
                select: select,
                hasSource: !!obj.hasQualifiedRelation && obj.hasQualifiedRelation.length > 0,
                hasTarget: level !== 0 || !!ancestor,
            },
            position: {
                x: 0,
                y: 0
            },
            type: obj.type || "Activity",
            sourcePosition: !!obj.hasQualifiedRelation && obj.hasQualifiedRelation.length > 0 ? Position.Bottom : undefined,
            targetPosition: level !== 0 ? Position.Top : (ancestor ? Position.Left : undefined),
        })
        if (obj.hasQualifiedRelation) {
            obj.hasQualifiedRelation.forEach((id) => {
                const targetedActivity = activities.find(el => el.identifier === id)
                if (targetedActivity) {
                    nodes.push(...toNodes(activities, undefined, select, level + 1))
                }
            });
        }
    })
    return nodes
}

export const toEdges = (activities: Activity[], ancestors?: Activity[]): Edge[] => {
    const edges: Edge[] = []
    const ancestor = ancestors ? ancestors[ancestors?.length - 1] : undefined
    const currentActivities = ancestor ? ancestor.hasRequirement : activities
    currentActivities.forEach((activity) => {
        if (ancestor) {
            edges.push({
                id: `${ancestor.identifier}-to-${activity.identifier}`,
                source: ancestor.identifier,
                target: activity.identifier,
            })
        }
        activity.hasQualifiedRelation.forEach((id) => {
            edges.push({
                id: `${activity.identifier}-to-${id}`,
                source: activity.identifier,
                target: id,
            })
        })
    })
    if (ancestors && ancestors.length > 1) {
        for (let i = ancestors.length - 1; i > 0; i--) {
            edges.push({
                id: `${ancestors[i].identifier}-to-${ancestors[i + 1].identifier}`,
                source: ancestors[i].identifier,
                target: ancestors[i + 1].identifier,
            })
        }
    }

    return edges
}
