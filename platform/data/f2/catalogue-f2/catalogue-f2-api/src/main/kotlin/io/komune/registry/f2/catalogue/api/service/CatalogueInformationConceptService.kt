package io.komune.registry.f2.catalogue.api.service

import io.komune.registry.api.commons.utils.mapAsync
import io.komune.registry.f2.cccev.api.concept.model.toComputedDTO
import io.komune.registry.f2.cccev.domain.concept.model.InformationConceptComputedDTOBase
import io.komune.registry.s2.catalogue.domain.model.AggregatorScope
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

        val (globalAggregators, localAggregators) = catalogue.aggregators.partition { aggregator ->
            aggregator.scope == AggregatorScope.GLOBAL
        }

        val globalConceptIds = globalAggregators.map { aggregator -> aggregator.informationConceptId }.toSet()
        val aggregatorValues = ConcurrentHashMap<InformationConceptId, List<String>>()

        localAggregators.forEach { aggregator ->
            aggregatorValues[aggregator.informationConceptId] = emptyList()
        }

        descendantDatasets.mapAsync { dataset ->
            dataset.distributions.mapAsync { distribution ->
                distribution.aggregators.forEach { (conceptId, valueIds) ->
                    if (conceptId !in globalConceptIds) {
                        val supportedValues = valueIds.mapNotNull { valueId ->
                            cache.supportedValues.get(valueId).takeUnless { it.isRange }?.value
                        }.ifEmpty { return@forEach }

                        aggregatorValues[conceptId] = aggregatorValues.getOrDefault(conceptId, emptyList()) + supportedValues
                    }
                }
            }
        }

        globalConceptIds.mapAsync { conceptId ->
            aggregatorValues[conceptId] = try {
                listOf(cccevFinderService.computeGlobalValueForConcept(conceptId))
            } catch (e: UnsupportedOperationException) {
                emptyList()
            }
        }

        aggregatorValues.mapNotNull { (conceptId, values) ->
            val concept = cache.informationConcepts.get(conceptId)

            if (concept.aggregator == null || concept.unit == null) {
                return@mapNotNull null
            }

            when (concept.aggregator!!) {
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
