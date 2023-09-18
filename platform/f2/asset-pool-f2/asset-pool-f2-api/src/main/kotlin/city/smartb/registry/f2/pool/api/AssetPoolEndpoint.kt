package city.smartb.registry.f2.pool.api

import city.smartb.fs.s2.file.client.FileClient
import city.smartb.fs.spring.utils.serveFile
import city.smartb.registry.api.commons.utils.anyNotNull
import city.smartb.registry.f2.pool.api.service.AssetPoolF2AggregateService
import city.smartb.registry.f2.pool.api.service.AssetPoolF2FinderService
import city.smartb.registry.f2.pool.api.service.AssetPoolPoliciesEnforcer
import city.smartb.registry.f2.pool.api.service.AssetTransactionF2FinderService
import city.smartb.registry.f2.pool.domain.query.AssetPoolGetResultDTOBase
import city.smartb.registry.f2.pool.domain.query.AssetPoolPageFunction
import city.smartb.registry.f2.pool.domain.query.AssetPoolPageResult
import city.smartb.registry.f2.pool.domain.query.AssetTransactionGetFunction
import city.smartb.registry.f2.pool.domain.query.AssetTransactionGetResult
import city.smartb.registry.f2.pool.domain.query.AssetTransactionPageFunction
import city.smartb.registry.f2.pool.domain.query.AssetTransactionPageResultDTOBase
import city.smartb.registry.s2.asset.domain.automate.AssetPoolState
import city.smartb.registry.s2.asset.domain.automate.AssetTransactionId
import city.smartb.registry.s2.asset.domain.model.AssetTransactionType
import f2.dsl.cqrs.filter.ExactMatch
import f2.dsl.cqrs.filter.StringMatch
import f2.dsl.cqrs.filter.StringMatchCondition
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.fnc.f2Function
import jakarta.annotation.security.PermitAll
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.core.io.InputStreamResource
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.http.server.reactive.ServerHttpResponse
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import s2.spring.utils.logger.Logger

