import { Card, CardContent, CardHeader, Typography, Collapse, CardActions, LinearProgress, Stack } from '@mui/material'
import { ExpandMoreRounded } from '@mui/icons-material'
import { Handle, NodeProps } from "reactflow"
import React, {useCallback, useMemo, useEffect} from 'react'
import { useTranslation } from 'react-i18next'
import {ActivityData} from "../../graph";

export const ActivityGraphNode =  (props: NodeProps<ActivityData>) => {
    const { data, isConnectable, targetPosition, sourcePosition, selected } = props
    const [expanded, setExpanded] = React.useState(data.isAncestor ?? false);
    const { t } = useTranslation()
    const requirement = data.current

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
      if (data.isAncestor) setExpanded(true)
      else setExpanded(false)
    }, [data.isAncestor])
    

    const groupedChildren = useMemo(() => requirement.hasRequirement?.map(el => {
        return (
            <Typography
                key={el.identifier}
                  variant="body2"
                sx={{
                    color: "#697077",
                    textDecoration: "underline",
                    textDecorationColor: "#69707766",
                    cursor: "pointer",
                    "&:hover": {
                        textDecorationColor: "inherit"
                    }
                }}
                onClick={() => data.select(el.identifier, requirement.identifier)}
            >
                {el.name}
            </Typography>
        )
    }), [requirement, data.select])

    const onClickAncestor = useCallback(
        () => {
            if (data.isAncestor) data.select(data.current.identifier)
        },
        [requirement, data.isAncestor, data.select],
    )
    const hasRequirement = useMemo( () => requirement.hasRequirement.length > 0, [requirement.hasRequirement.length])

    return (
        <Card
            sx={{
                maxWidth: 300,
                border: selected ? "2px solid #EDBA27" : "2px solid #F0EDE6",
                boxShadow: selected ? "0px 4px 28px rgba(237, 186, 39, 0.18)" : "unset",
                borderRadius: "12px",
                width: "250px",
                opacity: data.isAncestor ? '0.3' : ''
            }}
            onClick={onClickAncestor}
        >
            <CardHeader
                sx={{
                    borderBottom: "1px solid #EEEEEE",
                    cursor: hasRequirement ? "pointer" : "",
                    "& .MuiCardHeader-action": {
                        alignSelf: "center",
                        paddingLeft: "10px",
                        display: "flex",
                        alignItems: "center"
                    },
                    padding: "10px 12px"
                }}
                onClick={hasRequirement ? handleExpandClick : undefined}
                title={`${requirement.identifier} - ${requirement.name}`}
                titleTypographyProps={{
                    variant: "subtitle2"
                }}
                subheaderTypographyProps={{
                    variant: "body2"
                }}
                action={hasRequirement &&
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
                <Typography variant="body2" >
                    {t("progress")}
                </Typography>
                <LinearProgress sx={{
                    borderRadius: 10,
                    width: "50px"
                }} variant="determinate" value={requirement.progression} />
            </CardActions>
            {data.hasSource && <Handle type="source" position={sourcePosition!} isConnectable={isConnectable} />}
            {data.hasTarget && <Handle type="target" position={targetPosition!} isConnectable={isConnectable} />}
        </Card>
    )
}
