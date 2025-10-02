package io.komune.registry.script.update.model

import io.komune.registry.script.update.model.workflow.Workflow

data class Migration(
    val workflows: List<Workflow>
)
