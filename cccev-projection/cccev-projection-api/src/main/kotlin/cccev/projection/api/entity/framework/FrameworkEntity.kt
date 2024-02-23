package cccev.projection.api.entity.framework

import cccev.dsl.model.FrameworkId
import cccev.s2.framework.domain.FrameworkState
import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.LastModifiedDate
import org.springframework.data.annotation.Version
import org.springframework.data.neo4j.core.schema.Id
import org.springframework.data.neo4j.core.schema.Node
import s2.dsl.automate.model.WithS2Id
import s2.dsl.automate.model.WithS2State

@Node(FrameworkEntity.LABEL)
data class FrameworkEntity(
    @Id
    val id: FrameworkId,
    @Version
    var version: Long = 0,
    @CreatedDate
    var creationDate: Long = 0,
    @LastModifiedDate
    var lastModificationDate: Long = 0,
    val identifier: String? = null,
    val status: FrameworkState,
    val name: String
): WithS2Id<FrameworkId>, WithS2State<FrameworkState> {

    companion object {
        const val LABEL = "Framework"
    }

    override fun s2Id() = id
    override fun s2State(): FrameworkState = status
}
