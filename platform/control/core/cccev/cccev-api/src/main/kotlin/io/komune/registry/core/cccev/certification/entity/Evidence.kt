package io.komune.registry.core.cccev.certification.entity

import io.komune.fs.s2.file.domain.model.FilePath
import io.komune.registry.api.commons.utils.parseJsonTo
import io.komune.registry.api.commons.utils.toJson
import io.komune.registry.core.cccev.evidencetype.entity.EvidenceType
import io.komune.registry.s2.commons.model.EvidenceId
import org.neo4j.ogm.annotation.Id
import org.neo4j.ogm.annotation.NodeEntity
import org.neo4j.ogm.annotation.Relationship
import org.neo4j.ogm.annotation.Version

@NodeEntity(Evidence.LABEL)
class Evidence {
    companion object {
        const val LABEL = "Evidence"
        const val IS_CONFORMANT_TO = "IS_CONFORMANT_TO"
    }
    @Id
    lateinit var id: EvidenceId

    private lateinit var fileJson: String
    var file: FilePath
        get() = fileJson.parseJsonTo<FilePath>()
        set(value) { fileJson = value.toJson() }

    @Relationship(IS_CONFORMANT_TO)
    lateinit var evidenceType: EvidenceType

    @Version
    var version: Long? = null

    var creationDate: Long = System.currentTimeMillis()
}
