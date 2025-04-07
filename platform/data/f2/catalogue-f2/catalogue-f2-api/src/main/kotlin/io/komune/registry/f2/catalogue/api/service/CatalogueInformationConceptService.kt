package io.komune.registry.f2.catalogue.api.service

import io.komune.registry.api.commons.utils.mapAsync
import io.komune.registry.f2.cccev.api.concept.model.toComputedDTO
import io.komune.registry.f2.cccev.domain.concept.model.InformationConceptComputedDTOBase
import io.komune.registry.s2.catalogue.domain.model.CatalogueModel
import io.komune.registry.s2.cccev.api.processor.compute
import io.komune.registry.s2.cccev.domain.model.AggregatorType
import io.komune.registry.s2.cccev.domain.model.SumAggregatorInput
import io.komune.registry.s2.cccev.domain.model.SupportedValueModel
import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.dataset.domain.model.DatasetModel
import org.springframework.stereotype.Service
import java.util.concurrent.ConcurrentHashMap

@Service
class CatalogueInformationConceptService : CatalogueCachedService() {

    suspend fun computeAggregators(catalogue: CatalogueModel): List<InformationConceptComputedDTOBase> = withCache { cache ->
        val translations = catalogue.translationIds.values.mapAsync { catalogueFinderService.get(it) }
        val childrenDatasetIds = catalogue.childrenDatasetIds + translations.flatMap { it.childrenDatasetIds }
        val descendantDatasets = childrenDatasetIds.allDescendants()

        val aggregatorValues = ConcurrentHashMap<InformationConceptId, List<String>>()

        descendantDatasets.mapAsync { dataset ->
            dataset.aggregators.forEach { (conceptId, valueId) ->
                val supportedValue = valueId?.let { cache.supportedValues.get(it) }
                if (supportedValue != null && !supportedValue.isRange) {
                    aggregatorValues[conceptId] = aggregatorValues.getOrDefault(conceptId, emptyList()) + supportedValue.value
                }
            }
        }

        aggregatorValues.mapNotNull { (conceptId, values) ->
            val concept = cache.informationConcepts.get(conceptId)

            if (concept.aggregator == null || concept.unit == null) {
                return@mapNotNull null
            }

            when (concept.aggregator!!.type) {
                AggregatorType.SUM -> SumAggregatorInput(values).compute()
            }.let { aggregatedValue ->
                val supportedValue = SupportedValueModel(
                    id = "",
                    conceptId = conceptId,
                    unit = concept.unit!!,
                    isRange = false,
                    value = aggregatedValue,
                    query = null,
                    description = null,
                )
                concept.toComputedDTO(supportedValue, catalogue.language!!, cache.themes::get, cache.dataUnits::get)
            }
        }
    }

    private suspend fun Collection<DatasetId>.allDescendants(): List<DatasetModel> = withCache { cache ->
        ifEmpty { return@withCache emptyList() }

        val datasets = mapAsync { cache.datasets.get(it) }
        val childrenIds = datasets.flatMap { it.datasetIds }
        datasets + childrenIds.allDescendants()
    }
}
