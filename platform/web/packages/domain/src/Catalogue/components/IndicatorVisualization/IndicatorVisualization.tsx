import { RichtTextEditor, useRoutesDefinition } from 'components'
import { useMemo } from 'react'
import { Divider, Stack, Typography } from '@mui/material'
import { InformationConcept, parseRangeValue } from '../../model'
import { formatNumber, Link } from '@komune-io/g2'
import { TFunction } from 'i18next'
import { useTranslation } from 'react-i18next'
import { Link as RouterLink, LinkProps } from 'react-router-dom'
import { extractCatalogueIdentifierNumber, useEntityRefGetQuery } from '../../api'

export interface IndicatorVisualizationProps {
    title?: string
    indicators: InformationConcept[]
    referenceId?: string
}

export const IndicatorVisualization = (props: IndicatorVisualizationProps) => {
    const { title, indicators, referenceId } = props
    const { t, i18n } = useTranslation()
    const { cataloguesAll } = useRoutesDefinition()

    const markdown = useMemo(() => indicatorsToMarkdownString(indicators, t, i18n.language), [indicators])

    const ref = useEntityRefGetQuery({
        query: {
            id: referenceId!,
            language: i18n.language,
            type: "CATALOGUE"
        },
        options: {
            enabled: !!referenceId
        }
    }).data?.item

    const relatedTitle = useMemo(() => {
        if (!ref) return undefined
        const identifier = extractCatalogueIdentifierNumber(ref.identifier)
        return `Solution ${identifier ? identifier : ""} - ${ref.name}`
    }, [ref])

    return (
        <Stack
            gap={2}
        >
            <Stack
                gap={1}
            >
                <Stack
                    gap={1}
                    direction="row"
                    alignItems="center"
                >
                   {title && <Typography
                    variant='h6'
                    >
                        {title}
                    </Typography>}
                    {referenceId && relatedTitle ?
                        <Link<LinkProps>
                            variant="subtitle1"
                            component={RouterLink}
                            componentProps={{
                                to: cataloguesAll(referenceId)
                            }}
                        >
                            {relatedTitle}
                        </Link>
                        : undefined
                    }
                </Stack>
                <Divider
                />
            </Stack>
            < RichtTextEditor markdown={markdown} readOnly />
        </Stack>
    )
}

export const formatInformationConceptValue = (infoConcept: InformationConcept, t: TFunction, language: string) => {
    const type = infoConcept.unit.leftUnit?.type
    let value = ""
    if (infoConcept.isRange) {
        const range = parseRangeValue(infoConcept.value ?? "")
        const from = range[0]
        const to = range[1]
        if (from && to) {
            value = t("fromTo", { from: formatNumber(from, language), to: formatNumber(to, language) })
        } else if (from) {
            value = t("minimum", { min: formatNumber(from, language) })
        } else if (to) {
            value = t("maximum", { max: formatNumber(to, language) })
        }
    } else if (type === "NUMBER") {
        value = formatNumber(Number(infoConcept.value), language)
    } else {
        value = infoConcept.value ?? ""
    }
    if (type !== "STRING") {
        const unit = infoConcept.unit
        value += ` ${unit?.leftUnit?.abbreviation ?? unit?.leftUnit?.name ?? ""} ${unit.rightUnit ? "/ " + (unit.rightUnit?.abbreviation ?? unit?.rightUnit?.name ?? "") : ""}`
    }
    return value
}

const infoConceptsToMarkdownListItem = (indicators: InformationConcept[], t: TFunction, language: string) => {
    if (indicators.length === 1) {
        return `- ${indicators[0].name}: ${formatInformationConceptValue(indicators[0], t, language)} ${indicators[0].valueDescription ? indicators[0].valueDescription : ""}`
    } else {
        return `\n\n**${indicators[0].name}**\n ${indicators.map((indicator) => `- ${formatInformationConceptValue(indicator, t, language)} ${indicators[0].valueDescription ? indicators[0].valueDescription : ""}`).join("\n")}`
    }
}

const indicatorsToMarkdownString = (indicators: InformationConcept[], t: TFunction, language: string) => {
    const indicatorsByIdentifier = indicators.reduce((acc, indicator) => {
        const identifier = indicator.identifier
        if (!acc[identifier]) {
            acc[identifier] = []
        }
        acc[identifier].push(indicator)
        return acc
    }, {} as Record<string, InformationConcept[]>)

    const indicatorsSorted = Object.values(indicatorsByIdentifier).sort((a, b) => a.length > b.length ? 1 : a.length === b.length ? 0 : -1)

    let markdown = "===COL===\n\n"
    markdown += `---50---\n\n`
    markdown += `### ${t("cost")}\n\n`

    markdown += indicatorsSorted.map((indicators) => {
        if (indicators[0].themes[0].identifier === "indicator-cost") {
            return infoConceptsToMarkdownListItem(indicators, t, language)
        }
        return ""
    }).join("\n")

    markdown += `\n\n---50---\n\n`
    markdown += `### ${t("gain")}\n\n`

    markdown += indicatorsSorted.map((indicators) => {
        if (indicators[0].themes[0].identifier === "indicator-gain") {
            return infoConceptsToMarkdownListItem(indicators, t, language)
        }
        return ""
    }).join("\n")

    markdown += `===/COL===`

    return markdown
}
