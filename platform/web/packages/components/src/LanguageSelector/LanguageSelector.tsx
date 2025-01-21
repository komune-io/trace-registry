import { MenuItem, Select, SelectChangeEvent } from '@mui/material'
import {KeyboardArrowDownRounded} from "@mui/icons-material"
import { ReactElement, useCallback } from 'react'
import { useExtendedI18n, Languages, languages } from '../..'
import { EnglandFlagIcon, FranceFlagIcon, SpainFlagIcon } from '../Icons/flags'

const languageToEmojiFlag: Record<keyof Languages, ReactElement> = {
    fr: <FranceFlagIcon fontSize='large' />,
    en: <EnglandFlagIcon fontSize='large' />,
    es: <SpainFlagIcon fontSize='large' />
}

export const LanguageSelector = () => {
    const { i18n } = useExtendedI18n()

    const onLanguageChange = useCallback(
        (event: SelectChangeEvent) => i18n.changeLanguage(event.target.value as keyof Languages),
        [i18n.changeLanguage],
    )

    return (
        <Select
            color="primary"
            sx={{
                "& .MuiSelect-select": {
                    py: 0.5,
                    pr: "40px !important",
                    pl: 1.5,
                    display: "flex"
                },
                borderRadius: "6px",
            }}
            defaultValue={i18n.language}
            onChange={onLanguageChange}
            IconComponent={KeyboardArrowDownRounded}
        >
            {
                Object.keys(languages).map((lng) => (
                    <MenuItem 
                    aria-label={`language-${lng}`} 
                    key={lng} 
                    value={lng}
                    sx={{
                        display: "flex",
                        justifyContent: "center"
                    }}
                    >
                       {languageToEmojiFlag[lng as keyof Languages]}
                    </MenuItem>
                ))
            }
        </Select>
    )
}
