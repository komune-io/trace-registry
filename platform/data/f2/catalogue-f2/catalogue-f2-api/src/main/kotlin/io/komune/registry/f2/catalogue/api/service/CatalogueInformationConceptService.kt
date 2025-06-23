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
import io.komune.registry.s2.commons.model.SupportedValueData
import io.komune.registry.s2.commons.model.SupportedValueId
import io.komune.registry.s2.dataset.domain.model.DatasetModel
import org.springframework.stereotype.Service
import java.math.RoundingMode
import java.util.concurrent.ConcurrentHashMap

@Service
class CatalogueInformationConceptService : CatalogueCachedService() {

    @Suppress("LongMethod")
    suspend fun computeAggregators(
        catalogue: CatalogueModel
    ): List<InformationConceptComputedDTOBase> = withCache { cache ->
        val translations = catalogue.translationIds.values.mapAsync { catalogueFinderService.get(it) }
        val childrenDatasetIds = catalogue.childrenDatasetIds + translations.flatMap { it.childrenDatasetIds }
        val descendantDatasets = childrenDatasetIds.allDescendants()

        val aggregatorValues = ConcurrentHashMap<InformationConceptId, MutableList<SupportedValueData>>()

        val aggregatedByConcept = descendantDatasets.mapAsync { dataset ->
            dataset.aggregators.mapNotNull { (_, aggregatedValues) ->
                aggregatedValues
            }
        }.flatten().groupBy { it.conceptId }

        val types = aggregatedByConcept.flatMap { (conceptId, aggregatedValues) ->
            val aggregatorConcept = cache.informationConcepts.get(conceptId)
                ?: return@flatMap emptyList()
            if (aggregatorConcept.aggregator == null || aggregatorConcept.unit == null) {
                return@flatMap emptyList()
            }

            aggregatedValues.forEach { aggregatedValue ->
                val supportedValue = cache.supportedValues.get(aggregatedValue.computedValue)
                if (!supportedValue.isRange) {
                    aggregatorValues.getOrPut(conceptId) { mutableListOf() }.add(supportedValue.value)
                }
            }

            val dependingValues = mutableMapOf<InformationConceptId, MutableSet<SupportedValueId>>()

            aggregatedValues.forEach { aggregatedValue ->
                aggregatedValue.dependingValues.forEach { (conceptId, values) ->
                    dependingValues.getOrPut(conceptId) { mutableSetOf() }.addAll(values)
                }
            }

            dependingValues.mapNotNull { (conceptId, valueIds) ->
                val concept = cache.informationConcepts.get(conceptId)
                    ?: return@mapNotNull null

                val supportedValues = valueIds.map { cache.supportedValues.get(it) }
                    .filter { !it.isRange }
                    .map { it.value }

                val sum = SumAggregatorInput(supportedValues).compute()
                (sum to concept.name["fr"]).takeIf { sum != "0" }
            }
        }.sortedBy { (_, unit) -> unit }
            .map { (value, unit) ->
                "${value.toBigDecimal().setScale(3, RoundingMode.HALF_UP).stripTrailingZeros().toPlainString()} $unit"
            }

        aggregatorValues.mapNotNull { (conceptId, values) ->
            val concept = cache.informationConcepts.get(conceptId)

            if (concept?.aggregator == null || concept.unit == null) {
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
                concept.toComputedDTO(
                    supportedValue, catalogue.language!!,
                    types.joinToString(", "),
                    cache.themes::get,
                    cache.dataUnits::get
                )
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
