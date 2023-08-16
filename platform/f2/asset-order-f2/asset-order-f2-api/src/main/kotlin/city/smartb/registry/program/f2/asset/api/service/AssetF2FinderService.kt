package city.smartb.registry.program.f2.asset.api.service

import city.smartb.registry.program.f2.asset.api.model.toDTO
import city.smartb.registry.program.f2.asset.domain.model.OrderDTOBase
import city.smartb.registry.program.s2.order.api.OrderFinderService
import city.smartb.registry.program.s2.order.domain.OrderId
import org.springframework.stereotype.Service

@Service
class AssetF2FinderService(
    private val orderFinderService: OrderFinderService
) {

    suspend fun getOrder(id: OrderId): OrderDTOBase {
        return orderFinderService.get(id).toDTO()
    }

}
