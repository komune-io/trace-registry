package cccev.test.config

import au.com.origin.snapshots.jackson.serializers.v1.JacksonSnapshotSerializer
import com.fasterxml.jackson.annotation.JsonIgnore
import com.fasterxml.jackson.databind.ObjectMapper

class SnapshotJacksonSerializer: JacksonSnapshotSerializer() {
    override fun configure(objectMapper: ObjectMapper) {
        super.configure(objectMapper)

        objectMapper.addMixIn(Any::class.java, IgnoreChangingFields::class.java)
    }

    interface IgnoreChangingFields {
        @get:JsonIgnore
        val id: String?

        @get:JsonIgnore
        val identifier: String?

        @get:JsonIgnore
        val creationDate: Long?

        @get:JsonIgnore
        val lastModificationDate: Long?

        @get:JsonIgnore
        val version: Long?
    }
}
