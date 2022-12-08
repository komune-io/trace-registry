package city.smartb.registry.program.s2.asset.api.entity

import city.smartb.registry.program.s2.asset.domain.command.AssetUpdateCommand
import city.smartb.registry.program.s2.asset.domain.model.Asset


fun AssetUpdateCommand.toEntity() = applyToEntity(AssetEntity())
fun AssetUpdateCommand.applyToEntity(entity: AssetEntity): AssetEntity = let {
    entity.id = this.id
    entity.status = this.status

    entity.activity = this.activity
    entity.protocol = this.protocol
    entity.project = this.project
    entity.issuanceDate = this.issuanceDate
    entity.vintageStart = this.vintageStart
    entity.vintageEnd = this.vintageEnd
    entity.totalVintageQuantity = this.totalVintageQuantity
    entity.creditStatus = this.creditStatus
    entity.creditsIssuedToBufferPool = this.creditsIssuedToBufferPool
    entity.quantityIssued = this.quantityIssued
    entity.serialNumber = this.serialNumber
    entity.verifiedRemoval = this.verifiedRemoval
    entity.retirementDate = this.retirementDate
    entity.retirementBeneficiary = this.retirementBeneficiary
    entity.retirementDetails = this.retirementDetails
    entity.retirementReason = this.retirementReason
    entity.exPostUnitPrice = this.exPostUnitPrice
    entity.exAnteUnitPrice = this.exAnteUnitPrice
    entity.slug = this.slug
    entity.additionalCertifications = this.additionalCertifications
    entity.arbEligible = this.arbEligible
    entity.eligibleForCORSIA = this.eligibleForCORSIA
    entity.retiredForCORSIA = this.retiredForCORSIA
    entity.aeroplaneOperatorName = this.aeroplaneOperatorName

    entity
}
fun AssetEntity.toAsset(): Asset = let { entity ->
    Asset(
        id = entity.id,

        activity = entity.activity,
        protocol = entity.protocol,
        project = entity.project,
        issuanceDate = entity.issuanceDate,
        vintageStart = entity.vintageStart,
        vintageEnd = entity.vintageEnd,
        totalVintageQuantity = entity.totalVintageQuantity,
        creditStatus = entity.creditStatus,
        creditsIssuedToBufferPool = entity.creditsIssuedToBufferPool,
        quantityIssued = entity.quantityIssued,
        serialNumber = entity.serialNumber,
        verifiedRemoval = entity.verifiedRemoval,
        retirementDate = entity.retirementDate,
        retirementBeneficiary = entity.retirementBeneficiary,
        retirementDetails = entity.retirementDetails,
        retirementReason = entity.retirementReason,
        exPostUnitPrice = entity.exPostUnitPrice,
        exAnteUnitPrice = entity.exAnteUnitPrice,
        slug = entity.slug,
        additionalCertifications = entity.additionalCertifications,
        arbEligible = entity.arbEligible,
        eligibleForCORSIA = entity.eligibleForCORSIA,
        retiredForCORSIA = entity.retiredForCORSIA,
        aeroplaneOperatorName = entity.aeroplaneOperatorName,
        status = entity.status,
        creationDate = null,
        lastModificationDate = null
//        creationDate = entity.createdDate!!.time,
//        lastModificationDate = entity.lastModifiedDate!!.time
    )
}
