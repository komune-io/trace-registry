import { request, HttpOptions } from "utils"

//@ts-ignore
const apiUrl = window._env_.apiUrl


export const certificatRequest = <T>(
    options: Partial<HttpOptions>
): Promise<T> => {
    const url = `${apiUrl}${options.url}`
    const errorHandler = (error: Error) => console.error(error)
    return request<T>({method: "POST", ...options, url: url, errorHandler: errorHandler})
}