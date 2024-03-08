package city.smartb.registry.f2.activity.api.service

import cccev.core.certification.entity.Certification
import cccev.core.certification.model.CertificationId
import cccev.dsl.client.CCCEVClient
import cccev.dsl.client.model.toCertificationFlatGraph
import cccev.dsl.client.model.unflatten
import cccev.f2.certification.domain.query.CertificationGetQuery
import cccev.f2.commons.CertificationFlatGraph
import city.smartb.registry.api.commons.exception.NotFoundException
import f2.dsl.fnc.invokeWith
import org.springframework.stereotype.Service

@Service
class CertificateService(
    private val cccevClient: CCCEVClient,
) {

    suspend fun get(id: CertificationId): Certification {
        return getOrNull(id)
            ?: throw NotFoundException("Certification", id)
    }

    suspend fun getOrNull(id: CertificationId): Certification? {
        return getGraphOrNull(id)?.let {
            it.certification.unflatten(it)
        }
    }

    suspend fun getGraph(id: CertificationId): CertificationFlatGraph {
        return getGraphOrNull(id)
            ?: throw NotFoundException("Certification", id)
    }

    suspend fun getGraphOrNull(id: CertificationId): CertificationFlatGraph? {
        return CertificationGetQuery(
            id = id
        ).invokeWith(cccevClient.certificationClient.certificationGet())
            .toCertificationFlatGraph()
    }
}
