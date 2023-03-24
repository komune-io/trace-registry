import { Card, CardContent, CardHeader, Typography, Collapse, CardActions, LinearProgress, Stack } from '@mui/material'
import { ExpandMoreRounded } from '@mui/icons-material'
import { Handle, NodeProps, Position } from "reactflow"
import React, { useMemo } from 'react'
import { RequirementData } from './requirementUtilities'
import { useTranslation } from 'react-i18next'

export const ProjectRequirementNode = (props: NodeProps<RequirementData>) => {
    const { data, isConnectable, targetPosition, sourcePosition, } = props
    const [expanded, setExpanded] = React.useState(false);
    const { t } = useTranslation()
    const requirement = data.current

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const groupedChildren = useMemo(() => requirement.hasRequirement?.map(id => {
        const el = data.all.find(el => el.id === id)
        if (!el) return undefined
        return (
            <Typography variant="body2" color="text.secondary" sx={{ textDecoration: "underline" }} >
                {el.name}
            </Typography>
        )
    }), [data])

    return (
        <Card sx={{ maxWidth: 300, border: "1px solid #EEEEEE", boxShadow: "unset" }}>
            <CardHeader
                sx={{
                    borderBottom: "1px solid #EEEEEE",
                    cursor: requirement.hasRequirement ? "pointer" : "",
                    "& .MuiCardHeader-action": {
                        alignSelf: "center",
                        paddingLeft: "10px"
                    },
                    padding: "12px"
                }}
                onClick={requirement.hasRequirement ? handleExpandClick : undefined}
                title={requirement.name}
                titleTypographyProps={{
                    variant: "subtitle1"
                }}
                subheaderTypographyProps={{
                    variant: "subtitle2"
                }}
                subheader={requirement.type?.identifier}
                action={requirement.hasRequirement &&
                    <ExpandMoreRounded
                        sx={{
                            transform: !expanded ? 'rotate(0deg)' : 'rotate(180deg)',
                            transition: "0.3s"
                        }}
                    />
                }
            />
            {requirement.hasRequirement && <Collapse in={expanded} timeout="auto">
                <CardContent
                    sx={{
                        padding: "10px 12px !important"
                    }}
                >
                    <Stack
                        gap={1}
                    >
                        {groupedChildren}
                    </Stack>
                </CardContent>
            </Collapse>}
            <CardActions sx={{
                justifyContent: "flex-end",
                gap: "12px",
                borderTop: expanded ? "1px solid #EEEEEE" : "unset",
                padding: "8px 12px"
            }} disableSpacing>
                <Typography variant="caption" >
                    {t("progress")}
                </Typography>
                <LinearProgress sx={{
                    borderRadius: 10,
                    width: "50px"
                }} variant="determinate" value={50} />
            </CardActions>
            {sourcePosition === Position.Bottom && <Handle type="source" position={sourcePosition} isConnectable={isConnectable} />}
            {targetPosition === Position.Top && <Handle type="target" position={targetPosition} isConnectable={isConnectable} />}
        </Card>
    )
}
