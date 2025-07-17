import { Card, CardContent, CardHeader, Typography, styled, IconButton, IconButtonProps, Collapse, CardActions, LinearProgress } from '@mui/material'
import { ExpandMoreRounded } from '@mui/icons-material'
import { Handle, NodeProps, Position } from "reactflow"

import React from 'react'
import { Requirement } from './cccev'

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export const CustomNode = (props: NodeProps<Requirement>) => {
    const { data, isConnectable, targetPosition, sourcePosition } = props
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Card sx={{ maxWidth: 400, border: "2px solid #000000", boxShadow: "unset" }}>
            <CardHeader
                sx={{
                    borderBottom: "1px solid #EEEEEE"
                }}
                title={`${ data.identifier } - ${data.name}`}
                subheader={data.type?.identifier}
                action={
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreRounded />
                    </ExpandMore>
                }
            />
            <CardContent
            sx={{
                padding: expanded ? undefined : "unset"
            }}
            >
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Typography variant="body2" >
                        {data.description}
                    </Typography>
                </Collapse>
            </CardContent>
            <CardActions sx={{
                justifyContent: "flex-end",
                gap: "12px",
                borderTop:  expanded ? "1px solid #EEEEEE" : "unset"
            }} disableSpacing>
                <Typography variant="caption" >
                    Progress
                </Typography>
                <LinearProgress sx={{
                    borderRadius: 10,
                    width: "50px"
                }} variant="determinate" value={50} />
            </CardActions>
            {sourcePosition === Position.Right && <Handle type="source" position={sourcePosition} isConnectable={isConnectable} />}
            {targetPosition === Position.Left && <Handle type="target" position={targetPosition} isConnectable={isConnectable} />}
        </Card>
    )
}
