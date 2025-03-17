export interface PlatformConfig {
    url: string
}

export interface Config {
    platform: PlatformConfig
    theme?: ThemeConfig
    logo: string
}

export interface ThemeConfig {
    colors?: ThemeColorsConfig,
    rotation?: string
}

export interface ThemeColorsConfig {
    primary?: string,
    secondary?: string,
    background?: string
}

// @ts-ignore
export const config: () => Config = () => window._env_.config
