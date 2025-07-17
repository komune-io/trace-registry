import { Box, InputLabel, Select, SelectChangeEvent, styled } from '@mui/material'
import { useExtendedI18n, Languages } from 'i18n'
import { useCallback } from 'react'

const BoxStyled = styled(Box)({
    display: "flex",
    alignItems: "center",
    padding: "10px",
    paddingBottom: "0px",
    "& .LanguageSelector-label": {
        marginRight: "5px"
    },
    "& .LanguageSelector-select": {
        padding: "2px 0px !important",
        paddingRight: "12px !important"
    },
    "& .LanguageSelector-selectIcon": {
        marginRight: "-8px"
    }
})

export const LanguageSelector = () => {
    const {i18n} = useExtendedI18n()

    const onLanguageChange = useCallback(
        (event: SelectChangeEvent<"fr" | "en">) => i18n.changeLanguage(event.target.value as keyof Languages),
        [i18n.changeLanguage],
    )

    return (
        <BoxStyled>
            <InputLabel className="LanguageSelector-label" htmlFor="cccevApp-languageSelector">language:</InputLabel>
            <Select variant="standard" color="secondary" classes={{select: "LanguageSelector-select", icon: "LanguageSelector-selectIcon"}} native defaultValue={i18n.language} onChange={onLanguageChange} id="cccevApp-languageSelector">
                <option value="en">en</option>
                <option value="fr">fr</option>
            </Select>
        </BoxStyled>
    )
}
