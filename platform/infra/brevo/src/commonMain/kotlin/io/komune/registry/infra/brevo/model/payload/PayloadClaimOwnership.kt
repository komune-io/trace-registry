package io.komune.registry.infra.brevo.model.payload

data class PayloadClaimOwnership(
    val firstName: String,
    val lastName: String,
    val email: String,
    val organizationName: String,
    val catalogueUrl: String,
    val catalogueTitle: String
)
