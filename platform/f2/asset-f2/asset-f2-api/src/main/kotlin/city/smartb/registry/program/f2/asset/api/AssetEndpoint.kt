package city.smartb.registry.program.f2.asset.api

import city.smartb.registry.program.api.commons.utils.anyNotNull
import city.smartb.registry.program.f2.asset.api.service.AssetF2AggregateService
import city.smartb.registry.program.f2.asset.api.service.AssetF2FinderService
import city.smartb.registry.program.f2.asset.api.service.AssetPoliciesEnforcer
import city.smartb.registry.program.f2.asset.domain.AssetCommandApi
import city.smartb.registry.program.f2.asset.domain.AssetQueryApi
import city.smartb.registry.program.f2.asset.domain.command.AssetIssueFunction
import city.smartb.registry.program.f2.asset.domain.command.AssetIssuedEventDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetOffsetFunction
import city.smartb.registry.program.f2.asset.domain.command.AssetOffsettedEventDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderCancelFunction
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderCompleteFunction
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderDeleteFunction
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderSubmitFunction
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderUpdateFunction
import city.smartb.registry.program.f2.asset.domain.command.AssetRetireFunction
import city.smartb.registry.program.f2.asset.domain.command.AssetRetiredEventDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetTransferFunction
import city.smartb.registry.program.f2.asset.domain.command.AssetTransferredEventDTOBase
import city.smartb.registry.program.f2.asset.domain.query.AssetCertificateDownloadQuery
import city.smartb.registry.program.f2.asset.domain.query.AssetStatsGetFunction
import city.smartb.registry.program.f2.asset.domain.query.AssetTransactionGetFunction
import city.smartb.registry.program.f2.asset.domain.query.AssetTransactionGetResult
import city.smartb.registry.program.f2.asset.domain.query.AssetTransactionPageFunction
import city.smartb.registry.program.f2.asset.domain.query.AssetTransactionPageResultDTOBase
import city.smartb.registry.program.infra.fs.FsService
import city.smartb.registry.program.s2.asset.api.AssetPoolFinderService
import city.smartb.registry.program.s2.asset.domain.automate.AssetTransactionId
import city.smartb.registry.program.s2.asset.domain.model.AssetTransactionType
import f2.dsl.cqrs.filter.ExactMatch
import f2.dsl.cqrs.filter.StringMatch
import f2.dsl.cqrs.filter.StringMatchCondition
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.fnc.f2Function
import io.ktor.utils.io.jvm.javaio.toInputStream
import jakarta.annotation.security.PermitAll
import java.io.InputStream
import org.springframework.context.annotation.Bean
import org.springframework.core.io.InputStreamResource
import org.springframework.http.ResponseEntity
import org.springframework.http.server.reactive.ServerHttpResponse
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import s2.spring.utils.logger.Logger

