package io.komune.registry.s2.catalogue.draft.api.entity

import com.redis.om.spring.annotations.Document
import com.redis.om.spring.annotations.Indexed
import com.redis.om.spring.annotations.Searchable
import com.redis.om.spring.annotations.TagIndexed
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.catalogue.domain.command.DatasetId
import io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftId
import io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftState
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.commons.model.UserId
import org.springframework.data.annotation.Id
import s2.dsl.automate.model.WithS2Id
import s2.dsl.automate.model.WithS2State

@Document("CatalogueDraft")
open class CatalogueDraftEntity: WithS2Id<CatalogueDraftId>, WithS2State<CatalogueDraftState>  {

    @Id
    open lateinit var id: CatalogueDraftId

    @Searchable(nostem=true)
    open lateinit var status: CatalogueDraftState

    @TagIndexed
    open lateinit var catalogueId: CatalogueId

    @TagIndexed
    open lateinit var originalCatalogueId: CatalogueId

    @TagIndexed
    open lateinit var language: Language

    @Indexed
    open var baseVersion: Int = 0

    open var versionNotes: String? = null

    open var rejectReason: String? = null

    open var datasetIdMap: Map<DatasetId, DatasetId> = emptyMap()

    @TagIndexed
    lateinit var creatorId: UserId

    var issued: Long = 0
    var modified: Long = 0

    @Indexed
    var deleted: Boolean = false

    override fun s2Id() = id
    override fun s2State() = status
}
