package io.komune.registry.s2.cccev.api.entity.value

import io.komune.registry.infra.redis.RedisRepository
import io.komune.registry.s2.cccev.domain.SupportedValueState
import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.SupportedValueId
import org.springframework.stereotype.Repository

@Repository
interface SupportedValueRepository: RedisRepository<SupportedValueEntity, SupportedValueId> {
    fun findAllByConceptIdAndStatus(conceptId: InformationConceptId, status: SupportedValueState): List<SupportedValueEntity>
    fun findAllByConceptIdAndStatusNot(conceptId: InformationConceptId, status: SupportedValueState): List<SupportedValueEntity>
}
