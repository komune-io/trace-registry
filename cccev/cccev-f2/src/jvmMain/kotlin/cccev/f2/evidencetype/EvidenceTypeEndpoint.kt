package cccev.f2.evidencetype

import cccev.core.evidencetype.D2EvidenceTypePage
import cccev.core.evidencetype.EvidenceTypeAggregateService
import cccev.core.evidencetype.EvidenceTypeFinderService
import cccev.core.evidencetype.command.EvidenceTypeCreateFunction
import cccev.f2.CccevFlatGraph
import cccev.f2.evidencetype.model.flattenTo
import cccev.f2.evidencetype.query.EvidenceTypeGetFunction
import cccev.f2.evidencetype.query.EvidenceTypeGetResult
import f2.dsl.fnc.f2Function
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import s2.spring.utils.logger.Logger

/**
 * @d2 service
 * @parent [D2EvidenceTypePage]
 */
@Configuration
class EvidenceTypeEndpoint(
    private val evidenceTypeAggregateService: EvidenceTypeAggregateService,
    private val evidenceTypeFinderService: EvidenceTypeFinderService
): EvidenceTypeApi {
    private val logger by Logger()

    @Bean
    override fun evidenceTypeCreate(): EvidenceTypeCreateFunction = f2Function { command ->
        logger.info("evidenceTypeCreate: $command")
        evidenceTypeAggregateService.create(command)
    }

    @Bean
    override fun evidenceTypeGet(): EvidenceTypeGetFunction = f2Function { query ->
        logger.info("evidenceTypeGet: $query")

        val evidenceType = evidenceTypeFinderService.getOrNull(query.id)
        val graph = CccevFlatGraph().also { evidenceType?.flattenTo(it) }

        EvidenceTypeGetResult(
            item = graph.evidenceTypes[evidenceType?.id],
            graph = graph
        )
    }
}
