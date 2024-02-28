package cccev.infra.neo4j

import org.neo4j.ogm.annotation.Version

open class EntityBase {
    @Version
    open var version: Long? = null
    open var creationDate: Long = System.currentTimeMillis()
    open var lastModificationDate: Long = System.currentTimeMillis()
}
