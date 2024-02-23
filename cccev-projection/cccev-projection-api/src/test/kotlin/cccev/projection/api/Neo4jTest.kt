package cccev.projection.api

import cccev.projection.api.entity.requirement.RequirementEntity
import cccev.projection.api.entity.requirement.RequirementRepository
import cccev.s2.requirement.domain.RequirementState
import cccev.s2.requirement.domain.model.RequirementKind
import kotlinx.coroutines.reactor.awaitSingle
import kotlinx.coroutines.test.runTest
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.TestInstance
import org.junit.jupiter.api.extension.ExtendWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.junit.jupiter.SpringExtension
import java.util.UUID

@SpringBootTest(classes = [Neo4jTestApplication::class])
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@ExtendWith(SpringExtension::class)
class Neo4jTest {

    @Autowired
    private lateinit var requirementRepository: RequirementRepository

    @Test
    fun test() = runTest {
        val requirementPoP = RequirementEntity(
            id = UUID.randomUUID().toString(),
            identifier = "PoP",
            name = "Protocol",
            kind = RequirementKind.INFORMATION,
            status = RequirementState.CREATED,
        )
        val requirementPoP2 = RequirementEntity(
            kind = RequirementKind.INFORMATION,
            identifier = "PoP2",
            name = "Protocol",
            id = UUID.randomUUID().toString(),
            status = RequirementState.CREATED,
        )
        val requirement = RequirementEntity(
            kind = RequirementKind.INFORMATION,
            identifier = "P",
            id = UUID.randomUUID().toString(),
            name = "Protocol",
            status = RequirementState.CREATED,
//            hasRequirement = listOf("PoP", "PoP2")
            hasQualifiedRelation = mutableMapOf(
                RequirementEntity.HAS_REQUIREMENT to mutableListOf(
                RequirementEntity(
                    kind = RequirementKind.INFORMATION,
                    identifier = "PoP",
                    id = UUID.randomUUID().toString(),
                    name = "ProtocolOfProtocol",
                    status = RequirementState.CREATED,
                    hasQualifiedRelation = mutableMapOf(
                        RequirementEntity.HAS_REQUIREMENT to  mutableListOf(
                            RequirementEntity(
                                kind = RequirementKind.INFORMATION,
                                identifier = "PoPinP",
                                id = UUID.randomUUID().toString(),
                                name = "ProtocolOfProtocolInProtocol",
                                status = RequirementState.CREATED,
                            )
                        )
                    )
                )
            )
        ))
        requirementRepository.save(requirement).awaitSingle()
    }
}
