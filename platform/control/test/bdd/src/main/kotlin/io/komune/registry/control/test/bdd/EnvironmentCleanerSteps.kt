package io.komune.registry.control.test.bdd

import io.cucumber.java8.En
import io.komune.registry.s2.asset.api.entity.pool.AssetPoolRepository
import io.komune.registry.s2.asset.api.entity.transaction.AssetTransactionRepository
import io.komune.registry.s2.project.api.entity.ProjectRepository
import kotlinx.coroutines.runBlocking
import s2.bdd.data.TestContext

class EnvironmentCleanerSteps(
    private val context: TestContext,
    private val projectRepository: ProjectRepository,
    private val assetPoolRepository: AssetPoolRepository,
    private val assetTransactionRepository: AssetTransactionRepository
): En {
    init {
        Before { _ ->
            context.reset()
            cleanDb()
        }
    }
    private fun cleanDb() = runBlocking {
        projectRepository.deleteAll()
        assetPoolRepository.deleteAll()
        assetTransactionRepository.deleteAll()
    }
}
