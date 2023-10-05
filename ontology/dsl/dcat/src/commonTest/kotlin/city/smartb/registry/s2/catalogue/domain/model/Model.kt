package city.smartb.registry.s2.catalogue.domain.model

import city.smartb.im.f2.organization.domain.model.OrganizationRef


sealed interface Framework {
    val identifier: String
    val name: String
    val overview: String
    val details: String
    val sectoralScopes: List<SectoralScopesRef>
    val document: List<DocumentRef>
    val projects: List<CatalogueRef>
}



interface Standard: Framework {
    override val identifier: String
    override val name: String
    override val overview: String
    override val details: String
    override val sectoralScopes: List<SectoralScopesRef>
    val administrator: OrganizationRef
    val indicator: List<IndicatorRef>
    val programs: List<Program>
}

interface SectoralScopesRef {
    val identifier: String
    val name: String
    val description: String
}
interface IndicatorRef {
    val identifier: String
    val name: String
    val goal: Long
    val current: Long
    val trustability: Int
}

interface Program : Framework {
    override val identifier: String
    override val name: String
    override val overview: String
    override val details: String
    override val sectoralScopes: List<SectoralScopesRef>
    val description: String
    val programs: List<Methodology>
}

interface Methodology : Framework {
    override val identifier: String
    override val name: String
    override val overview: String
    override val details: String
    override val sectoralScopes: List<SectoralScopesRef>
}


interface CatalogueRef {
    val identifier: String
    val name: String
    val description: String
}
interface DocumentRef {
    val identifier: String
    val name: String
    val description: String
    val url: String
}
