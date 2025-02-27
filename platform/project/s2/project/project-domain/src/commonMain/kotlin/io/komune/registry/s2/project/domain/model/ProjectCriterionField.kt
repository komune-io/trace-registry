package io.komune.registry.s2.project.domain.model

import io.komune.registry.s2.commons.model.CriterionField

sealed interface ProjectCriterionField<out T>: CriterionField<T> {
    data object Id: ProjectCriterionField<ProjectId>
    data object Name: ProjectCriterionField<String>
    data object Private: ProjectCriterionField<Boolean>
    data object ProponentId: ProjectCriterionField<String>
}
