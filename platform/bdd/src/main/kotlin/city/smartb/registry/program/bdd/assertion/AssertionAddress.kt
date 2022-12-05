package city.smartb.registry.program.bdd.assertion

import city.smartb.im.commons.model.AddressDTO
import city.smartb.registry.program.bdd.data.TestContext
import org.assertj.core.api.Assertions

fun AssertionBdd.address(context: TestContext? = null) = AssertionAddress(context)

class AssertionAddress(
    private val context: TestContext?
) {
    fun assertThat(address: AddressDTO?) = AddressAssert(address)

    inner class AddressAssert(
        private val address: AddressDTO?
    ) {
        fun hasFields(
            city: String = address?.city ?: "",
            postalCode: String = address?.postalCode ?: "",
            street: String = address?.street ?: "",
        ) = also {
            Assertions.assertThat(address?.city).isEqualTo(city)
            Assertions.assertThat(address?.postalCode).isEqualTo(postalCode)
            Assertions.assertThat(address?.street).isEqualTo(street)
        }

        fun matches(address: AddressDTO?) = also {
            if (address == null) {
                Assertions.assertThat(this.address).isNull()
            } else {
                hasFields(
                    city = address.city,
                    postalCode = address.postalCode,
                    street = address.street,
                )
            }
        }
    }
}
