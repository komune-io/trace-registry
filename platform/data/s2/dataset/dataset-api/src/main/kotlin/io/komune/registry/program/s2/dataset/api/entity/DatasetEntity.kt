package io.komune.registry.program.s2.dataset.api.entity

import com.redis.om.spring.annotations.Document
import com.redis.om.spring.annotations.Indexed
import com.redis.om.spring.annotations.Searchable
import com.redis.om.spring.annotations.TagIndexed
import io.komune.fs.s2.file.domain.model.FilePath
import io.komune.registry.dsl.dcat.domain.model.Activity
import io.komune.registry.dsl.dcat.domain.model.Agent
import io.komune.registry.dsl.skos.domain.model.SkosConcept
import io.komune.registry.dsl.skos.domain.model.SkosConceptScheme
import io.komune.registry.s2.dataset.domain.automate.DatasetId
import io.komune.registry.s2.dataset.domain.automate.DatasetIdentifier
import io.komune.registry.s2.dataset.domain.automate.DatasetState
import org.springframework.data.annotation.Id
import s2.dsl.automate.model.WithS2Id
import s2.dsl.automate.model.WithS2State

@Document("Dataset")
open class DatasetEntity: WithS2Id<DatasetId>, WithS2State<DatasetState>  {

    @Id
    open lateinit var id: DatasetId

    @Searchable(nostem=true)
    open lateinit var status: DatasetState

    @Indexed
    lateinit var identifier: DatasetIdentifier

    @Searchable(nostem=true)
    var title: String = ""

    var img: FilePath? = null

    @Indexed
    lateinit var type: String

    @Searchable(nostem=true)
    lateinit var language: String

    var description: String? = null

    var wasGeneratedBy: Activity? = null
    var source: String? = null
    var creator: Agent? = null
    var publisher: Agent? = null
    var validator: Agent? = null
    var accessRights: String? = null
    var license: String? = null
    var temporalResolution: String? = null

    var conformsTo: List<SkosConceptScheme>? = null
    var format: String? = null
    @TagIndexed
    var keywords: List<String>? = null
    @Searchable(nostem=true)
    var homepage: String? = null
    var landingPage: String? = null
    var version: String? = null
    var versionNotes: String? = null
    var length: Int? = null
    var themes: Set<SkosConcept> = emptySet()

    var issued: Long? = null
    var modified: Long? = null
    var releaseDate: String? = null

    var distributions: List<DistributionEntity>? = null

    override fun s2Id() = id
    override fun s2State() = status
}
