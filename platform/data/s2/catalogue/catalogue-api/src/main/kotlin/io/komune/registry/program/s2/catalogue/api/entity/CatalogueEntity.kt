package io.komune.registry.program.s2.catalogue.api.entity

import com.redis.om.spring.annotations.Document
import com.redis.om.spring.annotations.Indexed
import com.redis.om.spring.annotations.SchemaFieldType
import com.redis.om.spring.annotations.Searchable
import com.redis.om.spring.annotations.TagIndexed
import io.komune.fs.s2.file.domain.model.FilePath
import io.komune.registry.s2.catalogue.domain.automate.CatalogueState
import io.komune.registry.s2.catalogue.domain.model.CatalogueAccessRight
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.CatalogueIdentifier
import io.komune.registry.s2.commons.model.DatasetId
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
    var themeIds: MutableSet<ConceptId> = mutableSetOf()

    @Searchable(nostem=true)
    var homepage: String? = null

    @Indexed
    var structure: Structure? = null

    @TagIndexed
    var childrenCatalogueIds: MutableSet<CatalogueId> = mutableSetOf()

    var relatedCatalogueIds: MutableMap<String, MutableSet<CatalogueId>> = mutableMapOf()

    @TagIndexed
    var childrenDatasetIds: MutableSet<DatasetId> = mutableSetOf()

    @TagIndexed
    var referencedDatasetIds: MutableSet<DatasetId> = mutableSetOf()

    var translationIds: MutableMap<Language, CatalogueId> = mutableMapOf()

    var isTranslationOf: CatalogueId? = null

    @TagIndexed
    var creatorId: UserId? = null

    @TagIndexed
    var creatorOrganizationId: OrganizationId? = null

    @TagIndexed
    var ownerOrganizationId: OrganizationId? = null

    var publisherId: UserId? = null
    var validatorId: UserId? = null

    var stakeholder: String? = null

    @Indexed(nostem = true, schemaFieldType = SchemaFieldType.TAG)
    var accessRights: CatalogueAccessRight = CatalogueAccessRight.PRIVATE
    var licenseId: LicenseId? = null

    var integrateCounter: Boolean? = null

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

    // Gnegnegne CatalogueEntity is not a proper JavaBean because isTranslationOf has no standard getter.
    fun getIsTranslationOf() = isTranslationOf
}
