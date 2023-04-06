import city.smartb.registry.program.f2.activity.domain.command.ActivityCreateFunction
import city.smartb.registry.program.f2.activity.domain.command.ActivityStepCreateFunction
import city.smartb.registry.program.f2.activity.domain.command.ActivityStepFulfillFunction
interface ActivityCommandApi {
    /**
     * Create an Activity
     */
    fun activityCreate(): ActivityCreateFunction

    /**
     * Create an Activity task
     */
    fun activityStepCreate(): ActivityStepCreateFunction

    /**
     * Update Activity
     */
    fun activityFulfillTask(): ActivityStepFulfillFunction
////    fun activityDelete(): ActivityDeleteFunction
}