@Configuration
@RestController
class AssetPoolEndpoint(
    private val assetPoolF2AggregateService: AssetPoolF2AggregateService,
    private val assetPoolF2FinderService: AssetPoolF2FinderService,
    private val assetTransactionF2FinderService: AssetTransactionF2FinderService,
    private val fileClient: FileClient,
    private val assetPoolPoliciesEnforcer: AssetPoolPoliciesEnforcer,

    ): city.smartb.registry.f2.pool.domain.AssetPoolApi {
    private val logger by Logger()

    @Bean
    override fun assetPoolGet(): city.smartb.registry.f2.pool.domain.query.AssetPoolGetFunction = f2Function { query ->
        logger.info("assetPoolGet: $query")
        assetPoolF2FinderService.getOrNull(query.id).let(::AssetPoolGetResultDTOBase)
    }

    @Bean
    override fun assetPoolPage(): AssetPoolPageFunction = f2Function { query ->
        logger.info("projectPage: $query")
        assetPoolPoliciesEnforcer.checkList()
        val pagination = OffsetPagination(
            offset = query.offset ?: 0,
            limit = query.limit ?: 10,
        )

        assetPoolF2FinderService.page(
            status = query.status?.let { ExactMatch(AssetPoolState.valueOf(it)) },
            vintage = query.vintage?.ifEmpty { null }?.let { StringMatch(it, StringMatchCondition.CONTAINS) },
            offset = pagination
        ).let { page ->
            AssetPoolPageResult(
                items = page.items,
                total = page.total,
                pagination = pagination
            )
        }
    }

    @Bean
    override fun assetPoolCreate(): city.smartb.registry.f2.pool.domain.command.AssetPoolCreateFunction = f2Function { command ->
        logger.info("assetPoolCreate: $command")
        assetPoolPoliciesEnforcer.checkCreate()
        assetPoolF2AggregateService.create(command)
            .let { city.smartb.registry.f2.pool.domain.command.AssetPoolCreatedEventDTOBase(it.id) }
    }

    @Bean
    override fun assetPoolHold(): city.smartb.registry.f2.pool.domain.command.AssetPoolHoldFunction = f2Function { command ->
        logger.info("assetPoolHold: $command")
        assetPoolPoliciesEnforcer.checkHold(command.id)
        assetPoolF2AggregateService.hold(command)
            .let { city.smartb.registry.f2.pool.domain.command.AssetPoolHeldEventDTOBase(it.id) }
    }

    @Bean
    override fun assetPoolResume(): city.smartb.registry.f2.pool.domain.command.AssetPoolResumeFunction = f2Function { command ->
        logger.info("assetPoolResume: $command")
        assetPoolPoliciesEnforcer.checkResume(command.id)
        assetPoolF2AggregateService.resume(command)
            .let { city.smartb.registry.f2.pool.domain.command.AssetPoolResumedEventDTOBase(it.id) }
    }

    @Bean
    override fun assetPoolClose(): city.smartb.registry.f2.pool.domain.command.AssetPoolCloseFunction = f2Function { command ->
        logger.info("assetPoolClose: $command")
        assetPoolPoliciesEnforcer.checkClose(command.id)
        assetPoolF2AggregateService.close(command)
            .let { city.smartb.registry.f2.pool.domain.command.AssetPoolClosedEventDTOBase(it.id) }
    }

    @Bean
    override fun assetIssue(): city.smartb.registry.f2.pool.domain.command.AssetIssueFunction = f2Function { command ->
        logger.info("assetIssue: $command")
        assetPoolPoliciesEnforcer.checkIssue()
        assetPoolF2AggregateService.issue(command)
            .let {
                city.smartb.registry.f2.pool.domain.command.AssetIssuedEventDTOBase(
                    id = it.id,
                    transactionId = it.transactionId
                )
            }
    }

    @Bean
    override fun assetTransfer(): city.smartb.registry.f2.pool.domain.command.AssetTransferFunction = f2Function { command ->
        logger.info("assetTransfer: $command")
        assetPoolPoliciesEnforcer.checkTransfer()
        assetPoolF2AggregateService.transfer(command)
            .let { city.smartb.registry.f2.pool.domain.command.AssetTransferredEventDTOBase(it.id) }
    }

    @Bean
    override fun assetOffset(): city.smartb.registry.f2.pool.domain.command.AssetOffsetFunction = f2Function { command ->
        logger.info("assetOffset: $command")
        assetPoolPoliciesEnforcer.checkOffset()
        assetPoolF2AggregateService.offset(command)
            .let { city.smartb.registry.f2.pool.domain.command.AssetOffsettedEventDTOBase(it.id) }
    }

    @Bean
    override fun assetRetire(): city.smartb.registry.f2.pool.domain.command.AssetRetireFunction = f2Function { command ->
        logger.info("assetRetire: $command")
        assetPoolPoliciesEnforcer.checkRetire()
        assetPoolF2AggregateService.retire(command)
            .let { city.smartb.registry.f2.pool.domain.command.AssetRetiredEventDTOBase(it.id) }
    }

    @PermitAll
    @Bean
    override fun assetTransactionPage(): AssetTransactionPageFunction = f2Function { query ->
        logger.info("assetTransactionPage: $query")
        assetTransactionF2FinderService.page(
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
    @PermitAll
    override fun assetTransactionGet(): AssetTransactionGetFunction = f2Function { query ->
        logger.info("assetTransactionGet: $query")
        assetTransactionF2FinderService.getTransaction(query.transactionId).let(::AssetTransactionGetResult)
    }

    @Bean
    @PermitAll
    override fun assetStatsGet(): city.smartb.registry.f2.pool.domain.query.AssetStatsGetFunction = f2Function { query ->
        logger.info("assetStatsGet: $query")
        assetTransactionF2FinderService.getAssetStats(query.projectId)
    }

//    @PermitAll
//    @PostMapping("/assetCertificateDownload")
//    suspend fun assetCertificateDownload(
//        @RequestBody query: AssetCertificateDownloadQuery,
//        response: ServerHttpResponse
//    ): ResponseEntity<InputStreamResource> {
//        logger.info("assetCertificateDownload: $query")
//        val stream = assetCertificationF2FinderService.assetCertificateDownload(query.transactionId, response)
//        return ResponseEntity.ok()
//            .body(InputStreamResource(stream))
//    }
//
//    @PermitAll
//    @GetMapping("/assetCertificateDownload")
//    suspend fun assetCertificateDownload(
//        @RequestParam transactionId: AssetTransactionId,
//        response: ServerHttpResponse
//    ): ResponseEntity<InputStreamResource> {
//        logger.info("assetCertificateDownload: $transactionId")
//        val stream = assetCertificationF2FinderService.assetCertificateDownload(transactionId, response)
//        return ResponseEntity.ok()
//            .body(InputStreamResource(stream))
//    }

    @PermitAll
    @PostMapping("/assetCertificateDownload")
    suspend fun assetCertificateDownload(
        @RequestBody query: city.smartb.registry.f2.pool.domain.query.AssetCertificateDownloadQuery,
        response: ServerHttpResponse
    ): ResponseEntity<InputStreamResource> = serveFile(fileClient) {
        logger.info("assetCertificateDownload: $query")
        assetTransactionF2FinderService.getTransaction(query.transactionId).file
    }

    @PermitAll
    @GetMapping("/assetCertificateDownload", produces = [MediaType.APPLICATION_OCTET_STREAM_VALUE])
    suspend fun assetCertificateDownload(
        @RequestParam transactionId: AssetTransactionId,
        response: ServerHttpResponse
    ): ResponseEntity<InputStreamResource> = serveFile(fileClient) {
        logger.info("assetCertificateDownload: $transactionId")
        assetTransactionF2FinderService.getTransaction(transactionId).file
    }

}
