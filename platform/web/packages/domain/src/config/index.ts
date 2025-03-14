
export interface PlatformConfig {
    url: string
}

export interface Config {
    platform: PlatformConfig
    theme?: ThemeConfig
}

export interface ThemeConfig {
    colors?: ThemeColorsConfig,
    logo?: ThemeLogoConfig
}

export interface ThemeColorsConfig {
    primary?: string,
    secondary?: string,
    background?: string
}

export interface ThemeLogoConfig {
    url?: string,
}

// @ts-ignore
export const config: () => Config = () => window._env_.config
