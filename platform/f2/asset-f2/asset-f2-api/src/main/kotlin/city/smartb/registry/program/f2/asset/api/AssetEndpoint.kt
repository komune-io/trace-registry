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
import city.smartb.registry.program.f2.asset.domain.command.AssetTransferFunction
import city.smartb.registry.program.f2.asset.domain.command.AssetTransferredEventDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetWithdrawFunction
import city.smartb.registry.program.f2.asset.domain.command.AssetWithdrawnEventDTOBase
import city.smartb.registry.program.f2.asset.domain.query.AssetTransactionPageFunction
import city.smartb.registry.program.f2.asset.domain.query.AssetTransactionPageResultDTOBase
import city.smartb.registry.program.s2.asset.domain.model.TransactionType
import f2.dsl.cqrs.filter.ExactMatch
import f2.dsl.cqrs.filter.StringMatch
import f2.dsl.cqrs.filter.StringMatchCondition
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.fnc.f2Function
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import s2.spring.utils.logger.Logger

@Configuration
class AssetEndpoint(
    private val assetF2AggregateService: AssetF2AggregateService,
    private val assetF2FinderService: AssetF2FinderService,
    private val assetPoliciesEnforcer: AssetPoliciesEnforcer
): AssetQueryApi, AssetCommandApi {
    private val logger by Logger()

    @Bean
    override fun assetTransactionPage(): AssetTransactionPageFunction = f2Function { query ->
        logger.info("assetTransactionPage: $query")
        assetF2FinderService.page(
            projectId = query.projectId?.let(::ExactMatch),
            transactionId = query.transactionId?.let { StringMatch(it, StringMatchCondition.CONTAINS) },
            type = query.type?.let { ExactMatch(TransactionType.valueOf(it)) },
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
        assetPoliciesEnforcer.checkIssue(command.poolId)
        assetF2AggregateService.issue(command)
            .let { AssetIssuedEventDTOBase(it.transactionId) }
    }

    @Bean
    override fun assetTransfer(): AssetTransferFunction = f2Function { command ->
        logger.info("assetTransfer: $command")
        assetPoliciesEnforcer.checkTransfer(command.poolId)
        assetF2AggregateService.transfer(command)
            .let { AssetTransferredEventDTOBase(it.transactionId) }
    }

    @Bean
    override fun assetOffset(): AssetOffsetFunction = f2Function { command ->
        logger.info("assetOffset: $command")
        assetPoliciesEnforcer.checkOffset(command.poolId)
        assetF2AggregateService.offset(command)
            .let { AssetOffsettedEventDTOBase(it.transactionId) }
    }

    @Bean
    override fun assetWithdraw(): AssetWithdrawFunction = f2Function { command ->
        logger.info("assetWithdraw: $command")
        assetPoliciesEnforcer.checkWithdraw(command.poolId)
        assetF2AggregateService.withdraw(command)
            .let { AssetWithdrawnEventDTOBase(it.transactionId) }
    }
}
