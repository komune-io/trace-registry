export interface PlatformConfig {
    url: string
}

export interface Config {
    platform: PlatformConfig
    legalNotice?: LegalNotice,
    sponsor?: Sponsor,
    theme?: ThemeConfig
}

export interface LegalNotice {
    url: string
}
export interface Sponsor {
    logo: string
    by: string
    url: string
    name: string
}
export interface ThemeConfig {
    colors?: ThemeColorsConfig,
    rotation?: string
    logo?: {
        url?: string
    }
}

export interface ThemeColorsConfig {
    primary?: string,
    secondary?: string,
    background?: string
}

// @ts-ignore
export const config: () => Config = () => window._env_.config
