package io.komune.registry.script.update

import com.fasterxml.jackson.module.kotlin.readValue
import io.komune.registry.api.commons.utils.jsonMapper
import io.komune.registry.script.commons.RegistryScriptProperties
import io.komune.registry.script.update.executor.WorkflowExecutor
import io.komune.registry.script.update.executor.WorkflowExecutorDirectory
import io.komune.registry.script.update.model.Migration
import io.komune.registry.script.update.model.workflow.Workflow
import org.springframework.stereotype.Service
import s2.spring.utils.logger.Logger
import java.io.File

@Service
class UpdateScript(
    private val properties: RegistryScriptProperties
) {
    private val logger by Logger()

    suspend fun run() {
        val migrationFiles = properties.update.sources.map(::File)
        logger.info("Found ${migrationFiles.size} migration files.")
        migrationFiles.forEach { migrationFile ->
            if (!migrationFile.exists() || !migrationFile.isFile) {
                "Migration file ${migrationFile.path} does not exist or is not a file".let {
                    logger.error(it)
                    throw IllegalArgumentException(it)
                }
            }
            val migration = jsonMapper.readValue<Migration>(migrationFile)
            logger.info("Applying migration from file ${migrationFile.path}...")
            applyMigration(migration)
            logger.info("Migration from file ${migrationFile.path} applied.")
        }
    }

    private suspend fun applyMigration(migration: Migration) {
        checkWorkflows(migration.workflows)

        migration.workflows.forEach { workflow ->
            @Suppress("UNCHECKED_CAST")
            (WorkflowExecutorDirectory.get(workflow::class) as WorkflowExecutor<Workflow>).execute(workflow)
        }
    }

    private fun checkWorkflows(workflows: List<Workflow>) {
        // check that all workflows have an executor
        workflows.forEach { workflow ->
            WorkflowExecutorDirectory.get(workflow::class)
            checkWorkflows(workflow.operations)
        }
    }
}
