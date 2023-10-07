package city.smartb.registry.program.s2.catalogue.api.entity

import city.smartb.fs.s2.file.domain.model.FilePath
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueId
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueIdentifier
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueState
import city.smartb.registry.s2.catalogue.domain.model.SkosConcept
import com.redis.om.spring.annotations.Document
import com.redis.om.spring.annotations.Indexed
import com.redis.om.spring.annotations.Searchable
import com.redis.om.spring.annotations.TagIndexed
import org.springframework.data.annotation.Id
import s2.dsl.automate.model.WithS2Id
import s2.dsl.automate.model.WithS2State

@Document
open class CatalogueEntity: WithS2Id<CatalogueId>, WithS2State<CatalogueState>  {

    @Id
    open lateinit var id: CatalogueId

    @Searchable(nostem=true)
    open lateinit var status: CatalogueState

    @Indexed
    lateinit var identifier: CatalogueIdentifier

    @Searchable(nostem=true)
    var title: String = ""

    @Searchable(nostem=true)
    var homepage: String? = null

    var img: FilePath? = null

    @Searchable(nostem=true)
    lateinit var type: String

    @Searchable(nostem=true)
    var description: String? = null

    var themes: Set<SkosConcept> = emptySet()

    @TagIndexed
    var catalogues: Set<CatalogueId> = emptySet()

    var lastUpdate: Long? = null

    override fun s2Id() = id
    override fun s2State() = status
}
