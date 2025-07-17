

export const objToArray = <T>(obj: { [key: string]: T }): (T & { key: string })[] => {
    const array: (T & { key: string })[] = []
    for (var key in obj) {
        array.push({ ...obj[key], key: key })
    }
    return array
}