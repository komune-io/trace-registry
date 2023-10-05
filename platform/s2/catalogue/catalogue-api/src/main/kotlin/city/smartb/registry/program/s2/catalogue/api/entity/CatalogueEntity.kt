package city.smartb.registry.program.s2.catalogue.api.entity

import city.smartb.registry.s2.catalogue.domain.automate.CatalogueId
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueIdentifier
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueState
import city.smartb.registry.s2.catalogue.domain.model.SkosConcept
import city.smartb.registry.s2.catalogue.domain.model.SkosConceptId
import com.redis.om.spring.annotations.Document
import com.redis.om.spring.annotations.Searchable
import org.springframework.data.annotation.Id
import s2.dsl.automate.model.WithS2Id
import s2.dsl.automate.model.WithS2State

@Document
open class CatalogueEntity: WithS2Id<CatalogueId>, WithS2State<CatalogueState>  {

    @Id
    open lateinit var id: CatalogueId

    @Searchable(nostem=true)
    open lateinit var status: CatalogueState


    @Searchable(nostem=true)
    lateinit var identifier: CatalogueIdentifier

    @Searchable(nostem=true)
    var title: String = ""

    @Searchable(nostem=true)
    var homepage: String? = null

    @Searchable(nostem=true)
    var img: String? = null

    @Searchable(nostem=true)
    lateinit var type: String

    @Searchable(nostem=true)
    var description: String? = null

    var themes: List<SkosConceptId> = emptyList()
    var catalogues: List<CatalogueId> = emptyList()

    var lastUpdate: Long? = null

    override fun s2Id() = id
    override fun s2State() = status
}
