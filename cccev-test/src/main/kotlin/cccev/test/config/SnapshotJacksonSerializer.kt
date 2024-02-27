package cccev.test.config

import au.com.origin.snapshots.jackson.serializers.v1.JacksonSnapshotSerializer
import com.fasterxml.jackson.annotation.JsonIgnore
import com.fasterxml.jackson.databind.ObjectMapper

class SnapshotJacksonSerializer: JacksonSnapshotSerializer() {
    override fun configure(objectMapper: ObjectMapper) {
        super.configure(objectMapper)

        objectMapper.addMixIn(Any::class.java, IgnoreChangingFields::class.java)
    }

    internal abstract class IgnoreChangingFields {
        @get:JsonIgnore
        abstract val id: String?

        @get:JsonIgnore
        abstract val identifier: String?

        @get:JsonIgnore
        abstract val creationDate: Long?

        @get:JsonIgnore
        abstract val lastModificationDate: Long?

        @get:JsonIgnore
        abstract val version: Long?
    }
}
