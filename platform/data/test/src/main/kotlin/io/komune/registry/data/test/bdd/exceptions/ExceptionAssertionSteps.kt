package io.komune.registry.data.test.bdd.exceptions

import f2.spring.exception.ConflictException
import f2.spring.exception.ForbiddenAccessException
import f2.spring.exception.MessageConverterException
import f2.spring.exception.NotFoundException
import io.cucumber.java8.En
import io.komune.registry.s2.commons.exception.ExceptionCodes
import io.komune.registry.s2.asset.api.exception.GranularityTooSmallException
import io.komune.registry.s2.asset.api.exception.NegativeTransactionException
import io.komune.registry.s2.asset.api.exception.NotEnoughAssetsException
import s2.bdd.S2CucumberStepsDefinition
import s2.bdd.assertion.AssertionBdd
import s2.bdd.assertion.exceptions
import s2.bdd.data.parser.safeExtract

class ExceptionAssertionSteps: En, S2CucumberStepsDefinition()  {
    init {
        DataTableType(::exceptionAssertionParams)

        Then("An exception should be thrown:") { params: ExceptionAssertionParams ->
            step {
                AssertionBdd.exceptions(context)
                    .assertThat(params.code.toExceptionClass())
                    .hasBeenThrown(params.times)
            }
        }

        Then("No exception should be thrown:") { params: ExceptionAssertionParams ->
            step {
                AssertionBdd.exceptions(context)
                    .assertThat(params.code.toExceptionClass())
                    .hasNotBeenThrown()
            }
        }
    }

    private fun Int.toExceptionClass() = when (this) {
        400 -> MessageConverterException::class
        403 -> ForbiddenAccessException::class
        404 -> NotFoundException::class
        409 -> ConflictException::class
        ExceptionCodes.negativeTransaction() -> NegativeTransactionException::class
        ExceptionCodes.notEnoughAssets() -> NotEnoughAssetsException::class
        ExceptionCodes.granularityTooSmall() -> GranularityTooSmallException::class
        else -> throw IllegalArgumentException("Unknown exception code [$this]")
    }

    private fun exceptionAssertionParams(entry: Map<String, String>) = ExceptionAssertionParams(
        code = entry.safeExtract<Int>("code"),
        times = entry["times"]?.toInt() ?: 1
    )

    private data class ExceptionAssertionParams(
        val code: Int,
        val times: Int
    )
}
