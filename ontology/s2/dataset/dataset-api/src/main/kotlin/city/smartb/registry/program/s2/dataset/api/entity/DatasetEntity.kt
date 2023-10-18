package city.smartb.registry.program.s2.dataset.api.entity

import city.smartb.fs.s2.file.domain.model.FilePath
import city.smartb.registry.s2.catalogue.domain.model.Activity
import city.smartb.registry.s2.catalogue.domain.model.Agent
import city.smartb.registry.s2.dataset.domain.automate.DatasetId
import city.smartb.registry.s2.dataset.domain.automate.DatasetIdentifier
import city.smartb.registry.s2.dataset.domain.automate.DatasetState
import city.smartb.registry.s2.catalogue.domain.model.SkosConcept
import city.smartb.registry.s2.catalogue.domain.model.SkosConceptScheme
import com.redis.om.spring.annotations.Document
import com.redis.om.spring.annotations.Indexed
import com.redis.om.spring.annotations.Searchable
import com.redis.om.spring.annotations.TagIndexed
import org.springframework.data.annotation.Id
import s2.dsl.automate.model.WithS2Id
import s2.dsl.automate.model.WithS2State

@Document
open class DatasetEntity: WithS2Id<DatasetId>, WithS2State<DatasetState>  {

    @Id
    open lateinit var id: DatasetId

    @Searchable(nostem=true)
    open lateinit var status: DatasetState

    @Indexed
    lateinit var identifier: DatasetIdentifier

    @Searchable(nostem=true)
    var title: String = ""

    @Searchable(nostem=true)
    var homepage: String? = null

    var img: FilePath? = null

    @Indexed
    lateinit var type: String

    var temporalResolution: String? = null
    var wasGeneratedBy: Activity? = null
    var accessRights: String? = null
    var conformsTo: List<SkosConceptScheme>? = null
    var creator: Agent? = null
    var description: String? = null
    var releaseDate: String? = null
    var updateDate: String? = null
    var language: List<String>? = null
    var publisher: Agent? = null

    @TagIndexed
    var theme: List<SkosConcept>? = null
    @TagIndexed
    var keywords: List<String>? = null
    var landingPage: String? = null
    var version: String? = null
    var versionNotes: String? = null
    var length: Int? = null

    var themes: Set<SkosConcept> = emptySet()
    var lastUpdate: Long? = null

    override fun s2Id() = id
    override fun s2State() = status
}
