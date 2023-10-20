package city.smartb.registry.program.s2.catalogue.api.entity

import city.smartb.fs.s2.file.domain.model.FilePath
import city.smartb.registry.dsl.skos.domain.model.SkosConcept
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueId
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueIdentifier
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueState
import city.smartb.registry.s2.catalogue.domain.command.DatasetId
import city.smartb.registry.s2.structure.domain.model.Structure
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

    @Indexed
    lateinit var type: String

    @Indexed
    var structure: Structure? = null

    @Searchable(nostem=true)
    var description: String? = null

//    @TagIndexed
    var themes: Set<SkosConcept> = emptySet()

    @TagIndexed
    var catalogues: Set<CatalogueId> = emptySet()

    @TagIndexed
    var datasets: Set<DatasetId> = emptySet()

    var lastUpdate: Long? = null

    override fun s2Id() = id
    override fun s2State() = status
}
