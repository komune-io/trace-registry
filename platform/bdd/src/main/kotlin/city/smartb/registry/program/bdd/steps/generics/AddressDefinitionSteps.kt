package city.smartb.registry.program.bdd.steps.generics

import city.smartb.im.commons.model.Address
import city.smartb.registry.program.bdd.CucumberStepsDefinition
import city.smartb.registry.program.bdd.data.TestContextKey
import io.cucumber.datatable.DataTable
import io.cucumber.java8.En

class AddressDefinitionSteps: En, CucumberStepsDefinition() {
    init {
        DataTableType(::addressDefineParams)

        Given("An address is defined") {
            step {
                defineAddress(addressDefineParams(null))
            }
        }

        Given("An address is defined:") { params: AddressDefineParams ->
            step {
                defineAddress(params)
            }
        }

        Given("Some addresses are defined:") { dataTable: DataTable ->
            step {
                dataTable.asList(AddressDefineParams::class.java)
                    .forEach(::defineAddress)
            }
        }
    }

    private fun defineAddress(params: AddressDefineParams) = context.addresses.register(params.identifier) {
        Address(
            city = params.city,
            postalCode = params.postalCode,
            street = params.street
        )
    }

    private fun addressDefineParams(entry: Map<String, String>?) = AddressDefineParams(
        identifier = entry?.get("identifier").orRandom(),
        city = entry?.get("city").orRandom(),
        postalCode = entry?.get("postalCode").orRandom(),
        street = entry?.get("street").orRandom()
    )

    private data class AddressDefineParams(
        val identifier: TestContextKey,
        val city: String,
        val postalCode: String,
        val street: String
    )
}
