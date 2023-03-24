import { Box, Stack } from '@mui/material'
import { Project } from '../../model'
import { useNodesState, useEdgesState, ReactFlow, Background } from "reactflow"
import 'reactflow/dist/style.css';
import { ProjectRequirementNode, Requirement, getNodesAnEdgesOfRequirements } from '../ProjectRequirementNode';
import { ActivitiesSummary } from './ActivitiesSummary';
import { useCallback, useEffect, useState } from 'react';

export interface ProjectActivitiesProps {
    project?: Project
    isLoading?: boolean
}

const nodeTypes = {
    requirement: ProjectRequirementNode
};

export const ProjectActivities = (props: ProjectActivitiesProps) => {
    const { isLoading, project} = props
    const [baseRequirement, setBaseRequirement] = useState(requirements[0])

    const selectRequirement = useCallback(
      (id: string) => {
        const requirement = requirements.find((el) => el.id === id)
        if (requirement) setBaseRequirement(requirement)
      },
      [],
    )
    
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    useEffect(() => {
        const res = getNodesAnEdgesOfRequirements(requirements, baseRequirement, selectRequirement)
        setNodes(res.nodes)
        setEdges(res.edges)
    }, [baseRequirement, selectRequirement])
    
    return (
        <Stack
            direction="row"
            sx={{
                height: "calc(100vh - 200px)",
                minHeight: "fit-content"
            }}
        >
            <Box
                sx={{
                    flexGrow: 1,
                    flexBasis: 0,
                    height: "100%"
                }}
            >
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    nodeTypes={nodeTypes}
                    fitView
                    attributionPosition="bottom-left"
                    style={{
                        background: "#F0EDE6"
                    }}
                >
                    <Background color={"#9E9E9E"} />
                </ReactFlow>
            </Box>
            <ActivitiesSummary isLoading={isLoading} project={project}/>
        </Stack>
    )
}

export const requirements: Requirement[] = [
    {
        id: "P0",
        name: "P0 - LOI",
        hasQualifiedRelation: ["P1"],
    },
    {
        id: "P1",
        name: "P1 - Eligibility",
        hasQualifiedRelation: ["P2", "P3"],
        hasRequirement: ["R1", "R2", "R3", "R4", "R5", "R6"]
    },
    {
        id: "P2",
        name: "P2 - Implementation",
        hasQualifiedRelation: ["P4"]
    }, {
        id: "P3",
        name: "P3 - Protocol preparation",
        hasQualifiedRelation: ["P5"]
    }, {
        id: "P4",
        name: "P4 - Protocol validation",
        hasQualifiedRelation: ["P5"]
    }, {
        id: "P5",
        name: "P5 - Certification",
    }, {
        id: "R1",
        name: "Survey of eligibility",
        hasQualifiedRelation: ["R2"]
    },
    {
        id: "R2",
        name: "Identification of the project",
        hasQualifiedRelation: ["R3"]
    },
    {
        id: "R3",
        name: "First Documentation",
        hasQualifiedRelation: ["R4"]
    },
    {
        id: "R4",
        name: "First Estimate",
        hasQualifiedRelation: ["R5"]
    },
    {
        id: "R5",
        name: "Third party audit",
        hasQualifiedRelation: ["R6"]
    },
    {
        id: "R6",
        name: "Validation",
    }

]
