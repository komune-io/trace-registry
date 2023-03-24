import { Stack } from '@mui/material'
import { Handle, NodeProps } from "reactflow"

export const RequirementGroupNode = (props: NodeProps) => {
    const { isConnectable, sourcePosition, data } = props

    return (
        <Stack
            sx={{
                background: "rgba(250, 248, 243, 0.5)",
                border: "2px solid #E0E0E0",
                borderRadius: "16px"
            }}
        >
            {data.children}
            <Handle type="source" position={sourcePosition!} isConnectable={isConnectable} />
        </Stack>
    )
}
