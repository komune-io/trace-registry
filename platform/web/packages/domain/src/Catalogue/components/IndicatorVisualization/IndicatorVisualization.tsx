import { Accordion, RichtTextEditor} from 'components'
import { useMemo } from 'react'
import { Typography } from '@mui/material'
import { InformationConcept, parseRangeValue } from '../../model'
import { formatNumber } from '@komune-io/g2'
import { TFunction } from 'i18next'
import { useTranslation } from 'react-i18next'

export interface IndicatorVisualizationProps {
    indicators: InformationConcept[]
}

export const IndicatorVisualization = (props: IndicatorVisualizationProps) => {
    const { indicators } = props
    const {t, i18n} = useTranslation()

    const markdown = useMemo(() => indicatorsToMardownString(indicators, t, i18n.language), [indicators])

    return (
        <Accordion
            size="small"
            summary={
                <Typography
                    variant='h6'
                >
                    {t("previsualization")}
                </Typography>
            }
            defaultExpanded
        >
            <RichtTextEditor markdown={markdown} readOnly />
        </Accordion>
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

const indicatorsToMardownString = (indicators: InformationConcept[], t: TFunction, language: string) => {
    return indicators.map((indicator) => {
        return `- ${indicator.name}: ${formatInformationConceptValue(indicator, t, language)}`
    }).join("\n")
}
