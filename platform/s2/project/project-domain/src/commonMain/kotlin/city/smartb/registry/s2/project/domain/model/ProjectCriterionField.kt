package city.smartb.registry.s2.project.domain.model

import city.smartb.registry.s2.commons.model.CriterionField

sealed interface ProjectCriterionField<out T>: CriterionField<T> {
    object Id: ProjectCriterionField<ProjectId>
    object Name: ProjectCriterionField<String>
    object Private: ProjectCriterionField<Boolean>
    object ProponentId: ProjectCriterionField<String>
}
