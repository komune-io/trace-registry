package io.komune.registry.f2.entity.api

import f2.dsl.fnc.f2Function
import io.komune.registry.f2.catalogue.api.service.CatalogueI18nService
import io.komune.registry.f2.catalogue.api.service.CataloguePoliciesFilterEnforcer
import io.komune.registry.f2.entity.api.model.toRef
import io.komune.registry.f2.entity.domain.model.EntityType
import io.komune.registry.f2.entity.domain.query.EntityRefGetFunction
import io.komune.registry.f2.entity.domain.query.EntityRefGetResult
import io.komune.registry.program.s2.catalogue.api.CatalogueFinderService
import org.springframework.context.annotation.Bean
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import s2.spring.utils.logger.Logger

@RestController
@RequestMapping
class EntityRefEndpoint(
    private val cataloguePoliciesFilterEnforcer: CataloguePoliciesFilterEnforcer,
    private val catalogueFinderService: CatalogueFinderService,
    private val catalogueI18nService: CatalogueI18nService
) {
    private val logger by Logger()

    @Bean
    fun entityRefGet(): EntityRefGetFunction = f2Function { query ->
        logger.info("entityRefGet: $query")
        when (query.type) {
            EntityType.CATALOGUE -> catalogueFinderService.getOrNull(query.id)
                ?.let { catalogueI18nService.translate(it, query.language, query.otherLanguageIfAbsent) }
                ?.let { cataloguePoliciesFilterEnforcer.enforceCatalogue(it) }
                ?.toRef()
        }.let(::EntityRefGetResult)
    }
}
