package io.komune.registry.s2.project.domain.model

import io.komune.registry.s2.commons.model.CriterionField

sealed interface ProjectCriterionField<out T>: CriterionField<T> {
    object Id: ProjectCriterionField<ProjectId>
    object Name: ProjectCriterionField<String>
    object Private: ProjectCriterionField<Boolean>
    object ProponentId: ProjectCriterionField<String>
}
