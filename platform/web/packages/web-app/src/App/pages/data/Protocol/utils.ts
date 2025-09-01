import {DataCollectionStep, DataCondition, DataField, DataSection, Protocol, ReservedProtocolTypes} from 'domain-components'

export function preformatProtocol(protocol: Protocol | undefined): Protocol | undefined {
    if (!protocol) return undefined

    switch (protocol.type) {
        case ReservedProtocolTypes.DATA_COLLECTION_STEP: return preformatDataCollectionStep(protocol as DataCollectionStep)
        case ReservedProtocolTypes.DATA_SECTION: return preformatDataSection(protocol as DataSection)
        default: return {
            ...protocol,
            conditions: preformatConditions(protocol.conditions),
            steps: protocol.steps?.map(step => preformatProtocol(step) as Protocol),
        }
    }
}

function preformatDataCollectionStep(dcs: DataCollectionStep): DataCollectionStep {
    return {
        ...dcs,
        conditions: preformatConditions(dcs.conditions),
        sections: dcs.sections?.map(section => preformatDataSection(section)),
    }
}

function preformatDataSection(section: DataSection): DataSection {
    return {
        ...section,
        conditions: preformatConditions(section.conditions),
        fields: section.fields?.map(field => preformatDataField(field)),
    }
}

function preformatDataField(field: DataField): DataField {
    return {
        ...field,
        conditions: preformatConditions(field.conditions),
    }
}

function preformatConditions(conditions: DataCondition[] | undefined): DataCondition[] | undefined {
    // @ts-ignore
    return conditions?.map(condition => ({
        ...condition,
        logic: { "!": JSON.parse(condition.expression) },
        expression: undefined
    } as DataCondition))
}
