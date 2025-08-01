package io.komune.registry.s2.catalogue.draft.api.entity

import com.redis.om.spring.annotations.Document
import com.redis.om.spring.annotations.Indexed
import com.redis.om.spring.annotations.Searchable
import com.redis.om.spring.annotations.TagIndexed
import io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftState
import io.komune.registry.s2.commons.model.CatalogueDraftId
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.CatalogueIdentifier
import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.commons.model.OrganizationId
import io.komune.registry.s2.commons.model.RedisTable
import io.komune.registry.s2.commons.model.UserId
import org.springframework.data.annotation.Id
import s2.dsl.automate.model.WithS2Id
import s2.dsl.automate.model.WithS2State

@Document(RedisTable.CATALOGUE_DRAFT)
open class CatalogueDraftEntity: WithS2Id<CatalogueDraftId>, WithS2State<CatalogueDraftState>  {

    @Id
    open lateinit var id: CatalogueDraftId

    @Searchable(nostem=true)
    open lateinit var status: CatalogueDraftState

    @TagIndexed
    open var parentId: CatalogueDraftId? = null

    @TagIndexed
    open lateinit var catalogueId: CatalogueId

    @Searchable(nostem=true)
    open var title: String = ""

    @TagIndexed
    open lateinit var originalCatalogueId: CatalogueId

    @TagIndexed
    open lateinit var originalCatalogueIdentifier: CatalogueIdentifier

    @TagIndexed
    open lateinit var originalCatalogueType: String

    @TagIndexed
    open lateinit var language: Language

    @Indexed
    open var baseVersion: Int = 0

    open var versionNotes: String? = null

    open var rejectReason: String? = null

    open var datasetIdMap: MutableMap<DatasetId, DatasetId> = mutableMapOf() // original to drafted

    open var addedParentIds: MutableSet<CatalogueId> = mutableSetOf()
    open var removedParentIds: MutableSet<CatalogueId> = mutableSetOf()

    open var addedExternalReferencesToDatasets: MutableMap<CatalogueId, MutableSet<DatasetId>> = mutableMapOf()
    open var removedExternalReferencesToDatasets: MutableMap<CatalogueId, MutableSet<DatasetId>> = mutableMapOf()

    @TagIndexed
    var creatorId: UserId? = null
    var validatorId: UserId? = null
    var validatorOrganizationId: OrganizationId? = null

    var issued: Long = 0
    var modified: Long = 0

    @Indexed
    var deleted: Boolean = false

    override fun s2Id() = id
    override fun s2State() = status
}
