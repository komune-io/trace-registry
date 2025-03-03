export * from "./useDebounce"
export * from "./usePrevious"
export * from "./useDataLoader"

import {
    parseAndCheckData,
} from './useDataLoaderUtils/parser'
//@ts-ignore
import { parseDataset } from '@rawgraphs/rawgraphs-core'
//@ts-ignore
import { get } from 'lodash'
import { localeList } from '../constants'
import { languages} from "components"

const readFileAsString = (file: Blob) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;

        reader.readAsText(file); // Reads the file as a text string
    });
}

const parseDatasetSyncAndSetData = (data: any, dataTypes: any, parsingOptions: any) => {
    return new Promise((resolve, reject) => {
        try {
            const resultData = parseDataset(data, dataTypes, {
                ...parsingOptions,
                dateLocale: get(localeList, parsingOptions.locale),
            })
            resolve(resultData)
        } catch (e) {
            reject(e)
        }
    })
}


export const parseCsv = async (csv: Blob, lng: string) => {
    const text = await readFileAsString(csv)
    const [_dataType, parsedUserData, _error, _extra] = parseAndCheckData(text, {
        separator: null
    })
    const resultData: any = await parseDatasetSyncAndSetData(parsedUserData, undefined, {
        //@ts-ignore
        locale: languages[lng],
        decimal: '.',
        group: ',',
    })
    return {
        dataset: resultData.dataset,
        dataTypes: resultData.dataTypes,
        errors: resultData.errors,
    }
}