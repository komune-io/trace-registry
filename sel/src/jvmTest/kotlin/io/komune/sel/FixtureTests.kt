package io.komune.sel

import io.komune.registry.api.commons.utils.parseFile
import io.komune.registry.api.commons.utils.toJson
import org.assertj.core.api.Assertions
import org.junit.jupiter.api.Test
import java.nio.file.Files
import java.nio.file.Paths

class FixtureTests {

    companion object {
        private val classLoader = FixtureTests::class.java.classLoader
        private val selExecutor = SelExecutor()
        const val FIXTURE_DIR = "fixtures"

        const val FILTER = ""
    }

    @Test
    fun runAllFixtures() {
        val resource = classLoader.getResource(FIXTURE_DIR)
            ?: throw IllegalArgumentException("Resource folder not found")
        val fixtureDir = Paths.get(resource.toURI())
        val filePaths = Files.walk(fixtureDir)
            .filter { it.toString().endsWith(".json") }
            .map { "$FIXTURE_DIR/${fixtureDir.relativize(it).toString().replace("\\", "/")}" }
            .toList()

        val results = filePaths.flatMap { filePath ->
            runFixturesFile(filePath)
        }

        val (successes, failures) = results.partition { it.success }
        val color = if (failures.isEmpty()) "\u001B[32m" else "\u001B[31m"
        val report = StringBuilder()
        report.appendColoredLine(color, "╔════════════════════════════════════════════════════╗")
        report.appendColoredLine(color, "║                Fixtures Test Report                ║")
        report.appendColoredLine(color, "╚════════════════════════════════════════════════════╝")
        report.appendColoredLine(color, "--- Total: ${results.size}  Passed: ${successes.size}  Failed: ${failures.size} ---")

        if (failures.isNotEmpty()) {
            report.appendColoredLine(color, "╔════════════════════════════════════════════╗")
            report.appendColoredLine(color, "║                 Failures                   ║")
            report.appendColoredLine(color, "╚════════════════════════════════════════════╝")
            failures.groupBy { it.file }.forEach { (file, fileFailures) ->
                report.appendColoredLine(color, "File: $file")
                fileFailures.forEach { failure ->
                    report.appendColoredLine(color, "- ${failure.name}: ${failure.error ?: "No error message"} (exception: ${failure.cause})")
                }
//                failures.forEach { failure ->
//                    report.appendColoredLine(color, "- ${failure.name}: ${failure.error ?: "No error message"}")
//                }
            }
        } else {
            report.appendColoredLine(color, "All fixtures passed successfully!")
        }
        println(report.toString())

        if (failures.isNotEmpty()) {
            Assertions.fail<Any>("Some fixtures failed. See report above.")
        }
    }

    private fun runFixturesFile(path: String): List<FixtureResult> {
        return parseFile<Array<Fixture>>(path).mapNotNull { fixture ->
            if (FILTER !in fixture.name) {
                return@mapNotNull null
            }

            if (fixture.errorJsonPath == null) {
                try {
                    val expectedJson = fixture.expected.toJson()
                    val resultJson = selExecutor.evaluate(fixture.expression.toJson(), fixture.data.toJson()).toJson()
                    val success = expectedJson == resultJson
                    FixtureResult(
                        name = fixture.name,
                        file = path,
                        success = success,
                        error = "Found: [${resultJson}], expected: [$expectedJson]".takeUnless { success }
                    )
                } catch (e: SelException) {
                    FixtureResult(
                        name = fixture.name,
                        file = path,
                        success = false,
                        error = "Unexpected exception: ${e.message}",
                        cause = e
                    )
                }
            } else {
                try {
                    selExecutor.evaluate(fixture.expression.toJson(), fixture.data.toJson())
                    FixtureResult(
                        name = fixture.name,
                        file = path,
                        success = false,
                        error = "Expected exception with path '${fixture.errorJsonPath}', but no exception was thrown."
                    )
                } catch (e: SelException) {
                    val success = e.jsonPath == fixture.errorJsonPath
                    FixtureResult(
                        name = fixture.name,
                        file = path,
                        success = success,
                        error = "Expected exception with path '${fixture.errorJsonPath}'. Found: '${e.jsonPath}'".takeUnless { success },
                        cause = e
                    )
                } catch (e: Exception) {
                    FixtureResult(
                        name = fixture.name,
                        file = path,
                        success = false,
                        error = "Unexpected exception: ${e.message}",
                        cause = e
                    )
                }
            }
        }
    }

    private fun StringBuilder.appendColoredLine(color: String, line: String) {
        append(color)
        appendLine(line)
        append("\u001B[0m") // Reset color
    }
}
