package cccev.projection.api.entity.requirement

import cccev.projection.api.entity.SnapRepositoryBase
import cccev.s2.requirement.domain.RequirementId
import cccev.s2.requirement.domain.model.RequirementIdentifier
import org.springframework.data.neo4j.repository.ReactiveNeo4jRepository
import org.springframework.data.neo4j.repository.query.Query
import org.springframework.stereotype.Repository
import org.springframework.stereotype.Service
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

@Repository
interface RequirementRepository: ReactiveNeo4jRepository<RequirementEntity, RequirementId> {

    fun findByIdentifier(identifier: RequirementIdentifier): Mono<RequirementEntity>

    // TODO also fetch other relations (info concepts, evidence type lists, ...) or it won't be filled in the entities
    @Query("" +
            "MATCH (root:${RequirementEntity.LABEL}) WHERE root.identifier IN \$ids\n" +
            "OPTIONAL MATCH (root)-[hr:${RequirementEntity.HAS_REQUIREMENT}*1..]->(child:${RequirementEntity.LABEL} {type: \$type})" +
            "OPTIONAL MATCH (root)-[r]->(other)" +
            "RETURN root, collect(hr), collect(child), collect(r), collect(other)"
    )
    fun findByIdentifierWithChildrenOfType(ids: Collection<RequirementIdentifier>, type: String): Flux<RequirementEntity>
    @Query("" +
            "MATCH (root:${RequirementEntity.LABEL}) WHERE root.id IN \$ids\n" +
            "OPTIONAL MATCH (root)-[hr:${RequirementEntity.HAS_REQUIREMENT}*1..]->(child:${RequirementEntity.LABEL} {type: \$type})" +
            "OPTIONAL MATCH (root)-[r]->(other)" +
            "RETURN root, collect(hr), collect(child)"
    )
    fun findByIdWithChildrenOfType(ids: Collection<RequirementIdentifier>, type: String): Flux<RequirementEntity>

    // TODO also fetch other relations (info concepts, evidence type lists, ...) or it won't be filled in the entity
    @Query("" +
            "MATCH (root:${RequirementEntity.LABEL} WHERE root.identifier IN \$ids)" +
            "-[hr:${RequirementEntity.HAS_REQUIREMENT}*1..]->" +
            "(child:${RequirementEntity.LABEL} {type: \$type})\n" +
            "RETURN child, collect(hr)"
    )
    fun findAllChildrenOfType(ids: Collection<RequirementIdentifier>, type: String): Flux<RequirementEntity>
}

@Service
class RequirementSnapRepository(
    override val repository: RequirementRepository
): SnapRepositoryBase<RequirementEntity, RequirementId>()
