package city.smartb.registry.dsl.dcat.domain.model

import kotlinx.serialization.Serializable

@Serializable
data class Agent(
    val identifier: String,
    // Déjà définie précédemment
)

@Serializable
data class Relationship(
    val relation: Agent,
    val hadRole: Role
)

@Serializable
data class Role(
    val identifier: String,
    // Aucune propriété spécifique dans DCAT
)

@Serializable
data class PeriodOfTime(
    val startDate: String? = null,
    val endDate: String? = null,
    val beginning: String? = null,
    val end: String? = null
)

@Serializable
data class Location(
    val geometry: String? = null,
    val boundingBox: String? = null,
    val centroid: String? = null
)

@Serializable
data class Checksum(
    val algorithm: String,
    val checksumValue: String
)

@Serializable
data class Policy(
    val identifier: String,
)

@Serializable
data class Rights(
    val identifier: String,
)
@Serializable
data class Attribution(
    val identifier: String,
)

@Serializable
data class Activity(
    val identifier: String,
)
@Serializable
data class LicenseDocument(
    val identifier: String,
)
