package io.komune.registry.f2.dataset.domain

import io.komune.registry.f2.dataset.domain.dto.AggregatorConfig
import io.komune.registry.f2.dataset.domain.dto.AggregatorConfigDTO
import io.komune.registry.s2.cccev.domain.model.CompositeDataUnitModel
import io.komune.registry.s2.cccev.domain.model.CompositeDataUnitRefDTO
import io.komune.registry.s2.cccev.domain.model.FileProcessorType
import io.komune.registry.s2.commons.model.InformationConceptId
import kotlin.js.JsExport

@JsExport
object AggregatorConfigBuilder {
    fun csvSum(informationConceptId: InformationConceptId, unit: CompositeDataUnitRefDTO, column: String): AggregatorConfigDTO {
        return AggregatorConfig(
            informationConceptId = informationConceptId,
            unit = unit as CompositeDataUnitModel,
            processorType = FileProcessorType.CSV_SQL,
            query = "SELECT SUM($column) FROM data",
            valueIfEmpty = "0"
        )
    }
}