@RestController
@RequestMapping
class AssetEndpoint(
    private val assetF2AggregateService: AssetF2AggregateService,
    private val assetF2FinderService: AssetF2FinderService,
    private val assetPoliciesEnforcer: AssetPoliciesEnforcer,
    private val fsService: FsService,
    private val assetPoolFinderService: AssetPoolFinderService
): AssetQueryApi, AssetCommandApi {
    private val logger by Logger()

    @PermitAll
    @Bean
    override fun assetTransactionPage(): AssetTransactionPageFunction = f2Function { query ->
        logger.info("assetTransactionPage: $query")
        assetF2FinderService.page(
            projectId = query.projectId?.let(::ExactMatch),
            poolId = query.poolId?.let(::ExactMatch),
            transactionId = query.transactionId?.let { StringMatch(it, StringMatchCondition.CONTAINS) },
            transactionFrom = query.transactionFrom?.let(::ExactMatch),
            transactionTo = query.transactionTo?.let(::ExactMatch),
            type = query.type?.let { ExactMatch(AssetTransactionType.valueOf(it)) },
            offset = takeIf { anyNotNull(query.limit, query.offset) }?.let {
                OffsetPagination(
                    offset = query.offset ?: 0,
                    limit = query.limit ?: Int.MAX_VALUE
                )
            }
        ).let {
            AssetTransactionPageResultDTOBase(
                items = it.items,
                total = it.total
            )
        }
    }

    @Bean
    override fun assetIssue(): AssetIssueFunction = f2Function { command ->
        logger.info("assetIssue: $command")
        assetPoliciesEnforcer.checkIssue()
        assetF2AggregateService.issue(command)
            .let { AssetIssuedEventDTOBase(it.id) }
    }

    @Bean
    override fun assetTransfer(): AssetTransferFunction = f2Function { command ->
        logger.info("assetTransfer: $command")
        assetPoliciesEnforcer.checkTransfer()
        assetF2AggregateService.transfer(command)
            .let { AssetTransferredEventDTOBase(it.id) }
    }

    @Bean
    override fun assetOffset(): AssetOffsetFunction = f2Function { command ->
        logger.info("assetOffset: $command")
        assetPoliciesEnforcer.checkOffset()
        assetF2AggregateService.offset(command)
            .let { AssetOffsettedEventDTOBase(it.id) }
    }

    @Bean
    override fun assetRetire(): AssetRetireFunction = f2Function { command ->
        logger.info("assetRetire: $command")
        assetPoliciesEnforcer.checkRetire()
        assetF2AggregateService.retire(command)
            .let { AssetRetiredEventDTOBase(it.id) }
    }

    @Bean
    override fun assetOrderSubmit(): AssetOrderSubmitFunction = f2Function { command ->
        logger.info("assetOrderSubmit: $command")
        assetPoliciesEnforcer.checkSubmitOrder(command.id)
        assetF2AggregateService.submitOrder(command)
    }

    @Bean
    override fun assetOrderUpdate(): AssetOrderUpdateFunction = f2Function { command ->
        logger.info("assetOrderUpdate: $command")
        assetPoliciesEnforcer.checkUpdateOrder(command.id)
        assetF2AggregateService.updateOrder(command)
    }

    @Bean
    override fun assetOrderCancel(): AssetOrderCancelFunction = f2Function { command ->
        logger.info("assetOrderCancel: $command")
        assetPoliciesEnforcer.checkCancelOrder(command.id)
        assetF2AggregateService.cancelOrder(command)
    }

    @Bean
    override fun assetOrderComplete(): AssetOrderCompleteFunction = f2Function { command ->
        logger.info("assetOrderComplete: $command")
        assetPoliciesEnforcer.checkCompleteOrder(command.id)
        assetF2AggregateService.completeOrder(command)
    }

    @Bean
    override fun assetOrderDelete(): AssetOrderDeleteFunction = f2Function { command ->
        logger.info("assetOrderDelete: $command")
        assetPoliciesEnforcer.checkDeleteOrder(command.id)
        assetF2AggregateService.deleteOrder(command)
    }

    @PostMapping("/assetCertificateDownload")
    suspend fun assetCertificateDownload(
        @RequestBody query: AssetCertificateDownloadQuery,
        response: ServerHttpResponse
    ): ResponseEntity<InputStreamResource> {
        logger.info("assetCertificateDownload: $query")
        val stream =  fsService.downloadFile(response){
            assetPoolFinderService.getTransaction(query.transactionId).file
        }?.toInputStream() ?: InputStream.nullInputStream()

        return ResponseEntity.ok()
                .body(InputStreamResource(stream))
    }

    @PermitAll
    @GetMapping("/assetCertificateDownload")
    suspend fun assetCertificateDownload(
        @RequestParam transactionId: AssetTransactionId,
        response: ServerHttpResponse
    ): ResponseEntity<InputStreamResource> {
        logger.info("assetCertificateDownload: $transactionId")
        val stream = fsService.downloadFile(response) {
            assetPoolFinderService.getTransaction(transactionId).file
        }?.toInputStream()
                ?: InputStream.nullInputStream()

        return ResponseEntity.ok()
                .body(InputStreamResource(stream))
    }

    @Bean
    @PermitAll
    override fun assetTransactionGet(): AssetTransactionGetFunction = f2Function { query ->
        logger.info("assetTransactionGet: $query")
        assetF2FinderService.getTransaction(query.transactionId).let(::AssetTransactionGetResult)
    }

    @Bean
    @PermitAll
    override fun assetStatsGet(): AssetStatsGetFunction = f2Function { query ->
        logger.info("assetStatsGet: $query")
        assetF2FinderService.getAssetStats(query.projectId)
    }
}
