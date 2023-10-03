package city.smartb.registry.program.s2.catalogue.api.entity

import city.smartb.registry.s2.catalogue.domain.automate.CatalogueId
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueIdentifier
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueState
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
    lateinit var homepage: String

    @Searchable(nostem=true)
    var country: String? = null

    @Searchable(nostem=true)
    var subContinent: String? = null

    override fun s2Id() = id
    override fun s2State() = status
}
