package cccev.f2.concept.api

import cccev.f2.concept.api.service.InformationConceptF2AggregateService
import cccev.f2.concept.api.service.InformationConceptF2FinderService
import cccev.f2.concept.domain.D2InformationConceptF2Page
import cccev.f2.concept.domain.InformationConceptApi
import cccev.f2.concept.domain.command.InformationConceptCreateFunction
import cccev.f2.concept.domain.command.InformationConceptUpdateFunction
import cccev.f2.concept.domain.query.InformationConceptGetByIdentifierFunction
import cccev.f2.concept.domain.query.InformationConceptGetByIdentifierResultDTOBase
import cccev.f2.concept.domain.query.InformationConceptGetFunction
import cccev.f2.concept.domain.query.InformationConceptGetResultDTOBase
import f2.dsl.fnc.f2Function
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import s2.spring.utils.logger.Logger

/**
 * @d2 service
 * @parent [D2InformationConceptF2Page]
 */
@Configuration
class InformationConceptEndpoint(
    private val informationConceptF2AggregateService: InformationConceptF2AggregateService,
    private val informationConceptF2FinderService: InformationConceptF2FinderService
): InformationConceptApi {
    private val logger by Logger()

    @Bean
    override fun conceptGet(): InformationConceptGetFunction = f2Function { query ->
        logger.info("conceptGet: $query")
        informationConceptF2FinderService.getOrNull(query.id).let(::InformationConceptGetResultDTOBase)
    }

    @Bean
    override fun conceptGetByIdentifier(): InformationConceptGetByIdentifierFunction = f2Function { query ->
        logger.info("conceptGetByIdentifier: $query")
        informationConceptF2FinderService.getByIdentifierOrNull(query.identifier).let(::InformationConceptGetByIdentifierResultDTOBase)
    }

    // TODO move to request-f2 module?
//    @Bean
//    fun getInformationConcepts(): GetInformationConceptsQueryFunction = f2Function { query ->
//        logger.info("Request [${query.id}]: GetInformationConcepts")
//        informationConceptF2FinderService.getInformationConcepts(
//            requestId = query.id,
//            requirementId = query.requirement,
//            evidenceTypeId = query.evidenceType
//        ).let(::GetInformationConceptsQueryResult)
//    }

    @Bean
    override fun conceptCreate(): InformationConceptCreateFunction = f2Function { command ->
        logger.info("conceptCreate: $command")
        informationConceptF2AggregateService.create(command)
    }

    @Bean
    override fun conceptUpdate(): InformationConceptUpdateFunction = f2Function { command ->
        logger.info("conceptUpdate: $command")
        informationConceptF2AggregateService.update(command)
    }
}
