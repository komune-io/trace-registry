package io.komune.registry.infra.brevo.config

import com.fasterxml.jackson.annotation.JsonProperty

data class BrevoContact(
    @JsonProperty("EMAIL")
    val email: String,
    @JsonProperty("PRENOM")
    val firstname: String,
    @JsonProperty("NOM")
    val lastname: String,
    @JsonProperty("ORGANISATION")
    val organization: String
)
