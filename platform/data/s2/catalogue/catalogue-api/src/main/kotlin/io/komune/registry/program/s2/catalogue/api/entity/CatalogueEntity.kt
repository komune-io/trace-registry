package io.komune.registry.program.s2.catalogue.api.entity

import com.redis.om.spring.annotations.Document
import com.redis.om.spring.annotations.Indexed
import com.redis.om.spring.annotations.Searchable
import com.redis.om.spring.annotations.TagIndexed
import io.komune.fs.s2.file.domain.model.FilePath
import io.komune.registry.dsl.dcat.domain.model.Agent
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.catalogue.domain.automate.CatalogueIdentifier
import io.komune.registry.s2.catalogue.domain.automate.CatalogueState
import io.komune.registry.s2.catalogue.domain.command.DatasetId
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.concept.domain.ConceptId
import io.komune.registry.s2.license.domain.LicenseId
import io.komune.registry.s2.structure.domain.model.Structure
import org.springframework.data.annotation.Id
import s2.dsl.automate.model.WithS2Id
import s2.dsl.automate.model.WithS2State

@Document("Catalogue")
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

    var creator: Agent? = null
    var publisher: Agent? = null
    var validator: Agent? = null
    var accessRights: String? = null
    var licenseId: LicenseId? = null

    @Indexed
    var hidden: Boolean = false

    var issued: Long? = null
    var modified: Long? = null

    override fun s2Id() = id
    override fun s2State() = status
}
