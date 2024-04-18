package io.komune.registry.ver.test.config

import au.com.origin.snapshots.jackson.serializers.v1.DeterministicJacksonSnapshotSerializer
import com.fasterxml.jackson.annotation.JsonIgnore
import com.fasterxml.jackson.databind.ObjectMapper

class CustomJacksonSerializer: DeterministicJacksonSnapshotSerializer() {
    override fun configure(objectMapper: ObjectMapper) {
        super.configure(objectMapper)

        objectMapper.addMixIn(Any::class.java, IgnoreIdFields::class.java)
    }

    internal abstract class IgnoreIdFields {
        @get:JsonIgnore
        abstract val id: String?

        @get:JsonIgnore
        abstract val identifier: String?
    }
}
