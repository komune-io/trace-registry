package city.smartb.registry.program.f2.pool.api.service

import cccev.dsl.client.CCCEVClient
import cccev.f2.concept.domain.model.InformationConceptDTOBase
import cccev.f2.concept.domain.query.InformationConceptGetByIdentifierQueryDTOBase
import cccev.s2.concept.domain.InformationConceptIdentifier
import city.smartb.registry.program.api.commons.model.SimpleCache
import city.smartb.registry.program.f2.pool.api.model.toDTO
import city.smartb.registry.program.f2.pool.domain.model.AssetPoolDTOBase
import city.smartb.registry.program.infra.fs.FsService
import city.smartb.registry.program.s2.asset.api.AssetPoolFinderService
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.asset.domain.automate.AssetTransactionId
import city.smartb.registry.program.s2.asset.domain.model.AssetPool
import f2.dsl.fnc.invokeWith
import io.ktor.utils.io.jvm.javaio.toInputStream
import java.io.InputStream
import org.springframework.core.io.InputStreamResource
import org.springframework.http.ResponseEntity
import org.springframework.http.server.reactive.ServerHttpResponse
import org.springframework.stereotype.Service
import org.springframework.web.bind.annotation.RequestParam

@Service
class AssetCertificationF2FinderService(
    private val assetPoolFinderService: AssetPoolFinderService,
    private val fsService: FsService
) {
    suspend fun assetCertificateDownload(
        transactionId: AssetTransactionId,
        response: ServerHttpResponse
    ): InputStream {
        return fsService.downloadFile(response) {
            assetPoolFinderService.getTransaction(transactionId).file
        }?.toInputStream()
            ?: InputStream.nullInputStream()
    }
}
