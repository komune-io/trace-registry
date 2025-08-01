package cccev.dsl.model

import kotlinx.serialization.Serializable

@Serializable
open class ReferenceFramework(
	val identifier: String,
	val name: String
) {
	override fun toString(): String {
		return "ReferenceFramework(identifier='$identifier')"
	}

	override fun equals(other: Any?): Boolean {
		if (this === other) return true
		if (other == null || this::class != other::class) return false

		other as ReferenceFramework

		if (identifier != other.identifier) return false

		return true
	}

	override fun hashCode(): Int {
		return identifier.hashCode()
	}


}
