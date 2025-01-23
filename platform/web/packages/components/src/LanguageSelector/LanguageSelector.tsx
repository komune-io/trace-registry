import { MenuItem, Select, SelectChangeEvent, SxProps, Theme } from '@mui/material'
import {KeyboardArrowDownRounded} from "@mui/icons-material"
import { ReactElement, useCallback, useEffect } from 'react'
import { useExtendedI18n, Languages, languages as defaultLanguages } from '../..'
import { EnglandFlagIcon, FranceFlagIcon, SpainFlagIcon } from '../Icons/flags'

const languageToEmojiFlag: Record<keyof Languages, ReactElement> = {
    fr: <FranceFlagIcon />,
    en: <EnglandFlagIcon />,
    es: <SpainFlagIcon />
}

export interface LanguageSelectorProps {
    languages?: Record<string, string>
    currentLanguage?: string
    onChange?: (languageTag: string) => void
    sx?: SxProps<Theme>
}

export const LanguageSelector = (props: LanguageSelectorProps) => {
    const { i18n } = useExtendedI18n()
    const {languages, currentLanguage, onChange, sx} = props

    const onLanguageChange = useCallback(
        (event: SelectChangeEvent) => {
            i18n.changeLanguage(event.target.value as keyof Languages)
            onChange && onChange(event.target.value)
        },
        [i18n.changeLanguage, onChange],
    )

    useEffect(() => {
        //if current language is not a short tag like fr-FR we change it to the short tag like fr
        if (i18n.language.includes("-")) {
            const splited = i18n.language.split("-")
            i18n.changeLanguage(splited[0] as keyof Languages)
        }
    }, [i18n.language])
    

    return (
        <Select
            color="primary"
            sx={{
                "& .MuiSelect-select": {
                    py: 1,
                    pr: "40px !important",
                    pl: 1.5,
                    display: "flex"
                },
                borderRadius: "6px",
                ...sx
            }}
            value={currentLanguage ?? i18n.language}
            onChange={onLanguageChange}
            IconComponent={KeyboardArrowDownRounded}
        >
            {
                Object.keys(languages ?? defaultLanguages).map((lng) => (
                    <MenuItem 
                    aria-label={`language-${lng}`} 
                    key={lng} 
                    value={lng}
                    sx={{
                        display: "flex",
                        justifyContent: "center"
                    }}
                    >
                       {languageToEmojiFlag[lng as keyof Languages] ?? lng}
                    </MenuItem>
                ))
            }
        </Select>
    )
}
