package io.komune.registry.f2.cccev.api.concept

import f2.dsl.fnc.f2Function
import io.komune.registry.f2.cccev.api.concept.service.InformationConceptF2FinderService
import io.komune.registry.f2.cccev.api.concept.service.InformationConceptPoliciesEnforcer
import io.komune.registry.f2.cccev.domain.concept.InformationConceptApi
import io.komune.registry.f2.cccev.domain.concept.command.InformationConceptCreateFunction
import io.komune.registry.f2.cccev.domain.concept.command.InformationConceptCreatedEventDTOBase
import io.komune.registry.f2.cccev.domain.concept.command.InformationConceptDeleteFunction
import io.komune.registry.f2.cccev.domain.concept.command.InformationConceptDeletedEventDTOBase
import io.komune.registry.f2.cccev.domain.concept.command.InformationConceptUpdateFunction
import io.komune.registry.f2.cccev.domain.concept.command.InformationConceptUpdatedEventDTOBase
import io.komune.registry.f2.cccev.domain.concept.query.InformationConceptGetByIdentifierFunction
import io.komune.registry.f2.cccev.domain.concept.query.InformationConceptGetByIdentifierResult
import io.komune.registry.f2.cccev.domain.concept.query.InformationConceptGetGlobalValueFunction
import io.komune.registry.f2.cccev.domain.concept.query.InformationConceptGetGlobalValueResult
import io.komune.registry.f2.cccev.domain.concept.query.InformationConceptListFunction
import io.komune.registry.f2.cccev.domain.concept.query.InformationConceptListResult
import io.komune.registry.s2.cccev.api.CccevOldAggregateService
import io.komune.registry.s2.commons.utils.truncateLanguage
import jakarta.annotation.security.PermitAll
import org.springframework.context.annotation.Bean
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import s2.spring.utils.logger.Logger

@RestController
@RequestMapping
class InformationConceptEndpoint(
    private val cccevOldAggregateService: CccevOldAggregateService,
    private val informationConceptF2FinderService: InformationConceptF2FinderService,
    private val informationConceptPoliciesEnforcer: InformationConceptPoliciesEnforcer
) : InformationConceptApi {
    private val logger by Logger()

    @Bean
    override fun informationConceptGetByIdentifier(): InformationConceptGetByIdentifierFunction = f2Function { query ->
        logger.info("informationConceptGetByIdentifier: $query")
        informationConceptF2FinderService.getByIdentifierOrNull(query.identifier)
            .let(::InformationConceptGetByIdentifierResult)
    }

    @Bean
    override fun informationConceptList(): InformationConceptListFunction = f2Function { query ->
        logger.info("informationConceptList: $query")
        informationConceptF2FinderService.listTranslated(query.language.truncateLanguage())
            .let(::InformationConceptListResult)
    }

    @PermitAll
    @Bean
    override fun informationConceptGetGlobalValue(): InformationConceptGetGlobalValueFunction = f2Function { query ->
        logger.info("informationConceptGetGlobalValue: $query")
        informationConceptF2FinderService.getGlobalValue(query.identifier, query.language.truncateLanguage())
            .let(::InformationConceptGetGlobalValueResult)
    }

    @Bean
    override fun informationConceptCreate(): InformationConceptCreateFunction = f2Function { command ->
        logger.info("informationConceptCreate: $command")
        informationConceptPoliciesEnforcer.checkCreate()
        cccevOldAggregateService.createConcept(command)
            .let { informationConceptF2FinderService.get(it.id) }
            .let { InformationConceptCreatedEventDTOBase(it) }
    }

    @Bean
    override fun informationConceptUpdate(): InformationConceptUpdateFunction = f2Function { command ->
        logger.info("informationConceptUpdate: $command")
        informationConceptPoliciesEnforcer.checkCreate()
        cccevOldAggregateService.updateConcept(command)
            .let { InformationConceptUpdatedEventDTOBase(it.id) }
    }

    @Bean
    override fun informationConceptDelete(): InformationConceptDeleteFunction = f2Function { command ->
        logger.info("informationConceptDelete: $command")
        informationConceptPoliciesEnforcer.checkDelete()
        cccevOldAggregateService.deleteConcept(command)
            .let { InformationConceptDeletedEventDTOBase(it.id) }
    }
}
