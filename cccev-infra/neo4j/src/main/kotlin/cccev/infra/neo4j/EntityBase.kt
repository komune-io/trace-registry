package cccev.infra.neo4j

import org.neo4j.ogm.annotation.Version

abstract class EntityBase {
    @Version
    var version: Long? = null
    var creationDate: Long = System.currentTimeMillis()
    var lastModificationDate: Long = System.currentTimeMillis()
}
