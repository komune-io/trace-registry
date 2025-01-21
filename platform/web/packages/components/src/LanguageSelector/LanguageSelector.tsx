import { MenuItem, Select, SelectChangeEvent } from '@mui/material'
import {KeyboardArrowDownRounded} from "@mui/icons-material"
import { useCallback } from 'react'
import { useExtendedI18n, Languages, languages } from '../..'

const languageToEmojiFlag: Record<keyof Languages, string> = {
    fr: "🇫🇷",
    en: "🇬🇧",
    es: "🇪🇸"
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
                    p: 0,
                    pr: 3,
                    pl: 1.5
                },
                borderRadius: "6px",
                fontSize: "1.6rem"
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
                        fontSize: "1.6rem"
                    }}
                    >
                       {languageToEmojiFlag[lng as keyof Languages]}
                    </MenuItem>
                ))
            }
        </Select>
    )
}
