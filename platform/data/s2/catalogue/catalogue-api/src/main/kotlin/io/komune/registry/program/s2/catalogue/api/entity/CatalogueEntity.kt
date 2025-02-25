package io.komune.registry.program.s2.catalogue.api.entity

import com.redis.om.spring.annotations.Document
import com.redis.om.spring.annotations.Indexed
import com.redis.om.spring.annotations.Searchable
import com.redis.om.spring.annotations.TagIndexed
import io.komune.fs.s2.file.domain.model.FilePath
import io.komune.registry.s2.catalogue.domain.automate.CatalogueState
import io.komune.registry.s2.catalogue.domain.command.DatasetId
import io.komune.registry.s2.catalogue.domain.model.CatalogueAccessRight
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.CatalogueIdentifier
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.commons.model.Location
import io.komune.registry.s2.commons.model.OrganizationId
import io.komune.registry.s2.commons.model.RedisTable
import io.komune.registry.s2.commons.model.UserId
import io.komune.registry.s2.concept.domain.ConceptId
import io.komune.registry.s2.license.domain.LicenseId
import io.komune.registry.s2.structure.domain.model.Structure
import org.springframework.data.annotation.Id
import s2.dsl.automate.model.WithS2Id
import s2.dsl.automate.model.WithS2State

@Document(RedisTable.CATALOGUE)
open class CatalogueEntity: WithS2Id<CatalogueId>, WithS2State<CatalogueState>  {

    @Id
    open lateinit var id: CatalogueId

    @Searchable(nostem=true)
    open lateinit var status: CatalogueState

    @Indexed
    lateinit var identifier: CatalogueIdentifier

    @Searchable(nostem=true)
    var title: String = ""

    var img: FilePath? = null

    @Indexed
    lateinit var type: String

    @Searchable(nostem=true)
    var language: Language? = null

    @Searchable(nostem=true)
    var description: String? = null

    @TagIndexed
    var themeIds: Set<ConceptId> = emptySet()

    @Searchable(nostem=true)
    var homepage: String? = null

    @Indexed
    var structure: Structure? = null

    @TagIndexed
    var catalogueIds: Set<CatalogueId> = emptySet()

    @TagIndexed
    var datasetIds: Set<DatasetId> = emptySet()

    var translationIds: Map<Language, CatalogueId> = emptyMap()

    var creatorId: UserId? = null
    var creatorOrganizationId: OrganizationId? = null

    var ownerOrganizationId: OrganizationId? = null

    var publisherId: UserId? = null
    var validatorId: UserId? = null
    var accessRights: CatalogueAccessRight = CatalogueAccessRight.PRIVATE
    var licenseId: LicenseId? = null

    var location: Location? = null

    @Indexed
    var hidden: Boolean = false

    var issued: Long = 0
    var modified: Long = 0

    var version: Int = 0
    var versionNotes: String? = null

    override fun s2Id() = id
    override fun s2State() = status

    override fun toString(): String {
        return "[$id] - $title - $status"
    }
}
