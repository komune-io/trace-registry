package io.komune.registry.s2.catalogue.draft.api.entity

import io.komune.registry.infra.redis.RedisRepository
import io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftId
import org.springframework.stereotype.Repository

@Repository
interface CatalogueDraftRepository: RedisRepository<CatalogueDraftEntity, CatalogueDraftId>
