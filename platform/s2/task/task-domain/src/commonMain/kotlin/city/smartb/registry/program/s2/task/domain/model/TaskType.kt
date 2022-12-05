package city.smartb.registry.program.s2.task.domain.model

enum class TaskType {
    CATALOG,
    ONBOARDING,
    QUOTATION,

    META_PROJECT,

    @Deprecated("Use ONBOARDING instead")
    RNC_PROOF,
    @Deprecated("Use ONBOARDING instead")
    KBIS;

    companion object {
        fun metaTasks() = listOf(META_PROJECT)
    }
}
