package io.komune.registry.infra.brevo.model.payload

data class PayloadOnboardingOrganizationConflictOrchestrator(
    val firstName: String,
    val lastName: String,
    val email: String,
    val organizationName: String
)
