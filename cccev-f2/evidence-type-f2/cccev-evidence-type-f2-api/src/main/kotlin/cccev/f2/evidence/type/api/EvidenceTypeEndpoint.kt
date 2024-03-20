package cccev.f2.evidence.type.api

import cccev.f2.commons.CccevFlatGraph
import cccev.f2.evidence.type.api.model.flattenTo
import cccev.f2.evidence.type.api.service.EvidenceTypeF2AggregateService
import cccev.f2.evidence.type.api.service.EvidenceTypeF2FinderService
import cccev.f2.evidence.type.domain.D2EvidenceTypeF2Page
import cccev.f2.evidence.type.domain.EvidenceTypeApi
import cccev.f2.evidence.type.domain.command.EvidenceTypeCreateFunction
import cccev.f2.evidence.type.domain.query.EvidenceTypeGetFunction
import cccev.f2.evidence.type.domain.query.EvidenceTypeGetResultDTOBase
import f2.dsl.fnc.f2Function
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import s2.spring.utils.logger.Logger

/**
 * @d2 service
 * @parent [D2EvidenceTypeF2Page]
 */
@Configuration
class EvidenceTypeEndpoint(
    private val evidenceTypeF2AggregateService: EvidenceTypeF2AggregateService,
    private val evidenceTypeF2FinderService: EvidenceTypeF2FinderService
): EvidenceTypeApi {
    private val logger by Logger()

    @Bean
    override fun evidenceTypeCreate(): EvidenceTypeCreateFunction = f2Function { command ->
        logger.info("evidenceTypeCreate: $command")
        evidenceTypeF2AggregateService.create(command)
    }

    @Bean
    override fun evidenceTypeGet(): EvidenceTypeGetFunction = f2Function { query ->
        logger.info("evidenceTypeGet: $query")

        val evidenceType = evidenceTypeF2FinderService.getOrNull(query.id)
        val graph = CccevFlatGraph().also { evidenceType?.flattenTo(it) }

        EvidenceTypeGetResultDTOBase(
            item = graph.evidenceTypes[evidenceType?.id],
            graph = graph
        )
    }
}
