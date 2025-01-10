package io.komune.registry.f2.activity.api.service

import cccev.dsl.client.CCCEVClient
import cccev.dsl.client.model.unflatten
import cccev.dsl.model.Certification
import cccev.dsl.model.CertificationId
import cccev.f2.certification.query.CertificationGetQuery
import f2.dsl.fnc.invokeWith
import io.komune.registry.s2.commons.exception.NotFoundException
import org.springframework.stereotype.Service

@Service
class CertificateService(private val cccevClient: CCCEVClient)
{

    suspend fun get(id: CertificationId): Certification {
        return getOrNull(id)
            ?: throw NotFoundException("Certification", id)
    }

    suspend fun getOrNull(id: CertificationId): Certification? {
        return getGraphOrNull(id)
    }

    suspend fun getGraph(id: CertificationId): Certification {
        return getOrNull(id)
            ?: throw NotFoundException("Certification", id)
    }

    private suspend fun getGraphOrNull(id: CertificationId): Certification? {
        val result = CertificationGetQuery(
            id = id
        ).invokeWith(cccevClient.certificationClient.certificationGet())
        return result.unflatten()
    }
}
