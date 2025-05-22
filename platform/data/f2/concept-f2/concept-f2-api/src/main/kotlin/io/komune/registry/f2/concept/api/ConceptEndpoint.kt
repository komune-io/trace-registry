package io.komune.registry.f2.concept.api

import f2.dsl.fnc.f2Function
import io.komune.registry.f2.concept.api.service.ConceptF2FinderService
import io.komune.registry.f2.concept.api.service.ConceptPoliciesEnforcer
import io.komune.registry.f2.concept.domain.ConceptApi
import io.komune.registry.f2.concept.domain.command.ConceptCreateFunction
import io.komune.registry.f2.concept.domain.command.ConceptCreatedEventDTOBase
import io.komune.registry.f2.concept.domain.command.ConceptUpdateFunction
import io.komune.registry.f2.concept.domain.command.ConceptUpdatedEventDTOBase
import io.komune.registry.f2.concept.domain.query.ConceptGetByIdentifierFunction
import io.komune.registry.f2.concept.domain.query.ConceptGetByIdentifierResult
import io.komune.registry.f2.concept.domain.query.ConceptGetFunction
import io.komune.registry.f2.concept.domain.query.ConceptGetResult
import io.komune.registry.f2.concept.domain.query.ConceptGetTranslatedFunction
import io.komune.registry.f2.concept.domain.query.ConceptGetTranslatedResult
import io.komune.registry.s2.commons.utils.truncateLanguage
import io.komune.registry.s2.concept.api.ConceptAggregateService
import org.springframework.context.annotation.Bean
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import s2.spring.utils.logger.Logger

@RestController
@RequestMapping
class ConceptEndpoint(
    private val conceptAggregateService: ConceptAggregateService,
    private val conceptF2FinderService: ConceptF2FinderService,
    private val conceptPoliciesEnforcer: ConceptPoliciesEnforcer
) : ConceptApi {

    private val logger by Logger()

    @Bean
    override fun conceptGet(): ConceptGetFunction = f2Function { query ->
        logger.info("conceptGet: $query")
        conceptF2FinderService.getOrNull(query.id)
            .let(::ConceptGetResult)
    }

    @Bean
    override fun conceptGetByIdentifier(): ConceptGetByIdentifierFunction = f2Function { query ->
        logger.info("conceptGetByIdentifier: $query")
        conceptF2FinderService.getByIdentifierOrNull(query.identifier)
            .let(::ConceptGetByIdentifierResult)
    }

    @Bean
    override fun conceptGetTranslated(): ConceptGetTranslatedFunction = f2Function { query ->
        logger.info("conceptGetTranslated: $query")
        conceptF2FinderService.getTranslatedOrNull(query.id, query.language.truncateLanguage(), query.otherLanguageIfAbsent)
            .let(::ConceptGetTranslatedResult)
    }

    @Bean
    override fun conceptCreate(): ConceptCreateFunction = f2Function { command ->
        logger.info("conceptCreate: $command")
        conceptPoliciesEnforcer.checkCreate()
        conceptAggregateService.create(command).let {
            ConceptCreatedEventDTOBase(
                id = it.id,
                identifier = it.identifier
            )
        }
    }

    @Bean
    override fun conceptUpdate(): ConceptUpdateFunction = f2Function { command ->
        logger.info("conceptUpdate: $command")
        conceptPoliciesEnforcer.checkUpdate()
        conceptAggregateService.update(command)
            .let { ConceptUpdatedEventDTOBase(id = it.id) }
    }
}
