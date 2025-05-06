import { MenuItem, Select, SelectChangeEvent, SxProps, Theme } from '@mui/material'
import {KeyboardArrowDownRounded} from "@mui/icons-material"
import { ReactElement, useCallback, useEffect } from 'react'
import { languages as defaultLanguages } from '../..'
import { EnglandFlagIcon, FranceFlagIcon, SpainFlagIcon } from '../Icons/flags'
import { useI18n } from '@komune-io/g2'

export const languageToEmojiFlag: Record<string, ReactElement> = {
    fr: <FranceFlagIcon />,
    en: <EnglandFlagIcon />,
    es: <SpainFlagIcon />
}

export interface LanguageSelectorProps {
    languages?: Record<string, string>
    currentLanguage?: string
    onChange?: (languageTag: string) => void
    sx?: SxProps<Theme>
    disabled?: boolean
}

export const LanguageSelector = (props: LanguageSelectorProps) => {
    const { i18n } = useI18n<any>()
    const {languages, currentLanguage, onChange, sx, disabled = false} = props

    const onLanguageChange = useCallback(
        (event: SelectChangeEvent) => {
            if (onChange) {
                onChange(event.target.value as string)
            } else {
                i18n.changeLanguage(event.target.value)
            }
        },
        [i18n.changeLanguage, onChange],
    )

    useEffect(() => {
        //if current language is not a short tag like fr-FR we change it to the short tag like fr
        if (i18n.language.includes("-") && !onChange) {
            const splited = i18n.language.split("-")
            i18n.changeLanguage(splited[0])
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
            disabled={disabled}
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
                       {languageToEmojiFlag[lng] ?? lng}
                    </MenuItem>
                ))
            }
        </Select>
    )
}
