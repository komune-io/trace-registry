package io.komune.registry.f2.user.api.model

// TODO should come from IM but doesn't seem to be published ATM
data class KeycloakHttpEvent(
    val id: String,
    val time: Long,
    val type: String, // EventType
    val realmId: String,
    val clientId: String,
    val userId: String?,
    val sessionId: String?,
    val error: String?,
    val details: Map<String, String>?
) {
    fun isVerifyEmail() = type == "VERIFY_EMAIL"
        || type == "CUSTOM_REQUIRED_ACTION" && details?.get("custom_required_action") == "VERIFY_EMAIL"
}
