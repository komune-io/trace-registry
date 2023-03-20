
export interface PlatformConfig {
    url: string
}

export interface Config {
    platform: PlatformConfig
}

// @ts-ignore
export const config: () => Config = () => window._env_.config

export * from './useAuthenticatedRequest'
