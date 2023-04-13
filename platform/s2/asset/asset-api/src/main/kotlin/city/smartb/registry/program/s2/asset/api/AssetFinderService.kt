package city.smartb.registry.program.s2.asset.api

import city.smartb.registry.program.api.commons.exception.NotFoundException
import city.smartb.registry.program.s2.asset.api.entity.AssetEntity
import city.smartb.registry.program.s2.asset.api.entity.AssetRepository
import city.smartb.registry.program.s2.asset.api.entity.toAsset
import city.smartb.registry.program.s2.asset.api.query.AssetPageQueryDB
import city.smartb.registry.program.s2.asset.domain.AssetFinder
import city.smartb.registry.program.s2.asset.domain.model.Asset
import city.smartb.registry.program.s2.asset.domain.model.AssetId
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import f2.dsl.cqrs.page.map
import org.springframework.stereotype.Service

@Service
class AssetFinderService(
	private val assetPageQueryDB: AssetPageQueryDB,
	private val assetRepository: AssetRepository
): AssetFinder {
	override suspend fun getOrNull(id: AssetId): Asset? {
		return assetRepository.findById(id).orElse(null)?.toAsset()
	}

	override suspend fun get(id: AssetId): Asset {
		return getOrNull(id) ?: throw NotFoundException("Asset", id)
	}

	override suspend fun page(
		id: Match<AssetId>?,
		offset: OffsetPagination?
	): PageDTO<Asset> {
		return assetPageQueryDB.execute(
			id = id,
			offset = offset
		).map(AssetEntity::toAsset)
	}
}
